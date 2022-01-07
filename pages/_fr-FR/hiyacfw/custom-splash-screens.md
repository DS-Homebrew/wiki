---
lang: fr-FR
layout: wiki
section: hiyacfw
title: Écrans de démarrage personnalisés
category: other
description: Comment utiliser des écrans de démarrage personnalisés avec hiyaCFW
---

Avec hiyaCFW, vous pouvez utiliser des écrans personnalisés dans les formats `.bmp` ou `.gif`. Ils doivent aller dans le dossier `sd:/hiya` et doivent être nommés `splashtop` pour l'écran supérieur et `splashbottom` pour l'écran inférieur, avec l'extension de fichier appropriée, puis assurez-vous que l'écran de démarrage est activé dans la configuration. Les images ne doivent pas nécessairement avoir le même format, ainsi l'une peut être BMP et l'autre GIF, les GIFs ayant la priorité sur les BMPs. Vous trouverez ci-dessous quelques détails sur les conditions requises pour que vos images fonctionnent :

### BMP
- 16 bits (RGBA 1555, RGB 1555, ou RGB 565)
- 256 × 192 ou plus petit

### GIF
- La réponse est simple : la plupart des GIFs 256 × 192 ou plus petits fonctionneront
- Ils peuvent être animés, mais doivent rester inférieurs à 1 Mio pour des performances idéales et doivent être inférieurs à environ 10 Mio entre les deux maximums absolus
- Si les deux boucles sont infinies, elles seront affichées pendant 3 secondes, sinon elles seront affichées jusqu'à ce que les deux soient terminées
- Si une image a le drapeau d'entrée de l'utilisateur activé, il attendra jusqu'à ce que le délai se termine ou qu'un bouton soit pressé, selon ce qui se produit en premier
- Les images entrelacées et en texte brut ne sont ***pas*** supportées
- Les tables de couleurs locales sont prises en charge, mais elles remplacent toute la palette, y compris les images résiduelles des images précédentes, de sorte que les images qui les utilisent auront probablement des problèmes de palette
