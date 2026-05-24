#!/bin/bash
set -e
npm run build
vercel --prod
echo 'Deployed!'
