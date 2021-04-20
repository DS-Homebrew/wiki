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
1. Ladda ner den senaste versionen av `TWiLightMenu-Flashcard.7z` från [releases sidan](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Extrahera `TWiLightMenu-Flashcard.7z`
1. Kopiera mappen `_nds` till ditt minneskorts microSD-korts rot
1. Kopiera filen `BOOT.NDS` till ditt minneskorts microSD-korts rot
1. Kopiera mappen `roms` till ditt minneskorts microSD-korts rot
1. Om du redan har sparat data, flytta dina `.sav` filer, som finns i platsen av dina DS ROM, till en ny mapp som heter `saves`, som också går i platsen av dina DS ROM
1. ...
   - **DS Phat / Lite användare:** Om uppstartningen av `BOOT.NDS` gör att konsollen fryser stilla med en vit skärm, sätt in en DS Memory Expansion Pak och försök igen
   - **DSi / 3DS användare:** Kör TWLMenu++ på konsolens SD-kort och aktivera `SCFG-åtkomst i Slot-1`
      - Detta kommer att låta dig använda TWL klockfrekvens och/eller VRAM boost på spelen i din minneskort, samt tillgång till konsolens SD-kort

### För att köra spel med ditt minneskorts firmware
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

   Installera YSMenu från [här](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/)
      - Kontrollera att du har `YSMenu.nds` (bytt namn från `TTMenu.dat` om det inte finns en) och mappen `TTMenu` på minneskortets microSDs rot
1. Set `Use nds-bootstrap` to `No`, so the flashcard firmware will be used instead of nds-bootstrap

### Automatiskt uppstart av TWiLight Menu++
1. Extrahera det som finns i `Autoboot/(ditt minneskort)` till roten av minneskortets microSD-kort
   - Hoppa över detta om du inte ser ditt minneskort
1. ...
   - **DS Phat / DS Lite användare:** Gå till inställningar i DS menyn och aktivera Auto-starta, så att ditt minneskort startar vid uppstart
   - **DSi / 3DS användare:** Kör TWLMenu++ på konsolens SD-kort och aktivera `Auto-starta Slot-1`
