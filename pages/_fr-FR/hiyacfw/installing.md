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

### Prérequis
- Une Nintendo DSi avec [Unlaunch installé](https://dsi.cfw.guide/installing-unlaunch)
- Une sauvegarde NAND prise sur votre appareil [en utilisant dumpTool](https://dsi.cfw.guide/dumping-nand)
- Un appareil Windows, macOS ou Linux

### Partie 1 : Préparation de votre PC pour l'installation de hiyaCFW
{% capture tab-windows %}
1. Download the latest Windows version of [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases)
1. Run the TWLMagician MSI package and extract it to anywhere on your PC
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos %}
1. Download the latest macOS version of [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases)
1. Extract the TWLMagician archive anywhere on your PC
{% endcapture %}
{% assign tab-macos = tab-macos | split: "////////" %}

{% capture tab-other %}
1. Installez Python 3 à l'aide de votre gestionnaire de paquets s'il n'est pas déjà installé
1. Download the latest Python version of [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases)
1. Extract the TWLMagician archive anywhere on your PC
1. Installez tkinter avec la commande suivante pour votre distribution si vous ne l'avez pas déjà :
    - Debian-based: `sudo apt-get install python3-tk`
    - Arch Linux: `sudo pacman -S tk`
    - Fedora: `sudo dnf install python3-tkinter`
    - CentOS: `sudo yum install python3-tkinter`
1. Install requirements with the following command:
    - `pip3 install -r requirements.txt`
{% endcapture %}
{% assign tab-other = tab-other | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}

### Partie 2 : Ajouter les fichiers de hiyaCFW à votre carte SD
![Screenshot of TWLMagician](https://i.ibb.co/xXr3nd3/336ffe68-abd9-4880-b2ca-5421cbf5958a.png)

1. Launch TWLMagician
    - **Windows:** Launch the `TWLMagician.exe` file extracted from the TWLMagician archive (you may need to temporarily disable your antivirus)
    - **macOS:** Right click the `TWLMagician` file extracted from the TWLMagician archive and choose `Open`
    - **Linux:** Launch the `TWLMagician.py` extracted from the TWLMagician archive
1. Cliquez sur le bouton `…` dans la case « NAND file with No$GBA footer »
1. Naviguez jusqu'à votre sauvegarde NAND et cliquez sur `Ouvrir`
1. Appuyez sur `Start`
1. Dans la nouvelle fenêtre secondaire, naviguez jusqu'à la racine de votre carte SD et appuyez sur `OK`.
    - Le processus peut prendre plusieurs minutes
1. When the application says `Done!`, close out of TWLMagician
1. Close the terminal window (optional)

### Partie 3 : Configuration d'Unlaunch et hiyaCFW
1. Allumez votre console Nintendo DSi en maintenant <kbd class="face">A</kbd> et <kbd class="face">B</kbd>
    - Cela devrait vous amener au menu fichier d'Unlaunch
1. Naviguez jusqu'à `OPTIONS`, puis `NO BUTTON`
1. Sélectionnez `hiyaCFW` et appuyez sur <kbd class="face">A</kbd>
    - Cela permettra au système de lancer hiyaCFW automatiquement
1. Sauvegardez vos paramètres et redémarrez votre console
1. Maintenez la touche <kbd>SELECT</kbd> pendant que vous allumez votre console Nintendo DSi pour accéder aux paramètres de hiyaCFW
1. Modifiez les paramètres à votre convenance, puis appuyez sur <kbd>START</kbd> pour continuer

Si cela affiche `Une erreur est survenue`, veuillez consulter la page de la [FAQ](faq?faq=why-do-i-get-an-error-has-occurred-message-when-booting-hiyacfw).
{: .alert .alert-warning}
