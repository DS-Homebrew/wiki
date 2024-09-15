---
lang: fr-FR
layout: wiki
section: twilightmenu
category: customization
title: Polices personnalisées
description: Comment utiliser des polices personnalisées avec TWiLight Menu++
---

TWiLight Menu++ peut utiliser des polices personnalisées au format NFTR (Nitro FonT Resource). Elles seront utilisées dans les paramètres, les titres du manuel, et dans les thèmes Nintendo DSi, Nintendo 3DS, SEGA Saturn, et Homebrew Launcher.

### Structure du répertoire
Les polices personnalisées sont chargées à partir de `sd:/_nds/TWiLightMenu/extras/fonts/[nom de la police]/[fichier de police].nftr` où `[nom de la police]` est le nom que vous voulez et `[fichier de police].nftr` est l'un des suivants :
- `large.nftr`: The larger font used for titles
- `small.nftr`: The smaller font used for most other text

### Polices de skin
Vous pouvez ajouter des polices de caractères pour [personnaliser les thèmes DSi/3DS](custom-dsi-3ds-skins), ce qui remplacera ce qui est défini dans les paramètres de TWiLight Menu++. Ces polices sont placées dans le dossier `font`, dans le dossier racine du skin.

Les skins personnalisés peuvent également utiliser des polices de remplacement pour la date et l'heure en utilisant `date_time.nftr`, et le nom d'utilisateur de la console avec `username.nftr`.

### Génération de polices personnalisées
Vous pouvez créer vos propres polices en utilisant un utilitaire tel que [nftr-editor](https://pk11.us/nftr-editor/) de Pk11. Pour régénérer l'une des polices existantes de TWiLight Menu++ en l'utilisant :
1. Charger un fichier NFTR dans nftr-editor
1. Tapez les noms des polices que vous voulez utiliser de la plus haute à la plus basse priorité dans la zone de texte `Input font`, séparés par des virgules
    - Vous pouvez voir un aperçu des polices d'entrée dans la boîte supérieure à gauche et le NFTR actuel dans la boîte inférieure
1. Cliquez sur `Generate from font`, puis dites `OK` pour régénérer les caractères existants et `Cancel` pour régénérer les caractères des boutons spéciaux (par ex. )
1. Cliquer sur `Save`, puis répéter pour les autres tailles
