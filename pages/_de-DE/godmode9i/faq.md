---
lang: de-DE
layout: faq
section: godmode9i
title: FAQ & Troubleshooting
long_title: GodMode9i FAQ & Troubleshooting
description: FAQ & Troubleshooting for GodMode9i
---

#### How do I get past the "mounting drive(s)" screen while starting it up?
This happens when you launch GodMode9i from [hiyaCFW](../hiyacfw). You can hold <kbd class="face">X</kbd> while launching GodMode9i to skip NAND mounting. Alternatively, you can launch GodMode9i directly from Unlaunch to be able to mount the NAND.

#### Why can't I add, remove, or edit files on the NAND?
Editing files on the DSi NAND is not safe and can easily lead to a brick, so GodMode9i intentionally lacks this capability.

#### Why can't I view NDS file info for some DSiWare?
Some DSiWare, specifically those located in the `0003000f` folder, contain system data and do not have a valid banner.

#### Should I use the NDS version or the DSi version? What's the difference?
These are functionally the same, but they have specific purposes.
- If you are using GodMode9i with a flashcard, use the NDS version
- If you are installing GodMode9i to your hiyaCFW SDNAND, use the DSi version
- If you are starting GodMode9i via TWiLight Menu++, both versions will work identically
- If you are installing GodMode9i to your 3DS HOME Menu, use the CIA version

#### How do I change the language?
You can change GodMode9i's language by pressing <kbd>START</kbd>, selecting the last option in that menu, and choosing the language you want to use.

Note that this will only work if GodMode9i is being run from TWiLight Menu++ or there is a copy of `GodMode9i.nds`/`GodMode9i.dsi` in the root of your SD card.

You can also manually enter a path to any translation file on your SD card in the config file, `sd:/gm9i/config.ini`, with the `LANGUAGE_INI_PATH` entry.

#### How do I change the font?
You can change GodMode9i's font by selecting a `.frf` font file and choosing `Load font`. To set a different font as the default either place it at `sd:/gm9i/font.frf` or edit the config file (`sd:/gm9i/config.ini`) to set the `FONT_PATH` to where your font file is.

You can find a few pre-converted fonts in the [resources folder](https://github.com/DS-Homebrew/GodMode9i/tree/master/resources/fonts) of the GitHub repository and you can convert your own from a PBM image and TXT file containing the Unicode mappings using GodMode9's [fontriff.py](https://github.com/d0k3/GodMode9/blob/master/utils/fontriff.py) script.

#### How do I dump DS Saves using GBA save data?
GodMode9i is able to use the save data of GBA cartridges to dump the saves of most DS Game Cards. ROM files and save files over 1 MiB cannot be dumped this way as the files are impractically large. This can also be done using Haxxstation instead of a DS flashcard if you have another way to dump the GBA save files, they can then be recombined and decompressed on a computer.

1. Load GodMode9i on your flashcard
1. Backup your GBA saves!!
   - Any save data that hasn't been backed up will be lost
   - Check the files and find the larger ones, using 512 byte carts won't help much while 64 or 128 KiB saves will fit most DS saves in 1 or 2 carts
1. On the drive menu, press <kbd class="r">R</kbd> + <kbd class="face">B</kbd> to unmount the flashcard
1. Eject the flashcard, insert a DS Game Card and GBA cartridge
1. Select `NDS GAMECARD` then `Save`
1. When asked, press <kbd class="face">A</kbd> to write the data to the GBA cart
   - Swap to different GBA cartridges and repeat until the whole save is copied
1. Reboot your DS with your Slot-1 flashcard back in and reopen GodMode9i
1. Insert the first GBA cartridge you used and select `GBA GAMECART`
1. Choose `DS Save`
1. Swap through all the carts you dumped onto
1. Your DS save will now be in `fat:/gm9i/out`, you can now restore your backed up GBA save files to their original cartridges

If you want to write the save file back onto the Game Card, simply select the `.sav` file and choose `Restore save (Slot-1)`, then swap out your flashcard for the DS Game Card when prompted.
