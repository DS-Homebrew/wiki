---
lang: fr-FR
layout: wiki
section: ds-index
category: guides
title: Dumping du BIOS/Firmware
description: Comment extraire le BIOS de la Nintendo DS ou DSi de votre console
tabs:
  - 
    dsi-sd-card: DSi avec Unlaunch
    flashcard: Linker
---

Certains émulateurs, tels que melonDS, nécessitent le BIOS et le firmware du mode DS ou DSi, qui peuvent être extraits de votre console. Il y a deux façons distinctes d'y parvenir, en utilisant :
- une DSi avec Unlaunch, OU
- une DS/DS Lite/3DS ou une DSi sans Unlaunch, ainsi qu'un linker compatible avec la console

La méthode DSi permet d'extraire les fichiers BIOS et firmware des modes DS et DSi. La méthode des linkers ne permet d'extraire que les fichiers en mode DS.

{% capture tab-dsi-sd-card %}

Cette page suppose que vous exécutez un environnement CFW moderne d'après [dsi.cfw.guide](https://dsi.cfw.guide).
{:.alert .alert-warning}

### Partie 1 : Obtention des fichiers nécessaires

1. Téléchargez [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)
1. Copiez `dsibiosdumper.nds` du fichier `dsibiosdumper.7z` à la racine de votre carte SD
1. Réinsérez votre carte SD dans votre console

### Partie 2 : dsibiosdumper
1. Pendant que votre appareil est toujours éteint, maintenez les boutons suivants enfoncés : <kbd class="face">A</kbd> + <kbd class="face">B</kbd>, et tout en maintenant ces boutons enfoncés, allumez votre appareil
1. Votre console va démarrer dans la configuration d'Unlaunch
1. Lancez dsibiosdumper à partir de la liste des applications
1. Appuyez sur <kbd class="face">A</kbd> pour tout dumper
1. Attendez la fin du processus
    - Cela peut prendre un certain temps
1. Une fois le processus terminé, appuyez sur <kbd>SELECT</kbd> pour quitter dsibiosdumper
1. Éteignez votre appareil
1. Insérez votre carte SD dans votre ordinateur

Tous les fichiers nécessaires se trouvent dans le dossier `dsidump` à la racine de votre carte SD.
{:.alert .alert-success}

{% endcapture %}
{% assign tab-dsi-sd-card = tab-dsi-sd-card | split: "////////" %}

{% capture tab-flashcard %}

### Partie 1 : Obtention des fichiers nécessaires

1. Téléchargez [dsbf_dump](https://github.com/DS-Homebrew/dsbf_dump/releases/latest) (le fichier `.nds`)
1. Copiez `dsbf_dump.nds` à la racine de votre carte SD
1. Réinsérez votre carte SD dans votre linker

### Partie 2 : dsbf_dump
1. Allumez votre appareil
1. Lancez votre linker
1. Naviguez jusqu'à la racine de votre carte SD et lancez dsbf_dump
1. Attendez la fin du processus
1. Une fois le processus terminé, appuyez sur <kbd>START</kbd> pour éteindre votre appareil
  - Sur les systèmes de la famille 3DS, l'écran affichera plutôt « Logiciel fermé ». Éteignez votre appareil à partir de cet écran
1. Insérez votre carte SD dans votre ordinateur

Tous les fichiers nécessaires se trouvent dans un dossier spécifié sur l'écran supérieur de votre appareil.
{:.alert .alert-success}

{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% assign tabs = tab-dsi-sd-card | concat: tab-flashcard %}
{% include tabs.html index=0 tabs=tabs %}
