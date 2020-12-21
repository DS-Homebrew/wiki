---
lang: hu-HU
layout: wiki
section: twilightmenu
title: GYIK & hibaelhárítás
category: Egyéb
---

For more FAQs, please visit the [GBAtemp thread](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).

#### Q: Why is my 3DS/2DS stuck on black screens when launching TWiLight Menu++, or why is my 3DS/2DS powering off when launching TWiLight Menu++?
A: TWL_FIRM might've somehow got corrupted. Follow this guide to fix the issue: https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide

#### Q: I get a white screen when booting TWiLight Menu++. How do I fix this?
A:
- First, try putting the console in sleep mode (e.g. closing the console's lid, or pressing the sleep button on the O2DS), then wake up the console from it
- If that doesn't work, format your SD card to FAT32 with 32kb cluster/allocation size
- If that also doesn't work, try a different SD card

#### Q: Why do I get a white screen when trying to load a game from SD Card?
A:
- First, check [the nds-bootstrap compatibility list](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) and make sure your game is compatible
- If the game that's attempted to be launched is a DSi Enhanced game, then make sure that TWiLight Menu++ is set to use `DS Mode`
- If it worked before, delete the `fatTable` and `patchOffsetCache` folders in `sd:/_nds/nds-bootstrap/`

#### Q: How do I use cheats?
A: You need to have a cheat DB in the form of a `usrcheat.dat` file in the `sd:/_nds/TWiLightMenu/extras/` folder. The most updated cheat database is [DeadSkullzJr's](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/). Alternatively, you can use [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) to create your own cheat DB.

#### Q: How do I show a custom picture on the top screen of the DSi theme?
A: A random `.png` image in `sd:/_nds/TWiLightMenu/dsimenu/photos/` will be shown each time the menu is loaded.

- The file(s) must be no bigger than 208x156
- If you have errors, it's most likely an error with the image size. Please use tinypng to reduce the size

#### Q: Why isn't touch input working on sudokuhax?
A: Depending on the save file of sudokuhax, the touch screen inputs may not work.

#### Q: Can The Biggest Loser boot TWiLight Menu++?
A: No. As The Biggest Loser is a Slot-1 game, and not a DSiWare game, SD access is disabled when running Slot-1 cards.
