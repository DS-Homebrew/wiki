---
lang: fr-FR
layout: faq
section: twilightmenu
category: other
title: FAQ & Dépannage
long_title: Menu TWiLight ++ FAQ & Dépannage
description: FAQ et dépannage pour TWiLight Menu++
---

Pour plus de FAQs, veuillez visiter le [sujet GBAtemp](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### Why does my 3DS get stuck on black screens, crash, power off, etc when launching TWiLight Menu++?
TWL_FIRM aurait pu d'une manière ou d'une autre être corrompu. Suivez ce guide pour résoudre le problème : <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### Comment puis-je corriger le fait d'obtenir un écran blanc lors du démarrage de TWiLight Menu++ ?
- Tout d'abord, essayez de mettre la console en mode veille (par ex. Fermer le couvercle de la console, ou appuyer sur le bouton de veille sur l'O2DS), puis réveiller la console
- Si cela ne fonctionne pas, formatez votre carte SD en FAT32 avec une taille d'unitée d'allocation de 32 Ko
- Si cela ne fonctionne pas non plus, essayez une autre carte SD

#### Où est le thème Acekard/Wood UI ?
The Acekard (also called Wood UI) theme was removed due to its buggy behavior and causing SD card corruption. Veuillez patienter pour un fix. La progression pour le retour de ce thème peut être trouvé sur [cette requête](https://github.com/DS-Homebrew/TWiLightMenu/pull/1109).

#### Comment puis-je réparer le redémarrage de TWiLight Menu++ ou donner une erreur Guru Meditation lors du lancement d'un jeu?
Allez dans les paramètres TWLMenu++ et désactivez `Mise à jour des jeux joués récemment`.

#### Why do I get a white screen when trying to load a DS game from SD card?
See [I’m having issues with my ROM(s), what should I do?](../nds-bootstrap/faq?faq=im-having-issues-with-my-roms-what-should-i-do) on the nds-bootstrap FAQ page.

#### Comment utiliser des cheats ?
You need to have a cheat DB in the form of a `usrcheat.dat` file in the `sd:/_nds/TWiLightMenu/extras/` folder. The most updated cheat database is [DeadSkullzJr's](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/).
- On the 3DS, this database is available in the Universal-Updater app as "NDS Cheat Databases." This will automatically install it to the required location.

Alternatively, you can use [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) to create your own cheat DB.

#### Comment afficher une image personnalisée sur l'écran supérieur de mon thème DSi ?
A random `.png` image in `sd:/_nds/TWiLightMenu/dsimenu/photos/` will be shown each time the menu is loaded. If there are no applicable images, screenshots taken by nds-bootstrap will be used instead.

- The images(s) must be no bigger than 208x156
- If you have errors, it's most likely an error with the image size. Please use [tinypng](https://tinypng.com) to reduce the size

#### Comment avoir des jeux ?
You can download homebrew games from [Universal-DB](https://db.universal-team.net/ds) and [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games). To get dumps of your retail games:
- On DS you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your GBA games and, if you have a Slot-2 flashcart, DS games. If you only have a Slot-1 flashcard and would like to dump a DS game, you can use [Wooddumper](https://digiex.net/attachments/wooddumper_r89-zip.14735/), which requires a Wi-Fi connection compatible with the DS, as well as an FTP client on a separate device to receive the ROM
- On DSi you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your DS games and DSiWare
- On 3DS you can use [GodMode9](https://github.com/d0k3/GodMode9/releases) to dump your DS games, DSiWare, and Virtual Console titles

#### Can I get the save files from my Game Cards onto my SD card or vice versa?
Yes, you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) on DSi and 3DS or [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) on 3DS.

#### Comment changer la langue de TWiLight Menu++ ?
1. Ouvrez les paramètres TWiLight Menu++, vous pouvez le faire en maintenant <kbd>SELECT</kbd> tout en chargeant TWiLight Menu++
1. Appuyez sur <kbd class="l">L</kbd> ou <kbd class="face">Y</kbd> une fois (sur une flashcard/3DS) ou deux fois (sur une DSi)
1. Modifiez la première option jusqu'à ce que vous voyez la langue que vous voulez, puis quittez les paramètres
   - Vous pouvez également modifier les deux prochaines options car elles contrôlent la langue des jeux DS et leurs titres dans TWiLight Menu++

#### Est-ce un émulateur DS(i) ?
No, this is not an emulator. The menu and DS games (loaded via nds-bootstrap) are ran natively in the console's DS/DSi mode. The only consoles emulated are the past consoles, but partially for GBA (as some or all parts like graphics are ran natively).

#### Quels sont les systèmes supportés par TWiLight Menu++ ?
See [List of Systems Supported by TWiLight Menu++](../ds-index/emulators#list-of-supported-systems-by-twilight-menu).

#### Can exploits of Slot-1 games boot TWiLight Menu++?
No. As they're not DSiWare titles, SD access is disabled when running Slot-1 cards.

#### Why can't I find/see my games?
There are a multiple reasons you may be unable to find them.
- If you placed your games in the `_nds` folder, you are unable to access it because it is permanently invisible in TWiLight Menu++. Please move them to any other location on the SD card
- If you have more than 39 items in a folder and all of the slots on the menu are taken, your games may be on the next page. Use <kbd class="l">L</kbd>/<kbd class="r">R</kbd> or <kbd>SELECT</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd> to switch pages
- If your game or folder is hidden, you may need to show hidden files via TWiLight Menu++'s GUI settings
- If the game type is set to be hidden in Emulation/HB settings, it won't appear on menus. Change these settings so that they will be displayed
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