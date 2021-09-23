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
- <kbd>Sinistra</kbd>/<kbd>Destra</kbd>: Seleziona gioco/app
- <kbd class="face">A</kbd>/<kbd>START</kbd>: Avvia gioco/app
- <kbd class="l">L</kbd>/<kbd class="r">R</kbd> o <kbd>SELECT</kbd> + <kbd>Sinistra</kbd>/<kbd>Destra</kbd>: Cambia pagina
- (Tema DSi/Saturn/HBL) <kbd>SELECT</kbd> + <kbd>Sù</kbd>/<kbd>Giù</kbd> & rilascia <kbd>SELECT</kbd>: Passa tra scheda SD e la flashcard
- <kbd class="face">Y</kbd>: Impostazioni per gioco
   - <kbd class="face">X</kbd>: Menù trucchi
      - <kbd class="face">A</kbd>: Abilita trucco
      - <kbd class="face">B</kbd>: Esci dal menu trucchi
      - <kbd class="face">X</kbd>: Salva ed esci dal menu trucchi
      - <kbd class="face">Y</kbd>: Mostra descrizione del trucco
      - <kbd class="l">L</kbd>: Disabilita tutti i trucchi
- <kbd class="face">X</kbd>: Elimina/nascondi gioco
- (Tema DSi/Saturn/HBL) <kbd>SELECT</kbd>: Menù SELECT o menù DS Classic (dove è possibile accedere alle impostazioni di TWiLight Menu++ e alla modalità GBA)

#### Tema R4
- <kbd>Su</kbd>/<kbd>Giù</kbd>: Seleziona un gioco/app
- <kbd class="face">A</kbd>: Avvia gioco/app
- <kbd class="l">L</kbd>: Passa tra la scheda SD e la flashcard
- <kbd class="face">Y</kbd>: Impostazioni per Gioco
   - <kbd class="face">X</kbd>: Menù trucchi
      - <kbd class="face">A</kbd>: Abilita trucco
      - <kbd class="face">B</kbd>: Esci dal menu trucchi
      - <kbd class="face">X</kbd>: Salva ed esci dal menu trucchi
      - <kbd class="face">Y</kbd>: Mostra descrizione del trucco
      - <kbd class="l">L</kbd>: Disabilita tutti i trucchi

#### ROM DS(i) (utilizzando nds-bootstrap)
Non si applicano ai DSiWare.
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Su</kbd> + <kbd class="face">X</kbd> per 1 secondo: Inverti lo schermo superiore ed inferiore
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Down</kbd> + <kbd class="face">A</kbd> for 2 seconds: Dump RAM to `sd:/_nds/nds-bootstrap`, as `ramDump.bin`
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Giù</kbd> + <kbd class="face">B</kbd> per 2 secondi: Ritorna a TWiLight Menu++
- <kbd class="l">L</kbd> + <kbd>Giù</kbd> + <kbd>SELECT</kbd>: Apri il menu in-game
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
- Returning to TWiLight Menu++ may not work on some O3DS models
- The button combination for opening the in-game menu can be changed in the TWiLight Menu++ settings
- Screenshots are saved to `sd:/_nds/nds-bootstrap/screenshots.tar`. This file can be opened using an archive viewer such as [7-Zip](https://www.7-zip.org/)
- Dumping RAM and taking screenshots are currently not possible in B4DS mode

#### Scorciatoie d'avvio
Queste scorciatoie devono essere premute nella schermata d'avvio di TWiLight Menu++ / subito dopo quella del Nintendo DSi.

- <kbd>SELECT</kbd>: Apri le impostazioni
- <kbd class="face">A</kbd> + <kbd class="face">B</kbd> + <kbd class="face">X</kbd> + <kbd class="face">Y</kbd>: Reimposta tutte le impostazioni di TWiLight Menu++
- <kbd class="face">B</kbd>: Avvia l'ultima ROM eseguita
