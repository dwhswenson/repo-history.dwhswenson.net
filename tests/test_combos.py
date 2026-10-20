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


class AddRepoTests(unittest.TestCase):
    def test_collect_then_summarize_uses_default_summary_output(self):
        with tempfile.TemporaryDirectory() as temporary:
            site = Path(temporary)
            directory = site / "owner/repo"
            with patch.object(add_repo, "SITE", site), \
                 patch.object(add_repo.subprocess, "run") as command, \
                 patch.object(add_repo, "write_social_card") as card, \
                 patch.object(add_repo, "refresh_index") as refresh:
                self.assertEqual(add_repo.main(["owner/repo"]), 0)
            self.assertEqual(command.call_count, 2)
            self.assertEqual(command.call_args_list[0].args[0], [
                sys.executable, "-m", "repo_history", "collect", "owner/repo",
                "--output-directory", str(directory),
            ])
            self.assertEqual(command.call_args_list[1].args[0], [
                sys.executable, "-m", "repo_history", "summarize",
                "--input-directory", str(directory),
            ])
            self.assertTrue(all(call.kwargs == {"check": True} for call in command.call_args_list))
            card.assert_called_once_with("owner/repo", directory)
            refresh.assert_called_once_with(site)
            self.assertIn('summary="./summary.json"', (directory / "index.html").read_text())

    def test_failed_collection_stops_before_summarization_and_presentation(self):
        with tempfile.TemporaryDirectory() as temporary, \
             patch.object(add_repo, "SITE", Path(temporary)), \
             patch.object(add_repo.subprocess, "run", side_effect=subprocess.CalledProcessError(2, [])) as command, \
             patch.object(add_repo, "write_social_card") as card, \
             patch.object(add_repo, "refresh_index") as refresh:
            self.assertEqual(add_repo.main(["owner/repo"]), 2)
            command.assert_called_once()
            card.assert_not_called()
            refresh.assert_not_called()
            self.assertFalse((Path(temporary) / "owner/repo/index.html").exists())


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
            (directory / "summary.json").write_text("{}")
            (directory / "index.html").write_text("repository")
        self.output = self.site / "combos/across-orgs"

    def test_cli_inputs_and_page_generation(self):
        def combine(command, *, check):
            self.assertTrue(check)
            self.assertEqual(command, [
                sys.executable, "-m", "repo_history", "combine",
                str(self.site / "first/one/summary.json"),
                str(self.site / "second/two/summary.json"),
                "--output", str(self.output / "summary.json"),
                "--display-name", "Across orgs",
            ])
            self.output.mkdir(parents=True)
            (self.output / "summary.json").write_text("{}")

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

    def test_missing_page_or_summary_is_an_error(self):
        for filename in ("index.html", "summary.json"):
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
        error = subprocess.CalledProcessError(2, ["combine"])
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
        self.assertIn('summary="./summary.json"', output)
        self.assertIn('metrics="commits github-activities total-contributors"', output)
        self.assertIn('src="/assets/repo-history-viz.mjs"', output)

    def test_individual_repository_page_still_uses_repository_url(self):
        output = add_repo.page("owner/repo")
        self.assertIn("<title>owner/repo · Repository history</title>", output)
        self.assertIn("https://repo-history.dwhswenson.net/owner/repo/", output)

    def test_social_card_filters_and_partial_month(self):
        summary = {
            "actors": {"human": "human", "git": "unlinked_git", "bot": "bot"},
            "months": [{
                "metadata": {"month": "2024-01", "is_partial": True},
                "summaries": {
                    "repository_counts": {"commit": 10},
                    "actor_counts": {
                        "human": {"commit": 3, "pr_discussion_comment": 2},
                        "git": {"commit": 2, "pr_review_comment": 1},
                        "bot": {"commit": 5, "issue": 100},
                    },
                    "unattributed_by_type": {"commit": 20, "issue": 4},
                },
            }],
        }
        # Contributors are deduplicated across months; bots and commits do not
        # increase the GitHub activity total, while unattributed activity does.
        self.assertEqual(social_cards.contribution_totals(summary), (7, 2))
        summary["months"].append(summary["months"][0])
        self.assertEqual(social_cards.contribution_totals(summary), (14, 2))
        summary["months"].pop()
        with tempfile.TemporaryDirectory() as temporary:
            directory = Path(temporary)
            (directory / "summary.json").write_text(json.dumps(summary))
            with patch.object(social_cards.ImageDraw.ImageDraw, "text", autospec=True) as draw_text:
                social_cards.write_social_card("owner/repo", directory)
            self.assertIn("Latest month is partial", [call.args[2] for call in draw_text.call_args_list])

    def test_refresh_uses_summary_title_and_preserves_page_body(self):
        with tempfile.TemporaryDirectory() as temporary:
            site = Path(temporary)
            directory = site / "combos/tools-friends"
            directory.mkdir(parents=True)
            # Small synthetic summary exercises real multi-repository card rendering.
            summary = {
                "display_name": "Tools & friends",
                "repositories": [{"full_name": "one/repo"}, {"full_name": "two/repo"}],
                "actors": {"shared": "human"},
                "months": [{
                    "metadata": {"month": "2024-01", "is_partial": False},
                    "summaries": {
                        "repository_counts": {"commit": 5},
                        "actor_counts": {"shared": {"commit": 5, "issue": 2}},
                        "unattributed_by_type": {"issue": 1},
                    },
                }],
            }
            (directory / "summary.json").write_text(json.dumps(summary))
            index = directory / "index.html"
            index.write_text(page("Tools & friends", "combos/tools-friends"))
            body = index.read_text().split("  <body>")[1]
            with patch.object(social_cards.ImageDraw.ImageDraw, "text", autospec=True) as draw_text:
                social_cards.refresh_existing_pages(site)
            drawn = [call.args[2] for call in draw_text.call_args_list]
            self.assertIn("Tools & friends", drawn)
            self.assertIn("COMBINED REPOSITORIES", drawn)
            self.assertIn("3 GitHub activity  /  1 total contributors", drawn)
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
