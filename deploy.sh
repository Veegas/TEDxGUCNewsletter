#!/bin/sh
if [ -z "$1" ]
then
  echo "Which folder do you want to deploy to GitHub Pages?"
  exit 1
fi

gulp build
time = date
git add $1 && git commit -m "Updated $time"
git subtree push --prefix $1 origin gh-pages
