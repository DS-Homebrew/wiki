---
lang: it-IT
layout: faq
section: nds-bootstrap
title: FAQ & Risoluzione dei problemi
long_title: nds-bootstrap FAQ & Risoluzione dei problemi
description: FAQ & Risoluzione dei problemi per nds-bootstrap
---

#### Perché ottengo una schermata bianca quando si tenta di caricare un gioco dalla scheda SD?
- Innanzitutto, controlla [la lista di compatibilità di nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) e assicurati che il tuo gioco sia compatibile
- Prova con tutti i trucchi disabilitati per quel gioco in quanto alcuni trucchi non sono compatibili con nds-bootstrap al momento, puoi usare <kbd class="l">L</kbd> per disabilitare tutti i trucchi per un gioco
- Se precedentemente funzionava, elimina le cartelle `fatTable` e `patchOffsetCache` in `sd:/_nds/nds-bootstrap/`

#### Risoluzione dei problemi nds-bootstrap
Se si hanno dei problemi con l'utilizzo dell'ultima versione di nds-bootstrap, ecco come si potrebbe risolvere il problema.

1. Esegui il gioco con diverse impostazioni, tra cui la modifica della velocità della CPU ARM9, modalità DS/DSi, qualità del suono, lettura scheda DMA, ecc
2. Elimina le cartelle `fatTable` e `patchOffsetCache` in `sd:/_nds/nds-bootstrap/`
3. Probabilmente non è un problema così grande; chiedi nel [server Discord](https://discord.gg/yD3spjv)

Se il server dice che si tratta di un problema di nds-bootstrap, controlla se il gioco non è già stato segnalato su GitHub. Controlla anche i problemi chiusi nel caso in cui abbiamo avuto un problema chiuso in preferenza a uno diverso. Se non ha alcun problema GitHub collegato ad esso, vai avanti e creane uno nuovo.

Inoltre, assicurati di aggiungerlo alla [lista di compatibilità](https://wiki.ds-homebrew.com/nds-bootstrap/testing) su Google Sheets.

#### Why are there issues with ROM loading, even though they're run natively?
nds-bootstrap patches the ROM functions to run from an SD card, as the ROMs are hardcoded to read from Slot-1. There are also timing issues and AP measures (which most are already removed), both of which would cause the ROMs to not work properly.

#### Why use nds-bootstrap over a regular flashcard?
- Alcune ROM compatibili sono caricate nella RAM, consentendo tempi di caricamento più rapidi rispetto alle normali cartucce
- È possibile espandere il bus di memoria VRAM a 32-bit
- È possibile utilizzare la velocità della CPU aggiuntiva del DSi, consentendo prestazioni migliori in alcuni giochi
- È possibile migliorare l'audio con 48 kHz
- Si può utilizzare la modalità DSi, consentendo le funzionalità del DSi
- Utilizzando alcune cartucce, si è in grado di usare le funzioni IR nell’applicazione
- nds-bootstrap è open source: significa che gli sviluppatori possono sempre aggiornarlo per correggere bug e altre cose, anche se il progetto si interrompe
- Il DS Memory Expansion Pak è emulato, questo significa che i giochi che lo richiedono funzioneranno
- Inverti gli schermi superiori e inferiori per i giochi compatibili per un gameplay più confortevole, o su sistemi con uno schermo rotto o rimosso

#### Donor ROMs
Most SDK5 games can be selected as a Donor ROM (which can be done via TWiLight Menu++). The Donor ROM's ARM7 binary is copied by nds-bootstrap and replaces the ARM7 binary for the game that it is trying to run. This allows certain and SDK5 games to boot and save.

#### What is a nightly and where do I get it?
A nightly build is build for the latest commit. Nightly builds may be unstable, but has the most recent bugfixes added. You can get nightly builds for nds-bootstrap [here](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### Why do my cheats not work?
The way E cheat types are implemented in nds-bootstrap is broken, meaning they'd only work half of the time. Your cheat probably uses that type. It is not a fault of the cheat database, but rather a fault of nds-bootstrap. Please do not request these cheats to get deleted from the DB.

For more info on cheats, look [here](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats).

