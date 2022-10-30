---
lang: it-IT
layout: wiki
section: twilightmenu
category: customization
title: Skin DSi/3DS - Effetti sonori personalizzati
description: Come utilizzare musica di sottofondo ed effetti sonori personalizzati nelle skin DSi e 3DS per TWiLight Menu++
---

TWiLight Menu++ supporta i file audio personalizzati nei temi. Colloca i file audio nella sottocartella `sound` della cartella del tema, ad esempio per il tema `white` i file vanno collocati rispettivamente in `themes/white/sound/sfx.bin` e `themes/white/sound/bgm.pcm.raw`. Entrambi i file sono opzionali; se `bmg.pcm.raw` manca, verrà utilizzata la musica predefinita. La stessa cosa accadrebbe con gli effetti sonori se mancasse anche `sfx.bin`.

Queste istruzioni presuppongono che devkitPro sia installato con mmutil. Puoi scaricare devkitPro sul sito ufficiale [devkitPro website](https://devkitpro.org/wiki/Getting_Started).

## Raccolta di Effetti Sonori
La raccolta degli effetti sonori (sfx.bin) contiene effetti sonori come il suono di selezione dell'icona, ecc.

| File        | Descrizione                                                                                   |
| ----------- | --------------------------------------------------------------------------------------------- |
| startup.wav | Riprodotto all'avvio. Vedi la sezione [suono di avvio ](#startup-sound) per maggiori dettagli |
| back.wav    | Indietro                                                                                      |
| launch.wav  | Riprodotto quando si avvia una partita                                                        |
| select.wav  | Played when moving the cursor in the per-game settings and select menu                        |
| wrong.wav   | Riprodotto quando si raggiunge la fine della pagina                                           |
| switch.wav  | Riprodotto quando si cambia pagina                                                            |
| stop.wav    | Riprodotto sul tema DSi quando il cursore smette di muoversi                                  |

Tutti i file sopra elencati sono necessari per creare una raccolta di effetti sonori personalizzati. Se desideri che un suono sia muto, è possibile utilizzare un file audio muto. Il formato `.wav` è obbligatorio e la codifica *deve* essere PCM.

Per costruire la raccolta di effetti sonori è necessario scaricare [questo file](/assets/files/Makefile) e metterlo accanto a tutti i file `.wav` che verranno utilizzati. Dopo che tutti i file sono nella stessa cartella, apri il terminale (o la riga di comando se usate Windows), cambiate la directory corrente (`cd`) nella cartella in cui si trova `Makefile` e poi eseguite il comando `make`.

Si otterrà un file `sfx.bin` che può essere copiato nella sottocartella `sound` della cartella del tema. **Questo file deve essere inferiore a 512000B = 512 kB**. Qualsiasi file di dimensioni superiori a questo valore provocherà un arresto anomalo o la mancata riproduzione completa di alcuni suoni.

### Suono d'avvio
Mentre gli altri effetti sonori funzionano con qualsiasi file WAV con codifica PCM, il suono di avvio deve essere in un formato specifico per funzionare correttamente, altrimenti ci sarà un vuoto tra l'interruzione del suono di avvio e l'inizio della musica di sottofondo.

Il file startup.wav deve essere **16-bit 16 kHz**. È possibile utilizzare un programma come [Audacity](https://www.audacityteam.org/download/) per convertire in questo formato. Una volta caricato il file in Audacity, cambia **Project Rate (Hz)** in **16000**, quindi premi **Shift+M** e cambia **Format** in **16-bit PCM**.

Se il tuo file è in stereo, dovi anche andare su **Tracks > Mix > Mix Stereo down to Mono**.

È necessario impostare `PlayStartupJingle=1` nel file `theme.ini` affinché il jingle di avvio venga riprodotto.


## Musica di sottofondo del menu
Musica di sottofondo del menu deve essere un file PCM **16 bit 16 kHz Mono**. Di seguito sono riportati due metodi per convertire i file audio in tale formato.

A differenza di sfx.bin, *bgm.pcm.raw* può essere arbitrariamente grande.

### ffmpeg
Il modo più semplice per convertire la musica da utilizzare in TWiLight Menu++ è eseguire il comando [ffmpeg](https://ffmpeg.org) in un terminale:

```bash
ffmpeg -i [file di input] -f s16le -acodec pcm_s16le -ac 1 -ar 16k bgm.pcm.raw
```

Sostituisci `[file di input]` con il nome del file che desideri convertire. Di solito è possibile farlo semplicemente trascinando nella posizione corretta con il cursore il file nella finestra del terminale.

### Audacity
Se non vuoi usare la riga di comando, puoi anche convertire usando [Audacity](https://www.audacityteam.org/download/).

Per convertire l'audio:
1. Caricare il file in Audacity
1. Se il file è in stereo, clicca sul brano e seleziona `Tracks` > `Mix` > `Mix Stereo down to Mono`
1. Modifica `Project Rate (Hz)` in basso a sinistra in `16000`

Per esportare nel formato corretto:
1. Seleziona `File` > `Export` > `Export Audio...`
1. Imposta `File Type` a `Other uncompressed files`
1. Imposta `Header` su `RAW (header-less)`
1. Imposta `Encoding` a `Signed 16-bit PCM`
1. Imposta il nome dell'output su `bgm.pcm.raw` e clicca su `Save`
1. Clicca su `OK` alla modifica dei metadati

Ora disponi di un file `bgm.pcm.raw` che può essere copiato nella sottocartella `sound` della cartella dei temi.

 È quindi necessario impostare l'opzione `Musica Tema DSi/3DS` nelle impostazioni di TWiLight Menu++ su "Tema" affinché il BGM personalizzato venga riprodotto nel menu.