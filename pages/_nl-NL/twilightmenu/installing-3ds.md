---
lang: nl-NL
layout: wiki
section: twilightmenu
category: installing
title: Installatie (3DS)
long_title: TWiLight Menu++ (3DS) Installeren
description: Hoe installeer je TWiLight Menu++ op een Nintendo DS-flashkaart
tabs:
  - 
    working-camera: Werkende camera
    non-working-camera: Niet-werkende camera
    manual: Handleiding
---

Je moet eerst aangepaste firmware op je 3DS hebben, volg de instructies op [3ds.hacks.guide](https://3ds.hacks.guide) om het te installeren
{:.alert .alert-info}

{% capture tab-working-camera %}
1. Open FBI en selecteer `externe installatie`, gevolgt door `Scan QR Code`
1. Scan deze QR-code om de laatste versie van [Universal-Updater](https://github.com/Universal-Team/Universal-Updater) te installeren<br> ![Universal-Updater QR-code](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. Sluit FBI en start Universal-Updater
   - Als het niet verschijnt in je home menu, herstart dan je 3DS
1. Vind TWiLight Menu++ in het app-raster, je kunt zoeken met het 3de tabblad op de zijbalk als je het probleem hebt om het te vinden
   - Het heeft dit pictogram: ![TWiLight Menu++-pictogram](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Druk op <kbd class="face">A</kbd> of tik op het download-pictogram in de zijbalk en selecteer `TWiLight Menu++` om het te installeren
   - Dit kan even duren
{% endcapture %}
{% assign tab-working-camera = tab-working-camera | split: "////////" %}

{% capture tab-non-working-camera %}
1. Download de meest recente versie van [`Universal-Updater.cia`](https://github.com/Universal-Team/Universal-Updater/releases/latest/download/Universal-Updater.cia)
1. Plaats het bestand `Universal-Updater.cia` ergens op je SD-kaart
1. Voer FBI uit op je Nintendo 3DS
1. Ga in FBI naar de plaats waar u het bestand `Universal-Updater.cia` hebt geplakt
1. Selecteer het bestand `Universal-Updater.cia` en druk op "Install & Delete"
1. Sluit FBI en voer Universal-Updater uit
   - Als het niet verschijnt in je home menu, herstart dan je 3DS
1. Vind TWiLight Menu++ in de app-raster, je kunt zoeken met de 3e tab op de zijbalk als je moeite hebt het te vinden
   - Het heeft dit pictogram: ![TWiLight Menu++-pictogram](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Druk op <kbd class="face">A</kbd> of tik op het download-pictogram in de zijbalk en selecteer `TWiLight Menu++` om het te installeren
   - Dit kan even duren
{% endcapture %}
{% assign tab-non-working-camera = tab-non-working-camera | split: "////////" %}

{% capture tab-manual %}

If you use a Windows edition which contains Windows Defender, it'll detect the `.7z` file as a Trojan due to a false positive. To fix the false positive, ensure Windows Defender is up to date.
{:.alert .alert-warning}

1. Download de meest recente versie van [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
1. Pak `TWiLightMenu-3DS.7z` uit
1. Kopieer de map `_nds` naar de root van je SD-kaart
1. Kopieer het bestand `BOOT.NDS` naar de root van je SD-kaart
1. Kopieer de map `roms` naar de root van je SD-kaart
1. Kopieer het bestand `.cia` naar de root van je SD-kaart
1. Installeer op je 3DS de CIA met FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Installateren

{% assign tabs = tab-working-camera | concat: tab-non-working-camera | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

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
1. Kopieer het bestand `BOOT.NDS` van `TWiLightMenu-Flashcard.7z` naar de root van uw microSD-kaart
1. Open TWLMenu++-instellingen
1. Ga naar de pagina `Misc settings`
1. Schakel `SCFG access in Slot-1` in (Let op: deze optie overschrijft `SD access Slot-1`)
1. Stel `Slot-1: Touch Mode` in op `DSi mode`
1. Zet `Autostart Slot-1` aan
1. Sluit TWLMenu++-instellingen af door op `B` te drukken
     - Als je in het DS Classic Menu terechtkomt, voer dan je flashkaart uit
     - Start anders TWiLight Menu++ opnieuw op

#### Schakelen tussen SD- en flashkaartinhoud
- Druk op `SELECT`+`Omhoog` of `SELECT`+`Omlaag` om te wisselen tussen de inhoud van de SD- en flashkaart
     - Als het SELECT-menu is ingeschakeld, kan je dat ook daar doen
     - Als je het 3DS-thema gebruikt, raak het Spelkaart- / SD-kaartpictogram aan
     - Als je het R4- / GBC-thema gebruikt, druk dan op `L`
