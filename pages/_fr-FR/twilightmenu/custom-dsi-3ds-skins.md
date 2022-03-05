---
lang: fr-FR
layout: wiki
section: twilightmenu
category: customization
title: Comment créer des skins DSi/3DS
description: Comment créer des skins DSi et 3DS personnalisés pour TWiLight Menu++
---

Pour réaliser un skin de TWiLight Menu++, vous aurez besoin d'un éditeur d'images capable d'exporter des fichiers `.png`, des fichiers `.bmp` ou `.png` 16 <abbr title="Bits Per Pixel">BPP</abbr>, et 4 fichiers `.bmp` BPP. Idéalement, il devrait également être en mesure de réorganiser manuellement les palettes d'images. [GIMP](https://www.gimp.org) est recommandé et sera utilisé pour ce guide car il est capable de tout ce qui est nécessaire.

## Partie 1 : Télécharger les exemples
La première chose à faire est de télécharger les [skins d'exemple](/assets/files/skin-examples.zip). Ils peuvent être utilisés comme base pour votre skin et sont déjà dans le bon format, donc si vous avez des problèmes plus tard, vous pouvez comparer avec ceux-ci.

## Partie 2 : Modifier les images
Téléchargez et installez [GIMP](https://www.gimp.org), vous pouvez utiliser un autre éditeur si vous le souhaitez mais ce guide utilise GIMP.

Une fois installé, ouvrez GIMP et sélectionnez `Windows` -> `Dialogues ancrables` -> `Carte des couleurs`. Cela ouvre la boîte de dialogue de la carte des couleurs, qui sera utile lors de l'édition d'images palettisées.

Vous pouvez maintenant ouvrir l'image que vous voulez modifier dans GIMP et passer à la section ci-dessous en fonction du dossier dans lequel elle se trouve. Notez que TWiLight Menu++ est pointilleux sur le format exact des images et qu'il varie selon le dossier dans lequel elles se trouvent, assurez-vous donc d'exporter comme indiqué dans la section.

### Textures d'arrière-plan (dossier `background`)
Il peut s'agir de fichiers PNG ou de fichiers BMP 16 bits (`A1 R5 G5 B5` ou `X1 R5 G5 B5`).

| Texture            | Description                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------- |
| bottom             | La texture de l'arrière-plan inférieur lorsqu’une icône n'est pas survolée                                    |
| bottom_bubble      | La texture de l'arrière-plan inférieur lorsqu’une icône est survolée                                          |
| bottom_ds          | Pour le thème 3DS, la texture de l'arrière-plan inférieur lorsqu'une icône n'est pas survolée sur une DS Lite |
| bottom_bubble_ds | Pour le thème 3DS, la texture de l'arrière-plan inférieur lorsqu'une icône est survolée sur une DS Lite       |
| top                |                                                                                                               |

### Textures de batterie (dossier `battery`)
Il doit s'agir de fichiers PNG. N'importe quel fichier peut être utilisé, mais seuls les fichiers 100 % transparents sont acceptés. Tout pixel transparent dans une icône doit l'être dans toutes les autres afin qu'il soit correctement écrasé en cas de changement.

| Texture            | Description                                                                                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| battery0           | Clignote avec `batterie1` lorsque la batterie est très faible                                                                                           |
| battery1           | 0-4 sont utilisés en mode DSi                                                                                                                           |
| battery1purple     | Les icônes violettes sont utilisées lorsque `Couleur LED alim.` (pour « couleur de la LED d'alimentation ») est défini sur `Violet` dans les paramètres |
| battery2           |                                                                                                                                                         |
| battery2purple     |                                                                                                                                                         |
| battery3           |                                                                                                                                                         |
| battery3purple     |                                                                                                                                                         |
| battery4           |                                                                                                                                                         |
| battery4purple     |                                                                                                                                                         |
| batterycharge      |                                                                                                                                                         |
| batterychargeblink | Clignote avec `batterycharge` pendant la charge                                                                                                         |
| batteryfull        | Utilisé en mode DS sur DSi/3DS                                                                                                                          |
| batteryfullDS      | Utilisé avec la DS Tank/DS Lite                                                                                                                         |
| batterylow         | Utilisé en mode DS                                                                                                                                      |

### Textures palettisées (dossier `grf`)
Il doit s'agir de 4 fichiers BMP BPP (16 couleurs).

Pour les modifier dans GIMP, sélectionnez `Image` -> `Mode` -> `RGB` pour permettre de changer les couleurs, puis, une fois les couleurs modifiées, sélectionner `Image` -> `Mode` -> `Indexé…` pour reconvertir en palettisé. Lorsque vous passez en mode indexé, assurez-vous que `Générer une palette optimale` est coché et que `Nombre maximal de couleurs` est fixé à `16`.

**Note :** Certaines images du thème DSi ont leurs palettes remplacées en fonction de la couleur de profil de l'utilisateur. Si vous modifiez les couleurs de ces derniers, assurez-vous que l'option `UserPalette` qui lui est destinée dans le `theme.ini` est définie sur `0`.

Après avoir converti en indexé, allez dans le dialogue de la carte des couleurs et assurez-vous que la couleur transparente (#FF00FF) est la couleur #0 dans la carte des couleurs. Si ce n'est pas le cas, faites un clic droit dans la carte des couleurs et sélectionnez `Réorganiser la carte des couleurs…` puis déplacez la couleur transparente pour qu'elle soit la première couleur de la carte des couleurs et sélectionnez `OK`.

S'il y a moins de 16 couleurs dans votre carte de couleurs finale, appuyez sur le bouton `+` en bas de la boîte de dialogue de la carte de couleurs jusqu'à ce que vous ayez 16 couleurs.

Lors de l'exportation, il est recommandé de cocher la case `Ne pas écrire les informations sur l'espace couleur` sous le menu déroulant `Options de compatibilité`.

| Texture       | Description                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------ |
| bips          | Les points affichés en bas de la barre de défilement (thème DSi)                                             |
| box           | La texture de la boîte, contenant à la fois des textures pleines et vides (thème DSi)                        |
| box_empty     | La texture affichée pour une boîte vide (thème 3DS)                                                          |
| box_full      | La texture affichée pour une boîte avec une icône (thème 3DS)                                                |
| brace         | La texture de l'accolade affichée après la première et la dernière icône (thème DSi)                         |
| bubble        | La partie inférieure de la bulle qui s'affiche au-dessus de la bordure de démarrage ou de la boîte d'icônes  |
| button_arrow  | Les textures pour les flèches de chaque côté de la barre de défilement inférieure (thème DSi)                |
| cornerbutton  | Les boutons qui sont affichés dans le menu SELECT (thème DSi) (le nom est basé sur une ancienne utilisation) |
| cursor        | La bordure avec des images d'animation qui indiquent l'icône sélectionnée (thème 3DS)                        |
| dialogbox     | L'arrière-plan de la boîte de dialogue qui glisse vers le bas                                                |
| folder        | L'icône des dossiers                                                                                         |
| icon_a26      | L'icône des jeux Atari 2600                                                                                  |
| icon_gb       | L'icône des jeux Game Boy                                                                                    |
| icon_gba      | L'icône des jeux GBA (tous les thèmes) et l'icône supérieure pour lancer GBARunner2 (thème 3DS)              |
| icon_gbamode  | L'icône du mode GBA natif                                                                                    |
| icon_gg       | L'icône des jeux Game Gear                                                                                   |
| icon_int      | L'icône des jeux Intellivision                                                                               |
| icon_m5       | L'icône des jeux Sord M5                                                                                     |
| icon_manual   | L'icône du manuel                                                                                            |
| icon_md       | L'icône des jeux SEGA Mega Drive                                                                             |
| icon_nes      | L'icône des jeux NES                                                                                         |
| icon_ngp      | L'icône des jeux Neo Geo Pocket                                                                              |
| icon_pce      | L'icône des jeux PC Engine/TurboGrafx-16                                                                     |
| icon_plg      | L'icône des plugins DSTWO                                                                                    |
| icon_settings | L'icône des paramètres Nintendo DSi                                                                          |
| icon_sg       | L'icône des jeux SEGA SG-1000                                                                                |
| icon_sms      | L'icône des jeux SEGA Master System                                                                          |
| icon_snes     | L'icône des jeux SNES                                                                                        |
| icon_unk      | L'icône affichée lorsqu'il manque une icône pour un jeu                                                      |
| icon_ws       | L'icône des jeux WonderSwan                                                                                  |
| launch_dot    | Les points affichés lors du lancement d'un jeu (thème DSi)                                                   |
| moving_arrow  | La flèche affichée lorsqu'un jeu est déplacé (thème DSi)                                                     |
| progress      | L'animation de chargement de la progression avec 8 frames                                                    |
| scroll_window | La partie de la barre de défilement qui indique les icônes qui sont visibles                                 |
| small_cart    | Les icônes affichées en haut (thème 3DS) et dans le menu SELECT (thème DSi)                                  |
| start_border  | La bordure avec des images d'animation qui indique l'icône sélectionnée (thème DSi)                          |
| start_text    | Le texte affiché sur la bordure de démarrage (thème DSi)                                                     |
| wirelessicons | Les icônes affichées pour indiquer qu'un jeu dispose d'un support sans fil                                   |

### Textures du menu DS Classic (dossier `quickmenu`)
Il doit s'agir de fichiers PNG.

| Texture    | Description                                             |
| ---------- | ------------------------------------------------------- |
| bottombg   | Fond de l'écran inférieur                               |
| phat_topbg | Fond pour l'écran supérieur de la DS Tank               |
| topbg      | Fond pour l'écran supérieur sur tout autre modèle de DS |

### Textures de l'interface utilisateur (dossier `ui`)
Il doit s'agir de fichiers PNG. N'importe quel fichier peut être utilisé, mais seuls les fichiers 100 % transparents sont acceptés. Tout pixel transparent dans une texture doit l'être dans toutes les textures associées, afin qu'il soit correctement écrasé en cas de changement.

| Texture          | Description                                             |
| ---------------- | ------------------------------------------------------- |
| date_time_font | La police pour afficher la date et l'heure              |
| Lshoulder        | La gâchette gauche                                      |
| Lshoulder_greyed | La gâchette gauche quand il n'y a pas de pages à gauche |
| Rshoulder        | La gâchette droite                                      |
| Rshoulder_greyed | La gâchette droite quand il n'y a pas de pages à droite |

### Texture vidéo (dossier `video`)
Utilisé uniquement pour le thème 3DS, `3dsRotatingCubes.rvid` est un fichier Rocket Video. Pour plus d'informations sur la conversion de vidéos en rvid, lisez [Converting a video to .rvid](https://github.com/RocketRobz/Vid2RVID/wiki/Converting-a-video-to-.rvid) sur le wiki de Vid2RVID. Si vous ne voulez pas qu'il soit affiché, vous pouvez simplement le supprimer.

### Textures du volume (dossier `volume`)
Il doit s'agir de fichiers PNG. N'importe quel fichier peut être utilisé, mais seuls les fichiers 100 % transparents sont acceptés. Tout pixel transparent dans une texture doit l'être dans toutes les autres afin qu'il soit correctement écrasé lors d'un changement.

| Texture | Description                              |
| ------- | ---------------------------------------- |
| volume0 | Le volume n'est affiché qu'en mode DSi   |
| volume1 | 0 est en sourdine, 4 est en plein volume |
| volume2 |                                          |
| volume3 |                                          |
| volume4 |                                          |

## Configuration du thème (fichier `theme.ini`)
Vous pouvez configurer diverses options sur la façon dont le thème est affiché dans le fichier `theme.ini` pour tenir compte de sprites ou de textures plus grands. Pour les options vrai/faux, `0` est faux et `1` est vrai. Les options dont la valeur par défaut est vide pour un thème sont inutilisées pour ce thème.

| Valeur                   | Description                                                                                                                                                | Par défaut (3DS) | Par défaut (DSi) |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ---------------- |
| `StartBorderRenderY`     | La position Y initiale de la bordure de démarrage                                                                                                          | 92               | 81               |
| `StartBorderSpriteW`     | La largeur du sprite de la bordure de démarrage. Notez que la texture de la bordure de démarrage correspond exactement à la moitié de la bordure complète. | 32               | 32               |
| `StartBorderSpriteH`     | La hauteur du sprite de la bordure de démarrage                                                                                                            | 64               | 80               |
| `StartTextRenderY`       | La position Y initiale de la texture de démarrage                                                                                                          | 143              | 143              |
| `BubbleTipRenderY`       | La position Y de l'extrémité de la bulle qui est affichée au-dessus de la bordure de démarrage                                                             | 98               | 80               |
| `BubbleTipRenderX`       | La position X de l'extrémité de la bulle qui est affichée au-dessus de la bordure de démarrage                                                             | 125              | 122              |
| `BubbleTipSpriteW`       | La largeur du sprite de l'extrémité de la bulle                                                                                                            | 7                | 11               |
| `BubbleTipSpriteH`       | La hauteur du sprite de l'extrémité de la bulle                                                                                                            | 7                | 8                |
| `TitleboxRenderY`        | La position Y initiale de la zone du texte du titre                                                                                                        | 96               | 85               |
| `TitleboxTextY`          | La position Y initiale du texte du titre                                                                                                                   | 55               | 30               |
| `TitleboxTextW`          | La largeur maximale du texte du titre                                                                                                                      | 200              | 240              |
| `MacroTitleboxTextY`     | La position Y initiale du texte du titre en mode macro                                                                                                     |                  | 40               |
| `MacroTitleboxTextW`     | La largeur maximale du texte du titre en mode macro                                                                                                        |                  | 224              |
| `TitleboxTextLarge`      | Utilisation ou non de la grande police pour le texte du titre                                                                                              | 0                | 1                |
| `TitleboxMaxLines`       | Le nombre maximum de lignes de texte à afficher pour le titre                                                                                              | 3                | 4                |
| `VolumeRenderX`          | La position X sur l'écran supérieur pour afficher l'icône du volume                                                                                        | 4                | 4                |
| `VolumeRenderY`          | La position Y sur l'écran supérieur pour afficher l'icône du volume                                                                                        | 5                | 5                |
| `ShoulderLRenderY`       | La position Y sur l'écran supérieur pour afficher la gâchette gauche                                                                                       | 172              | 172              |
| `ShoulderLRenderX`       | La position X sur l'écran supérieur pour afficher la gâchette gauche                                                                                       | 0                | 0                |
| `ShoulderRRenderY`       | La position Y sur l'écran supérieur pour afficher la gâchette droite                                                                                       | 172              | 172              |
| `ShoulderRRenderX`       | La position X sur l'écran supérieur pour afficher la gâchette droite                                                                                       | 178              | 178              |
| `BatteryRenderY`         | La position Y sur l'écran supérieur pour afficher l'icône de la batterie                                                                                   | 5                | 5                |
| `BatteryRenderX`         | La position X sur l'écran supérieur pour afficher l'icône de la batterie                                                                                   | 235              | 235              |
| `FontPalette1`           | La couleur transparente de la police, inutilisée pour les polices par défaut                                                                               | 0x0000           | 0x0000           |
| `FontPalette2`           | Les couleurs de la police, utilisez [ce site](http://www.conradshome.com/html2bgr15/) pour convertir                                                       | 0xDEF7           | 0xDEF7           |
| `FontPalette3`           |                                                                                                                                                            | 0xC631           | 0xC631           |
| `FontPalette4`           |                                                                                                                                                            | 0xA108           | 0xA108           |
| `StartTextUserPalette`   | Utilisation ou non de la couleur du profil DS pour la palette du texte de démarrage                                                                        |                  | 1                |
| `StartBorderUserPalette` | Utilisation ou non de la couleur du profil DS pour la palette de la bordure de démarrage                                                                   |                  | 1                |
| `ButtonArrowUserPalette` | Utilisation de la couleur du profil DS pour la palette des boutons fléchés en bas de l'écran                                                               |                  | 1                |
| `MovingArrowUserPalette` | Utilisation ou non de la couleur du profil DS pour la palette de la flèche affichée lors du déplacement des icônes                                         |                  | 1                |
| `LaunchDotsUserPalette`  | Utilisation ou non de la couleur du profil DS pour la palette des points de lancement                                                                      |                  | 1                |
| `DialogBoxUserPalette`   | Utilisation de la couleur du profil DS pour la palette de la boîte de dialogue                                                                             |                  | 1                |
| `RenderPhoto`            | Afficher ou non une photo sur l'écran supérieur                                                                                                            | 0                | 1                |
| `RotatingCubesRenderY`   | La position Y sur l'écran supérieur pour afficher les cubes en rotation                                                                                    | 78               |                  |

## Partie 3 : Ajout dans TWiLight Menu++
Une fois que vous avez édité quelques graphismes et que vous souhaitez tester votre skin, il suffit de copier votre dossier skin (le dossier contenant les dossiers `background`, `battery`, etc.) vers `sd :/_nds/TWiLightMenu/3dsmenu/themes/` ou `sd:/_nds/TWiLightMenu/dsimenu/themes/` pour les skins des thèmes 3DS et DSi respectivement.

## Partie 4 : Partager votre skin
Une fois que vous avez terminé votre skin, vous pouvez le partager avec la communauté en créant une demande de tirage l'ajoutant au dépôt GitHub [DS-Homebrew/twlmenu-extras](https://github.com/DS-Homebrew/twlmenu-extras) dans un fichier `.7z`. Si vous n'êtes pas familier avec l'utilisation de git, vous pouvez aussi simplement créer un problème sur ce dépôt avec un fichier zip de votre skin pour demander qu'il soit ajouté.

## Musique d'arrière-plan personnalisée et effets sonores
Les thèmes DSi et 3DS prennent également en charge la musique personnalisée. Consultez [Skins DSi/3DS - Effets sonores personnalisés](custom-dsi-3ds-sfx) pour plus de détails.
