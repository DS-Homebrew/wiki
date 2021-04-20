---
lang: fr-FR
layout: wiki
section: other
title: hiyaCFW
description: Informations sur hiyaCFW
---

Informations pour [hiyaCFW](https://github.com/RocketRobz/hiyaCFW), le premier CFW au monde pour DSi.

### Écrans de démarrage personnalisés
Avec hiyaCFW, vous pouvez utiliser des écrans de démarage personnalisés dans les formats `.bmp` ou `.gif`. Ils doivent aller dans le dossier `sd:/hiya` et doivent être nommés `splashtop` pour l'écran supérieur et `splashbottom` pour le bas, avec l'extension de fichier appropriée, puis assurez-vous que l'écran de démarrage est activé dans la configuration. Les images n'ont pas besoin d'être au même format, donc l'une peut être BMP et l'autre GIF, les GIFs ont la priorité sur les BMP. Voici quelques détails sur les exigences pour que vos images puissent fonctionner:

#### BMP
- 16 bits (RGBA 1555, RGB 1555, ou RGB 565)
- 256 x 192 ou moins

#### GIF
- Réponse simple : La plupart des GIFs 256 x 192 ou plus petit fonctionneront
- Ils peuvent être animés, mais doivent rester en dessous de 1 Mio pour une performance idéale et doivent être inférieurs à 10 Mio réunis
- Si les deux boucles infiniment alors elles seront affichées pendant 3 secondes, sinon elles seront affichées jusqu'à ce que les deux soient terminées
- Si une image a le drapeau d'entrée de l'utilisateur défini, il attendra jusqu'à ce que le délai soit épuisé ou que n'importe quel bouton soit enfoncé, selon lequel se produit en premier
- Les images en texte brut et entrelacés sont ***pas pris en charger***
- Les tables de couleurs locales sont prises en charge, mais remplaceront toute la palette, y compris les images résiduelles des images précédentes, donc les images qui les utilisent auront probablement des problèmes de palette
