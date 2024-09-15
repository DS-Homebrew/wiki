---
lang: fr-FR
layout: wiki
section: twilightmenu
category: customization
title: Comment créer des skins DSi/3DS
description: Comment créer des skins DSi et 3DS personnalisés pour TWiLight Menu++
---

Pour réaliser un skin de TWiLight Menu++, vous aurez besoin d'un éditeur d'images capable d'exporter des fichiers `.png`, des fichiers `.bmp` ou `.png` 16 <abbr title="Bits Per Pixel">BPP</abbr>, et des fichiers `.bmp` 4 BPP. Idéalement, il devrait également être en mesure de réorganiser manuellement les palettes d'images. [GIMP](https://www.gimp.org) est recommandé et sera utilisé pour ce guide car il est capable de tout ce qui est nécessaire.

## Partie 1 : Télécharger les exemples
La première chose à faire est de télécharger les [skins d'exemple](/assets/files/skin-examples.zip). Ils peuvent être utilisés comme base pour votre skin et sont déjà dans le bon format, donc si vous avez des problèmes plus tard, vous pouvez comparer avec ceux-ci.

## Partie 2 : Modifier les images
Téléchargez et installez [GIMP](https://www.gimp.org/)
- D'autres éditeurs d'images tels que Photoshop peuvent fonctionner, mais GIMP sera utilisé dans ce guide

Une fois installé, ouvrez GIMP et sélectionnez `Fenêtres` -> `Fenêtres ancrables` -> `Palette`. Cela ouvre la boîte de dialogue de la palette, qui sera utile lors de l'édition d'images palettisées.

Vous pouvez maintenant ouvrir l'image que vous voulez modifier dans GIMP et passer à la section ci-dessous en fonction du dossier dans lequel elle se trouve. Notez que TWiLight Menu++ est pointilleux sur le format exact des images et qu'il varie selon le dossier dans lequel elles se trouvent, assurez-vous donc d'exporter comme indiqué dans la section.

### Textures d'arrière-plan (dossier `background`)
Il peut s'agir de fichiers PNG ou de fichiers BMP 16 bits (`A1 R5 G5 B5` ou `X1 R5 G5 B5`).
- Si vous utilisez des fichiers BMP, vous pouvez les régler sur 16 bits dans les options avancées lors de l'exportation. Vous devrez peut-être le faire à chaque fois que vous exporterez en BMP

| Texture               | Description                                                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------------------------------ |
| top                   | La texture de fond de l'écran supérieur                                                                            |
| top_photo             | Texture de l'arrière-plan de l'écran supérieur lorsqu'une photo est affichée                                       |
| bottom                | La texture de l'arrière-plan inférieur lorsqu’une icône n'est pas survolée                                         |
| bottom_ds             | Pour le thème 3DS, la texture de l'arrière-plan inférieur lorsqu'une icône n'est pas survolée sur une DS Tank/Lite |
| bottom_macro          | Pour le thème DSi, la texture de l'arrière-plan lorsqu'une icône n'est pas survolée en utilisant le mode Macro     |
| bottom_bubble         | La texture de l'arrière-plan inférieur lorsqu’une icône est survolée                                               |
| bottom_bubble_ds    | Pour le thème 3DS, la texture de l'arrière-plan inférieur lorsqu'une icône est survolée sur une DS Tank/Lite       |
| bottom_bubble_macro | Pour le thème DSi, la texture de l'arrière-plan lorsqu'une icône est survolée en utilisant le mode Macro           |
| bottom_moving         | Pour le thème DSi, la texture de l'arrière-plan inférieur lors du déplacement d'une icône                          |
| bottom_moving_macro | For the DSi theme, the background texture when moving an icon while using Macro Mode                               |

### Textures de batterie (dossier `battery`)
Il doit s'agir de fichiers PNG. La transparence est prise en charge, mais seule une transparence à 100 % fonctionnera.

| Texture            | Description/Notes                                                                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| battery0           | Clignote avec `battery1` lorsque la batterie est très faible                                                                                            |
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
These must be 4 BPP (16 color) BMP files.

Pour les modifier dans GIMP, sélectionnez `Image` -> `Mode` -> `RVB` pour permettre de changer les couleurs, puis, une fois les couleurs modifiées, sélectionner `Image` -> `Mode` -> `Couleurs indexées…` pour reconvertir en palettisé. Lorsque vous passez en mode indexé, assurez-vous que `Générer une palette optimale` est coché et que `Nombre maximal de couleurs` est fixé à `16`.

**Note :** Certaines images du thème DSi ont leurs palettes remplacées en fonction de la couleur de profil de l'utilisateur. Si vous modifiez les couleurs de ces derniers, assurez-vous que l'option `UserPalette` qui lui est destinée dans le `theme.ini` est définie sur `0`.

Après avoir converti en indexé, allez dans le dialogue de la palette et assurez-vous que la couleur transparente (#FF00FF) est la couleur #0 dans la palette. Si ce n'est pas le cas, faites un clic droit sur la palette et sélectionnez `Réorganiser la palette…` puis déplacez la couleur transparente pour qu'elle soit la première couleur de la carte des couleurs et sélectionnez `OK`.

S'il y a moins de 16 couleurs dans votre palette finale, appuyez sur le bouton `+` en bas de la boîte de dialogue de la palette jusqu'à ce que vous ayez 16 couleurs.

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
| icon_col      | L'icône des jeux Colecovision                                                                                |
| icon_gb       | L'icône des jeux Game Boy                                                                                    |
| icon_gba      | L'icône des jeux GBA                                                                                         |
| icon_gbamode  | L'icône du mode GBA natif                                                                                    |
| icon_gg       | L'icône des jeux Game Gear                                                                                   |
| icon_img      | L'icône des images BMP, GIF et PNG                                                                           |
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
| progress      | L'animation de chargement de la progression avec huit images                                                 |
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
Il doit s'agir de fichiers PNG. La transparence est prise en charge, mais seule une transparence à 100 % fonctionnera. Tout pixel transparent dans une texture doit l'être dans toutes les autres, afin qu'il soit correctement écrasé lors d'un changement.

| Texture                  | Description                                                  |
| ------------------------ | ------------------------------------------------------------ |
| Lshoulder                | La gâchette gauche                                           |
| Lshoulder_greyed         | La gâchette gauche quand il n'y a pas de pages à gauche      |
| Lshoulder_photo          | La gâchette gauche lorsqu'une photo est affichée             |
| Lshoulder_photo_greyed | La gâchette gauche, sans page à gauche et une photo affichée |
| Rshoulder                | La gâchette droite                                           |
| Rshoulder_greyed         | La gâchette droite quand il n'y a pas de pages à droite      |
| Rshoulder_photo          | La gâchette droite lorsqu'une photo est affichée             |
| Rshoulder_photo_greyed | La gâchette droite, sans page à gauche et une photo affichée |

### Texture vidéo (dossier `video`)
Utilisé uniquement pour le thème 3DS, `3dsRotatingCubes.rvid` est un fichier Rocket Video. Pour plus d'informations sur la conversion de vidéos en rvid, lisez [Converting a video to .rvid](https://github.com/RocketRobz/Vid2RVID/wiki/Converting-a-video-to-.rvid) sur le wiki de Vid2RVID. Si vous ne voulez pas qu'il soit affiché, vous pouvez simplement le supprimer.

### Textures du volume (dossier `volume`)
Les textures de volume ne sont affichées qu'en mode DSi.

Il doit s'agir de fichiers PNG. La transparence est prise en charge, mais seule une transparence à 100 % fonctionnera.


| Texture | Description/Notes                        |
| ------- | ---------------------------------------- |
| volume0 | 0 est en sourdine, 4 est en plein volume |
| volume1 |                                          |
| volume2 |                                          |
| volume3 |                                          |
| volume4 |                                          |

## Configuration du thème (fichier `theme.ini`)
Vous pouvez configurer diverses options sur la façon dont le thème est dessiné dans le fichier `theme.ini` pour tenir compte de graphismes plus grands ou de dispositions différentes. Pour les options vrai/faux, `0` est faux, et `1` est vrai. Les options dont la valeur par défaut est vide pour un thème sont inutilisées dans ce thème.

| Valeur                     | Description/Notes                                                                                                                                                         | Par défaut (3DS) | Par défaut (DSi) |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ---------------- |
| `StartBorderRenderY`       | La position Y initiale de la bordure de démarrage                                                                                                                         | 92               | 81               |
| `StartBorderSpriteW`       | La largeur du sprite de la bordure de démarrage. Notez que la texture de la bordure de démarrage correspond exactement à la moitié de la bordure complète                 | 32               | 32               |
| `StartBorderSpriteH`       | La hauteur du sprite de la bordure de démarrage                                                                                                                           | 64               | 80               |
| `StartTextRenderY`         | La position Y initiale du texte de démarrage                                                                                                                              | 143              | 143              |
| `BubbleTipRenderX`         | La position X de l'extrémité de la bulle qui est affichée au-dessus de la bordure de démarrage                                                                            | 125              | 122              |
| `BubbleTipRenderY`         | La position Y de l'extrémité de la bulle qui est affichée au-dessus de la bordure de démarrage                                                                            | 98               | 80               |
| `BubbleTipSpriteW`         | La largeur du sprite de l'extrémité de la bulle                                                                                                                           | 7                | 11               |
| `BubbleTipSpriteH`         | La hauteur du sprite de l'extrémité de la bulle                                                                                                                           | 7                | 8                |
| `TitleboxRenderY`          | La position Y initiale de la zone du texte du titre                                                                                                                       | 96               | 85               |
| `TitleboxTextY`            | La position Y initiale du texte du titre                                                                                                                                  | 55               | 30               |
| `TitleboxTextW`            | La largeur maximale du texte du titre                                                                                                                                     | 200              | 240              |
| `TitleboxTextLarge`        | Utilisation ou non de la grande police pour le texte du titre                                                                                                             | 0                | 1                |
| `TitleboxMaxLines`         | Le nombre maximum de lignes de texte à afficher pour le titre                                                                                                             | 3                | 4                |
| `VolumeRenderX`            | La position X sur l'écran supérieur pour afficher l'icône du volume                                                                                                       | 4                | 4                |
| `VolumeRenderY`            | La position Y sur l'écran supérieur pour afficher l'icône du volume                                                                                                       | 5                | 5                |
| `ShoulderLRenderX`         | La position X sur l'écran supérieur pour afficher la gâchette gauche                                                                                                      | 0                | 0                |
| `ShoulderLRenderY`         | La position Y sur l'écran supérieur pour afficher la gâchette gauche                                                                                                      | 172              | 172              |
| `ShoulderRRenderX`         | La position X sur l'écran supérieur pour afficher la gâchette droite                                                                                                      | 178              | 178              |
| `ShoulderRRenderY`         | La position Y sur l'écran supérieur pour afficher la gâchette droite                                                                                                      | 172              | 172              |
| `BatteryRenderX`           | La position X sur l'écran supérieur pour afficher l'icône de la batterie                                                                                                  | 235              | 235              |
| `BatteryRenderY`           | La position Y sur l'écran supérieur pour afficher l'icône de la batterie                                                                                                  | 5                | 5                |
| `UsernameRenderX`          | La position X sur l'écran supérieur pour afficher le texte du nom d'utilisateur                                                                                           | 28               | 28               |
| `UsernameRenderY`          | La position Y sur l'écran supérieur pour afficher le texte du nom d'utilisateur                                                                                           | 15               | 15               |
| `UsernameRenderXDS`        | La position X sur l'écran supérieur pour afficher le texte du nom d'utilisateur, sur une DS Tank/Lite                                                                     | 4                | 4                |
| `DateRenderX`              | The X position on the top screen to draw the date text                                                                                                                    | 162              | 162              |
| `DateRenderY`              | The Y position on the top screen to draw the date text                                                                                                                    | 7                | 7                |
| `TimeRenderX`              | The X position on the top screen to draw the time text                                                                                                                    | 200              | 200              |
| `TimeRenderY`              | The Y position on the top screen to draw the time text                                                                                                                    | 7                | 7                |
| `PurpleBatteryAvailable`   | Utilisation ou non des icônes violettes de la batterie lorsque l'option `Couleur DEL alim.` est réglée sur `Violet` dans les paramètres                                   | 1                | 1                |
| `FontPalette1`             | La couleur transparente de la police, inutilisée pour les polices par défaut                                                                                              | 0x0000           | 0x0000           |
| `FontPalette2`             | Les couleurs de la police, utilisez [ce site](http://www.conradshome.com/html2bgr15/) pour convertir                                                                      | 0xDEF7           | 0xDEF7           |
| `FontPalette3`             |                                                                                                                                                                           | 0xC631           | 0xC631           |
| `FontPalette4`             |                                                                                                                                                                           | 0xA108           | 0xA108           |
| `FontPaletteDateTime1`     | La couleur de remplacement transparente de la police pour la date et l'heure                                                                                              | 0x0000           | 0x0000           |
| `FontPaletteDateTime2`     | La couleur de remplacement de la police pour la date et l'heure                                                                                                           | 0xDEF7           | 0xA529           |
| `FontPaletteDateTime3`     |                                                                                                                                                                           | 0xC631           | 0xBDEF           |
| `FontPaletteDateTime4`     |                                                                                                                                                                           | 0xA108           | 0xD6B5           |
| `FontPaletteTitlebox1`     | La couleur de remplacement transparente de la police pour la boîte du titre de la ROM                                                                                     | 0x0000           | 0x0000           |
| `FontPaletteTitlebox2`     | La couleur de remplacement de la police pour la boîte du titre de la ROM                                                                                                  | 0xDEF7           | 0xDEF7           |
| `FontPaletteTitlebox3`     |                                                                                                                                                                           | 0xC631           | 0xC631           |
| `FontPaletteTitlebox4`     |                                                                                                                                                                           | 0xA108           | 0xA108           |
| `FontPaletteDialog1`       | La couleur de remplacement transparente de la police pour les boîtes de dialogue                                                                                          | 0x0000           | 0x0000           |
| `FontPaletteDialog2`       | La couleur transparente de la police pour les boîtes de dialogue                                                                                                          | 0xDEF7           | 0xDEF7           |
| `FontPaletteDialog3`       |                                                                                                                                                                           | 0xC631           | 0xC631           |
| `FontPaletteDialog4`       |                                                                                                                                                                           | 0xA108           | 0xA108           |
| `FontPaletteOverlay1`      | La couleur transparente de la police pour le texte superposé                                                                                                              | 0x0000           | 0x0000           |
| `FontPaletteOverlay2`      | La couleur de remplacement de la police pour le texte superposé                                                                                                           | 0xDEF7           | 0xDEF7           |
| `FontPaletteOverlay3`      |                                                                                                                                                                           | 0xC631           | 0xC631           |
| `FontPaletteOverlay4`      |                                                                                                                                                                           | 0xA108           | 0xA108           |
| `FontPaletteUsername1`     | La couleur de remplacement transparente de la police pour le nom d'utilisateur                                                                                            | 0x0000           | 0x0000           |
| `FontPaletteUsername2`     | La couleur de remplacement de la police pour le nom d'utilisateur                                                                                                         | 0xDEF7           | 0xDEF7           |
| `FontPaletteUsername3`     |                                                                                                                                                                           | 0xC631           | 0xC631           |
| `FontPaletteUsername4`     |                                                                                                                                                                           | 0xA108           | 0xA108           |
| `BipsUserPalette`          | Utilisation ou non de la couleur du profil DS pour la palette des points de la barre de défilement                                                                        |                  | 0                |
| `BoxUserPalette`           | Utilisation ou non de la couleur du profil DS pour la palette des cases contenant les icônes de jeu dans le thème DSi                                                     |                  | 0                |
| `BoxEmptyUserPalette`      | Utilisation ou non de la couleur du profil DS pour la palette des cases vides dans le thème 3DS                                                                           | 0                |                  |
| `BoxFullUserPalette`       | Utilisation ou non de la couleur du profil DS pour la palette des cases contenant les icônes de jeu dans le thème 3DS                                                     | 0                |                  |
| `BraceUserPalette`         | Utilisation ou non de la couleur du profil DS pour la palette de l'accolade au début et à la fin de la liste de jeu                                                       |                  | 0                |
| `BubbleUserPalette`        | Utilisation ou non de la couleur du profil DS pour la palette de la pointe de la bulle de titre                                                                           | 0                | 0                |
| `ButtonArrowUserPalette`   | Utilisation ou non de la couleur du profil DS pour la palette des boutons fléchés en bas de l'écran                                                                       |                  | 1                |
| `CornerButtonUserPalette`  | Utilisation ou non de la couleur du profil DS pour la palette des icônes du menu DSi et des paramètres dans le menu SELECT                                                |                  | 0                |
| `CursorUserPalette`        | Utilisation ou non de la couleur du profil DS pour la palette du curseur                                                                                                  | 0                |                  |
| `DialogBoxUserPalette`     | Utilisation ou non de la couleur du profil DS pour la palette de la boîte de dialogue                                                                                     | 0                | 1                |
| `FolderUserPalette`        | Utilisation ou non de la couleur du profil DS pour la palette des dossiers                                                                                                | 0                | 0                |
| `LaunchDotsUserPalette`    | Utilisation ou non de la couleur du profil DS pour la palette des points de lancement                                                                                     |                  | 1                |
| `MovingArrowUserPalette`   | Utilisation ou non de la couleur du profil DS pour la palette de la flèche affichée lors du déplacement des icônes                                                        |                  | 1                |
| `ProgressUserPalette`      | Utilisation ou non de la couleur du profil DS pour la palette de l'animation rotative de la progression du chargement                                                     | 1                | 1                |
| `ScrollWindowUserPalette`  | Utilisation ou non de la couleur du profil DS pour la palette de l'arrière-plan de la fenêtre de défilement sur la barre de défilement                                    |                  | 0                |
| `SmallCartUserPalette`     | Utilisation ou non de la couleur du profil DS pour la palette des icônes de cartouche                                                                                     | 0                | 0                |
| `StartBorderUserPalette`   | Utilisation ou non de la couleur du profil DS pour la palette de la bordure de démarrage                                                                                  |                  | 1                |
| `StartTextUserPalette`     | Utilisation ou non de la couleur du profil DS pour la palette du texte de démarrage                                                                                       |                  | 1                |
| `WirelessIconsUserPalette` | Utilisation ou non de la couleur du profil DS pour la palette des icônes de la connexion sans fil                                                                         | 0                | 0                |
| `IconA26UserPalette`       | Utilisation ou non de la couleur du profil DS pour la palette de l'icône Atari 2600                                                                                       | 0                | 0                |
| `IconCOLUserPalette`       | Utilisation ou non de la couleur du profil DS pour la palette de l'icône ColecoVision                                                                                     | 0                | 0                |
| `IconGBUserPalette`        | Utilisation ou non de la couleur du profil DS pour la palette de l'icône Game Boy                                                                                         | 0                | 0                |
| `IconGBAUserPalette`       | Utilisation ou non de la couleur du profil DS pour la palette de l'icône Game Boy Advance                                                                                 | 0                | 0                |
| `IconGBAModeUserPalette`   | Utilisation ou non de la couleur du profil DS pour la palette de l'icône du mode GBA natif                                                                                | 0                | 0                |
| `IconGGUserPalette`        | Utilisation ou non de la couleur du profil DS pour la palette de l'icône Game Gear                                                                                        | 0                | 0                |
| `IconIMGUserPalette`       | Utilisation ou non de la couleur du profil DS pour la palette de l'icône d'image                                                                                          | 0                | 0                |
| `IconINTUserPalette`       | Utilisation ou non de la couleur du profil DS pour la palette de l'icône Intellivision                                                                                    | 0                | 0                |
| `IconM5UserPalette`        | Utilisation ou non de la couleur du profil DS pour la palette de l'icône Sord M5                                                                                          | 0                | 0                |
| `IconManualUserPalette`    | Utilisation ou non de la couleur du profil DS pour la palette de l'icône du manuel                                                                                        | 0                | 0                |
| `IconMDUserPalette`        | Utilisation ou non de la couleur du profil DS pour la palette de l'icône Mega Drive                                                                                       | 0                | 0                |
| `IconNESUserPalette`       | Utilisation ou non de la couleur du profil DS pour la palette de l'icône NES/Famicom                                                                                      | 0                | 0                |
| `IconNGPUserPalette`       | Utilisation ou non de la couleur du profil DS pour la palette de l'icône Neo Geo Pocket                                                                                   | 0                | 0                |
| `IconPCEUserPalette`       | Utilisation ou non de la couleur du profil DS pour la palette de l'icône PC Engine                                                                                        | 0                | 0                |
| `IconPLGUserPalette`       | Utilisation ou non de la couleur du profil DS pour la palette de l'icône de plugin DSTWO                                                                                  | 0                | 0                |
| `IconSettingsUserPalette`  | Utilisation ou non de la couleur du profil DS pour la palette de l'icône des paramètres DSi                                                                               | 0                | 0                |
| `IconSGUserPalette`        | Utilisation ou non de la couleur du profil DS pour la palette de l'icône SG-1000                                                                                          | 0                | 0                |
| `IconSMSUserPalette`       | Utilisation ou non de la couleur du profil DS pour la palette de l'icône Master System                                                                                    | 0                | 0                |
| `IconSNESUserPalette`      | Utilisation ou non de la couleur du profil DS pour la palette de l'icône SNES                                                                                             | 0                | 0                |
| `IconUnknownUserPalette`   | Utilisation ou non de la couleur du profil DS pour la palette de l'icône inconnue (manquante)                                                                             | 0                | 0                |
| `IconWSUserPalette`        | Utilisation ou non de la couleur du profil DS pour la palette de l'icône WonderSwan                                                                                       | 0                | 0                |
| `UsernameUserPalette`      | Utilisation ou non de la couleur du profil DS pour la palette du nom d'utilisateur                                                                                        | 1                | 1                |
| `ProgressBarUserPalette`   | Utilisation ou non de la couleur du profil DS comme couleur de la barre de progression                                                                                    | 1                | 1                |
| `ProgressBarColor`         | La couleur de la barre de progression si `ProgressBarUserPalette` est désactivé                                                                                           | 0x7C00           | 0x7C00           |
| `UseAlphaBlend`            | Mélange ou non des couleurs du texte du sur l'écran supérieur (date/heure et nom d'utilisateur) avec les couleurs de l'arrière-plan                                       | 1                | 1                |
| `DarkLoading`              | Possibilité ou non d'effectuer un fondu au noir plutôt qu'au blanc lors des écrans de chargement                                                                          | 0                | 0                |
| `RenderPhoto`              | Afficher ou non une photo sur l'écran supérieur                                                                                                                           | 0                | 1                |
| `RotatingCubesRenderY`     | La position Y sur l'écran supérieur pour afficher les cubes en rotation                                                                                                   | 78               |                  |
| `PlayStartupJingle`        | Utilisation ou non du son de démarrage avant la musique de fond principale. Consultez la page [Effets sonores personnalisés](custom-dsi-3ds-sfx) pour plus d'informations | 1                | 0                |
| `StartupJingleDelayAdjust` | Le nombre d'échantillons au début du son de démarrage à partir duquel la musique de fond doit commencer                                                                   | 0                | 0                |

### Options du mode Macro
Vous pouvez ajouter des options de remplacement spécifiques au fichier `theme.ini` pour une utilisation en mode Macro. Pour ce faire, ajoutez `[MACRO]` à une ligne vierge au bas du fichier de configuration, puis ajoutez toute configuration spécifiée en dessous.

## Musique de fond et effets sonores personnalisés
Les thèmes DSi et 3DS prennent également en charge la musique personnalisée. Consultez [Skins DSi/3DS - Effets sonores personnalisés](custom-dsi-3ds-sfx) pour plus de détails.

## Polices personnalisées
Vous pouvez placer des [polices personnalisées](custom-fonts) dans le dossier `font` pour l'utiliser dans le skin. Vous pouvez également ajouter des polices de remplacement pour la date et l'heure en utilisant `date_time.nftr`, et le nom d'utilisateur de la console avec `username.nftr`.

## Palettes personnalisées
Pour les textures palettisées (dossier `grf` ), vous pouvez éventuellement ajouter des sets de palettes prioritaires qui sont utilisés lorsque le paramètre `UserPalette` correspondant est activé. Les fichiers de sets de palettes peuvent être créés à l'aide de [cet éditeur](https://skinpaltool.dvdo.dev/). Lorsque vous utilisez l'éditeur, importez l'image avec laquelle vous souhaitez travailler, puis créez une palette pour chacune des 16 couleurs du profil DS. Vous pouvez utiliser ce [fichier de palette d'exemple](/assets/files/example-palette.bin) comme point de départ.

Les 16 lignes de la collection de palettes correspondent à chaque couleur du profil et doivent être placées dans l'ordre suivant :
1. Gris-Bleu
2. Marron
3. Rouge
4. Rose
5. Orange
6. Jaune
7. Vert citron
8. Vert
9. Vert foncé
10. Turquoise
11. Cyan/Bleu clair
12. Bleu
13. Bleu foncé/Indigo
14. Violet/Pourpre foncé
15. Violet
16. Magenta

Une fois que vous avez créé un fichier de palette, placez-le dans le dossier `palettes`. Le nom du fichier de la palette doit correspondre au nom de l'image, mais avec une extension `.bin` (par exemple, `start_border.bin` sera appliqué à `start_border.bmp`).

Vous pouvez également placer un fichier de palette `username.bin` pour changer les palettes de la police du nom d'utilisateur. Veillez à régler l'éditeur de palette sur `Font Mode` lorsque vous créez ce fichier.

## Partie 3 : Ajout dans TWiLight Menu++
Une fois que vous avez édité quelques graphismes et que vous souhaitez tester votre skin, il suffit de copier votre dossier skin (le dossier contenant les dossiers `background`, `battery`, etc.) vers `sd :/_nds/TWiLightMenu/3dsmenu/themes/` ou `sd:/_nds/TWiLightMenu/dsimenu/themes/` pour les skins des thèmes 3DS et DSi respectivement.

## Partie 4 : Partager votre skin
Une fois que vous avez terminé votre skin, vous pouvez le partager avec la communauté en créant une demande de tirage l'ajoutant au dépôt GitHub [DS-Homebrew/twlmenu-extras](https://github.com/DS-Homebrew/twlmenu-extras) dans un fichier `.7z`. Si vous n'êtes pas familier avec l'utilisation de git, vous pouvez aussi simplement créer un problème sur ce dépôt avec un fichier zip de votre skin pour demander qu'il soit ajouté.
