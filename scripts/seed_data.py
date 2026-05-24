#!/usr/bin/env python3
"""Generate sample data."""
import json, os, random
from datetime import datetime, timedelta

data = []
for i in range(100):
    data.append({"id": i, "value": round(random.uniform(100, 10000), 2), "date": (datetime.now() - timedelta(days=i)).strftime("%Y-%m-%d")})

os.makedirs("data", exist_ok=True)
with open("data/sample.json", "w") as f:
    json.dump(data, f, indent=2)
print(f"Generated {len(data)} records")
