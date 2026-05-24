#!/bin/bash
set -e
npm install
cd backend && pip install -r requirements.txt
cd ../go-scanner && go build -o scanner .
echo 'Setup complete!'
