"""Shared HTML for individual and combined repository visualizations."""

from html import escape

if __package__:
    from .social_cards import social_metadata
else:
    from social_cards import social_metadata


def page(display_name: str, path: str | None = None) -> str:
    name = escape(display_name)
    return f"""<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{name} · Repository history</title>
{social_metadata(path if path is not None else display_name, display_name=display_name)}
    <style>
      body {{ margin: 0; background: #f4f6fa; }}
    </style>
    <script type="module" src="/assets/repo-history-viz.mjs"></script>
  </head>
  <body>
    <repo-history-viz
      summary="./summary.json"
      metrics="commits github-activities total-contributors"
      hide-loader
    ></repo-history-viz>
  </body>
</html>
"""
