---
lang: pl-PL
layout: wiki
section: twilightmenu
category: updating
title: Aktualizacja (3DS)
description: Jak zaktualizować TWiLight Menu++ na Nintendo 3DS
tabs:
  - 
    universal-updater: Universal-Updater
    manual: Manual
---

Jeśli aktualizujesz z wersji starszej niż v16.4.0, prosimy o przeniesienie plików `.sav` do nowego folderu o nazwie `saves`, który ma się znajdować w tym samym miejscu co gry DS.
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Otwórz Universal-Updater
   - Jeśli go nie posiadasz, postępuj zgodnie z instrukcją [instalowania](installing-3ds)
1. Znajdź TWiLight Menu++ w siatce aplikacji, możesz wyszukać za pomocą trzeciej karty na pasku bocznym, jeśli masz problem ze znalezieniem
1. Naciśnij <kbd class="face">A</kbd> lub naciśnij ikonę pobierania na pasku bocznym i wybierz `TWiLight Menu++` aby go zainstalować
   - To trochę zajmie
{% endcapture %}
{% assign tab-universal-updater = tab-universal-updater | split: "////////" %}

{% capture tab-manual %}
1. Download the latest version of `TWiLightMenu-3DS.7z` from [the releases page](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Extract `TWiLightMenu-3DS.7z`
1. Copy the `_nds` folder to your SD card root
1. Copy the `BOOT.NDS` file to your SD card root
1. Copy the two `.cia` files to your SD card root
1. On your 3DS, install the two CIAs with FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Aktualizacja

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

### Więcej kroków dla użytkowników karty flashcard

If you can switch between the SD and flashcard contents in TWLMenu++, and if the flashcard TWLMenu++ is on v16.3.0 or later, please follow these steps.

1. Go into TWLMenu++ Settings
1. Select `Update TWiLight Menu++`
1. Select `Console (micro)SD > Slot-1 microSD`
