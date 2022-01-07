---
lang: fr-FR
layout: wiki
section: gbarunner2
title: Builds de GBARunner2
description: Informations sur les différents builds de GBARunner2 et leurs utilisations
---


Il existe un certain nombre de versions différentes de GBARunner2, ou « builds », que l'on peut utiliser. Ils proviennent de différentes branches et forks de GBARunner2 et ont des caractéristiques différentes visant soit des jeux GBA différents, soit des fonctions différentes. **Pour la plupart des utilisateurs** l'utilisation du build fourni avec TWiLight Menu++ est suffisante.

## Builds DS vs DSi vs 3DS

GBARunner2 a fait faire des builds qui utilisent le matériel supplémentaire trouvé dans la DSi et la 3DS. Naturellement, ces builds spécifiques à la DS et à la 3DS ne fonctionneront pas sur une DS. Cependant, ils ne fonctionneront pas non plus si vous exécutez GBARunner2 à partir d'un linker sur l'un des systèmes, DSi et 3DS inclus. Les détails à ce sujet ne seront pas abordés ici.

Cela signifie que vous pouvez utiliser des builds pour la DS sur la DSi et la 3DS, mais pas l'inverse.

## Builds partagés entre la DS, la DSi et la 3DS

Ce sont les builds qui sont présents pour les trois lignées de systèmes.

### Master

Les builds Master ou « principaux » builds sont les versions correctes de GBARunner2. Cela devrait généralement être le build le plus stable. Toutes les autres branches que celle-ci sont considérées comme expérimentales et pas assez stables pour être incluses dans les Master. Les builds Master sont divisés en différentes builds pour la DS, la DSi et la 3DS. Ils portent tous le nom du système correspondant ajouté à la fin du nom du fichier.

### Wi-Fi-Link

La branche Wi-Fi-Link ajoute la possibilité de relier deux systèmes sans fil. Notez que cela ne passe pas par l'Internet, et que cela ne sera jamais possible. Actuellement, les résultats varient d'une personne à l'autre, et le seul jeu sûr de pouvoir maintenir une connexion stable est Advance Guardian Heroes, à condition de suivre des instructions très précises. Inutile de dire que cette branche, dans son état actuel, est une nouveauté et une preuve de concept, et non quelque chose à utiliser réellement. Quelques autres jeux parviennent à se connecter, mais ils sont très dépendants de facteurs externes comme les interférences d'autres signaux Wi-Fi, entre autres.

## Builds spécifiques à la DS

### ARM7DLDI vs ARM9DLDI

**Normalement, utilisez l'ARM9DLDI**, et si cela ne fonctionne pas, essayez l'ARM7DLDI. Certains linkers nécessitent soit l'ARM7DLDI, soit l'ARM9DLDI, et certains peuvent fonctionner avec les deux. Il n'existe pas de liste des linkers qui fonctionnent avec les différentes versions, mais si vous rencontrez des problèmes pour faire fonctionner GBARunner2, vous pouvez essayer l'autre.

Il n'y a pas de différences de fonctionnalités ou de performances entre les deux, il est donc inutile de les tester pour voir si un jeu fonctionne mieux ou a moins de problèmes sur l'autre.

Continuez plus bas pour savoir quelle version vous utilisez actuellement.

### ROM3M

Si vous utilisez TWiLight Menu++, vous utilisez déjà cette fonctionnalité dans la version GBARunner2 qui l'accompagne.

Cette branche peut être utile si vous essayez d'exécuter des ROMs un peu plus grandes sur la DS, mais il y a une limite due à la quantité limitée de RAM présente dans la DS. Il s'agit en fait de la branche de *Pokémon Émeraude* pour la DS.

Void Star a fait [un fork de GBARunner2](https://github.com/unresolvedsymbol/GBARunner2-DSL-Enhanced/releases) qui combine cette branche ROM3M avec d'autres fonctionnalités intéressantes, et c'est le build qui est livré avec TWiLight Menu++ si vous utilisez une DS.

## Builds spécifiques à la DSi et à la 3DS

La DSi et la 3DS peuvent généralement exécuter les mêmes builds, mais en raison de la différence de quantité de RAM entre la DSi et la 3DS, la compatibilité des jeux peut différer. Cela signifie généralement que la DSi peut avoir des difficultés à exécuter des ROMs plus importantes que la 3DS peut exécuter sans problème.

La 3DS intègre également une puce accélérométrique pour les commandes gyroscopiques, qui peut être utilisée dans un build spécifique à la 3DS.

### DSP

Les builds DSP font appel à un processeur supplémentaire présent dans la DSi et la 3DS. Cela permet de produire un bien meilleur son et de donner de meilleures performances. Il y a quelques régressions parmi certaines ROMs qui ne fonctionnent pas dans cette branche.

### Hybrid Hicode

La branche Hybrid Hicode s'occupe des ROMs qui sont grandes et qui ont des problèmes pour fonctionner sur la branche Master. Il s'agit d'une branche très utile pour la DSi, car elle résout en grande partie le problème lié au fait d'avoir moins de RAM que la 3DS.

### Spécifique à la 3DS : Gyro

Cette branche utilise l'accéléromètre interne de la 3DS pour que les jeux GBA qui avaient cette fonctionnalité puissent être joués correctement. Il y a plusieurs étapes à franchir pour que cela fonctionne. Notez qu'étant donné qu'il y a différentes puces d'accéléromètre entre les systèmes 3DS, cela ne fonctionnera pas sur toutes les 3DS car toutes les puces n'ont pas de code les supportant.

Il n'y a pas de cohérence entre les types de 3DS et les puces, du moins pour autant que l'on sache.

## Trouver les infos de build

GBARunner2 possède un menu que vous pouvez ouvrir en touchant l'écran tactile et en appuyant sur la gâchette droite. Vous y trouverez le menu d'informations, qui vous indique sur quel build vous êtes. Cependant, les builds qui sont inclus avec TWiLight Menu++ ne rapportent pas de version de build car ils sont basés sur des forks d'autres personnes. En d'autres termes, si votre page d'informations n'affiche rien pour le build, il est fort probable que vous utilisiez l'un d'eux.

Cela vous indique si vous utilisez un build ARM7DLDI ou ARM9DLDI

Savoir quel build utiliser est utile pour vérifier la liste de compatibilité officielle au cas où vous auriez des problèmes pour lancer un jeu.

L'identifiant de la version peut être consulté sur la page de la version du dépôt GitHub de GBARunner2, où les sept derniers symboles alphanumériques représentent la version. Par exemple, la dernière version actuelle de Master est « v20200812-131430_6e4ce45 » et « 6e4ce45 » est utilisé pour représenter sa version.
