---
lang: sv-SE
layout: wiki
section: twilightmenu
category: installing
title: Installation (3DS)
long_title: Att installera TWiLight Menu++ (3DS)
description: Hur man installerar TWiLight Menu+ + på Nintendo 3DS
tabs:
  - 
    working-camera: Fungerande Kamera
    non-working-camera: Ej fungerande Kamera
    manual: Manuell
---

Du måste först ha Custom Firmware på din 3DS, följ [3ds.hacks.guide](https://3ds.hacks.guide) för att installera det
{:.alert .alert-info}

{% capture tab-working-camera %}
1. Öppna FBI och välj `Remote Install`, sedan `Scan QR Code`
1. Skanna denna QR-kod för att installera den senaste versionen av [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![Universal-Updater QR kod](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. Stäng FBI och starta Universal-Updater
   - Om det inte dyker upp på hemmenyn, starta om din 3DS
1. Hitta TWiLight Menu++ i apprutnätet. Du kan söka med den tredje fliken i sidofältet om du har problem med att hitta appen
   - Appen har denna ikon: ![TWiLight Menu++ ikon](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Tryck på <kbd class="face">A</kbd> eller tryck på nedladdningsikonen i sidofältet och välj `TWiLight Menu++` för att installera den
   - Det kommer att ta ett tag
{% endcapture %}
{% assign tab-working-camera = tab-working-camera | split: "////////" %}

{% capture tab-non-working-camera %}
1. Download the latest [`Universal-Updater.cia`](https://github.com/Universal-Team/Universal-Updater/releases/latest/download/Universal-Updater.cia)
1. Placera filen `Universal-Updater.cia` var som helst på ditt SD-kort
1. Starta FBI på din Nintendo 3DS
1. I FBI, gå till den plats du klistrade in `Universal-Updater.cia` filen
1. Välj filen `Universal-Updater.cia` och tryck på "Install & Delete"
1. Stäng FBI och starta Universal-Updater
   - Om det inte dyker upp på hemmenyn, starta om din 3DS
1. Hitta TWiLight Menu++ i apprutnätet. Du kan söka med den tredje fliken i sidofältet om du har problem med att hitta appen
   - Appen har denna ikon: ![TWiLight Menu++ ikon](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Tryck på <kbd class="face">A</kbd> eller tryck på nedladdningsikonen i sidofältet och välj `TWiLight Menu++` för att installera den
   - Det kommer att ta ett tag
{% endcapture %}
{% assign tab-non-working-camera = tab-non-working-camera | split: "////////" %}

{% capture tab-manual %}
1. Download the latest [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
1. Extrahera `TWiLightMenu-3DS.7z`
1. Kopiera mappen `_nds` till ditt SD-korts rot
1. Kopiera filen `BOOT.NDS` till din SD-korts rot
1. Kopiera mappen `roms` till ditt SD-korts rot
1. Kopiera de två `.cia` filerna till ditt SD-korts rot
1. På din 3DS, installera de två CIA filerna med FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Installation

{% assign tabs = tab-working-camera | concat: tab-non-working-camera | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}
