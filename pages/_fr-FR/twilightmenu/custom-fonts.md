---
lang: fr-FR
layout: wiki
section: twilightmenu
category: customization
title: Polices personnalisées
description: Comment utiliser des polices personnalisées avec TWiLight Menu++
---

TWiLight Menu++ peut utiliser des polices personnalisées au format NFTR (Nitro FonT Resource). They will be used in Settings, the Manual's titles, and in the Nintendo DSi, Nintendo 3DS, SEGA Saturn, and Homebrew Launcher UIs.

### Structure du répertoire
Les polices personnalisées sont chargées à partir de `sd:/_nds/TWiLightMenu/extras/fonts/[nom de la police]/[fichier de police].nftr` où `[nom de la police]` est le nom que vous voulez et `[fichier de police].nftr` est l'un des suivants :
- `large.nftr`: The larger font used for titles
- `small.nftr`: The smaller font used for most other text

### Theme fonts
You may add fonts to [custom DSi/3DS themes](custom-dsi-3ds-themes), which will override whatever is set in TWiLight Menu++ settings. These fonts go in the `font` folder, in the theme's root folder.

Custom themes can additionally use override fonts for the date & time using `date_time.nftr`, and the console username with `username.nftr`.

### Génération de polices personnalisées
You can make your own fonts using a utility such as Pk11's [nftr-editor](https://web.archive.org/web/20240618221756/https://pk11.us/nftr-editor/). Pour régénérer l'une des polices existantes de TWiLight Menu++ en l'utilisant :
1. Charger un fichier NFTR dans nftr-editor
1. Tapez les noms des polices que vous voulez utiliser de la plus haute à la plus basse priorité dans la zone de texte `Input font`, séparés par des virgules
    - Vous pouvez voir un aperçu des polices d'entrée dans la boîte supérieure à gauche et le NFTR actuel dans la boîte inférieure
1. Cliquez sur `Generate from font`, puis dites `OK` pour régénérer les caractères existants et `Cancel` pour régénérer les caractères des boutons spéciaux (par ex. )
1. Cliquer sur `Save`, puis répéter pour les autres tailles
