---
lang: de-DE
layout: wiki
section: hiyacfw
title: Installation
long_title: Installation von hiyaCFW
description: Wie man hiyaCFW auf dem Nintendo DSi installiert
tabs:
  - 
    windows: Windows
    macos: macOS
    other: Linux
---

Führen Sie nach der Installation von hiyaCFW kein Systemupdate durch. Dadurch werden die SD-Patches von hiyaCFW entfernt.
{: .alert .alert-danger}

### Anforderungen
- Ein Nintendo DSi mit [installiertem Unlaunch](https://dsi.cfw.guide/installing-unlaunch)
- Ein NAND-Backup, das [mit dumpTool](https://dsi.cfw.guide/dumping-nand) von Ihrem Gerät erstellt wurde
- Ein Windows-, macOS- oder Linux-Gerät

### Teil 1: Vorbereiten des PCs für die Installation von hiyaCFW
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
1. Installieren Sie Python 3 mit Ihrem Paketmanager, falls es nicht bereits installiert ist
1. Download the latest Python version of [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases)
1. Extract the TWLMagician archive anywhere on your PC
1. Installieren Sie tkinter mit dem folgenden Befehl für Ihre Distribution, wenn Sie es nicht bereits haben:
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

### Teil 2: Hinzufügen von hiyaCFW-Dateien zur SD-Karte
![Screenshot of TWLMagician](https://i.ibb.co/xXr3nd3/336ffe68-abd9-4880-b2ca-5421cbf5958a.png)

1. Launch TWLMagician
    - **Windows:** Launch the `TWLMagician.exe` file extracted from the TWLMagician archive (you may need to temporarily disable your antivirus)
    - **macOS:** Right click the `TWLMagician` file extracted from the TWLMagician archive and choose `Open`
    - **Linux:** Launch the `TWLMagician.py` extracted from the TWLMagician archive
1. Klicken Sie auf die Schaltfläche `...` im Feld "NAND-Datei ohne$GBA Fußzeile"
1. Navigieren Sie zu Ihrem NAND-Backup, und klicken Sie auf `Open`
1. Drücke `Start`
1. Navigieren Sie im neuen Pop-up-Fenster zum Stammverzeichnis Ihrer SD-Karte und drücken Sie auf `OK`.
    - Dieser Vorgang kann mehrere Minuten dauern
1. When the application says `Done!`, close out of TWLMagician
1. Close the terminal window (optional)

### Teil 3: Konfigurieren von Unlaunch und hiyaCFW
1. Schalten Sie Ihre Nintendo DSi-Konsole ein, während Sie <kbd class="face">A</kbd> und <kbd class="face">B</kbd> gedrückt halten
    - Dies sollte Sie zum Dateimenü von Unlaunch führen
1. Navigieren Sie zu `OPTIONS`, dann `NO BUTTON`
1. Wählen Sie `hiyaCFW` und drücken Sie <kbd class="face">A</kbd>
    - Dadurch wird das System automatisch hiyaCFW starten
1. Speichern Sie Ihre Einstellungen und starten Sie Ihre Konsole neu
1. Halten Sie <kbd>SELECT</kbd> gedrückt, während Sie Ihre Nintendo DSi-Konsole einschalten, um die hiyaCFW-Einstellungen aufzurufen
1. Ändern Sie die Einstellungen nach Ihren Wünschen, und drücken Sie dann <kbd>START</kbd>, um fortzufahren

Wenn die Meldung `Ein Fehler ist aufgetreten` erscheint, lesen Sie bitte die [Faq-Seite](faq?faq=why-do-i-get-an-error-has-occurred-message-when-booting-hiyacfw).
{: .alert .alert-warning}
