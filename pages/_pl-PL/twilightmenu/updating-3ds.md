---
lang: pl-PL
layout: wiki
section: twilightmenu
category: updating
title: Aktualizacja (3DS)
description: How to update TWiLight Menu++ on the Nintendo 3DS
---

If updating from a version older than v16.4.0, please move your `.sav` files for DS games to a new folder called `saves`, with the `saves` folder being in the same place as the DS roms.
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Otwórz Universal-Updater
   - Jeśli go nie posiadasz, postępuj zgodnie z instrukcją [instalowania](installing-3ds)
1. Znajdź TWiLight Menu++ w siatce aplikacji, możesz wyszukać za pomocą trzeciej karty na pasku bocznym, jeśli masz problem ze znalezieniem
1. Naciśnij <kbd class="face">A</kbd> lub naciśnij ikonę pobierania na pasku bocznym i wybierz `TWiLight Menu++` aby go zainstalować
   - This will take a while
{% endcapture %}

{% capture tab-manual %}
1. Download the latest version of `TWiLightMenu-3DS.7z` from [the releases page](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Extract `TWiLightMenu-3DS.7z`
1. Copy the `_nds` folder to your SD card root
1. Copy the `BOOT.NDS` file to your SD card root
1. Copy the two `.cia` files to your SD card root
1. On your 3DS, install the two CIAs with FBI
{% endcapture %}

### Aktualizacja

<div class="tab-container">
   <div class="pb-3">
      <a class="tab-link btn btn-outline-secondary tab-default" href="#tab-universal-updater" onclick="openTab(event, event.currentTarget)" data-tab-name="universal-updater">Universal-Updater</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-manual" onclick="openTab(event, event.currentTarget)" data-tab-name="manual">Manual</a>
   </div>
   <div id="tab-universal-updater">
      <noscript><h4>Universal-Updater</h4></noscript>
      {{ tab-universal-updater | markdownify }}
   </div>
   <div id="tab-manual">
      <noscript><h4>Manual</h4></noscript>
      {{ tab-manual | markdownify }}
   </div>
</div>

### Więcej kroków dla użytkowników karty flashcard

If you can switch between the SD and flashcard contents in TWLMenu++, and if the flashcard TWLMenu++ is on v16.3.0 or later, please follow these steps.

1. Go into TWLMenu++ Settings
1. Select `Update TWiLight Menu++`
1. Select `Console (micro)SD > Slot-1 microSD`
