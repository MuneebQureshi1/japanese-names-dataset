# 🇯🇵 Japanese Names Dataset

### A developer-friendly collection of Japanese names, kanji, readings & meanings.

[![Japanese Names](https://img.shields.io/badge/Japanese-Names-red?style=for-the-badge)](https://www.japanesenamer.info/first-names)
[![JSON](https://img.shields.io/badge/Data-JSON-orange?style=for-the-badge)](https://github.com/)
[![Open Source](https://img.shields.io/badge/Open-Source-green?style=for-the-badge)](LICENSE)

> 🌸 **Discover Japanese names with meaning — and use the data in your own projects.**

---

## ✨ About

**Japanese Names Dataset** is a structured collection of Japanese names designed to make Japanese naming data easier to explore and use in software projects.

Each entry can contain:

* 🏷️ **Name**
* 🈳 **Kanji**
* 🔤 **Romaji / Reading**
* 👤 **Gender**
* 💭 **Meaning**

The dataset is provided in a simple JSON format, making it easy to integrate into web apps, games, generators, APIs, and other projects.

---

## 🌸 Name Preview

| Name       | Kanji | Reading |   Gender  | Meaning                |
| :--------- | :---: | :-----: | :-------: | :--------------------- |
| **Haruto** |   陽翔  |   はると   |  ♂️ Male  | Soaring toward the sun |
| **Ren**    |   蓮   |    れん   |  ♂️ Male  | Lotus                  |
| **Kaito**  |   海翔  |   かいと   |  ♂️ Male  | Sea + soaring          |
| **Minato** |   湊   |   みなと   |  ♂️ Male  | Harbor                 |
| **Riku**   |   陸   |    りく   |  ♂️ Male  | Land                   |
| **Sakura** |   桜   |   さくら   | ♀️ Female | Cherry blossom         |
| **Aiko**   |   愛子  |   あいこ   | ♀️ Female | Child of love          |
| **Himari** |   陽葵  |   ひまり   | ♀️ Female | Sun + sunflower        |
| **Yuzuki** |   結月  |   ゆづき   | ♀️ Female | Binding moon           |
| **Rin**    |   凛   |    りん   | ♀️ Female | Dignified              |

---

## 🚀 Quick Start

The dataset is just JSON, so you can use it with almost anything.

### JavaScript

```js
const names = require("./data/names.json");

const randomName =
  names[Math.floor(Math.random() * names.length)];

console.log(randomName);
```

### TypeScript

```ts
import names from "./data/names.json";

const randomName =
  names[Math.floor(Math.random() * names.length)];

console.log(randomName);
```

### Python

```python
import json
import random

with open("data/names.json", "r", encoding="utf-8") as file:
    names = json.load(file)

print(random.choice(names))
```

---

## 🎯 What Can You Build?

This dataset can be used to create:

🎮 **Game Characters**
Generate names for NPCs, RPG characters, and fictional worlds.

✍️ **Writing Tools**
Find names for characters based on their style or meaning.

👾 **Username Generators**
Create Japanese-inspired usernames for games and communities.

🌸 **Name Generators**
Build your own Japanese name generator.

📱 **Mobile Apps**
Use the JSON data in React Native, Flutter, or native applications.

🌐 **Web Applications**
Integrate the dataset into JavaScript, React, Next.js, or other frameworks.

🤖 **AI Projects**
Use structured name data as part of creative or experimental applications.

---

## 📂 Project Structure

```text
japanese-names-dataset/
│
├── data/
│   └── names.json
│
├── examples/
│   ├── javascript.js
│   └── python.py
│
├── scripts/
│   └── validate-data.js
│
├── .github/
│   └── workflows/
│       └── validate.yml
│
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

---

## 🔎 Simple Filtering

Because every name is structured data, you can easily filter the collection.

### Female names

```js
const femaleNames = names.filter(
  name => name.gender === "female"
);
```

### Male names

```js
const maleNames = names.filter(
  name => name.gender === "male"
);
```

### Search by meaning

```js
const flowerNames = names.filter(
  name =>
    name.meaning
      .toLowerCase()
      .includes("flower")
);
```

---

## 🧩 Data Format

Each name follows a simple structure:

```json
{
  "name": "Sakura",
  "kanji": "桜",
  "reading": "さくら",
  "gender": "female",
  "meaning": "Cherry blossom"
}
```

Keeping the data structured makes it easier to search, filter, sort, and integrate into other applications.

---

## 🌐 Explore Online

Want to browse Japanese names instead of working with JSON?

### 👉 [Explore Japanese First Names](https://www.japanesenamer.info/first-names)

Browse Japanese names with kanji, readings, meanings, and categories.

### 🎲 [Try the Japanese Name Generator](https://www.japanesenamer.info/)

Generate Japanese name ideas instantly.

---

## 🤝 Contributing

Found an incorrect entry or have useful additions?

Contributions are welcome.

Before submitting a pull request:

* ✅ Keep the JSON valid
* ✅ Avoid duplicate entries
* ✅ Follow the existing data structure
* ✅ Provide accurate information
* ✅ Document sources where appropriate

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

---

## ⚠️ Important Note

Japanese names can have multiple kanji representations and readings.

The meaning of a name can also depend on the specific kanji used and the naming context.

This project is intended as a practical dataset for developers and creative projects, not as an authoritative linguistic dictionary.

---

## ⭐ Like the Project?

If you find this dataset useful:

**⭐ Star the repository**

**🍴 Fork it**

**🤝 Contribute**

**📢 Share it with other developers**

---

<div align="center">

### 🌸 Made for developers who need Japanese names.

**Explore more → https://www.japanesenamer.info/**

</div>
