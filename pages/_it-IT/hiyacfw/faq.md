---
lang: it-IT
layout: faq
section: hiyacfw
title: Domande frequenti e risoluzione dei problemi
long_title: Domande frequenti su hiyaCFW e risoluzione dei problemi
category: other
description: Domande frequenti su hiyaCFW e risoluzione dei problemi
---

#### Come posso installare applicazioni o DSiWare sulla SDNAND di hiyaCFW?
Bisogna usare [TMFH](https://github.com/JeffRuLz/TMFH/releases/latest) per installare le applicazioni sulla SDNAND, ma i vecchi homebrew DS potrebbero non essere compatibili.
- Se vuoi installare i dump delle schede di gioco, dovresti usare un [forwarder](../ds-index/forwarders)

#### Perché ricevo il codice di errore #-2435-8325?
Se il tuo Nintendo DSi mostra un errore in questo formato durante l'avvio, con # che è un numero, significa che il bootstage 2 pensa che ci sia qualcosa che non va nella SDNAND. Solitamente, questo si risolve [reinstallando hiyaCFW](installing).

#### Perché ricevo il messaggio "Si è verificato un errore" quando avvio hiyaCFW?
Quando il menu del Nintendo DSi rileva un problema, di solito mostra questo generico messaggio di errore. Alcune delle cause sono:

##### Il bug dello spazio libero
Il menu del Nintendo DSi ha un bug quando controlla lo spazio libero su dispositivi di archiviazione di grandi dimensioni. Mentre questo non può accadere nella NAND effettiva (dato che il chip è di soli 256 MiB), può succedere utilizzando una scheda SD.

Lo spazio libero funziona a gruppi alterni di due gibibyte. Per esempio, avere tra 0 e 2 GiB di spazio libero funziona, ma tra 2 e 4 GiB no. Lo stesso vale per 4-6 GiB contro 6-8 GiB, fino ad arrivare alla dimensione della scheda SD.

L'ultima versione di hiyaCFW può creare dei file fittizi per aggirare questo problema, quindi assicurati di scaricare l'ultima versione di [hiyaCFW](https://github.com/RocketRobz/hiyaCFW/releases/latest/download/hiyaCFW.7z) e copia `hiya.dsi` dalla cartella "for SDNAND SD card" alla root della scheda SD.

##### Più di 39 titoli
Il menu del Nintendo DSi ha un limite di 39 titoli. Se ne hai di più, cancellane alcuni dalle cartelle in `sd:/title` o usa [TMFH](https://github.com/JeffRuLz/TMFH/releases/latest) per disinstallarli.

##### Troppo spazio utilizzato da DSiWare
C'è anche un limite di 200 blocchi (25MB) per DSiWare nella cartella `00030004`. Questo limite può essere raggirato installando le app DSiware come app di sistema utilizzando [TMFH](https://github.com/JeffRuLz/TMFH/releases/latest).

##### Titolo non valido
Ci sono diverse cose da tenere in considerazione quando si aggiungono titoli a hiyaCFW:
- I dump delle schede di gioco non possono essere eseguiti senza utilizzare un [forwarder](../ds-index/forwarders)
- Gli homebrew devono essere costruiti correttamente usando strumenti moderni per funzionare dal menu del Nintendo DSi
