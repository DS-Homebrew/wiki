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
  - [Pencil tipped soldering iron](https://www.amazon.com/dp/B01N4571Q6)
  - [Very fine wire](https://www.amazon.com/dp/B01MXGNTA4), 28AWG or smaller, preferably 30AWG+ 
  - SD to microSD adapter
  - An SD card reader able to read eMMC chips running in single data-line mode. [Here's a known working one](https://www.amazon.com/dp/B006T9B6R2)
  - [Win32DiskImager](https://sourceforge.net/projects/win32diskimager/) and [HxD](https://mh-nexus.de/en/downloads.php?product=HxD20) if on Windows
  - A valid DSi backup of the DSi you are hardmodding
  - To be comfortable soldering to pads that are as small as 0.5mm in diameter

#### DSi side A pinouts
![DSi side A pinouts](/assets/images/dsi-hardmod/side_a.jpg)
#### DSi side B pinouts
![DSi side B pinouts](/assets/images/dsi-hardmod/side_b.jpg)
#### DSi XL side B pinouts
![DSi XL side B pinouts](/assets/images/dsi-hardmod/dsi_xl_side_b.png)

- You will need to solder the points on the motherboard to the microSD card adapter
  - CMD to pin 2
  - GND to pins 3 and 6
  - CLK to pin 5
  - DAT0 to pin 7

#### Soldered microSD adapter example
![microSD example](/assets/images/dsi-harmod/sd.jpg)

- Insert the microSD card adapter to your computer
  - **WARNING** - Windows will ask you to format it: **DO NOT** format it - this might cause irrepairable damage

#### Windows instructions (skip for macOS / Linux)

1. Open Win32DiskImager
1. Click the folder icon and browse to your desktop. In the text box, write NAND_0.bin. When selecting type, choose All types *.* 
1. Choose the device that is the DSi and click read. 
1. Once it is done, click the folder icon,change the name to NAND_1.bin and read again
1. Open HxD and drag both files into the editor. Go to the top bar, click "Analysis",click "File compare" from the drop down menu, then click "Compare".
1. Choose to compare both files then click OK when done
  - If it says "The chosen files are identical.", you are good to go to the next section
  - If it doesn't say that, and both NANDs aren't around 240MB, dump NAND_1/NAND_0 again
1. Open Win32DiskImager, click the folder icon and choose your existing NAND backup you created before.
1. Flash it with the `Write` button.
1. Unplug the SD card adapter and attempt to turn on the DSi

#### Linux / macOS instructions (skip if on Windows)


1. Work out where the SD card is mounted
  - Linux:
    1. Unplug the SD card adapter
    1. Run `lbslk` on a terminal
    1. Plug in the SD card adapater
    1. Run `lbslk` again
    1. This time a new device should appear
      - It may be called `/dev/sdb`, make sure you note down what it is called on *your* terminal.

  - macOS:
    1. Unplug the SD card adapter
    1. Run `df` on a terminal
    1. Plug in the SD card adapter
    1. Run `df` again
    1. A new device should appear in the list
      - It may be called `/dev/disk1s1`, make sure you note down what it is called on *your* terminal.

1. Dump the NAND
  - Run the following command on a terminal:
    - `cat {device-name} > nand0.bin` 
    - Replace {device-name} with the SD card mount location
    - E.g `cat /dev/sdb > nand0.bin`
    - Then run `cat {device-name} > nand1.bin`

1. Compare NAND dumps
  1. Run the following command:
    - Linux : `md5sum nand0.bin nand1.bin`
    - macOS : `md5 -r nand0.bin nand1.bin`
  1. Check that the hash generated matches each other.
  1. If not, redump the NAND, adjusting the wiring if necessary
  1. Keep on redumping the NAND until the hashes are identical

1. Flash NAND
  1. Locate the NAND backup you created before on the console.
  1. Run the following command:
    - `cat {existing-nand-backup} > {device-name}`
    - Replace `{existing-nand-backup}` with the location and name of your old NAND backup
    - Replace `{device-name}` with the mount point of the SD card
    
At this point you may unplug the SD card adapter and attempt to turn on the DSi.
If all went well, the DSi should have booted to the state it was when the backup was created!
