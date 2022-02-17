---
lang: it-IT
layout: wiki
section: hiyacfw
title: Installazione
long_title: Installazione di hiyaCFW
description: Come installare hiyaCFW su Nintendo DSi
tabs:
  - 
    windows: Windows
    macos: macOS
    other: Linux
---

Non aggiornare il sistema dopo aver installato hiyaCFW. Se si aggiorna il sistema, le patch SD di hiyaCFW verranno rimosse.
{: .alert .alert-danger}

### Prerequisiti
- Un Nintendo DSi con [Unlaunch installato](https://dsi.cfw.guide/installing-unlaunch)
- Un backup della NAND preso dal tuo dispositivo [usando dumpTool](https://dsi.cfw.guide/dumping-nand)
- Un dispositivo con Windows, macOS o Linux

### Parte 1: Preparazione del PC per l'installazione di hiyaCFW
{% capture tab-windows %}
L'helper hiyaCFW è causa di falsi positivi con Windows Defender e altri programmi antivirus. Si prega di disattivare temporaneamente tali programmi se si hanno problemi a scaricarlo o eseguirlo.
{: .alert .alert-info}

1. Scarica e installa l'ultima versione di [7-Zip](https://www.7-zip.org/download.html)
   - Questo non funzionerà con nessun altro strumento di estrazione di archivi, come WinRAR. L'helper hiyaCFW si basa su 7-Zip stesso, e non su un estrattore di archivi generale
1. Scarica l'ultima versione per Windows di [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Estrai l'archivio hiyaCFW Helper ovunque sul tuo PC
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos %}
1. Scarica l'ultima versione per macOS di [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Estrai l'archivio hiyaCFW Helper ovunque sul tuo PC
{% endcapture %}
{% assign tab-macos = tab-macos | split: "////////" %}

{% capture tab-other %}
1. Se non è già installato, installa Python 3 usando il gestore di pacchetti della tua distribuzione
1. Scarica l'ultima versione per Python di [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Estrai l'archivio hiyaCFW Helper ovunque sul tuo PC
1. Se non è già installato, installa tkinter con il seguente comando per la tua distribuzione:
   - Debian-based: `sudo apt-get install python3-tk`
{% endcapture %}
{% assign tab-other = tab-other | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}

### Parte 2: Aggiunta dei file hiyaCFW alla scheda SD
![Schermata di hiyaCFW Helper](https://image.ibb.co/hhzKRL/Screen-Shot-2018-10-18-at-16-30-18.png)

1. Avvia hiyaCFW Helper
  - **Windows:** Avvia il file `HiyaCFW_Helper.exe` estratto dall'archivio hiyaCFW Helper (potrebbe essere necessario disattivare temporaneamente il tuo antivirus)
  - **macOS:** Fai clic con il pulsante destro del mouse sul file `HiyaCFW_Helper` estratto dall'archivio hiyaCFW Helper e scegliere `Apri`
  - **Linux:** Lancia il file `HiyaCFW_Helper.py` estratto dall'archivio hiyaCFW Helper
1. Fai clic sul pulsante `...` nella casella "NAND file with No$GBA footer"
1. Naviga al tuo backup NAND, e clicca su `Apri`
1. Premi `Start`
1. Nella nuova finestra pop-up, vai nella root della tua scheda SD e premi `OK`.
   - Il processo può richiedere diversi minuti
1. Quando l'applicazione dice `Done!`, chiudi l'Helper hiyaCFW
1. Chiudi la finestra del terminale

### Parte 3: Configurazione di Unlaunch e hiyaCFW
1. Avvia la console Nintendo DSi tenendo premuto <kbd class="face">A</kbd> e <kbd class="face">B</kbd>
   - Questo dovrebbe portarti al menu di Unlaunch
1. Vai a `OPTIONS`, poi `NO BUTTON`
1. Seleziona `hiyaCFW` e premi <kbd class="face">A</kbd>
   - Questo farà avviare hiyaCFW all'avvio del sistema
1. Salva le impostazioni e riavvia la console
1. Tieni premuto <kbd>SELECT</kbd> mentre accendi la console Nintendo DSi per accedere alle impostazioni di hiyaCFW
1. Cambia le impostazioni a tuo piacimento, poi premi <kbd>START</kbd> per continuare

If it shows `An error has occurred`, please see the [faq](faq?faq=why-do-i-get-an-error-has-occurred-message-when-booting-hiyacfw) page.
{: .alert .alert-warning}
