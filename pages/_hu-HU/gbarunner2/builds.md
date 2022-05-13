---
lang: hu-HU
layout: wiki
section: gbarunner2
title: GBARunner2 build-ek
description: A GBARunner különböző build-jeivel kapcsolatos további információk és használatuk
---


There are a number of different GBARunner2 releases, or "builds," which one can use. A GBARunner2 különböző ágaiból és elágazásaiból származnak, és különböző funkciókkal rendelkeznek, amelyek vagy különböző GBA játékokat, vagy különböző funkciókat céloznak meg. **For most users**, using the build that comes with **TW**i**L**ight Menu++ is enough.

## DS vs DSi vs 3DS Builds

GBARunner2 has had builds made that make use of the extra hardware found inside the DSi and 3DS. Naturally, these DSi and 3DS-specific builds will not work on a DS. Azonban akkor sem fognak működni, ha a GBARunner2-t flashcard-ról futtatod bármelyik rendszeren, beleértve a DSi-t és a 3DS-t is. Ennek részleteivel itt nem foglalkozunk.

Ez azt jelenti, hogy a DS-hez készült buildeket a DSi-n és a 3DS-en is használhatod, de fordítva nem.

## Megosztott buildek a DS, DSi és 3DS között

Ezek azok a build-ek amik mindhárom rendszeren jelen vannak.

### [Master](https://github.com/Gericom/GBARunner2/releases)

The Master builds, or "main" builds, are the proper releases of GBARunner2. Általában ez a legstabilabb build. Az összes többi ág ezen kívül kísérleti ágnak és nem elég stabilnak tekintett ahhoz, hogy bekerüljön a Master-be. A Master buildek a DS, a DSi és a 3DS számára készült különböző build-ekre oszlanak. Mindegyiknek a fájlneve végére hozzá lett illesztve a hozzá tartozó rendszer neve.

### [Wi-Fi-Link](https://github.com/Gericom/GBARunner2/releases/tag/v20200217-194452_0b8bbe3)

A Wi-Fi-Link ág lehetővé teszi két rendszer vezeték nélküli összekapcsolását. Note that this does not go over the Internet, and this will never be possible due to latency. A jelenlegi előrehaladás változó és az egyetlen biztosan stabil kapcsolatot tartani tudó az Advance Guardian Heroes és az is csak akkor, ha követed a nagyon speciális utasításokat. Mondani sem kell, hogy ezt az ág jelenlegi állapotában újdonságnak tekinthető és egy koncepció, nem olyannak, amit ténylegesen használni kell. Néhány más játék képes csatlakozni, de ezek nagyon függenek a külső tényezőktől, például más Wi-Fi jelek interferenciájától, sok más dolog mellett. To setup Wi-Fi liking, please see the [WikiTemp page](https://wiki.gbatemp.net/wiki/GBARunner2/Link).

## DS-specifikus build-ek

### ARM7DLDI vs ARM9DLDI

**Általában az ARM9DLDI-t használd**, és ha ez nem működik, akkor az ARM7DLDI-vel próbálkozz. Néhány flashcard-hoz vagy az ARM7DLDI vagy az ARM9DLDI szükséges, néhány pedig mindkettővel működhet. Nincs lista arról, hogy melyik flashcard melyik build-del működik, de ha problémáid vannak a GBARunner2 futtatásával, akkor érdemes a másikat kipróbálni.

If you are using **TW**i**L**ight Menu++ on your flashcard, you can switch between ARM7DLDI and ARM9DLDI in the **TW**i**L**ight Menu++ settings.

There are no feature or performance differences between the two so there is no use in testing both to see if a game runs better or has less issues on the other.

See further down to find out what build you are currently using.

### [rom3M](https://github.com/Gericom/GBARunner2/releases/tag/v20190911-201047_371815e)

Ez az ág segíthet, ha olyan ROM-okat próbálsz futtatni a DS-en, amik nagyobbak, de van egy korlát a DS található korlátozott mennyiségű RAM miatt. Ez lényegében a Pokémon Emerald ág a DS-re.

Void Star made [a fork of GBARunner2](https://github.com/unresolvedsymbol/GBARunner2-DSL-Enhanced/releases) that merges the rom3M branch into the latest Master with some other neat features, and this is the build that comes with **TW**i**L**ight Menu++ if you are using a DS.

## DSi- és 3DS-specifikus build-ek

A DSi és a 3DS általában ugyanazokat a build-eket tudja futtatni, de a DSi és a 3DS közötti RAM mennyiség különbség miatt a játékok kompatibilitása eltérő lehet. This means that the DSi might have trouble running larger ROMs that the 3DS can run fine.

A 3DS-be továbbá egy gyorsulásmérő chip is be van építve a giroszkópos vezérléshez, és ez egy 3DS-specifikus build-ben használható.

### [DSP](https://github.com/Gericom/GBARunner2/releases/tag/v20200809-113646_551ae99_dsp-audio)

If you are using **TW**i**L**ight Menu++, then you are already using this feature in the GBARunner2 build that comes with it.

The DSP builds make use of the digital sound processor present in both DSi and 3DS. This helps to produce a lot better sound and give better performance. There are some regressions, like a couple of ROMs that do not work in this branch.

### [Hybrid Hicode](https://github.com/Gericom/GBARunner2/releases/tag/v20200812-130512_d5dc8d8)

If you are using **TW**i**L**ight Menu++, then you are already using this feature in the GBARunner2 build that comes with it.

The Hybrid Hicode branch deals with ROMs that are large and have problems running on the Master branch. This is a very useful branch for the DSi since this mostly solves the issue with having less RAM than the 3DS.

### [Hicode/DSP merge](https://github.com/therealteamplayer/GBARunner2/releases/tag/v20210911-merges-and-tweaks)

This fork by therealteamplayer merges the Hicode and DSP branches into one build, along with some other tweaks listed in the release notes. This build is currently used by **TW**i**L**ight Menu++ for the DSi/3DS SD card.

### 3DS-Specific: [Gyro](https://github.com/Gericom/GBARunner2/releases/tag/v20191228-021638_ee7f6a0)

This branch makes use of the internal accelerometer in the 3DS so that GBA games that had this functionality can be played properly. There are several steps needed to take to make it work. Note that since there are different accelerometer chips between 3DS systems, this will not work on all 3DSes because all chips do not have code supporting them.

There is no consistency in what type of 3DS has what chip, at least as far as anyone knows.

## A build információk megtalálása

GBARunner2 has a menu that you can open by touching the touchscreen and pressing the right shoulder button. Within this you can find the About menu, which tells you which build you are on. However, the builds that currently come with **TW**i**L**ight Menu++ do not report a build version because they are based on forks by other people. This means that if your About page shows blank for build, you are most likely using one of these.

The About page also tells you if you are using an ARM7DLDI or ARM9DLDI build.

Knowing which build to use is useful when checking the official compatibility list, in case you are having issues with running a game.

The release ID can be seen on the release page of the GBARunner2's github repository, where the last seven alphanumeric symbols represent the version. For example, the current latest Master release is "v20200812-131430_6e4ce45" and "6e4ce45" is used to represent its version.
