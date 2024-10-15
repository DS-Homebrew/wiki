---
lang: de-DE
layout: wiki
section: twilightmenu
category: installing
title: Installation (3DS)
long_title: TWiLight Menu++ installieren (3DS)
description: Wie man TWiLight Menu++ auf dem Nintendo 3DS installiert
tabs:
  - 
    working-camera: Funktionierende Kamera
    non-working-camera: Nicht funktionierende Kamera
    manual: Anleitung
---

Du brauchst zuerst die benutzerdefinierte Firmware auf deinem 3DS, folge [3ds.hacks.guide](https://3ds.hacks.guide) um sie zu installieren
{:.alert .alert-info}

{% capture tab-working-camera %}
1. Öffne FBI und wähle `Remote-Installation`, dann `QR-Code scannen`
1. Scannen Sie diesen QR-Code, um die neueste Version von [Universal-Updater](https://github.com/Universal-Team/Universal-Updater) zu installieren<br> ![Universal-Updater QR-Code](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. Schließe FBI und starte Universal-Updater
    - Falls es nicht auf deinem Home-Menü erscheint, starte deinen 3DS neu
1. Finde TWiLight Menü++ im App-Raster, du kannst mit der 3. Registerkarte in der Seitenleiste suchen, falls du Probleme hast es zu finden
    - Es hat dieses Symbol: ![TWiLight Menü++ Symbol](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Drücke <kbd class="face">A</kbd> oder tippe auf das Download-Symbol in der Seitenleiste und wähle `TWiLight Menu++`, um es zu installieren
    - Dies wird eine Weile dauern
    - Wenn die Installation fehlschlägt, stellen Sie sicher, dass die Konsole mit dem Internet verbunden ist. Andernfalls klicken Sie auf die Registerkarte `Manual`
{% endcapture %}
{% assign tab-working-camera = tab-working-camera | split: "////////" %}

{% capture tab-non-working-camera %}
1. Lade die neueste Version von [`Universal-Updater.cia`](https://github.com/Universal-Team/Universal-Updater/releases/latest/download/Universal-Updater.cia) herunter
1. Platziere die `Universal-Updater.cia` Datei irgendwo auf deine SD-Karte
1. Starte FBI auf deinem Nintendo 3DS
1. In FBI gehe zu dem Ort, an dem du die `Universal-Updater.cia` Datei eingefügt haben
1. Wähle die `Universal-Updater.cia` Datei aus und klicke auf "Install & Delete"
1. Schließe FBI und starte Universal-Updater
    - Falls es nicht auf deinem Home-Menü erscheint, starte deinen 3DS neu
1. Finde TWiLight Menü++ im App-Raster, du kannst mit der 3. Registerkarte in der Seitenleiste suchen, falls du Probleme hast es zu finden
    - Es hat dieses Symbol: ![TWiLight Menu++ Icon](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Drücke <kbd class="face">A</kbd> oder tippe auf das Download-Symbol in der Seitenleiste und wähle `TWiLight Menü++`, um es zu installieren
    - Dies kann eine Weile dauern
    - Wenn die Installation fehlschlägt, stellen Sie sicher, dass die Konsole mit dem Internet verbunden ist. Andernfalls klicken Sie auf die Registerkarte `Manual`
{% endcapture %}
{% assign tab-non-working-camera = tab-non-working-camera | split: "////////" %}

{% capture tab-manual %}
1. Lade die neueste Version von[`TWiLightMenu-3DS.7z herunter`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
    - Wenn die Datei nicht heruntergeladen werden kann, lesen Sie die [Release-Seite](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Entpacke `TWiLightMenu-3DS.7z`
1. Kopiere den `_nds` Ordner in dein SD-Karten Stammverzeichnis
1. Kopiere die `BOOT.NDS` Datei in dein SD-Karten Stammverzeichnis
1. Kopiere den `roms` Ordner in dein SD-Karten Stammverzeichnis
1. Kopieren Sie die Datei `.cia` in das Stammverzeichnis Ihrer SD-Karte
1. Installiere auf deinem 3DS die beiden CIAs mit FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Installiere

{% assign tabs = tab-working-camera | concat: tab-non-working-camera | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

### Zugriff auf den Inhalt der Karteikarten

Eine Flashcard ist etwas, das in den Spielkartensteckplatz passt und einen microSD-Kartensteckplatz enthält. Wenn Sie keine Karteikarte haben, sind Sie mit diesem Leitfaden fertig.
{:.alert .alert-warning}

#### Wenn Sie ein R4(i) Ultra haben

1. Folgen Sie [dieser](installing-flashcard) Anleitung ab `, um Spiele mit Ihrer Flashcard-Firmware auszuführen`
    - Sie können die Warnungen getrost ignorieren
1. TWiLigtMenu++ Einstellungen öffnen
1. Wechseln Sie zur `Misc settings` Seite
1. `Slot-1 microSD access` einschalten
1. Verlassen Sie TWLMenu++ Einstellungen durch Drücken der Taste `B`
    - Wenn Sie im klassischen DS-Menü landen, drücken Sie erneut `B`

#### Wenn Sie kein R4(i) Ultra haben

1. Erstellen Sie eine Datei oder einen Ordner mit dem Namen `primary` in `sd:/_nds/` (nicht die Flashkarte), damit TWiLight Menu++ die Einstellungen von der SD-Karte der Konsole liest, nachdem es Ihre Flashkarte gestartet hat
1. Folgen Sie [dieser](installing-flashcard) Anleitung, beginnend mit `Autobooting TWiLight Menu++`
1. Kopieren Sie die Datei `BOOT.NDS` von `TWiLightMenu-Flashcard.7z` in das Stammverzeichnis Ihrer microSD-Karte
1. TWiLigtMenu++ Einstellungen öffnen
1. Wechseln Sie zur `Misc Einstellungen` Seite
1. Turn on `SD access in Slot-1`
1. Turn on `SCFG access in Slot-1`
1. Einschalten `Auto-Start Slot-1`
1. Verlassen Sie TWLMenu++ Einstellungen durch Drücken der Taste `B`
    - Wenn Sie im klassischen DS-Menü landen, starten Sie Ihre Karteikarte
    - Andernfalls starten Sie TWiLight Menu++ neu

#### Umschalten zwischen SD- und Flashcard-Inhalten
- Drücken Sie entweder `SELECT`+`oben` oder `SELECT`+`unten`, um zwischen dem Inhalt der SD-Karte und der Flash-Karte zu wechseln
    - Wenn das Menü SELECT aktiviert ist, können Sie dies auch dort tun
    - Wenn Sie das 3DS-Thema verwenden, berühren Sie das Symbol Spielkarte/SD-Karte
    - Wenn Sie die Themen R4, GBC oder Wood verwenden, drücken Sie die Taste `R`
