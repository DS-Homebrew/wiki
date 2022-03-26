---
lang: id-ID
layout: wiki
section: ds-index
category: guides
title: Modifikasi Keras (Hardmod)
description: Cara meng-hardmod Nintendo DSi
tabs:
  - 
    windows: Windows
    other: macOS/Linux
---

Memodifikasi keras (Hardmod) adalah ketika kamu mensolder fisik papan induk konsol Nintendo DSi ke adaptor kartu SD agar terbaca di komputer. Ini berguna untuk memulihkan cadangan NAND, melihat NAND di komputer, dll...

### Nintendo DS
[![Papan induk DS Original dengan titik sentuh berlabel](/assets/images/ds-hardmod/mobo_pinout.png)](/assets/images/ds-hardmod/mobo_pinout.png)

### Nintendo DSi

Untuk memodifikasi keras Nintendo DSi/DSi XL (LL) dibutuhkan:
   - [Pencil tipped soldering iron](https://www.amazon.com/dp/B01N4571Q6)
   - [Very fine wire](https://www.amazon.com/dp/B01MXGNTA4), 28AWG or smaller, preferably 30AWG+
   - Adaptor kartu SD ke microSD
   - Pembaca (reader) kartu SD yang mampu membaca cip eMMC berjalan di mode single data-line. [Ini yang dikenal bisa](https://www.amazon.com/dp/B006T9B6R2)
   - [Win32DiskImager](https://sourceforge.net/projects/win32diskimager/) dan [HxD](https://mh-nexus.de/en/downloads.php?product=HxD20) jika di Windows
   - A valid NAND backup of the DSi you are hardmodding
   - To be comfortable soldering to pads that are as small as 0.5mm in diameter

#### Pin-out DSi sisi A
[![DSi side A pinouts](/assets/images/dsi-hardmod/side_a.jpg)](/assets/images/dsi-hardmod/side_a.jpg)
#### Pin-out DSi sisi B
[![DSi side B pinouts](/assets/images/dsi-hardmod/side_b.png)](/assets/images/dsi-hardmod/side_b.png)
#### Pin-out DSi XL sisi B
[![DSi XL side B pinouts](/assets/images/dsi-hardmod/dsi_xl_side_b.png)](/assets/images/dsi-hardmod/dsi_xl_side_b.png)

- Kamu perlu mensolder titik (point) pada papan induk ke adaptor kartu microSD
   - CMD ke pin 2
   - GND ke pin 3 dan 6
   - CLK ke pin 5
   - DAT0 ke pin 7

#### Contoh adaptor microSD tersolder
[![microSD example](/assets/images/dsi-hardmod/sd.jpg)](/assets/images/dsi-hardmod/sd.jpg)

- Sisipkan adaptor kartu microSD ke komputermu
   - **PERINGATAN** - Jika Windows meminta memformat: **JANGAN diformat** - bisa terjadi kerusakan tak bisa diperbaiki

#### Membuang footer no$gba
You will first need to remove the NOCASH footer from the backup you are flashing to the DSi. Caranya bisa dengan [hiyaCFW helper](https://github.com/mondul/HiyaCFW-Helper/releases/latest).

1. Unduh versi aplikasi untuk sistem operasi yang kamu gunakan
1. Run the script, selecting the NAND backup you wish to flash to your DSi
1. Switch to NAND mode with the button to the left of the file path
1. Click `Start` to create the NAND backup without the no$gba footer

- Once the script completes, there should be a file with a long name ending in `-no-footer.bin` in the folder where your terminal is open
   - Use this file as the NAND image you flash onto the DSi

{% capture tab-windows %}
1. Buka Win32DiskImager
1. Click the folder icon and browse to your desktop. In the text box, write `NAND_0.bin`. When selecting type, choose `All types *.*`
1. Choose the device that is the DSi and click read
1. Once it is done, click the folder icon, change the name to `NAND_1.bin` and read again
1. Open HxD and drag both files into the editor. Go to the top bar, click "Analysis", click "File compare" from the drop down menu, then click "Compare".
1. Choose to compare both files then click OK when done
   - If it says "The chosen files are identical.", you are good to go to the next section
   - If it doesn't say that, and both NANDs aren't around 240 MB, dump NAND_1/NAND_0 again
1. Open Win32DiskImager, click the folder icon and choose your existing NAND backup you created before
1. Flash it with the `Write` button
1. Cabut adaptor kartu SD dan coba hidupkan konsol DSi
{% endcapture tab-windows %}
{% assign tab-windows = tab-windows | split: "////////" %}


{% capture tab-other %}
1. Work out where the SD card is mounted
   - Linux:
      1. Cabut adaptor kartu SD
      1. Run `lsblk` in a terminal
      1. Colok adaptor kartu SD
      1. Run `lsblk` again
      1. This time a new device should appear
         - It may be called `/dev/sdb`, make sure you note down what it is called on *your* computer

   - macOS:
      1. Cabut adaptor kartu SD
      1. Run `df` in a terminal
      1. Colok adaptor kartu SD
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
   1. Jalankan perintah berikut:
      - `cat {existing-nand-backup} > {device-name}`
      - Replace `{existing-nand-backup}` with the location and name of your old NAND backup
      - Replace `{device-name}` with the mount point of the SD card

Sesudah itu, kamu boleh mencabut adaptor kartu SD dan menyalakan konsol DSi. If all went well, the DSi should have booted to the state it was when the backup was created!
{% endcapture tab-other %}
{% assign tab-other = tab-other | split: "////////" %}

### Flashing the NAND backup
{% assign tabs = tab-windows | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}
