---
lang: sv-SE
layout: wiki
section: twilightmenu
category: installing
title: Installing (3DS)
description: How to install TWiLight Menu++ on the Nintendo 3DS
---

You will first need to have Custom Firmware on your 3DS, follow [3ds.hacks.guide](https://3ds.hacks.guide) to install it
{:.alert .alert-info}

{% capture tab-working-camera %}
1. Öppna FBI och välj `Remote Install`, sedan `Scan QR Code`
1. Skanna denna QR-kod för att installera den senaste versionen av [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![Universal-Updater QR kod](https://db.universal-team.net/assets/images/qr/universal-updater.cia.png)
1. Stäng FBI och starta Universal-Updater
   - Om det inte dyker upp på hemmenyn, starta om din 3DS
1. Hitta TWiLight Menu++ i apprutnätet. Du kan söka med den tredje fliken i sidofältet om du har problem med att hitta appen
   - Appen har denna ikon: ![TWiLight Menu++ ikon](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Tryck på <kbd class="face">A</kbd> eller tryck på nedladdningsikonen i sidofältet och välj `TWiLight Menu++` för att installera den
   - This will take a while
{% endcapture %}

{% capture tab-non-working-camera %}
1. Ladda ner filen `Universal-Updater.cia` från [Universal-Updaters release sida](https://github.com/Universal-Team/Universal-Updater/releases)
1. Placera filen `Universal-Updater.cia` var som helst på ditt SD-kort
1. Starta FBI på din Nintendo 3DS
1. I FBI, gå till den plats du klistrade in `Universal-Updater.cia` filen
1. Välj filen `Universal-Updater.cia` och tryck på "Install & Delete"
1. Stäng FBI och starta Universal-Updater
   - Om det inte dyker upp på hemmenyn, starta om din 3DS
1. Hitta TWiLight Menu++ i apprutnätet. Du kan söka med den tredje fliken i sidofältet om du har problem med att hitta appen
   - Appen har denna ikon: ![TWiLight Menu++ ikon](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Tryck på <kbd class="face">A</kbd> eller tryck på nedladdningsikonen i sidofältet och välj `TWiLight Menu++` för att installera den
   - This will take a while
{% endcapture %}

{% capture tab-manual %}
1. Download the latest version of `TWiLightMenu-3DS.7z` from [the releases page](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Extract `TWiLightMenu-3DS.7z`
1. Copy the `_nds` folder to your SD card root
1. Copy the `BOOT.NDS` file to your SD card root
1. Copy the `roms` folder to your SD card root
1. Copy the two `.cia` files to your SD card root
1. On your 3DS, install the two CIAs with FBI
{% endcapture %}

### Installing

<div class="tab-container">
   <div class="pb-3">
      <a class="tab-link btn btn-outline-secondary tab-default" href="#tab-working-camera" onclick="openTab(event, event.currentTarget)" data-tab-name="working-camera">Working Camera</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-non-working-camera" onclick="openTab(event, event.currentTarget)" data-tab-name="non-working-camera">Non-Working Camera</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-manual" onclick="openTab(event, event.currentTarget)" data-tab-name="manual">Manual</a>
   </div>
   <div id="tab-working-camera">
      <noscript><h4>Working Camera</h4></noscript>
      {{ tab-working-camera | markdownify }}
   </div>
   <div id="tab-non-working-camera">
      <noscript><h4>Non-Working Camera</h4></noscript>
      {{ tab-non-working-camera | markdownify }}
   </div>
   <div id="tab-manual">
      <noscript><h4>Manual</h4></noscript>
      {{ tab-manual | markdownify }}
   </div>
</div>
