---
lang: fr-FR
layout: wiki
section: twilightmenu
category: customization
title: Écrans de démarage personnalisés
description: Comment utiliser des écrans de démarrage personnalisés pour TWiLight Menu++
---

Vous pouvez utiliser des fichiers GIF personnalisés pour avoir des écrans de démarrage personnalisés lors du démarrage de TWiLight Menu++. Ils doivent être nommés `splashtop.gif` et `splashbottom. if` et être dans `sd:/_nds/TWiLightMenu/extras`, puis réglez `Ecran de démarage DSi` à `Customisé` dans les paramètres TWiLight Menu++.

La plupart des fichiers GIF jusqu'à 256x192 devraient fonctionner, avec quelques exceptions :
- Les fichiers GIF de plus de 1 Mio (mode DSi) ou 256 Kio (mode DS) peuvent ne pas jouer à pleine vitesse car ils seront décompressés sur le coup
- Le total des deux GIFs doit être inférieur à environ 10 Mo (mode DSi) ou environ 2 Mo (mode DS)
- Si les deux GIFs sont configurés pour boucler définitivement alors ils s'afficheront pendant 3 secondes, donc définissez un nombre de boucles sur au moins un pour contrôler le temps
- Le drapeau d'entrée d'utilisateur est pris en charge, donc définissez-le et un long délai sur une image si vous voulez afficher un splash et attendre comme par défaut
   - Seul le GIF en attente de saisie sera mis en pause, donc l'autre peut continuer à s'animer
- Si vous utilisez des tables de couleurs locales, l'ensemble le la image doit être écrasé car il remplacera la palette entière de l'écran, et pas seulement la image actuel
- Les images de texte et entrelacés ne fonctionneront pas
