---
lang: it-IT
layout: wiki
section: twilightmenu
category: customization
title: Skin DSi / 3DS - Sfx Personalizzati
description: Come utilizzare musica di sottofondo ed effetti sonori personalizzati nelle skin DSi e 3DS per TWiLight Menu++
---

TWiLightMenu supporta file audio personalizzati nei temi. Posiziona i tuoi file sonori nella sottocartella `sound` nella cartella del tema, per esempio per il tema `white`, posizionare i file rispettivamente in `themes/white/sound/sfx.bin` e `themes/sound/bgm.pcm.raw`. Entrambi i file sono opzionali, se uno manca verrà usata la musica predefinita. Successivamente dovresti cambiare l'opzione audio nelle impostazioni a "Theme".

Queste istruzioni presuppongono che tu abbia devkitPro installato con mmutil. Puoi scaricare devkitPro sul sito ufficiale [devkitPro website](https://devkitpro.org/wiki/Getting_Started).

## Raccolta di Effetti Sonori
La raccolta degli effetti sonori contiene effetti come il suono selezionato dall'icona, ecc.

| File        | Descrizione                                                                                     |
| ----------- | ----------------------------------------------------------------------------------------------- |
| startup.wav | Riprodotto all'avvio. Vedi la sezione [suono di avvio ](#startup-sound) per maggiori dettagli   |
| back.wav    | Indietro                                                                                        |
| launch.wav  | Riprodotto quando si avvia una partita                                                          |
| select.wav  | Riprodotto quando si sposta il cursore                                                          |
| wrong.wav   | Riprodotto quando si raggiunge la fine della pagina                                             |
| switch.wav  | Riprodotto quando si cambia pagina                                                              |
| stop.wav    | Riprodotto sul tema DSi quando il cursore smette di muoversi                                    |
| bgm.pcm.raw | Non fa parte della raccolta suoni. Vedi la sezione [Menu BGM ](#menu-bgm) per maggiori dettagli |

È quindi possibile eseguire `make` per creare la raccolta dei suoni. Tutti i file elencati sopra, tranne *bgm.pcm.raw* sono richiesti, ma è possibile renderli silenziosi.

Il risultato *sfx.bin* **deve essere inferiore a 512000B = 512 kB**. Se più grande, quest'ultimo si tradurrà in crash o alcuni suoni non si riprodurranno completamente.

### Suono d'avvio
Mentre gli altri effetti sonori funzioneranno con qualsiasi file WAV, il suono di avvio deve essere in un formato specifico per funzionare correttamente, altrimenti ci sarà un divario tra quando il suono di avvio si ferma e la musica di sottofondo inizia.

Il file startup.wav deve essere **16 bit 16 kHz**. È possibile utilizzare [Audacity](https://www.audacityteam.org/download/) per esempio per convertire in questo formato. Una volta caricato il file in Audacity, cambia il **Project Rate (Hz)** a **16000**, quindi premi **Shift+M** e cambia il **Format** a **PCM a 16 bit**.

Se il tuo file è stereo, dovresti andare anche in **Tracks > Mix > Mix Stereo down to Mono**.

È necessario impostare `PlayStartupJingle=1` nel tuo `theme.ini` per avviare il jingle da riprodurre.


## Menu BGM
Menu BGM needs to be a **16-bit 16 kHz Mono** raw PCM file. Below are two methods for converting audio files into that format.

Unlike sfx.bin, *bgm.pcm.raw* can be arbitrarily large.

### ffmpeg
The simplest way to convert music for use in TWiLight Menu++ is to run this [ffmpeg](https://ffmpeg.org) command in a terminal:

```bash
ffmpeg -i [input file] -f s16le -acodec pcm_s16le -ac 1 -ar 16k bgm.pcm.raw
```

Replace `[input file]` with the name of the file you want to convert. You can usually do this by simply dragging the file onto the terminal window with the cursor in the correct location.

### Audacity
If you don't want to use the command line you can also convert using [Audacity](https://www.audacityteam.org/download/).

To convert the audio:
1. Load the file in Audacity
1. If your file is in stereo, click on the song then select `Tracks` > `Mix` > `Mix Stereo down to Mono`
1. Change the `Project Rate (Hz)` in the bottom left to `16000`

To export in the correct format:
1. Select `File` > `Export` > `Export Audio...`
1. Set `File Type` to `Other uncompressed files`
1. Set `Header` to `RAW (header-less)`
1. Set `Encoding` to `Signed 16-bit PCM`
1. Set the output name to `bgm.pcm.raw` and click `Save`
1. Click `OK` to the metadata editing

Now you have a `bgm.pcm.raw` file that can be copied to the `sound` subfolder in your theme folder.
