#!/usr/bin/env python3
"""FastAPI server."""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Wallet Portfolio Tracker")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

@app.get("/health")
def health(): return {"status": "ok"}

@app.get("/api/data")
def get_data(): return {"data": [], "total": 0}

@app.get("/api/stats")
def get_stats(): return {"metrics": {}}
