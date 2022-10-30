---
lang: it-IT
layout: wiki
section: twilightmenu
category: other
title: Come Ottenere Box Art
description: Come ottenere le box art/le copertine dei giochi in TWiLight Menu++
---

### Windows
1. Scarica l'ultima versione di [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Estrai `TwilightBoxart-Windows-UX.zip` e esegui `TwilightBoxart.exe`
1. Clicca su `Detect SD`
   - Se non trova la SD corretta clicca su `Browse...` e seleziona quella giusta
1. Cambia le dimensione, il bordo, ecc., a tuo piacimento
1. Clicca `Start`
1. Assicurati di aver abilitato la visibilita delle box art nelle impostazioni di TWiLight Menu++

### macOS/Linux
1. Scarica l'ultima versione di [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Estrai il file `.zip`
1. Apri `TwilightBoxart.ini` dalla cartella estratta da un editor di testo
1. Scrivo il percorso della tua scheda SD `SdRoot=`, poi salva il file
   - Su macOS questo è `/Volumes/` poi il nome della tua scheda SD
1. Apri il terminale
1. Nel terminale, scrivi `cd` poi trascina la cartella con `TwilightBoxart.CLI` nel terminale 
1. Avvia `chmod +x TwilightBoxart.CLI`
1. Avvia `./TwilightBoxart.CLI`
1. Clicca su `Si` se è mostrata il percorso corretto della tua scheda SD
1. Assicurati di aver abilitato la visibilita delle box art nelle impostazioni di TWiLight Menu++

### Manualmente
1. Scarica un png box art pack da [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs)
1. Estrai i files .png in `sd:/_nds/TWiLightMenu/boxart`
1. Assicurati di aver abilitato la visibilita delle box art nelle impostazioni di TWiLight Menu++

**Per aggiungere le tue box art:** Inseriscile in `sd:/_nds/TWiLightMenu/boxart`. Devi chiamare il file .png con lo stesso nome del TID (ex. `ASME.png`), o il nome del file (ex. `SM64DS.nds.png`). Il formato `.png`  è il formato da usare, con le dimensioni minime di 128x115 e massime di 208x143.

Le singole box art possono essere scaricate da GameTDB, sotto la categoria **S Covers (png)**.
