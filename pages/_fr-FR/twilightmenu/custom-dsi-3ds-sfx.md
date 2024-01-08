---
lang: fr-FR
layout: wiki
section: twilightmenu
category: customization
title: Skins DSi/3DS - Effets sonores personnalisés
description: Comment utiliser une musique de fond et des effets sonores personnalisés dans les skins DSi et 3DS pour TWiLight Menu++
---

TWiLight Menu++ prend en charge les fichiers sonores personnalisés dans les thèmes. Placez vos fichiers sonores sous le sous-répertoire `sound` de votre dossier de thème, par exemple pour le thème `white` , vous placerez les fichiers à `themes/white/sound/sfx.bin` et `themes/white/sound/bgm.pcm.raw` respectivement. Les deux fichiers sont facultatifs, si `bmg.pdm.raw` est manquant, la musique par défaut sera utilisée. La même chose se produirait avec les effets sonores si `sfx.bin` est également manquant.

Ces instructions supposent que vous avez installé devkitPro avec mmutil. Vous pouvez obtenir devkitPro sur le [site Web de devkitPro](https://devkitpro.org/wiki/Getting_Started).

## Banque d'effets sonores
La banque d'effets sonores (`sfx.bin`) contient des effets sonores tels que le son de sélection de l'icône, etc.

| Fichier     | Description                                                                                |
| ----------- | ------------------------------------------------------------------------------------------ |
| startup.wav | Joué au démarrage. Voir la section [Son de démarrage](#startup-sound) pour plus de détails |
| back.wav    | Retour                                                                                     |
| launch.wav  | Joué lors du lancement d'un jeu                                                            |
| select.wav  | Joué lors du déplacement du curseur dans les paramètres par jeu et le menu de sélection    |
| wrong.wav   | Joué en atteignant la fin de la page                                                       |
| switch.wav  | Joué lors du changement de page                                                            |
| stop.wav    | Joué sur le thème DSi lorsque le curseur de sélection arrête de se déplacer                |

Tous les fichiers énumérés ci-dessus sont nécessaires pour construire une banque d'effets sonores personnalisés. Si vous voulez qu'un son soit muet, vous pouvez utiliser un fichier audio silencieux. Le format `.wav` est obligatoire et l'encodage *doit* être PCM.

[Ce fichier](/assets/files/sfx-example.zip) comprend les sons utilisés dans les thèmes DSi et 3DS par défaut, ainsi que le fichier makefile utilisé pour les transformer en un fichier sfx.bin valide. N'hésitez pas à modifier et à changer les fichiers sonores pour créer une banque d'effets sonores personnalisée.

Pour créer votre banque d'effets sonores personnalisés, ouvrez votre terminal (ou la ligne de commande si vous utilisez Windows), changez le répertoire actuel (`cd`) pour le dossier où se trouve `Makefile`, puis exécutez la commande `make`. Vous obtiendrez un fichier `sfx.bin` résultant qui peut être copié dans le sous-dossier `sound` de votre dossier de thème. **Ce fichier doit être inférieur à 512 000 octets = 512 ko**. Tout fichier d'une taille supérieure à cette limite entraînera des plantages ou la non-lecture complète de certains sons.

### Son de démarrage
Alors que les autres effets sonores fonctionnent avec n'importe quel fichier WAV avec un encodage PCM, le son de démarrage doit être dans un format spécifique pour fonctionner correctement, sinon il y aura un décalage entre l'arrêt du son de démarrage et le début de la musique de fond.

Le fichier startup.wav doit être **16 bits 16 kHz**. Vous pouvez par exemple utiliser [Audacity](https://github.com/audacity/audacity/releases/latest) pour convertir vers ce format. Une fois le fichier chargé dans Audacity, changer le **Taux du projet (Hz)** en **16000**, puis appuyez sur **Maj + M**, et modifiez le **Format** en **16 bits PCM**.

Si votre fichier est en stéréo, vous devez aussi aller dans **Pistes > Mix > Mix stéréo vers mono**.

Vous devez définir `PlayStartupJingle=1` dans votre `theme.ini` pour que le jingle de démarrage soit joué.


## Son de fond du menu
La musique de fond du menu doit être un fichier `.wav` **16 bits 16 kHz mono**. Vous trouverez ci-dessous la méthode pour convertir des fichiers audio dans ce format.

Contrairement à `sfx.bin`, `bgm.wav` peut être arbitrairement grand.

Veuillez noter que si votre fichier audio se présente déjà sous la forme d'un fichier `.wav` , vous devez quand même suivre la méthode ci-dessous, car TWLMenu++ a des exigences spécifiques.

### Audacity
Pour commencer, téléchargez [la dernière version d'Audacity](https://github.com/audacity/audacity/releases/latest).

Pour convertir l'audio :
1. Chargez le fichier dans Audacity
1. Si votre fichier est en stéréo, cliquez sur le morceau puis sélectionnez `Pistes` > `Mix` > `Mix stéréo vers mono`
1. Allez sur `Audio Setup` > `Audio Settings…`, et assurez-vous que `Project Sample Rate` n'est pas supérieur à `48000 Hz` (qui est la limite)

Pour exporter dans le bon format :
1. Sélectionnez `Fichier` > `Exporter` > `Exporter l'audio…`
1. Définissez `Type` à `WAV (Microsoft)`
1. Définissez `Encodage` à `Signed 16-bit PCM`
1. Définissez le nom de sortie à `bgm.wav` et cliquez sur `Enregistrer`
1. Sur l'édition des métadonnées, cliquez sur `Effacer` et cliquez ensuite sur `Valider`

Vous avez maintenant un fichier `bgm.wav` qui peut être copié dans le sous-dossier `sound` de votre dossier de thème.

 Vous devez ensuite définir l'option `Musique thèmes DSi/3DS` dans les paramètres de TWiLight Menu++ sur « Thème » pour que votre musique de fond personnalisée soit jouée dans le menu.
