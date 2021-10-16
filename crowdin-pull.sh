#!/bin/bash

for language in es-ES fr he hu ic-IC id it ja ko pl ru sv-SE zh-CN; do
	echo $language
	crowdin pull -l $language
done

./fix\ in-context.sh