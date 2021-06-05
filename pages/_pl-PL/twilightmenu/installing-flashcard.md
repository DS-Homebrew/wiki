---
lang: pl-PL
layout: wiki
section: twilightmenu
category: installing
title: Instalacja (Flashcard)
long_title: Instalacja TWiLight Menu++ (Flashcard)
description: Jak zainstalować TWiLight Menu++ na Nintendo DS z flashcard
---

### Instalacja
1. Download the latest [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
1. Wypakuj `TWiLightMenu-Flashcard.7z`
1. Skopiuj folder `_nds` do katalogu głównego karty microSD nagrywarki
1. Skopiuj plik `BOOT.NDS` do katalogu głównego karty microSD nagrywarki
1. Skopiuj folder `roms` do katalogu głównego karty microSD nagrywarki
1. Jeśli już masz dane zapisu, przenieś pliki `.sav`, które są umiejscowione razem z ROMami, do nowego folderu `saves`, który także ma się znaleźć razem z ROMami
1. ...
   - **DS Phat/Lite users:** If booting `BOOT.NDS` causes a white screen lock-up, insert a DS Memory Expansion Pak, and try again
   - **DSi/3DS users:** Run TWLMenu++ on the console's SD card, and turn on `SCFG access in Slot-1` and set `Slot-1: Touch Mode` to `DSi Mode`
      - This will let you use TWL clock speed and/or VRAM boost on your flashcard games, as well as both accessing the console's SD card, and running DSi-Enhanced/DSi-Exclusive/DSiWare games in DSi mode from your flashcard

### Aby uruchomić gry używając firmware flashcardu
1. Wypakuj to co jest `Flashcart Loader/(Twój flashcard)` do katalogu głównego karty microSD nagrywarki
   - Jeśli to już zrobiłeś, przejdź do kroku 3. Jeśli nie, wykonaj kroki poniżej listy flashcardów

1. Dla tych flashcardów:
   - R4i-SDHC
   - nagrywarki r4isdhc.com
   - nagrywarki r4isdhc.hk
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS
   - DSTT(i)

   Zainstaluj YSMenu [stąd](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/)
      - Upewnij się że masz `YSMenu.nds` (zmień na tą nazwę plik `TTMenu.dat` w przypadku braku) i folder `TTMenu` w katalogu głównym karty microSD nagrywarki
1. Ustaw `Użyj nds-bootstrap` na `Nie`, żeby oprogramowanie flashcard było używane zamiast nds-bootstrap

### Autobotowanie TWiLight Menu++
1. Wypakuj zawartość `Autoboot/(Twój nagrywarka)` do katalogu głównego karty microSD nagrywarki
   - Pomiń ten krok, jeśli nie widzisz swojej nagrywarki
1. ...
   - **DS Phat/Lite users:** Go to settings in the DS menu, and turn on auto-start, so your flashcard will start on boot
   - **DSi/3DS users:** Run TWLMenu++ on the console's SD card, and turn on `Auto-start Slot-1`
