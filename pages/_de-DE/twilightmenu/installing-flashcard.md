---
lang: de-DE
layout: wiki
section: twilightmenu
category: installing
title: Installation (Flashcard)
long_title: Installation von TWiLight Menu++ (Flashcard)
description: Wie man TWiLight Menu++ auf einer Nintendo DS Flashcard installiert
tabs:
  - 
    loader: Flashcart installierer
    ysmenu: YSMenu
---

### Installation
1. Lade die neueste Version von [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z) herunter
    - Wenn die Datei nicht heruntergeladen werden kann, lesen Sie die [Release-Seite](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Öffnen oder extrahieren Sie <0>TWiLightMenu-Flashcard.7z</0>
1. Ziehen Sie den Ordner `_nds` in das Stammverzeichnis der microSD-Karte und legen Sie ihn dort ab
1. Ziehen Sie die Datei `BOOT.NDS` in das Stammverzeichnis Ihrer microSD-Karte und legen Sie sie dort ab
1. Ziehen Sie den `roms`-Ordner in das Stammverzeichnis Ihrer microSD-Karte und legen Sie ihn dort ab
1. Wenn du bereits Speicherdaten hast, bewege alle `.sav` Dateien, welche im DS ROM Speicherort sind, zu einem neuen Ordner namens `saves`, welcher auch zum DS ROM Speicherort geht
1. **DS Phat/Lite-Benutzer:** Wenn das Booten von `BOOT.NDS` zu einem weißen Bildschirm führt, führen Sie die folgenden Schritte für den automatischen Bootvorgang aus und versuchen Sie es erneut

### TWiLight Menu++ Autobooten
1. Öffnen oder extrahieren Sie <0>TWiLightMenu-Flashcard.7z</0>
1. Open the `Autoboot` folder
1. Open the `README.txt` file to help find which autoboot files are appropriate for your flashcard
1. Open the `(your flashcard)` folder
1. Drag and drop the contents to the root of the flashcard's microSD card
    - Ensure the `(your flashcard)` folder is already open, do not drag and drop the folder itself onto the root
    - Skip this, if you don't see your flashcard listed
1. **DS Phat/Lite users:** Go to settings in the DS menu, and turn on auto-start, so your flashcard will start on boot

### So führen Sie Spiele mit dem Flashcard-Kernel aus (optional)

**Bitte beachten sie:**
- Bitte beachte, dass es nur funktioniert, wenn die Flashcard so eingestellt ist, dass TWiLight Menu++ automatisch gebootet wird. Siehe im obigen Abschnitt wie man dies tut.
- Not all flashcards support running games in this fashion. Wenn die folgenden Schritte nicht auf deine Flashkarte zutreffen, kannst du diesen Abschnitt überspringen.
- You'll lose the ability to use cheats when running games in this fashion. Wenn du die Cheat-Funktionalität beibehalten willst, überspringe bitte diesen Abschnitt.
{:.alert .alert-warning}

{% capture tab-loader %}

If your flashcart does not have a compatible loader for this section, choose the "YSMenu" tab.
{:.alert .alert-info}

1. Öffnen oder extrahieren Sie <0>TWiLightMenu-Flashcard.7z</0>
1. Open the `Flashcart Loader` folder
1. Open the `README.txt` file to help find which flashcart loader is appropriate for your flashcard
1. Open the `(your flashcard)` folder
1. Drag and drop the contents to the root of the flashcard's microSD card
    - Ensure the `(your flashcard)` folder is already open, do not drag and drop the folder itself onto the root
1. Open TWLMenu++ Settings, switch to `Games and Apps settings` page, and set `Game Loader` to `Kernel`, so the flashcard kernel will be used instead of nds-bootstrap
    - Alternatively you may do this as a per-game setting by pressing `Y` on a selected game and changing the `Game Loader` option there

{% endcapture tab-loader %}
{% assign tab-loader = tab-loader | split: "////////" %}

{% capture tab-ysmenu %}

1. Please confirm that you have one of the below flashcarts:
    - R4i-SDHC (r4i-sdhc.com)
    - r4isdhc.com 2014+ cards (**not** .hk or .com.cn)
    - R4i SDHC Upgrade Revolution
    - R4DSiXL3D
    - R4i Advance
    - R4-IIIi
    - R4 SDHC Revolution
    - R4(i) Pocket
    - R4i Gold (v1.4.1) (3DS)
    - R4 Gold 3DS RTS (r4i-gold.com)
    - R4xDS
    - DSTT(i)
    - DSONE SDHC & DSONEi (nicht-SDHC Modelle sind ***nicht*** unterstützt)
    - M3 DS Real
    - M3i Zero (Nicht-GMP-Z003 Modell)
    - iTouchDS and iTouch2 (Verwende die M3Real_M3iZero YSMenu Dateien)
    - R4(i)RTS (r4rts.com) (verwende die M3Real_M3iZero YSMenu Dateien)
    - R4 SDHC RTS (schwarze Karte) (r4isdhc.com) (benutze die M3Real_M3iZero YSMenu Dateien)
1. Download [RetroGameFan's YSMenu](https://gbatemp.net/download/35737/).
1. Extract it to a folder on your computer. Navigate to the folder required for your flashcart.
1. Inside the folder, rename `TTMenu.dat` to `YSMenu.nds` if a `YSMenu.nds` file does not already exist
1. Copy the `TTMenu` folder and `YSMenu.nds` file to the root of your MicroSD card. **Do not** copy `TTMenu.dat` directly; this will break autobooting and YSMenu's soft reset
1. Open TWLMenu++ Settings, switch to `Games and Apps settings` page, and set `Game Loader` to `Kernel`, so the flashcard kernel will be used instead of nds-bootstrap
    - Alternatively you may do this as a per-game setting by pressing `Y` on a selected game and changing the `Game Loader` option there

{% endcapture tab-ysmenu %}
{% assign tab-ysmenu = tab-ysmenu | split: "////////" %}

### Running games with the flashcard kernel
{% assign tabs = tab-loader | concat: tab-ysmenu %}
{% include tabs.html index=0 tabs=tabs %}
