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
- <kbd>Sinistra</kbd> / <kbd>Destra</kbd>: Seleziona un gioco / app
- <kbd class="face">A</kbd> / <kbd>START</kbd>: Avvia gioco / app
- <kbd class="l">L</kbd> / <kbd class="r">R</kbd> o <kbd>SELECT</kbd> + <kbd>Sinistra</kbd> / <kbd>Destra</kbd>: Cambia pagine
- (Tema DSi/Saturn/HBL) <kbd>SELECT</kbd> + <kbd>Sù</kbd> / <kbd>Giù</kbd> & rilascia <kbd>SELECT</kbd>: Passa tra la scheda SD e la flashcard
- <kbd class="face">Y</kbd>: Impostazioni per gioco
   - <kbd class="face">X</kbd>: Menù trucchi
      - <kbd class="face">A</kbd>: Abilita trucco
      - <kbd class="face">B</kbd>: Esci dal menu trucchi
      - <kbd class="face">X</kbd>: Salva ed esci dal menu trucchi
      - <kbd class="face">Y</kbd>: Mostra descrizione del trucco
      - <kbd class="l">L</kbd>: Disabilita tutti i trucchi
- <kbd class="face">X</kbd>: Elimina/nascondi gioco
- (Tema DSi / Saturn / HBL) <kbd>SELECT</kbd>: Menù SELECT o menù DS Classic (dove è possibile accedere alle impostazioni di TWiLight Menu++ e alla modalità GBA)

#### Tema R4
- <kbd>Su</kbd> / <kbd>Giù</kbd>: Seleziona un gioco / app
- <kbd class="face">A</kbd>: Avvia gioco / app
- <kbd class="l">L</kbd>: Passa tra la scheda SD e la flashcard
- <kbd class="face">Y</kbd>: Impostazioni del gioco
   - <kbd class="face">X</kbd>: Menù trucchi
      - <kbd class="face">A</kbd>: Abilita trucco
      - <kbd class="face">B</kbd>: Esci dal menu trucchi
      - <kbd class="face">X</kbd>: Salva ed esci dal menu trucchi
      - <kbd class="face">Y</kbd>: Mostra descrizione del trucco
      - <kbd class="l">L</kbd>: Disabilita tutti i trucchi

#### ROM NDS (usando nds-bootstrap)
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Up</kbd> + <kbd class="face">X</kbd> per 1 secondo: Inverti lo schermo superiore ed inferiore
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Giù</kbd> + <kbd class="face">A</kbd> per 3 secondi: Dump della RAM nel percorso `sd:/_nds/nds-bootstrap`, con nome file `ramDump.bin`
- <kbd class="l">L</kbd> + <kbd>Giù</kbd> + <kbd>SELECT</kbd>: Apri il menu in-game
   - Visualizzatore RAM
      - <kbd>Su</kbd> / <kbd>Giù</kbd>: Scorri
      - <kbd>Sinistra</kbd> / <kbd>Destra</kbd>: Scorrimento rapido
      - <kbd class="face">A</kbd>: Apri editor della RAM
      - <kbd class="face">B</kbd>: Torna al menu in-game
      - <kbd class="face">Y</kbd>: Specifica l'indirizzo su cui spostarsi
        - <kbd>Su</kbd> / <kbd>Giù</kbd>: Aumenta / Diminuisce il valore selezionato
        - <kbd>Sinistra</kbd> / <kbd>Destra</kbd>: Seleziona un valore
        - <kbd class="face">A</kbd> / <kbd class="face">B</kbd>: Ritorna al visualizzatore/editor RAM all'indirizzo specificato
   - Editor della RAM
      - <kbd>Su</kbd> / <kbd>Giù</kbd> / <kbd>Sinistra</kbd> / <kbd>Destra</kbd>: Seleziona un valore
      - <kbd class="face">A</kbd>: Modifica il valore selezionato
         - <kbd>Su</kbd> / <kbd>Giù</kbd>: Aumenta / Diminuisci il valore di 1h
         - <kbd>Sinistra</kbd> / <kbd>Destra</kbd>: Aumenta / Diminuisci il valore di 10h
         - <kbd class="face">A</kbd> / <kbd class="face">B</kbd>: Termina la modifica del valore
      - <kbd class="face">B</kbd>: Ritorna al visualizzatore RAM
      - <kbd class="face">Y</kbd>: Specifica l'indirizzo su cui spostarsi
        - <kbd>Su</kbd> / <kbd>Giù</kbd>: Aumenta / Diminuisce il valore selezionato
        - <kbd>Sinistra</kbd> / <kbd>Destra</kbd>: Seleziona un valore
        - <kbd class="face">A</kbd> / <kbd class="face">B</kbd>: Ritorna al visualizzatore/editor RAM all'indirizzo specificato
 - Il menu in-game non è accessibile in modalità DSi, quindi usare la combinazione di tasti in questa specifica modalità vi farà invece uscire dal gioco.

#### Shortcut di avvio
Queste shortcut devono essere inserite sulla splash-screen di TWiLight Menu++ / subito dopo la schermata di avvio Nintendo DSi.

- <kbd>SELECT</kbd>: Apri le impostazioni
- <kbd class="face">A</kbd> + <kbd class="face">B</kbd> + <kbd class="face">X</kbd> + <kbd class="face">Y</kbd>: Reimposta tutte le impostazioni di TWiLight Menu++
- <kbd class="face">B</kbd>: Boot the last ran ROM
