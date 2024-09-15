---
lang: pl_PL
layout: wiki
section: twilightmenu
category: updating
title: Aktualizacja (Flashcard)
long_title: Aktualizowanie TWiLight Menu++ (Flashcard)
description: Jak zaktualizować TWiLight Menu++ na Flashcardzie Nintendo DS
---

If updating from a version older than v16.4.0, please move your `.sav` files for DS games to a new folder called `saves`, with the `saves` folder being in the same place as the DS ROMs.
{:.alert .alert-info}

If updating from a version older than v21.0.0, please move your `.pub` and/or `.prv` files for DSiWare titles to a new folder called `saves`, with the `saves` folder being in the same place as the DSiWare ROMs.
{:.alert .alert-info}

### Aktualizacja
1. Pobierz najnowszą wersje [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
    - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Wypakuj `TWiLightMenu-Flashcard.7z`
1. Copy the `_nds` folder to your flashcard's microSD card root, replacing any existing files
    - If using macOS, make sure to **copy** and `Merge`, don't `Replace`
1. Copy the `BOOT.NDS` file to your flashcard's microSD card root, replacing any existing files
1. If TWLMenu++ does not boot after updating, then update the autoboot file(s) as well

### Więcej kroków po stronie kart SD DSi/3DS

If you can switch between the SD and flashcard contents in TWLMenu++, and if the flashcard TWLMenu++ is on v16.3.0 or later, please follow these steps.

1. Przejdź do ustawień TWLMenu++
1. Wybierz `Update TWiLight Menu++`
1. Wybierz `Slot-1 microSD > Konsola (micro)SD`
