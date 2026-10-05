import json
import random
from pathlib import Path

DATA = Path(__file__).resolve().parent.parent / "data" / "names.json"

with DATA.open(encoding="utf-8") as file:
    names = json.load(file)

print("Random name:", random.choice(names))
print("Male names:", len([n for n in names if n["gender"] == "male"]))
print(
    "Names with ocean tag:",
    len([n for n in names if "ocean" in n.get("tags", [])]),
)
