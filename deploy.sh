#!/bin/sh
gulp build
git add dist && git commit -m "Updated $('date')"
git subtree push --prefix dist origin gh-pages
git subtree push --prefix dist tedx gh-pages
