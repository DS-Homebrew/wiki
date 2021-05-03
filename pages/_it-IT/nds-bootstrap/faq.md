---
lang: it-IT
layout: wiki
section: nds-bootstrap
category: other
title: FAQ & Risoluzione dei problemi
long_title: nds-bootstrap FAQ & Risoluzione dei problemi
description: FAQ & Risoluzione dei problemi per nds-bootstrap
---

#### Perché ottengo una schermata bianca quando si tenta di caricare un gioco dalla scheda SD?
- Innanzitutto, controlla [la lista di compatibilità di nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) e assicurati che il tuo gioco sia compatibile
- Prova con tutti i trucchi disabilitati per quel gioco in quanto alcuni trucchi non sono compatibili con nds-bootstrap al momento, puoi usare <kbd class="l">L</kbd> per disabilitare tutti i trucchi per un gioco
- Se il gioco che stai cercando di avviare è un gioco DSi Enhanced, assicurati che TWiLight Menu++ sia impostato per utilizzare la `modalità DS`
- Se ha funzionato prima, elimina le cartelle `fatTable` e `patchOffsetCache` in `sd:/_nds/nds-bootstrap/`

#### Perché ci sono problemi con il caricamento della ROM, anche se sono eseguiti nativamente?
nds-bootstrap patcha le funzioni ROM da eseguire da una scheda SD, visto che le ROM sono hardcoded per leggere dalla Slot-1. Vi sono anche problemi di tempistica e misure AP (di cui molte già eliminate), che causerebbero entrambe un funzionamento inadeguato delle ROM. To improve performance, nds-bootstrap also shrinks the game's heap in memory, which breaks some games, though both the forwarders and TWiLight Menu++ have a heap shrink blacklist to fix the non-working games broken by heap shrink.

#### Perché usare nds-bootstrap piuttosto di una normale flashcard?
- Alcune ROM compatibili sono caricate nella RAM, consentendo tempi di caricamento più rapidi di quanto non siano le normali cartucce
- È possibile espandere il bus di memoria VRAM a 32-bit
- Utilizzare la velocità aggiuntiva della CPU del DSi
- Migliorare il tuo audio con 48 kHz
- Usare la modalità DSi, consentendo le funzionalità del DSi
- Utilizzando alcune cartucce, si è in grado di usare IR nell’applicazione
- nds-bootstrap è open source: significa che gli sviluppatori possono sempre aggiornarlo per correggere bug e altre cose anche se la compagnia si interrompe
- Il DS Memory Expansion Pak è emulato, i giochi che lo richiedono funzioneranno

#### ROM donatrici
La maggior parte dei giochi SDK5 possono essere selezionati come ROM donatrici (che può essere fatto tramite TWiLight Menu++). Il binario ARM7 della ROM donatrice viene copiato da nds-bootstrap e sostituisce il binario ARM7 per il gioco che sta cercando di eseguire. Questo permette ad alcuni giochi SDK5 di avviarsi e salvarsi.

#### Che cosa è una versione notturna e dove la posso ottenere?
Una versione notturna è compilata per l'ultima commit. Le versioni notturne possono essere instabili, ma sono state aggiunte le correzioni di bug più recenti. Puoi ottenere le build notturne per nds-bootstrap [qui](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### Perché i miei trucchi non funzionano?
Il modo in cui i tipi di trucco E sono implementati in nds-bootstrap non funziona molto bene, e perciò funzionano la metà delle volte. Il tuo trucco probabilmente utilizza quel tipo. Non è un difetto del database dei trucchi, ma piuttosto un difetto di nds-bootstrap. Si prega di non richiedere la cancellazione di questi trucchi dal database.

#### C'è altro che dovrei sapere sui trucchi?
You can set heap shrink to `Hi` in settings for slightly better cheat support.

Per maggiori informazioni sui trucchi, guarda [qui](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats).

#### Risoluzione dei problemi nds-bootstrap
Se si ottengono problemi con l'utilizzo dell'ultima versione di nds-bootstrap, ecco come si potrebbe risolvere il problema.

1. Avviare tutto in 67 MHz, modalità DS, con 32 kHz di audio, ecc. Fondamentalmente, tenere tutto alle impostazioni del DS. Non cercare di migliorarlo con roba DSi
2. Delete the `fatTable` and `patchOffsetCache` folders in `sd:/_nds/nds-bootstrap/`
3. It's probably not that big of an issue; ask in the [Discord server](https://discord.gg/yD3spjv)

If the server says it's an nds-bootstrap issue, check if the game hasn't been reported already on GitHub. Check the closed issues too in case we had one issue closed in preference a different one. If it doesn't have any GitHub issue attached to it, go ahead and make a new one.

Also, make sure you add it to the [compatibility list](https://wiki.ds-homebrew.com/nds-bootstrap/testing) on Google Sheets.
