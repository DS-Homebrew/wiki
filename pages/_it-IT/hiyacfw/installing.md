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
1. Download the latest Windows version of [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases)
1. Run the TWLMagician MSI package and extract it to anywhere on your PC
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos %}
1. Download the latest macOS version of [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases)
1. Extract the TWLMagician archive anywhere on your PC
{% endcapture %}
{% assign tab-macos = tab-macos | split: "////////" %}

{% capture tab-other %}
1. Se non è già installato, installa Python 3 usando il gestore di pacchetti della tua distribuzione
1. Download the latest Python version of [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases)
1. Extract the TWLMagician archive anywhere on your PC
1. Se non è già installato, installa tkinter con il seguente comando per la tua distribuzione:
    - Debian-based: `sudo apt-get install python3-tk`
    - Arch Linux: `sudo pacman -S tk`
    - Fedora: `sudo dnf install python3-tkinter`
    - CentOS: `sudo yum install python3-tkinter`
1. Install requirements with the following command:
    - `pip3 install -r requirements.txt`
{% endcapture %}
{% assign tab-other = tab-other | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}

### Parte 2: Aggiunta dei file hiyaCFW alla scheda SD
![Screenshot of TWLMagician](https://i.ibb.co/xXr3nd3/336ffe68-abd9-4880-b2ca-5421cbf5958a.png)

1. Launch TWLMagician
    - **Windows:** Launch the `TWLMagician.exe` file extracted from the TWLMagician archive (you may need to temporarily disable your antivirus)
    - **macOS:** Right click the `TWLMagician` file extracted from the TWLMagician archive and choose `Open`
    - **Linux:** Launch the `TWLMagician.py` extracted from the TWLMagician archive
1. Fai clic sul pulsante `...` nella casella "NAND file with No$GBA footer"
1. Naviga al tuo backup NAND, e clicca su `Open`
1. Premi `Start`
1. Nella nuova finestra pop-up, vai nella root della tua scheda SD e premi `OK`.
    - Il processo può richiedere diversi minuti
1. When the application says `Done!`, close out of TWLMagician
1. Close the terminal window (optional)

### Parte 3: Configurazione di Unlaunch e hiyaCFW
1. Avvia la console Nintendo DSi tenendo premuto <kbd class="face">A</kbd> e <kbd class="face">B</kbd>
    - Questo dovrebbe portarti al menu di Unlaunch
1. Vai a `OPTIONS`, poi `NO BUTTON`
1. Seleziona `hiyaCFW` e premi <kbd class="face">A</kbd>
    - Questo farà avviare hiyaCFW all'avvio del sistema
1. Salva le impostazioni e riavvia la console
1. Tieni premuto <kbd>SELECT</kbd> mentre accendi la console Nintendo DSi per accedere alle impostazioni di hiyaCFW
1. Cambia le impostazioni a tuo piacimento, poi premi <kbd>START</kbd> per continuare

Se appare un messaggio `An error has occurred`, guarda la pagina [Domande frequenti e risoluzione dei problemi](faq?faq=why-do-i-get-an-error-has-occurred-message-when-booting-hiyacfw).
{: .alert .alert-warning}
