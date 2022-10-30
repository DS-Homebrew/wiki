#!/bin/bash

# Add new languages here, space separated and using the ID for `crowdin pull`
LANGUAGES="es-ES fr he hu in-context id it ja ko pl ru sv-SE zh-CN"

ARG=''
for LANGUAGE in $LANGUAGES; do
	ARG+="-l $LANGUAGE "
done
crowdin pull $ARG

./fix\ in-context.sh
