---
lang: it-IT
layout: wiki
section: ds-index
title: Nintendo DSi / Nintendo 3DS TWL_FIRM
category: Reference
description: An explanation of all things DS modding
---

### Configurare CFW
Mentre la maggior parte dei vantaggi del Custom Firmware sono per il Nintendo DSi e la famiglia dei sistemi del Nintendo 3DS, ti permette di sbloccare tuttto il potenziale della tua console. Installare il Custom Firmware è abbastanza facile, e nella maggior parte dei casi, tutto ciò di cui hai bisogno è una scheda (micro)SD. Abbiamo le migliori guide da seguire, con istruzioni passo per passo.

- [Guida all'Hacking del 3DS](https://3ds.hacks.guide)
  - Comando Lightning: `mod 3ds`
  - Comando Kuriisu: `guida 3ds`
- [Guida all'Hacking del DSi](https://dsi.cfw.guide)
  - Comando Lightning: `mod dsi cfw`
  - Comando Kuriisu: `guide dsi`

### Velocità CPU
Il Nintendo DS era composto da un processore a 67Mhz nel 2004. Il Nintendo DSi era composto da un processore a 133Mhz nel 2009. La maggior parte dei giochi del parco titoli del Nintendo DS sono stati fatti prima che il Nintendo DSi uscì, e pertanto l'unico processore a loro disposizione era a 67Mhz. Alcune applicazioni si sono legate a quella velocità e di conseguenza, non funzionerebbero bene con una maggiore velocità. La maggior parte dei giochi, tuttavia, supererebbe l'originale con una maggiore velocità.

nds-bootstrap ha TWL Clock Speed come opzione, ma non cercherà di regolare le ROM per farle funzionare a velocità maggiore. Questo è colpa dell'applicazione in sé, e perciò le applicazioni che non funzionano ad una velocità più alta NON è un bug di nds-bootstrap.

### Menu di Sistema Nintendo DSi
Il menu di sistema del Nintendo DSi utilizza un numero intero firmato a 32 bit per determinare lo spazio libero sulla NAND. Utilizzando la NAND atti, il totale non andrà mai oltre 128 MB in modo tale che sia sicuro. Tuttavia, quando reindirizziamo la NAND alla scheda SD, va al di sopra del limite intero a 32 bit, la quale la fa eccedere ad un numero negativo. Il numero negativo di spazio libero purtroppo causerà un messaggio di errore "Si è verificato un errore", non permettendoti di avviare il menu. Fortunatamente, questo può essere risolto creando un file fittizio per farlo diventare un numero positivo.

I numeri positivi e negativi sono determinati da coppie di due. Ad esempio, 1-2 GB di spazio libero è consentito mentre 3-4 no. 5-6 GB di spazio libero è consentito mentre 7-8 no.

In version 1.4.0, RSA signatures in the DS Cart Whitelist aren't verified. There is an exploit regarding a vulnerability in the Nintendo DSi flashcard whitelist that allows you to take access over the ARM9 processor, It requires version 1.4.0 (it was patched in future versions and didn't exist in prior versions) and a flashcard with a modified ROM.

### Accesso alla Slot-1 del Nintendo DSi & Blockout
L'accesso alla Slot-1 è bloccato quando si avviano applicazioni dal menu di sistema, tranne se tali applicazioni sono o il launcher della Slot-1 o le Impostazioni di Sistema. Per avviare le cartucce slot-1 normalmente non avviabili, è necessario creare un exploit nelle Impostazioni di sistema o installare Unlaunch. Senza una di queste, non è possibile avviare flashcard non avviabili e non è possibile fare dump di ROM sulla scheda SD.

The flashcard white list is checked via RSA signatures are contained via RSA keys on every firmware expect 1.4.0. This means that people can white list their own carts

Before 1.4.0, the white list used to contain only two sections. In 1.4.0, they've introduced a third section which was made to block flashcards that got around the first two. The third section loads up to eight different section of the rom and checks them with a hash to see if the rom has been tampered with. However, due to the forgetfulness of putting any sanity check, we can overflow into the exception vector/interrupt address using a large enough value. Best of all, this runs on ARM7 (aka the security processor) so this makes it the first exploit for the ARM7 processor. Since this happens before the lock out of the SCFG registers, we can run advanced homebrew (such as Slot-1 dumpers & external slot-1 dumpers)

Unfortunately, the requirements are tight. It requires version 1.4.0 and a flashcard with a modified ROM. Also, the exploit never officially came out, due to Unlaunch being much simpler to install and having less requirements (just a way to get into homebrew) with the same advantages.

### Nintendo DSi Camera
The Nintendo DSi Camera application has the ability to take pictures in the JPEG and save them to either the System Memory or the SD card. The way it's loaded restricts it to only DSi made images, due to lacking the proper HMAC stored inside a custom EXIF tag. Any custom images are not readable on the DSi, whether its PC taken or PC edited.

A `pit.bin` file is used in order to load images. However, the header size at offset 0x16 is unchecked, so a big enough header size value can exceed boundaries and cause the buffer to overwrite and jump to unsigned code. This is how Memory Pit is powered.

### Nintendo DSi Bootstage 2
The second bootstage of the Nintendo DSi loads launcher's "title.tmd" into memory. However, they do not specify a file size limit check, meaning that the first 80k bytes are loaded into RAM while the rest can be a custom payload. This is the basis of Unlaunch exploit.
