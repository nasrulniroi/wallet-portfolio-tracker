#!/usr/bin/env python3
"""Main data processor."""
import requests, json, os

def fetch_market_data(vs="usd", per_page=50):
    try:
        r = requests.get(f"https://api.coingecko.com/api/v3/coins/markets", params={"vs_currency": vs, "per_page": per_page}, timeout=15)
        return r.json() if r.status_code == 200 else []
    except Exception as e:
        print(f"Error: {e}")
        return []

def process(data):
    return [{"id": d.get("id"), "symbol": d.get("symbol","").upper(), "price": d.get("current_price"), "change": d.get("price_change_percentage_24h")} for d in data]

if __name__ == "__main__":
    raw = fetch_market_data()
    processed = process(raw)
    os.makedirs("data", exist_ok=True)
    with open("data/market.json", "w") as f:
        json.dump(processed, f, indent=2)
    print(f"Processed {len(processed)} items")
