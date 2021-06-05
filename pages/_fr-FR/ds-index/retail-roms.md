---
lang: fr-FR
layout: wiki
section: ds-index
category: reference
title: ROMs originales
description: Informations relatives aux ROMs DS commerciales
---

### Anti-piratage
AP (abréviation de anti-piratage) est une méthode utilisée par les développeurs pour imposer des achats légitimes et empêcher le piratage. Cela peut être contourné soit depuis le lanceur, soit depuis la ROM elle-même.

- Pour les besoins de nds-bootstrap, vous pouvez charger un fichier `.ips` afin de contourner ces correctifs. Ce fichier `.ips` sera patché à l'intérieur de nds-bootstrap, donc vous pouvez garder les fichiers ROM intacts. Un pack de fichiers `.ips` sont automatiquement inclus avec TWiLight Menu++.
- Avec Wood R4, ces correctifs sont inclus dans le logiciel. Vous n'aurez pas besoin de modifier la ROM elle-même.

Dans le cas où il n'y a pas de `. ps` fichier pour votre ROM ou votre logiciel n'a pas patché votre ROM, vous pouvez essayer de modifier directement la ROM elle-même en utilisant l'outil [nds-scene](https://gbatemp.net/download/retrogamefan-nds-rom-tool-v1-0_b1215.35735/)

### Cloneboot
Cloneboot est quand un jeu envoie ses propres exécutables ARM7 et ARM9 sur une autre console. Il est utilisé pour le téléchargement DS, pour le multijoueur avec une seule carte. Mais tous les jeux qui ont le multijoueur avec une seule carte n'utilisent pas cloneboot.

Actuellement, les patchs cloneboot de nds-bootstrap sont cassés à cause des patchs des exécutables arm7 et arm9 qui rendent les signatures RSA invalides.

### Fichiers de sauvegarde
Les cartouches Nintendo DS ont 4 types de sauvegarde connus :

- EEPROM - Mémoire programmable effaçable en lecture seule
- FLASH
- FRAM - Mémoire d'accès aléatoire ferroélectrique
- NAND - NOT-AND

Bien que rare, il y a des Cartouches DS avec des sauvegardes basées sur la NAND : WarioWare DIY & Jam with the band (USA)/Daigasso Band Brothers

Il y a différents formats à utiliser selon le lanceur, mais nds-bootstrap utilise le format `.sav` brut. Si vous utilisez un format différent, voici un site web que vous pouvez utiliser pour le convertir : http://www.shunyweb.info/convert.php

### Assembly
Le langage assembly est n'importe quel langage de programmation de bas niveau avec une connexion forte entre les instructions du langage et les instructions du processeur. Sur le DS, le code assembly se présente sous la forme d'instructions ARM ou THUMB, les instructions THUMB étant un sous-ensemble des instructions ARM. THUMB est utile pour économiser la bande passante de la mémoire, car il utilise des instructions 16 bits sur les instructions 32 bits que ARM utilise. Vous pouvez trouver plus d'informations sur les instructions assembly, ainsi que beaucoup plus d'informations techniques pour le DS et le DSi, sur [GBATEK](https://problemkaputt.de/gbatek.htm).

### Lecture DMA de la carte
Card DMA (signifie Direct Access Memory, en français Accès direct à la mémoire) est un moyen plus efficace de lire des données de carte que par le logiciel. Lorsqu'il n'y a pas de données disponibles, le code peut toujours être exécuté. Dans le code originel du lecteur de carte, le lecteur de données regarde si de nouvelles données sont disponibles dans le registre, ce qui fait perdre du temps. C'est le moyen privilégié d'accéder aux données.

Vous pouvez repérer un jeu qui utilise DMA dans no$gba en activant le log DMA sur ARM9. Un accès DMA à la carte utilise AF000001 comme troisième paramètre.
- Par exemple : `DMA2 : 04100010 023C18C0 AF000001`

### Code de triche d'Action Replay
Les codes de triche Action Replay sont des codes qui vous permettent de faire des changements programmables de bas niveau dans la zone mémoire de votre (vos) jeu(x) favori(s). Ces changements vont de simples ajustements de valeur à des réglages ASM extrêmement avancés, qui peuvent tous deux altérer l'expérience du ou des jeux joués.

Les linkers peuvent tirer parti des codes de triches en utilisant des bases de données de codes. Les fonctionnalités de triche sont intégrées dans le logiciel du linker. Les noyaux suivants peuvent utiliser des codes de triche:
- Wood R4 (`usrcheat.dat`)
- YSMenu (`usrcheat.dat`)

Homebrew/digital-based solutions can also take advantage of the cheat databases, the software currently available can use the following:
- [NitroHax](https://www.chishm.com/NitroHax) (`cheats.xml`)
   - NitroHax vous permet d'utiliser des codes de triche avec des cartes de jeu réelles à partir d'un linker. Le moteur utilisé ici charge toute la base de données cheats.xml dans la RAM limitée de la Nintendo DS et essaye de gérer les choses à partir de là. Cela impose une limite sérieuse sur le nombre de cheats que vous pouvez avoir, car NitroHax ne chargera pas un fichier cheats.xml au-delà de 2.4 Mo
- [NitroHax3DS](https://github.com/ahezard/NitroHax3DS/releases) ([usrcheat.dat fork](https://github.com/Epicpkmn11/NitroHax3DS/releases)) (`cheats.xml` ou `usrcheat.dat`)
   - NitroHax3DS est une version de NitroHax qui fonctionne à partir de la carte SD du système sur DSi ou 3DS. La version originale utilise cheats.xml avec la même 2.4 Limite de Mo que le NitroHax d'origine, mais il y a aussi une branche qui charge les codes depuis une base de données usrcheat.dat sans limitation de taille
- [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) (`usrcheat.dat`)
   - TWiLight Menu++ lit le `usrcheat.dat` et envoie les valeurs de triche activées à un autre fichier, que nds-bootstrap récupère
   - Le moteur de triche utilisé dans nds-bootstrap est basé sur celui utilisé dans NitroHax. Cependant, en raison du fichier de triche ne contenant que des triches activées pour ce titre spécifique, il n'y a qu'une limite au nombre de triches pouvant être activées, et non une limite à la taille de la base de données
   - Bootstrap 4 DS (la version nds-bootstrap utilisée sur les linkers) ne supporte pas les codes de triche, en raison du manque de mémoire vive et des limitations du Pack d'extension de mémoire

Pour la base de données de cheats la plus complète, nous vous recommandons d'utiliser celle de DeadSkullzJr intitulée [DeadSkullzJr's Cheat Database](https://gbatemp.net/threads/deadskullzjrs-nds-cheat-databases.488711).

Les codes de triche sont généralement de types A à E, voici une description des différents types:

- Le type de code 0xE est un type de code 32 bits qui vous permet de faire plusieurs écritures dans de nombreuses adresses consécutives en même temps. Essentiellement, c'est comme le type de code d'écriture de la RAM 32 bits (0x0), sauf qu'il n'y a pas d'adresses listées à la suite des valeurs que vous voulez écrire. Au lieu de cela, le type de code 0xE est programmé pour se brancher automatiquement à partir d'une adresse de départ, puis déterminer les adresses à écrire. À partir de là, il vous suffit de donner le montant à écrire pour qu'il fasse le travail.
