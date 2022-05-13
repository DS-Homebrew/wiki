---
lang: fr-FR
layout: wiki
section: twilightmenu
category: customization
title: Fonds personnalisés pour Unlaunch
description: Comment créer des fonds d'écran personnalisés pour Unlaunch et les installer à l'aide de TWiLight Menu++
---

Vous pouvez trouver des fonds pour Unlaunch déjà faits sur le [site de thèmes TWiLight Menu++](https://skins.ds-homebrew.com/unlaunch/).
{:.alert .alert-info}

En utilisant TWiLight Menu++, vous pouvez patcher le programme d'installation d'Unlaunch pour avoir un fond d'écran et une palette de couleurs de texte personnalisés. Il doit s'agir d'un GIF 256 × 192, avec quelques restrictions :
- Seule la première image sera montrée, pas d'arrière-plan animé
- Le fichier doit être inférieur ou égal à 15 472 octets
- Les GIFs comportant plus de 31 couleurs nécessitent des palettes spécialement conçues pour éviter de casser le texte

### Installation
1. Copiez le fichier GIF vers `sd:/_nds/TWiLightMenu/unlaunch/backgrounds`
1. Téléchargez le [dernier installateur d'Unlaunch](https://problemkaputt.de/unlaunch.zip) et extrayez `UNLAUNCH.DSI` sur votre carte SD
1. Ouvrez les paramètres de TWiLight Menu++, passez à la page `Paramètres d'Unlaunch` et cliquez sur `Fond d'écran`, puis sélectionnez celui que vous voulez
1. Quittez les paramètres et lancez `Unlaunch DSi Installer`
   - Il devrait utiliser votre image personnalisée, si ce n'est pas le cas, éteignez votre console et vérifiez que votre GIF est conforme aux exigences ci-dessus
1. Choisissez `Install Now`

### Utilisation de GIFs avec plus de 31 couleurs
Comme la palette du GIF est chargée dans la même zone de VRAM que les palettes de texte, elle les écrasera si la palette devient trop grande, mais il est possible de contourner ce problème en incluant les palettes de texte dans les palettes du GIF. En utilisant ce système avec des couleurs différentes, vous pourrez également obtenir des couleurs de texte différentes si vous le souhaitez. Ces instructions seront pour [GIMP](https://gimp.org), mais tout éditeur d'image capable de réorganiser la palette d'une image fonctionnera.
1. Ouvrez votre image dans GIMP et assurez-vous qu'elle mesure 256 × 192 pixels
1. Dans la barre de menu en haut, sélectionnez `Image` -> `Mode` -> `Indexé…`
1. Sélectionnez `Générer une palette optimale` et définissez les couleurs maximales à n'importe quelle valeur, jusqu'à 226 couleurs
1. Sélectionnez un motif de tramage dans la liste déroulante `Tramage couleur`
   - Les images sans tramage sont généralement plus faciles à compresser, mais celles qui en sont dotées sont généralement plus belles. Essayez de voir ce qui convient le mieux à la taille
1. Cliquez sur `Convertir`
1. Dans la barre de menu en haut, sélectionnez `Fichier` -> `Exporter sous…`, donnez-lui un nom avec l'extension `.gif` et cliquez sur `Exporter`
   - Si cela donne des avertissements, cliquez sur le bouton « Accepter »
1. Dans la fenêtre suivante, désactivez le `Commentaire GIF` et cliquez sur `Exporter`
1. Vérifiez la taille du fichier exporté, si elle est de 15 472 octets ou moins, passez à l'étape 13
1. Si votre GIF est trop grand, vous pouvez essayer de l'optimiser en utilisant [gifsicle](http://www.lcdf.org/gifsicle/) ou [ezgif.com](https://ezgif.com/optimize)
   - Ces instructions utiliseront ezgif comme son plus simple, étant un site Web
1. Ouvrez https://ezgif.com/optimize, et téléchargez votre GIF
1. Essayez différents niveaux de compression jusqu'à ce que vous trouviez le meilleur en dessous de 15 472 octets (15,11 kio), idéalement un peu en dessous car GIMP peut augmenter un peu la taille
1. Enregistrez le GIF optimisé et ouvrez-le dans GIMP
1. Dans la barre de menu en haut, sélectionnez `Windows` -> `Dialogues ancrables` -> `Carte des couleurs`
1. Changez votre `Couleur de premier plan` actuelle en #080808 et ajoutez 14 nouvelles couleurs avec le bouton `+`
    - Si votre image n'a pas au moins 133 couleurs, vous devrez continuer à ajouter des couleurs jusqu'à ce que la dernière soit l'indice 146
1. Faites un clic droit sur une couleur dans la carte des couleurs et sélectionnez `Réarranger la carte des couleurs…`
1. Arrangez vos nouvelles couleurs de façon à ce qu'elles correspondent à celles qui sont soulignées en rouge : (Les 2<sup>ème</sup> et 3<sup>ème</sup> colonnes à partir de la 4<sup>ème</sup> ligne)<br> ![Palette avec des couleurs de texte correctes](/assets/images/custom-unlaunch-bg/unlaunch-palette.png)
1. Utilisez le sélecteur de couleurs pour que vos nouvelles couleurs correspondent à celles de l'image ci-dessus
1. Dans la barre de menu en haut, sélectionnez `Fichier` -> `Exporter sous…`, donnez-lui un nom avec l'extension `.gif` et cliquez sur `Exporter`
1. Dans la fenêtre suivante, assurez-vous que le `Commentaire GIF` est désactivé et cliquez sur `Exporter`
1. Vérifiez que l'image est toujours inférieure à 15 472 octets. Si elle est trop grande, recommencez à partir de l'étape 10 en utilisant un niveau de compression plus élevé
1. Vous avez terminé ! Suivez la section [Installation](#installing) ci-dessus pour utiliser votre image !
