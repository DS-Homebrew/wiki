---
lang: fr-FR
layout: wiki
section: nds-bootstrap
title: Glossaire
description: Glossaire pour nds-bootstrap
---

## Paramètres
Vous pouvez les trouver dans les paramètres par jeu de TWiLight Menu++. Certaines de ces options peuvent également être modifiées dans le menu en jeu de nds-bootstrap

### Ver. SDK
La version du Software Development Kit (SDK) qui a été utilisée pour compiler la ROM.

### Numéro de sauvegarde
Le fichier de sauvegarde d'un jeu aura l'extension `.savX` où X est le numéro de sauvegarde donné si le numéro de sauvegarde n'est pas 0. Cela permet d'avoir jusqu'à 10 fichiers de sauvegarde pour la même ROM.

### Lancer en
Le mode dans lequel la ROM doit être exécutée. Cela affecte les options de vitesse du CPU ARM9 et du mode VRAM. Le réglage sur le mode DSi pour les ROMs qui ne le supportent pas n'aura probablement aucun effet.

### Vitesse CPU ARM9
Modifie la vitesse à laquelle le CPU ARM9 fonctionne. Les ROMs exécutées en mode DS utiliseront 67 MHz (NTR) par défaut. Elle peut être changée en 133 MHz (TWL) pour réduire les ralentissements, mais peut aussi causer des problèmes. Les ROMs exécutées en mode DSi ne peuvent être réglées qu'à 133 MHz (TWL).

### Mode VRAM
Change le mode de la mémoire vive vidéo (de l'anglais Video Random Access Memory, abrégé VRAM) du système. Les ROMs exécutées en mode DS utiliseront le mode VRAM DS par défaut. Il est possible de le changer en mode VRAM DSi, mais cela ne fait rien et peut causer des problèmes visuels. Les ROMs exécutées en mode DSi ne peuvent être réglées qu'en mode VRAM DSi.

### Lecture DMA carte
Permet d'utiliser l'accès direct à la mémoire (de l'anglais Direct Memory Access, abrégé DMA) pour la lecture des cartes. L'activation de ce paramètre peut accélérer les ROMs mais peut causer des problèmes. Des informations plus techniques peuvent être trouvées sur l'[index DS](https://wiki.ds-homebrew.com/fr-FR/ds-index/retail-roms#lecture-dma-de-la-carte).

### Étnd. ROM dans RAM
Si un jeu est suffisamment petit, il peut être chargé dans la RAM du système pour accélérer les temps de chargement. L'activation de cette option augmente la limite de taille des ROMs, mais peut en casser certaines.

### Démarrage direct
Apparaît seulement pour les ROMs homebrew. En mettant cette option sur « Oui », nds-bootstrap ne sera pas utilisé lors du lancement de la ROM. Ceci est utile pour les ROMs homebrew qui n'ont pas besoin ou ne fonctionnent pas avec nds-bootstrap.

### Bootstrap
Changez si vous voulez exécuter la ROM avec la version Stable ou Nightly de nds-bootstrap. Des informations sur les builds Nightly peuvent être trouvées sur la [FAQ de nds-bootstrap](https://wiki.ds-homebrew.com/fr-FR/nds-bootstrap/faq?faq=quest-ce-quun-nightly-et-ou-puis-je-lobtenir)

### Ratio de l'écran
Sur la 3DS, le rapport d'aspect de l'écran peut être modifié de 4/3 (par défaut sur la DS/DSi) à 16/10. Ne fonctionne que si le [plein écran est activé](https://wiki.ds-homebrew.com/fr-FR/twilightmenu/playing-in-widescreen).
