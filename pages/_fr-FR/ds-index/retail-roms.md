---
lang: fr-FR
layout: wiki
section: ds-index
category: reference
title: Retail ROMs
description: Une explication de tout le modding DS
---

### Anti-piratage

AP (abréviation de anti-piratage) est une méthode utilisée par les développeurs pour imposer des achats légitimes et empêcher le piratage. Cela peut être contourné soit depuis le lanceur, soit depuis la ROM elle-même.

- Avec nds-bootstrap, vous pouvez charger un fichier `.IPS` afin de contourner ces patchs. Ce fichier `.IPS` sera patché à directement dans nds-bootstrap, donc vous pouvez garder les fichiers ROM intacts. Un pack de fichiers `.IPS` est automatiquement inclus avec TWiLight Menu++.
- Avec Wood R4, ces correctifs sont inclus dans le logiciel. Vous n'aurez pas besoin de modifier la ROM elle-même.

Dans le cas où il n'y a pas de fichier `.IPS` pour votre ROM ou votre lanceur n'a pas patché votre ROM, vous pouvez essayer de modifier directement la ROM elle-même en utilisant l'outil [nds-scene](https://gbatemp.net/download/retrogamefan-nds-rom-tool-v1-0_b1215.35735/)

### CloneBoot

Cloneboot, c'est quand un jeu envoie son propre binaire arm9/arm7 à une autre console. Il est utilisé pour le téléchargement DS, pour le multijoueur avec une seule carte. Mais tous les jeux qui ont le multijoueur avec une seule carte n'utilisent pas cloneboot.

Actuellement, les patchs cloneboot de nds-bootstrap sont cassés à cause des patchs des binaires arm9/7 qui rendent les signatures RSA invalides.

### Instructions pour Thumb
Au lieu des instructions ARM normales 32 bits, THUMB utilise des instructions 16 bits. Ceci est utile lorsque la bande passante mémoire ralentit la console.

### Fichiers de sauvegarde
Les cartouches Nintendo DS ont 4 types de sauvegarde connus :

- EEPROM - Mémoire programmable effaçable en lecture seule
- FLASH
- FRAM - Mémoire d'accès aléatoire ferroélectrique
- NAND - NOT-AND

Bien que rare, il y a des Cartouches DS avec des sauvegardes basées sur la NAND : WarioWare DIY & Jam with the band (USA)/Daigasso Band Brothers

Il y a différents formats à utiliser selon le lanceur, mais nds-bootstrap utilise le format `.sav` brut. Si vous utilisez un format différent, voici un site web que vous pouvez utiliser pour le convertir : http://www.shunyweb.info/convert.php

### Lecture DMA de la carte
Card DMA (signifie Direct Access Memory, en français Accès direct à la mémoire) est un moyen plus efficace de lire des données de catridge que par le logiciel. Lorsqu'il n'y a pas de données disponibles, le code peut toujours être exécuté. Dans le code originel du lecteur de carte, le lecteur de données regarde si de nouvelles données sont disponibles dans le registre, ce qui fait perdre du temps. C'est le moyen privilégié d'accéder aux données.

Vous pouvez repérer un jeu qui utilise DMA dans no$gba en activant le log DMA sur ARM9. Un accès DMA à la carte utilise AF000001 comme troisième paramètre.
- Par exemple : `DMA2 : 04100010 023C18C0 AF000001`

### ROM donatrice

Dans les versions précédentes de nds-bootstrap, une ROM Mario Kart DS était nécessaire pour que les jeux SDK3-4 puissent fonctionner ou sauvegarder. La ROM a agi comme une ROM donatrice. nds-bootstrap saisit le binaire arm7 du donateur, remplaçant le binaire arm7 de la ROM, afin que les correctifs de sauvegarde puissent fonctionner, ce qui a cependant provoqué quelques effets secondaires. Dans les versions ultérieures de nds-bootstrap, une ROM Donatrice est nécessaire pour que certains jeux THUMB ou SDK5 puissent démarrer et sauvegarder.

### Cheats d'Action Replay

Les cheats Action Replay sont des codes qui vous permettent de faire des changements programmables de bas niveau dans la zone mémoire de votre (vos) jeu(x) favori(s). Ces changements vont de simples ajustements de valeur à des réglages ASM extrêmement avancés, qui peuvent tous deux altérer l'expérience du ou des jeux joués.

Les Flashcards peuvent tirer parti des cheats en utilisant des bases de données de codes. Les fonctionnalités de triche sont intégrées dans le noyau de la flashcard. Les noyaux suivants peuvent utiliser des cheats:
- Wood R4 (`usrcheat.dat`)
- YSMenu (`usrcheat.dat`)

Les solutions Homebrew/digital peuvent également tirer parti des bases de données de cheats, ces logiciels actuellement disponibles peuvent les utiliser:
- NitroHax (`cheats.xml`)
  - Le moteur utilisé ici charge toute la base de données cheats.xml dans la RAM limitée de la Nintendo DS et essaye de gérer les choses à partir de là. Cela impose une limite sérieuse sur le nombre de cheats que vous pouvez avoir, car NitroHax ne chargera pas un fichier cheats.xml au-delà de 2.4 Mo
- TWiLight Menu++ (`usrcheat.dat`)
  - TWiLight Menu++ lit le `usrcheat.dat` et envoie les valeurs de triche activées à un autre fichier, que nds-bootstrap récupère
  - Le moteur de triche utilisé dans nds-bootstrap est basé sur celui utilisé dans NitroHax. Cependant, en raison du fichier qui ne contient que des cheats activées pour ce titre spécifique, la taille du fichier n'a pas de limite réelle.
  - Bootstrap 4 DS (la version nds-bootstrap utilisée sur les linkers) ne supporte pas les cheats, en raison du manque de mémoire vive et des limitations du Pack d'extension de mémoire.

Pour la base de données de cheats la plus complète, nous vous recommandons d'utiliser celle de DeadSkullzJr intitulée [DeadSkullzJr's Cheat Database](https://gbatemp.net/threads/deadskullzjrs-nds-cheat-databases.488711/page-38#post-9090779)

Les cheat codes sont généralement de types A à E, voici une description des différents types:

- Le type de code 0xE est un type de code 32 bits qui vous permet de faire plusieurs écritures dans de nombreuses adresses consécutives en même temps. Essentiellement, c'est comme le type de code d'écriture de la RAM 32 bits (0x0), sauf qu'il n'y a pas d'adresses listées à la suite des valeurs que vous voulez écrire. Au lieu de cela, le type de code 0xE est programmé pour se brancher automatiquement à partir d'une adresse de départ, puis déterminer les adresses à écrire. À partir de là, il vous suffit de donner le montant à écrire pour qu'il fasse le travail.

Crédits: (`DeadSkullzJr`)
