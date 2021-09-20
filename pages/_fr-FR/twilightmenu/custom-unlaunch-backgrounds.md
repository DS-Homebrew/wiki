---
lang: fr-FR
layout: wiki
section: twilightmenu
category: customization
title: Fond d'Unlaunch personnalisé
description: Comment créer des arrière-plans d'Unlaunch personnalisés et les installer en utilisant TWiLight Menu++
---

Vous pouvez trouver des fonds pour Unlaunch prémâchés sur le [site TWiLight Menu++ skins](https://skins.ds-homebrew.com/unlaunch/).
{:.alert .alert-info}

En utilisant TWiLight Menu++, vous pouvez modifier le programme d'installation d'Unlaunch pour avoir un fond et une palette de couleurs de texte personnalisés. Cela doit être un GIF de 256 x 192, avec quelques restrictions :
- Seule la première image sera montrée, pas d'arrière-plan animé
- Le fichier doit être inférieur ou égal à 15 472 octets
- Les GIF avec plus de 31 couleurs nécessitent des palettes spécialement conçues pour éviter de casser le texte

### Installation
1. Copiez le fichier GIF dans `sd:/_nds/TWiLightMenu/unlaunch/backgrounds`
1. Téléchargez le [dernier installateur d'Unlaunch](https://problemkaputt.de/unlaunch.zip) et extrayez `UNLAUNCH.DSI` sur votre carte SD
1. Ouvrez les paramètres de TWiLight Menu++, basculez sur la page `Paramètres d'Unlaunch` et cliquez sur `Fond d'écran`, puis sélectionnez celui que vous voulez
1. Quitter les paramètres et lancer `Unlaunch DSi Installer`
   - Il devrait utiliser votre image personnalisée, si elle ne s'affiche pas, éteignez votre console et assurez-vous que votre GIF est conforme aux exigences ci-dessus
1. Choisissez `Install Now`

### Utiliser des GIFs avec plus de 31 couleurs
Comme la palette du GIF est chargée dans la même zone de VRAM que les palettes de texte, elle les écrasera si la palette devient trop grande, mais il est possible de contourner ce problème en incluant les palettes de texte dans les palettes du GIF. L'utilisation de ce système avec des couleurs différentes vous permettrait également obtenir des couleurs de texte différentes, si vous le souhaitez. Ces instructions seront pour [GIMP](https://gimp.org), mais tout éditeur d'image capable de réorganiser la palette d'une image fonctionnera.
1. Ouvrez votre image dans GIMP et assurez-vous qu'elle est de 256 x 192 pixels
1. Dans la barre de menu en haut, sélectionnez `Image` -> `Mode` -> `Indexé...`
1. Sélectionnez `Générer une palette optimale` et définissez les couleurs maximales à n'importe quoi jusqu'à 226 couleurs
1. Sélectionnez un motif d'optimisation dans le menu déroulant `Couleurs`
   - Les images sans optimisations se compriment généralement le mieux, mais avec elle sera généralement meilleure, essayez de voir ce qui correspond le mieux à la taille
1. Cliquez `Convertir`
1. Dans la barre de menu en haut, sélectionnez `Fichier` -> `Exporter sous...`, donnez-lui un nom avec l'extension `.gif`, et cliquez sur `Exporter`
   - Si cela donne des avertissements, cliquez sur le bouton "Accepter"
1. Dans le prochain popup, désactivez le `commentaire GIF` et cliquez sur `Exporter`
1. Vérifiez la taille du fichier exporté, s'il est de 15 472 octets ou moins, puis passez à l'étape 13
1. Si votre GIF est trop grand, alors en utilisant soit [gifsicle](http://www.lcdf.org/gifsicle/) ou [ezgif.com](https://ezgif.com/optimize) vous pouvez essayer de l'optimiser
   - Ces instructions utiliseront ezgif comme plus simple, étant un site web
1. Ouvrez https://ezgif.com/optimize, et téléchargez votre GIF
1. Essayez différents niveaux de compression jusqu'à ce que vous trouviez le meilleur de moins de 15,472 octets (15. 1 KiB), idéalement un peu en dessous car GIMP peut augmenter la taille un peu
1. Enregistrez le GIF optimisé et ouvrez-le dans GIMP
1. Dans la barre de menu en haut, sélectionnez `Windows` -> `Dialogues Dockables` -> `Carte de couleur`
1. Changez votre `couleur de premier plan` actuelle en #080808 et ajoutez 14 nouvelles couleurs avec le bouton `+`
    - Si votre image n'a pas au moins 133 couleurs, vous devrez continuer à ajouter des couleurs jusqu'à ce que la dernière soit l'indice 146
1. Faites un clic droit sur une couleur dans la carte des couleurs et sélectionnez `Rearrange Colormap...`
1. Arrangez vos nouvelles couleurs de façon à ce qu'elles correspondent à celles qui sont soulignées en rouge : (Les 2ème et 3ème colonnes à partir de la 4ème ligne)<br> ![Palette avec des couleurs de texte correctes](/assets/images/custom-unlaunch-bg/unlaunch-palette.png)
1. Utilisez le sélecteur de couleurs pour que vos nouvelles couleurs correspondent à celles de l'image ci-dessus
1. Dans la barre de menu en haut, sélectionnez `Fichier` -> `Exporter sous...`, donnez-lui un nom avec l'extension `.gif`, et cliquez sur `Exporter`
1. Dans le prochain popup, désactivez le `commentaire GIF` et cliquez sur `Exporter`
1. Assurez-vous que l'image est toujours inférieure à 15,472 octets, si elle est devenue trop grande puis répétez à partir de l'étape 10 en utilisant un niveau de compression plus élevé
1. Vous avez terminé ! Suivez la section [Installation](#installing) ci-dessus pour utiliser votre image !
