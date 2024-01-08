#!/bin/bash

# Add new languages here, space separated and using the ID for `crowdin pull`
LANGUAGES="es-ES de fr he hu in-context id it ja ko nl pl ru sv-SE uk zh-CN"

rm -rf pages/_{es-ES,de-DE,fr-FR,he-IL,hu-HU,ic-IC,id-ID,it-IT,ja-JP,ko-KR,nl-NL,pl-PL,ru-RU,sv-SE,uk-UK,zh-CN}

ARG=''
for LANGUAGE in $LANGUAGES; do
	ARG+="-l $LANGUAGE "
done
crowdin pull $ARG

./fix\ in-context.sh
