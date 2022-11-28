---
lang: fr-FR
layout: wiki
section: ds-index
category: reference
title: Émulateurs sur la DS
description: Une référence des émulateurs sur la DS
---

Il existe de nombreux émulateurs pour la DS et la DSi. Cette page fournit une explication complète sur les nombreux émulateurs et lanceurs inclus dans TWiLight Menu++.

### Liste des systèmes pris en charge par TWiLight Menu++

| Format                  | Lanceur                                         | Extensions                             | Fichier de sauvegarde                                    |
| ----------------------- | ----------------------------------------------- | -------------------------------------- | -------------------------------------------------------- |
| ARGV[^1]                | Natif                                           | `.argv`                                |                                                          |
| Atari 2600              | [StellaDS][stellads]                            | `.a26`                                 |                                                          |
| Atari 5200              | [A5200DS][a5200ds]                              | `.a52`                                 |                                                          |
| Atari 7800              | [A7800DS][a7800ds]                              | `.a78`                                 |                                                          |
| Atari XEGS              | [XEGS-DS][xegs-ds]                              | `.xex`, `.atr`                         |                                                          |
| ColecoVision            | [S8DS][s8ds], [ColecoDS][colecods]              | `.col`                                 |                                                          |
| DS                      | [nds-bootstrap][ndsbs], kernel du linker, natif | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[nom de la ROM].sav`[^2]                          |
| DSiWare                 | [Unlaunch][unlaunch], [nds-bootstrap][ndsbs]    | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[nom de la ROM].pub`, `saves/[nom de la ROM].prv` |
| Plugin DSTWO            | [DSTWO][dstwo][^3]                              | `.plg`                                 |                                                          |
| Game Boy (Color)        | [GameYob][gameyob]                              | `.gb`, `.sgb`, `.gbc`                  | `[nom de la ROM].sav`                                    |
| Game Boy Advance        | [GBARunner2][gbarunner2][^4], natif[^5]         | `.agb`, `.gba`, `.mb`                  | `[nom de la ROM].sav`                                    |
| Game Gear               | [S8DS][s8ds]                                    | `.gg`                                  | `[nom de la ROM].gg.sav`                                 |
| Genesis/Mega Drive      | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]     | `.gen`                                 | `[nom de la ROM].srm`[^6]                                |
| Intellivision           | [Nintellivision][nintellivision]                | `.int`                                 |                                                          |
| Master System           | [S8DS][s8ds]                                    | `.sms`                                 | `[nom de la ROM].sms.sav`                                |
| Neo Geo Pocket (Color)  | [NGPDS][ngpds]                                  | `.ngp`, `.ngc`                         | `/data/ngpds/[nom de la ROM].ngp.fla`                    |
| FastVideoDS             | [FastVideoDSPlayer][fastvideodsplayer]          | `.fv`                                  |                                                          |
| NES/Famicom             | [nesDS][nesds]                                  | `.nes`, `.fds`                         | `[nom de la ROM].sav`                                    |
| PC Engine/TurboGrafx-16 | [NitroGrafx][nitrografx]                        | `.pce`                                 |                                                          |
| Rocket Video            | [Rocket Video Player][rvidplayer]               | `.rvid`                                |                                                          |
| SG-1000                 | [S8DS][s8ds], [ColecoDS][colecods]              | `.sg`                                  |                                                          |
| Sord M5                 | [ColecoDS][colecods]                            | `.m5`                                  |                                                          |
| SNES                    | [SNEmulDS][snemulds]                            | `.smc`, `.sfc`                         | `[nom de la ROM].srm`                                    |
| WonderSwan (Color)      | [NitroSwan][nitroswan]                          | `.ws`, `.wsc`                          | ???                                                      |
| Xvid                    | [tuna-viDS][tunavids]                           | `.avi`                                 |                                                          |

- Footnotes -
{:footnotes}

Ce ne sont que des émulateurs et lanceurs recommandés qui sont présents dans TWiLight Menu++. Il existe d'autres émulateurs pour ces consoles (comme lolSnes, gbaemu4DS, etc.)

### Autres émulateurs pour la DS

| Format  | Lanceur        | Extensions | Fichier de sauvegarde |
| ------- | -------------- | ---------- | --------------------- |
| Neo Geo | [neoDS][neods] | `.neo`     | (inconnu)             |

## Notes sur les émulateurs spécifiques
### Disques RAM
- Pour que **jEnesisDS** ou **neoDS** fonctionne sur la carte SD de la DSi, vous devrez utiliser un disque RAM avec nds-bootstrap
   - Un générateur de disque RAM pour jEnesisDS est intégré à TWiLight Menu++. Vous devrez créer votre propre disque RAM pour neoDS. Consultez [Création de disques RAM](../twilightmenu/creating-ram-disks) pour savoir comment procéder
   - La raison pour laquelle les disques RAM sont utilisés est que les hooks ARM7 de ces émulateurs ne fonctionnent pas correctement

### Comparaison entre PicoDriveTWL et jEnesisDS
- **PicoDriveTWL**
   - A été conçu pour la DSi
   - Ne nécessite pas de disques RAM de nds-bootstrap
      - La sauvegarde est prise en charge sur les cartes SD de la DSi
      - Temps de chargement plus rapide entre TWiLight Menu++ et l'émulateur sur la carte SD de la DSi
   - Supporte les arguments
   - La limite est de 2,5 Mo sur un **linker**
      - Se sert de la RAM supplémentaire de la DSi ou du DS Memory Pak pour étendre cette limite
   - Pas d'émulation du son
   - La fréquence d'images est extrêmement irrégulière

- **jEnesisDS**
   - Mode DS
      - Requiert l'utilisation d'un disque RAM de nds-bootstrap pour les cartes SD de DSi
      - La sauvegarde n'est pas disponible pour les cartes SD de DSi
   - Le chargement prend un certain temps
   - Ne supporte pas les arguments
   - La limite est de 3 Mo sur toutes les plates-formes (en raison du chargement des ROMs dans la RAM)
      - Pas de prise en charge du DS Memory Pak ou de la mémoire étendue de la DSi
      - Il y a un patch pour *Sonic 3 & Knuckles* qui supprime le multijoueur, en obtenant le décompte des tailles
   - Émulation du son
   - La fréquence d'images est régulière


<!-- Links for tables -->
[^1]: Fichiers texte contenant le chemin d'accès à une application homebrew DS et les arguments pour la lancer, voir le [README de nds-hb-menu](https://github.com/devkitPro/nds-hb-menu#passing-arguments) pour plus d'informations
[^2]: Seulement pour les ROMs commerciales, les homebrews n'ont pas de fichiers de sauvegarde spécifiques
[^3]: Ne fonctionne qu'à partir d'un linker SuperCard DSTWO car il possède une puissance de traitement et une mémoire vive supplémentaires à l'intérieur du linker
[^4]: Lorsqu'il fonctionne en mode DSi, il peut utiliser le DSP pour un meilleur son
[^5]: Requiert un linker Slot-2 et ne fonctionne donc que sur DS Tank et DS Lite
[^6]: jEnesis ne peut sauvegarder que lorsqu'il fonctionne à partir d'un linker, mais PicoDriveTWL peut sauvegarder à partir d'une SD et d'un linker

[a5200ds]: https://github.com/wavemotion-dave/A5200DS
[a7800ds]: https://github.com/wavemotion-dave/A7800DS
[colecods]: https://github.com/wavemotion-dave/ColecoDS
[dstwo]: http://eng.supercard.sc
[fastvideodsplayer]: https://github.com/Gericom/FastVideoDSPlayer
[gameyob]: https://github.com/Drenn1/GameYob
[gbarunner2]: https://github.com/Gericom/GBARunner2
[jenesis]: https://www.gamebrew.org/wiki/JEnesisDS
[ndsbs]: https://github.com/DS-Homebrew/nds-bootstrap
[nesds]: https://github.com/DS-Homebrew/NesDS
[ngpds]: https://github.com/FluBBaOfWard/NGPDS
[nitrografx]: https://www.gamebrew.org/wiki/NitroGrafx
[nitroswan]: https://github.com/FluBBaOfWard/NitroSwan
[pdtwl]: https://github.com/DS-Homebrew/PicoDriveTWL
[rvidplayer]: https://gbatemp.net/threads/539163
[s8ds]: https://github.com/FluBBaOfWard/S8DS
[snemulds]: https://www.gamebrew.org/wiki/SnemulDS_-_Revival
[stellads]: https://github.com/wavemotion-dave/StellaDS
[unlaunch]: https://problemkaputt.de/unlaunch.htm
[xegs-ds]: https://github.com/wavemotion-dave/XEGS-DS
[neods]: https://www.gamebrew.org/wiki/NeoDS
[nintellivision]: https://github.com/wavemotion-dave/NINTV-DS
[tunavids]: https://github.com/chishm/tuna-vids
