---
lang: it-IT
layout: faq
section: godmode9i
title: Domande frequenti & risoluzione dei problemi
long_title: Domande frequenti & risoluzione dei problemi di GodMode9i
description: Domande frequenti & risoluzione dei problemi di GodMode9i
---

#### Come faccio a superare la schermata "mounting drive(s)" durante l'avvio?
Questo accade quando avvii GodMode9i da [hiyaCFW](../hiyacfw). È possibile tenere premuto <kbd class="face">X</kbd> mentre si avvia GodMode9i per saltare il montaggio della NAND. In alternativa, puoi avviare GodMode9i direttamente da Unlaunch per poter montare la NAND.

#### Perché non è possibile aggiungere, rimuovere o modificare i file sulla NAND?
La modifica dei file sulla NAND del DSi non è sicura e può facilmente portare ad un brick, quindi GodMode9i manca intenzionalmente di questa funzionalità.

#### Perché non riesco a visualizzare le informazioni sui file NDS di alcuni DSiWare?
Alcuni DSiWare, in particolare quelli situati nella cartella `0003000f`, contengono dati di sistema e non hanno un banner valido.

#### Devo usare la versione NDS o quella DSi? Qual è la differenza?
Sono funzionalmente uguali, ma hanno scopi specifici.
- Se si utilizza GodMode9i con una flashcard, utilizzare la versione NDS
- Se si sta installando GodMode9i sulla SDNAND hiyaCFW, utilizza la versione DSi
- Se si avvia GodMode9i tramite TWiLight Menu++, entrambe le versioni funzioneranno in modo identico
- Se si sta installando GodMode9i sul menu home 3DS, usa la versione CIA

#### Come si cambia la lingua?
È possibile cambiare la lingua di GodMode9i premendo <kbd>START</kbd>, selezionando l'ultima opzione del menu e scegliendo la lingua che si desidera utilizzare.

Si noti che questo funziona solo se GodMode9i viene eseguito da TWiLight Menu++ o se esiste una copia di `GodMode9i.nds`/`GodMode9i.dsi` nella root della scheda SD.

È anche possibile inserire manualmente il percorso di qualsiasi file di traduzione sulla scheda SD nel file di configurazione, `sd:/gm9i/config.ini`, con la voce `LANGUAGE_INI_PATH`.

#### Come si cambia il carattere?
È possibile cambiare il carattere di GodMode9i selezionando un file di carattere `.frf` e scegliendo `Carica carattere`. Per impostare un font diverso come predefinito, piazzalo su `sd:/gm9i/font.frf` oppure modifica il file di configurazione (`sd:/gm9i/config.ini`) per impostare `FONT_PATH` sulla posizione del vostro file di carattere.

Si possono trovare alcuni caratteri pre-convertiti nella cartella ["resources"](https://github.com/DS-Homebrew/GodMode9i/tree/master/resources/fonts) del repository GitHub e si possono convertire i propri da un'immagine PBM e da un file TXT contenente le mappature Unicode usando lo script [fontriff.py](https://github.com/d0k3/GodMode9/blob/master/utils/fontriff.py) di GodMode9.

#### Come faccio a effettuare dump dei salvataggi DS utilizzando i dati di salvataggio del GBA?
GodMode9i è in grado di utilizzare i dati di salvataggio delle cartucce GBA per scaricare i salvataggi della maggior parte delle schede di gioco DS. I file ROM e i file di salvataggio di dimensioni superiori a 1 MiB non possono essere scaricati in questo modo, in quanto le dimensioni dei file non sono sufficienti. Questo può anche essere fatto usando Haxxstation invece di una flashcard DS se si ha un altro modo per scaricare i file di salvataggio del GBA, che possono poi essere ricombinati e decompressi su un computer.

1. Carica GodMode9i sulla tua flashcard
1. Fai dei backup ai tuoi salvataggi GBA!!
   - Tutti i dati di salvataggio di cui non è stato eseguito il backup andranno persi
   - Controlla i file e trova quelli più grandi, usare carrelli da 512 byte non servirà a molto, mentre i salvataggi da 64 o 128 KiB si adattano alla maggior parte dei salvataggi DS in 1 o 2 carrelli
1. Nel menu delle unità, premi <kbd class="r">R</kbd> + <kbd class="face">B</kbd> per smontare la flashcard
1. Espelli la flashcard, inserisci una scheda di gioco DS e una cartuccia GBA
1. Seleziona `SCHEDA NDS` poi `Salva`
1. Quando viene richiesto, premi <kbd class="face">A</kbd> per scrivere i dati sulla cartuccia GBA
   - Passa a cartucce GBA diverse e ripeti il procedimento fino a che tutti i salvataggi sono stati copiati
1. Riavvia il DS con la flashcard Slot-1 inserita e riapri GodMode9i
1. Inserisci la prima cartuccia GBA utilizzata e seleziona `CARTUCCIA GBA`
1. Scegli `Salvataggio DS`
1. Scambia tutte le cartucce di cui hai effettuato il dump in
1. I salvataggi del DS si trovano ora in `fat:/gm9i/out`, ora è possibile ripristinare i file di salvataggio del GBA di cui si è fatto il backup nelle cartucce originali

Se si desidera scrivere il file di salvataggio sulla scheda di gioco, è sufficiente selezionare il file `.sav` e scegliere `Ripristina salvataggio (Slot-1)`, quindi scambiare la flashcard con la scheda di gioco DS quando richiesto.
