#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const DATA_PATH = path.join(__dirname, "..", "data", "names.json");
const GENDERS = new Set(["male", "female", "unisex", "last"]);
const REQUIRED = ["name", "kanji", "reading", "reading_romaji", "gender", "meaning"];

function fail(message) {
  console.error(`Validation failed: ${message}`);
  process.exit(1);
}

const raw = fs.readFileSync(DATA_PATH, "utf8");
let names;
try {
  names = JSON.parse(raw);
} catch (error) {
  fail(`data/names.json is not valid JSON (${error.message})`);
}

if (!Array.isArray(names)) {
  fail("data/names.json must be a JSON array");
}

if (names.length === 0) {
  fail("dataset must contain at least one name");
}

const seen = new Set();

names.forEach((entry, index) => {
  if (typeof entry !== "object" || entry === null) {
    fail(`entry at index ${index} must be an object`);
  }

  for (const key of REQUIRED) {
    if (typeof entry[key] !== "string" || entry[key].trim() === "") {
      fail(`entry at index ${index} missing or empty "${key}"`);
    }
  }

  if (!GENDERS.has(entry.gender)) {
    fail(`entry at index ${index} has invalid gender "${entry.gender}"`);
  }

  if (entry.tags !== undefined) {
    if (!Array.isArray(entry.tags) || entry.tags.some((tag) => typeof tag !== "string")) {
      fail(`entry at index ${index} has invalid tags`);
    }
  }

  const key = `${entry.name}|${entry.kanji}|${entry.reading_romaji}|${entry.gender}`;
  if (seen.has(key)) {
    fail(`duplicate entry: ${key}`);
  }
  seen.add(key);
});

console.log(`Validated ${names.length} names in data/names.json`);
