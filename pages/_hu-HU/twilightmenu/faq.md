---
lang: hu-HU
layout: faq
section: twilightmenu
title: GYIK & hibaelhárítás
long_title: TWiLight Menu++ GYIK & hibaelhárítás
description: TWiLight Menu++ GYIK és hibaelhárítás
---

További GYIK-ért látogassa meg a [GBAtemp üzenetszálat](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### Miért történik, hogy a 3DS eszközöm, fekete képernyőn ragad, összeomlik, kikapcsol, stb. amikor elindítom a TWiLight Menu++-t?
A TWL_FIRM elképzelhető, hogy valahogy megsérült. Kövesd ezt az útmutatót a hiba javításához: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### Hogyan javítom, ha fehér képernyőt kapok a TWiLight Menu++ bootolásakor?
- Indítsd újra a konzolt
- Ha ez nem működik, formázd az SD kártyádat FAT32-re 32 KB cluster/foglalási mérettel
   - Tekintsd meg a [dsi.cfw.guide oldalt](https://dsi.cfw.guide/sd-card-setup.html) az ajánlott eszközökért
- Ha ez sem működik, próbálj egy másik SD kártyát

#### How do I fix touch screen not working after launching a game?
- If you're launching a cartridge, then make sure the `Slot-1 Touch Mode` setting is set to `DS mode`
- If the issue persists, or if you're using a ROM instead, then follow this guide: https://gbatemp.net/threads/recover-ds-mode-after-an-nvram-brick-eg-after-using-a-ds-bricker.516444/

#### Where is the Acekard/Wood UI theme?
Az Acekard (másként Wood UI) téma eltávolításra került a hibás működése miatt és mert SD kártya hibát eredményez. Kérjük várj a javítására. A téma visszatérésének menetrendje megtalálható ebben a [PR cikkben](https://github.com/DS-Homebrew/TWiLightMenu/pull/1109).

#### How do I fix TWiLight Menu++ restarting or giving a Guru Meditation Error when launching a game?
Menj a TWLMenu++ beállításaiba és kapcsold ki a `Utoljára játszott lista frissítés` opciót.

#### Why do I get a white screen when trying to load a DS game from SD card?
Lásd a [Problémáim vannak a ROM(ok)-mal, mit tegyek?](../nds-bootstrap/faq?faq=im-having-issues-with-my-roms-what-should-i-do) fejezetet az nds-bootstrap GYIK oldalon.

#### How do I use cheats?
Szükséged van egy csalás adatbázisra a `usrcheat.dat` fájl formájában, az `sd:/_nds/TWiLightMenu/extras/` mappában. A leginkább frissített csalás adatbázis [DeadSkullzJr NDS(i) Cheat Databases](https://gbatemp.net/threads/488711/) adatbázisa.
- On the 3DS, this database is available in the Universal-Updater app as "NDS(i) Cheat Databases". This will automatically install it to the required location.

Alternatívaként használhatod az [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html)-t, hogy létrehozd a saját csalás adatbázisod.

Ha már van cheat DB-d, akkor a csalásokat a TWiLight menüben a <kbd class="face">Y</kbd> megnyomásával engedélyezheted, ami a játékonkénti beállításokat nyitja meg, majd a <kbd class="face">X</kbd> gombbal nyitohatod meg a csalások menüt.

#### How do I show a custom picture on the top screen of the DSi theme? Can I hide it instead?
Egy véletlen `.png` kép az `sd:/_nds/TWiLightMenu/dsimenu/photos/` mappából kerül megjelenítésre minden alkalommal, amikor a menü betöltésre kerül. Ha nincsennek használható képek, akkor az nds-bootstrap által készített képernyőképek kerülnek felhasználásra.

- The images(s) must be no bigger than 208x156
- If you have errors, it's most likely an error with the image size. Please use [tinypng](https://tinypng.com) to reduce the size

A kép elrejtéséhez a `theme.ini` fájlt kell szerkesztened, amely a `sd:/_nds/TWiLightMenu/dsimenu/themes/[skin mappa]/` mappában található. Nyisd meg a fájlt egy szövegszerkesztővel, módosítsd a `RenderPhoto` sort `1` -ről `0-ra`, majd mentsd el a fájlt.

#### How do I get games?
Homebrew játékokat az [Universal-DB](https://db.universal-team.net/ds)-ből és a [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games)-ról tölthetsz le. A kereskedelmi játékaid dumpolásához:
- On DS you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your GBA games and, if you have a Slot-2 flashcart, DS games. If you only have a Slot-1 flashcard and would like to dump a DS game, you can use [Wooddumper](https://digiex.net/attachments/wooddumper_r89-zip.14735/), which requires a Wi-Fi connection compatible with the DS, as well as an FTP client on a separate device to receive the ROM
- On DSi you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your DS games and DSiWare
- On 3DS you can use [GodMode9](https://github.com/d0k3/GodMode9/releases) to dump your DS games, DSiWare, and Virtual Console titles

#### Can I get the save files from my Game Cards onto my SD card or vice versa?
Igen. Használhatod erre a [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases)-ot 3DS-en vagy a [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) DSi-n / 3DS-en.

#### How do I change TWiLight Menu++'s language?
1. Nyisd meg a TWiLight Menu++ beállításokat, ezt a <kbd>SELECT</kbd> gomb nyomvatartásával tudod megtenni, a TWiLight Menu++ betöltésekor
1. Módosítsd az első opciót, amíg nem látod a nyelvet, amit szeretnél, majd lépj ki a beállításokból
   - Elképzelhető, hogy módosítanád az első három opciót, az nds-bootstrap beállítások oldalon, ami a DS játékok és címeik nyelvét és régióját befolyásolja a a TWiLight Menu++-ban

#### Is this a DS(i) emulator?
Nem, ez nem egy emulátor. A menü és a DS játékok (nds-bootstrap-en keresztül betöltve) natívan futnak a konzol DS/DSi módjában. Csak a korábbi idők konzoljai kerülnek emulálásra, illetve részben a GBA (mivel egy része vagy az összes, mint például a grafika natívan fut).

#### What systems does TWiLight Menu++ support?
Tekintsd meg [TWiLight Menu++ által támogatott rendszerek listáját](../ds-index/emulators#list-of-supported-systems-by-twilight-menu).

#### Can exploits of Slot-1 games boot TWiLight Menu++?
Nem. Az SD kártyához hozzáférés csak a DSiWare alkalmazások számára biztosított, így a Slot-1 játékok nem tudják elindítani (vagy egyáltalán elérni) a TWiLight Menu++-t.

#### Why can't I find/see my games?
Több oka lehet, hogy nem találod őket.
- The `_nds` folder found on the root of the SD card is not intended for applications one would access via TWiLight Menu++, due to its reservation for functionality based files (skins, configuration, images, emulators and more). If you've placed your titles here, please move them to another location.
- If you have more than 39 items in a folder and all of the slots on the menu are taken, your games may be on the next page. Use <kbd class="l">L</kbd>/<kbd class="r">R</kbd> or <kbd>SELECT</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd> to switch pages
- If your game or folder is hidden, you may need to show hidden files via TWiLight Menu++'s GUI settings
- If your game is in an archive (`zip`, `rar`, `7z`, etc), it cannot be used by TWiLight Menu++. Extract the game from the archive to use it
- If your game does not use one of the [supported extensions](../ds-index/emulators#list-of-systems-supported-by-twilight-menu), you may have to change the extension by renaming the file

#### How do I access TWiLight Menu++ settings?
A TWiLight Menu++ beállításainak elérési módja a konfigurációtól függő.
- **DS Classic Menu:** Tap the DS icon at the bottom of the lower screen
- **Nintendo DSi/SEGA Saturn/Homebrew Launcher themes: using SELECT Menu:** Press <kbd>SELECT</kbd>, then launch the Settings Applet (use the D-PAD to highlight options)
- **Nintendo DSi/SEGA Saturn/Homebrew Launcher themes not using SELECT Menu:** Hitting <kbd>SELECT</kbd> will bring you to the DS Classic Menu
- **Nintendo 3DS theme:** Tap the the wrench icon on the lower screen
- **R4 Original theme:** Hit <kbd>START</kbd> (if you’re in the file browser), then hit <kbd>SELECT</kbd>

Továbbá nyomva tarthatod a <kbd>SELECT</kbd> gombot a TWiLight Menu++ indításakor, ami közvetlenül a beállításokhoz visz.

#### How do I use custom icons/banners for games?
Egyedi bannereker PNG vagy DS banner.bin formátumban úgy használhatsz, hogy berakod az `sd:/_nds/TWiLightMenu/icons` mappába a ROM vagy a mappa nevén (beleértve a kiterjesztést) + `.png` vagy `.bin`.

A PNG bannerekhet egy PNG fájlra van szükséged 15 vagy kevesebb színnel és maximum 32x32 felbontással. A teljes átlátszóság működik, és nem számít bele a 15 színbe, de a félig átlátszóság nem működik.

A banner.bin típusú bannerek animálhatók, és lehetővé teszik a TWiLight Menu++-ban megjelenő cím cseréjét. They can be made using [NDS Banner Editor](https://github.com/TheGameratorT/NDS_Banner_Editor/releases).

Előre lekésztett bannerek találhatók az [ikonok szekciójában a TWiLight Menu++ szkinek oldalon](https://skins.ds-homebrew.com/icon/) és ha késztesz egyet, azok meg is oszhatók ott.

#### How do I install custom themes for TWiLight Menu++?
Egyedi szkinek a témákhoz beszerezhetők [a hivatalos szkin oldalról](https://skins.ds-homebrew.com/), amely számos közösségi készítésű szkinnek ad otthont felhasználásra készen. Egyedi szkineket is készíthetsz a Nintendo 3DS és Nintendo DSi témákhoz [ezen útmutató](https://wiki.ds-homebrew.com/twilightmenu/custom-dsi-3ds-skins) alapján. A **Homebrew Launcher**, a **Sega Saturn** ésd **Game Boy Color** témák _**nem**_ módosíthatók.

Miután beszereztél egy egyéni szkint, telepíteni tudod azzal, hogy a megfelelő útvonalra rakod, ami függ attól, hogy melyik témához készült a szkin.
- Skins for the Nintendo DSi theme go in `sd:\_nds\TWiLightMenu\dsimenu\themes\`
- Skins for the Nintendo 3DS theme go in `sd:\_nds\TWiLightMenu\3dsmenu\themes\`
- Skins for the R4 Original theme go in `sd:\_nds\TWiLightMenu\r4menu\themes\`

Ha a 3DS csláadba tartozó konzolt használsz, az egyedi szkinek telepíthetők az [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases) használatával. Menj az Universal-Updater beállításaiba, majd `UniStore választás...`, `+`, `TWiLight Menu++ Skins`.

Az egyedi témák beállításához hozzá kell férned a TWiLight Menu++ beállításaihoz.
1. A `GUI beállítások` oldalon navigálj a `Téma` opcióhoz, majd válaszd ki a témát a D-Pad bal és jobb gombjával.
1. Ha a cél téma kiválasztásra került, nyomd meg az A gombot, hogy választhass a szkinek közül, ami telepítve van.
1. A D-Pad fel-le gombjaival jelöld ki a kívánt szkint, majd nyomd meg az A gombot a kiválasztásához.
1. Alkalmazd a beállításokat a B gomb megnyomásával és hogy vissza kerülj a TWiLight Menu++-ba.

A TWiLight Menu++-nak mostantól egyéni megjelenést (és zenét, ha a kiválasztott szkin támogatja és engedélyezve van a beállításokban) kell kapnia.

#### Is there a 3DS emulator for DS(i)?
Nem, nincs. A 3DS-t nem lehet emulálni a DS(i)-en, mivel a 3DS újabb hardvert használ.
