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
The version of the Software Development Kit (SDK) that was used to compile the ROM.

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

### SWI Halt Hook
Cambia se gli Halt Software Interrupts (SWI) sono agganciati o no. Attivare questa opzione può velocizzare i tempi di caricamento, ma potrebbe causare problemi. Mantenerla disattivata potrebbe anche ridurre i rallentamenti.

### Ex. ROM space in RAM
Se un gioco è abbastanza piccolo, può essere caricato nella RAM del sistema per accelerare i tempi di caricamento. Attivare questa opzione aumenterà il limite di dimensione delle ROM, ma potrebbe causare incompatibilità con alcune.

### Avvio Diretto
Appare solo per le ROM homebrew. Attivare questa opzione farà sì che nds-bootstrap non venga utilizzato per avviare la ROM. Questo è utile per le ROM homebrew che non hanno bisogno o non funzionano con nds-bootstrap.

### Bootstrap
Cambia se eseguire la ROM con la build Release o Nightly di nds-bootstrap. Informazioni sulle build Nightly possono essere trovate nella [pagina delle domande frequenti di nds-bootstrap](https://wiki.ds-homebrew.com/nds-bootstrap/faq?faq=what-is-a-nightly-and-where-do-i-get-it)

### Proporzioni schermo
Se su 3DS, il rapporto di aspetto dello schermo può essere cambiato da 4:3 (predefinito su DS/DSi) a 16:10. Funziona solo se [la patch widescreen è abilitata](https://wiki.ds-homebrew.com/twilightmenu/playing-in-widescreen).