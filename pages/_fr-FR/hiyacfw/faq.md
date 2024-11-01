---
lang: fr-FR
layout: faq
section: hiyacfw
title: FAQ et dépannage
long_title: FAQ et dépannage de hiyaCFW
description: FAQ et dépannage pour hiyaCFW
---

#### Comment installer des applications ou DSiWare sur la SDNAND de hiyaCFW ?
You will need to use [NTM](https://github.com/Epicpkmn11/NTM/releases/latest) to install apps to the SDNAND, but older DS homebrew may not be compatible.
- Si vous souhaitez installer des dumps de cartes de jeu, vous devez utiliser un [forwarder](../ds-index/forwarders)

#### Pourquoi est-ce que j'obtiens le code d'erreur #-2435-8325 ?
Si votre Nintendo DSi affiche une erreur dans ce format lors du démarrage, le # étant un chiffre, cela signifie que la phase de démarrage 2 pense que quelque chose ne va pas avec votre SDNAND. Ceci est généralement corrigé en [réinstallant hiyaCFW](installing).

#### Pourquoi le message « Une erreur est survenue » apparaît-il lors du démarrage de hiyaCFW ?
Lorsque le menu Nintendo DSi détecte un problème, il affiche généralement ce message d'erreur générique, dont voici quelques causes :

##### Le bug de l'espace libre
Le menu Nintendo DSi présente un bug lors de la vérification de l'espace libre sur les périphériques de stockage volumineux. Bien que cela ne puisse pas se produire sur la puce NAND (puisque la puce ne fait que 256 Mio), cela peut se produire lors de l'utilisation d'une carte SD.

Ce qui marche et ce qui ne marche pas passe par une fourchette de deux gibioctets. Par exemple, avoir 0-2 Gio d'espace libre fonctionne, mais 2-4 Gio ne fonctionne pas. Il en va de même pour 4-6 Gio contre 6-8 Gio, jusqu'à ce que vous atteigniez la taille de votre carte SD.

La dernière version de hiyaCFW peut créer des fichiers factices pour contourner ce problème, donc assurez-vous que vous téléchargez la dernière version de [hiyaCFW](https://github.com/RocketRobz/hiyaCFW/releases/latest/download/hiyaCFW.7z) et copiez `hiya.dsi` de « for SDNAND SD card » à la racine de votre carte SD.

##### Plus de 39 titres
Le menu Nintendo DSi est limité à 39 titres. If you have more than that, delete some from the folders in `sd:/title` or use [NTM](https://github.com/Epicpkmn11/NTM/releases/latest) to uninstall them.

##### Trop d'espace utilisé par les DSiWare
Il existe également une limite de 200 blocs (25Mo) pour les DSiWare dans le dossier `00030004` . This can be worked around by installing DSiWare as system apps using [NTM](https://github.com/Epicpkmn11/NTM/releases/latest).

##### Titre invalide
Il y a plusieurs choses que vous devez prendre en compte lorsque vous ajoutez des titres à hiyaCFW :
- Les dumps de cartes de jeu ne peuvent être exécutés sans utiliser un [forwarder](../ds-index/forwarders)
- Les homebrews doivent être correctement compilés à l'aide d'outils modernes pour fonctionner à partir du menu Nintendo DSi
