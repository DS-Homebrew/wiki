---
lang: de-DE
layout: wiki
section: twilightmenu
category: installing
title: Installation (DSi)
long_title: Installation (DSi)
description: Wie man TWiLight Menu++ auf dem Nintendo DSi installiert
---

Wenn du noch keine Möglichkeit hast, Homebrew auf dem DSi auszuführen, folge [dsi.cfw.guide](https://dsi.cfw.guide), um TWiLight Menu++ zu installieren
{:.alert .alert-info}

### Installation
1. Lade die neueste Version von [`TWiLightMenu-DSi`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z) herunter
   - Wenn die Datei nicht heruntergeladen werden kann, lesen Sie die [Release-Seite](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Entpacke `TWiLightMenu-DSi.7z`
1. Kopiere den `_nds` Ordner in dein SD-Kartenverzeichnis
1. Kopiere den `BOOT.NDS` Ordner in dein SD-Kartenverzeichnis
1. Kopiere den `roms` Ordner in dein SD-Kartenverzeichnis
1. **hiyaCFW Benutzer:** Kopieren Sie den `title` Ordner in Ihr SD-Kartenverzeichnis

### Autostart mit Unlaunch
1. Schalten Sie Ihren DSi ein während Sie <kbd class="face">A</kbd> und <kbd class="face">B</kbd> gedrückt halten
1. Gehen Sie im Unlaunch-Menü zu `OPTIONS`
1. Setze `NO BUTTON` oder eine Taste deiner Wahl auf `TWiLight Menu++`, das `BOOT.NDS` auf dem unteren Bildschirm anzeigt

### Zugriff auf den Inhalt der Karteikarten

Eine Flashcard ist etwas, das in den Spielkartensteckplatz passt und einen microSD-Kartensteckplatz enthält. Wenn Sie keine Karteikarte haben, sind Sie mit diesem Leitfaden fertig.
{:.alert .alert-warning}

#### Wenn Sie ein R4(i) Ultra haben

1. Folgen Sie [dieser](installing-flashcard) Anleitung ab `, um Spiele mit Ihrer Flashcard-Firmware auszuführen`
     - Sie können die Warnungen getrost ignorieren
1. TWiLigtMenu++ Einstellungen öffnen
1. Wechseln Sie zur `Misc Einstellungen` Seite
1. Schalten Sie `ein Slot-1 microSD Zugriff`ß
1. Verlassen Sie TWLMenu++ Einstellungen durch Drücken der Taste `B`
     - Wenn Sie im klassischen DS-Menü landen, drücken Sie erneut `B`

#### Wenn Sie kein R4(i) Ultra haben

1. Erstellen Sie eine Datei oder einen Ordner mit dem Namen `primär` in `sd:/_nds/` (nicht die Flashkarte), damit TWiLight Menu++ die Einstellungen von der SD-Karte der Konsole liest, nachdem es Ihre Flashkarte gestartet hat
1. Folgen Sie [dieser](installing-flashcard) Anleitung, beginnend mit `Autobooting TWiLight Menu++`
1. Kopieren Sie die Datei `BOOT.NDS` von `TWiLightMenu-Flashcard.7z` in das Stammverzeichnis Ihrer microSD-Karte
1. TWiLigtMenu++ Einstellungen öffnen
1. Wechseln Sie zur `Misc Einstellungen` Seite
1. `SCFG-Zugriff in Slot-1` aktivieren (Beachten Sie, dass diese Option den `SD-Zugriff in Slot-1 außer Kraft setzt`)
1. Stellen Sie `Slot-1: Touch-Modus` auf `DSi-Modus`
1. Einschalten `Auto-Start Slot-1`
1. Verlassen Sie TWLMenu++ Einstellungen durch Drücken der Taste `B`
     - Wenn Sie im klassischen DS-Menü landen, starten Sie Ihre Karteikarte
     - Andernfalls starten Sie TWiLight Menu++ neu

#### Umschalten zwischen SD- und Flashcard-Inhalten
- Drücken Sie entweder `SELECT`+`oben` oder `SELECT`+`unten`, um zwischen dem Inhalt der SD-Karte und der Flash-Karte zu wechseln
     - Wenn das Menü SELECT aktiviert ist, können Sie dies auch dort tun
     - Wenn Sie das 3DS-Thema verwenden, berühren Sie das Symbol Spielkarte/SD-Karte
     - Wenn Sie die Themen R4, GBC oder Wood verwenden, drücken Sie die Taste `R`
