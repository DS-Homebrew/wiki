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
Ci sono tre fonts gia inclusi in TWiLight Menu++. Quando si è in modalità DSi tutti i caratteri per tutte le lingue in cui è tradotto TWiLight Menu++ sono disponibili, ma quando si è in modalità DS sono limitati a causa delle limitazioni della RAM. Gli stili di testo di base sono i seguenti:
- Predefinito: Utilizza il font ufficiale DSi come stile principale e supporta tutti i caratteri in modalità DS
- Cinese (Semplificato): Usa Noto Sans CS come stile principale e ha più caratteri cinesi (semplificati) in modalità DS, al costo di altri caratteri di altre lingue
- Coreano: E' identico a quello Predefinito in modalità DSi, ma in modalità DS ha un set più completo di hangul, al costo di altri caratteri di altre lingue

### Struttura della cartella
I font vengono caricati da `sd:/_nds/TWiLightMenu/extras/fonts/[nome font]/[nome file].nftr[nome font][font file].nftr`:
- `large-ds.nftr`, `large-dsi.nftr`, o `large.nftr`: E' il carattere più grande e viene usato per i titoli
- `small-ds.nftr`, `small-dsi.nftr`, o `small.nftr`: E' il carattere più piccolo e viene usato nella maggior parte dei testi

I file `-ds` e `-dsi` hanno una priorità più alta di quella normale e se trovati veranno utilizzati rispettivamente in modalità DS e in modalità DSi.

### Generare font personalizzati
Puoi creare il tuo font personale usando una utility come [nftr-editor](https://pk11.us/nftr-editor/) di Pk11's. Puoi rigenerare uno dei font esistenti di TWiLight Menu++ nel seguente modo:
1. Caricare un file NFTR in nftr-editor
1. Digitare i nomi dei fonts che si desidera utilizzare dalla priorità più alta a quella più bassa nella casella di testo, separandoli con delle virgole
   - Puoi vedere un'anteprima dei font di input nella casella in alto a sinistra e l'NFTR corrente nella casella in basso
1. Clicca `Generate from font `, poi clicca su `OK` per rigenerare i caratteri esistenti e `Cancel` per rigenerare i caratteri speciali dei pulsanti (esempio &#xE000;)
1. Clicca sul `Salva`, e ripetilo per le altre dimensioni del font
