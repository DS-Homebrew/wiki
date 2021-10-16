---
lang: fr-FR
layout: wiki
section: twilightmenu
category: customization
title: Comment Créer des Skins DSi/3DS
description: Comment créer des skins DSi et 3DS personnalisés pour le TWiLight Menu++
---

La façon la plus simple de personnaliser un thème est de modifier les textures png dans le thème `ui`, `batterie`, et/ou `volume` dossiers. These files can be any png with one minor caveat in that only pixels that are 100% transparent will be rendered transparently, and any other opacity will be drawn as fully opaque. En outre, toute partie qui est transparente dans l'un des jeux (ex. toutes les icônes de la batterie) doivent être transparentes dans tous les cas car les pixels transparents sont simplement ignorés plutôt que retournés en arrière-plan, donc toute partie qui est transparente dans certains seulement devrait avoir la texture de fond plutôt que la transparence. Ces textures sont autorisées à varier en taille, mais peuvent nécessiter une mise à jour de la configuration du thème pour être affichées correctement (voir ci-dessous).

Les modifications apportées aux textures palettées sont plus importantes. Dans les dossiers `grille` et `background_grit` d'un thème, les divers fichiers d'image peuvent être modifiés. Vous aurez également besoin de [toolchains de devkitPro](https://devkitpro.org) avec GRIT installé. Une fois que vous avez terminé l'édition de vos fichiers, vous devez exécuter
```bash
make
```
afin de compiler vos thèmes au format Grit RIFF. Cela compilera vos textures palettées au format **.grf** dans le dossier `grf`. N'apportez pas de modifications aux fichiers `.grit` tant que vous n'avez pas lu la section [thème avancé](#advanced-theming) ci-dessous.

Sachez que les textures palettées sont plus restrictives que les textures BMP, la première étant un maximum absolu de 16 couleurs par texture. Cependant, certaines textures peuvent avoir des restrictions de palette par défaut encore plus strictes, qui peuvent être modifiées au risque de manquer de mémoire de palette (voir ci-dessous).

Les exemples de thèmes sont dans le dossier [`romsel_dsimenutheme/resources/dsimenu_theme_examples` ](https://github.com/DS-Homebrew/TWiLightMenu/tree/master/romsel_dsimenutheme/resources/dsimenu_theme_examples) dans le référentiel du TWiLightMenu++. Pour les télécharger, [téléchargez le référentiel](https://github.com/DS-Homebrew/TWiLightMenu/archive/master.zip) ou clonez le avec git, puis trouvez ce dossier.

## Description des fichiers de Thèmes

Les textures du`volume` et de la`batterie` sont explicites.

### Textures d'arrière-plan ( dossier`background_grit`)

| Texture            | Description                                                                                                                  |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| bottom             | La texture de fond du bas de la page lorsque vous ne passez pas au-dessus d'une icône                                        |
| bottom_bubble      | La texture de fond du bas lorsque vous passez au-dessus d'une icône                                                          |
| bottom_ds          | Pour le thème 3DS, la texture de fond du bas quand vous ne passez pas au-dessus d'une icône lorsque vous êtes sur un DS lite |
| bottom_bubble_ds | Pour le thème 3DS, la texture de fond du bas quand vous passez au-dessus d'une icône lorsque vous êtes sur une DS lite       |
| top                | L'arrière-plan supérieur                                                                                                     |

### Textures palettées (dossier `grit`)

| Texture       | Description                                                                                                  | Restrictions de palette (si moins de 16)                           |
| ------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| bips          | Les bips affichés en bas de la barre de défilement (Thème DSi)                                               |                                                                    |
| box           | La texture de la boîte contenant des textures pleines ou vides (Thème DSi)                                   |                                                                    |
| box_empty     | La texture affichée pour une boîte vide (Thème 3DS)                                                          | Sur le thème 3DS, la couleur transparente est `#E0DAD9` par défaut |
| box_full      | La texture affichée pour une boîte avec une icône (Thème 3DS)                                                | Sur le thème 3DS, la couleur transparente est `#E0DAD9` par défaut |
| brace         | La texture de l'accolade affichée après la première et la dernière icône (Thème DSi)                         | 4 couleurs                                                         |
| bubble        | La partie inférieure de la bulle qui s'affiche par dessus la bordure de départ ou la zone d'icône            | 8 couleurs                                                         |
| button_arrow  | Les textures des flèches de chaque côté de la barre de défilement inférieure (Thème DSi)                     |                                                                    |
| cornerbutton  | Les boutons qui sont affichés dans le menu SELECT (Thème DSi) (le nom est basé sur une ancienne utilisation) |                                                                    |
| cursor        | La bordure avec les images d'animation qui indiquent l'icône sélectionnée (Thème 3DS)                        |                                                                    |
| dialogbox     | L'arrière-plan de la boîte de dialogue qui glisse vers le bas                                                |                                                                    |
| folder        | L'icône pour les dossiers                                                                                    |                                                                    |
| icon_gb       | L'icône pour les jeux Game Boy                                                                               |                                                                    |
| icon_gba      | L'icône pour les jeux GBA (Tous les thèmes) et l'icône principale pour lancer GBARunner2 (Thème 3DS)         | La couleur transparente par défaut est `#00FF00`                   |
| icon_gbamode  | L'icône pour le mode GBA natif                                                                               |                                                                    |
| icon_gg       | L'icône des jeux Game Gear                                                                                   |                                                                    |
| icon_manual   | L'icône du manuel                                                                                            |                                                                    |
| icon_md       | L'icône pour les jeux Mega Drive                                                                             |                                                                    |
| icon_nes      | L'icône pour les jeux NES                                                                                    |                                                                    |
| icon_plg      | L'icône pour les plugins DSTWO                                                                               |                                                                    |
| icon_settings | L'icône pour les paramètres Nintendo DSi                                                                     |                                                                    |
| icon_sms      | L'icône pour les jeux Sega Master System                                                                     |                                                                    |
| icon_snes     | L'icône pour les jeux SNES                                                                                   |                                                                    |
| icon_unk      | L'icône affichée quand un jeu manque une icône                                                               |                                                                    |
| launch_dot    | Les points affichés lors du lancement d'une partie (Thème DSi)                                               |                                                                    |
| moving_arrow  | La flèche affichée quand une partie est déplacée (Thème DSi)                                                 |                                                                    |
| progress      | Animation de chargement progressif avec 8 images                                                             | 9 couleurs                                                         |
| scroll_window | La partie de la barre de défilement qui indique les icônes qui sont en vue                                   | 7 couleurs                                                         |
| small_cart    | Les icônes affichées en haut (Thème 3DS) et dans le menu SELECT (Thème DSi)                                  |                                                                    |
| start_border  | La bordure avec des images d'animation qui indique l'icône sélectionnée (Thème DSi)                          |                                                                    |
| start_text    | Le texte affiché sur la bordure start (Thème DSi)                                                            | 4 couleurs                                                         |
| wirelessicons | Les icônes affichées pour indiquer qu'un jeu supporte le sans fil                                            | 7 couleurs                                                         |

### Textures de l'interface (dossier `ui`)

| Texture          | Description                                                   |
| ---------------- | ------------------------------------------------------------- |
| date_time_font | La police pour afficher la date et l'heure                    |
| Lshoulder        | Le bouton arrière gauche                                      |
| Lshoulder_greyed | Le bouton arrière gauche quand il n'y a pas de pages à gauche |
| Rshoulder        | Le bouton arrière droit                                       |
| Rshoulder_greyed | Le bouton arrière droite quand il n'y a pas de pages à droite |

### Texture vidéo (dossie r`video`)

`3dsRotatingCubes.rvid` est un fichier vidéo Rocket. Pour plus d'informations sur la conversion de vidéos à rvid, lisez [Converting a video to .rvid](https://github.com/RocketRobz/Vid2RVID/wiki/Converting-a-video-to-.rvid) sur le wiki Vid2RVID. Si vous ne voulez pas que cela soit affiché, vous pouvez simplement le supprimer.

## Configuration du thème

Vous pouvez configurer diverses options sur la façon dont le thème est affiché dans le `theme.ini` pour accommoder des textures ou des sprites plus grands.

| Valeur                   | Description                                                                                                                            | Par défaut (3DS) | Par défaut (DSi) |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ---------------- |
| `StartBorderRenderY`     | La position Y initiale de la bordure de démarage                                                                                       | 92               | 81               |
| `StartBorderSpriteW`     | La largeur du sprite de bordure de démarage. Notez que la texture de la bordure start est exactement la moitié de la bordure complète. | 32               | 32               |
| `StartBorderSpriteH`     | La hauteur du sprite de bordure de démarrage                                                                                           | 64               | 80               |
| `TitleboxRenderY`        | La position Y initiale de l'écran titre affiché                                                                                        | 96               | 85               |
| `BubbleTipRenderY`       | La position Y de la pointe de la bulle qui est affichée sur la bordure de démarrage                                                    | 98               | 80               |
| `BubbleTipRenderX`       | La position X de la pointe de la bulle qui est affichée sur la bordure de démarrage                                                    | 125              | 22               |
| `BubbleTipSpriteH`       | La hauteur du sprite de la pointe de la bulle                                                                                          | 7                | 8                |
| `BubbleTipSpriteW`       | La largeur du sprite de la pointe de la bulle                                                                                          | 7                | 11               |
| `RotatingCubesRenderY`   | La position Y sur l'écran supérieur d'affichage des cubes rotatifs                                                                     | 78               | N/A              |
| `ShoulderLRenderY`       | La position Y sur l'écran supérieur pour dessiner le bouton arrière gauche                                                             | 172              | 172              |
| `ShoulderLRenderX`       | La position X sur l'écran supérieur pour dessiner le bouton arrière gauche                                                             | 0                | 0                |
| `ShoulderRRenderY`       | La position Y sur l'écran supérieur pour dessiner le bouton arrière droit                                                              | 172              | 172              |
| `ShoulderRRenderX`       | La position X sur l'écran supérieur pour dessiner le bouton arrière droit                                                              | 178              | 178              |
| `VolumeRenderX`          | La position X sur l'écran supérieur pour dessiner l'icône du volume                                                                    | 4                | 4                |
| `VolumeRenderY`          | La position Y sur l'écran supérieur pour dessiner l'icône du volume                                                                    | 16               | 16               |
| `BatteryRenderY`         | La position Y sur l'écran supérieur pour dessiner l'icône de la batterie                                                               | 5                | 5                |
| `BatteryRenderX`         | La position X sur l'écran supérieur pour dessiner l'icône de la batterie                                                               | 235              | 235              |
| `RenderPhoto`            | Afficher ou non une photo sur l'écran supérieur                                                                                        | 0                | 1                |
| `StartTextUserPalette`   | Utiliser la couleur du profil DS pour la palette du texte de démarage                                                                  | N/A              | 1                |
| `StartBorderUserPalette` | Utiliser ou non la couleur du profil DS pour la palette de la bordure de départ                                                        | N/A              | 1                |
| `ButtonArrowUserPalette` | Utiliser ou non la couleur du profil DS pour la palette des boutons flèches en bas de l'écran                                          | N/A              | 1                |
| `MovingArrowUserPalette` | Utiliser la couleur du profil DS pour la palette de la flèche affichée lors du déplacement des icônes                                  | N/A              | 1                |
| `LaunchDotsUserPalette`  | Utiliser ou non la couleur du profil DS pour la palette des points de lancement                                                        | N/A              | 1                |
| `DialogBoxUserPalette`   | Utiliser ou non la couleur du profil DS pour la palette de la boîte de dialogue                                                        | N/A              | 1                |

## Customisation du thème avancée

Parfois, vous pouvez avoir besoin de plus que le nombre de couleurs par défaut pour certaines textures palettées. Dans de tels cas, vous devez modifier le fichier de compilation `.grit` de la texture pour augmenter la taille de la palette.

Par exemple, dans `scroll_window.grit`, vous devez éditer `-pn7` et changer `7` en `16` pour 16 couleurs. Sachez que si vous supprimez toute la ligne `-pn` , vous risquez de rencontrer des résultats inattendus.

Notez également que le maximum absolu de 16 couleurs par texture est obligatoire et ne peut pas être modifié. Même si vous augmentez le nombre de couleurs dans la palette à plus de 16, pas plus de 16 couleurs de données de palette seront chargées. Avec la quantité de textures chargées, il peut ne pas y avoir assez de mémoire pour contenir 16 couleurs de palettes pour chaque texture. Gardez cela à l'esprit lors de l'ajustement des tailles de palette.

De plus, les textures palettées doivent avoir des dimensions multiples de 2. Les tailles de textures palettées ne peuvent pas être modifiées sauf pour `bubble` et `start_border`, qui peut avoir des dimensions de sprite configurables dans le `theme.ini`. Cependant, notez que cela peut avoir des conséquences inattendues.

Les textures palettées ne sont pas vérifiées pour la validité. Une texture non valide devrait être rare si elle est créée avec le fichier makefile fourni, mais dans certains cas, une texture corrompue fera que le menu ne se charge pas du tout.

## Musique d'arrière-plan personnalisée et effets sonores

Les thèmes du menu DSi et de la 3DS prennent également en charge la musique personnalisée. Consultez [Skins DSi/3DS - SFX Customisé](custom-dsi-3ds-sfx) pour plus de détails.
