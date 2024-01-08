---
lang: it-IT
layout: wiki
section: gbarunner2
title: Build di GBARunner2
description: Informazioni sulle varie build di GBARunner2 e sul loro utilizzo
---


Esistono diverse versioni di GBARunner2, o "build", che si possono utilizzare. Provengono da diversi rami e fork di GBARunner2 e hanno caratteristiche diverse che mirano o a diversi giochi GBA o ad alcune funzioni diverse. **Per la maggior parte degli utenti** è sufficiente la build fornita con **TW**i**L**ight Menu++.

## Build DS vs DSi vs 3DS

GBARunner2 ha delle build che sfruttano l'hardware aggiuntivo presente nel DSi e nel 3DS. Naturalmente, quelle specifiche per DSi e 3DS non funzioneranno su un DS. Tuttavia, non funzionano nemmeno se si avvia GBARunner2 da una flashcard su uno qualsiasi dei sistemi, DSi e 3DS inclusi. I dettagli di ciò non verranno trattati qui.

Questo significa che è possibile utilizzare le build per il DS sia sul DSi che sul 3DS, ma non viceversa.

## Build condivise tra DS, DSi e 3DS

Queste sono le build presenti per tutte e tre le linee di sistemi.

### [Principali](https://github.com/Gericom/GBARunner2/releases)

Le build "principali", sono le release vere e proprie di GBARunner2. In genere questa dovrebbe essere la build più stabile. Tutti i rami diversi da questo sono considerati sperimentali e non abbastanza stabili da essere inclusi nel ramo principale. Le build principali sono suddivise in diverse per DS, DSi e 3DS. Ognuna di essa ha il nome del sistema corrispondente aggiunto alla fine del nome del file.

### [Wi-Fi-Link](https://github.com/Gericom/GBARunner2/releases/tag/v20200217-194452_0b8bbe3)

Il ramo Wi-Fi-Link aggiunge la possibilità di collegare due sistemi in modalità wireless. Si noti che non si connette attraverso Internet e non sarà mai possibile a causa della latenza. Allo stato attuale i risultati varieranno, l'unico gioco sicuro in grado di mantenere una connessione stabile è Advance Guardian Heroes, a condizione che vengano seguite le specifiche istruzioni. Inutile dire che, questo ramo, allo stato attuale, è una novità e una prova concettuale, e non qualcosa da usare davvero. Alcuni altri giochi sono in grado di connettersi, ma dipendono molto da fattori esterni come l'interferenza di altri segnali Wi-Fi, oltre a molte altre cose. Per impostare la connessione Wi-Fi, consulta la pagina [WikiTemp](https://wiki.gbatemp.net/wiki/GBARunner2/Link).

## Build specifiche per DS

### ARM7DLDI vs ARM9DLDI

**Normalmente si utilizza ARM9DLDI**, e se non funziona meglio provare con ARM7DLDI. Alcune flashcard richiedono ARM7DLDI o ARM9DLDI, mentre altre potrebbero funzionare con entrambi. Non esiste un elenco di quali flashcard funzionano con quali build, ma se si riscontrano problemi nel far funzionare GBARunner2, è meglio provare l'altra.

Se si utilizza **TW**i**L**ight Menu++ su flashcard, è possibile passare da ARM7DLDI a ARM9DLDI nelle impostazioni di **TW**i**L**ight Menu++.

Non ci sono differenze di funzionalità o prestazioni tra i due modelli, quindi è inutile testarli entrambi per vedere se un gioco funziona meglio o ha meno problemi con l'altro.

Guarda più in basso per scoprire la build attualmente in uso.

### [rom3M](https://github.com/Gericom/GBARunner2/releases/tag/v20190911-201047_371815e)

Questo ramo potrebbe essere utile se si cerca di eseguire ROM un po' più grandi sul DS, ma c'è un limite dovuto alla quantità limitata di RAM presente nel DS. Si tratta in pratica del ramo di Pokémon Smeraldo per il DS.

Void Star ha creato [un fork di GBARunner2](https://github.com/unresolvedsymbol/GBARunner2-DSL-Enhanced/releases) che fonde il ramo rom3M con l'ultimo principale con alcune altre caratteristiche interessanti, e questa è la build che viene fornita con **TW**i**L**ight Menu++ se si utilizza un DS.

## Build specifiche per DSi e 3DS

Il DSi e il 3DS possono generalmente eseguire le stesse build, ma a causa della differenza di quantità di RAM tra il DSi e il 3DS la compatibilità dei giochi può variare. Ciò significa che il DSi potrebbe avere problemi nell'eseguire ROM più grandi che il 3DS può eseguire senza problemi.

La 3DS dispone anche di un chip accelerometro per i controlli giroscopici, che può essere utilizzato in una build specifica per 3DS.

### [DSP](https://github.com/Gericom/GBARunner2/releases/tag/v20200809-113646_551ae99_dsp-audio)

Se si utilizza **TW**i**L**ight Menu++, questa funzione nella build GBARunner2 è già in dotazione.

Le build DSP sfruttano il processore digitale del suono presente sia nel DSi che nel 3DS. Ciò contribuisce a produrre un suono migliore e a fornire prestazioni migliori. Ci sono alcune regressioni, come un paio di ROM che non funzionano con questo ramo.

### [Hicode ibrido](https://github.com/Gericom/GBARunner2/releases/tag/v20200812-130512_d5dc8d8)

Se si utilizza **TW**i**L**ight Menu++, questa funzione nella build GBARunner2 è già in dotazione.

Il ramo Hicode ibrido si occupa delle ROM di grandi dimensioni che hanno problemi a funzionare sul ramo principale. Si tratta di un ramo molto utile per il DSi, poiché risolve in gran parte il problema della minore quantità di RAM rispetto al 3DS.

### [Unione Hicode/DSP](https://github.com/therealteamplayer/GBARunner2/releases/tag/v20210911-merges-and-tweaks)

Questo fork di therealteamplayer unisce i rami Hicode e DSP in un'unica build, insieme ad alcune altre modifiche elencate nelle note di release. Questa build è attualmente utilizzata da **TW**i**L**ight Menu++ per la scheda SD del DSi/3DS.

### Specifico per 3DS: [Gyro](https://github.com/Gericom/GBARunner2/releases/tag/v20191228-021638_ee7f6a0)

Questo ramo utilizza l'accelerometro interno del 3DS, in modo che i giochi GBA dotati di questa funzionalità possano essere riprodotti correttamente. Ci sono diversi passi da compiere per farlo funzionare. Si noti che, poiché i chip dell'accelerometro sono diversi tra i sistemi 3DS, questo non funzionerà su tutti i 3DS perché tutti i chip non hanno un codice che li supporta.

Non c'è coerenza tra il tipo di 3DS e il chip, almeno per quanto se ne sa.

## Trovare le informazioni della build

GBARunner2 ha un menu che si apre toccando il touchscreen e premendo il pulsante laterale destro. Al suo interno si trova il menu "About", che indica la build che si sta utilizzando. Tuttavia, le build che attualmente vengono fornite con **TW**i**L**ight Menu++ non riportano una versione della build perché sono basate su fork di altre persone. Ciò significa che se la vostra pagina "About" risulta vuota per la build, molto probabilmente state utilizzando una di queste.

La pagina "About" indica anche se si sta utilizzando una build ARM7DLDI o ARM9DLDI.

Sapere quale build utilizzare è utile per controllare l'elenco di compatibilità ufficiale, nel caso in cui si riscontrino problemi nell'esecuzione di un gioco.

L'ID di release è visibile nella pagina di rilascio del repository github di GBARunner2, dove gli ultimi sette simboli alfanumerici rappresentano la versione. Ad esempio, l'ultima release principale attuale è "v20200812-131430_6e4ce45" e "6e4ce45" è usato per rappresentare la sua versione.
