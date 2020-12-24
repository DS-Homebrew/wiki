---
lang: en-US
layout: wiki
section: ds-index
title: Hardmod
description: An explanation of all things DS modding
---

Hardmodding is when you physically solder the motherboard of the Nintendo DSi to an SD card adapter in order to be read on a computer. This is useful for restoring NAND backups, viewing NAND on your PC, etc...
### Nintendo DS
![Original DS motherboard with touch-points labeled](https://media.discordapp.net/attachments/547986366357700620/736370094392999947/mobo_pinout.png)

### Nintendo DSi

To hardmod a Nintendo DSi / DSi XL (LL) you will need:
  - [Pencil tipped soldering iron](https://www.amazon.com/Sywon-Soldering-Station-Temperature-Adjustable/dp/B01N4571Q6/)
  - [Very fine wire](https://www.amazon.com/BNTECHGO-Silicone-Flexible-Stranded-Impedance/dp/B01MXGNTA4/ref=sr_1_8?crid=1Y1M31ZLILOYN&dchild=1&keywords=30+awg+wire&qid=1608818117&sprefix=30+AWG+%2Caps%2C250&sr=8-8), 28AWG or smaller, preferably 30AWG+ 
  - SD to microSD adapter
  - An SD card reader able to read eMMC chips running in single data-line mode. [Here's a known working one](https://www.amazon.com/gp/product/B006T9B6R2)
  - [Win32DiskImager](https://sourceforge.net/projects/win32diskimager/) and [HxD](https://mh-nexus.de/en/downloads.php?product=HxD20) if on Windows
  - A valid DSi backup of the DSi you are hardmodding
  - To be comfortable soldering to pads that are as small as 0.5mm in diameter

#### DSi side A pinouts
![DSi side A pinouts](https://safan41.github.io/hardmodguide/images/pinouts/DSi/a.jpg)
#### DSi side B pinouts
![DSi side B pinouts](https://safan41.github.io/hardmodguide/images/pinouts/DSi/b.png)
#### DSi XL side B pinouts
![DSi XL side B pinouts](https://safan41.github.io/hardmodguide/images/pinouts/DSi%20XL/nand.png)

- You will need to solder the points on the motherboard to the microSD card adapter
  - CMD to pin 2
  - GND to pins 3 and 6
  - CLK to pin 5
  - DAT0 to pin 7

#### Soldered microSD adapter example
![microSD example](https://safan41.github.io/hardmodguide/images/sd.jpg)

- Insert the microSD card adapter to your computer
  - **WARNING** - Windows will ask you to format it: **DO NOT** format it - this might cause irrepairable damage

#### Windows instructions (skip for macOS / Linux)

1. Open Win32DiskImager
2. Click the folder icon and browse to your desktop. In the text box, write NAND_0.bin. When selecting type, choose All types *.* 
3. Choose the device that is the DSi and click read. 
4. Once it is done, click the folder icon,change the name to NAND_1.bin and read again
5. Open HxD and drag both files into the editor. Go to the top bar, click "Analysis",click "File compare" from the drop down menu, then click "Compare".
6. Choose to compare both files then click OK when done
  - If it says "The chosen files are identical.", you are good to go to the next section
  - If it doesn't say that, and both NANDs aren't around 240MB, dump NAND_1/NAND_0 again
7. Open Win32DiskImager, click the folder icon and choose your existing NAND backup you created before.
8. Flash it with the `Write` button.
9. Unplug the SD card adapter and attempt to turn on the DSi

#### Linux / macOS instructions (skip if on Windows)


1. Work out where the SD card is mounted
  - Linux:
    1. Unplug the SD card adapter
    2. Run `lbslk` on a terminal
    3. Plug in the SD card adapater
    4. Run `lbslk` again
    5. This time a new device should appear
    6. It may be called `/dev/sdb`, make sure you note down what it is called on *your* terminal

  - macOS:
    1. Unplug the SD card adapter
    2. Run `df` on a terminal
    3. Plug in the SD card adapter
    4. Run `df` again
    5. A new device should appear in the list
    6. It may be called `/dev/disk1s1`, make sure you note down what it is called on *your* terminal/

2. Dump the NAND
  - Run the following command on a terminal:
    - `cat {device-name} > nand0.bin` 
    - Replace {device-name} with the SD card mount location
    - E.g `cat /dev/sdb > nand0.bin`
    - Then run `cat {device-name} > nand1.bin`

3. Compare NAND dumps
  1. Run the following command:
    - Linux : `md5sum nand0.bin nand1.bin`
    - macOS : `md5 -r nand0.bin nand1.bin`
  2. Check that the hash generated matches each other.
  3. If not, redump the NAND, adjusting the wiring if necessary
  4. Keep on redumping the NAND until the hashes are identical

4. Flash NAND
  1. Locate the NAND backup you created before on the console.
  2. Run the following command:
    - `cat {existing-nand-backup} > {device-name}`
    - Replace `{existing-nand-backup}` with the location and name of your old NAND backup
    - Replace `{device-name}` with the mount point of the SD card
  3. At this point you may unplug the SD card adapter and attempt to turn on the DSi.
  4. If all went well, the DSi should have booted to the state it was when the backup was created!

