---
lang: en-US
layout: wiki
section: gbarunner2
title: GBARunner2 build-ek
description: A GBARunner különböző build-jeivel kapcsolatos további információk és használatuk
---


Számos különböző GBARunner2 kiadás vagy "build" létezik, amelyeket használhatunk. A GBARunner2 különböző ágaiból és elágazásaiból származnak, és különböző funkciókkal rendelkeznek, amelyek vagy különböző GBA játékokat, vagy különböző funkciókat céloznak meg. **A legtöbb felhasználó számára** a TWiLightMenu++-hoz mellékelt build használata megfelelő.

## DS vs DSi vs 3DS Builds

A GBARunner2 olyan buildeket készített, amelyek kihasználják a DSi és a 3DS extra hardverét. Természetesen ezek a DSi- és 3DS-specifikus buildek nem működnek DS-en. Azonban akkor sem fognak működni, ha a GBARunner2-t flashcard-ról futtatod bármelyik rendszeren, beleértve a DSi-t és a 3DS-t is. Ennek részleteivel itt nem foglalkozunk.

Ez azt jelenti, hogy a DS-hez készült buildeket a DSi-n és a 3DS-en is használhatod, de fordítva nem.

## Megosztott buildek a DS, DSi és 3DS között

Ezek azok a build-ek amik mindhárom rendszeren jelen vannak.

### Master

The Master builds or "main" builds are the proper releases of GBARunner2. This should generally be the most stable build. All other branches than this one are considered expmerimental and not stable enough to be included into the Master. The Master builds are divided into different builds for the DS, DSi and 3DS. They each have the name of the corresponding system appended at the end of the filename.

### Wi-Fi-Link

The Wi-Fi-Link branch adds the possibility to link up two systems wirelessly. Note that this does not go over the Internet, and this will never be possible. Currently your mileage will vary, and the only sure-fire game that will be able to keep a stable connection is Advance Guardian Heroes, and that is provided that you follow very specific instructions. Needless to say, consider this branch in its current state a novelty and a proof of concept, and not something to actually use. A few other games are able to connect, but they are very dependent on external factors like interference from other Wi-Fi signals, among many other things.

## DS-specifikus build-ek

### ARM7DLDI vs ARM9DLDI

**Normally use the ARM9DLDI**, and if that does not work then try the ARM7DLDI. Some flashcards need either the ARM7DLDI or the ARM9DLDI, and some might work with both. There is no list of which flashcards work with which builds, but if you are running into issues getting GBARunner2 to run then you might want to try the other one.

There are no feature or performance differences between the two so there is no use in testing both to see if a game runs better or has less issues on the other.

See further down to find out what build you are currently using.

### ROM3M

If you are using TWiLightMenu++ then you are already using this feature in the GBARunner2 build that comes with it.

This branch might help if trying to run ROMs that are a bit larger on the DS, but there is a limit due to the limited amount of RAM present in the DS. This is basically the Pokémon Emerald branch for the DS.

Void Star made [a fork of GBARunner2](https://github.com/unresolvedsymbol/GBARunner2-DSL-Enhanced/releases) that combines this ROM3M branch with some other neat features, and this is the build that comes with TWiLightMenu++ if you are using a DS.

## DSi- és 3DS-specifikus build-ek

A DSi és a 3DS általában ugyanazokat a build-eket tudja futtatni, de a DSi és a 3DS közötti RAM mennyiség különbség miatt a játékok kompatibilitása eltérő lehet. Ez általában azt jelenti, hogy a DSi-nek ez gondot okozhat a nagyobb ROM-ok futtatásában, amelyeket a 3DS jól tud futtatni.

A 3DS-be továbbá egy gyorsulásmérő chip is be van építve a giroszkópos vezérléshez, és ez egy 3DS-specifikus build-ben használható.

### DSP

A DSP build-ek a DSi-ben és a 3DS-ben is megtalálható extra processzort használják. Ez sokkal jobb hangzást és jobb teljesítményt eredményez. Van néhány probléma, mint például néhány ROM, amely nem működik ezzel az ággal.

### Hybrid Hicode

A Hybrid Hicode ág olyan nagyméretű ROM-okkal foglalkozik, amelyeknek problémái vannak a Master ágon való futással. Ez egy nagyon hasznos ág a DSi számára, mivel ez nagyrészt megoldja azt a problémát, hogy kevesebb RAM-mal rendelkezik, mint a 3DS.

### 3DS-specifikus: Gyro

Ez az ág a 3DS belső gyorsulásmérőjét használja ki, így az ezzel a funkcióval rendelkező GBA játékok megfelelően játszhatók. Számos lépést kell megtenni ahhoz, hogy ez működjön. Ne feledd, hogy mivel a 3DS rendszerek különböző gyorsulásmérő chipekkel szereltek, ez nem fog működni minden 3DS-en, mivel nem minden chiphez van kód, ami támogatja őket.

Nincs konzisztencia abban, hogy melyik 3DS milyen chipet tartalmaz, legalábbis amennyire eddig ez ismert.

## A build információk megtalálása

A GBARunner2 rendelkezik egy menüvel, amelyet az érintőképernyő megérintésével és a jobb vállgomb megnyomásával nyithatsz meg. Ezen belül találod az About menüt, amelyből megtudhatod, hogy milyen build-et használsz. Azonban a TWiLightMenu++-szal együtt érkező build-ek nem adnak meg build verziót, mert mások által készített ágakon alapulnak. Ez azt jelenti, hogy ha az About page üresnek tűnik a build esetében, akkor valószínűleg ezek valamelyikét használod.

Ez megmondja, hogy ARM7DLDI vagy ARM9DLDI buildet használsz-e

Hasznos tudni, hogy milyen buildet kell használni, a hivatalos kompatibilitási lista ellenőrzésével, abban az esetben ha problémák merülnek fel egy játék futtatásával kapcsolatosan.

A kiadási azonosító (release ID) megtekinthető a GBARunner2 github repository-jában, ahol az utolsó hét alfanumerikus karakter a verziót jelenti. Például az aktuális legutolsó Master kiadás a "v20200812-131430_6e4ce45", és a "6e4ce45" jelöli a verziót.
