---
lang: de-DE
layout: wiki
section: twilightmenu
category: updating
title: Aktualisieren (Flashkarte)
long_title: TWiLight Menu++ aktualisieren (Flashkarte)
description: Wie man TWiLight Menu++ auf einer Nintendo DS Flashcard aktualisiert
---

Wenn ein Update von einer Version älter als v16.4.0 erfolgt, verschiebe bitte deine `.sav` Dateien für DS Spiele in einen neuen Ordner namens `saves`, mit dem `saves` Ordner an der gleichen Stelle wie die DS ROMs.
{:.alert .alert-info}

Wenn ein Update von einer Version älter als v21.0.0 erfolgt, verschiebe bitte deine `.pub` und/oder `.prv` Dateien für DSiWare-Titel in einen neuen Ordner namens `saves`, mit dem `saves` Ordner an der gleichen Stelle wie die DSiWare-ROMs.
{:.alert .alert-info}

If you use a Windows edition which contains Windows Defender, it'll detect the `.7z` file as a Trojan due to a false positive. To fix the false positive, ensure Windows Defender is up to date.
{:.alert .alert-warning}

### Aktualisieren
1. Lade die neueste Version von [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z) herunter
1. `TWiLightMenu-3DS.7z `entpacken
1. Kopiere den `_nds` Ordner in den Hauptordner der microSD-Karte deiner Flashkarte, ersetze alle existierenden Dateien
   - Wenn Sie macOS verwenden, vergewissern Sie sich, dass Sie **** und `Merge`kopieren, nicht `Ersetzen`
1. Kopiere die `BOOT.NDS` Datei in das Hauptverzeichnis der microSD-Karte deiner Flashkarte, ersetze alle existierenden Dateien
1. Wenn TWLMenu++ nach der Aktualisierung nicht bootet, aktualisieren Sie auch die Autoboot-Datei(en)

### Weitere Schritte für die DSi/3DS SD-Karten-Seite

Wenn man in TWLMenü++ zwischen dem Inhalt der SD-Karte und der Flashkarte wechseln kann und das Karten-TWLMenu++ auf v16.3.0 oder höher ist, folge bitte diesen Schritten.

1. Gehe zu TWLMenü++ Einstellungen
1. Wähle `Update TWiLight Menü++`
1. Wähle `Slot-1 microSD > Konsole (micro)SD`
