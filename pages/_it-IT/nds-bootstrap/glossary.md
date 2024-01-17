---
lang: it-IT
layout: wiki
section: nds-bootstrap
title: Glossario
description: Glossario per nds-bootstrap
---

## Impostazioni
Possono essere trovate nelle impostazioni del singolo gioco di TWiLight Menu++. Alcune di queste opzioni possono anche essere cambiate nel menu in-game di nds-bootstrap

### Versione SDK
La versione del Software Development Kit (SDK) utilizzata per compilare la ROM.

### Title ID
The ID of which would be displayed on the bottom of the game card's sticker (ex. `NTR-ASME-USA`). It is retrieved from the ROM by reading it's header.

### Numero di salvataggio
Il file di salvataggio del gioco avrà l'estensione `.savX`, dove X è il numero di salvataggio se non è 0. Questo permette di salvare fino a 10 file di salvataggio per la stessa ROM.

### Avvia in
La modalità in cui la ROM dovrebbe essere eseguita. Ciò influisce sulla velocità della CPU ARM9 e sulla modalità VRAM. L'impostazione in modalità DSi per le ROM che non la supportano probabilmente non avrà effetto.

### Velocità CPU ARM9
Cambia la velocità di esecuzione della CPU ARM9. Le ROM eseguite in modalità DS useranno 67 MHz (NTR) per impostazione predefinita. Può essere cambiata a 133 MHz (TWL) per ridurre i rallentamenti, ma può anche causare problemi. Le ROM eseguite in modalità DSi possono essere impostate solo a 133 Mhz (TWL).

### Modalità VRAM
Cambia la modalità della Video Random Access Memory (VRAM) del sistema. Le ROM eseguite in modalità DS utilizzeranno la modalità VRAM DS per impostazione predefinita. Può essere cambiata alla modalità VRAM DSi ma non fa nulla e può causare problemi visivi. Le ROM eseguite in modalità DSi possono essere impostate solo alla modalità VRAM DSi. If you're playing a TWL-type (DSi-Enhanced or DSiWare) ROM in DSi Mode, the VRAM Mode is set by the game itself.

### Lettura scheda DMA
Abilita l'uso del Direct Memory Access (DMA) per la lettura della scheda. Having this setting on can speed up ROMs slightly, but may cause issues. Maggiori informazioni tecniche sono disponibili sul [DS Index](https://wiki.ds-homebrew.com/ds-index/retail-roms#card-read-dma).

### Avvio diretto
Appears only for homebrew ROMs on flashcards. Setting this to `On` will not use nds-bootstrap when launching the ROM. È utile per le ROM homebrew che non hanno bisogno o non funzionano con nds-bootstrap.

### Bootstrap
Cambia se eseguire la ROM con la versione Release o Nightly di nds-bootstrap. Le informazioni sulle build Nightly si trovano nella [pagina delle domande frequenti di nds-bootstrap](https://wiki.ds-homebrew.com/nds-bootstrap/faq?faq=what-is-a-nightly-and-where-do-i-get-it)

### Proporzioni schermo
Su sistemi Nintendo 3DS, le proporzioni dello schermo possono essere cambiate da 4:3 (predefinite su DS/DSi) a 16:10. Funziona solo se il [widescreen è abilitato](https://wiki.ds-homebrew.com/twilightmenu/playing-in-widescreen).
