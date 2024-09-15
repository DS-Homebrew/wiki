---
lang: de-DE
layout: wiki
section: twilightmenu
category: customization
title: Benutzerdefinierte Schriftarten
description: Verwendung benutzerdefinierter Schriftarten mit TWiLight Menu++
---

TWiLight Menu++ kann benutzerdefinierte Schriftarten im NFTR-Format (Nitro FonT Resource) verwenden. Sie werden in den Einstellungen, in den Titeln des Handbuchs und in den Themen des Nintendo DSi, Nintendo 3DS, SEGA Saturn und des Homebrew Launcher verwendet.

### Ordnerstruktur
Benutzerdefinierte Schriftarten werden aus `sd:/_nds/TWiLightMenu/extras/fonts/[Schriftartname]/[Schriftartdatei].nftr` geladen, wobei `[Schriftartname]` ein beliebiger Name ist und `[Schriftartdatei].nftr` eine der folgenden Dateien ist:
- `large.nftr`: Die größere Schriftart für Titel
- `small.nftr`: Die kleinere Schriftart, die für den meisten anderen Text verwendet wird

### Skin-Schriften
Sie können Schriftarten zu [benutzerdefinierten DSi/3DS-Themen-Skins](custom-dsi-3ds-skins) hinzufügen, die die Einstellungen in TWiLight Menu++ überschreiben. Diese Schriften gehen im Ordner `font` im Wurzelordner des Skins.

Benutzerdefinierte Skins können zusätzlich Override-Schriftarten für das Datum & Zeit mit `date_time.nftr` und den Konsolenbenutzernamen mit `username.nftr` verwenden.

### Benutzerdefinierte Schriftarten generieren
Sie können Ihre eigenen Schriftarten mit einem Dienstprogramm wie Pk11's [nftr-editor](https://pk11.us/nftr-editor/) erstellen. Um eine der vorhandenen Schriften von TWiLight Menu++ neu zu generieren, verwenden Sie diese:
1. Laden einer NFTR-Datei in nftr-editor
1. Geben Sie die Namen der Schriftarten ein, die Sie von der höchsten bis zur untersten Priorität im Textfeld `Eingabe der Schriftart` verwenden möchten, durch Komma getrennt
    - Im oberen Feld links sehen Sie eine Vorschau der Eingabeschriften und im unteren Feld die aktuelle NFTR
1. Klicken Sie auf " `Aus Schriftart generieren"` und sagen Sie `"OK"`, um die vorhandenen Zeichen zu regenerieren, und `"Abbrechen"`, um die Sonderzeichen für die Schaltflächen zu regenerieren (z. B. &#xE000;)
1. Klicken Sie auf `Speichern`, und wiederholen Sie den Vorgang für die anderen Größen
