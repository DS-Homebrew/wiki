---
lang: en-US
layout: wiki
section: twilightmenu
category: customization
title: Polices Personnalisées
description: Comment utiliser des polices personnalisées avec TWiLight Menu++
---

TWiLight Menu++ peut utiliser des polices personnalisées au format NFTR (Nitro FonT Ressource). Ils seront utilisés dans les paramètres, les titres du Manuel, et dans les thèmes Nintendo DSi, Nintendo 3DS, SEGA Saturn, et Homebrew Launcher.

### Information de police incluse
Il y a trois polices incluses avec TWiLight Menu++. Lorsque TWiLight Menu++ est lancé en mode DSi ils contiennent tous les caractères qui devraient être nécessaires pour toutes les langues que TWiLight est traduit, mais quand ils fonctionnent en mode DS, ils sont plus limités en raison des limitations de la RAM. Ils sont les suivants:
- Par défaut : Ceci utilise la police officielle DSi comme police principale et supporte tous les caractères qui sont utilisés dans TWiLight Menu++ elle-même dans toutes les langues en mode DS
- Chinois (Simplifié) : Il utilise Noto Sans CS comme police principale et a beaucoup plus de caractères chinois (Simplifiés) en mode DS, au prix de caractères pour les autres langues
- Coréen : Ceci est identique à la valeur par défaut en mode DSi, mais en mode DS a un ensemble plus complet de hangul, au prix de caractères pour d'autres langues

### Structures des dossiers
Les polices personnalisées sont chargées depuis `sd:/_nds/TWiLightMenu/extras/fonts/[nom de la police]/[fichier de police].ftr` où `[nom de la police]` est le nom que vous voulez et `[fichier de police].ftr` est l'un des suivants :
- `Large-ds.nftr`, `Large-dsi.nftr`, ou `large.nftr`: La police plus grande utilisée pour les titres
- `small-ds.nftr`, `small-dsi.nftr`, ou `small.nftr`: La police plus petite utilisée pour la plupart des autres textes

Les fichiers `-ds` et `-dsi` ont une priorité supérieure à la normale, et s'ils sont trouvés, seront utilisés lorsque TWiLight Menu++ est exécuté en mode DS ou DSi respectivement.

### Générer des polices personnalisées
Vous pouvez faire votre propre police en utilisant un logiciel tel que [nftr-editor](https://pk11.us/nftr-editor/) de Pk11. Pour régénérer une des polices existantes de TWiLight Menu++ :
1. Charger un fichier NFTR dans nftr-editor
1. Tapez les noms des polices que vous voulez utiliser de la plus haute à la plus basse priorité dans la zone de texte `Input font`, séparée par des virgules
   - Vous pouvez voir un aperçu des polices d'entrée dans la zone supérieure à gauche et le NFTR actuel dans la zone inférieure
1. Cliquez sur `Générer à partir de la police`, puis dites `OK` pour régénérer les caractères existants et `Annuler` pour régénérer les caractères du bouton spécial (ex. &#xE000;)
1. Cliquez sur `Enregistrer`, puis répétez pour les autres tailles
