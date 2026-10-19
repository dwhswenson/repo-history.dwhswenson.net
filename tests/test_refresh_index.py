"""Homepage discovery across manifest formats and collection sidecars."""

import json
import tempfile
import unittest
from pathlib import Path
from shutil import rmtree

from scripts.refresh_index import COMBO_END, COMBO_START, END, START, refresh_index


class RefreshIndexTests(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory()
        self.addCleanup(self.temporary.cleanup)
        self.site = Path(self.temporary.name)
        self.config = self.site / "combos.yaml"
        self.config.write_text("{}\n")
        self.index = self.site / "index.html"
        self.index.write_text(
            f"before\n{START}\nstale links\n{END}\n"
            f"{COMBO_START}\nstale combinations\n{COMBO_END}\nafter\n"
        )

    def refresh(self):
        return refresh_index(self.site, self.config)

    def repository(self, path, manifest, *, page=True):
        directory = self.site / path
        directory.mkdir(parents=True)
        (directory / "manifest.json").write_text(json.dumps(manifest))
        if page:
            (directory / "index.html").write_text("repository page")
        return directory

    def test_current_and_legacy_manifests_ignore_collection_state(self):
        directory = self.repository(
            "owner/zeta",
            {
                "display_name": "Zeta & friends",
                "repositories": [{"full_name": "owner/zeta"}],
            },
        )
        # Collection state is neither a manifest nor needed for index discovery.
        (directory / "collection-state.json").write_text("not parsed by index")
        self.repository("owner/alpha", {"repository": {"full_name": "Owner/alpha"}})
        self.repository("owner/unfinished", {"display_name": "Unfinished"}, page=False)

        self.refresh()
        output = self.index.read_text()
        self.assertIn('<a href="./owner/alpha/">Owner/alpha</a>', output)
        self.assertIn('<a href="./owner/zeta/">Zeta &amp; friends</a>', output)
        self.assertLess(output.index("Owner/alpha"), output.index("Zeta &amp; friends"))
        self.assertNotIn("Unfinished", output)
        self.assertTrue(output.startswith(f"before\n{START}\n"))
        self.assertTrue(output.endswith(f"{COMBO_END}\nafter\n"))
        self.refresh()
        self.assertEqual(self.index.read_text(), output)

    def test_deleted_repository_is_removed(self):
        directory = self.repository("owner/repo", {"display_name": "Owner/repo"})
        self.refresh()
        rmtree(directory)
        self.refresh()
        output = self.index.read_text()
        self.assertNotIn("Owner/repo", output)
        self.assertIn("No repository reports have been added yet.", output)

    def test_configured_combinations_use_index_labels_in_separate_section(self):
        self.config.write_text('''Title Z:
  repos: [owner/one, other/two]
  index-display: 'Alpha <one> & "two"'
Title A:
  repos: [owner/one, other/two]
  index-display: Zeta
Unfinished:
  repos: [owner/one, other/two]
  index-display: Unfinished label
Missing manifest:
  repos: [owner/one, other/two]
  index-display: Missing manifest label
''')
        self.repository("owner/one", {"display_name": "Owner/one"})
        self.repository("combos/title-z", {"display_name": "Title Z"})
        self.repository("combos/title-a", {"display_name": "Title A"})
        self.repository("combos/unfinished", {}, page=False)
        missing = self.site / "combos/missing-manifest"
        missing.mkdir()
        (missing / "index.html").write_text("unfinished")
        # A removed entry must not reappear through filesystem discovery.
        self.repository("combos/obsolete", {"display_name": "Obsolete"})

        self.refresh()
        output = self.index.read_text()
        repositories, combinations = output.split(COMBO_START)
        self.assertNotIn("./combos/", repositories)
        self.assertIn('./owner/one/', repositories)
        self.assertIn(
            '<a href="./combos/title-z/">Alpha &lt;one&gt; &amp; &quot;two&quot;</a>',
            combinations,
        )
        self.assertLess(combinations.index("Alpha"), combinations.index("Zeta"))
        for hidden in ("Obsolete", "Unfinished label", "Missing manifest label", "Title Z"):
            self.assertNotIn(hidden, output)
        self.refresh()
        self.assertEqual(self.index.read_text(), output)

        self.config.write_text("{}\n")
        self.refresh()
        self.assertNotIn('./combos/title-z/', self.index.read_text())
        self.assertTrue((self.site / "combos/title-z").is_dir())

    def test_bad_markers_do_not_partially_rewrite_homepage(self):
        for content in (
            f"{START}\n{END}\n{COMBO_END}\n{COMBO_START}",
            f"{START}\n{END}",
            f"{START}\n{END}\n{COMBO_START}\n{COMBO_START}\n{COMBO_END}",
        ):
            with self.subTest(content=content):
                self.index.write_text(content)
                with self.assertRaises(ValueError):
                    self.refresh()
                self.assertEqual(self.index.read_text(), content)


if __name__ == "__main__":
    unittest.main()
