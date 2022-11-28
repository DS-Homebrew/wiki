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
1. Pobierz najnowszą wersje [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
1. Wypakuj `TWiLightMenu-Flashcard.7z`
1. Skopiuj folder `_nds` do katalogu głównego karty microSD nagrywarki
1. Skopiuj plik `BOOT.NDS` do katalogu głównego karty microSD nagrywarki
1. Skopiuj folder `roms` do katalogu głównego karty microSD nagrywarki
1. Jeśli już masz dane zapisu, przenieś pliki `.sav`, które są umiejscowione razem z ROMami, do nowego folderu `saves`, który także ma się znaleźć razem z ROMami
1. ...
   - **Użytkownicy DS Phat/Lite:**Jeśli uruchamianie `BOOT.NDS` powoduje zablokowanie na białym ekranie, włóż DS Memory Expansion Pak i spróbuj ponownie
   - **Użytkownicy DSi/3DS:** Uruchom TWLMenu++ na karcie SD konsoli, Otwórz Ustawienia TWLMenu++, zmień stronę ustawień na `Misc. Settings` i włącz `SCFG access in Slot-1` oraz ustaw `Slot-1: Touch Mode` na `DSi Mode` .
      - Pozwoli to na wykorzystanie prędkości zegara TWL i/lub zwiększenia pamięci VRAM w grach z karty flash, a także na dostęp do karty SD konsoli i uruchamianie gier DSi-Enhanced/DSi-Exclusive/DSiWare w trybie DSi z karty flash
      - With this enabled you can use <kbd>SELECT</kbd> + <kbd>Up</kbd>/<kbd>Down</kbd> to switch between your internal SD card and your flashcard's SD card
      - To use the above features, you need to launch your flashcard via TWLMenu++ instead of the system menu

### Autobooting TWiLight Menu++
1. Extract the content(s) of `Autoboot/(your flashcard)` to the root of the flashcard's microSD card
   - Skip this, if you don't see your flashcard
1. ...
   - **DS Phat/Lite users:** Go to settings in the DS menu, and turn on auto-start, so your flashcard will start on boot
   - **DSi/3DS users:** Run TWLMenu++ on the console's SD card, open TWLMenu++ Settings, switch to `Misc settings` page, and turn on `Auto-start Slot-1`

### To run games using your flashcard firmware

Please note this only works if your flashcard is set to autoboot TWiLight Menu++. See above section for how to do so.
{:.alert .alert-warning}

Please note that not all flashcards support running games in this fashion. If the below steps do not apply to your flashcard, you can skip this section.
{:.alert .alert-warning}

1. Extract what's in `Flashcart Loader/(your flashcard)` to the root of the flashcard's microSD card
   - A README.txt file is present in the `Flashcart Loader` folder, to help find which flashcart loader is appropriate for your flashcard.
   - If you have done so, continue to step 3. If not, follow the steps below the flashcard list below

1. For these flashcards:
   - R4i-SDHC (r4i-sdhc.com)
   - r4isdhc.com 2014-2022 cards (**not** .hk or .com.cn)
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS
   - DSTT(i)
   - DSONE SDHC & DSONEi (non-SDHC models are ***not*** supported)
   - M3 DS Real
   - M3i Zero (non-GMP-Z003 model)
   - iTouchDS and iTouch2 (use the M3Real_M3iZero YSMenu files)
   - R4(i)RTS (r4rts.com) (use the M3Real_M3iZero YSMenu files)
   - R4 SDHC RTS (black cartridge) (r4isdhc.com) (use the M3Real_M3iZero YSMenu files)

   Install [RetroGameFan's YSMenu](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/).
      - Make sure you have `YSMenu.nds` (renamed from `TTMenu.dat` if there isn't one) and the `TTMenu` folder on the flashcard microSD root
1. Open TWLMenu++ Settings, switch to `nds-bootstrap settings` page, and set `Use nds-bootstrap` to `No`, so the flashcard firmware will be used instead of nds-bootstrap
