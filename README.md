# FOXGLOVE

Iris Marlowe's independent digital zine and photo archive for No Saints Here, Glass Teeth, Saints x Snakes, and Rory Deveraux.

The site is plain HTML, CSS, and JavaScript. It needs no build step or external framework.

## Edit the issue

- `scenes.js` is the content desk. It contains both band files, the No Saints Here song list, member dossiers, side-desk dispatches, and the hidden photo archive.
- `styles.css` controls the visual design.
- `app.js` renders the pages and archive.
- `index.html` contains the masthead, navigation, and metadata.

## Add recordings to No Saints Here

Upload web-ready audio to `assets/audio/`. In `scenes.js`, add an `audio` field to the matching item in the No Saints Here `songs` array, for example:

```js
{ title: "Bite Back", audio: "assets/audio/bite-back.mp3" }
```

The page displays a player only for songs with an audio path. You can also edit song titles and add short `note` fields there.

## Preview locally

Run `python3 -m http.server 8000` and visit `http://localhost:8000/`.

## Publish

The live repository is `s0ftreset/afterpages`. GitHub Pages deploys from the `main` branch and root directory.
