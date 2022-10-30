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

### Numero di salvataggio
Il file di salvataggio del gioco avrà l'estensione `.savX`, dove X è il numero di salvataggio se non è 0. Questo permette di salvare fino a 10 file di salvataggio per la stessa ROM.

### Avvia in
La modalità in cui la ROM dovrebbe essere eseguita. Ciò influisce sulla velocità della CPU ARM9 e sulla modalità VRAM. L'impostazione in modalità DSi per le ROM che non la supportano probabilmente non avrà effetto.

### Velocità CPU ARM9
Cambia la velocità di esecuzione della CPU ARM9. Le ROM eseguite in modalità DS useranno 67 MHz (NTR) per impostazione predefinita. Può essere cambiata a 133 MHz (TWL) per ridurre i rallentamenti, ma può anche causare problemi. Le ROM eseguite in modalità DSi possono essere impostate solo a 133 Mhz (TWL).

### Modalità VRAM
Cambia la modalità della Video Random Access Memory (VRAM) del sistema. Le ROM eseguite in modalità DS utilizzeranno la modalità VRAM DS per impostazione predefinita. Può essere cambiata alla modalità VRAM DSi ma non fa nulla e può causare problemi visivi. Le ROM eseguite in modalità DSi possono essere impostate solo alla modalità VRAM DSi.

### Lettura scheda DMA
Abilita l'uso del Direct Memory Access (DMA) per la lettura della scheda. Attivare questa impostazione può accelerare le ROM ma può causare problemi. Maggiori informazioni tecniche sono disponibili sul [DS Index](https://wiki.ds-homebrew.com/ds-index/retail-roms#card-read-dma).

### E spandi lo spazio della ROM nella RAM
Se un gioco è abbastanza piccolo, può essere caricato nella RAM del sistema per accelerare i tempi di caricamento. L'attivazione di questa opzione aumenta il limite di dimensione delle ROM, ma potrebbe causare incompatibilità con alcune.

### Avvio diretto
Appare solo per le ROM homebrew. Attivare questa opzione farà sì che nds-bootstrap non venga utilizzato per avviare la ROM. È utile per le ROM homebrew che non hanno bisogno o non funzionano con nds-bootstrap.

### Bootstrap
Cambia se eseguire la ROM con la versione Release o Nightly di nds-bootstrap. Le informazioni sulle build Nightly si trovano nella [pagina delle domande frequenti di nds-bootstrap](https://wiki.ds-homebrew.com/nds-bootstrap/faq?faq=what-is-a-nightly-and-where-do-i-get-it)

### Proporzioni schermo
Su sistemi Nintendo 3DS, le proporzioni dello schermo possono essere cambiate da 4:3 (predefinite su DS/DSi) a 16:10. Funziona solo se il [widescreen è abilitato](https://wiki.ds-homebrew.com/twilightmenu/playing-in-widescreen).
