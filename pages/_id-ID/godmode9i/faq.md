---
lang: en-US
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
