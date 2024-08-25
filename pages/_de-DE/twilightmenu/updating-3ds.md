---
lang: de-DE
layout: wiki
section: twilightmenu
category: updating
title: Aktualisieren (3DS)
long_title: TWiLight Menu++ aktualisieren (3DS)
description: Wie man TWiLight Menu++ auf dem Nintendo 3DS aktualisiert
tabs:
  - 
    universal-updater: Universal-Updater
    manual: Manuell
---

**HINWEIS:** Wenn ein Update von einer Version älter als v6.8.3 erfolgt, verschiebe bitte deine `.sav` Dateien für DS Spiele in einen neuen Ordner namens `saves`, mit dem `saves` Ordner an der gleichen Stelle wie der DS roms.
{:.alert .alert-info}

**HINWEIS:** Wenn ein Update von einer Version älter als v21.0.0 erfolgt, verschiebe bitte deine `.pub` und/oder `.priv` Dateien für DSi-Spiele in einen neuen Ordner namens `saves`, mit dem `saves` Ordner an der gleichen Stelle wie die DSiWare-Roms.
{:.alert .alert-info}

Wenn Sie von einer älteren Version als v25.7.0 aktualisieren, wird empfohlen, den Titel `TWiLight Menu++ Game Booter` aus der Titelliste mit FBI zu löschen.
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Öffne Universal-Updater
   - Wenn Sie es nicht haben, folgen Sie den [-Installationsanweisungen](installing-3ds)
1. Finde TWiLight Menü++ im App-Raster, du kannst mit der 3. Registerkarte in der Seitenleiste suchen, falls du Probleme hast es zu finden
1. Drücke <kbd class="face">A</kbd> oder tippe auf das Download-Symbol in der Seitenleiste und wähle `TWiLight Menu++`, um es zu installieren
   - Dies wird eine Weile dauern
   - Wenn die Installation fehlschlägt, stellen Sie sicher, dass die Konsole mit dem Internet verbunden ist. Andernfalls klicken Sie auf die Registerkarte `Manual`
{% endcapture %}
{% assign tab-universal-updater = tab-universal-updater | split: "////////" %}

{% capture tab-manual %}
1. Lade die neueste Version von[`TWiLightMenu-3DS.7z herunter`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
   - Wenn die Datei nicht heruntergeladen werden kann, lesen Sie die [Release-Seite](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Entpacke `TWiLightMenu-3DS.7z`
1. Kopiere den `_nds` Ordner in den Hauptordner deiner SD-Karte, ersetze alle existierenden Dateien
   - Wenn Sie macOS verwenden, vergewissern Sie sich, dass Sie **** und `Merge`kopieren, nicht `Ersetzen`
1. Kopiere die `BOOT.NDS` Datei in das Stammverzeichnis deiner SD-Karte, ersetze alle existierenden Dateien
1. Kopiere die `.cia` Datei in das Stammverzeichnis deiner SD-Karte, und ersetze alle existierenden Dateien
1. Installiere auf deinem 3DS die beiden CIAs mit FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Aktualisieren

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}
