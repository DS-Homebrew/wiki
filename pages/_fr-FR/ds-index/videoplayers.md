---
lang: fr-FR
layout: wiki
section: ds-index
category: reference
title: Lecteurs vidéo
description: Lecteurs vidéo homebrew pour la Nintendo DS(i)
---

# Lecteurs vidéo homebrew pour la Nintendo DS(i)
This page contains a list of working video players for the Nintendo DS and DSi that explains how each works.

| Nom du joueur | Conteneurs/Codecs pris en charge | Inconvénients                                               | FPS max                           |
| ------------- | -------------------------------- | ----------------------------------------------------------- | --------------------------------- |
| FastVideoDS   | `.fv`, FastVideoDS               | Le spam de confettis ralentit les vidéos à haute fréquence. | 60fps (DSi mode), 30fps (DS mode) |
| Moonshell     | `.dpg`, MPEG1                    | Ne peut atteindre qu'un certain taux d'images/de débit.     | 24 FPS                            |
| Tuna-ViDS     | `.avi`, XVid                     | Ne peut atteindre qu'un certain taux d'images/de débit.     | 15 FPS                            |
| MPEG4Player   | `.mp4`, MPEG-4                   | Ne peut lire que des vidéos courtes.                        | 24 FPS                            |

Notes :
- Le nombre maximal de FPS dépend du contenu et de la durée de la vidéo.
- Moonshell v1.x and beta builds of v2.00 may lock-up later on, if video bitrate is higher than around `192`. It is recommended to use v2.10.

## FastVideoDS

Note : Si vous obtenez un message disant `Cet encodeur nécessite un processeur supportant les instructions AVX2`, alors vous devez soit installer une puce CPU plus récente, soit utiliser un PC plus récent.
{: .alert .alert-warning}

### Windows

1. Téléchargez [.NET Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-6.0.12-windows-x64-installer?cid=getdotnetcore) et installez-le
1. Téléchargez [l'encodeur FastVideoDS](https://mega.nz/file/mYwiBTZA#FX6k-9cclPig4_WutE9IueVR7NN0Kxl-mZvRXyhpQRg)
1. Téléchargez [FastVideoDS.bat](/assets/files/FastVideoDS.bat) au même endroit que le fichier `.exe` de l'encodeur
1. Copy or move your video to the same place as the `.bat` file
1. Drag and drop the copied or moved video into the `.bat` file

Lorsque ce processus est terminé, il devrait être facile de glisser-déposer sur la carte SD. Une fois que vous avez placé la vidéo sur votre carte SD, elle sera prête à être lue via **TW**i**L**ight Menu++.

## Conversion vidéo Moonshell (DPG4x)

1. Téléchargez [DPG4x](https://www.gamebrew.org/wiki/DPG4X)
1. Ouvrez `dpg4x.7z`
1. Ouvrez `dpg4x-2.3.3.0.zip` (3.0-1 donne une erreur à l'ouverture, pour une raison inconnue)
1. Ouvrez `dpg4x-2.3.3.0_setup.exe`, et procédez à l'installation
1. Après l'installation, ouvrez DPG4x
1. Cliquez sur l'onglet `VIDEO`
1. Cochez l'option `Keep Aspect`
1. Réglez `Video Bitrate` selon votre choix (un taux plus élevé devrait améliorer la qualité)
1. Cliquez sur l'onglet `AUDIO`
1. Cochez `Normalize Volume`, si votre vidéo est un peu silencieuse
1. Cliquez sur l'onglet `SUBTITLES`
1. Réglez `Subtitles Source` à `Disable Subtitles`, car certaines pistes de sous-titres peuvent ne pas s'afficher correctement
1. Cliquez sur l'onglet `MAIN`
1. Cliquez sur `Add Media` pour ouvrir votre ou vos fichiers vidéo
1. Définissez `DPG Version` à `4` si vous utilisez Moonshell v2.x, sinon définissez à `3` ou moins
1. Définissez `Quality` selon votre choix
1. Cliquez sur `Start Encoding` pour convertir la ou les vidéos

Lorsque ce processus est terminé, il devrait être facile de glisser-déposer sur la carte SD. Une fois que vous avez placé la vidéo sur votre carte SD, elle sera prête à être lue via Moonshell.

## Guide de TunaViDS

### Windows
Tout d'abord, vous devez sélectionner la vidéo de votre choix. Il est recommandé que votre vidéo soit au format 4/3, mais FFmpeg ajoute des barres noires à la vidéo si elle ne l'est pas.

Attention : Ne modifiez pas les paramètres de ROMs de Tuna-ViDS, sinon il ne pourra pas démarrer correctement. Ce guide part du principe que vous disposez de la dernière version de **TW**i**L**ight Menu++.
{: .alert .alert-warning}

Ensuite, téléchargez FFmpeg depuis [ce lien direct](https://www.gyan.dev/ffmpeg/builds/ffmpeg-git-essentials.7z) et extrayez-le dans C:\ffmpeg ou dans un endroit auquel vous pouvez accéder sans droits administrateur.

Vous devriez probablement rester dans la zone de sécurité pour la conversion des vidéos (10-15 FPS), sinon votre vidéo peut faire planter votre console. Des ralentissements peuvent se produire sur les scènes où de nombreux éléments sont en mouvement (confettis, pluie, etc.).

Pour utiliser FFmpeg partout, il est recommandé d'ajouter le répertoire au chemin de la variable d'environnement de votre système. Cela peut casser les programmes qui dépendent de FFmpeg, alors assurez-vous de supprimer l'entrée lorsque vous avez terminé.

Glissez-déposez votre vidéo dans l'un de ces fichiers batch pour la convertir :
- [xvid-ds.bat](/assets/files/xvid-ds.bat) : Convertit en vidéo de 12 FPS optimale pour les consoles DS
- [xvid-dsi.bat](/assets/files/xvid-dsi.bat) : Convertit en vidéo de 12 FPS optimale pour les consoles DSi
- [xvid-ds-vol4.bat](/assets/files/xvid-ds-vol4.bat) : Convertit en vidéo de 12 FPS optimale pour les consoles DS avec une augmentation du volume de 400 %
- [xvid-dsi-vol4.bat](/assets/files/xvid-dsi-vol4.bat) : Convertit en vidéo de 12 FPS optimale pour les consoles DSi avec une augmentation du volume de 400 %

Si vous le souhaitez, vous pouvez modifier les éléments suivants dans l'un des fichiers .bat ci-dessus :
- `12` dans `-r 12` à une autre valeur différente entre `10` et `15` pour une fréquence d'images différente
- `-2` en `scale=256:-2` à la résolution verticale souhaitée, si la vidéo apparaît déformée

Lorsque ce processus est terminé, il devrait être facile de glisser-déposer sur la carte SD. Une fois que vous avez placé la vidéo sur votre carte SD, elle sera prête à être lue via **TW**i**L**ight Menu++.

La vidéo quittera le menu à la fin de la lecture, donc si vous voulez lire des vidéos en boucle, vous devrez les coller et les répéter dans un éditeur vidéo puis les convertir en xvid avi en utilisant cette méthode.

## MPEG4Player

### Windows

Le processus est le même pour Tuna-ViDS, mais vous pouvez avoir des vidéos jusqu'à 24 FPS.
- [dsmp4-43.bat](/assets/files/dsmp4.bat) : Pour les vidéos en 4/3
- [dsmp4-43.bat](/assets/files/dsmp4.bat) : Pour les vidéos en 16/9
