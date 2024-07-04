---
lang: hu-HU
layout: wiki
section: gbarunner2
title: GBARunner2 build-ek
description: A GBARunner különböző build-jeivel kapcsolatos további információk és használatuk
---


Számos különböző GBARunner2 kiadás vagy "build" létezik, amelyeket használhatunk. A GBARunner2 különböző ágaiból és elágazásaiból származnak, és különböző funkciókkal rendelkeznek, amelyek vagy különböző GBA játékokat, vagy különböző funkciókat céloznak meg. **A legtöbb felhasználó számára** a **TW**i**L**ight Menu++-hoz mellékelt build használata megfelelő.

## DS vs DSi vs 3DS Builds

A GBARunner2 olyan buildeket is készített, amelyek kihasználják a DSi és a 3DS extra hardverét. Természetesen ezek a DSi és 3DS-specifikus buildek nem működnek DS-en. Azonban akkor sem fognak működni, ha a GBARunner2-t flashcard-ról futtatod bármelyik rendszeren, beleértve a DSi-t és a 3DS-t is. Ennek részleteivel itt nem foglalkozunk.

Ez azt jelenti, hogy a DS-hez készült buildeket a DSi-n és a 3DS-en is használhatod, de fordítva nem.

## Megosztott buildek a DS, DSi és 3DS között

Ezek azok a build-ek amik mindhárom rendszeren jelen vannak.

### [Master](https://github.com/Gericom/GBARunner2/releases)

A Master buildek vagy "fő" buildek a GBARunner2 megfelelő kiadásai. Általában ez a legstabilabb build. Az összes többi ág ezen kívül kísérleti ágnak és nem elég stabilnak tekintett ahhoz, hogy bekerüljön a Master-be. A Master buildek a DS, a DSi és a 3DS számára készült különböző build-ekre oszlanak. Mindegyiknek a fájlneve végére hozzá lett illesztve a hozzá tartozó rendszer neve.

### [Wi-Fi-Link](https://github.com/Gericom/GBARunner2/releases/tag/v20200217-194452_0b8bbe3)

A Wi-Fi-Link ág lehetővé teszi két rendszer vezeték nélküli összekapcsolását. Fontos megjegyezni, hogy nem az Interneten keresztül és az nem is lesz soha lehetséges a látencia miatt. A jelenlegi előrehaladás változó és az egyetlen biztosan stabil kapcsolatot tartani tudó az Advance Guardian Heroes és az is csak akkor, ha követed a nagyon speciális utasításokat. Mondani sem kell, hogy ezt az ág jelenlegi állapotában újdonságnak tekinthető és egy koncepció, nem olyannak, amit ténylegesen használni kell. Néhány más játék képes csatlakozni, de ezek nagyon függenek a külső tényezőktől, például más Wi-Fi jelek interferenciájától, sok más dolog mellett. A Wi-Fi Linking beállításához lásd a [WikiTemp oldalát](https://wiki.gbatemp.net/wiki/GBARunner2/Link).

## DS-specifikus build-ek

### ARM7DLDI vs ARM9DLDI

**Általában az ARM9DLDI-t használd**, és ha ez nem működik, akkor az ARM7DLDI-vel próbálkozz. Néhány flashcard-hoz vagy az ARM7DLDI vagy az ARM9DLDI szükséges, néhány pedig mindkettővel működhet. Nincs lista arról, hogy melyik flashcard melyik build-del működik, de ha problémáid vannak a GBARunner2 futtatásával, akkor érdemes a másikat kipróbálni.

Ha a **TW**i**L**ight Menu++-t használod a flashkártyán, akkor a **TW**i**L**ight Menu++ beállításaiban válthatsz az ARM7DLDI és ARM9DLDI között.

A kettő között nincsenek funkció- vagy teljesítménybeli különbségek, így nincs értelme mindkettőt tesztelni, hogy kiderüljön, egy játék jobban fut-e vagy kevesebb problémája van-e a másikon.

Lásd lejjebb az információkat, hogy megtudhasd, milyen buildet használsz jelenleg.

### [rom3M](https://github.com/Gericom/GBARunner2/releases/tag/v20190911-201047_371815e)

Ez az ág segíthet, ha olyan ROM-okat próbálsz futtatni a DS-en, amik nagyobbak, de van egy korlát a DS található korlátozott mennyiségű RAM miatt. Ez lényegében a Pokémon Emerald ág a DS-re.

Void Star készített egy [a GBARunner2 ágat](https://github.com/unresolvedsymbol/GBARunner2-DSL-Enhanced/releases), amely egyesíti ezt a rom3M ágat néhány más hasznos funkcióval, és ez az a build, amelyet a **TW**i**L**ight Menu++ tartalmaz, ha DS-t használsz.

## DSi- és 3DS-specifikus build-ek

A DSi és a 3DS általában ugyanazokat a build-eket tudja futtatni, de a DSi és a 3DS közötti RAM mennyiség különbség miatt a játékok kompatibilitása eltérő lehet. Ez azt jelenti, hogy a DSi-nek ez gondot okozhat a nagyobb ROM-ok futtatásában, amelyeket a 3DS jól tud futtatni.

A 3DS-be továbbá egy gyorsulásmérő chip is be van építve a giroszkópos vezérléshez, és ez egy 3DS-specifikus build-ben használható.

### [DSP](https://github.com/Gericom/GBARunner2/releases/tag/v20200809-113646_551ae99_dsp-audio)

Ha **TW**i**L**ight Menu++-t használod, akkor már használod ezt a funkciót azzal a GBARunner2 build-del, ami vele érkezik.

A DSP build-ek a DSi-ben és a 3DS-ben is megtalálható digitális hang processzort használják. Ez sokkal jobb hangzást és jobb teljesítményt eredményez. Van néhány probléma, mint például néhány ROM, amely nem működik ezzel az ággal.

### [Hybrid Hicode](https://github.com/Gericom/GBARunner2/releases/tag/v20200812-130512_d5dc8d8)

Ha **TW**i**L**ight Menu++-t használod, akkor már használod ezt a funkciót azzal a GBARunner2 build-del, ami vele érkezik.

A Hybrid Hicode ág olyan nagyméretű ROM-okkal foglalkozik, amelyeknek problémái vannak a Master ágon való futással. Ez egy nagyon hasznos ág a DSi számára, mivel ez nagyrészt megoldja azt a problémát, hogy kevesebb RAM-mal rendelkezik, mint a 3DS.

### [Hicode/DSP egyesítés](https://github.com/therealteamplayer/GBARunner2/releases/tag/v20210911-merges-and-tweaks)

A therealteamplayer által készített fork egyesíti a Hicode és a DSP ágakat egy buildbe néhány más, a kiadási megjegyzésekben felsorolt módosítással együtt. Ez a build használt a **TW**i**L**ight Menu++-ban DSi/3DS SD kártyákra.

### 3DS-Specifikus: [Gyro](https://github.com/Gericom/GBARunner2/releases/tag/v20191228-021638_ee7f6a0)

Ez az ág a 3DS belső gyorsulásmérőjét használja ki, így az ezzel a funkcióval rendelkező GBA játékok megfelelően játszhatók. Számos lépést kell megtenni ahhoz, hogy ez működjön. Ne feledd, hogy mivel a 3DS rendszerek különböző gyorsulásmérő chipekkel szereltek, ez nem fog működni minden 3DS-en, mivel nem minden chiphez van kód, ami támogatja őket.

Nincs konzisztencia abban, hogy melyik 3DS milyen chipet tartalmaz, legalábbis amennyire eddig ez ismert.

## A build információk megtalálása

A GBARunner2 rendelkezik egy menüvel, amelyet az érintőképernyő megérintésével és a jobb vállgomb megnyomásával nyithatsz meg. Ezen belül találod az About menüt, amelyből megtudhatod, hogy milyen build-et használsz. Azonban a **TW**i**L**ight Menu++-szal együtt érkező build-ek nem adnak meg build verziót, mert mások által készített ágakon alapulnak. Ez azt jelenti, hogy ha az About page üresnek tűnik a build esetében, akkor valószínűleg ezek valamelyikét használod.

Az About oldal továbbá megmondja, hogy ARM7DLDI vagy ARM9DLDI buildet használsz-e.

Hasznos tudni, hogy milyen buildet kell használni, a hivatalos kompatibilitási lista ellenőrzésével, abban az esetben ha problémák merülnek fel egy játék futtatásával kapcsolatosan.

A kiadási azonosító (release ID) megtekinthető a GBARunner2 github repository-jában, ahol az utolsó hét alfanumerikus karakter a verziót jelenti. Például az aktuális legutolsó Master kiadás a "v20200812-131430_6e4ce45", és a "6e4ce45" jelöli a verziót.
