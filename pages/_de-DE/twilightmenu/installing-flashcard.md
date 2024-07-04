---
lang: de-DE
layout: wiki
section: twilightmenu
category: installing
title: Installation (Flashcard)
long_title: Installation von TWiLight Menu++ (Flashcard)
description: Wie man TWiLight Menu++ auf einer Nintendo DS Flashcard installiert
---

### Installation
1. Lade die neueste Version von [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z) herunter
   - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Open or extract `TWiLightMenu-Flashcard.7z`
1. Drag and drop the `_nds` folder to your flashcard's microSD card root
1. Drag and drop the `BOOT.NDS` file to your flashcard's microSD card root
1. Drag and drop the `roms` folder to your flashcard's microSD card root
1. Wenn du bereits Speicherdaten hast, bewege alle `.sav` Dateien, welche im DS ROM Speicherort sind, zu einem neuen Ordner namens `saves`, welcher auch zum DS ROM Speicherort geht
1. **DS Phat/Lite-Benutzer:** Falls das Starten von `BOOT.NDS` das Aufhängen des Systems mit einem weißen Bildschirm verursacht, lege ein DS Memory Expansion Pak ein, und versuche es erneut

### TWiLight Menu++ Autobooten
1. Drag and drop everything inside `Autoboot/(your flashcard)` to the root of the flashcard's microSD card
   - Überspringe dies, wenn du deine Flashkarte nicht siehst
1. **DS Phat/DS Lite-Benutzer:** Gehe zu den Einstellungen im DS-Menü und aktiviere den Auto-Start, sodass deine Flashkarte beim Booten gestartet wird

### Um spiele mit deiner Flashcard Firmware ausführen

Bitte beachte, dass das nur funktioniert, wenn die Flashkarte so eingestellt ist, dass TWiLight Menu++ automatisch gebootet wird. Siehe im obigen Abschnitt wie man dies tut.
{:.alert .alert-warning}

Bitte beachte, dass nicht alle Flashkarten diese Art des Ausführens von Spielen unterstützen. Wenn die folgenden Schritte nicht auf deine Flashkarte zutreffen, kannst du diesen Abschnitt überspringen.
{:.alert .alert-warning}

Bitte beachte, dass du die Möglichkeit verlierst, Cheats zu verwenden, wenn du Spiele auf diese Weise ausführst. Wenn du die Cheat-Funktionalität beibehalten willst, überspringe bitte diesen Abschnitt.
{:.alert .alert-warning}

1. Drag and drop everything inside `Flashcart Loader/(your flashcard)` to the root of the flashcard's microSD card
   - Eine README.txt-Datei ist im Ordner `Flashcart Loader` vorhanden, um herauszufinden, welcher Flashcart-Loader für Ihre Flashcard geeignet ist.
   - Wenn du dies getan hast, fahre mit Schritt 3 fort. Wenn nicht, folge den Schritten unter der Flashkartenliste

1. Für diese Flashkarten:
   - R4i-SDHC (r4i-sdhc.com)
   - r4isdhc.com 2014-2022 Karten (**nicht** .hk oder .com.cn)
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS
   - DSTT(i)
   - DSONE SDHC & DSONEi (nicht-SDHC Modelle sind ***nicht*** unterstützt)
   - M3 DS Real
   - M3i Zero (Nicht-GMP-Z003 Modell)
   - iTouchDS and iTouch2 (Verwende die M3Real_M3iZero YSMenu Dateien)
   - R4(i)RTS (r4rts.com) (verwende die M3Real_M3iZero YSMenu Dateien)
   - R4 SDHC RTS (schwarze Karte) (r4isdhc.com) (benutze die M3Real_M3iZero YSMenu Dateien)

   Installiere [RetroGameFan's YSMenu](https://gbatemp.net/download/35737/).
      - Vergewissere dich, dass du `YSMenu.nds` (umbenannt von `TTMenu.dat`, falls nicht vorhanden) und den `TTMenu` Ordner im MicroSD-Hauptverzeichnis der Flashkarte hast
      - Kopiere nicht `TTMenu.dat` direkt; dies wird das Autobooten und YSMenu's Soft Reset zerstören
1. Open TWLMenu++ Settings, switch to `Games and Apps settings` page, and set `Game Loader` to `Kernel`, so the flashcard firmware will be used instead of nds-bootstrap
