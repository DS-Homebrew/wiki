---
lang: it-IT
layout: wiki
section: ds-index
category: reference
title: Lettore video
description: Lettori video homebrew per Nintendo DS(i)
---

# Lettori video homebrew per Nintendo DS(i)
Questa pagina contiene un elenco di lettori video funzionanti o in fase di sviluppo per Nintendo DS e DSi che spiega il funzionamento di ciascuno di loro.

| Nome del lettore | Codec supportati   | Supporto       | Contro                                           | FPS massimi |
| ---------------- | ------------------ | -------------- | ------------------------------------------------ | ----------- |
| FastVideoDS      | `.fv`, FastVideoDS | DSi e NDS      | Confetti spam slows down high FPS video.         | 60fps       |
| Moonshell        | `.dpg`, MPEG1      | Solo flashcard | Richiede una flashcard per riprodurre i video.   | 24fps       |
| Tuna-ViDS        | `.avi`, XVid       | DSi e NDS      | Può raggiungere solo un certo framerate/bitrate. | 15 fps      |
| MPEG4Player      | `.mp4`, MPEG-4     | DSi e NDS      | Può riprodurre solo video brevi.                 | 24fps       |

Note:
- Gli FPS massimi effettivi dipendono dal contenuto e dalla lunghezza del video.

## FastVideoDS

Note: If you get a message saying `This encoder requires a cpu with support for AVX2 instructions`, then you need to either install a newer CPU chip, or use a newer PC.
{: .alert .alert-warning}

### Windows

1. Download the encoder [here](https://mega.nz/file/mYwiBTZA#FX6k-9cclPig4_WutE9IueVR7NN0Kxl-mZvRXyhpQRg)
1. Download the below `.bat` file to the same place as the encoder `.exe` file, and drag and drop your video into the `.bat` file.
- [FastVideoDS.bat](/assets/files/FastVideoDS.bat)

Una volta terminato questo processo, dovrebbe essere facile trascinare e rilasciare i file sulla scheda SD. Una volta inserito il video nella scheda SD, sarà pronto per la riproduzione tramite **TW**i**L**ight Menu++.

## Conversione video Moonshell (DPG4x)

1. Scarica DPG4x [qui](https://www.gamebrew.org/wiki/DPG4X)
1. Apri `dpg4x.7z`
1. Aprire `dpg4x-2.3.3.0.zip` (3.0-1 dà un errore durante l'apertura, per un motivo sconosciuto)
1. Aprire `dpg4x-2.3.3.0_setup.exe`, e procedi all'installazione
1. Dopo l'installazione, apri DPG4x
1. Clicca sulla scheda `VIDEO`
1. Spunta l'opzione `Keep Aspect`
1. Impostate `Video Bitrate` a tua scelta (un valore più alto dovrebbe migliorare la qualità)
1. Clicca sulla scheda `AUDIO`
1. Spunta `Normalize Volume`, se il video si sente piano
1. Clicca sulla scheda `SUBTITLES`
1. Impostare `Subtitles Source` su `Disable Subtitles`, poiché alcune tracce di sottotitoli potrebbero non venir mostrate correttamente
1. Clicca sulla scheda `MAIN`
1. Clicca su `Add Media` per aprire il tuo/i tuoi file video
1. Imposta `DPG Version` a `4`, se utilizzi Moonshell v2.x, altrimenti su `3` o inferiore
1. Impostare `Quality` (la qualità) a tua scelta
1. Clicca su `Start Encoding` per convertire il/i video

Una volta terminato questo processo, dovrebbe essere facile trascinare e rilasciare i file sulla scheda SD. Una volta messo il video sulla scheda SD, sarà pronto per la riproduzione tramite Moonshell.

## Guida TunaViDS

### Windows
Per prima cosa è necessario prendere un video a tua scelta. È consigliato un video in formato 4:3, ma FFmpeg aggiunge comunque delle barre nere al video se non è così.

Attenzione: Non modificare le impostazioni della ROM di Tuna-ViDS, perché non si avvierà correttamente. Questa guida presuppone che abbiate l'ultima versione di **TW**i**L**ight Menu++.
{: .alert .alert-warning}

Successivamente, scarica FFmpeg da [questo link diretto](https://www.gyan.dev/ffmpeg/builds/ffmpeg-git-essentials.7z) ed estrailo in C:\ffmpeg o da qualche parte dove puoi accedere senza diritti di amministratore.

Dovreste essere cauti nella conversione dei video (10-15fps), altrimenti il video potrebbe bloccare la vostra console. Potrebbero verificarsi rallentamenti nelle scene più movimentate (coriandoli, pioggia, ecc.).

Per utilizzare FFmpeg ovunque, si raccomanda di aggiungere la directory al percorso della variabile d'ambiente del sistema. Potrebbe interrompere i programmi che si basano su FFmpeg, quindi assicuratevi di rimuovere la voce quando avete finito.

Trascinate il vostro video in uno di questi file batch per convertirlo:
- [xvid-ds.bat](/assets/files/xvid-ds.bat): converte i video a 12FPS in modo ottimale per le console DS
- [xvid-dsi.bat](/assets/files/xvid-dsi.bat): converte i video a 12FPS in modo ottimale per le console DSi
- [xvid-ds-vol4.bat](/assets/files/xvid-ds-vol4.bat): converte i video a 12FPS in modo ottimale per le console DS con un aumento del volume del 400%
- [xvid-dsi-vol4.bat](/assets/files/xvid-dsi-vol4.bat): converte i video a 12FPS in modo ottimale per le console DS con un aumento del volume del 400%

Se vuoi, è possibile modificare quanto segue in uno dei file .bat di cui sopra:
- `12` in `-r 12` a un valore diverso tra `10` e `15` per un frame rate diverso
- `-2` in `scala=256:-2` alla risoluzione verticale desiderata, se il video appare distorto

When this process is done, it should be easy as drag and drop to SD card. Once you put the video on your SD card, it will be ready for playback via **TW**i**L**ight Menu++.

Il video uscirà dal menu al termine della riproduzione, quindi se si desidera riprodurre il video in loop, è necessario incollarlo e ripeterlo in un editor video e poi convertirlo in un file xvid avi con questo metodo.

## MPEG4Player

### Windows

Il processo è lo stesso per Tuna-ViDS, ma è possibile avere video fino a 24 fps.
- [dsmp4-43.bat](/assets/files/dsmp4.bat): Per i video 4:3
- [dsmp4.bat](/assets/files/dsmp4.bat): Per i video in 16:9
