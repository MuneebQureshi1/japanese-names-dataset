# Contributing

Thank you for helping improve the **Japanese Names Dataset**.

This repository is a developer-friendly companion to [JapaneseNamer.info](https://www.japanesenamer.info/). For browsing meanings, kanji variants, and the full name catalog, use the website; this repo focuses on structured JSON you can use in apps and scripts.

## How to contribute

1. Fork the repository and create a branch from `main`.
2. Edit `data/names.json` — keep entries consistent with the [data schema](docs/DATA-SCHEMA.md).
3. Run validation locally:

   ```bash
   node scripts/validate-data.js
   ```

4. Open a pull request with a short description of what you added or fixed.

## Entry guidelines

- Use accurate romaji in `reading_romaji` (lowercase, no spaces).
- Prefer common, well-documented kanji readings; note ambiguity in the PR if a name has many variants.
- Do not duplicate the same `name + kanji + reading_romaji + gender` combination.
- When possible, set `profile_url` to the matching page on [JapaneseNamer.info](https://www.japanesenamer.info/first-names).
- Add `tags` from the existing set when they apply: `nature`, `flower`, `ocean`, `sky`, `moon`, `snow`, `light`, `love`, `peace`, `strength`, `wind`, `fire`.

## Sources

If you add names from external references, mention the source in your pull request. The authoritative expanded database lives at [JapaneseNamer.info](https://www.japanesenamer.info/).

## Code of conduct

Be respectful and constructive. Focus on accurate, useful data for developers and creators.
