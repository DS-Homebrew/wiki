---
lang: de-DE
layout: wiki
section: ds-index
category: guides
title: Hardmod
description: Wie man einen Nintendo DSi hardmodet
tabs:
  - 
    windows: Windows
    other: macOS/Linux
---

Hardmodding kann deine DSi-Daten leicht beschädigen. Wenn du versuchst, deinen DSi zu entfernen, solltest du zuerst [ntrboot](ntrboot) versuchen.
{:.alert .alert-danger}

Hardmodding ist, wenn man das Motherboard des Nintendo DSi physisch an einen SD-Karten-Adapter lötet, um auf einem Computer gelesen zu werden. Dies ist nützlich, um NAND-Backups wiederherzustellen, NAND auf Ihrem PC anzusehen, etc...

### Nintendo DS
[![Original DS Motherboard mit Touchpoints beschriftet](/assets/images/ds-hardmod/mobo_pinout.png)](/assets/images/ds-hardmod/mobo_pinout.png)

### Nintendo DSi

Um eine Nintendo DSi/DSi XL (engl. LL) zu starten, benötigst du:
    - [Lötkolben mit Bleistiftspitze](https://www.amazon.com/dp/B01N4571Q6)
    - [Sehr feiner Draht](https://www.amazon.com/dp/B01MXGNTA4), 28AWG oder kleiner, vorzugsweise 30AWG+
    - SD-zu-microSD-Adapter
    - Ein SD-Kartenleser, der eMMC-Chips im Single-Data-Line-Modus lesen kann. [Hier ist eine bekannte funktionierende Version](https://www.amazon.com/dp/B006T9B6R2)
    - [Win32DiskImager](https://sourceforge.net/projects/win32diskimager/) und [HxD](https://mh-nexus.de/en/downloads.php?product=HxD20) unter Windows
    - Ein gültiges NAND-Backup des DSi, den Sie hardmodden
    - Zum bequemen Löten auf Pads mit einem Durchmesser von nur 0,5 mm

#### DSi Seite A Pinbelegung
[![DSi Seite A Pinbelegung](/assets/images/dsi-hardmod/side_a.jpg)](/assets/images/dsi-hardmod/side_a.jpg)
#### DSi Seite B Pinbelegung
[![DSi Seite B Pinbelegung](/assets/images/dsi-hardmod/side_b.png)](/assets/images/dsi-hardmod/side_b.png)
#### DSi XL Seite B Pinbelegung
[![DSi XL Seite B Pinbelegung](/assets/images/dsi-hardmod/dsi_xl_side_b.png)](/assets/images/dsi-hardmod/dsi_xl_side_b.png)

- Sie müssen die Punkte auf der Motherboard mit dem microSD-Kartenadapter lösen
    - CMD zu Pin 2
    - GND zu Pins 3 und 6
    - CLK an Pin 5
    - DAT0 bis Pin 7

#### Gelöstetes MikroSD-Adapter Beispiel
[![microSD Beispiel](/assets/images/dsi-hardmod/sd.jpg)](/assets/images/dsi-hardmod/sd.jpg)

- Stecken Sie den microSD-Kartenadapter in Ihren Computer
    - **WARNUNG** - Windows wird Sie auffordern, die Festplatte zu formatieren: **NICHT** formatieren - dies könnte irreparable Schäden verursachen

#### Keine$gba Fußzeile wird entfernt
Sie müssen zuerst die NOCASH Fußzeile aus dem Backup entfernen, das Sie auf die DSi. Dies kann mit dem [HiyaCFW Helfer](https://github.com/mondul/HiyaCFW-Helper/releases/latest) gemacht werden.

1. Lade die Version für das Betriebssystem herunter, das du benutzt hast
1. Führe das Skript aus, wähle das NAND-Backup aus, das du auf deinen DSi flashen möchtest
1. Wechseln Sie zum NAND-Modus mit der Schaltfläche links neben dem Dateipfad
1. Klicken Sie auf `Start` um das NAND-Backup ohne$gba Fußzeile zu erstellen

- Sobald das Skript fertig ist, sollte es eine Datei mit einem langen Namen geben, die in `-no-footer endet. in` im Ordner, in dem Ihr Terminal geöffnet ist
    - Benutze diese Datei als NAND-Bild, das du auf den DSi flashst

{% capture tab-windows %}
1. Win32DiskImager öffnen
1. Klicken Sie auf das Ordnersymbol und stöbern Sie auf Ihrer Arbeitsfläche. In das Textfeld schreiben Sie `NAND_0.bin`. Wählen Sie bei der Auswahl des Typs `alle Typen *.*`
1. Wählen Sie das Gerät aus, das der DSi ist und klicken Sie auf "Lesen"
1. Sobald das erledigt ist, klicke auf das Ordnersymbol, ändere den Namen auf `NAND_1.bin` und lese es erneut
1. Öffnen Sie HxD und ziehen Sie beide Dateien in den Editor. Gehen Sie zur oberen Leiste, klicken Sie auf "Analyse", klicken Sie im Dropdown-Menü auf "Vergleichen".
1. Wählen Sie den Vergleich beider Dateien und klicken Sie auf OK, wenn Sie fertig sind
    - Wenn es heißt "Die ausgewählten Dateien sind identisch", können Sie zum nächsten Abschnitt übergehen
    - Wenn das nicht der Fall ist und beide NANDs nicht 240 MB groß sind, löschen Sie NAND_1/NAND_0 erneut
1. Öffnen Sie Win32DiskImager, klicken Sie auf das Ordnersymbol und wählen Sie Ihr NAND-Backup aus, das Sie zuvor erstellt haben
1. Blinken Sie es mit der `Schreibtaste`
1. Ziehen Sie den SD-Kartenadapter ab und versuchen Sie, den DSi einzuschalten
{% endcapture tab-windows %}
{% assign tab-windows = tab-windows | split: "////////" %}


{% capture tab-other %}
1. Stellen Sie fest, wo sich die SD-Karte befindet
    - Linux:
        1. Ziehen Sie den SD-Kartenadapter ab
        1. `lsblk` in einem Terminal ausführen
        1. Stecken Sie den SD-Kartenadapter ein
        1. `Lsblk` erneut ausführen
        1. This time a new device should appear
            - It may be called `/dev/sdb`, make sure you note down what it is called on *your* computer

    - macOS:
        1. Ziehen Sie den SD-Kartenadapter ab
        1. `df` in einem Terminal ausführen
        1. Stecken Sie den SD-Kartenadapter ein
        1. `df` erneut ausführen
        1. A new device should appear in the list
            - It may be called `/dev/disk1s1`, make sure you note down what it is called on *your* computer

1. NAND dumpen
    - Führen Sie den folgenden Befehl in einem Terminal aus:
        - `cat {device-name} > nand0.bin`
        - Ersetzen Sie `{device-name}` durch den Speicherort für die SD-Karte
        - Z. B. `cat /dev/sdb > nand0.bin`
        - Führen Sie dann `cat {device-name} > nand1.bin` aus `.`


1. NAND-Dumps vergleichen
    1. Führen Sie den folgenden Befehl aus:
        - Linux: `md5sum nand0.bin nand1.bin`
        - macOS: `md5 -r nand0.bin nand1.bin`
    1. Prüfen Sie, ob die erzeugten Hashes übereinstimmen
    1. Falls nicht, führen Sie den NAND erneut aus und passen Sie die Verdrahtung gegebenenfalls an
    1. Das NAND wird so lange neu gepackt, bis die Hashes identisch sind

1. Flash-NAND
    1. Suchen Sie das NAND-Backup, das Sie zuvor auf der Konsole erstellt haben
    1. Führen Sie den folgenden Befehl aus:
        - `cat {existing-nand-backup} > {device-name}`
        - Replace `{existing-nand-backup}` with the location and name of your old NAND backup
        - Replace `{device-name}` with the mount point of the SD card

An dieser Stelle können Sie den SD-Kartenadapter abziehen und versuchen, den DSi einzuschalten. Wenn alles gut gegangen ist, sollte der DSi in dem Zustand gebootet haben, in dem er sich zum Zeitpunkt der Erstellung des Backups befand!
{% endcapture tab-other %}
{% assign tab-other = tab-other | split: "////////" %}

### Flashen der NAND-Sicherung
{% assign tabs = tab-windows | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}
