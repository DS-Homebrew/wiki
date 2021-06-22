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

#### Perché il multigiocatore non funziona?
Questo è un [problema conosciuto](https://github.com/DS-Homebrew/nds-bootstrap/issues/553) con cloneboot. Si prega di aspettare che venga corretto.

#### Perché ci sono problemi con il caricamento delle ROM, anche se sono eseguite nativamente?
nds-bootstrap applica delle patch alle funzioni ROM da eseguire da una scheda SD, visto che le ROM sono codificate per essere lette dalla Slot-1. Vi sono anche problemi di tempistica e misure AP (di cui molte già eliminate), che causerebbero entrambe un funzionamento inadeguato delle ROM.

#### Perché usare nds-bootstrap piuttosto di una normale flashcard?
- Alcune ROM compatibili sono caricate nella RAM, consentendo tempi di caricamento più rapidi rispetto alle normali cartucce
- È possibile espandere il bus di memoria VRAM a 32-bit
- È possibile utilizzare la velocità della CPU aggiuntiva del DSi, consentendo prestazioni migliori in alcuni giochi
- È possibile migliorare l'audio con 48 kHz
- Si può utilizzare la modalità DSi, consentendo le funzionalità del DSi
- Utilizzando alcune cartucce, si è in grado di usare le funzioni IR nell’applicazione
- nds-bootstrap è open source: significa che gli sviluppatori possono sempre aggiornarlo per correggere bug e altre cose, anche se il progetto si interrompe
- Il DS Memory Expansion Pak è emulato, questo significa che i giochi che lo richiedono funzioneranno
- Inverti gli schermi superiori e inferiori per i giochi compatibili per un gameplay più confortevole, o su sistemi con uno schermo rotto o rimosso

#### ROM donatrici
La maggior parte dei giochi SDK5 possono essere selezionati come ROM donatrici (che può essere fatto tramite TWiLight Menu++). Il binario ARM7 della ROM donatrice viene copiato da nds-bootstrap e sostituisce il binario ARM7 per il gioco che sta cercando di eseguire. Questo permette ad alcuni giochi SDK5 di avviarsi e salvarsi.

#### Che cosa è una versione notturna e dove la posso ottenere?
Una versione notturna è compilata per l'ultima commit. Le versioni notturne possono essere instabili, ma in esse sono incluse le correzioni di bug più recenti. Puoi ottenere le versioni notturne di nds-bootstrap [qui](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### Perché i miei trucchi non funzionano?
Il modo in cui i trucchi E-type sono implementati in nds-bootstrap non funziona molto bene, e perciò funzionano la metà delle volte. Il tuo trucco probabilmente utilizza quel tipo. Non è un difetto del database dei trucchi, ma piuttosto un difetto di nds-bootstrap. Si prega di non richiedere la cancellazione di questi trucchi dal database.

Per maggiori informazioni sui trucchi, guarda [qui](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats).

