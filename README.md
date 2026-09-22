# FOXGLOVE

Iris Marlowe's independent digital zine and photo archive for No Saints Here, Glass Teeth, Dead Air, Good Company, and Rory Deveraux.

The site is plain HTML, CSS, and JavaScript. It needs no build step or external framework.

## Edit the issue

- `scenes.js` is the content desk. It contains the two band files, every member dossier, the side-desk dispatches, and the hidden photo archive.
- `styles.css` controls the black, warm-paper, dried-blood, rust, plum, and botanical visual system.
- `app.js` renders the hash-based routes and hidden archive behavior.
- `index.html` contains the permanent masthead, navigation, and metadata.

The hidden archive opens from **CONTACT SHEET 13 / DO NOT INDEX** in the footer. Typing `IRIS` anywhere on the site also opens it.

## Add real archive photography

1. Create an `assets/photos` directory in the repository.
2. Upload web-sized `.jpg` or `.webp` images there. Lowercase filenames with hyphens work best.
3. In `scenes.js`, find the relevant object inside `archive` and replace the empty image value:

```js
image: "assets/photos/nsh-cleveland-2019.jpg"
```

Until an image path is added, FOXGLOVE deliberately shows a labeled **NEGATIVE AWAITING SCAN** placeholder. Captions and Iris's handwritten notes already appear beneath each slot.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server 8000` in this folder and visit `http://localhost:8000/`.

## Publish

The live repository is `s0ftreset/afterpages`. GitHub Pages should deploy from the `main` branch and `/(root)` directory. Future commits to `main` update the site.

GitHub Pages sites are publicly accessible. Publish only images and writing intended to be shared.

## Files

- `index.html` — masthead, navigation, and page frame
- `styles.css` — FOXGLOVE's responsive zine design
- `scenes.js` — structured zine content
- `app.js` — routes, dossiers, contact sheets, and easter eggs
- `favicon.svg` — foxglove browser icon
- `.nojekyll` — serves static files directly on GitHub Pages
