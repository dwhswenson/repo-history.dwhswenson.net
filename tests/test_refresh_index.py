"""Homepage discovery across manifest formats and collection sidecars."""

import json
import tempfile
import unittest
from pathlib import Path
from shutil import rmtree

from scripts.refresh_index import END, START, refresh_index


class RefreshIndexTests(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory()
        self.addCleanup(self.temporary.cleanup)
        self.site = Path(self.temporary.name)
        self.index = self.site / "index.html"
        self.index.write_text(f"before\n{START}\nstale links\n{END}\nafter\n")

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

        refresh_index(self.site)
        output = self.index.read_text()
        self.assertIn('<a href="./owner/alpha/">Owner/alpha</a>', output)
        self.assertIn('<a href="./owner/zeta/">Zeta &amp; friends</a>', output)
        self.assertLess(output.index("Owner/alpha"), output.index("Zeta &amp; friends"))
        self.assertNotIn("Unfinished", output)
        self.assertTrue(output.startswith(f"before\n{START}\n"))
        self.assertTrue(output.endswith(f"{END}\nafter\n"))
        refresh_index(self.site)
        self.assertEqual(self.index.read_text(), output)

    def test_deleted_repository_is_removed(self):
        directory = self.repository("owner/repo", {"display_name": "Owner/repo"})
        refresh_index(self.site)
        rmtree(directory)
        refresh_index(self.site)
        output = self.index.read_text()
        self.assertNotIn("Owner/repo", output)
        self.assertIn("No repository reports have been added yet.", output)


if __name__ == "__main__":
    unittest.main()
