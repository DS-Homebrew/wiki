---
lang: pl_PL
layout: wiki
section: twilightmenu
category: other
title: Sterowanie
long_title: TWiLight menu++ Sterowanie
description: Sterowanie korzystania z TWiLight Menu++
---

#### Motywy Nintendo DSi, Nintendo 3DS, SEGA Saturn, i Homebrew Launcher
- <kbd>Lewa</kbd>/<kbd>Prawa</kbd>: wybór gry/aplikacji
- <kbd class="face">A</kbd>/<kbd>START</kbd>: Uruchom grę/aplikację
- <kbd class="l">L</kbd>/<kbd class="r">R</kbd> lub <kbd>SELECT</kbd> + <kbd>Lewa</kbd>/<kbd>Prawa</kbd>: Przełączanie stron
- (motyw DSi/Saturn/HBL) <kbd>SELECT</kbd> + <kbd>Góra</kbd>/<kbd>Dół</kbd> & i puść <kbd>SELECT</kbd>: Przełączanie między kartą SD a kartą flash
- <kbd class="face">Y</kbd>: Ustawienia dla gry
   - <kbd class="face">X</kbd>: Menu cheatów
      - <kbd class="face">A</kbd>: Przełącz cheat
      - <kbd class="face">B</kbd>: Wyjdź z menu cheatów
      - <kbd class="face">X</kbd>: Zapisz i wyjdź z menu cheatów
      - <kbd class="face">Y</kbd>: Pokaż opis cheatu
      - <kbd class="l">L</kbd>: Wyłącz wszystkie cheaty
- <kbd class="face">X</kbd>: Usuń/ukryj grę
- (motyw DSi/Saturn/HBL) <kbd>SELECT</kbd>: menu SELECT lub klasyczne menu DS (gdzie można uzyskać dostęp do menu systemu, ustawień TWiLight Menu++ i trybu GBA)

#### Motyw R4
- <kbd>Góra</kbd>/<kbd>Dół</kbd>: Wybierz grę/aplikację
- <kbd class="face">A</kbd>: Uruchom grę/aplikację
- <kbd class="l">L</kbd>: Przełącz między kartą SD i flashcard
- <kbd class="face">Y</kbd>: Ustawienia dla gry
   - <kbd class="face">X</kbd>: Menu cheatów
      - <kbd class="face">A</kbd>: Przełącz cheat
      - <kbd class="face">B</kbd>: Wyjdź z menu cheatów
      - <kbd class="face">X</kbd>: Zapisz i wyjdź z menu cheatów
      - <kbd class="face">Y</kbd>: Pokaż opis cheatu
      - <kbd class="l">L</kbd>: Wyłącz wszystkie cheaty

#### ROMy DS(i) (przy użyciu nds-bootstrap)
Nie dotyczy to DSiWare.
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Góra</kbd> + <kbd class="face">X</kbd> na 1 sekundę: Zamień ekrany
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Dół</kbd> + <kbd class="face">A</kbd> przez 3 sekundy: Zrzut RAM do `sd:/_nds/nds-bootstrap`jako `ramDump.bin`
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Dół</kbd> + <kbd class="face">B</kbd> przez 2 sekundy: Powrót do menu TWiLight ++
- <kbd class="l">L</kbd> + <kbd>Dół</kbd> + <kbd>SELECT</kbd>: Otwórz in-game menu
   - <kbd class="r">R</kbd>: Advance by one frame
   - Screenshot
      - <kbd>Up</kbd>/<kbd>Down</kbd>/<kbd>Left</kbd>/<kbd>Right</kbd>: Change VRAM bank
      - <kbd class="face">A</kbd>: Save screenshot
      - <kbd class="face">B</kbd>: Return to in-game menu
   - RAM Viewer
      - <kbd>Up</kbd>/<kbd>Down</kbd>: Scroll
      - <kbd>Left</kbd>/<kbd>Right</kbd>: Fast scroll
      - <kbd class="r">R</kbd> + <kbd>Down</kbd>/<kbd>Up</kbd>: Faster scroll
      - <kbd class="r">R</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd>: Fastest scroll
      - <kbd class="face">A</kbd>: Enter RAM Editor
      - <kbd class="face">B</kbd>: Return to in-game menu
      - <kbd class="face">Y</kbd>: Specify an address to jump to
        - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease selected value
        - <kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Return to RAM Viewer/Editor at specified address
   - RAM Editor
      - <kbd>Up</kbd>/<kbd>Down</kbd>/<kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
      - <kbd class="face">A</kbd>: Modify selected value
         - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease value by 1h
         - <kbd>Left</kbd>/<kbd>Right</kbd>: Increase/Decrease value by 10h
         - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Finish modifying value
      - <kbd class="face">B</kbd>: Return to RAM Viewer
      - <kbd class="face">Y</kbd>: Specify an address to jump to
        - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease selected value
        - <kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Return to RAM Viewer/Editor at specified address
- The in-game menu is not accessible in DSi-Enhanced/Exclusive games running in DSi Mode, so attempting to use the button combo in those games will do nothing
- W trybie B4DS działa tylko kombinacja przycisków zamiany ekranu, pozostałe nie działają
- Powrót do menu TWiLight Menu++ może nie działać na niektórych modelach O3DS
- The button combination for opening the in-game menu can be changed in the TWiLight Menu++ settings
- Screenshots are saved to `sd:/_nds/nds-bootstrap/screenshots.tar`. This file can be opened using an archive viewer such as [7-Zip](https://www.7-zip.org/)

#### Skróty startowe
Należy je nacisnąć na ekranie startowym TWiLight Menu++ / zaraz po ekranie startowym Nintendo DSi.

- <kbd>SELECT</kbd>: Otwórz ustawienia
- <kbd class="face">A</kbd> + <kbd class="face">B</kbd> + <kbd class="face">X</kbd> + <kbd class="face">Y</kbd>: Resetuj wszystkie ustawienia TWiLight Menu++
- <kbd class="face">B</kbd>: Uruchom w ostatnio grany ROM
