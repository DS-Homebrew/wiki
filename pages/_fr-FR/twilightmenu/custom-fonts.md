---
lang: fr-FR
layout: wiki
section: twilightmenu
category: customization
title: Polices personnalisées
description: Comment utiliser des polices personnalisées avec TWiLight Menu++
---

TWiLight Menu++ peut utiliser des polices personnalisées au format NFTR (Nitro FonT Resource). Elles seront utilisées dans les paramètres, les titres du manuel, et dans les thèmes Nintendo DSi, Nintendo 3DS, SEGA Saturn, et Homebrew Launcher.

### Informations sur les polices incluses
Trois polices sont incluses avec TWiLight Menu++. Lorsque TWiLight Menu++ fonctionne en mode DSi, elles contiennent tous les caractères nécessaires pour toutes les langues dans lesquelles TWiLight est traduit, mais lorsqu'il fonctionnent en mode DS, elles sont plus limitées en raison de la limitation de la RAM. Elles sont les suivantes :
- Par défaut : cette police utilise la police officielle de la DSi comme police principale et prend en charge tous les caractères utilisés dans TWiLight Menu++ lui-même dans toutes les langues en mode DS
- Chinois (simplifié) : cette police utilise Noto Sans CS comme police principale et comporte beaucoup plus de caractères chinois (simplifiés) en mode DS, au détriment des caractères des autres langues
- Coréen : cette police est identique à Default en mode DSi, mais en mode DS, il dispose d'un ensemble plus complet de hangeul, au détriment des caractères des autres langues

### Structure du répertoire
Les polices personnalisées sont chargées à partir de `sd:/_nds/TWiLightMenu/extras/fonts/[nom de la police]/[fichier de police].nftr` où `[nom de la police]` est le nom que vous voulez et `[fichier de police].nftr` est l'un des suivants :
- `large-ds.nftr`, `large-dsi.nftr`, ou `large.nftr` : la plus grande police utilisée pour les titres
- `small-ds.nftr`, `small-dsi.nftr`, ou `small.nftr` : la plus petite police utilisée pour la plupart des autres textes

Les fichiers `-ds` et `-dsi` ont une priorité plus élevée que la normale et s'ils sont trouvés, ils seront utilisés lorsque TWiLight Menu++ fonctionne en mode DS ou DSi respectivement.

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
