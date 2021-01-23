---
lang: fr-FR
layout: wiki
section: ds-index
category: reference
title: ROMs originales
description: Information related to retail DS games
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
Card DMA (stands for Direct Memory Access) is a more efficient way to read cartridge data than by software. Lorsqu'il n'y a pas de données disponibles, le code peut toujours être exécuté. In software cartridge data reads, polling the register to see if there is new data wastes times. C'est le moyen privilégié d'accéder aux données.

Vous pouvez repérer un jeu qui utilise DMA dans no$gba en activant le log DMA sur ARM9. Un accès DMA à la carte utilise AF000001 comme troisième paramètre.
- Par exemple : `DMA2 : 04100010 023C18C0 AF000001`

### ROM donatrice

Dans les versions précédentes de nds-bootstrap, une ROM Mario Kart DS était nécessaire pour que les jeux SDK3-4 puissent fonctionner ou sauvegarder. La ROM a agi comme une ROM donatrice. nds-bootstrap saisit le binaire arm7 du donateur, remplaçant le binaire arm7 de la ROM, afin que les correctifs de sauvegarde puissent fonctionner, ce qui a cependant provoqué quelques effets secondaires. Dans les versions ultérieures de nds-bootstrap, une ROM Donatrice est nécessaire pour que certains jeux THUMB ou SDK5 puissent démarrer et sauvegarder.

### Cheats d'Action Replay

Les cheats Action Replay sont des codes qui vous permettent de faire des changements programmables de bas niveau dans la zone mémoire de votre (vos) jeu(x) favori(s). Ces changements vont de simples ajustements de valeur à des réglages ASM extrêmement avancés, qui peuvent tous deux altérer l'expérience du ou des jeux joués.

Flashcards can take advantage of cheat codes by using cheat databases. Cheat functionality is integrated within the flashcard kernel respectively. Les noyaux suivants peuvent utiliser des cheats:
- Wood R4 (`usrcheat.dat`)
- YSMenu (`usrcheat.dat`)

Les solutions Homebrew/digital peuvent également tirer parti des bases de données de cheats, ces logiciels actuellement disponibles peuvent les utiliser:
- [NitroHax](https://www.chishm.com/NitroHax) (`cheats.xml`)
  - NitroHax lets you use cheats with real game cards from a flashcard. The engine used here loads the entire cheats.xml database into the Nintendo DS's limited RAM and tries to manage things from there. This imposes a serious limit on how many cheats you can have, as NitroHax will not load a cheats.xml file past 2.4 MB
- [NitroHax3DS](https://github.com/ahezard/NitroHax3DS/releases) ([usrcheat.dat fork](https://github.com/Epicpkmn11/NitroHax3DS/releases)) (`cheats.xml` or `usrcheat.dat`)
  - NitroHax3DS is a version of NitroHax that runs from the system's SD card on DSi or 3DS. The original version uses cheats.xml with the same 2.4 MB limit as the original NitroHax, but there is also a fork that loads cheats from a usrcheat.dat database with no size limitation
- [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) (`usrcheat.dat`)
  - TWiLight Menu++ reads the `usrcheat.dat` and sends off the enabled cheat values to another file, which nds-bootstrap picks up
  - The cheat engine used in nds-bootstrap is based on the one used in NitroHax. However, due to the cheat file containing only enabled cheats for that specific title, there is only a limit to how many cheats can be enabled, not a limit on the database size
  - Bootstrap 4 DS (the nds-bootstrap version used on flashcards) does not support cheats, due to not having enough RAM and the limitations of the Memory Expansion Pack

For the most complete cheat database, we recommend using the one made by DeadSkullzJr titled [DeadSkullzJr's Cheat Database](https://gbatemp.net/threads/deadskullzjrs-nds-cheat-databases.488711).

Les cheat codes sont généralement de types A à E, voici une description des différents types:

- The 0xE code type is a 32-bit code type that allows you to make multiple writes in many consecutive addresses all at once. Essentiellement, c'est comme le type de code d'écriture de la RAM 32 bits (0x0), sauf qu'il n'y a pas d'adresses listées à la suite des valeurs que vous voulez écrire. Au lieu de cela, le type de code 0xE est programmé pour se brancher automatiquement à partir d'une adresse de départ, puis déterminer les adresses à écrire. À partir de là, il vous suffit de donner le montant à écrire pour qu'il fasse le travail.

Crédits: (`DeadSkullzJr`)
