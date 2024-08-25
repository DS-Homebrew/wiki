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
   - CMD to pin 2
   - GND to pins 3 and 6
   - CLK to pin 5
   - DAT0 to pin 7

#### Soldered microSD adapter example
[![microSD example](/assets/images/dsi-hardmod/sd.jpg)](/assets/images/dsi-hardmod/sd.jpg)

- Insert the microSD card adapter into your computer
   - **WARNING** - Windows will ask you to format it: **DO NOT** format it - this might cause irrepairable damage

#### Removing the no$gba footer
You will first need to remove the NOCASH footer from the backup you are flashing to the DSi. This can be done using the [hiyaCFW helper](https://github.com/mondul/HiyaCFW-Helper/releases/latest).

1. Download the version for the operating system you are using
1. Run the script, selecting the NAND backup you wish to flash to your DSi
1. Switch to NAND mode with the button to the left of the file path
1. Click `Start` to create the NAND backup without the no$gba footer

- Once the script completes, there should be a file with a long name ending in `-no-footer.bin` in the folder where your terminal is open
   - Use this file as the NAND image you flash onto the DSi

{% capture tab-windows %}
1. Open Win32DiskImager
1. Click the folder icon and browse to your desktop. In the text box, write `NAND_0.bin`. When selecting type, choose `All types *.*`
1. Choose the device that is the DSi and click read
1. Once it is done, click the folder icon, change the name to `NAND_1.bin` and read again
1. Open HxD and drag both files into the editor. Go to the top bar, click "Analysis", click "File compare" from the drop down menu, then click "Compare".
1. Choose to compare both files then click OK when done
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
      1. Diesmal sollte ein neues Gerät erscheinen
         - Es kann `/dev/sdb` heißen, notieren Sie sich den Namen auf *Ihrem* Computer

   - macOS:
      1. Ziehen Sie den SD-Kartenadapter ab
      1. `df` in einem Terminal ausführen
      1. Stecken Sie den SD-Kartenadapter ein
      1. `df` erneut ausführen
      1. Ein neues Gerät sollte in der Liste erscheinen
         - Sie kann `/dev/disk1s1` heißen, notieren Sie sich den Namen auf *Ihrem* Computer

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
      - Ersetzen Sie `{existing-nand-backup}` durch den Speicherort und den Namen Ihres alten NAND-Backups
      - Ersetzen Sie `{device-name}` durch den Einhängepunkt der SD-Karte

An dieser Stelle können Sie den SD-Kartenadapter abziehen und versuchen, den DSi einzuschalten. Wenn alles gut gegangen ist, sollte der DSi in dem Zustand gebootet haben, in dem er sich zum Zeitpunkt der Erstellung des Backups befand!
{% endcapture tab-other %}
{% assign tab-other = tab-other | split: "////////" %}

### Flashen der NAND-Sicherung
{% assign tabs = tab-windows | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}
