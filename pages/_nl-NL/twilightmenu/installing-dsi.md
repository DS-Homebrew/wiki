---
lang: nl-NL
layout: wiki
section: twilightmenu
category: installing
title: Installeren (DSi)
long_title: TWiLight Menu++ (DSi) Installeren
description: Hoe installeer je TWiLight Menu++ op de Nintendo DSi
---

Als je nog geen manier hebt om homebrew op je DSi uit te voeren, volg dan de instructies op [dsi.cfw.guide](https://dsi.cfw.guide) om TWiLight Menu++ te installeren
{:.alert .alert-info}

### Installeren
1. Download de meest recente versie van [`TWiLightMenu-DSi.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)
1. Pak `TWiLightMenu-DSi.7z` uit
1. Kopieer de map `_nds` naar de root van je SD-kaart
1. Kopieer het bestand `BOOT.NDS` naar de root van je SD-kaart
1. Kopieer de map `roms` naar de root van je SD-kaart
1. **hiyaCFW-gebruikers:** Kopieer de map `title` naar de root van je SD-kaart

### Automatisch opstarten met Unlaunch
1. Zet je DSi aan terwijl je <kbd class="face">A</kbd> en <kbd class="face">B</kbd>ingedrukt houdt
1. Ga in het Unlaunch-menu naar `OPTIONS`
1. Stel `NO BUTTON` of een knop in op `TWiLight Menu++` waar `BOOT.NDS` staat op het onderste scherm

### Toegang tot inhoud van flashkaart

Een flashkaart is iets wat in de spelkaartsleuf gaat, en een microSD-kaartsleuf bevat. Als je geen flashkaart hebt, ben je klaar met deze gids.
{:.alert .alert-warning}

#### Als je een R4(i) Ultra hebt

1. Volg [deze](installing-flashcard) gids vanaf `To run games using your flashcard firmware`
     - Je kan de waarschuwingen gerust negeren
1. Open TWLMenu++-instellingen
1. Ga naar de pagina `Misc settings`
1. Schakel `Slot-1 microSD access` in
1. Sluit TWLMenu++-instellingen af door op `B` te drukken
     - Als je in het DS Classic Menu terechtkomt, druk nogmaals op `B`

#### Als je geen R4(i) Ultra hebt

1. Create a file or folder called `primary` in `sd:/_nds/` (not the flashcard one), so that TWiLight Menu++ reads settings from the console's SD card after it starts your flashcard
1. Volg [deze](installing-flashcard) gids vanaf `Autobooting TWiLight Menu++`
1. Kopieer het bestand `BOOT.NDS` van `TWiLightMenu-Flashcard.7z` naar de root van je microSD-kaart
1. Open TWLMenu++-instellingen
1. Ga naar de pagina `Misc settings`
1. Schakel `SCFG access in Slot-1` in (Let op: deze optie overschrijft `SD access Slot-1`)
1. Stel `Slot-1: Touch Mode` in op `DSi mode`
1. Zet `Autostart Slot-1` aan
1. Sluit TWLMenu++-instellingen af door op `B` te drukken
     - Als je in het DS Classic Menu terechtkomt, voer dan je flashkaart uit
     - Start anders TWiLight Menu++ opnieuw op

#### Schakelen tussen SD- en flashcardinhoud
- Druk op `SELECT`+`Omhoog` of `SELECT`+`Omlaag` om te schakelen tussen de inhoud van de SD- en flashcard
     - Als het SELECT-menu is ingeschakeld, kan je dat ook daar doen
     - Als je het 3DS-thema gebruikt, raak het Spelkaart- / SD-kaartpictogram aan
     - Als je het R4- / GBC-thema gebruikt, druk dan op `L`
