---
lang: fr-FR
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: Informations sur l'utilisation de la connexion Wi-Fi sur la Nintendo DS
---

- Sur les applications Nintendo DS, vous ne pouvez utiliser que WEP et Open WiFi
- Sur les applications Nintendo Optimisés-DSi /Exclusifs en mode DSi , vous avez les options supplémentaires de sécurité WPA et WPA2

Les hotspots sont utilisables, vous n'avez donc pas besoin de modifier la configuration de votre routeur.

### Créez un point d'accès wi-fi
There are guides for creating a DS-compatible hotspot on macOS and Linux computers on GBAtemp.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

An Android mobile hotspot set to Open (none) security would also work.

Windows cannot create a compatible hotspot, so Windows users will need to boot into Linux in order to set one up.
#### Other methods
If you cannot create a DS-compatible hotspot using the above methods, you may be able to use another method.
- [Nintendo Wi-Fi USB Connector](https://gbatemp.net/threads/575631/)
  - While this can still be used, it is not recommended because it requires a 32-bit version of Windows XP or Vista
  - For information on setting up a Nintendo Wi-Fi USB Connector, read Section 3 of this [Wiimmfi Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) written by members of the [Mario Kart DS Network](https://discord.gg/pa9bea6)
- Changing router settings to be DS-compatible
  - This is not recommended because it opens your network to intruders, even if you use WEP security. It may also cause issues for other users of your network. If you choose to do this, it is recommended that you use a secondary router or guest network, if available
  - Not all routers support guest networks or turning security off
- Wi-Fi extenders

#### Settings
If you are setting up a network to be DS-compatible, it must meet the following specifications:
- WEP or Open (none) security
- 2.4 GHz wireless frequency
- 802.11b wireless mode
  - This may be listed as "Legacy mode" or something similar

### Restauration Nintendo DS WFC
1. Lancez la configuration de la Connexion Wi-Fi Nintendo
1. Connectez-vous à votre point d'accès
1. Définissez la valeur DNS principale en choisissant une des valeurs ci-dessous, selon le service que vous souhaitez utiliser :
   - **[Wiimmfi](https://wiimmfi.de)** - `164.132.44.106` ou `178.62.43.212`
   - **[AltWFC/WFCZwei](https://save-nintendo-wifi.com/) ([online player list](http://zwei.moe:9001))** - `172.104.88.237`
1. Définissez `1.1.1.1` comme DNS secondaire
1. Vous pourriez avoir besoin d'appliquer un patch NoSSL à votre jeu, selon le jeu

### Correction manuelle de vos ROMs DS
Follow the guide below in case your ISP blocks custom DNS servers, otherwise it is *strongly* recommended to follow the guide above.

- Users of GNU/Linux and macOS can follow very similar instructions, but will have to use Mono
- WfcPatcher currently doesn't support DSiWare

1. Télécharger [WfcPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)
1. Copiez la ROM du jeu que vous voulez patcher dans le même dossier où WfcPatcher est sauvegardé et ouvrez ce dossier
1. Créer un fichier texte
1. Dans le fichier, entrez `wfcpatcher.exe %1 --domain wiimmfi.de` puis enregistrez le texte avec le nom `patch.bat` et fermez la fenêtre
   - Vous pouvez remplacer wiimmfi.de par une autre URL, si vous souhaitez utiliser un autre serveur
   - Si le fichier semble toujours être un document texte, [activez les extensions de nom de fichier](https://dsi.cfw.guide/file-extensions-%28windows%29) et supprimez `.txt` du nom du fichier
1. Maintenant, faites glisser toutes les roms sur lesquelles vous souhaitez patcher sur patch.bat
1. Fini! les roms patchés seront ceux qui se termineront par (wiimmfi)

Don't forget to remove any DNS you might have saved on your Wi-Fi settings before attempting to connect with the patched ROM.

### Dépannage et lecture approfondie
If you are receiving any errors, you can enter the error code in Wiimmfi's [troubleshooter](https://wiimmfi.de/error) for ways to fix it.

For more specific troubleshooting and more information, such as how to connect to online on emulators or using a Nintendo Wi-Fi USB Connector, you can read this [Wiimmfi Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) written by members of the [Mario Kart DS Network](https://discord.gg/pa9bea6).
