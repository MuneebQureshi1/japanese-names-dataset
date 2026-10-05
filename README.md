# 🇯🇵 Japanese Names Dataset

**Open JSON data for Japanese first names, surnames, kanji, readings, and meanings — built for developers, games, and creative tools.**

Companion open-source project for **[JapaneseNamer.info](https://www.japanesenamer.info/)** — browse [50,000+ names online](https://www.japanesenamer.info/first-names), use free [generators](https://www.japanesenamer.info/generator), or download this repo for offline use.

[![JapaneseNamer.info](https://img.shields.io/badge/Website-JapaneseNamer.info-red?style=for-the-badge&logo=google-chrome&logoColor=white)](https://www.japanesenamer.info/)
[![First names](https://img.shields.io/badge/Browse-First%20Names-orange?style=for-the-badge)](https://www.japanesenamer.info/first-names)
[![Generator](https://img.shields.io/badge/Try-Name%20Generator-blue?style=for-the-badge)](https://www.japanesenamer.info/generator)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![Validate](https://img.shields.io/badge/CI-Validate%20JSON-lightgrey?style=for-the-badge)](.github/workflows/validate.yml)

> 🌸 **Need meanings and kanji notes?** → [JapaneseNamer.info](https://www.japanesenamer.info/) · **Need JSON in your app?** → use `data/names.json` in this repo.

---

## ✨ About

**Japanese Names Dataset** is a structured collection of Japanese names designed to make naming data easy to search, filter, and integrate into software.

Each entry includes:

| Field | Description |
| ----- | ----------- |
| 🏷️ **name** | Romanized name |
| 🈳 **kanji** | Kanji form for this entry |
| 🔤 **reading** | Hiragana reading |
| 🔤 **reading_romaji** | Romaji (for URLs and search) |
| 👤 **gender** | `male`, `female`, `unisex`, or `last` (surname) |
| 💭 **meaning** | Short English gloss |
| 🏷️ **tags** | Themes: nature, flower, ocean, moon, … |
| 🔗 **profile_url** | Full profile on [JapaneseNamer.info](https://www.japanesenamer.info/first-names) |

The live site adds audio, alternate kanji, Seimei Handan, and generators — this repository focuses on **developer-friendly JSON**.

📖 [Data schema](docs/DATA-SCHEMA.md) · 📚 [Full resource list (tools, blog, tags)](docs/RESOURCES.md)

---

## 🌐 JapaneseNamer.info — tools & guides

Use the website when you want to explore beyond the JSON subset:

| Tool | Description |
| ---- | ----------- |
| [Name generator](https://www.japanesenamer.info/generator) | Random authentic names by gender and style |
| [First names directory](https://www.japanesenamer.info/first-names) | Search 50,000+ entries with meanings |
| [Boy / girl lists](https://www.japanesenamer.info/japanese-boy-names) | Curated lists: [boys](https://www.japanesenamer.info/japanese-boy-names), [girls](https://www.japanesenamer.info/japanese-girl-names) |
| [Last names](https://www.japanesenamer.info/last-names) | Japanese surnames and meanings |
| [My name in Japanese](https://www.japanesenamer.info/my-name-in-japanese) | Convert any name to katakana / hiragana / kanji |
| [Username generator](https://www.japanesenamer.info/japanese-username-generator) | Gaming & social handles |
| [Nickname generator](https://www.japanesenamer.info/japanese-nickname-generator) | Short Japanese nicknames |
| [Anime-style names](https://www.japanesenamer.info/anime-japanese-names) | Character naming inspiration |
| [Seimei Handan](https://www.japanesenamer.info/seimei-handan) | Five-kaku name fortune calculator |
| [Blog & guides](https://www.japanesenamer.info/blog) | [How names work](https://www.japanesenamer.info/blog/how-japanese-names-work), [nature names](https://www.japanesenamer.info/blog/japanese-nature-names), [warrior meanings](https://www.japanesenamer.info/blog/japanese-names-meaning-warrior-strength) |

More links (tag filters, popular profiles, FAQ): **[docs/RESOURCES.md](docs/RESOURCES.md)**

---

## 🌸 Name preview

| Name | Kanji | Reading | Gender | Meaning | Profile |
| :--- | :---: | :---: | :---: | :--- | :--- |
| **Haruto** | 陽翔 | はると | ♂ Male | Soaring toward the sun | [View →](https://www.japanesenamer.info/names/haruto) |
| **Ren** | 蓮 | れん | ♂ Male | Lotus | [View →](https://www.japanesenamer.info/names/ren) |
| **Kaito** | 海翔 | かいと | ♂ Male | Sea and soaring | [View →](https://www.japanesenamer.info/names/kaito) |
| **Sakura** | 桜 | さくら | ♀ Female | Cherry blossom | [View →](https://www.japanesenamer.info/names/sakura) |
| **Himari** | 陽葵 | ひまり | ♀ Female | Sun and sunflower | [View →](https://www.japanesenamer.info/names/himari) |
| **Aoi** | 葵 | あおい | ♀ Female | Hollyhock | [View →](https://www.japanesenamer.info/names/aoi) |
| **Yuzuki** | 結月 | ゆづき | ♀ Female | Binding moon | [View →](https://www.japanesenamer.info/names/yuzuki) |
| **Tanaka** | 田中 | たなか | Surname | Middle of field | [Last names →](https://www.japanesenamer.info/last-names) |

---

## 🚀 Quick start

Clone or download this repository, then load `data/names.json`.

### JavaScript (Node)

```js
const names = require("./data/names.json");

const randomName = names[Math.floor(Math.random() * names.length)];
console.log(randomName.name, randomName.kanji, randomName.meaning);
console.log("Full profile:", randomName.profile_url);
```

### TypeScript

```ts
import names from "./data/names.json";

type NameEntry = (typeof names)[number];
const sakura = names.find((n) => n.reading_romaji === "sakura");
```

### Python

```python
import json
import random

with open("data/names.json", "r", encoding="utf-8") as file:
    names = json.load(file)

print(random.choice(names))
```

### Validate locally

```bash
npm run validate
# or: node scripts/validate-data.js
```

Examples: [`examples/javascript.js`](examples/javascript.js) · [`examples/python.py`](examples/python.py)

---

## 🎯 What can you build?

- 🎮 **Games & RPGs** — NPC and character names with consistent structure  
- ✍️ **Writing & worldbuilding** — filter by [meaning tags](https://www.japanesenamer.info/first-names#tag=nature)  
- 👾 **Username / nickname tools** — pair with [JapaneseNamer generators](https://www.japanesenamer.info/japanese-username-generator)  
- 📱 **Mobile apps** — React Native, Flutter, Swift, Kotlin  
- 🌐 **Web apps** — React, Next.js, Vue, Svelte  
- 🤖 **AI & creative tools** — structured training or prompt context  

---

## 📂 Project structure

```text
japanese-names-dataset/
├── data/
│   └── names.json          # Main dataset (169+ entries, growing)
├── docs/
│   ├── DATA-SCHEMA.md
│   └── RESOURCES.md        # Links to JapaneseNamer.info tools & blog
├── examples/
│   ├── javascript.js
│   └── python.py
├── scripts/
│   └── validate-data.js
├── .github/workflows/
│   └── validate.yml
├── CONTRIBUTING.md
├── LICENSE
├── package.json
└── README.md
```

---

## 🔎 Filtering examples

### Female names

```js
const femaleNames = names.filter((n) => n.gender === "female");
```

### Surnames

```js
const lastNames = names.filter((n) => n.gender === "last");
```

### By tag (matches site categories)

```js
const moonNames = names.filter((n) => (n.tags || []).includes("moon"));
```

### Open full profile on the web

```js
const entry = names.find((n) => n.reading_romaji === "haruto");
if (entry?.profile_url) {
  // e.g. https://www.japanesenamer.info/names/haruto
}
```

Browse the same themes on the site: [flower](https://www.japanesenamer.info/first-names#tag=flower) · [ocean](https://www.japanesenamer.info/first-names#tag=ocean) · [strength](https://www.japanesenamer.info/first-names#tag=strength)

---

## 🧩 Data format

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

See [docs/DATA-SCHEMA.md](docs/DATA-SCHEMA.md) for all fields.

---

## 📎 Citation & attribution

If you use this dataset in a project, blog post, or paper, please link to **both** the repo and the website:

```text
Japanese Names Dataset (2026). GitHub: https://github.com/MuneebQureshi1/japanese-names-dataset
Data & extended catalog: https://www.japanesenamer.info/
```

**Suggested HTML:**

```html
<a href="https://www.japanesenamer.info/">Japanese name meanings & generators</a>
 —
<a href="https://github.com/MuneebQureshi1/japanese-names-dataset">open JSON dataset</a>
```

That helps others find the full [name directory](https://www.japanesenamer.info/first-names) and keeps open data and the live site in sync.

---

## 🤝 Contributing

Corrections and new entries are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md), run `npm run validate`, and open a PR.

For deep kanji variants and pronunciation audio, cross-check on [JapaneseNamer.info](https://www.japanesenamer.info/).

---

## ⚠️ Important note

Japanese names often have **multiple kanji and readings**. Meanings depend on which characters are used. This project is a **practical developer dataset**, not a legal or linguistic authority. For naming real people, consult native resources and the expanded profiles on [JapaneseNamer.info](https://www.japanesenamer.info/).

---

## ⭐ Support the project

If this repo helps you:

1. ⭐ **Star** [github.com/MuneebQureshi1/japanese-names-dataset](https://github.com/MuneebQureshi1/japanese-names-dataset)  
2. 🔗 **Link** to [JapaneseNamer.info](https://www.japanesenamer.info/) from your README or docs  
3. 🍴 **Fork** and ship something cool  
4. 📢 **Share** with developers who need Japanese names  

**Suggested GitHub topics:** `japanese-names`, `kanji`, `dataset`, `json`, `name-generator`, `anime`, `japan`, `nlp`, `game-dev`

---

<div align="center">

### 🌸 Made for developers · Curated on [JapaneseNamer.info](https://www.japanesenamer.info/)

**[Browse names](https://www.japanesenamer.info/first-names)** · **[Generate a name](https://www.japanesenamer.info/generator)** · **[Read the guides](https://www.japanesenamer.info/blog)**

</div>
