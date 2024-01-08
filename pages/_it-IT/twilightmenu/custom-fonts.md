---
lang: it-IT
layout: wiki
section: twilightmenu
category: customization
title: Stili del testo (font) personalizzati
description: Come utilizzare i font personalizzati con TWiLight Menu++
---

TWiLight Menu++ può utilizzare dei fonts personalizzati in formato NFTR (Nitro FonT Resource). Vengono applicati nelle Impostazioni, nel manuale, e nei temi del Nintendo DSi, Nintendo 3DS, SEGA Saturn, e Homebrew Launcher.

### Informazioni sui caratteri inclusi
Ci sono tre tipi di caratteri inclusi in TWiLight Menu++. Quando si è in modalità DSi tutti i caratteri per tutte le lingue in cui è tradotto TWiLight Menu++ sono disponibili, ma quando si è in modalità DS sono limitati a causa delle limitazioni della RAM. I caratteri disponibili sono i seguenti:
- Predefinito: Utilizza il carattere ufficiale DSi come principale, e supporta tutti i caratteri utilizzati in TWiLight Menu++ in tutte lingue in modalità DS
- Cinese (Semplificato): Usa Noto Sans CS come carattere principale e ha più caratteri cinesi (semplificati) in modalità DS, al costo di altri caratteri di altre lingue
- Coreano: E' identico a quello Predefinito in modalità DSi, ma in modalità DS ha un set più completo di hangul, al costo di altri caratteri di altre lingue

### Struttura della cartella
I caratteri personalizzati vengono caricati da `sd:/_nds/TWiLightMenu/extras/fonts/[nome carattere]/[file font].nftr` dove `[nome carattere]` è il nome desiderato e `[file carattere].nftr` è uno dei seguenti:
- `large-ds.nftr`, `large-dsi.nftr`, o `large.nftr`: E' il carattere più grande e viene usato per i titoli
- `small-ds.nftr`, `small-dsi.nftr`, o `small.nftr`: E' il carattere più piccolo e viene usato nella maggior parte dei testi

I file `-ds` e `-dsi` hanno una priorità più alta di quella normale e se trovati veranno utilizzati rispettivamente in modalità DS e in modalità DSi.

### Skin caratteri
È possibile aggiungere caratteri a [skin personalizzate per i temi DSi/3DS](custom-dsi-3ds-skins), che sovrascriveranno quanto impostato nelle impostazioni di TWiLight Menu++. Questi caratteri vanno nella cartella `font`, nella cartella della skin.

Le skin personalizzate possono inoltre utilizzare caratteri di sovrascrittura per la data & utilizzando `date_time.nftr`, e per il nome utente della console con `username.nftr`.

### Generare caratteri personalizzati
Puoi creare i tuoi caratteri personali usando un'utilità come [nftr-editor](https://pk11.us/nftr-editor/) di Pk11. Puoi rigenerare uno dei caratteri esistenti di TWiLight Menu++ nel seguente modo:
1. Caricare un file NFTR in nftr-editor
1. Digitare i nomi dei caratteri che si desidera utilizzare dalla priorità più alta a quella più bassa nella casella di testo, separandoli con delle virgole
   - Puoi vedere un'anteprima dei caratteri di input nella casella in alto a sinistra e l'NFTR corrente nella casella in basso
1. Clicca `Generate from font `, poi clicca su `OK` per rigenerare i caratteri esistenti e `Cancel` per rigenerare i caratteri speciali dei pulsanti (esempio &#xE000;)
1. Clicca sul `Salva`, e ripetilo per le altre dimensioni del carattere
