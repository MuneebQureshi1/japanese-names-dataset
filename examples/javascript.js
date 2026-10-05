const fs = require("fs");
const path = require("path");

const names = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "data", "names.json"), "utf8")
);

const randomName = names[Math.floor(Math.random() * names.length)];
const femaleNames = names.filter((entry) => entry.gender === "female");
const flowerNames = names.filter((entry) =>
  (entry.tags || []).includes("flower")
);

console.log("Random name:", randomName);
console.log("Female count:", femaleNames.length);
console.log("Flower-tagged count:", flowerNames.length);
