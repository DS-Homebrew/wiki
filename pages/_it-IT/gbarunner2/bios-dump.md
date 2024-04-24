---
lang: it-IT
layout: wiki
section: gbarunner2
title: Dump del BIOS GBA
description: Come estrarre il BIOS GBA dalla tua console
tabs:
  - 
    3ds-sd-card: 3DS con open_agb_firm
    gba-flashcart: GBA/DS/DS Lite con flashcart in modalità GBA
---

Mentre la maggior parte degli emulatori GBA non ha problemi a riprodurre i giochi GBA da soli, alcuni emulatori e hypervisor, come GBARunner2, potrebbero aver bisogno del file BIOS per riprodurre correttamente alcuni titoli.

Esistono due modi distinti per raggiungere questo obiettivo, utilizzando:
- un 3DS con firmware personalizzato, OPPURE
- un GBA/DS/DS Lite con una flashcart in modalità GBA

{% capture tab-3ds-sd-card %}
### Parte 1: Ottenere i file richiesti
1. Scaricare [open_agb_firm](https://github.com/profi200/open_agb_firm/releases/latest) (il file `.7z`)
1. Scaricare [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)
1. Creare una cartella chiamata `payloads` nella cartella `luma` della tua scheda Sd
1. Copiare `open_agb_firm.firm` dal file open_agb_firm `.7z` nella cartella `/luma/payloads`
1. Copy `3ds` from the open_agb_firm `.7z` file to the root of your SD card
1. Copiare `Bios_Dumper.gba` nella root della scheda SD.
1. Inserisci la scheda SD nella tua console

### Parte 2: Bios_Dumper
1. Tieni premuto <kbd>START</kbd> e accendere il dispositivo.
    - In questo modo si avvia open_agb_firm
    - Se viene caricato il Chainloader `Luma3DS`, selezionare `open_agb_firm` da questo menu
    - Se si carica in un altro modo, non è stato copiato `open_agb_firm.firm` nella cartella corretta della scheda SD.
1. Da open_agb_firm, avviare `Bios_Dumper.gba`
1. Lo schermo lampeggierà di rosso e di verde
1. Attendere circa cinque secondi
1. Spegni la tua console

{% capture upload-bios-text %}
Dalla scheda SD, caricare `/3ds/open_agb_firm/saves/Bios_Dumper.sav` qui:
{% endcapture %}

### Parte 3: Scompattare il BIOS dal file di salvataggio generato
1. Inserisci la scheda SD nel tuo computer
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-3ds-sd-card = tab-3ds-sd-card | split: "////////" %}


{% capture tab-gba-flashcart %}
### Parte 1: Ottenere i file richiesti
1. Scaricare [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)
1. Copia `Bios_Dumper.gba` nella root della scheda SD
1. Inserisci la scheda SD nella tua console
1. Reinserire la flashcart del GBA nella cartuccia

### Parte 2: Bios_Dumper
1. Avvia la flashcart, e poi avvia `Bios_Dumper.gba`
1. Lo schermo lampeggierà di rosso e di verde
1. Attendere circa cinque secondi
1. Spegni la tua console

{% capture upload-bios-text %}
Dalla tua scheda SD, caricare `Bios_Dumper.sav` qui:
{% endcapture %}

### Parte 3: Scompattare il BIOS dal file di salvataggio generato
1. Inserisci la scheda SD nel tuo computer
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-gba-flashcart = tab-gba-flashcart | split: "////////" %}

{% assign tabs = tab-3ds-sd-card | concat: tab-gba-flashcart %}
{% include tabs.html index=0 tabs=tabs %}

Verrà scaricato automaticamente un file `bios.bin`. Questo è il file finale del BIOS GBA.
{:.alert .alert-success}

<script src="https://geraintluff.github.io/sha256/sha256.min.js"></script>
<script src="/assets/js/bios-shrinker.js"></script>
