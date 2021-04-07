---
lang: fr-FR
layout: wiki
section: twilightmenu
category: other
title: FAQ & Dépannage
long_title: Menu TWiLight ++ FAQ & Dépannage
description: FAQ et dépannage pour TWiLight Menu++
---

Pour plus de FAQs, veuillez visiter le [sujet GBAtemp](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### Pourquoi ma 3DS / 2DS est-elle bloquée sur des écrans noirs, plantage, éteint, etc lors du lancement de TWiLight Menu++?
TWL_FIRM aurait pu d'une manière ou d'une autre être corrompu. Suivez ce guide pour résoudre le problème : <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### Comment puis-je corriger le fait d'obtenir un écran blanc lors du démarrage de TWiLight Menu++ ?
- Tout d'abord, essayez de mettre la console en mode veille (par ex. Fermer le couvercle de la console, ou appuyer sur le bouton de veille sur l'O2DS), puis réveiller la console
- Si cela ne fonctionne pas, formatez votre carte SD en FAT32 avec une taille d'unitée d'allocation de 32 Ko
- Si cela ne fonctionne pas non plus, essayez une autre carte SD

#### Comment puis-je réparer le redémarrage de TWiLight Menu++ ou donner une erreur de méditation Guru lors du lancement d'un jeu?
Allez dans les paramètres TWLMenu++ et désactivez `Maj des jeux joués récamment`.

#### Pourquoi est-ce que je reçois un écran blanc en essayant de charger un jeu à partir de la carte SD ?
- Tout d'abord, vérifiez [la liste de compatibilité nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) et assurez-vous que votre jeu est compatible
- Essayez avec tout les codes de triche désactivées pour ce jeu car certains codes ne sont pas compatibles avec nds-bootstrap pour le moment, vous pouvez utiliser <kbd class="l">L</kbd> pour désactiver tous les triches pour un jeu
- Si le jeu que vous essayez de lancer est un jeu DSi Enhanced alors assurez-vous que TWiLight Menu++ est configuré pour utiliser le `Mode DS`
- Si cela a fonctionné avant, supprimez les dossiers `fatTable` et `patchOffsetCache` dans `sd:/_nds/nds-bootstrap/`

#### Comment puis-je utiliser des codes de triche ?
Vous devez avoir une base de données triée sous la forme d'un fichier `usrcheat.dat` dans le dossier `sd:/_nds/TWiLightMenu/extras/`. La base de données de codes la plus mise à jour est [DeadSkullzJr](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/).
- Sur la 3DS, cette base de données est disponible dans l'application Universal Updater en tant que "NDS Cheat Databases." Cela l'installera automatiquement à l'emplacement requis.

Vous pouvez également utiliser [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) pour créer votre propre base de données de triche.

#### Comment puis-je afficher une image personnalisée sur l'écran supérieur du thème DSi ?
Une image aléatoire `.png` dans `sd:/_nds/TWiLightMenu/dsimenu/photos/` sera affichée chaque fois que le menu est chargé.

- L'image(s) ne doit pas être plus grande que 208x156
- Si vous avez des erreurs, c'est probablement une erreur avec la taille de l'image. Veuillez utiliser [tinypng](https://tinypng.com) pour réduire la taille

#### Comment obtenir des jeux ?
Vous pouvez télécharger des jeux homebrew depuis [Universal-DB](https://db.universal-team.net/ds) et [GameBrew](https://www.gamebrew.org/wiki/List_of_DS_homebrew_applications). Pour obtenir des dumps de vos jeux de détail :
- Sur DS, vous pouvez utiliser [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) pour dumper vos jeux GBA et, si vous avez une flashcard Slot-2, des jeux DS
- Sur DSi vous pouvez utiliser [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) pour dumper vos jeux DS et DSiWare
- Sur 3DS, vous pouvez utiliser [GodMode9](https://github.com/d0k3/GodMode9/releases) pour dumper vos jeux DS, DSiWare et Console Virtuelle

#### Puis-je obtenir les fichiers de sauvegarde de mes cartes de jeu sur ma carte SD ou vice versa?
Oui, vous pouvez utiliser [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) sur DSi et 3DS ou [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) sur 3DS.

#### Comment changer la langue de TWiLight Menu++ ?
1. Ouvrez les paramètres TWiLight Menu++, vous pouvez le faire en maintenant <kbd>SELECT</kbd> tout en chargeant TWiLight Menu++
1. Appuyez sur <kbd class="l">L</kbd> ou <kbd class="face">Y</kbd> une fois (sur le linker / 3DS) ou deux fois (sur DSi)
1. Modifiez la première option jusqu'à ce que vous voyez la langue que vous voulez, puis quittez les paramètres
   - Vous pouvez également modifier les deux prochaines options car elles contrôlent la langue des jeux DS et leurs titres dans TWiLight Menu++

#### Est-ce un émulateur DS(i) ?
Non, ce n'est pas un émulateur. Le menu et les jeux DS (chargés via nds-bootstrap) sont exécutés nativement en mode DS/DSi de la console. Les seules consoles émulées sont les anciennes consoles, mais en partie pour GBA (comme certaines ou toutes les parties comme les graphiques sont exécutées nativement).

#### Quels sont les systèmes supportés par TWiLight Menu++ ?

| Format                    | Chargeur                                      | Extensions                             | Fichiers de sauvegarde                       |
| ------------------------- | --------------------------------------------- | -------------------------------------- | -------------------------------------------- |
| ARGV[^1]                  | Natif                                         | `.argv`                                |                                              |
| Atari 2600                | [StellaDS][stellads]                          | `.a26`                                 |                                              |
| Atari 5200                | [A5200DS][a5200ds]                            | `.a52`                                 |                                              |
| Atari 7800                | [A7800DS][a7800ds]                            | `.a78`                                 |                                              |
| Atari XEGS                | [XEGS-DS][xegs-ds]                            | `.xex`, `.atr`                         |                                              |
| DS                        | [nds-bootstrap][ndsbs], logiciel linker natif | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[nom de a ROM].sav`[^2]               |
| DSiWare                   | [Unlaunch][unlaunch]                          | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `[nom de la ROM].pub`, `[nom de la ROM].prv` |
| Plugin DSTWO              | [DSTWO][dstwo][^3]                            | `.plg`                                 |                                              |
| GameBoy (Color)           | [GameYob][gameyob]                            | `.gb`, `.sgb`, `.gbc`                  | `[nom de la ROM].sav`                        |
| Game Boy Advance          | [GBARunner2][gbarunner2][^4], natif[^5]       | `.agb`, `.gba`, `.mb`                  | `[nom de la ROM].sav`                        |
| Game Gear                 | [S8DS][s8ds]                                  | `.gg`                                  | `[nom de la ROM].gg.sav`                     |
| Genesis / Mega Drive      | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]   | `.gen`                                 | `[nom de la ROM].srm`[^6]                    |
| Master System             | [S8DS][s8ds]                                  | `.sms`                                 | `[nom de la ROM].sms.sav`                    |
| Vidéo MPEG4               | [MPEG4 Player][mpeg4player]                   | `.mp4`                                 |                                              |
| NES / Famicom             | [nesDS][nesds]                                | `.nes`, `.fds`                         | `[nom de la ROM].sav`                        |
| PC Engine / TurboGrafx-16 | [NitroGrafx][nitrografx]                      | `.pce`                                 |                                              |
| Vidéo RVID                | [Rocket Video Player][rvidplayer]             | `.rvid`                                |                                              |
| SNES[^7]                  | [SNEmulDS][snemulds]                          | `.smc`, `.sfc`                         | `[nom de la ROM].srm`[^8]                    |
{:.table}

- Footnotes -
{:footnotes}

#### Pourquoi l'entrée tactile ne fonctionne pas sur le sudokuhax?
Selon le fichier de sauvegarde de sudokuhax, les entrées de l'écran tactile peuvent ne pas fonctionner.

#### The Biggest Loser peut-il démarrer TWiLight Menu++ ?
Non. Comme The Biggest Loser est un jeu Slot-1, et non un jeu DSiWare, l'accès SD est désactivé lorsque vous utilisez des cartes Slot-1.

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
