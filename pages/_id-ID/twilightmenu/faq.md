---
lang: en-US
layout: faq
section: twilightmenu
category: other
title: FAQ & Troubleshooting
long_title: TWiLight Menu++ FAQ & Troubleshooting
description: FAQs and troubleshooting for TWiLight Menu++
---

For more FAQs, please visit the [GBAtemp thread](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### Why does my 3DS get stuck on black screens, crash, power off, etc when launching TWiLight Menu++?
TWL_FIRM might've somehow got corrupted. Follow this guide to fix the issue: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### How do I fix getting a white screen when booting TWiLight Menu++?
- First, try putting the console in sleep mode (e.g. closing the console's lid, or pressing the sleep button on the O2DS), then wake up the console from it
- If that doesn't work, format your SD card to FAT32 with 32 KB cluster/allocation size
- If that also doesn't work, try a different SD card

#### Where is the Acekard/Wood UI theme?
The Acekard (also called Wood UI) theme was removed due to its buggy behavior and causing SD card corruption. Please wait for a fix. Progress for the return of this theme can be found in [this PR](https://github.com/DS-Homebrew/TWiLightMenu/pull/1109).

#### How do I fix TWiLight Menu++ restarting or giving a Guru Meditation Error when launching a game?
Go into TWLMenu++ Settings, and disable `Update recently played list`.

#### Why do I get a white screen when trying to load a DS game from SD card?
See [I’m having issues with my ROM(s), what should I do?](../nds-bootstrap/faq?faq=im-having-issues-with-my-roms-what-should-i-do) on the nds-bootstrap FAQ page.

#### How do I use cheats?
You need to have a cheat DB in the form of a `usrcheat.dat` file in the `sd:/_nds/TWiLightMenu/extras/` folder. The most updated cheat database is [DeadSkullzJr's](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/).
- On the 3DS, this database is available in the Universal-Updater app as "NDS Cheat Databases." This will automatically install it to the required location.

Alternatively, you can use [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) to create your own cheat DB.

#### How do I show a custom picture on the top screen of the DSi theme?
A random `.png` image in `sd:/_nds/TWiLightMenu/dsimenu/photos/` will be shown each time the menu is loaded. If there are no applicable images, screenshots taken by nds-bootstrap will be used instead.

- The images(s) must be no bigger than 208x156
- If you have errors, it's most likely an error with the image size. Please use [tinypng](https://tinypng.com) to reduce the size

#### How do I get games?
You can download homebrew games from [Universal-DB](https://db.universal-team.net/ds) and [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games). To get dumps of your retail games:
- On DS you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your GBA games and, if you have a Slot-2 flashcart, DS games. If you only have a Slot-1 flashcard and would like to dump a DS game, you can use [Wooddumper](https://digiex.net/attachments/wooddumper_r89-zip.14735/), which requires a Wi-Fi connection compatible with the DS, as well as an FTP client on a separate device to receive the ROM
- On DSi you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your DS games and DSiWare
- On 3DS you can use [GodMode9](https://github.com/d0k3/GodMode9/releases) to dump your DS games, DSiWare, and Virtual Console titles

#### Can I get the save files from my Game Cards onto my SD card or vice versa?
Yes, you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) on DSi and 3DS or [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) on 3DS.

#### How do I change TWiLight Menu++'s language?
1. Open TWiLight Menu++ settings, you can do this by holding <kbd>SELECT</kbd> while loading TWiLight Menu++
1. Press <kbd class="l">L</kbd> or <kbd class="face">Y</kbd> once (on flashcard/3DS) or twice (on DSi)
1. Change the first option until you see the language you want, then exit settings
   - You may also want to change the next two options as they control the language of DS games and their titles in TWiLight Menu++

#### Is this a DS(i) emulator?
No, this is not an emulator. The menu and DS games (loaded via nds-bootstrap) are ran natively in the console's DS/DSi mode. The only consoles emulated are the past consoles, but partially for GBA (as some or all parts like graphics are ran natively).

#### What systems does TWiLight Menu++ support?
See [List of Systems Supported by TWiLight Menu++](../ds-index/emulators#list-of-supported-systems-by-twilight-menu).

#### Bisakah eksploit permainan Slot-1 mengawal nyala (boot) TWiLight Menu++?
Tidak. Karena bukan judul DSiWare, maka akses kartu SD dilumpuhkan ketika menjalankan kartu Slot-1.

#### Kenapa permainan saya susah dicari/dilihat?
Ada beberapa alasan kenapa ROM Anda tidak dapat dicari.
- If you placed your games in the `_nds` folder, you are unable to access it because it is permanently invisible in TWiLight Menu++. Please move them to any other location on the SD card
- If you have more than 39 items in a folder and all of the slots on the menu are taken, your games may be on the next page. Use <kbd class="l">L</kbd>/<kbd class="r">R</kbd> or <kbd>SELECT</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd> to switch pages
- If your game or folder is hidden, you may need to show hidden files via TWiLight Menu++'s GUI settings
- Jika jenis permainan diubah jadi tersembunyi di pengaturan Emulasi/HB, di menu tidak akan muncul. Ubah pengaturan-pengaturan ini agar dapat ditampilkan
- Jika permainan ada di dalam arsip (`zip`, `rar`, `7z`, dll.), TWiLight Menu++ tidak bisa menggunakannya. Ekstrak permainannya dari arsip untuk digunakan
- If your game does not use one of the [supported extensions](../ds-index/emulators#list-of-systems-supported-by-twilight-menu), you may have to change the extension by renaming the file

#### How do I access TWiLight Menu++ settings?
The way to access the TWiLight Menu++ settings varies between your configuration.
- **DS Classic Menu:** Tap the DS icon at the bottom of the lower screen
- **Nintendo DSi/SEGA Saturn/Homebrew Launcher themes: using SELECT Menu:** Press <kbd>SELECT</kbd>, then launch the Settings Applet (use the D-PAD to highlight options)
- **Nintendo DSi/SEGA Saturn/Homebrew Launcher themes not using SELECT Menu:** Hitting <kbd>SELECT</kbd> will bring you to the DS Classic Menu
- **Nintendo 3DS theme:** Tap the the wrench icon on the lower screen
- **R4 Original theme:** Hit <kbd>START</kbd> (if you’re in the file browser), then hit <kbd>SELECT</kbd>

You can also hold <kbd>SELECT</kbd> while launching TWiLight Menu++ to directly access the settings.