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
    loader: Flashcart Loader
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
1. **DS Phat/Lite users:** If booting `BOOT.NDS` causes a white screen lock-up, then follow the below steps for autobooting, and try again

### TWiLight Menu++ Autobooten
1. Öffnen oder extrahieren Sie <0>TWiLightMenu-Flashcard.7z</0>
1. Open the `Autoboot` -> `(your flashcard)` folders
1. Drag and drop the contents of the folder to the root of the flashcard's microSD card
    - Überspringe dies, wenn du deine Flashkarte nicht siehst
1. **DS Phat/DS Lite-Benutzer:** Gehe zu den Einstellungen im DS-Menü und aktiviere den Auto-Start, sodass deine Flashkarte beim Booten gestartet wird

### To run games using your flashcard firmware (optional)

**Please note:**
- This only works if your flashcard is set to autoboot TWiLight Menu++. Siehe im obigen Abschnitt wie man dies tut.
- Not all flashcards support running games in this fashion. Wenn die folgenden Schritte nicht auf deine Flashkarte zutreffen, kannst du diesen Abschnitt überspringen.
- You'll lose the ability to use cheats when running games in this fashion. Wenn du die Cheat-Funktionalität beibehalten willst, überspringe bitte diesen Abschnitt.
{:.alert .alert-warning}

{% capture tab-loader %}

If your flashcart does not have a compatible loader for this section, choose the "YSMenu" tab.
{:.alert .alert-info}

1. Öffnen oder extrahieren Sie <0>TWiLightMenu-Flashcard.7z</0>
1. Open the `Flashcart Loader` -> `(your flashcard)` folders
    - Eine README.txt-Datei ist im Ordner `Flashcart Loader` vorhanden, um herauszufinden, welcher Flashcart-Loader für Ihre Flashcard geeignet ist.
1. Drag and drop the contents of the folder to the root of the flashcard's microSD card
1. Öffnen Sie die TWLMenu++ Einstellungen, wechseln Sie zur Seite `Spiele und Apps Einstellungen` und setzen Sie `Game Loader` auf `Kernel`, damit die Flashcard-Firmware anstelle von nds-bootstrap verwendet wird
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
1. Öffnen Sie die TWLMenu++ Einstellungen, wechseln Sie zur Seite `Spiele und Apps Einstellungen` und setzen Sie `Game Loader` auf `Kernel`, damit die Flashcard-Firmware anstelle von nds-bootstrap verwendet wird
    - Alternatively you may do this as a per-game setting by pressing `Y` on a selected game and changing the `Game Loader` option there

{% endcapture tab-ysmenu %}
{% assign tab-ysmenu = tab-ysmenu | split: "////////" %}

### Running games with your flashcart firmware
{% assign tabs = tab-loader | concat: tab-ysmenu %}
{% include tabs.html index=0 tabs=tabs %}
