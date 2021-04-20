---
lang: fr-FR
layout: wiki
section: nds-bootstrap
category: other
title: FAQ & Dépannage
long_title: FAQ nds-bootstrap & Dépannage
description: FAQ & Dépannage pour nds-bootstrap
---

#### Pourquoi est-ce que je reçois un écran blanc en essayant de charger un jeu à partir de la carte SD ?
- Tout d'abord, vérifiez la [liste de compatibilité nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) et assurez-vous que votre jeu est compatible
- Essayez avec tout les codes de triche désactivées pour ce jeu car certains codes ne sont pas compatibles avec nds-bootstrap pour le moment, vous pouvez utiliser <kbd class="l">L</kbd> pour désactiver tous les triches pour un jeu
- Si le jeu que vous essayez de lancer est un jeu DSi Enhanced alors assurez-vous que TWiLight Menu++ est configuré pour utiliser le `Mode DS`
- Si cela a fonctionné avant, supprimez les dossiers `fatTable` et `patchOffsetCache` dans `sd:/_nds/nds-bootstrap/`

#### Pourquoi y a-t-il des problèmes avec le chargement de la ROM, même si elles sont exécutées en mode natif ?
nds-bootstrap patch la fonction de la ROM à exécuter à partir d'une carte SD, car les ROMs sont codées pour lire à partir de Slot-1. Il y a également des problèmes de timing et des mesures AP (dont la plupart sont déjà supprimées), qui entraîneraient un dysfonctionnement des ROM. Pour améliorer les performances, nds-bootstrap rétrécit également le tas en mémoire du jeu, ce qui casse certains jeux, bien que les transitaires et TWiLight Menu++ aient une liste noire de rétrécissement de tas pour réparer les jeux qui ne fonctionnent pas cassés par le rétrécissement du tas de fichiers.

#### Pourquoi utiliser nds-bootstrap sur un linker normal ?
- Certaines ROMs compatibles sont chargées en RAM, permettant ainsi des temps de chargement plus rapides que même les cartouches normales
- Vous pouvez étendre la bus mémoire VRAM à 32 bits
- Utiliser la vitesse du processeur supplémentaire de la DSi
- Améliorez votre son avec 48 kHz
- Utiliser le mode DSi pour les fonctionnalités de DSi
- En utilisant certaines cartouches, vous pouvez utiliser l'IR dans votre application
- nds-bootstrap est open source, ce qui signifie que les développeurs peuvent toujours le mettre à jour pour corriger des bugs et d'autres choses, même si l'entreprise est interrompue
- Le Pak d'extension de mémoire DS est émulé, ce qui signifie que les jeux qui nécessitent que l'accessoire fonctionne

#### ROM donatrice
La plupart des jeux SDK5 peuvent être sélectionnés comme une ROM Donatrice (ce qui peut être fait via TWiLight Menu++). L’exécutable ARM7 de la ROM Donatrice est copié par nds-bootstrap et remplace l'exécutable ARM7 pour le jeu qu'il tente d'exécuter. Cela permet à certains jeux et SDK5 de démarrer et de sauvegarder.

#### Qu'est-ce qu'une nightly et où puis-je l'obtenir?
Une version nightly est compilée pour la dernière mise à jour. Les versions nightly peuvent être instables, mais les dernières corrections de bugs ont été ajoutées. Vous pouvez obtenir des versions nightly pour nds-bootstrap [ici](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### Pourquoi mes codes de triche ne fonctionnent pas ?
La façon dont les types de triche E sont implémentés dans nds-bootstrap est cassée, ce qui signifie qu'ils ne fonctionneraient que la moitié du temps. Votre triche utilise probablement ce type. Ce n'est pas une faute de la base de données de triche, mais plutôt une faute de nds-bootstrap. Veuillez ne pas demander que ces codes soit supprimés de la base de données.

#### Y a-t-il autre chose que je devrais savoir sur les codes de triche ?
Vous pouvez régler le rétrécissement de tas à `Hi` dans les paramètres pour une meilleure prise en charge des codes.

Pour plus d'informations sur les codes, regardez [ici](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats).

#### Dépannage nds-bootstrap
Si vous rencontrez des problèmes avec l'utilisation de la dernière version de nds-bootstrap, voici comment vous pouvez le résoudre.

1. Exécutez tout en 67 MHz, Mode DS, avec 32 kHz d'audio, etc. En grous, gardez tout dans les paramètres DS. N'essayez pas de l'améliorer avec les trucs DSi
2. Supprimez les dossiers `fatTable` et `patchOffsetCache` dans `sd:/_nds/nds-bootstrap/`
3. Ce n'est probablement pas un si gros problème ; demandez sur le serveur [Discord](https://discord.gg/yD3spjv)

Si le serveur dit qu'il s'agit d'un problème avec nds-bootstrap, vérifiez si le jeu n'a pas déjà été signalé sur GitHub. Vérifiez également les issues fermées dans le cas où nous avions un problème clos dans un autre. S'il n'a aucun issue GitHub, allez-y en créer un nouveau.

Aussi, assurez-vous de l'ajouter à la [liste de compatibilité](https://wiki.ds-homebrew.com/nds-bootstrap/testing) sur Google Sheets.
