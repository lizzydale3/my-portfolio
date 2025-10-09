#!/bin/bash

# stop if any command fails
set -e

# check if commit message was passed
if [ -z "$1" ]; then
  echo "Please provide a commit message."
  echo "Usage: ./deploy.sh \"your commit message\""
  exit 1
fi

echo "Adding changes..."
git add .

echo "Committing with message: $1"
git commit -m "$1" || echo "Nothing to commit, skipping commit step"

echo "Pulling latest from origin/main with rebase..."
git pull origin main --rebase || true

echo "Pushing to GitHub..."
git push origin main --force-with-lease

echo "Done! Your portfolio is live on GitHub"

