#!/usr/bin/env python3
"""Transform and analyze data."""
import json

def transform(records):
    return [{**r, "processed": True} for r in records]

def aggregate(records, key="value"):
    values = [r.get(key, 0) for r in records]
    return {"sum": sum(values), "avg": sum(values)/len(values) if values else 0, "min": min(values) if values else 0, "max": max(values) if values else 0}
