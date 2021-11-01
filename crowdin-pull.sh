#!/bin/bash

# Add new languages here, space separated and using the ID for `crowdin pull`
LANGUAGES="es-ES fr he hu in-context id it ja ko pl ru sv-SE zh-CN"

for LANGUAGE in $LANGUAGES; do
	echo $LANGUAGE
	crowdin pull -l $LANGUAGE
done

./fix\ in-context.sh
