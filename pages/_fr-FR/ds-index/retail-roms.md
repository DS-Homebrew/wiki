---
lang: fr-FR
layout: wiki
section: ds-index
category: reference
title: ROMs commerciales
description: Informations relatives aux jeux DS commerciaux
---

### Anti-piratage
L'AP (anti-piratage) est une méthode utilisée par les développeurs pour faire respecter les achats légitimes et empêcher le piratage. Celle-ci peut être contournée soit à partir du lanceur, soit à partir de la ROM elle-même.

- Pour nds-bootstrap, il peut charger un fichier `.ips` afin de contourner lesdits patchs. Ce fichier `.ips` sera appliqué par nds-bootstrap dans la RAM afin que vous puissiez garder les fichiers ROMs intacts. Un pack de fichiers `.ips` est inclus avec TWiLight Menu++
- Pour Wood R4, ces correctifs sont inclus dans le logiciel lui-même, vous n'aurez pas besoin de modifier la ROM elle-même

S'il n'y a pas de fichier `.ips` pour votre ROM ou si votre logiciel ne patche pas votre ROM, vous pouvez essayer de modifier directement la ROM elle-même en utilisant [DS-Scene ROM Tool](https://gbatemp.net/download/retrogamefan-nds-rom-tool-v1-0_b1215.35735/).

### Cloneboot
Le cloneboot consiste à ce qu'un jeu envoie ses propres binaires ARM7 et ARM9 chargés à une autre console. Il est utilisé par le Téléchargement DS pour le multijoueur avec une seule carte. Cependant, tous les jeux qui ont un système multijoueur à carte unique n'utilisent pas le cloneboot.

### Fichiers de sauvegarde
Les cartes Nintendo DS ont 4 types de sauvegarde connus :

- EEPROM - Mémoire morte effaçable électriquement et programmable
- FLASH
- FRAM - Mémoire à accès aléatoire ferroélectrique
- NAND - NON-ET

Il existe différents formats à utiliser en fonction du lanceur, mais nds-bootstrap utilise le format brut `.sav`. Si vous avez une sauvegarde dans un format différent, voici un site Web que vous pouvez utiliser pour la convertir : http://www.shunyweb.info/convert.php.

### Assembleur
Le langage assembleur est un langage de programmation de bas niveau avec une forte connexion entre les instructions du langage et les instructions du processeur. Sur la DS, le code d'assemblage se présente sous la forme d'instructions ARM ou THUMB, les instructions THUMB étant un sous-ensemble des instructions ARM. THUMB est utile pour économiser la bande passante de la mémoire car il utilise des instructions de 16 bits au lieu des instructions 32 bits habituelles utilisées par ARM.

Vous pouvez trouver plus d'informations sur les instructions d'assembleurs, ainsi que de nombreuses autres informations techniques pour la DS et la DSi, sur [GBATEK](https://problemkaputt.de/gbatek.htm).

### Lecture DMA de la carte
Le DMA (Direct Memory Access) est un moyen plus efficace de lire des données que d'utiliser le CPU. Lorsque les données sont transférées, le code peut toujours s'exécuter, c'est donc le moyen privilégié d'accéder aux données.

Vous pouvez repérer un jeu qui utilise le DMA dans no$gba en activant le log du DMA sur ARM9. Un accès DMA à la carte utilise AF000001 comme troisième paramètre.
- Par exemple : `DMA2 : 04100010 023C18C0 AF000001`

### Codes de triche Action Replay
Les codes de triche Action Replay sont des codes qui vous permettent d'effectuer des modifications programmables de bas niveau dans la région de la mémoire de votre/vos jeu(x) préféré(s). Ces modifications vont de simples ajustements de valeurs à des ajustements ASM extrêmement avancés, qui peuvent tous deux modifier complètement l'expérience du/des jeu(x) joué(s).

Les linkers peuvent tirer parti des codes de triche en utilisant des bases de données de codes de triche. La fonctionnalité d'utilisation de codes de triche est intégrée dans le kernel du linker respectivement. Les kernels suivants peuvent utiliser les codes de triche :
- Wood R4 (`usrcheat.dat`)
- YSMenu (`usrcheat.dat`)

Les homebrews/solutions numériques peuvent également tirer parti des bases de données de codes de triche, les logiciels actuellement disponibles peuvent utiliser les éléments suivants :
- [NitroHax](https://www.chishm.com/NitroHax) (`cheats.xml`)
   - NitroHax vous permet d'utiliser des codes de triches avec de vraies cartes de jeu à partir d'un linker. Le moteur utilisé ici charge la totalité de la base de données cheats.xml dans la RAM limitée de la Nintendo DS et tente de gérer les choses à partir de là. Cela impose une limite importante au nombre de codes de triche que vous pouvez avoir, car NitroHax ne chargera pas un fichier cheats.xml de plus de 2,4 Mo
- [NitroHax3DS](https://github.com/ahezard/NitroHax3DS/releases) ([fork usrcheat.dat](https://github.com/Epicpkmn11/NitroHax3DS/releases)) (`cheats.xml` ou `usrcheat.dat`)
   - NitroHax3DS est une version de NitroHax qui fonctionne à partir de la carte SD système sur DSi ou 3DS. La version originale utilise cheats.xml avec la même limite de 2,4 Mo que le NitroHax original, mais il y a aussi un fork qui charge les codes de triche à partir d'une base de données usrcheat.dat sans limitation de taille
- [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) (`usrcheat.dat`)
   - TWiLight Menu++ lit le fichier `usrcheat.dat` et envoie les valeurs des codes de triche activés vers un autre fichier, que nds-bootstrap récupère
   - Le moteur de triche utilisé dans nds-bootstrap est basé sur celui utilisé dans NitroHax. Cependant, étant donné que le fichier de triche ne contient que les codes de triches activés pour ce titre spécifique, il n'y a qu'une limite au nombre de codes de triches pouvant être activés, et non une limite à la taille de la base de données

Pour la base de données de codes de triche la plus complète, il est recommandé d'utiliser la [base de données de codes de triche NDS de DeadSkullzJr](https://gbatemp.net/threads/deadskullzjrs-nds-cheat-databases.488711).

Les codes de triche sont généralement de type 0 à F, et voici une description (inachevée) de ceux-ci :

- Le type de code 0xE est un type de code 32 bits qui vous permet d'effectuer des écritures multiples dans plusieurs adresses consécutives en une seule fois. Essentiellement, c'est comme le type de code d'écriture RAM 32 bits de base (0x0), sauf qu'il n'y a pas d'adresses listées à côté des valeurs que vous voulez écrire. Au lieu de cela, le type de code 0xE est programmé pour se brancher automatiquement à partir d'une adresse de départ, puis déterminer les adresses où écrire. À partir de là, il suffit d'ajouter le montant à écrire pour que le système fasse son travail
  - Il est connu que les codes de triche de ce type ne fonctionnent généralement pas avec nds-bootstrap actuellement
- DeadSkullzJr travaille à l'élaboration d'une liste plus complète de descriptions de codes de triche. Cette section sera liée à cette liste dès qu'elle sera prête

### Titres de démonstration et de distribution :
Les titres de démonstration (démo) diffèrent de leurs homologues commerciaux de diverses manières. L'indicateur évident est que le titre en question est une démo de ce que sera la version commerciale, c'est essentiellement un aperçu de ce qui est à venir lorsque la version commerciale complète sera disponible. Dans le cas de la gamme Nintendo DS, ces titres sont souvent marqués du message « Not for Resale » ou « Interdit à la vente » sur les étiquettes des titres, chaque démo porte également un title ID différent de celui de ses homologues commerciaux, et un autocollant « Not for Resale » est également présent au dos de la carte de jeu du titre. Ces titres ne sont généralement que des démonstrations sur des kiosques dans des lieux de promotion dans des magasins et autres.

Les titres de distribution sont une situation légèrement différente dans la plupart des cas, mais les démos peuvent également correspondre à l'étiquette de distribution pour quelques titres de la bibliothèque. Dans la plupart des cas, les titres de distribution ne sont que des versions commerciales du/des titre(s), destinées à seulement être exposées ou provenant d'un emballage promotionnel quelconque. Comme pour les titres de démonstration, vous pouvez voir la mention « Not for Resale » ou « Interdit à la vente » sur ces types de titres. Ces derniers peuvent parfois être utilisés dans des kiosques afin de permettre à d'autres joueurs de tester le titre. Cependant, sachant que ces produits sont essentiellement les mêmes que leurs homologues commerciaux dans la plupart des cas, ils ont tendance à avoir un identifiant supplémentaire dans le title ID sur l'étiquette.

Exemple d'ID : `DIS-NTR-NTRJ-JPN`

`DIS` - Distribution


### Étiquettes de titre
En regardant au bas de l'étiquette du titre, il est possible de voir l'ID du titre ainsi que d'autres informations. Pour cet exemple, l'ID suivant sera utilisé :

- NTR-NTRJ-**XXX**

**XXX** représente ce qui suit :

- AUS - Australie
- CHN - Chine
- DEN - Danemark
- EUR - Europe (multilingue)
- EUU - Europe (néerlandais ou italien seulement)
- FRA - France
- GER - Allemagne
- HOL - Pays-Bas
- ITA - Italien
- JPN - Japon
- KOR - Corée
- NOE - Europe (allemand uniquement)
- NOR - Norvège
- RUS - Russie
- SPA - Espagne
- UKV - Royaume-Uni
- USA - États-Unis

La dernière lettre de l'ID du titre représente elle-même la langue du titre. En utilisant l'ID du titre du dernier exemple :

- NTR-NTR**X**-JPN

**X** représente ce qui suit :

- A - Monde (ne compte pas car une seule chose l'a utilisé)
- C - Chinois (simplifié)
- D - Allemand
- E - Anglais américain
- F - Français
- G - Grec
- H - Néerlandais
- I - Italien
- J - Japonais
- K - Coréen
- M - Suédois
- N - Norvégien
- O - Anglais (optimisé DSi)
- P - Multilingue européen
- Q - Danois
- R - Russe
- S - Espagnol
- T - Anglais (optimisé DSi)
- U - Anglais australien
- V - Anglais britannique
- W - Autres langues (variable)
- X - Autres langues (variable)
- Y - Autres langues (variable)
- Z - Autres langues (variable)

En ce qui concerne les identifiants du système :

- NTR - Nitro - Nintendo DS
- TWL - Twilight - Nintendo DSi

### Optimisé DSi :

Les jeux dotés de la fonctionnalité « optimisé DSi » (*DSi Enhanced* en anglais) sont des jeux qui tirent parti de certains aspects du matériel de la DSi tout en restant compatibles avec la DS Tank/Lite. Ces jeux sont marqués comme `TWL` mais portent toujours la mention « Nintendo DS » au lieu de « Nintendo DSi » sur l'étiquette.
