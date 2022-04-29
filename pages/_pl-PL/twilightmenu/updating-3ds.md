---
lang: pl-PL
layout: wiki
section: twilightmenu
category: updating
title: Aktualizacja (3DS)
long_title: Aktualizowanie TWiLight Menu++ (3DS)
description: Jak zaktualizować TWiLight Menu++ na Nintendo 3DS
tabs:
  - 
    universal-updater: Universal-Updater
    manual: Instrukcja
---

If updating from a version older than v6.8.3, please move your `.sav` files for DS games to a new folder called `saves`, with the `saves` folder being in the same place as the DS ROMs.
{:.alert .alert-info}

If updating from a version older than v21.0.0, please move your `.pub` and/or `.prv` files for DSiWare titles to a new folder called `saves`, with the `saves` folder being in the same place as the DSiWare ROMs.
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
1. Pobierz najnowszą wersję [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
1. Wypakuj `TWiLightMenu-3DS.7z`
1. Copy the `_nds` folder to your SD card root, replacing any existing files
   - If using macOS, make sure **copy** and `Merge`, don't `Replace`
1. Copy the `BOOT.NDS` file to your SD card root, replacing any existing files
1. Copy the two `.cia` files to your SD card root, replacing any existing files
1. Na swoim 3DS zainstaluj dwa CIA w FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Aktualizacja

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

### Więcej kroków dla użytkowników karty flashcard

If you can switch between the SD and flashcard contents in TWLMenu++, and if the flashcard TWLMenu++ is on v16.3.0 or later, please follow these steps.

1. Przejdź do ustawień TWLMenu++
1. Wybierz `Update TWiLight Menu++`
1. Wybierz `konsola (micro)SD > Slot-1 microSD`
