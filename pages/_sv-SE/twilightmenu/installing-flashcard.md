---
lang: sv-SE
layout: wiki
section: twilightmenu
category: installing
title: Installation (Minneskort)
long_title: Att installera TWiLight Menu++ (Minneskort)
description: Hur man installerar TWiLight Menu+ + på Nintendo DS minneskort
---

### Installation
1. Download the latest [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
1. Extrahera `TWiLightMenu-Flashcard.7z`
1. Kopiera mappen `_nds` till ditt minneskorts microSD-korts rot
1. Kopiera filen `BOOT.NDS` till ditt minneskorts microSD-korts rot
1. Kopiera mappen `roms` till ditt minneskorts microSD-korts rot
1. Om du redan har sparat data, flytta dina `.sav` filer, som finns i platsen av dina DS ROM, till en ny mapp som heter `saves`, som också går i platsen av dina DS ROM
1. ...
   - **DS Phat/Lite users:** If booting `BOOT.NDS` causes a white screen lock-up, insert a DS Memory Expansion Pak, and try again
   - **DSi/3DS users:** Run TWLMenu++ on the console's SD card, and turn on `SCFG access in Slot-1` and set `Slot-1: Touch Mode` to `DSi Mode`
      - This will let you use TWL clock speed and/or VRAM boost on your flashcard games, as well as both accessing the console's SD card, and running DSi-Enhanced/DSi-Exclusive/DSiWare games in DSi mode from your flashcard

### För att köra spel med ditt minneskorts firmware

Please note that not all flashcards support running games in this fashion. If the below steps do not apply to your flashcard, you can skip this section.
{:.alert .alert-warning}

1. Extrahera det som finns i `Flashcart Loader/(ditt minneskort)` till roten av minneskortets microSD-kort
   - Om du gjort det, fortsätt att steg 3. Om du inte gjort det, följ stegen under listan av minneskort nedan

1. För dessa minneskort:
   - R4i-SDHC
   - r4isdhc.com kort
   - r4isdhc.hk kort
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS
   - DSTT(i)
   - M3 DS Real
   - M3i Zero (non-GMP-Z003 model)
   - DSONE SDHC & DSONEi

   Install [RetroGameFan's YSMenu](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/).
      - Make sure you have `YSMenu.nds` (renamed from `TTMenu.dat` if there isn't one) and the `TTMenu` folder on the flashcard microSD root
1. Ställ in `Använd nds-bootstrap` till `Nej`, så att minneskortets firmware kommer att användas istället för nds-bootstrap

### Automatiskt uppstart av TWiLight Menu++
1. Extrahera det som finns i `Autoboot/(ditt minneskort)` till roten av minneskortets microSD-kort
   - Hoppa över detta om du inte ser ditt minneskort
1. ...
   - **DS Phat/Lite users:** Go to settings in the DS menu, and turn on auto-start, so your flashcard will start on boot
   - **DSi/3DS users:** Run TWLMenu++ on the console's SD card, and turn on `Auto-start Slot-1`
