---
lang: it-IT
layout: wiki
section: twilightmenu
category: customization
title: DSi/3DS Themes - Custom SFX
description: How to use custom background music and sound effects in DSi and 3DS themes for TWiLight Menu++
---

TWiLight Menu++ supporta i file audio personalizzati nei temi. Colloca i file audio nella sottocartella `sound` della cartella del tema, ad esempio per il tema `white` i file vanno collocati rispettivamente in `themes/white/sound/sfx.bin` e `themes/white/sound/bgm.pcm.raw`. Entrambi i file sono opzionali; se `bmg.pcm.raw` manca, verrà utilizzata la musica predefinita. La stessa cosa accadrebbe con gli effetti sonori se mancasse anche `sfx.bin`.

Queste istruzioni presuppongono che devkitPro sia installato con mmutil. Puoi scaricare devkitPro sul sito ufficiale [devkitPro website](https://devkitpro.org/wiki/Getting_Started).

## Raccolta di Effetti Sonori
La banca degli effetti sonori (`sfx.bin`) contiene effetti sonori come quelli dell'icona selezione, ecc.

| File        | Descrizione                                                                                   |
| ----------- | --------------------------------------------------------------------------------------------- |
| startup.wav | Riprodotto all'avvio. Vedi la sezione [suono di avvio ](#startup-sound) per maggiori dettagli |
| back.wav    | Indietro                                                                                      |
| launch.wav  | Riprodotto quando si avvia una partita                                                        |
| select.wav  | Riprodotto quando si sposta il cursore nel menu select e delle impostazioni per gioco         |
| wrong.wav   | Riprodotto quando si raggiunge la fine della pagina                                           |
| switch.wav  | Riprodotto quando si cambia pagina                                                            |
| stop.wav    | Riprodotto sul tema DSi quando il cursore smette di muoversi                                  |

Tutti i file sopra elencati sono necessari per creare una raccolta di effetti sonori personalizzati. Se desideri che un suono sia muto, è possibile utilizzare un file audio muto. Il formato `.wav` è obbligatorio e la codifica *deve* essere PCM.

[Questo file](/assets/files/sfx-example.zip) include i suoni usati nei temi predefiniti per DSi e 3DS, insieme al makefile usato per costruirli in un file sfx.bin valido. Sentiti libero di modificare e cambiare i file audio per creare una banca di effetti sonori personalizzati.

Per creare la tua banca di effetti sonori personalizzati, apri il terminale (o la riga di comando se usate Windows), cambia la directory corrente (`cd`) nella cartella in cui si trova `Makefile` e poi esegui il comando `make`. Si otterrà un file `sfx.bin` che può essere copiato nella sottocartella `sound` della cartella del tema. **Questo file deve essere inferiore a 512000B = 512 kB**. Qualsiasi file di dimensioni superiori a questo valore provocherà un arresto anomalo o la mancata riproduzione completa di alcuni suoni.

### Suono d'avvio
Mentre gli altri effetti sonori funzionano con qualsiasi file WAV con codifica PCM, il suono di avvio deve essere in un formato specifico per funzionare correttamente, altrimenti ci sarà un vuoto tra l'interruzione del suono di avvio e l'inizio della musica di sottofondo.

Il file startup.wav deve essere **16-bit 16 kHz**. Puoi usare [Audacity](https://github.com/audacity/audacity/releases/latest) per esempio per convertire in questo formato. Una volta caricato il file in Audacity, cambia **Project Rate (Hz)** in **16000**, quindi premi **Shift+M** e cambia **Format** in **16-bit PCM**.

Se il tuo file è in stereo, dovi anche andare su **Tracks > Mix > Mix Stereo down to Mono**.

È necessario impostare `PlayStartupJingle=1` nel file `theme.ini` affinché il jingle di avvio venga riprodotto.


## Musica di sottofondo del menu
La musica di sottofondo del menu deve essere un file **Mono a 16 bit** `.wav`. Di seguito è riportato il metodo per convertire i file audio in quel formato.

A differenza di `sfx.bin`, `bgm.wav` può essere arbitrariamente grande.

Tieni presente che se il tuo file audio arriva già come file `.wav`, devi comunque seguire il metodo seguente, poiché TWLMenu++ ha requisiti specifici.

### Audacity
Per iniziare, scarica [l'ultima versione di Audacity](https://github.com/audacity/audacity/releases/latest).

Per convertire l'audio:
1. Caricare il file in Audacity
1. Se il file è in stereo, clicca sul brano e seleziona `Tracks` > `Mix` > `Mix Stereo down to Mono`
1. Vai a `Impostazioni audio` > `Impostazioni audio...` e assicurati che la `Frequenza di campionamento del progetto` non sia impostata per essere superiore a `48000 Hz` (che è il limite)

Per esportare nel formato corretto:
1. Seleziona `File` > `Export` > `Export Audio...`
1. Imposta `Salva come` su `WAV (Microsoft)`
1. Imposta `Codifica` su `PCM a 16 bit con segno`
1. Imposta il nome dell'output su `bgm.wav` e fai clic su `Salva`
1. Fai clic su `Cancella` e quindi fai clic su `OK` per modificare i metadati

Ora hai un file `bgm.wav` che può essere copiato nella sottocartella `sound` della cartella del tema.

Dovresti quindi impostare l'opzione `Musica Tema DSi/3DS` nelle impostazioni di TWiLight Menu++ su "Tema" affinché la tua musica di sottofondo personalizzata venga riprodotta nel menu.
