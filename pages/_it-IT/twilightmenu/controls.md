---
lang: it-IT
layout: wiki
section: twilightmenu
category: other
title: Controlli
long_title: Controlli TWiLight Menu++
description: Controlli per l'utilizzo di TWiLight Menu++
---

#### Nintendo DSi, Nintendo 3DS, SEGA Saturn e Homebrew Launcher
- <kbd>Left</kbd>/<kbd>Right</kbd>: Select a game/app
- <kbd class="face">A</kbd>/<kbd>START</kbd>: Launch game/app
- <kbd class="l">L</kbd>/<kbd class="r">R</kbd> or <kbd>SELECT</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd>: Switch pages
- (DSi/Saturn/HBL theme) <kbd>SELECT</kbd> + <kbd>Up</kbd>/<kbd>Down</kbd> & release <kbd>SELECT</kbd>: Switch between the SD card and flashcard
- <kbd class="face">Y</kbd>: Impostazioni per gioco
   - <kbd class="face">X</kbd>: Menù trucchi
      - <kbd class="face">A</kbd>: Abilita trucco
      - <kbd class="face">B</kbd>: Esci dal menu trucchi
      - <kbd class="face">X</kbd>: Salva ed esci dal menu trucchi
      - <kbd class="face">Y</kbd>: Mostra descrizione del trucco
      - <kbd class="l">L</kbd>: Disabilita tutti i trucchi
- <kbd class="face">X</kbd>: Elimina/nascondi gioco
- (DSi/Saturn/HBL theme) <kbd>SELECT</kbd>: SELECT menu or DS Classic Menu (Where system menu, TWiLight Menu++ Settings, and GBA Mode can be accessed)

#### Tema R4
- <kbd>Up</kbd>/<kbd>Down</kbd>: Select a game/app
- <kbd class="face">A</kbd>: Launch game/app
- <kbd class="l">L</kbd>: Passa tra la scheda SD e la flashcard
- <kbd class="face">Y</kbd>: Impostazioni del gioco
   - <kbd class="face">X</kbd>: Menù trucchi
      - <kbd class="face">A</kbd>: Abilita trucco
      - <kbd class="face">B</kbd>: Esci dal menu trucchi
      - <kbd class="face">X</kbd>: Salva ed esci dal menu trucchi
      - <kbd class="face">Y</kbd>: Mostra descrizione del trucco
      - <kbd class="l">L</kbd>: Disabilita tutti i trucchi

#### ROM DS(i) (usando nds-bootstrap)
Queste non si applicano ai DSiWare.
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Su</kbd> + <kbd class="face">X</kbd> per 1 secondo: Inverti lo schermo superiore ed inferiore
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Giù</kbd> + <kbd class="face">A</kbd> per 3 secondi: Dump della RAM nel percorso `sd:/_nds/nds-bootstrap`, con nome file `ramDump.bin`
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Giù</kbd> + <kbd class="face">B</kbd> per 2 secondi: Ritorna a TWiLight Menu++
- <kbd class="l">L</kbd> + <kbd>Giù</kbd> + <kbd>SELECT</kbd>: Apri il menu in-game
   - Visualizzatore RAM
      - <kbd>Up</kbd>/<kbd>Down</kbd>: Scroll
      - <kbd>Left</kbd>/<kbd>Right</kbd>: Fast scroll
      - <kbd class="face">A</kbd>: Apri editor della RAM
      - <kbd class="face">B</kbd>: Torna al menu in-game
      - <kbd class="face">Y</kbd>: Specifica l'indirizzo su cui spostarsi
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
- The in-game menu is not accessible in DSi Enhanced/Exclusive games running in DSi Mode, so attempting to use the button combo in those games will instead exit the game
- Only the screen swap button combo will work in B4DS mode, the others will not work
- Returning to TWiLight Menu++ may not work on some O3DS models

#### Shortcut di avvio
These should be pressed on the TWiLight Menu++ splash screen / right after the Nintendo DSi splash screen.

- <kbd>SELECT</kbd>: Apri le impostazioni
- <kbd class="face">A</kbd> + <kbd class="face">B</kbd> + <kbd class="face">X</kbd> + <kbd class="face">Y</kbd>: Reimposta tutte le impostazioni di TWiLight Menu++
- <kbd class="face">B</kbd>: Boot the last ran ROM
