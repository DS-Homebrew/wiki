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
1. Pobierz najnowsze [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
1. Wypakuj `TWiLightMenu-Flashcard.7z`
1. Skopiuj folder `_nds` do katalogu głównego karty microSD nagrywarki
1. Skopiuj plik `BOOT.NDS` do katalogu głównego karty microSD nagrywarki
1. Skopiuj folder `roms` do katalogu głównego karty microSD nagrywarki
1. Jeśli już masz dane zapisu, przenieś pliki `.sav`, które są umiejscowione razem z ROMami, do nowego folderu `saves`, który także ma się znaleźć razem z ROMami
1. ...
   - **użytkownicy DS Phat/Lite:**Jeśli uruchomienie `BOOT.NDS` powoduje zablokowanie na białym ekranie, włóż DS Memory Expansion Pak i spróbuj ponownie
   - **użytkownicy DSi/3DS:** Uruchom TWLMenu++ na karcie SD konsoli i włącz `dostęp doSCFG w Slot-1` oraz ustaw `Slot-1: Tryb Dotyku` na `DSi Mode`
      - Pozwoli to na wykorzystanie prędkości zegara TWL i/lub zwiększenia pamięci VRAM w grach z karty flash, a także na dostęp do karty SD konsoli i uruchamianie gier DSi-Enhanced/DSi-Exclusive/DSiWare w trybie DSi z karty flash

### Aby uruchomić gry używając firmware flashcardu

Please note that not all flashcards support running games in this fashion. If the below steps do not apply to your flashcard, you can skip this section.
{:.alert .alert-warning}

1. Wypakuj to co jest `Flashcart Loader/(Twój flashcard)` do katalogu głównego karty microSD nagrywarki
   - If you have done so, continue to step 3. Jeśli nie, wykonaj kroki poniżej listy flashcardów

1. Dla tych flashcardów:
   - R4i-SDHC (r4i-sdhc.com)
   - r4isdhc.com 2014-2020 cards
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS
   - DSTT(i)
   - M3 DS Real
   - M3i Zero (non-GMP-Z003 model)
   - DSONE SDHC & DSONEi

   Install [RetroGameFan's YSMenu](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/).
      - Make sure you have `YSMenu.nds` (renamed from `TTMenu.dat` if there isn't one) and the `TTMenu` folder on the flashcard microSD root
1. Ustaw `Użyj nds-bootstrap` na `Nie`, żeby oprogramowanie flashcard było używane zamiast nds-bootstrap

### Autobotowanie TWiLight Menu++
1. Wypakuj zawartość `Autoboot/(Twój nagrywarka)` do katalogu głównego karty microSD nagrywarki
   - Pomiń ten krok, jeśli nie widzisz swojej nagrywarki
1. ...
   - **użytkownicy DS Phat/Lite:** Przejdź do ustawień w menu DS i włącz autostart, aby flashcard uruchamiał się przy starcie systemu
   - **użytkownicy DSi/3DS:** Uruchom TWLMenu++ na karcie SD konsoli i włącz `Auto-start Slotu-1`
