---
lang: he-IL
layout: wiki
section: ds-index
category: guides
title: Hardmod
description: איך לעשות hardmod לNintendo DSi
tabs:
  - 
    windows: Windows
    other: macOS/Linux
---

המושג Hardmod מתייחס למצב שבו מלחימים ללוח האם של הDSi מתאם לכרטיס SD, על מנת שהוא יוכל להקרא באמצעות מחשב. זה יעיל לשחזור גיבויי NAND, צפייה בNAND על המחשב ועוד...

### Nintendo DS
[![לוח אם של DS מקורי עם נקודות מגע עם תוויות](/assets/images/ds-hardmod/mobo_pinout.png)](/assets/images/ds-hardmod/mobo_pinout.png)

### Nintendo DSi

בשביל לעשות hardmod לNintendo DSi/DSi XL (LL) תצטרכו:
   - [מלחם עם ראש עיפרון](https://www.amazon.com/dp/B01N4571Q6)
   - [חוטים דקים מאוד](https://www.amazon.com/dp/B01MXGNTA4), 28AWG או קטן יותר, עדיפות ל30AWG+
   - מתאם SD לmicroSD
   - קורא כרטיסי SD המסוגל לקרוא ציפים מסוג eMMC הרצים במצב data-line בודד. [זה אחד שידוע כמתאים](https://www.amazon.com/dp/B006T9B6R2)
   - [Win32DiskImager](https://sourceforge.net/projects/win32diskimager/) ו[HxD](https://mh-nexus.de/en/downloads.php?product=HxD20) אם על Windows
   - גיבוי NAND תקין של הDSi שאתם עושים לו hardmod
   - נוחות בהלחמה לפדים קטנים, עד ל0.5 מ"מ בקוטר

#### פינאווט צד A של DSi
[![פינאווט צד A של DSi](/assets/images/dsi-hardmod/side_a.jpg)](/assets/images/dsi-hardmod/side_a.jpg)
#### פינאווט צד B של DSi
[![פינאווט צד B של DSi](/assets/images/dsi-hardmod/side_b.png)](/assets/images/dsi-hardmod/side_b.png)
#### פינאווט צד B של DSi XL
[![פינאווט צד B של DSi XL](/assets/images/dsi-hardmod/dsi_xl_side_b.png)](/assets/images/dsi-hardmod/dsi_xl_side_b.png)

- תצטרכו להלחים את הנקודות על לוח האם אל מתאם הmicroSD
   - CMD לפין 2
   - GND לפין 3 ו6
   - CLK לפין 5
   - DAT0 לפין 7

#### דוגמה למתאם microSD מולחם
[![microSD example](/assets/images/dsi-hardmod/sd.jpg)](/assets/images/dsi-hardmod/sd.jpg)

- הכניסו את מתאם כרטיס הmicroSD אל המחשב
   - **אזהרה** - Windows יבקש ממכם לפרמט אותו: **אל** תפרמטו אותו - זה עשוי ליצור נזק שלא ניתן לתיקון

#### Removing the no$gba footer
You will first need to remove the NOCASH footer from the backup you are flashing to the DSi. This can be done by running the hiyaCFW helper application found [here](https://github.com/mondul/HiyaCFW-Helper/releases/latest).

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
   - If it says "The chosen files are identical.", you are good to go to the next section
   - If it doesn't say that, and both NANDs aren't around 240 MB, dump NAND_1/NAND_0 again
1. Open Win32DiskImager, click the folder icon and choose your existing NAND backup you created before
1. Flash it with the `Write` button
1. Unplug the SD card adapter and attempt to turn on the DSi
{% endcapture tab-windows %}
{% assign tab-windows = tab-windows | split: "////////" %}


{% capture tab-other %}
1. Work out where the SD card is mounted
   - Linux:
      1. Unplug the SD card adapter
      1. Run `lbslk` in a terminal
      1. Plug in the SD card adapter
      1. Run `lbslk` again
      1. This time a new device should appear
         - It may be called `/dev/sdb`, make sure you note down what it is called on *your* computer

   - macOS:
      1. Unplug the SD card adapter
      1. Run `df` in a terminal
      1. Plug in the SD card adapter
      1. Run `df` again
      1. A new device should appear in the list
         - It may be called `/dev/disk1s1`, make sure you note down what it is called on *your* computer

1. Dump the NAND
   - Run the following command in a terminal:
      - `cat {device-name} > nand0.bin`
      - Replace `{device-name}` with the SD card mount location
      - E.g `cat /dev/sdb > nand0.bin`
      - Then run `cat {device-name} > nand1.bin`


1. Compare NAND dumps
   1. Run the following command:
      - Linux: `md5sum nand0.bin nand1.bin`
      - macOS: `md5 -r nand0.bin nand1.bin`
   1. Check that the hash generated matches each other
   1. If not, redump the NAND, adjusting the wiring if necessary
   1. Keep on redumping the NAND until the hashes are identical

1. Flash NAND
   1. Locate the NAND backup you created before on the console
   1. Run the following command:
      - `cat {existing-nand-backup} > {device-name}`
      - Replace `{existing-nand-backup}` with the location and name of your old NAND backup
      - Replace `{device-name}` with the mount point of the SD card

At this point you may unplug the SD card adapter and attempt to turn on the DSi. If all went well, the DSi should have booted to the state it was when the backup was created!
{% endcapture tab-other %}
{% assign tab-other = tab-other | split: "////////" %}

### Flashing the NAND backup
{% assign tabs = tab-windows | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}
