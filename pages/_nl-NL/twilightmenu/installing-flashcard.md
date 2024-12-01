---
lang: nl-NL
layout: wiki
section: twilightmenu
category: installing
title: Installeren (Flashkaart)
long_title: Installatie van TWiLight Menu++ (Flashkaart)
description: Hoe installeer je TWiLight Menu++ op een Nintendo DS-flashkaart
tabs:
  - 
    loader: Flashcart Loader
    ysmenu: YSMenu
---

### Installeren
1. Download de meest recente versie van [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
    - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Open or extract `TWiLightMenu-Flashcard.7z`
1. Drag and drop the `_nds` folder to your flashcard's microSD card root
1. Drag and drop the `BOOT.NDS` file to your flashcard's microSD card root
1. Drag and drop the `roms` folder to your flashcard's microSD card root
1. Als je al opslaggegevens hebt, verplaats dan je `.sav`-bestanden, die in je DS ROM-locatie staan, naar een nieuwe map genaamd `saves`, die ook in de DS ROM-locatie staat
1. **DS Phat/Lite users:** If booting `BOOT.NDS` causes a white screen lock-up, then follow the below steps for autobooting, and try again

### TWiLight Menu++ Automatisch Opstarten
1. Open or extract `TWiLightMenu-Flashcard.7z`
1. Open the `Autoboot` -> `(your flashcard)` folders
1. Drag and drop the contents of the folder to the root of the flashcard's microSD card
    - Sla dit over als je je flashkaart niet ziet
1. **DS Phat/Lite-gebruikers:** Ga naar instellingen in het DS-menu, en zet auto-start aan, zodat je flashkaart uitvoert bij het opstarten

### To run games using your flashcard firmware (optional)

**Please note:**
- This only works if your flashcard is set to autoboot TWiLight Menu++. Zie het bovenstaande gedeelte voor hoe dat moet.
- Not all flashcards support running games in this fashion. Als de onderstaande stappen niet van toepassing zijn op je flashkaart, kan je dit gedeelte overslaan.
- You'll lose the ability to use cheats when running games in this fashion. If you want to retain cheat functionality, please skip this section.
{:.alert .alert-warning}

{% capture tab-loader %}

If your flashcart does not have a compatible loader for this section, choose the "YSMenu" tab.
{:.alert .alert-info}

1. Open or extract `TWiLightMenu-Flashcard.7z`
1. Open the `Flashcart Loader` -> `(your flashcard)` folders
    - Een README.txt bestand is aanwezig in de map `Flashcart Loader`, om te helpen uitzoeken welke flashkaart lader geschikt is voor je flashkaart.
1. Drag and drop the contents of the folder to the root of the flashcard's microSD card
1. Open TWLMenu++ Settings, switch to `Games and Apps settings` page, and set `Game Loader` to `Kernel`, so the flashcard firmware will be used instead of nds-bootstrap
    - Alternatively you may do this as a per-game setting by pressing `Y` on a selected game and changing the `Game Loader` option there

{% endcapture tab-loader %}
{% assign tab-loader = tab-loader | split: "////////" %}

{% capture tab-ysmenu %}

1. Please confirm that you have one of the below flashcarts:
    - R4i-SDHC (r4i-sdhc.com)
    - r4isdhc.com 2014+ cards (**not** .hk or .com.cn)
    - R4i SDHC Upgrade Revolution
    - R4DSiXL3D
    - R4i Advance
    - R4-IIIi
    - R4 SDHC Revolution
    - R4(i) Pocket
    - R4i Gold (v1.4.1) (3DS)
    - R4 Gold 3DS RTS (r4i-gold.com)
    - R4xDS
    - DSTT(i)
    - DSONE SDHC & DSONEi (niet-SDHC-modellen worden ***niet*** ondersteund)
    - M3 DS Real
    - M3i Zero (niet-GMP-Z003 model)
    - iTouchDS en iTouch2 (gebruikt de M3Real_M3iZero YSMenu-bestanden)
    - R4(i)RTS (r4rts.com) (gebruikt de M3Real_M3iZero YSMenu-bestanden)
    - R4 SDHC RTS (zwarte cartridge) (r4isdhc.com) (gebruikt de M3Real_M3iZero YSMenu-bestanden)
1. Download [RetroGameFan's YSMenu](https://gbatemp.net/download/35737/).
1. Extract it to a folder on your computer. Navigate to the folder required for your flashcart.
1. Inside the folder, rename `TTMenu.dat` to `YSMenu.nds` if a `YSMenu.nds` file does not already exist
1. Copy the `TTMenu` folder and `YSMenu.nds` file to the root of your MicroSD card. **Do not** copy `TTMenu.dat` directly; this will break autobooting and YSMenu's soft reset
1. Open TWLMenu++ Settings, switch to `Games and Apps settings` page, and set `Game Loader` to `Kernel`, so the flashcard firmware will be used instead of nds-bootstrap
    - Alternatively you may do this as a per-game setting by pressing `Y` on a selected game and changing the `Game Loader` option there

{% endcapture tab-ysmenu %}
{% assign tab-ysmenu = tab-ysmenu | split: "////////" %}

### Running games with your flashcart firmware
{% assign tabs = tab-loader | concat: tab-ysmenu %}
{% include tabs.html index=0 tabs=tabs %}
