#! /bin/bash

pandoc document/contents.md -o generated/contents.html
pandoc document/body.md -o generated/body.html

cat theme/head-begin.html \
    document/title.txt \
    theme/head-end.html \
    generated/contents.html \
    theme/body-begin.html \
    generated/body.html \
    theme/foot.html \
    > generated/index.html

cp theme/style.css generated/
cp theme/script.js generated/

rm generated/contents.html
rm generated/body.html
