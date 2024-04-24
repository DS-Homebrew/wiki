---
lang: fr-FR
layout: wiki
section: twilightmenu
category: updating
title: Mise à jour (3DS)
long_title: Mise à jour de TWiLight Menu++ (3DS)
description: Comment mettre à jour TWiLight Menu++ sur la Nintendo 3DS
tabs:
  - 
    universal-updater: Universal-Updater
    manual: Manuellement
---

Si vous effectuez une mise à jour à partir d'une version antérieure à la v6.8.3, veuillez déplacer vos fichiers `.sav` pour les jeux DS vers un nouveau dossier appelé `saves`, le dossier `saves` se trouvant au même endroit que les ROMs DS.
{:.alert .alert-info}

Si vous effectuez une mise à jour à partir d'une version antérieure à la v21.0.0, veuillez déplacer vos fichiers `.pub` et/ou `.prv` pour les titres DSiWare vers un nouveau dossier appelé `saves`, le dossier `saves` se trouvant au même endroit que les ROMs DSiWare.
{:.alert .alert-info}

Si vous effectuez une mise à jour à partir d'une version antérieure à la v25.7.0, il est recommandé de supprimer le titre `TWiLight Menu++ Game Booter` de la liste des titres, à l'aide de FBI.
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Ouvrez Universal-Updater
   - Si vous ne l'avez pas, suivez les instructions d'[installation](installing-3ds)
1. Trouvez TWiLight Menu++ dans la grille des applications, vous pouvez effectuer une recherche avec le troisième onglet de la barre latérale si vous avez des difficultés à le trouver
1. Appuyez sur <kbd class="face">A</kbd> ou touchez l'icône de téléchargement dans la barre latérale et sélectionnez `TWiLight Menu++` pour l'installer
   - Cela peux prendre un certain temps
{% endcapture %}
{% assign tab-universal-updater = tab-universal-updater | split: "////////" %}

{% capture tab-manual %}

If you use a Windows edition which contains Windows Defender, it'll detect the `.7z` file as a Trojan due to a false positive. To fix the false positive, ensure Windows Defender is up to date.
{:.alert .alert-warning}

1. Téléchargez le dernier [`TwiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
1. Extrayez `TWiLightMenu-3DS.7z`
1. Copiez le dossier `_nds` à la racine de votre carte SD, en remplaçant tous les fichiers existants
   - Si vous utilisez macOS, assurez-vous de **Copier** et `Fusionner`, ne pas `Remplacer`
1. Copiez le fichier `BOOT.NDS` à la racine de votre carte SD, en remplaçant tous les fichiers existants
1. Copiez le fichier `.cia` à la racine de votre carte SD, en remplaçant tout fichier existant
1. Sur votre 3DS, installez le CIA avec FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Mise à jour

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}
