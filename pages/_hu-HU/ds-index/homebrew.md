---
lang: hu-HU
layout: wiki
section: ds-index
category: reference
title: Homebrew
description: Információk a homebrew-ról Nintendo DS-en
---

### Fejlesztés

Nintendo DS Homebrew fejlesztése tipikusan devkitPro eszközöket igényel, mint például devkitARM, libnds, és libfat. Azonban lehetőség van más ágakról alternatív szoftvert használni:

- **SD Card libraries:** [DevkitPro](https://devkitpro.org/) recommends [libfat](https://github.com/devkitPro/libfat). We recommend using [libslim](https://github.com/DS-Homebrew/libslim/) instead, as it allows usage of different partitions, quicker speeds, and non-blocking
- **Graphic Library:** We recommend using [easyGL2D](http://rel.phatcode.net/junk.php?id=117), which comes shipped with libnds. However, you can use [NightFox Lib](https://github.com/knightfox75/nds_nflib)
- **Entire Toolchains:** We recommend using [devkitARM](https://devkitpro.org/wiki/Getting_Started) and [libnds](https://libnds.devkitpro.org/), as it includes DSi compatibility and has a larger ecosystem. However, if your target is exclusively flashcards on a Nintendo DS, feel free to use [ToolchainGenericDS](https://bitbucket.org/Coto88/toolchaingenericds)

### Flashcard-ok

A DS mód flashcard-ok slot-1 metódusa a Nintendo DS alkalmazások futtatásának. A flashcard-ok előnyei, hogy külön vannak a konzol állományok és a hordozható állományok, a rendszer moddolása nélkül is használhatók és működnek DS Phat/Lite konzolokon. Azonban, a konzol moddolásával szemben, többféle flashcard van a piacon, mind más kernel követelményekkel. A használt kernel az egyik legfontosabb.

[Létezik egy **készítés alatt** flashcard index](https://nightyoshi370.github.io/mm-github-pages-starter/), ami tartalmazza, a következőket: kernel, firmware, tesztreview és vásárlási linkek.

### DLDI

Különböző SD kártya slot-ok különböző hardverrel rendelkeznek (az esetek többségében) és az egyik kártyára írt kód nem feltétlenül működik egy másik kártyával. A DLDI (rövidítése a Dynamically Linked Device Interface-nek) megpróbálja ezt kezelni, azzal, hogy az SD kártya kódot külsőleg patcheli. A betöltők, mint az YSMenu, Wood R4 és a TWiLight Menu++ automatikusan DLDI patchelik a homebrew-okat, de ha szükséges kézzel patchelni, használja az eszközének megfelelő [DLDI Patcher](https://www.chishm.com/DLDI#tools)-t.

### Időbomba

Az időbomba egy lejárati dátuma a flashcard kernel-eknek, amit a gyártók használnak arra, hogy kényszerítsék a felhasználókat új kártya vásárlására. Amint a rendszeróra túl megy ezen a bizonyos dátumon, a kernel visszautasítja a bootolást, a lejárati képernyőnél tovább. Szerencsére flag nem kerül sehova beállításra, és a flashcard firmware által kezelt, két lehetőséget adva nekünk a megkerülésre:

- Mivel a rendszerórán alapszik, visszaállíthatod a dátumot. Ez viszont elront minden játékot, ami a rendszerórát használja, de lehetővé teszi az alapértelmezett kernel használatát.
- Mivel ez a kernel-en alapul, nem a firmware-en, alternatív kernelre is válthatsz. Két opció áll rendelkezésre:
  - [YSmenu](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/) -- A menü igencsak ronda és csak `.nds` fájlt mutat, de jobb játék támogatása és csalás támogatása van, valamint nincs memory pak követelménye
  - [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu) -- Ez hasznos ha szeretnéd minden ROM-od különféle konzolról ugyanabban a menüben kezelni; két módja van a DS játékok futtatásának a TWiLight Menu++-ből:
    - B4DS-sel: Szüksége van Memory Expansion Pak-ra a bővített játék kompatibilitás miatt, és nem támogatja a csalásokat. Azonban működik minden flashcard-dal, amivel TWiLight Menu++ működik
    - YSMenu-vel: Megkapja a kompatibilitási előnyeit az YSMenu előnyeit, a TWiLight Menu++ jobb menüjével, azonban a csalások nem támogatottak jelenleg

Azt ajánljuk, hogy az YSMenu-t használja, TWiLight Menu++-szal, ha azt preferálja, a magasabb kompatibilitás miatt, és mert nem szükséges Memory Expansion Pak hozzá. Ha szeretné beállítani az YSMenu-t, DeadSkullzJr készített egy [Dropbox repo-t](https://www.dropbox.com/sh/egadrhxj8gimu5t/AACv2KqWmeXEHkxoYRluobxha?dl=0) minden elsődleges boot kernel konfigurációval, a flashcard-jához. Csupán annyit kell tennie, hogy behúzza az SD kártya gyökerébe és kész is. A TWiLight Menu++ telepítésről a [a flashcard telepítés oldalon olvashat](../twilightmenu/installing-flashcard).

Annak érdekében, hogy teszteld hogy a flashcard-od tartalmaz-e időbombát, állítsd be a lehető legkésőbbi dátumot, amit lehet és indítsd el a flashcard-ot.

### ARGV támogatás
Az ARGV egy információ átvivő két homebrew Nintendo DS applikáció között. Használhatók forwardereknek, vagy alternatív menükhöz.

- A homebrew alkalmazást úgy kell programozni, hogy felhasználja az előnyeit. Például a GBARunner2, a NesDS és a GameYob mind rendelkezik ARGV implementációval
- Továbbá szükség van arra, hogy legyen valamilyen mód az ARGV változók beállítására. A TWiLight Menu++ és a HBMenu lehetővé teszi az ARGV argumentumok beállítását
