---
lang: fr-FR
layout: wiki
section: gbarunner2
title: Dumping du BIOS GBA
description: Comment extraire le BIOS de la Nintendo GBA de votre console
tabs:
  - 
    3ds-sd-card: 3DS avec open_agb_firm
    gba-flashcart: GBA/DS/DS Lite avec un linker en mode GBA
---

Bien que la plupart des émulateurs GBA n'ont aucun problème pour jouer aux jeux GBA, certains émulateurs et hyperviseurs, tels que GBARunner2, peuvent avoir besoin du fichier BIOS pour lire correctement certains titres.

Il y a deux façons distinctes d'y parvenir, en utilisant :
- une 3DS doté d'un firmware personnalisé, OU
- une GBA/DS/DS Lite avec un linker en mode GBA

{% capture tab-3ds-sd-card %}
### Partie 1 : Obtention des fichiers nécessaires
1. Téléchargez [open_agb_firm](https://github.com/profi200/open_agb_firm/releases/latest) (le fichier `.7z`)
1. Téléchargez [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)
1. Créez un dossier nommé `payloads` à l'intérieur du dossier `/luma` s'il n'existe pas déjà
1. Copiez `open_agb_firm.firm` du fichier open_agb_firm `.7z` dans le dossier `/luma/payloads`
1. Copy `3ds` from the open_agb_firm `.7z` file to the root of your SD card
1. Copiez `Bios_Dumper.gba` à la racine de votre carte SD
1. Réinsérez votre carte SD dans votre console

### Partie 2 : Bios_Dumper
1. Appuyez et maintenez <kbd>START</kbd>, et tout en maintenant <kbd>START</kbd>, allumez votre appareil
    - Ceci lancera open_agb_firm
    - Si cela lance `Luma3DS Chainloader`, sélectionnez `open_agb_firm` dans ce menu
    - Si cela lance autre chose, c'est que vous n'avez pas copié `open_agb_firm.firm` dans le bon dossier de votre carte SD
1. Depuis open_agb_firm, lancez `Bios_Dumper.gba`
1. L'écran clignote en rouge, puis en vert
1. Attendez environ cinq secondes
1. Éteignez votre appareil

{% capture upload-bios-text %}
Depuis votre carte SD, téléversez `/3ds/open_agb_firm/saves/Bios_Dumper.sav` ici :
{% endcapture %}

### Partie 3 : Décompression du BIOS à partir du fichier de sauvegarde généré
1. Insérez votre carte SD dans votre ordinateur
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-3ds-sd-card = tab-3ds-sd-card | split: "////////" %}


{% capture tab-gba-flashcart %}
### Partie 1 : Obtention des fichiers nécessaires
1. Téléchargez [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)
1. Copiez `Bios_Dumper.gba` à la racine de la carte SD de votre linker
1. Réinsérez votre carte SD dans votre linker
1. Réinsérez votre linker GBA dans votre cartouche

### Partie 2 : Bios_Dumper
1. Lancez votre linker, puis lancez `Bios_Dumper.gba`
1. L'écran clignote en rouge, puis en vert
1. Attendez environ cinq secondes
1. Éteignez votre appareil

{% capture upload-bios-text %}
Depuis votre carte SD, téléversez `Bios_Dumper.sav` ici :
{% endcapture %}

### Partie 3 : Décompression du BIOS à partir du fichier de sauvegarde généré
1. Insérez votre carte SD dans votre ordinateur
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-gba-flashcart = tab-gba-flashcart | split: "////////" %}

{% assign tabs = tab-3ds-sd-card | concat: tab-gba-flashcart %}
{% include tabs.html index=0 tabs=tabs %}

Un fichier `bios.bin` sera automatiquement téléchargé. Il s'agit du fichier du BIOS GBA final.
{:.alert .alert-success}

<script src="https://geraintluff.github.io/sha256/sha256.min.js"></script>
<script src="/assets/js/bios-shrinker.js"></script>
