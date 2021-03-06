---
lang: pl-PL
layout: wiki
section: twilightmenu
category: installing
title: Instalacja (Flashcard)
description: Jak zainstalować TWiLight Menu++ na Flashcardzie Nintendo DS
---

### Instalacja
1. Pobierz najnowszą wersję `TWiLightMenu-Flashcard.7z` ze [strony wydań](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Wypakuj `TWiLightMenu-Flashcard.7z`
1. Skopiuj folder `_nds` do katalogu głównego karty microSD nagrywarki
1. Skopiuj plik `BOOT.NDS` do katalogu głównego karty microSD nagrywarki
1. Skopiuj folder `roms` do katalogu głównego karty microSD nagrywarki
1. Jeśli już masz dane zapisu, przenieś pliki `.sav`, które są umiejscowione razem z ROMami, do nowego folderu `saves`, który także ma się znaleźć razem z ROMami
1. ...
   - **DS Phat / Lite users:** If booting `BOOT.NDS` causes a white screen lock-up, insert a DS Memory Expansion Pak, and try again
   - **DSi / 3DS users:** Run TWLMenu++ on the console's SD card, and turn on `SCFG access in Slot-1`
      - Pozwoli to na użycie szybkości zegara TWL i/lub przyszpieszenie VRAM twoich gier na flashcardzie, a także na dostęp do karty SD konsoli

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
1. Ustaw `Użyj nds-bootstrap (B4DS)` na `Nie`, żeby był używany firmware flashcarda zamiast nds-bootstrap

### Autobotowanie TWiLight Menu++
1. Wypakuj zawartość `Autoboot/(Twój nagrywarka)` do katalogu głównego karty microSD nagrywarki
   - Pomiń ten krok, jeśli nie widzisz swojej nagrywarki
1. ...
   - **DS Phat / DS Lite users:** Go to settings in the DS menu, and turn on auto-start, so your flashcard will start on boot
   - **DSi / 3DS users:** Run TWLMenu++ on the console's SD card, and turn on `Auto-start Slot-1`
