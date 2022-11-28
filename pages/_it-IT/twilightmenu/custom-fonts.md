---
lang: it-IT
layout: wiki
section: twilightmenu
category: customization
title: Stili del testo (font) personalizzati
description: Come utilizzare i font personalizzati con TWiLight Menu++
---

TWiLight Menu++ può utilizzare dei fonts personalizzati in formato NFTR (Nitro FonT Resource). Vengono applicati nelle Impostazioni, nel manuale, e nei temi del Nintendo DSi, Nintendo 3DS, SEGA Saturn, e Homebrew Launcher.

### Informazioni sugli Stili di testo
Ci sono tre fonts gia inclusi in TWiLight Menu++. When TWiLight Menu++ is running in DSi Mode, they all contain all of the characters that should be needed for all of the languages TWiLight is translated to, but when running in DS Mode they are more limited due to RAM limitations. Gli stili di testo di base sono i seguenti:
- Default: This uses the official DSi font as its primary font, and supports all characters that are used in TWiLight Menu++ itself in all languages in DS mode
- Cinese (Semplificato): Usa Noto Sans CS come stile principale e ha più caratteri cinesi (semplificati) in modalità DS, al costo di altri caratteri di altre lingue
- Coreano: E' identico a quello Predefinito in modalità DSi, ma in modalità DS ha un set più completo di hangul, al costo di altri caratteri di altre lingue

### Struttura della cartella
I font vengono caricati da `sd:/_nds/TWiLightMenu/extras/fonts/[nome font]/[nome file].nftr[nome font][font file].nftr`:
- `large-ds.nftr`, `large-dsi.nftr`, o `large.nftr`: E' il carattere più grande e viene usato per i titoli
- `small-ds.nftr`, `small-dsi.nftr`, o `small.nftr`: E' il carattere più piccolo e viene usato nella maggior parte dei testi

I file `-ds` e `-dsi` hanno una priorità più alta di quella normale e se trovati veranno utilizzati rispettivamente in modalità DS e in modalità DSi.

### Skin fonts
You may add fonts to [custom DSi/3DS theme skins](custom-dsi-3ds-skins), which will override whatever is set in TWiLight Menu++ settings. These fonts go in the `font` folder, in the skin's root folder.

Custom skins can additionally use override fonts for the date & time using `date_time.nftr`, and the console username with `username.nftr`.

### Generating custom fonts
You can make your own fonts using a utility such as Pk11's [nftr-editor](https://pk11.us/nftr-editor/). To regenerate one of TWiLight Menu++'s existing fonts using it:
1. Caricare un file NFTR in nftr-editor
1. Digitare i nomi dei fonts che si desidera utilizzare dalla priorità più alta a quella più bassa nella casella di testo, separandoli con delle virgole
   - Puoi vedere un'anteprima dei font di input nella casella in alto a sinistra e l'NFTR corrente nella casella in basso
1. Clicca `Generate from font `, poi clicca su `OK` per rigenerare i caratteri esistenti e `Cancel` per rigenerare i caratteri speciali dei pulsanti (esempio &#xE000;)
1. Clicca sul `Salva`, e ripetilo per le altre dimensioni del font
