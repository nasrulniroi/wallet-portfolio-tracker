# Wallet Portfolio Tracker Architecture

## Overview
Multi-chain wallet portfolio tracking across Ethereum, Polygon, Arbitrum, Optimism, BSC, Solana, and Base

## Stack
- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS
- **Backend**: Python (FastAPI)
- **Scanner**: Go
- **Database**: PostgreSQL
- **Charts**: Chart.js

## Data Flow
1. Go scanner monitors blockchain events
2. Python backend processes and aggregates data
3. Next.js frontend displays real-time dashboards
4. PostgreSQL stores historical data
