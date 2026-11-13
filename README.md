# David Brecht's portfolio

A static website for GitHub Pages. Open `index.html` directly in a browser, or run `python3 -m http.server 8000` from this folder and visit `http://localhost:8000`. There is no package installation or build step. GitHub Pages can serve the root of the `main` branch.

## Structure

- `index.html`: homepage with the profile header and the project cards.
- `projects/`: one page per project.
  - `drivable-space-adaption.html`: full project page (banner, two use cases with video and plot gallery, background, further reading).
  - `collaborative-planning.html`: EDGAR collaborative planning. Banner and back link only, content still to be added.
- `styles.css`: all styles. Colours are defined once at the top (`--accent`, `--accent-light`, `--header`, `--banner`).
- Small scripts, each optional (the pages still work without JavaScript):
  - `banner.js`: on screens at least 1181px wide, the project banner collapses into a title strip under the sticky top bar while scrolling.
  - `toc.js`: highlights the current section in the "On this page" list.
  - `gallery.js`: previous/next buttons for the plot galleries.
  - `video.js`: loads a YouTube video only after the visitor clicks play.

## Assets

- `assets/deployment/`: everything the pages use, already resized for the web. Only files in here are referenced.
  - `common/`: favicon, portrait, partner logos.
  - `edgar_collaborative_planning/`: title image for the EDGAR card and banner.
  - `kit_drivable_space/`: banner photos, video posters, result plots, paper preview. `sources.md` records where the photos come from.
- `assets/originals/`: full-size source material (camera photos, raw videos, screenshots). Ignored by git, see `.gitignore`.

Size targets for new images: card images up to about 150 KB, banners and plots up to about 300–400 KB, exported at roughly twice the width they are shown at.

The result plots come from the evaluation in `~/data/kit_collaborative_planning` (`eval/make_figures.py`) and are converted to JPEG at 1600px width.

## Open items

- Both videos on the drivable space page use a placeholder YouTube ID (`cDaHewxZwfg`). Replace it in `data-youtube-id` and the link of each `.video` block.
- The "Deep Dive into the Project" section has no overview images yet.
- The collaborative planning (EDGAR) page has no content yet.

## Credits

The compact portrait-and-contact header takes its structure from the reference at <https://korbinianmoller.github.io/personal_website_template/>. The two-column project grid follows the layout reference supplied by David. Partner logos belong to autotech.agil, TUM and KIT. The KIT logo is taken from Wikimedia Commons.
