---
lang: fr-FR
layout: wiki
section: hiyacfw
title: Installation
long_title: Installation de hiyaCFW
description: Comment installer hiyaCFW sur la Nintendo DSi
tabs:
  - 
    windows: Windows
    macos: macOS
    other: Linux
---

Ne pas mettre à jour le système après avoir installé hiyaCFW. Ce faisant, vous supprimerez les patchs SD de hiyaCFW.
{: .alert .alert-danger}

### Pré-requis
- Une Nintendo DSi avec [Unlaunch installé](https://dsi.cfw.guide/installing-unlaunch)
- Une sauvegarde NAND prise sur votre appareil [en utilisant dumpTool](https://dsi.cfw.guide/dumping-nand)
- Un appareil Windows, macOS ou Linux

### Partie 1 : Préparation de votre PC pour l'installation de hiyaCFW
{% capture tab-windows %}
hiyaCFW Helper est connu pour provoquer des faux positifs avec Windows Defender et d'autres programmes antivirus, veuillez désactiver temporairement ces programmes si vous avez des difficultés à le télécharger ou à l'exécuter.
{: .alert .alert-info}

1. Téléchargez et installez la dernière version de [7-Zip](https://www.7-zip.org/download.html)
   - Cela ne fonctionnera pas avec un autre extracteur d'archives, tel que WinRAR, car hiyaCFW Helper repose sur 7-Zip lui-même et non sur un extracteur d'archives général
1. Téléchargez la dernière version Windows de [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Extrayez l'archive de hiyaCFW Helper n'importe où sur votre PC
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos %}
1. Téléchargez la dernière version macOS de [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Extrayez l'archive de hiyaCFW Helper n'importe où sur votre PC
{% endcapture %}
{% assign tab-macos = tab-macos | split: "////////" %}

{% capture tab-other %}
1. Installez Python 3 à l'aide de votre gestionnaire de paquets s'il n'est pas déjà installé
1. Téléchargez la dernière version Python de [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Extrayez l'archive de hiyaCFW Helper n'importe où sur votre PC
1. Installez tkinter avec la commande suivante pour votre distribution si vous ne l'avez pas déjà :
   - Basé sur Debian : `sudo apt-get install python3-tk`
{% endcapture %}
{% assign tab-other = tab-other | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}

### Partie 2 : Ajouter les fichiers de hiyaCFW à votre carte SD
![Capture d'écran de hiyaCFW Helper](https://image.ibb.co/hhzKRL/Screen-Shot-2018-10-18-at-16-30-18.png)

1. Lancez hiyaCFW Helper
  - **Windows :** Lancez le fichier `HiyaCFW_Helper.exe` extrait de l'archive de hiyaCFW Helper (vous devrez peut-être désactiver temporairement votre antivirus)
  - **macOS :** Clic droit sur le fichier `HiyaCFW_Helper` extrait de l'archive hiyaCFW Helper et choisissez `Ouvrir`
  - **Linux :** Lancez le `HiyaCFW_Helper.py` extrait de l'archive de hiyaCFW Helper
1. Cliquez sur le bouton `…` dans la case « NAND file with No$GBA footer »
1. Naviguez jusqu'à votre sauvegarde NAND et cliquez sur `Ouvrir`
1. Appuyez sur `Start`
1. Dans la nouvelle fenêtre secondaire, naviguez jusqu'à la racine de votre carte SD et appuyez sur `OK`.
   - Le processus peut prendre plusieurs minutes
1. Lorsque l'application dit `Done!`, fermez hiyaCFW Helper
1. Fermez la fenêtre du terminal

### Partie 3 : Configuration d'Unlaunch et hiyaCFW
1. Allumez votre console Nintendo DSi en maintenant <kbd class="face">A</kbd> et <kbd class="face">B</kbd>
   - Cela devrait vous amener au menu fichier d'Unlaunch
1. Naviguez jusqu'à `OPTIONS`, puis `NO BUTTON`
1. Sélectionnez `hiyaCFW` et appuyez sur <kbd class="face">A</kbd>
   - Cela permettra au système de lancer hiyaCFW automatiquement
1. Sauvegardez vos paramètres et redémarrez votre console
1. Maintenez la touche <kbd>SELECT</kbd> pendant que vous allumez votre console Nintendo DSi pour accéder aux paramètres de hiyaCFW
1. Modifiez les paramètres à votre convenance, puis appuyez sur <kbd>START</kbd> pour continuer

If it shows `An error has occurred`, please see the [faq](faq?faq=why-do-i-get-an-error-has-occurred-message-when-booting-hiyacfw) page.
{: .alert .alert-warning}
