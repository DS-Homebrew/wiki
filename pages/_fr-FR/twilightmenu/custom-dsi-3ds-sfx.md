---
lang: fr-FR
layout: wiki
section: twilightmenu
category: customization
title: Skins DSi / 3DS - SFX personnalisé
description: Comment utiliser une musique de fond et des effets sonores personnalisés dans les skins DSi et 3DS pour TWiLight Menu++
---

TWiLightMenu prend en charge les fichiers de son personnalisés dans les thèmes. Placez vos fichiers sonores sous le sous-répertoire `sound` dans le dossier de votre thème, par exemple pour le thème `blanc` , vous placeriez les fichiers dans `themes/white/sound/sfx. dans` et `themes/sound/bgm.pcm.raw` respectivement. Les deux fichiers sont optionnels, si il en manque un, la musique par défaut sera utilisée. Vous devriez alors aussi définir l'option musique dans les paramètres sur "Thème".

Ces instructions supposent que vous avez devkitPro installé avec mmutil. Vous pouvez obtenir devkitPro sur le site web [devkitPro](https://devkitpro.org/wiki/Getting_Started).

## Effets sonores
La banque d'effets sonores contient des effets sonores tels que l'icône de sélection du son, etc.

| Fichier     | Description                                                                                           |
| ----------- | ----------------------------------------------------------------------------------------------------- |
| startup.wav | Joué au démarrage. Voir la section [son de démarrage](#startup-sound) pour plus de détails            |
| back.wav    | Retour                                                                                                |
| launch.wav  | Joué lors du lancement d'un jeu                                                                       |
| select.wav  | Joué lors du déplacement du curseur de sélection                                                      |
| wrong.wav   | Joué en atteignant la fin de la page                                                                  |
| switch.wav  | Joué lors du changement de page                                                                       |
| stop.wav    | Joué sur le thème DSi lorsque le curseur de sélection arrête de se déplacer                           |
| bgm.pcm.raw | Ne fait pas partie de la banque de son. Voir la section [son de fond](#menu-bgm) pour plus de détails |

Vous pouvez alors exécuter `make` pour créer la banque d'effets sonores. Tous les fichiers listés ci-dessus, sauf *bgm.pcm.raw* sont requis, mais vous pouvez les rendre silencieux.

Votre *sfx.bin résultant* **doit être inférieur à 512000B = 512 kB**. Un fichier plus grand entraînera soit des plantages, soit des sons qui ne jouent pas complètement.

### Son de démarage
Alors que les autres effets sonores fonctionnent avec n'importe quel fichier WAV, le son de démarrage doit être dans un format spécifique afin de fonctionner correctement, sinon il y aura un écart entre lorsque le son de démarrage s'arrête et quand la musique de fond commence.

Le fichier startup.wav doit être **16 bits 16 kHz**. Vous pouvez utiliser [Audacity](https://www.audacityteam.org/download/) par exemple pour convertir vers ce format. Une fois que le fichier est chargé sur Audacity, changez la **fréquence de projet (Hz)** à **16000**, puis appuyez sur **Maj+M**, et changez le **Format** en **16 bits PCM**.

Si votre fichier est en stéréo, vous devriez également aller sur **Pistes > Mixer > Mixer Stéréo en Mono**.

Vous devez définir `PlayStartupJingle=1` dans votre `theme.ini` pour que le jingle de démarrage joue.


## Son de fond du menu

Le son de fond du menu doit être un fichier PCM brut **16 bits 16 kHz Mono** de 16 kHz. Vous pouvez utiliser [Audacity](https://www.audacityteam.org/download/) par exemple pour convertir vers ce format. Une fois que le fichier est chargé sur Audacity, changez la **fréquence de projet (Hz)** à **16000**, puis appuyez sur **Maj+M**, et changez le **Format** en **16 bits PCM**.

Si votre fichier est en stéréo, vous devriez également aller sur **Pistes > Mixer > Mixer Stéréo en Mono**.

Pour exporter dans le format correct :
1. Sélectionnez `Fichier` > `Exporter` > `Exporter l'audio...`
1. Définir `Type de fichier` à `Autres fichiers non compressés`
1. Définir `En-tête` à `RAW (sans en-tête)`
1. Définir `Encodage` à `PCM 16 bits signés`
1. Définissez le nom de sortie à `bgm.pcm.raw` et cliquez sur `Enregistrer`
1. Cliquez sur `OK` pour éditer les métadonnées

Maintenant vous avez un fichier `bgm.pcm.raw` qui peut être copié dans le sous-dossier *sound* de votre thème.

Contrairement à sfx.bin, *bgm.pcm.raw* peut être arbitrairement grand.
