---
lang: fr-FR
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: Informations sur l'utilisation du Wi-Fi sur la Nintendo DS
---

- Sur les applications Nintendo DS, vous pouvez uniquement utiliser les paramètres de sécurité Wi-Fi WEP et Ouvert
- Sur les applications optimisées/exclusives DSi fonctionnant en mode DSi, vous disposez d'options supplémentaires de sécurité WPA et WPA2
- Si vous êtes sur une DSi ou une 3DS, assurez-vous d'abord d'avoir accepté le contrat d'utilisation des services en ligne

Les points d'accès sont utilisables, vous n'avez donc pas besoin de modifier la configuration de votre routeur.

### Création d'un point d'accès
Il existe des guides sur GBAtemp pour créer un point d'accès compatible avec la DS sur des ordinateurs macOS et Linux.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

Un point d'accès mobile Android réglé sur la sécurité Ouvert (aucune) peut également fonctionner.

Windows ne pouvant pas créer de point d'accès compatible, les utilisateurs de Windows devront démarrer sous Linux pour en créer un.
#### Autres méthodes
Si vous ne parvenez pas à créer un point d'accès compatible avec la DS à l'aide des méthodes ci-dessus, vous pouvez peut-être utiliser une autre méthode.
- Connecteur USB Wi-Fi Nintendo
    - Bien que cette méthode puisse être utilisée, elle n'est pas recommandée car elle nécessite une version 32 bits de Windows XP ou Vista
    - Pour des informations sur la configuration d'un connecteur USB Wi-Fi Nintendo, lisez la section 3 de ce [guide Wiimmfi](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) rédigé par les membres du [Mario Kart DS Network](https://discord.gg/pa9bea6)
- Modification des paramètres du routeur pour qu'il soit compatible avec la DS
    - Ce n'est pas recommandé car cela ouvre votre réseau aux intrus, même si vous utilisez la sécurité WEP. Cela peut également causer des problèmes aux autres utilisateurs de votre réseau. Si vous choisissez de le faire, il est recommandé d'utiliser un routeur secondaire ou un réseau invité, si possible
    - Tous les routeurs ne prennent pas en charge les réseaux invités ou la désactivation de la sécurité
- Extensions Wi-Fi

#### Paramètres
Si vous configurez un réseau pour qu'il soit compatible avec la DS, il doit répondre aux spécifications suivantes :
- Sécurité WEP ou Ouvert (aucune)
- Fréquence sans fil de 2,4 GHz
- Mode sans fil 802.11b
    - Ceci peut être listé en tant que « mode hérité » ou quelque chose de similaire

### Restauration de la CWF Nintendo DS
1. Lancez la configuration de la connexion Wi-Fi Nintendo
1. Connectez-vous à votre point d'accès
1. Définissez votre valeur du DNS primaire à l'une des valeurs ci-dessous, en fonction du service que vous souhaitez utiliser :
    - **[Wiimmfi](https://wiimmfi.de)** - `167.235.229.36` ou `178.62.43.212`
    - **[AltWFC/WFCZwei](https://save-nintendo-wifi.com/) ([liste des joueurs en ligne](http://zwei.moe:9001))** - `172.104.88.237`
1. Définissez `1.1.1.1` comme DNS secondaire
1. À ce stade, il se peut que vous deviez appliquer un patch NoSSL à votre jeu, selon celui-ci

### Patcher manuellement vos ROMs DS
Suivez le guide ci-dessous au cas où votre FAI bloque les serveurs DNS personnalisés, sinon il est *fortement* recommandé de suivre le guide ci-dessus.

- Les utilisateurs de GNU/Linux et de macOS peuvent suivre des instructions très similaires, mais devront utiliser Mono
- WfcPatcher ne supporte pas les DSiWare pour le moment

1. Téléchargez [WfcPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)
1. Copiez la ROM du jeu que vous voulez patcher dans le même dossier que celui où WfcPatcher est enregistré et ouvrez ce dossier
1. Créez un fichier texte
1. Dans le fichier, entrez `wfcpatcher.exe %1 --domain wiimmfi.de` puis enregistrez le fichier texte avec le nom `patch.bat` et fermez la fenêtre
    - Vous pouvez remplacer wiimmfi.de par une autre URL, si vous souhaitez utiliser un autre serveur
    - Si le fichier semble toujours être un document texte, [activez les extensions de nom de fichier](https://dsi.cfw.guide/file-extensions-%28windows%29) et supprimez `.txt` du nom du fichier
1. Maintenant, faites glisser toutes les ROMs que vous souhaitez patcher sur le fichier patch.bat
1. C'est fait ! Les ROMs patchées seront celles qui se terminent par (wiimmfi)

N'oubliez pas de supprimer tout DNS que vous auriez enregistré dans vos paramètres Wi-Fi avant de tenter de vous connecter avec la ROM corrigée.

### Dépannage et autres lectures
Si vous recevez des erreurs, vous pouvez entrer le code d'erreur dans le [dépanneur](https://wiimmfi.de/error) de Wiimmfi pour trouver des moyens de les corriger.

Pour un dépannage plus spécifique et plus d'informations, notamment sur la façon de se connecter en ligne sur des émulateurs ou en utilisant un connecteur USB Wi-Fi Nintendo, vous pouvez lire ce [guide Wiimmfi](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) écrit par les membres du [Mario Kart DS Network](https://discord.gg/pa9bea6).
