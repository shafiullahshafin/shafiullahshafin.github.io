# Adding News

1. Open `app/data/site.js`.
2. Add a new entry at the **top** of the `news` list:

```js
{
  date: '2026-12',
  type: 'paper',
  text: 'Paper accepted to ICSE 2027.',
  href: 'https://example.com',
},
```

| Field | Description |
| :-- | :-- |
| `date` | Year and month, as `YYYY-MM` |
| `type` | One of `paper`, `award`, `career`, `service`, `milestone`, `release` |
| `text` | One short sentence. Use `**bold**` or `*italic*` if needed |
| `href` | Optional link. Leave it out if there is none |

3. Commit and push. The site updates automatically in about a minute.
