# Data schema

Each object in `data/names.json` represents one name record.

## Required fields

| Field | Type | Description |
| ----- | ---- | ----------- |
| `name` | string | Common romanized spelling (e.g. `Sakura`) |
| `kanji` | string | Primary kanji form used in this entry |
| `reading` | string | Hiragana reading (e.g. `さくら`) |
| `reading_romaji` | string | Romaji reading, lowercase (e.g. `sakura`) |
| `gender` | string | One of: `male`, `female`, `unisex`, `last` |
| `meaning` | string | Short English meaning for this kanji combination |

## Optional fields

| Field | Type | Description |
| ----- | ---- | ----------- |
| `tags` | string[] | Theme tags for filtering (see CONTRIBUTING.md) |
| `source` | string | Data attribution (default: `JapaneseNamer.info`) |
| `profile_url` | string | Link to the full profile on [JapaneseNamer.info](https://www.japanesenamer.info/) |

## Example

```json
{
  "name": "Sakura",
  "kanji": "桜",
  "reading": "さくら",
  "reading_romaji": "sakura",
  "gender": "female",
  "meaning": "Cherry blossom",
  "tags": ["nature", "flower"],
  "source": "JapaneseNamer.info",
  "profile_url": "https://www.japanesenamer.info/names/sakura"
}
```

## Validation

CI and local checks use `scripts/validate-data.js`. Run it before opening a pull request.
