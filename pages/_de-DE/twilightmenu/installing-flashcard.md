---
lang: de-DE
layout: wiki
section: twilightmenu
category: installing
title: Installing (Flashcard)
description: How to install TWiLight Menu++ on a Nintendo DS flashcard
---

### Installiere
1. Laden Sie die neueste Version von `TWiLightMenu-Flashcard.7z` von [der Veröffentlichungsseite](https://github.com/DS-Homebrew/TWiLightMenu/releases) herunter
1. `TWiLightMenu-3DS.7z `entpacken
1. Kopiere den `_nds` Ordner in dein Sd-Kartenverzeichnis
1. Kopiere den `BOOT.NDS` Ordner in dein Sd-Kartenverzeichnis
1. Kopiere den `roms` Ordner in dein Sd-Kartenverzeichnis
1. Wenn Sie bereits gespeicherte Daten haben, verschieben Sie Ihr `.sav` Dateien, die sich in Ihrem DS-ROM-Standort befinden in einem neuen Ordner namens `speichert`, was auch in den DS-ROM-Speicherort geht
1. ...
   - **DS Phat / Lite users:** If booting `BOOT.NDS` causes a white screen lock-up, insert a DS Memory Expansion Pak, and try again
   - **DSi / 3DS users:** Run TWLMenu++ on the console's SD card, and turn on `SCFG access in Slot-1`
      - Hiermit kannst du TWL Taktgeschwindigkeit und/oder VRAM Boost für deine Flashcard-Spiele verwenden sowie auf die SD-Karte der Konsole zugreifen

### Um spiele mit deiner Flashcard Firmware ausführen
1. Extrahieren Sie `Flashcart Loader/(Ihre Flashcard)` im Stammverzeichnis der microSD-Karte
   - Wenn Sie dies getan haben, fahren Sie mit Schritt 3 fort. Wenn nicht, folgen Sie den Schritten unter der Karteikartenliste

1. Für diese Speicherkarten:
   - R4i-SDHC
   - r4isdhc.com Karten
   - r4isdhc.hk Karten
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
1. Setze `nds-bootstrap (B4DS)` auf `Nein`, so dass die Flashcard Firmware anstelle von nds-bootstrap verwendet wird

### Autostarte TWiLight Menü++
1. Extrahieren Sie `Flashcart Loader/(Ihre Flashcard)` im Stammverzeichnis der microSD-Karte
   - Überspringe dies, wenn du deine Speicherkarte nicht siehst
1. ...
   - **DS Phat / DS Lite users:** Go to settings in the DS menu, and turn on auto-start, so your flashcard will start on boot
   - **DSi / 3DS users:** Run TWLMenu++ on the console's SD card, and turn on `Auto-start Slot-1`
