---
lang: hu-HU
layout: wiki
section: ds-index
category: guides
title: DS játék forwarder-ek (3DS)
description: Hogyan készíts CIA forwarder-t, hogy a DS játékaidat a 3DS home menüjében láthasd
tabs:
  - 
    tab-sd-card: SD kártya
    tab-flashcard: Flashcard
---

Ha bármi problémád van, tekintsd meg a FAQ-ot a [GBAtemp üzenetszálon](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/).
{:.alert .alert-warning}

### Követelmények

3DS:
- [Luma3DS](https://github.com/lumateam/luma3ds/releases)vagy más patcheli a TWL_NAND-ot
- [FBI](https://github.com/Steveice10/FBI/releases) a CIA fájlok telepítéséhez
- (opcionális) egy támogatott DS flashcard

{% capture flashcards %}
A DSTT és az Acekard 2i az ajánlott flashcard-ok. Ha tökéletes játék kompatibilitást szeretnél, szerezd be a SuperCard DSTWO / DSTWO PLUS-t. Az egyetlen hátrányuk, hogy a rendszer akkumulátort gyorsabban fogyasztják.

Ha olyan flashcard-od van, ami működik az Apache Thunder-nek az NTR Launcher-ével, kérd azt [a GBAtemp vitaszálon](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/). Legyél biztos abban, melyik build-et használod (Normal vagy Alt), és hogy a `RESETSLOT1` `0`-ra vagy `1`-re van-e állítva a `sd:/nds/ntr_launcher.ini` fájlban.

Kompatibilis:
- [Acekard 2(i)](http://www.nds-card.com/ProShow.asp?ProID=160) (DSi-kibővített játékok, beleértve az és új NTR játékokat is, nem működnek.)
- [Acekard RPG](http://wiki.gbatemp.net/wiki/Acekard_RPG)
- [DSTT](http://www.nds-card.com/ProShow.asp?ProID=157)
- [DSTT Advance](http://kaze-tado.way-nifty.com/moo/images/2008/11/19/200811202.jpg)
- Galaxy Eagle
- M3 DS Real
- [M3 DS Simply](https://farm2.static.flickr.com/1333/752793411_d91b182eb7.jpg) ( < 2 GB microSD kártyát használ)
- [R4 DS](http://www.nds-card.com/ProShow.asp?ProID=141) (Eredeti nem-SDHC verzió, < 2 GB microSD kártyát használ)
- [R4 SDHC Snoopy](http://www.nds-card.com/ProShow.asp?ProID=567)
- [R4 SDHC RTS LITE](http://www.nds-card.com/ProShow.asp?ProID=450) ([www.r4isdhc.com](http://www.r4isdhc.com/))
- R4 SDHC Upgrade ([www.r4i-sdhc.com](http://www.r4i-sdhc.com/))
- [R4i3D](http://www.3ds-cart.com/en/other-flashcarts/35-r4i3d-revolution-cart-for-3ds-dsi-dsl-ds.html) ([www.r4i3d.com](http://www.r4i-sdhc.com/))
- [R4iDSN](http://3ds-flashcard.com/home/28-r4idsn-3ds.html)
- [R4i Gold](http://www.nds-card.com/ProShow.asp?ProID=330)
- [R4i Gold RTS](http://www.nds-card.com/ProShow.asp?ProID=149) ([www.r4ids.cn](http://www.r4ids.cn/))
- [R4i-SDHC](http://www.nds-card.com/ProShow.asp?ProID=146) ([www.r4i-sdhc.com](http://www.r4i-sdhc.com)) (Normál és RTS verziók)
- R4iTT ([www.r4itt.net](http://www.r4itt.net/)) (A lila kártya lehet inkompatiblis)
- [SuperCard DSONE](http://wiki.gbatemp.net/wiki/SuperCard_DSONEi)
- [SuperCard DSTWO](http://www.nds-card.com/ProShow.asp?ProID=135) (Normál és Plus verziók)

Teszteletlen:
- R4i3D NEW (Használd aR4iDSN template-et és csomagot)

Részben kompatiblis:
- Ace 3DS+ (A játék kompatibilitás rossz, a mentés/betöltése egy mentésnek összeomláshoz vezet.)
- Gateway Blue Card (A játék kompatibilitás rossz, a mentés/betöltése egy mentésnek összeomláshoz vezet.)
- EX4DS (A játék kompatibilitás rossz, a mentés/betöltése egy mentésnek összeomláshoz vezet.)
- R4iLS (A játék kompatibilitás rossz, a mentés/betöltése egy mentésnek összeomláshoz vezet.)
- Kártyák [www.r4isdhc.com.cn](http://www.r4isdhc.com.cn/)-nel ellátva (A játék kompatibilitás rossz, a mentés/betöltése egy mentésnek összeomláshoz vezet.)

Inkompatibilis:
- CycloDS (i)Evolution (Tud autoboot-olni ROM-okat, de másképp működik, mint a többi flashcard.)
- (i)Edge (Sikertelen autoboot .nds ROM-okra)
- R4 Gold Pro ([www.r4i-gold.com](http://www.r4i-gold.com) / [www.r4i-gold.me](http://www.r4i-gold.me)) (Az YSMenu (nem a forwarder folyamat) brick-eli a kártyát)
- R4i3D (2012)
- R4 Infinity Dual Core
- R4 SDHC
- R4 SDHC Dual-Core ([www.r4isdhc.com](http://www.r4isdhc.com/)) (Az YSMenu (nem a forwarder folyamat) brick-eli a kártyát)
{% endcapture %}

<details>
    <summary>Támogatott flashcard-ok</summary>
    <div class="details-content">
        {{ flashcards | markdownify }}
    </div>
</details>

PC:
- Egy 64 bites OS
- [Forwarder3-DS](https://www.dropbox.com/s/b9de5ii6vm3dxfn/Forwarder3DS-v2.9.6.zip?dl=0)
- Java 8 Update 251
- **Linux felhasználók:** JavaFX. Debian alapú rendszereken futtasd [ezt](https://gist.githubusercontent.com/puntillol59/7532b6583380baca236dcaf2d8f75b5c/raw/e8b9d193f8b24de941160c7292ec0bb3b997e98e/main.sh), vagy ha Arch-on vagy futtasd ezt: `sudo pacman -S java8-openjfx && sudo archlinux-java set java-8-openjdk/jre`.

### 1. rész: Kezdeti lépések
{% capture tab-sd-card %}
1. Töltsd le az [SD kártya forwarder csomagot](https://www.dropbox.com/s/k5uaa4jzbtkgm0z/DS%20Game%20Forwarder%20pack%20%283DS%20SD%20Card%29.7z?dl=0)
1. Csomagold ki a `for SD card root` mappa tartalmát a 3DS SD kártyájának gyökerébe

Miután kicsomagoltad a csomagot, szerkesztheted az `sd:/_nds/nds-bootstrap.ini` fájlt:
- `BOOST_CPU`: Ha 1-re állított, akkor a, TWL órajel sebesség kerül felhasználásra, így a lag-ok megszünnek
- `SOUND_FREQ`: Ha 1-re állított a hang 48 kHz-el fog lejátszódni 32 kHz helyett
{% endcapture%}
{% assign tab-sd-card = tab-sd-card | split: "////////" %}

{% capture tab-flashcard %}
1. Download one of these packs:
   - [Original R4 / M3 Simply](https://www.dropbox.com/s/juxzri7h8bttunh/DS%20Game%20Forwarder%20pack%20%28Original%20R4%2C%20M3%20Simply%29.7z?dl=0)
   - [Acekard 2(i) / M3DS Real](https://www.dropbox.com/s/5elogf885sd62hu/DS%20Game%20Forwarder%20pack%20%28M3DS%20Real%29.7z?dl=0)
   - [DSTT / R4i Gold / R4i-SDHC / R4 SDHC Upgrade / SC DSONE](https://www.dropbox.com/s/xxfmvikwmnvsu63/DS%20Game%20Forwarder%20pack%20%28DSTT%2C%20R4i%20Gold%2C%20R4i-SDHC%2C%20SC%20DSONE%29.7z?dl=0)
   - [Acekard RPG](https://drive.google.com/file/d/0B2_1xHkEp2_6OHVuZEJwU1BKbEU/view?usp=sharing)
   - [R4iDSN / R4i Gold RTS / R4i Gold 3DS Plus](https://www.dropbox.com/s/j8nquh073k9y0h7/DS%20Game%20Forwarder%20pack%20%28R4iDSN%2C%20R4i%20Gold%20RTS%29.7z?dl=0)
   - [Ace 3DS+ / Gateway Blue Card / R4iLS / R4iTT](https://www.dropbox.com/s/fd7dzhn8burcq02/DS%20Game%20Forwarder%20pack%20%28Ace3DS%2C%20GW%20Blue%20Card%2C%20R4iTT%29.7z?dl=0)
   - [SC DSTWO](https://www.dropbox.com/s/pyyg0vq8b0nmhqd/DS%20Game%20Forwarder%20pack%20%28SC%20DSTWO%29.7z?dl=0)

1. Extract the contents of the `for Slot-1 microSD` folder to the root of your flashcard's microSD card, and (if the folder exists) the contents of the `for 3DS SD card` folder to the root of your 3DS's SD card.

After you extract the pack for your card, you can edit `sd:/_nds/ntr_forwarder.ini` to change the settings. This isn't possible for Acekard RPG, R4 DS, and R4i Gold RTS.
- `NTRCLOCK`: If set to `0` or <kbd class="face">A</kbd> is held, the DSi boot screen will appear instead of the normal DS splash, and TWL clock speed is used, so lags begone
- `DISABLEANIMATION`: If set to `1` or <kbd class="face">B</kbd> is held, the DS / DSi boot screen is skipped
- `HEALTHSAFETYMSG`: If set to `1`, the boot screen's health and safety message will appear on the bottom screen, otherwise the bottom screen stays white with no health and safety message
{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% assign tabs = tab-sd-card | concat: tab-flashcard %}
{% include tabs.html index=0 tabs=tabs %}

### 2. rész: AP fix fájlok beszerzése a TWiLight Menu++-ból
If you already have TWiLight Menu++, skip to the next section.
1. Download the latest `TWiLightMenu-3DS.7z` from the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. In the 7z file, go to `_nds/TWiLightMenu/`
1. Copy the `apfix` folder to `sd:/_nds/ntr-forwarder/` on your 3DS's SD card

### 3. rész: Forwarder3-DS
1. Open `Forwarder3DS.jar`
   - **Windows users:** If it doesn't open, download this [Forwarder3DS.bat](/assets/files/Forwarder3DS.bat), place it in the same folder as Forwarder3DS.jar, and run it
1. Set your card as the `Target` on the left
   - **NOTE:** If you don't see a list of cards, download [this zip](https://github.com/Olmectron/olmectron.github.io/archive/master.zip), and put the `forwarders` folder in the same folder as Forwarder3DS.jar, then rename it to `.forwarders`
1. Enable `Automatically set ROM path`
   - **Linux users:** The automatic path is incorrect since it includes the entire path (e.g. `/media/$USER/something/`), please remove that part
   - **MacOS users:** The automatic path is incorrect since it includes `/Volumes/(cardname)/` at the start, please remove that part
1. Click the folder in the top right and select the ROMs you want to make forwarders for or drag and drop them onto the window
   - **NOTE:** The ROMs must already be on your SD card when selecting them, and can't be moved without recreating the forwarders
   - **SD card users:** If your save file is in the same folder as the ROM, move it to a folder called `saves`, with the `saves` folder being in the same place as the ROMs
1. If you're playing a hack / translation of a DSi-Enhanced game that has it's banner / title edited, find the banner for the game from [here](https://www.dropbox.com/sh/igr47pr0q5bh4p5/AAA9Dy8VOGfBLUA6KdLDSDW-a?dl=0), right click on the game in Forwarder3-DS, click `Import banner`, and click on the banner to use
1. If using a homebrew ROM, click on it, then clear the `Game title` and type the game's title
1. Click the floppy disk button to generate the forwarder CIA(s)
1. Copy the CIA(s) to your 3DS's SD card, then install them using FBI
   - If using EmuNAND, install to both SysNAND and EmuNAND
