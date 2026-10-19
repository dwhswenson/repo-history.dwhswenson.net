"""Offline configuration, orchestration, and report presentation checks."""

import contextlib
import io
import json
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from PIL import Image

from scripts import add_repo, refresh_combos as script, social_cards
from scripts.combo_config import load_combos
from scripts.report_pages import page


class ComboConfigTests(unittest.TestCase):
    def setUp(self):
        temporary = tempfile.TemporaryDirectory()
        self.addCleanup(temporary.cleanup)
        self.root = Path(temporary.name)
        self.config = self.root / "combos.yaml"

    def load(self, text):
        self.config.write_text(text)
        return load_combos(self.config)

    def test_cross_org_configuration_and_slug(self):
        combo, = self.load('''"  Across / Organizations!  ":
  repos: [first/one, second/two]
  index-display: 'Across (one + two)'
''')
        self.assertEqual(combo.display_name, "  Across / Organizations!  ")
        self.assertEqual(combo.repos, ("first/one", "second/two"))
        self.assertEqual(combo.index_display, "Across (one + two)")
        self.assertEqual(combo.slug, "across-organizations")
        self.assertEqual(self.load("{}"), [])

    def test_rejects_invalid_configurations(self):
        valid = "  repos: [owner/one, other/two]\n  index-display: Example\n"
        cases = [
            "", "[]", "[unterminated", "Example: []", "' ':\n" + valid,
            "123:\n" + valid, "Example:\n  repos: [owner/one, other/two]",
            "Example:\n  repos: [owner/one, other/two]\n  index-display: ' '",
            "Example:\n  repos: [owner/one, other/two]\n  index-display: 123",
            "Example:\n  repos: owner/one\n  index-display: Example",
            "Example:\n  repos: [owner/one]\n  index-display: Example",
            "Example:\n" + valid + "Example:\n" + valid,
            "Example:\n" + valid + "  index-display: Duplicate",
            "Example:\n" + valid + "' Example ':\n" + valid,
            "Same name:\n" + valid + "Same-name:\n" + valid,
            "'!!!':\n" + valid,
        ]
        for repo in (
            "owner/one", "OWNER/ONE", "../escape", "owner/..", "owner/.",
            "owner/nested/repo", "/owner/repo", "owner/repo?", "combos/example", 123,
        ):
            cases.append(
                f"Example:\n  repos: [owner/one, {repo}]\n  index-display: Example"
            )
        for text in cases:
            with self.subTest(text=text), self.assertRaises(ValueError):
                self.load(text)


class RefreshCombosTests(unittest.TestCase):
    def setUp(self):
        temporary = tempfile.TemporaryDirectory()
        self.addCleanup(temporary.cleanup)
        self.site = Path(temporary.name) / "site"
        self.site.mkdir()
        self.config = self.site.parent / "combos.yaml"
        self.config.write_text('''Across orgs:
  repos: [first/one, second/two]
  index-display: Across (one + two)
''')
        for repo in ("first/one", "second/two"):
            directory = self.site / repo
            directory.mkdir(parents=True)
            (directory / "manifest.json").write_text("{}")
            (directory / "index.html").write_text("repository")
        self.output = self.site / "combos/across-orgs"

    def test_cli_inputs_and_page_generation(self):
        def combine(command, *, check):
            self.assertTrue(check)
            self.assertEqual(command, [
                sys.executable, "-m", "repo_history", "combine-manifests",
                str(self.site / "first/one/manifest.json"),
                str(self.site / "second/two/manifest.json"),
                "--output", str(self.output / "manifest.json"),
                "--display-name", "Across orgs",
            ])
            self.output.mkdir(parents=True)
            (self.output / "manifest.json").write_text("{}")

        with patch.object(script.subprocess, "run", side_effect=combine), \
             patch.object(script, "write_social_card") as card, \
             patch.object(script, "refresh_index") as index:
            script.refresh_combos(self.site, self.config)
        card.assert_called_once_with("Across orgs", self.output)
        index.assert_called_once_with(self.site, self.config)
        output = (self.output / "index.html").read_text()
        self.assertIn("<title>Across orgs · Repository history</title>", output)
        self.assertIn('/combos/across-orgs/social-card.png', output)
        self.assertNotIn("Across (one + two)", output)

    def test_all_deployments_are_checked_before_running_commands(self):
        self.config.write_text(self.config.read_text() + '''Missing:
  repos: [first/one, third/missing]
  index-display: Missing
''')
        with patch.object(script.subprocess, "run") as command:
            with self.assertRaisesRegex(ValueError, "deployed repository"):
                script.refresh_combos(self.site, self.config)
        command.assert_not_called()
        self.assertFalse(self.output.exists())

    def test_missing_page_or_manifest_is_an_error(self):
        for filename in ("index.html", "manifest.json"):
            path = self.site / "first/one" / filename
            original = path.read_text()
            path.unlink()
            with self.subTest(filename=filename), \
                 patch.object(script.subprocess, "run") as command:
                with self.assertRaisesRegex(ValueError, filename):
                    script.refresh_combos(self.site, self.config)
                command.assert_not_called()
            path.write_text(original)

    def test_failed_command_preserves_existing_page_and_skips_followup(self):
        self.output.mkdir(parents=True)
        index = self.output / "index.html"
        index.write_text("previous page")
        error = subprocess.CalledProcessError(2, ["combine-manifests"])
        with patch.object(script.subprocess, "run", side_effect=error), \
             patch.object(script, "write_social_card") as card, \
             patch.object(script, "refresh_index") as refresh:
            with self.assertRaises(subprocess.CalledProcessError):
                script.refresh_combos(self.site, self.config)
        self.assertEqual(index.read_text(), "previous page")
        card.assert_not_called()
        refresh.assert_not_called()

    def test_main_propagates_command_failure_and_reports_validation_failure(self):
        with patch.object(script, "refresh_combos", side_effect=subprocess.CalledProcessError(2, [])):
            self.assertEqual(script.main(), 2)
        with patch.object(script, "refresh_combos", side_effect=ValueError("invalid config")), \
             contextlib.redirect_stderr(io.StringIO()) as errors:
            self.assertEqual(script.main(), 1)
        self.assertIn("refresh-combos: invalid config", errors.getvalue())


class ReportPresentationTests(unittest.TestCase):
    def test_page_metadata_uses_display_name_and_separate_path(self):
        output = page('Tools & "friends"', "combos/tools-friends")
        self.assertIn("<title>Tools &amp; &quot;friends&quot; · Repository history</title>", output)
        self.assertIn('href="https://repo-history.dwhswenson.net/combos/tools-friends/"', output)
        self.assertIn('content="Tools &amp; &quot;friends&quot; · Repository history"', output)
        self.assertIn('manifest="./manifest.json"', output)
        self.assertIn('src="/assets/repo-history-viz.mjs"', output)

    def test_individual_repository_page_still_uses_repository_url(self):
        output = add_repo.page("owner/repo")
        self.assertIn("<title>owner/repo · Repository history</title>", output)
        self.assertIn("https://repo-history.dwhswenson.net/owner/repo/", output)

    def test_refresh_uses_manifest_title_and_preserves_page_body(self):
        with tempfile.TemporaryDirectory() as temporary:
            site = Path(temporary)
            directory = site / "combos/tools-friends"
            directory.mkdir(parents=True)
            # Small synthetic manifest exercises real multi-repository card rendering.
            manifest = {
                "display_name": "Tools & friends",
                "repositories": [{"full_name": "one/repo"}, {"full_name": "two/repo"}],
                "actors": {"shared": "human"},
                "months": [{
                    "metadata": {"month": "2024-01", "ongoing": False},
                    "summaries": {
                        "repository_counts": {"commit": 5},
                        "actor_counts": {"shared": {"commit": 5, "issue": 2}},
                        "unattributed_by_type": {"issue": 1},
                    },
                }],
            }
            (directory / "manifest.json").write_text(json.dumps(manifest))
            index = directory / "index.html"
            index.write_text(page("Tools & friends", "combos/tools-friends"))
            body = index.read_text().split("  <body>")[1]
            with patch.object(social_cards.ImageDraw.ImageDraw, "text", autospec=True) as draw_text:
                social_cards.refresh_existing_pages(site)
            drawn = [call.args[2] for call in draw_text.call_args_list]
            self.assertIn("Tools & friends", drawn)
            self.assertIn("COMBINED REPOSITORIES", drawn)
            self.assertIn("3 GitHub activities  /  1 total contributors", drawn)
            with Image.open(directory / "social-card.png") as card:
                self.assertEqual(card.size, (1200, 630))
            output = index.read_text()
            self.assertEqual(output.split("  <body>")[1], body)
            self.assertIn('content="Tools &amp; friends · Repository history"', output)
            self.assertIn("/combos/tools-friends/social-card.png", output)
            self.assertNotIn("combos/tools-friends · Repository history", output)
            with patch.object(social_cards, "write_social_card"):
                social_cards.refresh_existing_pages(site)
            self.assertEqual(index.read_text(), output)


if __name__ == "__main__":
    unittest.main()
