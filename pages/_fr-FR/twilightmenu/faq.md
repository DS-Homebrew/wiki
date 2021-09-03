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

#### Où est le thème Acekard/Wood UI ?
Le thème acekard (aussi appelé Wood UI) a été supprimé en raison de son comportement bogué et de la corruption de la carte SD. Veuillez patienter pour un fix. La progression pour le retour de ce thème peut être trouvé sur [cette requête](https://github.com/DS-Homebrew/TWiLightMenu/pull/1109).

#### Comment puis-je réparer le redémarrage de TWiLight Menu++ ou donner une erreur Guru Meditation lors du lancement d'un jeu?
Allez dans les paramètres TWLMenu++ et désactivez `Mise à jour des jeux joués récemment`.

#### Pourquoi est-ce que j'ai un écran blanc en essayant de charger un jeu à partir de la carte SD ?
- Tout d'abord, vérifiez [la liste de compatibilité nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) et assurez-vous que votre jeu est compatible
- Essayez avec tout les codes de triche désactivées pour ce jeu car certains codes ne sont pas compatibles avec nds-bootstrap pour le moment, vous pouvez utiliser <kbd class="l">L</kbd> pour désactiver tous les triches pour un jeu
- Si cela fonctionnait avant, supprimez les dossiers `fatTable` et `patchOffsetCache` dans `sd:/_nds/nds-bootstrap/`

#### Comment utiliser des cheats ?
Vous devez avoir une base de données de cheats sous la forme d'un fichier `usrcheat.dat` dans le dossier `sd:/_nds/TWiLightMenu/extras/`. La base de données de cheats la plus récente est celle de [DeadSkullzJr](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/).
- Sur la 3DS, cette base de données est disponible dans l'application Universal Updater en tant que "NDS Cheat Databases." Cela l'installera automatiquement à l'emplacement requis.

Vous pouvez aussi utiliser [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) pour créer votre propre base de données de cheats.

#### Comment afficher une image personnalisée sur l'écran supérieur de mon thème DSi ?
Une image aléatoire `.png` dans `sd:/_nds/TWiLightMenu/dsimenu/photos/` sera affichée chaque fois que le menu est chargé.

- L'image(s) ne doit pas être plus grande que 208x156
- Si vous avez des erreurs, c'est probablement une erreur avec la taille de l'image. Veuillez utiliser [tinypng](https://tinypng.com) pour réduire la taille

#### Comment avoir des jeux ?
Vous pouvez télécharger des jeux homebrew sur [Universal-DB](https://db.universal-team.net/ds) et [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games). Pour avoir vos dumps de vos jeux physiques :
- Sur DS, vous pouvez utiliser [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) pour dumper vos jeux GBA et, si vous avez une flashcard Slot-2, des jeux DS
- Sur DSi vous pouvez utiliser [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) pour dumper vos jeux DS et DSiWare
- Sur 3DS, vous pouvez utiliser [GodMode9](https://github.com/d0k3/GodMode9/releases) pour dumper vos jeux DS, DSiWare et Console Virtuelle

#### Puis-je avoir les fichiers de sauvegarde de mes cartouches sur ma carte SD et vice versa?
Oui, vous pouvez utiliser [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) sur DSi et 3DS ou [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) sur 3DS.

#### Comment changer la langue de TWiLight Menu++ ?
1. Ouvrez les paramètres TWiLight Menu++, vous pouvez le faire en maintenant <kbd>SELECT</kbd> tout en chargeant TWiLight Menu++
1. Appuyez sur <kbd class="l">L</kbd> ou <kbd class="face">Y</kbd> une fois (sur une flashcard/3DS) ou deux fois (sur une DSi)
1. Modifiez la première option jusqu'à ce que vous voyez la langue que vous voulez, puis quittez les paramètres
   - Vous pouvez également modifier les deux prochaines options car elles contrôlent la langue des jeux DS et leurs titres dans TWiLight Menu++

#### Est-ce un émulateur DS(i) ?
Non, ce n'est pas un émulateur. Le menu et les jeux DS (chargés via nds-bootstrap) sont exécutés nativement en mode DS/DSi de la console. Les seules consoles émulées sont les anciennes consoles, mais en partie pour GBA (comme certaines ou toutes les parties comme les graphiques sont exécutées nativement).

#### Quels sont les systèmes supportés par TWiLight Menu++ ?

Voir [Liste des systèmes supportés par TWiLight Menu++](../ds-index/emulators#list-of-supported-systems-by-twilight-menu).

#### Pourquoi les entrées de l'écran tactile ne fonctionne pas sur le sudokuhax?
Selon le fichier de sauvegarde de sudokuhax, les entrées de l'écran tactile peuvent ne pas fonctionner.

#### The Biggest Loser peut-il démarrer TWiLight Menu++ ?
Non. Comme The Biggest Loser est un jeu Slot-1, et non un jeu DSiWare, l'accès SD est désactivé lorsque vous utilisez des cartes Slot-1.
