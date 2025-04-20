---
lang: fr-FR
layout: faq
section: twilightmenu
title: FAQ et dépannage
long_title: FAQ et dépannage de TWiLight Menu++
description: FAQ et dépannage pour TWiLight Menu++
---

Pour plus de FAQs, veuillez visiter le [fil GBAtemp](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### Pourquoi ma 3DS reste-t-elle bloquée sur des écrans noirs, se plante, s'éteint, etc. lors du lancement de TWiLight Menu++ ?
TWL_FIRM a pu être corrompu d'une manière ou d'une autre. Suivez ce guide pour résoudre le problème : <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### Comment puis-je corriger l'obtention un écran blanc lors du démarrage de TWiLight Menu++ ?
- Redémarrez la console
- Si cela ne fonctionne pas, formatez votre carte SD en FAT32 avec une taille de cluster/d'allocation de 32 ko
    - Consultez la page de [dsi.cfw.guide](https://dsi.cfw.guide/sd-card-setup.html) pour les outils recommandés
- Si cela ne fonctionne pas non plus, essayez une autre carte SD

#### Comment puis-je réparer l'écran tactile qui ne fonctionne pas après le lancement d'un jeu ?
- Si vous lancez une carte de jeu, assurez-vous que le paramètre `Slot-1 : Mode tactile` est réglé sur `Mode DS`
- Si le problème persiste, ou si vous utilisez une ROM à la place, suivez ce guide : https://gbatemp.net/threads/recover-ds-mode-after-an-nvram-brick-eg-after-using-a-ds-bricker.516444/

#### Comment puis-je réparer le fait que TWiLight Menu++ redémarre ou donne une erreur Guru Meditation lors du lancement d'un jeu ?
Allez dans les paramètres TWLMenu++ et désactivez `Màj des jeux joués récemment`.

#### Pourquoi est-ce que j'obtiens un écran blanc lorsque j'essaie de charger un jeu DS à partir de la carte SD ?
Consultez [J'ai des problèmes avec ma/mes ROM(s), que dois-je faire ?](../nds-bootstrap/faq?faq=im-having-issues-with-my-roms-what-should-i-do) sur la page de la FAQ de nds-bootstrap.

#### Comment puis-je utiliser des codes de triche ?
Vous avez besoin d'une base de données de codes de triche sous la forme d'un fichier `usrcheat.dat` dans le dossier `sd:/_nds/TWiLightMenu/extras/`. La base de données de codes de triche la plus mise à jour est la [base de données de codes de triche NDS(i) de DeadSkullzJr](https://gbatemp.net/threads/488711/).
- Sur la 3DS, cette base de données est disponible dans l'application Universal-Updater sous le nom « NDS(i) Cheat Databases ». Cela l'installera automatiquement à l'emplacement requis.

Alternatively, you can use [r4cce](https://web.archive.org/web/20241130133125/http://hp.vector.co.jp/authors/VA013928/soft_en.html) to create your own cheat DB.

Une fois que vous avez une base de données de codes de triche, vous pouvez les activer en appuyant sur <kbd class="face">Y</kbd> dans TWiLight Menu++ lorsque le curseur est sur le jeu pour ouvrir les paramètres par jeu, puis <kbd class="face">X</kbd> pour ouvrir le menu des codes de triche.

#### Comment puis-je afficher une image personnalisée sur l'écran supérieur du thème DSi ? Puis-je la cacher à la place ?
Une image aléatoire `.png` dans `sd:/_nds/TWiLightMenu/dsimenu/photos/` sera affichée chaque fois que le menu est chargé. S'il n'y a pas d'images applicables, des captures d'écran prises par nds-bootstrap seront utilisées à la place.

- La/les image(s) ne doivent pas dépasser 208 × 156
- Si vous obtenez des erreurs, il s'agit probablement d'une erreur dans la taille de l'image. Veuillez utiliser [tinypng](https://tinypng.com) pour réduire la taille

As for hiding the picture, you need to edit the `theme.ini` file found in `sd:/_nds/TWiLightMenu/dsimenu/themes/[theme folder]/`. Ouvrez le fichier avec un éditeur de texte, modifiez la ligne `RenderPhoto` de `1` à `0`, puis enregistrez le fichier.

#### Comment puis-je obtenir des jeux ?
Vous pouvez télécharger des jeux homebrew sur [Universal-DB](https://db.universal-team.net/ds) et [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games). Pour obtenir les jeux sortis officiellement, vous devez les récupérer sous forme de dumps, soit depuis vos cartes de jeu physiques, soit depuis une console existante :
- Sur DS, vous pouvez utiliser [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) pour dumper vos jeux GBA et, si vous avez un linker Slot-2, vos jeux DS. Si vous ne disposez que d'un linker Slot-1 et que vous souhaitez dumper un jeu DS, vous pouvez utiliser [Wooddumper](https://digiex.net/attachments/wooddumper_r89-zip.14735/), qui nécessite une connexion Wi-Fi compatible avec la DS, ainsi qu'un client FTP sur un appareil séparé pour recevoir la ROM
- Sur DSi vous pouvez utiliser [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) pour dumper vos jeux DS et DSiWare
- Sur 3DS, vous pouvez utiliser [GodMode9](https://github.com/d0k3/GodMode9/releases) pour dumper vos jeux DS, DSiWare et titres de la console virtuelle

#### Puis-je transférer les fichiers de sauvegarde de mes cartes de jeu sur ma carte SD ou vice versa ?
Oui. Vous pouvez utiliser [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) sur 3DS, ou [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) sur DSi / 3DS.

#### Comment puis-je changer la langue de TWiLight Menu++ ?
1. Ouvrez les paramètres de TWiLight Menu++, vous pouvez le faire en maintenant <kbd>SELECT</kbd> tout en chargeant TWiLight Menu++
1. Modifiez la première option jusqu'à ce que la langue souhaitée apparaisse, puis quittez les paramètres
    - Vous pouvez également modifier les trois premières options de la page des paramètres de nds-bootstrap, car elles contrôlent la langue et la région des jeux DS et leurs titres dans TWiLight Menu++

#### Est-ce un émulateur DS(i) ?
Non, ce n'est pas un émulateur. Le menu et les jeux DS (chargés via nds-bootstrap) sont exécutés nativement dans le mode DS/DSi de la console. Les seules consoles émulées sont les anciennes consoles, mais partiellement pour la GBA (car certaines ou toutes les parties comme les graphiques sont exécutées de manière native).

#### Quels sont les systèmes pris en charge par TWiLight Menu++ ?
Consultez [Liste des systèmes pris en charge par TWiLight Menu++](../ds-index/emulators#list-of-supported-systems-by-twilight-menu).

#### Les exploits des jeux Slot-1 peuvent-ils démarrer TWiLight Menu++ ?
Non. L'accès à la carte SD n'est accordé qu'aux applications DSiWare, les jeux Slot-1 ne peuvent donc pas lancer (ou même accéder) à TWiLight Menu++.

#### Pourquoi ne puis-je pas trouver/voir mes jeux ?
Il y a de multiples raisons pour lesquelles vous ne parvenez pas à les trouver.
- The `_nds` folder found on the root of the SD card is not intended for applications one would access via TWiLight Menu++, due to its reservation for functionality based files (themes, configuration, images, emulators and more). Si vous avez placé vos titres ici, veuillez les déplacer vers un autre emplacement.
- Si vous avez plus de 39 éléments dans un dossier et que tous les emplacements du menu sont occupés, vos jeux peuvent se trouver sur la page suivante. Utilisez <kbd class="l">L</kbd>/<kbd class="r">R</kbd> ou <kbd>SELECT</kbd> + <kbd>Gauche</kbd>/<kbd>Droite</kbd> pour changer de page
- Si votre jeu ou votre dossier est caché, vous devrez peut-être afficher les fichiers cachés via les paramètres de l'interface graphique de TWiLight Menu++
- Si votre jeu est dans une archive (`zip`, `rar`, `7z`, etc), il ne pourra pas être utilisé par TWiLight Menu++. Extrayez le jeu de l'archive pour l'utiliser
- Si votre jeu n'utilise pas l'une des [extensions supportées](../ds-index/emulators#list-of-systems-supported-by-twilight-menu), vous devrez peut-être changer l'extension en renommant le fichier

#### Comment puis-je accéder aux paramètres de TWiLight Menu++ ?
La manière d'accéder aux paramètres de TWiLight Menu++ varie selon votre configuration.
- **Menu DS Classic :** Appuyez sur l'icône DS en bas de l'écran inférieur
- **Thèmes Nintendo DSi/SEGA Saturn/Homebrew Launcher : en utilisant le menu SELECT :** Appuyez sur <kbd>SELECT</kbd>, puis lancez l'applet des paramètres (utilisez le pad directionnel pour mettre les options en surbrillance)
- **Thèmes Nintendo DSi/SEGA Saturn/Homebrew Launcher : en n'utilisant pas le menu SELECT :** En appuyant sur <kbd>SELECT</kbd> vous arriverez au menu DS Classic
- **Thème Nintendo 3DS :** Appuyez sur l'icône de la clé à molette sur l'écran inférieur
- **Thème R4 Original :** Appuyez sur <kbd>START</kbd> (si vous êtes dans le navigateur de fichier), puis appuyez sur <kbd>SELECT</kbd>
- **Wood UI theme:** Hitting <kbd>START</kbd> will bring you to the DS Classic Menu

Vous pouvez également maintenir <kbd>SELECT</kbd> tout en lançant TWiLight Menu++ pour accéder directement aux paramètres.

#### Comment puis-je utiliser des icônes/bannières personnalisées pour les jeux ?
Vous pouvez utiliser une bannière personnalisée au format PNG ou avec un fichier banner.bin en la plaçant dans le dossier `sd:/_nds/TWiLightMenu/icons` avec le nom de la ROM (y compris l'extension) ou du dossier + `.png` ou `.bin`.

Pour les bannières PNG, vous avez simplement besoin de n'importe quel fichier PNG avec 15 couleurs ou moins et une résolution maximale de 32 × 32. La transparence totale fonctionne et ne compte pas dans les 15 couleurs, mais la semi-transparence ne fonctionne pas.

Les bannières de type banner.bin peuvent être animées et vous permettent de remplacer le titre qui sera affiché dans TWiLight Menu++. Elles peuvent être réalisées en utilisant [NDS Banner Editor](https://github.com/TheGameratorT/NDS_Banner_Editor/releases).

Pre-made banners can be found in the [icons section of the TWiLight Menu++ themes site](https://skins.ds-homebrew.com/icon/) and if you make any they can be shared there as well.

#### Comment puis-je installer des thèmes personnalisés pour TWiLight Menu++ ?
Custom themes can be acquired from [the official themes site](https://skins.ds-homebrew.com/), which houses serveral community-made themes ready to apply. You can also make a custom theme for the Nintendo 3DS and Nintendo DSi UIs on your own by following [this guide](https://wiki.ds-homebrew.com/twilightmenu/custom-dsi-3ds-themes). The **Homebrew Launcher**, **Sega Saturn** and **Game Boy Color** UIs are _**not**_ customizable.

Once you have acquired a custom theme, you can install it by placing its folder on the appropiate path, which depends on what UI the theme is made for.
- Themes for the Nintendo DSi UI go in `sd:\_nds\TWiLightMenu\dsimenu\themes\`
- Themes for the Nintendo 3DS UI go in `sd:\_nds\TWiLightMenu\3dsmenu\themes\`
- Themes for the R4 Original UI go in `sd:\_nds\TWiLightMenu\r4menu\themes\`
- Themes for the Wood UI go in `sd:\_nds\TWiLightMenu\akmenu\themes\`

If you are using a 3DS family console, you can install custom themes using [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases). Go to Universal-Updater settings, then `Select Unistore`, `+`, `TWiLight Menu++ Themes`.

Pour appliquer un thème personnalisé, vous devez accéder aux paramètres de TWiLight Menu++.
1. On the `GUI Settings` page, go to the `User Interface` option and choose the UI using the right and left buttons on the D-Pad.
1. Once the target UI is selected, go to the `Custom Theme` option and press the A button to choose between the themes you have installed.
1. Using the up and down buttons on the D-Pad, highlight the desired theme, then press A to select it.
1. Appliquez les paramètres en appuyant sur B pour revenir dans TWiLight Menu++.

TWiLight Menu++ should now have a customized look (and music, if the selected theme supports it and is enabled on the settings).

#### Existe-t-il un émulateur 3DS pour la DS(i) ?
Non, il n'y en a pas. Il n'est pas possible d'émuler la 3DS sur la DS(i) car la 3DS utilise un matériel plus récent.
