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
   - **użytkownicy DS Phat/Lite:** Przejdź do ustawień w menu DS i włącz autostart, aby flashcard uruchamiał się przy starcie systemu
   - **użytkownicy DSi/3DS:** Uruchom TWLMenu++ na karcie SD konsoli i włącz `Auto-start Slotu-1`
