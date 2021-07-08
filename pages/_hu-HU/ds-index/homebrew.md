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

- **SD kártya könyvtárak:** A [DevkitPro](https://devkitpro.org/) a [libfat](https://github.com/devkitPro/libfat) könyvtárat ajánlja. Helyette mi a [libslim](https://github.com/DS-Homebrew/libslim/) használatát ajánljuk, mert megengedi a különböző partíciók használatát, gyorsabb és nem-blokkoló
- **Grafikus könyvtár:** Az [easyGL2D](http://rel.phatcode.net/junk.php?id=117)-t ajánljuk, ami együtt érkezik a libnds-sel. Azonban használhatod a [NightFox Lib](https://github.com/knightfox75/nds_nflib)-et is
- **Teljes eszköztár:** A [devkitARM](https://devkitpro.org/wiki/Getting_Started) és a [libnds](https://libnds.devkitpro.org/) használatát javasoljuk, mert tartalmazza a DSi kompatibilitást és nagyobb az ökoszisztémája. Azonban ha a cél kizárólag flashcards a Nintendo DS-en, nyugodtan használhatod a [ToolchainGenericDS](https://bitbucket.org/Coto88/toolchaingenericds) eszköztárát

### Flashcard-ok

A DS mód flashcard-ok slot-1 metódusa a Nintendo DS alkalmazások futtatásának. A flashcard-ok előnyei, hogy külön vannak a konzol állományok és a hordozható állományok, a rendszer moddolása nélkül is használhatók és működnek DS Phat/Lite konzolokon. Azonban, a konzol moddolásával szemben, többféle flashcard van a piacon, mind más kernel követelményekkel. A használt kernel az egyik legfontosabb.

[Létezik egy **készítés alatt** flashcard index](https://nightyoshi370.github.io/mm-github-pages-starter/), ami tartalmazza, a következőket: kernel, firmware, tesztreview és vásárlási linkek.

### DLDI

Különböző SD kártya slot-ok különböző hardverrel rendelkeznek (az esetek többségében) és az egyik kártyára írt kód nem feltétlenül működik egy másik kártyával. A DLDI (rövidítése a Dynamically Linked Device Interface-nek) megpróbálja ezt kezelni, azzal, hogy az SD kártya kódot külsőleg patcheli. A betöltők, mint az YSMenu, Wood R4 és a TWiLight Menu++ automatikusan DLDI patchelik a homebrew-okat, de ha szükséges kézzel patchelni, használja az eszközének megfelelő [DLDI Patcher](https://www.chishm.com/DLDI#tools)-t.

### Időbomba

Néhány flashcard kernelbe egy lejárati idő kódolt (amit többnyire időbombának hívnak) a fejlesztője által, hogy rávegyék a felhasználót a legfrissebb változat vásárlására. A funkció működése a következő:

1. A flashcard bebootol és betölti a kernel fájlt az SD kártyáról, a nélkül, hogy ellenőrizné, hogy a kernel az e amit a fejlesztő vár
1. Minden alkalommal, amikor a kernel fájl betöltésre kerül az SD kártyáról, ellenőrzi, hogy a rendszer dátum egy adott időpont után van-e

Ha a második teszt pozitív, akkor a kernel nem fog bootolni. Ez tesztelhető a dátum legutolsó elfogadható időpontra állításával. Azonban a biztonság gyenge, és az eredmény nem cache-elt, ami azt jelenti, hogy lehetőség van megkerülni:

Ha azt a kernelt szeretnéd használni, amit a flashcard gyártó adott, a rendszer óra visszaállítható az eszköz System Settings alkalmazásában. Tartsd észben, hogy ez azon játékoknál, amik a rendszer időtől függenek problémát okoz (mint például Animal Crossing: Wild World).

Azonban a kernelek, amik ezekkel a kártyákkal érkeznek, alapvetően problémásak, és javasolt a cseréjük. Hálás dolog, hogy harmadik fél fejlesztők készítettek olyan alternatívákat, amit használhatsz:

- [YSmenu - menu + játék betöltő](https://www.dropbox.com/sh/egadrhxj8gimu5t/AACv2KqWmeXEHkxoYRluobxha?dl=0) - Habár nem rendelkezik egy egyediesíthető mindent egyben menü előnyeivel, a játéktöltőnek sokkal jobb a kompatibilitása és rendelkezik támogatással az action-replay csalásokhoz
- [TWiLight Menu++ nds-bootstrap-pal](/twilightmenu/installing-flashcard) - Rendelkezik egyediesíthető mindent egyben menüvel, és támogatja a csalásokat, de a B4DS módban (a mód amiben használt, amikor nem rendelkezik DSi képességekkel) gyenge kompatibilitással bír és néhány játéknak szüksége van a Memory Expansion Pak-re
- [TWiLight Menu++ YSmenu-vel](/twilightmenu/installing-flashcard) - Egyediesíthető mindent egyben menü, magas kompatibilitással, de csalás támogatás nélkül

### ARGV támogatás
Az ARGV egy információ átvivő két homebrew Nintendo DS applikáció között. Használhatók forwardereknek, vagy alternatív menükhöz.

- A homebrew alkalmazást úgy kell programozni, hogy felhasználja az előnyeit. Például a GBARunner2, a NesDS és a GameYob mind rendelkezik ARGV implementációval
- Továbbá szükség van arra, hogy legyen valamilyen mód az ARGV változók beállítására. A TWiLight Menu++ és a HBMenu lehetővé teszi az ARGV argumentumok beállítását
