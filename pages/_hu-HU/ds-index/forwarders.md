---
lang: hu-HU
layout: wiki
section: ds-index
category: guides
title: DS játék forwarder-ek
description: Hogyan használjuk a DS játék forwardert a hiyaCFW-n vagy a 3DS HOME menüben
tabs:
  - 
    3ds-sd-card: 3DS SD kártya
    dsi-sd-card: DSi SD kártya
    flashcard: Csak flashcard
    flashcard-dsi-3ds: Flashcard moddolt 3DS-en
---

A forwarderek a játékok parancsikonjai, amelyeket a HOME menübe, a hiyaCFW menübe vagy a flashcard menübe telepíthetsz. Betölthetsz DS(i) játékot SD kártyáról (az nds-bootstrap használatával) vagy kompatibilis flashcard-ról (a megfelelő kernel-lel) a forwarderek használatával, abból a menüből, amit választottál. <!--- I feel like this still needs a bit of work. Still better than what was there before. -->

A DS játékokat a digitális `.nds` formátumba kell dumpolni. A DS kártyáidat dumpolhatod a [GodMode9](https://3ds.hacks.guide/dumping-titles-and-game-cartridges#dumping-a-game-cartridge) használatával 3DS-en vagy a [GodMode9i](https://dsi.cfw.guide/dumping-game-cards)-vel DSi-n.
{:.alert .alert-info}

Ha bármi problémád van, tekintsd meg a FAQ-ot a [GBAtemp üzenetszálon](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/).
{:.alert .alert-warning}

Válassz egyet a következőkből a HOME menühöz hozzáadáshoz:

{% capture tab-3ds-sd-card %}

Ez az oldal feltételezi, hogy modern CFW környezetet futtatsz a [3ds.hacks.guide](https://3ds.hacks.guide) alapján.
{:.alert .alert-warning}

### 1. rész: A szükséges fájlok beszerzése

Ha már van Universal Updater telepítve a konzolodra, ugorj a 3. lépéshez.
{:.alert .alert-info}

1. Nyisd meg az FBI-t és válaszd a `Remote Install`, majd a `Scan QR Code` opciót
1. Olvasd be ezt a QR kódot a [Universal-Updater](https://github.com/Universal-Team/Universal-Updater) legfrissebb verziójának telepítéséhez<br> ![Universal-Updater QR kód](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. Nyisd meg az Universal Updater-t a HOME Menüből
1. Telepítsd az NDSForwarder csomagot
1. Az NDSForwarder és a szükséges fájljai feltelepülnek a szükséges helyre

### 2. rész: NDSForwarder
1. Nyisd meg a Homebrew Lancher-t
1. A Homebrew Launcher-ben nyisd meg az `NDS Forwarder Generator`-t
1. Navigálj a játék lokációjára és nyomj <kbd class="face">A</kbd> gombot
1. Hagyd jóvá a telepítést a `Yes` opcióval
1. Miután telepítetted, a játék megjelenik mint cím a HOME menüdben
    - Ha a cím elindítása a `/_nds/ntr-forwarder/sdcard.nds not found` hibaüzenetet jeleníti meg, kövesd a `DSi SD-kártya` lap 1. részének 2-3. lépését

{% endcapture %}
{% assign tab-3ds-sd-card = tab-3ds-sd-card | split: "////////" %}

{% capture tab-dsi-sd-card %}

### Követelmények

- Egy Nintendo DSi telepített [Unlaunch,](https://dsi.cfw.guide/installing-unlaunch) és [hiyaCFW](../hiyacfw/installing) alkalmazásokkal
- A [NDSForwarder-DSi](https://github.com/lifehackerhansol/NDSForwarder-DSi/releases/latest/download/NDSForwarder.dsi) legutolsó kiadása

### 1. rész: Kezdeti lépések
1. Másold az `NDSForwarder.dsi` fájlt az SD kártyád gyökerébe
    - Ez opcionálisan telepíthető a hiyaCFW-be közvetlenül az [NTM](https://github.com/Epicpkmn11/NTM/releases/download/v0.2.0/NTM.dsi) használatával
1. Csomagold ki a [Forwarder pack](https://github.com/RocketRobz/NTR_Forwarder/releases/latest/download/DS.Game.Forwarder.pack.nds-bootstrap.7z)-ot
1. Csomagold ki a `for SD Card root` mappa tartalmát a DSi SD kártyájának gyökerébe

### 2. rész: NDSForwarder-DSi
1. Tedd vissza az SD kártyád a készülékedbe
1. Tartsd nyomva az <kbd class="face">A</kbd> + <kbd class="face">B</kbd> gombokat, majd kapcsold be az eszközöd az Unlaunch-e bootoláshoz
1. Indítsd el az `NDSForwarder.dsi`-t
    - Ha a `nitroFSInit() fail` üzenetet kapod, próbáld meg a TWiLight Menu++ használatát az inításhoz vagy rakd az `NDSForwarder.dsi`-t az SD kártyád gyökerébe
1. Nyomj <kbd class="face">A</kbd> gombot az `Install`-on
1. Navigálj a játék lokációjára és nyomj <kbd class="face">A</kbd> gombot
1. Miután telepítetted, a játék megjelenik, mint cím a hiyaCFW DSi Menüdben

{% endcapture %}
{% assign tab-dsi-sd-card = tab-dsi-sd-card | split: "////////" %}

{% capture tab-flashcard %}

### Követelmények

- Egy Nintendo DS, DS Lite, DSi vagy 3DS flashcard-dal
- A legutolsó kiadása azf [NDSForwarder-DSi](https://github.com/lifehackerhansol/NDSForwarder-DSi/releases/latest/download/NDSForwarder.nds)-nak

### 1. rész: Kezdeti lépések
1. Másold az `NDSForwarder.nds` fájlt a flashcard-od SD kártyájának gyökerébe
1. Töltsd le a [Forwarder pack](https://github.com/RocketRobz/NTR_Forwarder/releases/latest/download/DS.Game.Forwarder.pack.nds-bootstrap.7z)-ot
1. Csomagold ki a `for SD Card root` mappa tartalmát a flashcard SD kártyájának gyökerébe

### 2. rész: NDSForwarder-DSi
1. Tedd vissza az SD kártyád a flashcard-odba, és a flashcard-od az eszközödbe
1. Kapcsold be az eszközöd és indítsd el a flashcard-ot
1. Indítsd el az `NDSForwarder.nds`-t
    - Ha a `nitroFSInit() fail` üzenetet kapod, próbáld meg a TWiLight Menu++ használatát az inításhoz vagy rakd az `NDSForwarder.dsi`-t az SD kártyád gyökerébe
1. Nyomj <kbd class="face">A</kbd> gombot az `Install`-on
1. Navigálj a játék lokációjára és nyomj <kbd class="face">A</kbd> gombot
1. A telepítés után a játékod egy `forwarders` nevű mappában fog megjelenni a flashkártya SD-kártyájának gyökerén

{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% capture tab-flashcard-dsi-3ds %}

### Követelmények

- Egy Nintendo 3DS család konzol modern CFW környezettel a [3ds.hacks.guide](https://3ds.hacks.guide) oldalról

{% capture flashcards %}
A DSTT és az Acekard 2i az ajánlott flashcard-ok. Ha tökéletes játék kompatibilitást szeretnél, szerezd be a SuperCard DSTWO/DSTWO PLUS-t. Az egyetlen hátránya, hogy a rendszer akkumulátort gyorsabban fogyasztja.

Ha olyan flashcard-od van, ami működik az Apache Thunder-nek az NTR Launcher-ével, kérheted azt [a GBAtemp vitaszálon](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/). Legyél biztos abban, melyik build-et használod (Normal vagy Alt), és hogy a `RESETSLOT1` `0`-ra vagy `1`-re van-e állítva a `sd:/nds/ntr_launcher.ini` fájlban.

Kompatibilis:
- [Acekard 2(i)](http://www.nds-card.com/ProShow.asp?ProID=160) (DSi-kibővített játékok, beleértve az és új NTR játékokat is, nem működnek)
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
- R4i3D NEW (Használd az R4iDSN template-et és csomagot)

Részben kompatiblis:
- Ace 3DS+ (A játék kompatibilitás rossz, a mentés/betöltése egy mentésnek összeomláshoz vezet)
- Gateway Blue Card (A játék kompatibilitás rossz, a mentés/betöltése egy mentésnek összeomláshoz vezet)
- EX4DS (A játék kompatibilitás rossz, a mentés/betöltése egy mentésnek összeomláshoz vezet)
- R4iLS (A játék kompatibilitás rossz, a mentés/betöltése egy mentésnek összeomláshoz vezet)
- Kártyák [www.r4isdhc.com.cn](http://www.r4isdhc.com.cn/)-nel ellátva (A játék kompatibilitás rossz, a mentés/betöltése egy mentésnek összeomláshoz vezet)

Inkompatibilis:
- CycloDS (i)Evolution (Tud autoboot-olni ROM-okat, de másképp működik, mint a többi flashcard)
- (i)Edge (Sikertelen autoboot .nds ROM-okra)
- R4 Gold Pro ([www.r4i-gold.com](http://www.r4i-gold.com) / [www.r4i-gold.me](http://www.r4i-gold.me)) (Az YSMenu (nem a forwarder folyamat) brick-eli a kártyát)
- R4i3D (2012)
- R4 Infinity Dual Core
- R4 SDHC
- R4 SDHC Dual-Core ([www.r4isdhc.com](http://www.r4isdhc.com/)) (Az YSMenu (nem a forwarder folyamat) brick-eli a kártyát)
{% endcapture %}

<details>
    <summary>Támogatott flashcard-ok erről a listáról</summary>
    <div class="details-content">
        {{ flashcards | markdownify }}
    </div>
</details>

- Egy 64 bites OS
- [Forwarder3-DS](https://www.dropbox.com/s/b9de5ii6vm3dxfn/Forwarder3DS-v2.9.6.zip?dl=0)
- [Java 8](https://www.java.com/en/download/)
- **Linux felhasználók:** JavaFX
    - Debian alapú rendszereken futtasd [ezt a scriptet](https://gist.githubusercontent.com/puntillol59/7532b653380baca236dcaf2d8f75b5c/raw/e8b9d193f8b24de941160c7292ec0bb3b997e98e/main.sh)
    - Arch: `sudo pacman -S java8-openjfx && sudo archlinux-java set java-8-openjdk/jre`

### 1. rész: Kezdeti lépések
1. Töltsd le valamelyikét az alábbi csomagoknak:
    - [Original R4 / M3 Simply](https://www.dropbox.com/s/juxzri7h8bttunh/DS%20Game%20Forwarder%20pack%20%28Original%20R4%2C%20M3%20Simply%29.7z?dl=0)
    - [Acekard 2(i) / M3DS Real](https://www.dropbox.com/s/5elogf885sd62hu/DS%20Game%20Forwarder%20pack%20%28M3DS%20Real%29.7z?dl=0)
    - [DSTT / R4i Gold / R4i-SDHC / R4 SDHC Upgrade / SC DSONE](https://www.dropbox.com/s/xxfmvikwmnvsu63/DS%20Game%20Forwarder%20pack%20%28DSTT%2C%20R4i%20Gold%2C%20R4i-SDHC%2C%20SC%20DSONE%29.7z?dl=0)
    - [Acekard RPG](https://drive.google.com/file/d/0B2_1xHkEp2_6OHVuZEJwU1BKbEU/view?usp=sharing)
    - [R4iDSN / R4i Gold RTS / R4i Gold 3DS Plus](https://www.dropbox.com/s/j8nquh073k9y0h7/DS%20Game%20Forwarder%20pack%20%28R4iDSN%2C%20R4i%20Gold%20RTS%29.7z?dl=0)
    - [Ace 3DS+ / Gateway Blue Card / R4iLS / R4iTT](https://www.dropbox.com/s/fd7dzhn8burcq02/DS%20Game%20Forwarder%20pack%20%28Ace3DS%2C%20GW%20Blue%20Card%2C%20R4iTT%29.7z?dl=0)
    - [SC DSTWO](https://www.dropbox.com/s/pyyg0vq8b0nmhqd/DS%20Game%20Forwarder%20pack%20%28SC%20DSTWO%29.7z?dl=0)
1. Csomagold ki a `for Slot-1 microSD` mappa tartalmát a flashcard microSD kártyájának gyökerébe, (és ha a mappa létezik) a `for 3DS SD card` mappa tartalmát a 3DS SD kártyájának gyökerébe
    - Mi található minden egyes csomagban a ROM-ok betöltéséhez:
        - Original R4/M3 Simply - WoodR4 & YSMenu
        - DSTT/R4i Gold/R4i-SDHC/R4 SDHC Dual-Core/R4 SDHC Upgrade/SC DSONE, Acekard 2(i)/M3DS Real/R4i-SDHC 1.4.x - YSMenu
        - Acekard RPG, Ace 3DS+/Gateway Blue Card/R4iLS/R4iTT, R4iDSN/R4i Gold RTS - WoodR4

Miután kicsomagoltad a csomagot, szerkesztheted az `sd:/_nds/ntr-forwarder.ini` fájlt, hogy módosítsd a következő beállításokat. Ez nem lehetséges Acekard RPG, R4 DS és R4i Gold RTS esetén.
    - `NTRCLOCK`: Ha `0` van beállítva, vagy <kbd class="face">A</kbd> van nyomva tartva, a DSi boot képernyő jelenik meg a normál DS kezdőképernyő helyett, és TWL órajel sebesség kerül beállításra, így a lag-ok megszűnnek
    - `DISABLEANIMATION`: Ha `1` van beállítva, vagy <kbd class="face">B</kbd> van nyomva tartva, akkor a DS/DSi boot képernyő átugrásra kerül
    - `HEALTHSAFETYMSG`: Ha `1` van beállítva, a boot képernyő "health and safety" üzenete megjelenik az alsó képernyőn, egyébként az alsó képernyő fehér marad "health and safety" üzenet nélkül

### 2. rész: Forwarder3-DS
1. Nyisd meg a `Forwarder3DS.jar`-t
    - **Windows felhasználók:** ha nem nyílik meg, töltsd le ezt a [Forwarder3DS.bat](/assets/files/Forwarder3DS.bat)-ot, rakd a Forwarder3DS.jar-ral egy könyvtárba, majd futtasd
1. Állítsd be a kártyád, mint `Target` a bal oldalon
    - **MEGJEGYZÉS:** Ha nem látod a kártyák listáját, töltsd le [ez a zip fájlt](https://github.com/Olmectron/olmectron.github.io/archive/master.zip), és rakd a `forwarders` mappát ugyanabba a mappába, ahol a Forwarder3DS.jar található, majd nevezd át `.forwarders` névre
1. Kapcsold be az `Automatically set ROM path` opciót
    - **Linux felhasználók:** Az automatikus útvonal hibás, mert tartalmazza a teljes útvonalat (pl. `/media/$USER/something/`), kérjük távolítsd el azt a részt
    - **MacOS felhasználók:** Az automatikus útvonal hibás, mert tartalmazza `/Volumes/(cardname)/` részt az elején, kérjük távolítsd el azt a részt
1. Kattints a mappára jobb oldalt felül, majd válaszd ki a ROM-okat, amikhez forwarder-t szeretnél, és húzd rá őket az ablakra
    - **MEGJEGYZÉS:** A ROM-oknak már az SD kártyádon kell lenniük, amikor kiválasztod, és nem mozgathatók a forwarderek újra létrehozása nélkül
1. Ha egy DSi-Enhanced játék hack-et/fordítást játszol és aminek a bannere/címe szerkesztett, keresd meg a játék bannerját [itt](https://www.dropbox.com/sh/igr47pr0q5bh4p5/AAA9Dy8VOGfBLUA6KdLDSDW-a?dl=0), kattints jobb gombbal a játékon a Forwarder3-DS-ben, majd kattints az `Import banner`-ra, és válaszd ki a banner-t ami használni szeretnél
1. Ha homebrew ROM-ot használsz, kattintsd rá, majd töröld a `Game title` mezőt, és írd be a játék címét
1. Kattints a floppy lemez ikonra, hogy legeneráld a forwardert

### 3. rész: A forwarder telepítése

1. Másold a CIA fájl(oka)t a 3DS-ed SD kártyájára
1. Telepítsd őket az FBI alkalmazással
{% endcapture %}
{% assign tab-flashcard-dsi-3ds = tab-flashcard-dsi-3ds | split: "////////" %}

{% assign tabs = tab-3ds-sd-card | concat: tab-dsi-sd-card | concat: tab-flashcard | concat: tab-flashcard-dsi-3ds %}
{% include tabs.html index=0 tabs=tabs %}
