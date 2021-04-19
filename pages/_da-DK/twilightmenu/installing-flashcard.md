---
lang: en-US
layout: wiki
section: twilightmenu
category: installing
title: Installering (Flashkort)
long_title: Installing TWiLight Menu++ (Flashcard)
description: How to install TWiLight Menu++ on a Nintendo DS flashcard
---

### Installation
1. Download den nyeste version af `TWiLightMenu-Flashcard.7z` fra [udgivelsessiden](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Udpak `TWiLightMenu-Flashcard.7z`
1. Kopier `_nds` mappen til rodden af dit flashkorts microSD-kort
1. Kopier `BOOT.NDS` filen til rodden af dit flashkorts microSD-kort
1. Kopier `roms` mappen til rodden af dit flashkorts microSD-kort
1. Hvis du allerede har save-data, så flyt din `.sav` filer, som er det samme sted som din DS ROM, til en ny mappe kaldet `saves`, som skal placeres samme sted som dine DS ROMs
1. ...
   - **DS Phat / Lite brugere:** Hvis du køre `BOOT.NDS` og det medføre en hvid skærm, indsæt en DS Memory Expansion Pak, og prøv igen
   - **DSi / 3DS brugere:** Kør TWLMenu++ på konsollens SD-kort, og slå `SCFG adgang i Slot-1` til
      - Dette vil lade dig bruge TWL clock hastighed og/eller VRAM boost på dine flashkort spil, samt adgang til konsollens SD-kort

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
   - DSTT(i)

   Install YSMenu from [here](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/)
      - Make sure you have `YSMenu.nds` (renamed from `TTMenu.dat` if there isn't one) and the `TTMenu` folder on the flashcard microSD root
1. Set `Use nds-bootstrap` to `No`, so the flashcard firmware will be used instead of nds-bootstrap

### Autobooting TWiLight Menu++
1. Extract the content(s) of `Autoboot/(your flashcard)` to the root of the flashcard's microSD card
   - Skip this, if you don't see your flashcard
1. ...
   - **DS Phat / DS Lite users:** Go to settings in the DS menu, and turn on auto-start, so your flashcard will start on boot
   - **DSi / 3DS users:** Run TWLMenu++ on the console's SD card, and turn on `Auto-start Slot-1`
