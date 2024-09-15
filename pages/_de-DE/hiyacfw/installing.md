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
Der hiyaCFW Helper ist dafür bekannt, dass er bei Windows Defender und anderen Antivirenprogrammen Fehlalarme auslöst. Bitte deaktivieren Sie solche Programme vorübergehend, wenn Sie Probleme beim Herunterladen oder Ausführen des Programms haben.
{: .alert .alert-info}

1. Laden Sie & herunter und installieren Sie die neueste Version von [7-Zip.](https://www.7-zip.org/download.html)
    - Dies funktioniert nicht mit anderen Archiv-Extraktionsprogrammen, wie z. B. WinRAR. Die hiyaCFW-Hilfe basiert auf 7-Zip selbst und nicht auf einem allgemeinen Archiv-Extraktionsprogramm
1. Laden Sie die neueste Windows-Version des [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) herunter
1. Entpacken Sie das hiyaCFW Helper-Archiv irgendwo auf Ihrem PC
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos %}
1. Laden Sie die neueste macOS-Version des [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) herunter
1. Entpacken Sie das hiyaCFW Helper-Archiv irgendwo auf Ihrem PC
{% endcapture %}
{% assign tab-macos = tab-macos | split: "////////" %}

{% capture tab-other %}
1. Installieren Sie Python 3 mit Ihrem Paketmanager, falls es nicht bereits installiert ist
1. Laden Sie die neueste Python-Version des [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) herunter
1. Entpacken Sie das hiyaCFW Helper-Archiv irgendwo auf Ihrem PC
1. Installieren Sie tkinter mit dem folgenden Befehl für Ihre Distribution, wenn Sie es nicht bereits haben:
    - Debian-basiert: `sudo apt-get install python3-tk`
{% endcapture %}
{% assign tab-other = tab-other | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}

### Teil 2: Hinzufügen von hiyaCFW-Dateien zur SD-Karte
![Screenshot des HiyaCFW Helfers](https://image.ibb.co/hhzKRL/Screen-Shot-2018-10-18-at-16-30-18.png)

1. Starten Sie den hiyaCFW-Helfer
    - **Windows:** Starten Sie die Datei `HiyaCFW_Helper.exe`, die aus dem hiyaCFW Helper-Archiv extrahiert wurde (möglicherweise müssen Sie Ihr Antivirusprogramm vorübergehend deaktivieren)
    - **macOS:** Rechtsklicke auf die `HiyaCFW_Helper` Datei aus dem HiyaCFW Helper Archiv und wähle `Öffnen`
    - **Linux:** Starten Sie die Datei `HiyaCFW_Helper.py`, die aus dem hiyaCFW Helper-Archiv extrahiert wurde
1. Klicken Sie auf die Schaltfläche `...` im Feld "NAND-Datei ohne$GBA Fußzeile"
1. Navigieren Sie zu Ihrem NAND-Backup, und klicken Sie auf `Open`
1. Drücke `Start`
1. Navigieren Sie im neuen Pop-up-Fenster zum Stammverzeichnis Ihrer SD-Karte und drücken Sie auf `OK`.
    - Dieser Vorgang kann mehrere Minuten dauern
1. Wenn die Anwendung " `Done!"` meldet, schließen Sie den hiyaCFW Helper
1. Schließen Sie das Terminalfenster

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
