# shafiullahshafin.github.io

Personal academic portfolio of Md. Shafiullah Shafin, built with Next.js (static export) and deployed to GitHub Pages.

## Editing content

All content lives in [`app/data/site.js`](app/data/site.js): profile, news, publications, experience, projects, education, honors and skills.

**To post a news update:** add an entry to the top of the `news` array.

```js
{ date: '2026-12', type: 'paper', text: 'Paper **X** accepted at *Venue*.', href: 'https://…' },
```

- `type` is one of `paper`, `award`, `career`, `service`, `release` (a real release or launch, not repo creation) or `milestone`. It sets the colour and label.
- Wrap text in `**bold**` or `*italic*`.

To add a CV, put the PDF in `public/` and set `profile.cv = '/CV.pdf'`.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site → ./out
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes `out/` to GitHub Pages.
The repository must be named `shafiullahshafin.github.io`, and Pages must have **Source: GitHub Actions** selected.
