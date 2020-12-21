---
lang: en-US
layout: wiki
section: twilightmenu
title: Installing (Flashcard)
category: Installing
---

### Installing
1. Download the latest version of `TWiLightMenu-Flashcard.7z` from [the releases page](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Extract `TWiLightMenu-Flashcard.7z`
1. Copy the `_nds` folder to your flashcard's microSD card root
1. Copy the `BOOT.NDS` file to your flashcard's microSD card root
1. Copy the `roms` folder to your flashcard's microSD card root
1. If you already have save data, move your `.sav` files, which are in your DS ROM location, to a new folder called `saves`, which also goes in the DS ROM location
1. ...
   - **DS Phat/lite users:** If booting `BOOT.NDS` causes a white screen lock-up, insert a DS Memory Expansion Pak, and try again
   - **DSi/3DS users:** Run TWLMenu++ on the console's SD card, and turn on `SCFG access in Slot-1`
      - This will let you use TWL clock speed and/or VRAM boost on your flashcard games, as well as accessing the console's SD card

### To run games using your flashcard firmware
1. Extract what's in `Flashcart Loader/(your flashcard)` to the root of the flashcard's microSD card
   - If you done so, continue to step 3. If not, follow the steps below the flashcard list below

1. For these flashcards:
   - R4i-SDHC
   - r4isdhc.com cards
   - r4isdhc.hk cards
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS

   Install YSMenu from [here](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/)
      - Make sure you have `YSMenu.nds` and `TTMenu` folder (renamed from `YSMenu`, if existed) on the flashcard microSD root
1. Set `Use nds-bootstrap (B4DS)` to `No`, so the flashcard firmware will be used instead of nds-bootstrap

### Autobooting TWiLight Menu++
1. Extract the content(s) of `Autoboot/(your flashcard)` to the root of the flashcard's microSD card
   - Skip this, if you don't see your flashcard
1. ...
   - **DS Phat/DS Lite users:** Go to settings in the DS menu, and turn on auto-start, so your flashcard will start on boot
   - **DSi/3DS users:** Run TWLMenu++ on the console's SD card, and turn on `Auto-start Slot-1`
