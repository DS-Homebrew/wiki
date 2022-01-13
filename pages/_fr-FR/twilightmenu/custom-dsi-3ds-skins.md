---
lang: fr-FR
layout: wiki
section: twilightmenu
category: customization
title: Comment créer des skins DSi/3DS
description: Comment créer des skins DSi et 3DS personnalisés pour TWiLight Menu++
---

La façon la plus simple de personnaliser un thème est de modifier les textures png dans les dossiers `ui`, `batterie`, et/ou `volume` d'un thème. Ces fichiers peuvent être n'importe quel png, avec une petite mise en garde : seuls les pixels 100 % transparents seront rendus de manière transparente, et toute autre opacité sera affichée comme totalement opaque. De même, toute partie qui est transparente dans un ensemble (par exemple, toutes les icônes de batterie) devrait être transparente dans tous les ensembles, car les pixels transparents sont simplement ignorés au lieu d'être réintégrés dans l'arrière-plan. Ainsi, toute partie qui n'est transparente que dans certains ensembles devrait avoir la texture de l'arrière-plan plutôt que la transparence. Ces textures sont autorisées à varier en taille, mais peuvent nécessiter une modification de la configuration du thème pour un rendu correct (voir ci-dessous).

Les modifications des textures palettisées sont plus complexes. Dans les dossiers `grit` et `background_grit` d'un thème, les différents fichiers d'image peuvent être modifiés. Vous aurez également besoin des [chaînes de compilation de devkitPro](https://devkitpro.org) avec GRIT installé. Une fois que vous aurez fini de modifier vos fichiers, vous devrez exécuter
```bash
make
```
afin de compiler vos thèmes au format Grit RIFF. Cela compilera vos textures palettisées au format **.grf** dans le dossier `grf`. Ne modifiez pas les fichiers `.grit` avant d'avoir lu la section [Thématisation avancée](#advanced-theming) ci-dessous.

Sachez que les textures palettisées sont plus de restrictives que les textures BMP, la principale restriction étant un maximum absolu de 16 couleurs par texture. Cependant, certaines textures peuvent avoir des restrictions de palette par défaut encore plus strictes, qui peuvent être modifiées au risque de manquer de mémoire de palette (voir ci-dessous).

Les exemples de thèmes sont dans le dossier [`romsel_dsimenutheme/resources/dsimenu_theme_examples` ](https://github.com/DS-Homebrew/TWiLightMenu/tree/master/romsel_dsimenutheme/resources/dsimenu_theme_examples) dans le dépôt de TWiLightMenu++. Pour les télécharger, [téléchargez le dépôt](https://github.com/DS-Homebrew/TWiLightMenu/archive/master.zip) ou clonez-le avec git, puis trouvez ce dossier.

## Description des fichiers d'un thème

Les textures `volume` et `battery` sont explicites.

### Textures d'arrière-plan (dossier `background_grit`)

| Texture            | Description                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------- |
| bottom             | La texture de l'arrière-plan inférieur lorsqu’une icône n'est pas survolée                                    |
| bottom_bubble      | La texture de l'arrière-plan inférieur lorsqu’une icône est survolée                                          |
| bottom_ds          | Pour le thème 3DS, la texture de l'arrière-plan inférieur lorsqu'une icône n'est pas survolée sur une DS Lite |
| bottom_bubble_ds | Pour le thème 3DS, la texture de l'arrière-plan inférieur lorsqu'une icône est survolée sur une DS Lite       |
| top                | L'arrière-plan supérieur                                                                                      |

### Textures palettisées (dossier `grit`)

| Texture       | Description                                                                                                  | Restrictions de palette (si moins de 16)                            |
| ------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| bips          | Les points affichés en bas de la barre de défilement (thème DSi)                                             |                                                                     |
| box           | La texture de la boîte, contenant à la fois des textures pleines et vides (thème DSi)                        |                                                                     |
| box_empty     | La texture affichée pour une boîte vide (thème 3DS)                                                          | Pour le thème 3DS, la couleur transparente est `#E0DAD9` par défaut |
| box_full      | La texture affichée pour une boîte avec une icône (thème 3DS)                                                | Pour le thème 3DS, la couleur transparente est `#E0DAD9` par défaut |
| brace         | La texture de l'accolade affichée après la première et la dernière icône (thème DSi)                         | 4 couleurs                                                          |
| bubble        | La partie inférieure de la bulle qui s'affiche au-dessus de la bordure de départ ou de la boîte d'icônes     | 8 couleurs                                                          |
| button_arrow  | Les textures pour les flèches de chaque côté de la barre de défilement inférieure (thème DSi)                |                                                                     |
| cornerbutton  | Les boutons qui sont affichés dans le menu SELECT (thème DSi) (le nom est basé sur une ancienne utilisation) |                                                                     |
| cursor        | La bordure avec des images d'animation qui indiquent l'icône sélectionnée (thème 3DS)                        |                                                                     |
| dialogbox     | L'arrière-plan de la boîte de dialogue qui glisse vers le bas                                                |                                                                     |
| folder        | L'icône des dossiers                                                                                         |                                                                     |
| icon_gb       | L'icône des jeux Game Boy                                                                                    |                                                                     |
| icon_gba      | L'icône des jeux GBA (tous les thèmes) et l'icône supérieure pour lancer GBARunner2 (thème 3DS)              | La couleur transparente par défaut est `#00FF00`                    |
| icon_gbamode  | L'icône du mode GBA natif                                                                                    |                                                                     |
| icon_gg       | L'icône des jeux Game Gear                                                                                   |                                                                     |
| icon_manual   | L'icône du manuel                                                                                            |                                                                     |
| icon_md       | L'icône des jeux SEGA Mega Drive                                                                             |                                                                     |
| icon_nes      | L'icône des jeux NES                                                                                         |                                                                     |
| icon_plg      | L'icône des plugins DSTWO                                                                                    |                                                                     |
| icon_settings | L'icône des paramètres Nintendo DSi                                                                          |                                                                     |
| icon_sms      | L'icône des jeux SEGA Master System                                                                          |                                                                     |
| icon_snes     | L'icône des jeux SNES                                                                                        |                                                                     |
| icon_unk      | L'icône affichée lorsqu'il manque une icône pour un jeu                                                      |                                                                     |
| launch_dot    | Les points affichés lors du lancement d'un jeu (thème DSi)                                                   |                                                                     |
| moving_arrow  | La flèche affichée lorsqu'un jeu est déplacé (thème DSi)                                                     |                                                                     |
| progress      | L'animation de chargement de la progression avec huit images                                                 | 9 couleurs                                                          |
| scroll_window | La partie de la barre de défilement qui indique les icônes qui sont visibles                                 | 7 couleurs                                                          |
| small_cart    | Les icônes affichées en haut (thème 3DS) et dans le menu SELECT (thème DSi)                                  |                                                                     |
| start_border  | La bordure avec des images d'animation qui indique l'icône sélectionnée (thème DSi)                          |                                                                     |
| start_text    | Le texte affiché sur la bordure de départ (thème DSi)                                                        | 4 couleurs                                                          |
| wirelessicons | Les icônes affichées pour indiquer qu'un jeu dispose d'un support sans fil                                   | 7 couleurs                                                          |

### Textures d'interface utilisateur (dossier `ui`)

| Texture          | Description                                             |
| ---------------- | ------------------------------------------------------- |
| date_time_font | La police pour afficher la date et l'heure              |
| Lshoulder        | La gâchette gauche                                      |
| Lshoulder_greyed | La gâchette gauche quand il n'y a pas de pages à gauche |
| Rshoulder        | La gâchette droite                                      |
| Rshoulder_greyed | La gâchette droite quand il n'y a pas de pages à droite |

### Texture vidéo (dossier `video`)

`3dsRotatingCubes.rvid` est un fichier Rocket Video. Pour plus d'informations sur la conversion de vidéos en rvid, lisez [Converting a video to .rvid](https://github.com/RocketRobz/Vid2RVID/wiki/Converting-a-video-to-.rvid) sur le wiki Vid2RVID. Si vous ne voulez pas qu'il soit affiché, vous pouvez simplement le supprimer.

## Configuration du thème

Vous pouvez configurer diverses options sur la façon dont le thème est affiché dans le fichier `theme.ini` pour tenir compte de sprites ou de textures plus grands.

| Valeur                   | Description                                                                                                                                          | Par défaut (3DS) | Par défaut (DSi) |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ---------------- |
| `StartBorderRenderY`     | La position Y initiale de la bordure de départ                                                                                                       | 92               | 81               |
| `StartBorderSpriteW`     | La largeur du sprite de la bordure de départ. Notez que la texture de la bordure de départ correspond exactement à la moitié de la bordure complète. | 32               | 32               |
| `StartBorderSpriteH`     | La hauteur du sprite de la bordure de départ                                                                                                         | 64               | 80               |
| `TitleboxRenderY`        | La position Y initiale du texte du titre affiché                                                                                                     | 96               | 85               |
| `BubbleTipRenderY`       | La position Y de l'extrémité de la bulle qui est affichée au-dessus de la bordure de départ                                                          | 98               | 80               |
| `BubbleTipRenderX`       | La position X de l'extrémité de la bulle qui est affichée au-dessus de la bordure de départ                                                          | 125              | 22               |
| `BubbleTipSpriteH`       | La hauteur du sprite de l'extrémité de la bulle                                                                                                      | 7                | 8                |
| `BubbleTipSpriteW`       | La largeur du sprite de l'extrémité de la bulle                                                                                                      | 7                | 11               |
| `RotatingCubesRenderY`   | La position Y sur l'écran supérieur pour afficher les cubes en rotation                                                                              | 78               | N/A              |
| `ShoulderLRenderY`       | La position Y sur l'écran supérieur pour afficher la gâchette gauche                                                                                 | 172              | 172              |
| `ShoulderLRenderX`       | La position X sur l'écran supérieur pour afficher la gâchette gauche                                                                                 | 0                | 0                |
| `ShoulderRRenderY`       | La position Y sur l'écran supérieur pour afficher la gâchette droite                                                                                 | 172              | 172              |
| `ShoulderRRenderX`       | La position X sur l'écran supérieur pour afficher la gâchette droite                                                                                 | 178              | 178              |
| `VolumeRenderX`          | La position X sur l'écran supérieur pour afficher l'icône du volume                                                                                  | 4                | 4                |
| `VolumeRenderY`          | La position Y sur l'écran supérieur pour afficher l'icône du volume                                                                                  | 16               | 16               |
| `BatteryRenderY`         | La position Y sur l'écran supérieur pour afficher l'icône de la batterie                                                                             | 5                | 5                |
| `BatteryRenderX`         | La position X sur l'écran supérieur pour afficher l'icône de la batterie                                                                             | 235              | 235              |
| `RenderPhoto`            | Afficher ou non une photo sur l'écran supérieur                                                                                                      | 0                | 1                |
| `StartTextUserPalette`   | Utilisation ou non de la couleur du profil DS pour la palette du texte de départ                                                                     | N/A              | 1                |
| `StartBorderUserPalette` | Utilisation ou non de la couleur du profil DS pour la palette de la bordure de départ                                                                | N/A              | 1                |
| `ButtonArrowUserPalette` | Utilisation de la couleur du profil DS pour la palette des boutons fléchés en bas de l'écran                                                         | N/A              | 1                |
| `MovingArrowUserPalette` | Utilisation ou non de la couleur du profil DS pour la palette de la flèche affichée lors du déplacement des icônes                                   | N/A              | 1                |
| `LaunchDotsUserPalette`  | Utilisation ou non de la couleur du profil DS pour la palette des points de lancement                                                                | N/A              | 1                |
| `DialogBoxUserPalette`   | Utilisation de la couleur du profil DS pour la palette de la boîte de dialogue                                                                       | N/A              | 1                |

## Thématisation avancée

Il peut arriver que vous ayez besoin de plus de couleurs que le nombre par défaut pour certaines textures palettisées. Dans ce cas, vous pouvez modifier le fichier de compilation `.grit` de la texture pour augmenter la taille de la palette.

Par exemple, dans `scroll_window.grit`, vous pouvez modifier `-pn7` et changer `7` en `16` pour 16 couleurs. Sachez que si vous supprimez la totalité de la ligne `-pn` , vous risquez de rencontrer des résultats inattendus.

Notez également que le maximum absolu de 16 couleurs par texture est imposé par le code et ne peut être modifié. Même si vous augmentez le nombre de couleurs de la palette à plus de 16, les données de la palette ne seront pas chargées pour plus de 16 couleurs. Avec la quantité de textures chargées, il se peut que la mémoire des palettes ne soit pas suffisante pour contenir 16 couleurs de palettes pour chaque texture. Gardez cela à l'esprit lorsque vous ajustez la taille des palettes.

En outre, les textures palettisées doivent avoir des dimensions qui sont un multiple de 2. Les tailles des textures palettisées ne peuvent pas être modifiées, sauf pour `bubble` et `start_border`, qui peuvent avoir des dimensions de sprite configurables dans `theme.ini`. Toutefois, notez que cela peut avoir des conséquences inattendues.

La validité des textures palettisées n'est pas vérifiée. Une texture invalide devrait être rare si elle est créée avec le makefile fourni, mais dans certains cas une texture corrompue fera que le menu ne se chargera pas du tout.

## Musique d'arrière-plan personnalisée et effets sonores

Les thèmes du menu DSi et 3DS prennent également en charge la musique personnalisée. Consultez [Skins DSi/3DS - Effets sonores personnalisés](custom-dsi-3ds-sfx) pour plus de détails.
