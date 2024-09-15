---
lang: it-IT
layout: wiki
section: ds-index
category: guide
title: Dump del BIOS/Firmware
description: Come estrarre il BIOS/Firmware Nintendo DS o DSi dalla tua console
tabs:
  - 
    dsi-sd-card: DSi con Unlaunch
    flashcard: Flashcard
---

Alcuni emulatori, come melonDS, richiedono il BIOS e il firmware in modalità DS o DSi, che sono disponibili estraendoli dalla tua console. Esistono due modi diversi per ottenerli, utilizzando:
- un DSi con Unlaunch, OPPURE
- un DS/DS Lite/3DS o un DSi senza Unlaunch, insieme a una flashcard compatibile con la console

Il metodo DSi estrae i file del BIOS e del firmware sia in modalità DS che in modalità DSi. Il metodo delle flashcard estrarrà solo i file in modalità DS.

{% capture tab-dsi-sd-card %}

Questa pagina suppone che si stia eseguendo un CFW moderno da [dsi.cfw.guide](https://dsi.cfw.guide).
{:.alert .alert-warning}

### Parte 1: Ottenere i file richiesti

1. Scarica [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)
1. Copia `dsibiosdumper.nds` dal file dsibiosdumper `.7z` nella root della scheda SD
1. Reinserisci la scheda SD nel dispositivo

### Parte 2: dsibiosdumper
1. Con il dispositivo ancora spento, tieni premuti i seguenti pulsanti: <kbd class="face">A</kbd> + <kbd class="face">B</kbd>, tienili premuti, e accendi il dispositivo
1. Il dispositivo dovrebbe essersi avviato nel menu Unlaunch
1. Avvia dsibiosdumper dall'elenco delle applicazioni
1. Premi <kbd class="face">A</kbd> per effettuare il dump di tutto
1. Attendi il termine del processo
    - L'operazione potrebbe richiedere un po' di tempo
1. Al termine del processo, premi <kbd>SELECT</kbd> per uscire da dsibiosdumper
1. Spegni la tua console
1. Inserisci la scheda SD nel tuo computer

Tutti i file necessari si trovano nella cartella `dsidump` nella root della scheda SD.
{:.alert .alert-success}

{% endcapture %}
{% assign tab-dsi-sd-card = tab-dsi-sd-card | split: "////////" %}

{% capture tab-flashcard %}

### Parte 1: Ottenere i file richiesti

1. Scarica [dsbf_dump](https://github.com/DS-Homebrew/dsbf_dump/releases/latest) (il file `.nds`)
1. Copia `dsbf_dump.nds` nella root della tua scheda SD
1. Inserisci la scheda SD nella tua flashcard

### Parte 2: dsbf_dump
1. Accendi la console
1. Avvia la flashcard
1. Navigare fino alla root della scheda SD e avvia dsbf_dump
1. Attendi il termine del processo
1. Al termine del processo, premi <kbd>START</kbd> per spegnere la console
    - Sui sistemi della famiglia 3DS, invece, mostrerà "Software chiuso". Spegni il dispositivo da questa schermata
1. Inserisci la scheda SD nel tuo computer

Tutti i file necessari si trovano in una cartella specificata nella schermata superiore del dispositivo.
{:.alert .alert-success}

{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% assign tabs = tab-dsi-sd-card | concat: tab-flashcard %}
{% include tabs.html index=0 tabs=tabs %}
