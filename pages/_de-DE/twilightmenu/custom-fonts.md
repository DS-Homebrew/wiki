---
lang: de-DE
layout: wiki
section: twilightmenu
category: customization
title: Benutzerdefinierte Schriftarten
description: Verwendung benutzerdefinierter Schriftarten mit TWiLight Menu++
---

TWiLight Menu++ kann benutzerdefinierte Schriftarten im NFTR-Format (Nitro FonT Resource) verwenden. They will be used in Settings, the Manual's titles, and in the Nintendo DSi, Nintendo 3DS, SEGA Saturn, and Homebrew Launcher UIs.

### Ordnerstruktur
Benutzerdefinierte Schriftarten werden aus `sd:/_nds/TWiLightMenu/extras/fonts/[Schriftartname]/[Schriftartdatei].nftr` geladen, wobei `[Schriftartname]` ein beliebiger Name ist und `[Schriftartdatei].nftr` eine der folgenden Dateien ist:
- `large.nftr`: Die größere Schriftart für Titel
- `small.nftr`: Die kleinere Schriftart, die für den meisten anderen Text verwendet wird

### Theme fonts
You may add fonts to [custom DSi/3DS themes](custom-dsi-3ds-themes), which will override whatever is set in TWiLight Menu++ settings. These fonts go in the `font` folder, in the theme's root folder.

Custom themes can additionally use override fonts for the date & time using `date_time.nftr`, and the console username with `username.nftr`.

### Benutzerdefinierte Schriftarten generieren
You can make your own fonts using a utility such as Pk11's [nftr-editor](https://web.archive.org/web/20240618221756/https://pk11.us/nftr-editor/). Um eine der vorhandenen Schriften von TWiLight Menu++ neu zu generieren, verwenden Sie diese:
1. Laden einer NFTR-Datei in nftr-editor
1. Geben Sie die Namen der Schriftarten ein, die Sie von der höchsten bis zur untersten Priorität im Textfeld `Eingabe der Schriftart` verwenden möchten, durch Komma getrennt
    - Im oberen Feld links sehen Sie eine Vorschau der Eingabeschriften und im unteren Feld die aktuelle NFTR
1. Klicken Sie auf " `Aus Schriftart generieren"` und sagen Sie `"OK"`, um die vorhandenen Zeichen zu regenerieren, und `"Abbrechen"`, um die Sonderzeichen für die Schaltflächen zu regenerieren (z. B. &#xE000;)
1. Klicken Sie auf `Speichern`, und wiederholen Sie den Vorgang für die anderen Größen
