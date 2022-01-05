---
lang: fr-FR
layout: wiki
section: twilightmenu
category: customization
title: Écrans de démarage personnalisés
description: Comment utiliser des écrans de démarrage personnalisés pour TWiLight Menu++
---

Vous pouvez utiliser des fichiers GIF personnalisés pour avoir des écrans de démarrage personnalisés lors du démarrage de TWiLight Menu++. Ils doivent être nommés `splashtop.gif` et `splashbottom.gif` et être dans `sd:/_nds/TWiLightMenu/extras`, puis définissez `Écran de démarrage DSi` à `Personnalisé` dans les paramètres de TWiLight Menu++.

La plupart des fichiers GIF jusqu'à 256 × 192 pixels devraient fonctionner, à quelques exceptions près :
- Les fichiers GIF de plus de 1 Mio (mode DSi) ou 256 Kio (mode DS) peuvent ne pas être lus à pleine vitesse car ils seront décompressés à la volée
- Le total des deux GIFs doit être inférieur à environ 10 Mo (mode DSi) ou environ 2 Mo (mode DS)
- Si les deux GIFs sont configurés pour tourner en boucle de façon permanente, ils s'afficheront pendant trois secondes, il faut donc définir un compte de boucle sur au moins l'un d'entre eux pour contrôler la durée
- Le drapeau d'entrée de l'utilisateur est supporté, alors mettez-le ainsi qu'un long délai sur une image si vous voulez montrer un démarrage et attendre comme les valeurs par défaut
   - Seul le GIF en attente de saisie sera mis en pause, afin que l'autre puisse continuer à s'animer
- Si vous utilisez des tables de couleurs locales, l'image entière doit être écrasée car elle remplacera la palette de l'écran entier, et pas seulement l'image actuelle
- Les images entrelacées et textuelles ne fonctionnent pas
