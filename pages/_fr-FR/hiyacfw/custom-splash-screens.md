---
lang: en-US
layout: wiki
section: hiyacfw
title: Écrans de démarrage personnalisés
category: other
description: Comment utiliser des écrans de démarrage personnalisés avec hiyaCFW
---

Avec hiyaCFW, vous pouvez utiliser des écrans personnalisés dans les formats `.bmp` ou `.gif`. Ils doivent aller dans le dossier `sd:/hiya` et doivent être nommés `splashtop` pour l'écran supérieur et `splashbottom` pour le bas, avec l'extension de fichier appropriée, puis assurez-vous que l'écran de démarrage est activé dans la configuration. The images do not need to be the same format, so one can be BMP and the other GIF, GIFs have priority over BMPs. Below are some details on the requirements for your images to work:

### BMP
- 16-bit (RGBA 1555, RGB 1555, or RGB 565)
- 256 x 192 or smaller

### GIF
- Simple answer: Most GIFs 256 x 192 or smaller will work
- They can be animated, but should stay under 1 MiB for ideal performance and must be under around 10 MiB between the two absolute maximum
- If both loop infinitely then they will be shown for 3 seconds, otherwise they will be shown until both are complete
- If a frame has the user input flag set it will wait until the delay runs out or any button is pressed, whichever comes first
- Interlaced and plain text frames are ***not*** supported
- Local color tables are supported, but will replace the whole palette, including residual image from previous frames, so images using them will likely have palette problems
