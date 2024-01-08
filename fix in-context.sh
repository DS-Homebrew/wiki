#!/bin/bash

# Fix the layouts in the in-context files
sed -i "s/layout: crwdns[0-9][0-9][0-9][0-9][0-9]:0crwdne[0-9][0-9][0-9][0-9][0-9]:0/layout: default/" pages/_ic-IC/*.md
for file in pages/_ic-IC/*/*.md; do
	sed -i "s/layout: crwdns[0-9][0-9][0-9][0-9][0-9]:0crwdne[0-9][0-9][0-9][0-9][0-9]:0/layout: wiki/" $file
done

for file in pages/_ic-IC/*/faq.md; do
	sed -i "s/layout: wiki/layout: faq/" $file
done
