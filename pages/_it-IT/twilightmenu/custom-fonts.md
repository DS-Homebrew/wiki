---
lang: it-IT
layout: wiki
section: twilightmenu
category: customization
title: Stili del testo (font) personalizzati
description: Come utilizzare i font personalizzati con TWiLight Menu++
---

TWiLight Menu++ può utilizzare dei fonts personalizzati in formato NFTR (Nitro FonT Resource). They will be used in Settings, the Manual's titles, and in the Nintendo DSi, Nintendo 3DS, SEGA Saturn, and Homebrew Launcher UIs.

### Struttura della cartella
I caratteri personalizzati vengono caricati da `sd:/_nds/TWiLightMenu/extras/fonts/[nome carattere]/[file font].nftr` dove `[nome carattere]` è il nome desiderato e `[file carattere].nftr` è uno dei seguenti:
- `large.nftr`: The larger font used for titles
- `small.nftr`: The smaller font used for most other text

### Theme fonts
You may add fonts to [custom DSi/3DS themes](custom-dsi-3ds-themes), which will override whatever is set in TWiLight Menu++ settings. These fonts go in the `font` folder, in the theme's root folder.

Custom themes can additionally use override fonts for the date & time using `date_time.nftr`, and the console username with `username.nftr`.

### Generare caratteri personalizzati
You can make your own fonts using a utility such as Pk11's [nftr-editor](https://web.archive.org/web/20240618221756/https://pk11.us/nftr-editor/). Puoi rigenerare uno dei caratteri esistenti di TWiLight Menu++ nel seguente modo:
1. Caricare un file NFTR in nftr-editor
1. Digitare i nomi dei caratteri che si desidera utilizzare dalla priorità più alta a quella più bassa nella casella di testo, separandoli con delle virgole
    - Puoi vedere un'anteprima dei caratteri di input nella casella in alto a sinistra e l'NFTR corrente nella casella in basso
1. Clicca `Generate from font `, poi clicca su `OK` per rigenerare i caratteri esistenti e `Cancel` per rigenerare i caratteri speciali dei pulsanti (esempio &#xE000;)
1. Clicca sul `Salva`, e ripetilo per le altre dimensioni del carattere
