---
lang: fr-FR
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: Informations sur l'utilisation de la connexion Wi-Fi sur la Nintendo DS
---

- Sur les applications Nintendo DS, vous ne pouvez utiliser que WEP et Open WiFi
- Sur les applications Nintendo DSi améliorées/exclusives, le support WPA et WPA2 a été ajouté

Les hotspots sont utilisables, vous n'avez donc pas besoin de modifier la configuration de votre routeur.

### Créez un point d'accès wi-fi
Il y a des guides pour créer un hotspot compatible avec les jeux DS sur macOS et les ordinateurs Linux sur GBAtemp. Si vous êtes sous Windows, vous pouvez utiliser un environnement Linux USB.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

### Restauration Nintendo DS WFC
1. Lancez les paramètres Nintendo WFC
1. Connectez-vous à votre point d'accès
1. Définissez la valeur DNS principale en choisissant une des valeurs ci-dessous, selon le service que vous souhaitez utiliser :
   - **Wiimmfi** - `164.132.44.106`
   - **AltWFC/WFCZwei** - `172.104.88.237` ou `104.131.93.87`
   - **BenFi** - `24.218.177.103`
   - **Twilit WF** - `34.66.49.81`
1. Définissez `1.1.1.1` comme DNS secondaire
1. Vous pourriez avoir besoin d'appliquer un patch NoSSL à votre jeu, selon le jeu

### Correction manuelle de vos ROMs DS
Suivez le guide ci-dessous au cas où votre FAI bloque les serveurs DNS personnalisés, sinon il est *fortement* recommandé de suivre le guide ci-dessus.

Note : Les utilisateurs de GNU/Linux et macOS peuvent suivre des instructions très similaires, mais devront utiliser mono

1. Télécharger [WFCPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)
1. Copiez la ROM du jeu que vous voulez patcher dans le même dossier où WFCPatcher est sauvegardé et ouvrez ce dossier
1. Créer un fichier texte avec le nom `patch.bat`
1. Dans le fichier, entrez `wfcpatcher.exe %1 --domain wiimmfi.de` puis enregistrer et fermer (vous pouvez remplacer wiimmfi.de par une autre URL, si vous souhaitez utiliser un autre serveur)
1. Maintenant, faites glisser toutes les roms sur lesquelles vous souhaitez patcher sur patch.bat
1. Fini! les roms patchés seront ceux qui se termineront par (wiimmfi)

N'oubliez pas de supprimer tout DNS que vous pourriez avoir enregistré dans vos paramètres Wi-Fi avant d'essayer de vous connecter avec la ROM patchée

### Dépannage et lecture approfondie
Si vous recevez des erreurs, vous pouvez entrer le code d'erreur dans le [dépannage](https://wiimmfi.de/error) de wiimmfi pour trouver des moyens de le corriger.

Pour un dépannage plus spécifique et plus d'informations, comme comment se connecter en ligne sur les émulateurs, vous pouvez lire ce [Guide Wiimmfi](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) écrit par les membres du [Réseau Mario Kart DS](https://discord.gg/pa9bea6).
