---
lang: fr-FR
layout: wiki
section: twilightmenu
category: other
title: Comment obtenir des jaquettes
description: Comment obtenir des jaquettes de jeux dans TWiLight Menu++
tabs:
  - 
    windows: Windows
    other: macOS/Linux
    manual: Manuel
---

{% capture tab-windows %}
1. Download version 0.6 of [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases/tag/0.6)
1. Extract `TwilightBoxart-Windows-UX.zip` and run `TwilightBoxart.exe`
1. Click `Detect SD`
   - If it doesn't find the correct SD card click `Browse...` and select the right one
1. Change the size, border, etc options to your liking
1. Click `Start`
1. Assurez-vous que les jaquettes sont définies pour être affichées dans les paramètres de TWiLight Menu++
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos_linux %}
1. Download version 0.6 of [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases/tag/0.6)
1. Extract the `.zip`
1. Open `TwilightBoxart.ini` in the extracted folder in a text editor
1. Type the path to your SD card after `SdRoot=`, then save the file
   - On macOS this is `/Volumes/` then the name of your SD card
1. Open the terminal
1. In the terminal, type `cd ` then drag drop the folder with `TwilightBoxart.CLI` in it onto your terminal
1. Run `chmod +x TwilightBoxart.CLI`
1. Run `./TwilightBoxart.CLI`
1. Say `Yes` if it shows your SD path correctly
1. Assurez-vous que les jaquettes sont définies pour être affichées dans les paramètres de TWiLight Menu++
{% endcapture %}
{% assign tab-macos_linux = tab-macos_linux | split: "////////" %}

{% capture tab-manual %}
1. Téléchargez un pack de boxarts en png à partir de [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs), sous la catégorie **S Covers (png)**
1. Extrayez les fichiers .png vers `sd:/_nds/TWiLightMenu/boxart`
1. Assurez-vous que les jaquettes sont définies pour être affichées dans les paramètres de TWiLight Menu++
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos_linux | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

**Pour ajouter vos propres jaquettes :** Placez-les dans `sd:/_nds/TWiLightMenu/boxart`.
- Elles peuvent avoir soit le TID du jeu (par exemple : `ASME.png`), soit le nom du fichier (par exemple : `SM64DS.nds.png`)
- Elles doivent être au format `.png`, avec une taille recommandée de 128 × 115 et maximale de 208 × 143
- Si, avec votre configuration de **TW**i**L**ight Menu++, l'affichage des jaquettes est réglé sur `En cache`, la taille de l'image doit être inférieure ou égale à 44 kio. Vous pouvez utiliser un outil comme [tinypng](https://tinypng.com/) pour compresser les images à une taille acceptable

Les jaquettes individuelles peuvent également être téléchargées sur GameTDB, dans la catégorie **S Covers (png)**.
