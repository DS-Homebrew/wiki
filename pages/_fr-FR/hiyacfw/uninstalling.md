---
lang: fr-FR
layout: wiki
section: hiyacfw
title: Désinstallation
long_title: Désinstallation de hiyaCFW
description: Comment désinstaller hiyaCFW de la Nintendo DSi
---

hiyaCFW est seulement présent sur la carte SD et n'a aucune présence sur votre NAND. Avant de procéder, assurez-vous de sauvegarder toutes les données de sauvegarde de votre SDNAND que vous souhaitez conserver. Vous pouvez apprendre comment le faire en suivant la section III du guide [DSiWare Backups](https://dsi.cfw.guide/dsiware-backups.html#section-iii---extracting-the-save-file-optional) de [dsi.cfw.guide](https://dsi.cfw.guide).

### Désinstallation
1. Supprimez `hiya.dsi` de la racine de la carte SD
1. Supprimez le dossier `hiya`
1. Supprimez les dossiers `import`, `photo`, `progress`, `shared1`, `shared2`, `sys`, `title`, `ticket` et `tmp`

### Modification des paramètres d'Unlaunch

Si vous aviez configuré Unlaunch pour qu'il démarre automatiquement hiyaCFW, vous voudrez peut-être modifier ces paramètres maintenant que vous ne l'utilisez plus.

1. Insérez votre carte SD dans votre Nintendo DSi et démarrez la console en maintenant <kbd class="face">A</kbd> et <kbd class="face">B</kbd>
    - Cela ouvrira le menu fichier d'Unlaunch
1. Allez à `OPTIONS` et définissez `NO BUTTON` à l'application que vous souhaitez
    - Si vous souhaitez lancer automatiquement la NAND système, définissez-la sur l'application nommée `Launcher`
    - Si vous souhaitez lancer automatiquement TWiLight Menu++, choisissez le fichier nommé `BOOT.NDS`
1. Choisissez `SAVE & EXIT`
