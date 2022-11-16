---
lang: en-US
layout: faq
section: twilightmenu
title: FAQ & Troubleshooting
long_title: TWiLight Menu++ FAQ & Troubleshooting
description: FAQs and troubleshooting for TWiLight Menu++
---

For more FAQs, please visit the [GBAtemp thread](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### Why does my 3DS get stuck on black screens, crash, power off, etc when launching TWiLight Menu++?
TWL_FIRM might've somehow got corrupted.
Follow this guide to fix the issue: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### How do I fix getting a white screen when booting TWiLight Menu++?
- Reboot the console
- If that doesn't work, format your SD card to FAT32 with 32 KB cluster/allocation size
   - See [dsi.cfw.guide's page](https://dsi.cfw.guide/sd-card-setup.html) for the recommended tools
- If that also doesn't work, try a different SD card

#### Where is the Acekard/Wood UI theme?
The Acekard (also called Wood UI) theme was removed due to its buggy behavior and causing SD card corruption. Please wait for a fix. Progress for the return of this theme can be found in [this PR](https://github.com/DS-Homebrew/TWiLightMenu/pull/1109).

#### How do I fix TWiLight Menu++ restarting or giving a Guru Meditation Error when launching a game?
Go into TWLMenu++ Settings, and disable `Update recently played list`.

#### Why do I get a white screen when trying to load a DS game from SD card?
See [I’m having issues with my ROM(s), what should I do?](../nds-bootstrap/faq?faq=im-having-issues-with-my-roms-what-should-i-do) on the nds-bootstrap FAQ page.

#### How do I use cheats?
You need to have a cheat DB in the form of a `usrcheat.dat` file in the `sd:/_nds/TWiLightMenu/extras/` folder. The most updated cheat database is [DeadSkullzJr's NDS(i) Cheat Databases](https://gbatemp.net/threads/488711/). 
- On the 3DS, this database is available in the Universal-Updater app as "NDS(i) Cheat Databases". This will automatically install it to the required location.

Alternatively, you can use [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) to create your own cheat DB.

Once you have a cheat DB, you can enable cheats by pressing <kbd class="face">Y</kbd> in TWiLight Menu++ when the cursor is on the game to open the per-game settings, then <kbd class="face">X</kbd> to open the cheats menu.

#### How do I show a custom picture on the top screen of the DSi theme? Can I hide it instead?
A random `.png` image in `sd:/_nds/TWiLightMenu/dsimenu/photos/` will be shown each time the menu is loaded. If there are no applicable images, screenshots taken by nds-bootstrap will be used instead.

- The images(s) must be no bigger than 208x156
- If you have errors, it's most likely an error with the image size. Please use [tinypng](https://tinypng.com) to reduce the size

As for hiding the picture, you need to edit the `theme.ini` file found in `sd:/_nds/TWiLightMenu/dsimenu/themes/[skin folder]/`. Open the file with a text editor, change the line `RenderPhoto` from `1` to `0`, then save the file.

#### How do I get games?
You can download homebrew games from [Universal-DB](https://db.universal-team.net/ds) and [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games). To get dumps of your retail games:
- On DS you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your GBA games and, if you have a Slot-2 flashcart, DS games. If you only have a Slot-1 flashcard and would like to dump a DS game, you can use [Wooddumper](https://digiex.net/attachments/wooddumper_r89-zip.14735/), which requires a Wi-Fi connection compatible with the DS, as well as an FTP client on a separate device to receive the ROM
- On DSi you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your DS games and DSiWare
- On 3DS you can use [GodMode9](https://github.com/d0k3/GodMode9/releases) to dump your DS games, DSiWare, and Virtual Console titles

#### Can I get the save files from my Game Cards onto my SD card or vice versa?
Yes. You can use [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) on 3DS, or [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) on DSi / 3DS.

#### How do I change TWiLight Menu++'s language?
1. Open TWiLight Menu++ settings, you can do this by holding <kbd>SELECT</kbd> while loading TWiLight Menu++
1. Change the first option until you see the language you want, then exit settings
   - You may also want to change the first three options on the nds-bootstrap settings page as they control the language and region of DS games and their titles in TWiLight Menu++

#### Is this a DS(i) emulator?
No, this is not an emulator. The menu and DS games (loaded via nds-bootstrap) are ran natively in the console's DS/DSi mode. The only consoles emulated are the past consoles, but partially for GBA (as some or all parts like graphics are ran natively).

#### What systems does TWiLight Menu++ support?
See [List of Systems Supported by TWiLight Menu++](../ds-index/emulators#list-of-supported-systems-by-twilight-menu).

#### Can exploits of Slot-1 games boot TWiLight Menu++?
No. SD card access is only granted to DSiWare applications, so Slot-1 games cannot launch (or even access) TWiLight Menu++.

#### Why can't I find/see my games?
There are a multiple reasons you may be unable to find them.
- The `_nds` folder found on the root of the SD card is not intended for applications one would access via TWiLight Menu++, due to its reservation for functionality based files (skins, configuration, images, emulators and more). If you've placed your titles here, please move them to another location.
- If you have more than 39 items in a folder and all of the slots on the menu are taken, your games may be on the next page. Use <kbd class="l">L</kbd>/<kbd class="r">R</kbd> or <kbd>SELECT</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd> to switch pages
- If your game or folder is hidden, you may need to show hidden files via TWiLight Menu++'s GUI settings
- If your game is in an archive (`zip`, `rar`, `7z`, etc), it cannot be used by TWiLight Menu++. Extract the game from the archive to use it
- If your game does not use one of the [supported extensions](../ds-index/emulators#list-of-systems-supported-by-twilight-menu), you may have to change the extension by renaming the file

#### How do I access TWiLight Menu++ settings?
The way to access the TWiLight Menu++ settings varies between your configuration.
- **DS Classic Menu:** Tap the DS icon at the bottom of the lower screen
- **Nintendo DSi/SEGA Saturn/Homebrew Launcher themes: using SELECT Menu:** Press <kbd>SELECT</kbd>, then launch the Settings Applet (use the D-PAD to highlight options)
- **Nintendo DSi/SEGA Saturn/Homebrew Launcher themes not using SELECT Menu:** Hitting <kbd>SELECT</kbd> will bring you to the DS Classic Menu
- **Nintendo 3DS theme:** Tap the the wrench icon on the lower screen
- **R4 Original theme:** Hit <kbd>START</kbd> (if you’re in the file browser), then hit <kbd>SELECT</kbd>

You can also hold <kbd>SELECT</kbd> while launching TWiLight Menu++ to directly access the settings.

#### How do I use custom icons/banners for games?
You can use a custom banner in either PNG or DS banner.bin format by placing it in the `sd:/_nds/TWiLightMenu/icons` folder with the name of the ROM (including the extension) or folder + `.png` or `.bin`.

For PNG banners you simply need any PNG file with 15 colors or fewer and a maximum resolution of 32x32. Full transparency works and does not count towards the 15 colors, but semitransparency does not work.

banner.bin type banners are able to be animated and allow you to replace the title that will be shown in TWiLight Menu++. They can be made using [NDS Banner Editor](https://github.com/TheGameratorT/NDS_Banner_Editor/releases), it's currently recommended to use the [nightly version](https://nightly.link/TheGameratorT/NDS_Banner_Editor/workflows/build/master) as it has several improvements over the stable release.

Pre-made banners can be found in the [icons section of the TWiLight Menu++ skins site](https://skins.ds-homebrew.com/icon/) and if you make any they can be shared there as well.

#### How do I install custom themes for TWiLight Menu++?
Custom skins for themes can be acquired from [the official skins site](https://skins.ds-homebrew.com/), which houses serveral community-made skins ready to apply. You can also make a custom skin for the Nintendo 3DS and Nintendo DSi themes on your own by following [this guide](https://wiki.ds-homebrew.com/twilightmenu/custom-dsi-3ds-skins). The **Homebrew Launcher**, **Sega Saturn** and **Game Boy Color** themes are _**not**_ customizable.

Once you have acquired a custom skin, you can install it by placing its folder on the appropiate path, which depends on what theme the skin is made for.
- Skins for the Nintendo DSi theme go in `sd:\_nds\TWiLightMenu\dsimenu\themes\`
- Skins for the Nintendo 3DS theme go in `sd:\_nds\TWiLightMenu\3dsmenu\themes\`
- Skins for the R4 Original theme go in `sd:\_nds\TWiLightMenu\r4menu\themes\`

If you are using a  3DS family console, you can install custom skins using [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases). Go to Universal-Updater settings, then `Select Unistore`, `+`, `TWiLight Menu++ Skins`.

To apply a custom theme you must access TWiLight Menu++ Settings.
1. On the `GUI Settings` page, go to the `Theme` option and choose the theme using the right and left buttons on the D-Pad.
2. Once the target theme is selected, press the A button to choose between the skin you have installed.
3. Using the up and down buttons on the D-Pad, highlight the desired skin, then press A to select it.
4. Apply the settings by pressing B to go back to TWiLight Menu++.

TWiLight Menu++ should now have a customized look (and music, if the selected skin supports it and is enabled on the settings).
