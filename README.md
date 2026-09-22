# Afterpages

A static scene archive for GitHub Pages. No install, build step, account, database, or external assets are required.

## Make it yours

1. Open `scenes.js`. Change `author`, `siteTitle`, `tagline`, and `intro`.
2. Replace the four **DEMO SCENE** entries with your own work. Each object is one scene. Keep every `id` unique; existing scene links rely on it. Use lowercase words separated by hyphens.
3. Edit the scene metadata (`story`, `title`, `category`, `characters`, `date`, `readMinutes`, `excerpt`). Set `status` to `published` when the scene is complete. Add optional `contentNote` text as needed.
4. Paste the scene into the backtick-quoted `body` field. Leave a blank line between paragraphs. If your prose contains a backtick (\`) or `${`, escape it as `\`` or `\${` inside the body.
5. Edit colors near the top of `styles.css` if you want another palette. Update the page description and title in `index.html` too.

**Example new scene:**

```js
{
  id: "nsh-midnight-drive",
  story: "No Saints Here",
  title: "Midnight Drive",
  category: "Missing scene",
  characters: "Astrid · Forrest",
  date: "2026-09-22",
  readMinutes: 4,
  status: "published",
  contentNote: "",
  excerpt: "A one-sentence teaser goes here.",
  body: `Your first paragraph goes here.

Your second paragraph goes here.`
}
```

Add a comma between scene objects. The story filter appears automatically when a new `story` name is used. Search looks through titles, stories, characters, categories, teasers, and scene text. Scene URLs use `#/scene/your-id` and can be shared directly.

## Preview locally

Open `index.html` in a browser. Or run `python3 -m http.server 8000` in this folder and visit `http://localhost:8000/`.

## Publish with GitHub Pages

1. Create a repository on GitHub, for example `afterpages`.
2. Upload the **contents of this folder** to the repository root (`index.html` should be in the root). Commit the files to the `main` branch.
3. Open the repository’s **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, select **main**, select **/(root)**, and save.
4. Your project site will use a URL such as `https://YOUR-USERNAME.github.io/afterpages/`. GitHub shows the exact address in the Pages settings once it publishes. Future commits to `main` update the site.

GitHub Pages sites are publicly accessible. Publish only scenes you intend to share.

## Files

- `index.html` — page frame and metadata
- `styles.css` — visual design and responsive layout
- `scenes.js` — your story and scene content
- `app.js` — filters, search, navigation, and reading controls
- `favicon.svg` — browser icon
- `.nojekyll` — serves static files directly on GitHub Pages
