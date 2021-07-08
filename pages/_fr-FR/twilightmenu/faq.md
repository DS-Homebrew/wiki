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

#### Pourquoi ma 3DS / 2DS est-elle bloquée sur des écrans noirs, plantage, éteint, etc lorsque je lance TWiLight Menu++ ?
TWL_FIRM aurait pu d'une manière ou d'une autre être corrompu. Suivez ce guide pour résoudre le problème : <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### Comment puis-je corriger le fait d'obtenir un écran blanc lors du démarrage de TWiLight Menu++ ?
- Tout d'abord, essayez de mettre la console en mode veille (par ex. Fermer le couvercle de la console, ou appuyer sur le bouton de veille sur l'O2DS), puis réveiller la console
- Si cela ne fonctionne pas, formatez votre carte SD en FAT32 avec une taille d'unitée d'allocation de 32 Ko
- Si cela ne fonctionne pas non plus, essayez une autre carte SD

#### Where is the Acekard/Wood UI theme?
The acekard (also called Wood UI) theme was removed due to its buggy behaviour and causing SD Card corruption. Please wait for a fix. Progress for the return of this theme can be found in [this PR](https://github.com/DS-Homebrew/TWiLightMenu/pull/1109).

#### How do I fix TWiLight Menu++ restarting or giving a Guru Meditation Error when launching a game?
Go into TWLMenu++ Settings, and disable `Update recently played list`.

#### Why do I get a white screen when trying to load a game from SD card?
- Tout d'abord, vérifiez [la liste de compatibilité nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) et assurez-vous que votre jeu est compatible
- Essayez avec tout les codes de triche désactivées pour ce jeu car certains codes ne sont pas compatibles avec nds-bootstrap pour le moment, vous pouvez utiliser <kbd class="l">L</kbd> pour désactiver tous les triches pour un jeu
- If it worked before, delete the `fatTable` and `patchOffsetCache` folders in `sd:/_nds/nds-bootstrap/`

#### How do I use cheats?
You need to have a cheat DB in the form of a `usrcheat.dat` file in the `sd:/_nds/TWiLightMenu/extras/` folder. The most updated cheat database is [DeadSkullzJr's](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/).
- On the 3DS, this database is available in the Universal-Updater app as "NDS Cheat Databases." Cela l'installera automatiquement à l'emplacement requis.

Alternatively, you can use [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) to create your own cheat DB.

#### How do I show a custom picture on the top screen of the DSi theme?
A random `.png` image in `sd:/_nds/TWiLightMenu/dsimenu/photos/` will be shown each time the menu is loaded.

- L'image(s) ne doit pas être plus grande que 208x156
- Si vous avez des erreurs, c'est probablement une erreur avec la taille de l'image. Veuillez utiliser [tinypng](https://tinypng.com) pour réduire la taille

#### How do I get games?
You can download homebrew games from [Universal-DB](https://db.universal-team.net/ds) and [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games). To get dumps of your retail games:
- Sur DS, vous pouvez utiliser [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) pour dumper vos jeux GBA et, si vous avez une flashcard Slot-2, des jeux DS
- Sur DSi vous pouvez utiliser [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) pour dumper vos jeux DS et DSiWare
- Sur 3DS, vous pouvez utiliser [GodMode9](https://github.com/d0k3/GodMode9/releases) pour dumper vos jeux DS, DSiWare et Console Virtuelle

#### Can I get the save files from my game cards onto my SD card or vice versa?
Yes, you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) on DSi and 3DS or [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) on 3DS.

#### How do I change TWiLight Menu++'s language?
1. Ouvrez les paramètres TWiLight Menu++, vous pouvez le faire en maintenant <kbd>SELECT</kbd> tout en chargeant TWiLight Menu++
1. Press <kbd class="l">L</kbd> or <kbd class="face">Y</kbd> once (on flashcard/3DS) or twice (on DSi)
1. Modifiez la première option jusqu'à ce que vous voyez la langue que vous voulez, puis quittez les paramètres
   - Vous pouvez également modifier les deux prochaines options car elles contrôlent la langue des jeux DS et leurs titres dans TWiLight Menu++

#### Is this a DS(i) emulator?
No, this is not an emulator. The menu and DS games (loaded via nds-bootstrap) are ran natively in the console's DS/DSi mode. The only consoles emulated are the past consoles, but partially for GBA (as some or all parts like graphics are ran natively).

#### What systems does TWiLight Menu++ support?

| Format                  | Loader                                           | Extensions                             | Save file                          |
| ----------------------- | ------------------------------------------------ | -------------------------------------- | ---------------------------------- |
| ARGV[^1]                | Native                                           | `.argv`                                |                                    |
| Atari 2600              | [StellaDS][stellads]                             | `.a26`                                 |                                    |
| Atari 5200              | [A5200DS][a5200ds]                               | `.a52`                                 |                                    |
| Atari 7800              | [A7800DS][a7800ds]                               | `.a78`                                 |                                    |
| Atari XEGS              | [XEGS-DS][xegs-ds]                               | `.xex`, `.atr`                         |                                    |
| DS                      | [nds-bootstrap][ndsbs], flashcard kernel, native | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[rom name].sav`[^2]         |
| DSiWare                 | [Unlaunch][unlaunch], [nds-bootstrap][ndsbs]     | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `[rom name].pub`, `[rom name].prv` |
| DSTWO Plugin            | [DSTWO][dstwo][^3]                               | `.plg`                                 |                                    |
| Game Boy (Color)        | [GameYob][gameyob]                               | `.gb`, `.sgb`, `.gbc`                  | `[rom name].sav`                   |
| Game Boy Advance        | [GBARunner2][gbarunner2][^4], native[^5]         | `.agb`, `.gba`, `.mb`                  | `[rom name].sav`                   |
| Game Gear               | [S8DS][s8ds]                                     | `.gg`                                  | `[rom name].gg.sav`                |
| Genesis/Mega Drive      | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]      | `.gen`                                 | `[rom name].srm`[^6]               |
| Master System           | [S8DS][s8ds]                                     | `.sms`                                 | `[rom name].sms.sav`               |
| MPEG4 Video             | [MPEG4 Player][mpeg4player]                      | `.mp4`                                 |                                    |
| NES/Famicom             | [nesDS][nesds]                                   | `.nes`, `.fds`                         | `[rom name].sav`                   |
| PC Engine/TurboGrafx-16 | [NitroGrafx][nitrografx]                         | `.pce`                                 |                                    |
| RVID Video              | [Rocket Video Player][rvidplayer]                | `.rvid`                                |                                    |
| SNES[^7]                | [SNEmulDS][snemulds]                             | `.smc`, `.sfc`                         | `[rom name].srm`[^8]               |
{:.table}

- Footnotes -
{:footnotes}

#### Why isn't touch input working on sudokuhax?
Depending on the save file of sudokuhax, the touch screen inputs may not work.

#### Can The Biggest Loser boot TWiLight Menu++?
No. As The Biggest Loser is a Slot-1 game, and not a DSiWare game, SD access is disabled when running Slot-1 cards.

[^1]: Les fichiers texte contenant le chemin vers une application homebrew DS et des arguments pour le lancer avec, voir le README de [nds-hb-menu](https://github.com/devkitPro/nds-hb-menu#passing-arguments) pour plus d'infos
[^2]: Seulement pour les ROMs commericales, les homebrews n'ont pas de fichiers de sauvegarde spécifiques
[^3]: Fonctionne uniquement à partir d'une flashcard SuperCard DSTWO car elle a une puissance de traitement supplémentaire et de la RAM à l'intérieur de la cartouche
[^4]: Lorsque vous exécutez en mode DSi , il peut utiliser le DSP pour un meilleur son
[^5]: Nécessite une flashcard Slot-2 et fonctionne donc uniquement sur DS Phat et DS Lite
[^6]: jEnesis ne peut enregistrer que lorsque vous exécutez à partir d'un linker, mais PicoDriveTWL peut enregistrer à partir d'une SD et d'un linker
[^7]: Uniquement affiché lorsque vous utilisez un linker, la carte SD interne de 3DS ou DSi avec Unlaunch installé
[^8]: Ne peut sauvegarder que si vous exécutez depuis un linker

[a5200ds]: https://github.com/wavemotion-dave/A5200DS
[a7800ds]: https://github.com/wavemotion-dave/A7800DS
[dstwo]: http://eng.supercard.sc
[gameyob]: https://github.com/Drenn1/GameYob
[gbarunner2]: https://github.com/Gericom/GBARunner2
[jenesis]: https://www.gamebrew.org/wiki/JEnesisDS
[mpeg4player]: https://gbatemp.net/threads/544095
[ndsbs]: https://github.com/DS-Homebrew/nds-bootstrap
[nesds]: https://github.com/DS-Homebrew/NesDS
[nitrografx]: https://www.gamebrew.org/wiki/NitroGrafx
[pdtwl]: https://github.com/DS-Homebrew/PicoDriveTWL
[rvidplayer]: https://gbatemp.net/threads/539163
[s8ds]: https://www.gamebrew.org/wiki/S8DS
[snemulds]: https://www.gamebrew.org/wiki/SNEmulDS
[stellads]: https://github.com/wavemotion-dave/StellaDS
[unlaunch]: https://problemkaputt.de/unlaunch.htm
[xegs-ds]: https://github.com/wavemotion-dave/XEGS-DS
