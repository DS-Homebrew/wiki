---
lang: fr-FR
layout: faq
section: gbarunner2
title: FAQ et dépannage
long_title: FAQ et dépannage de GBARunner2
description: FAQ et dépannage pour GBARunner2
---

#### Comment puis-je créer et ajouter des bordures personnalisées ?
Vous pouvez lire et suivre [ce guide](https://docs.google.com/document/d/1owjiW-1fHEbokrkK2ZuPFjR2-N9s1dXCCAM3ghWRtxk/edit?usp=sharing) de FrescoASF.

#### Les codes de triche sont-ils pris en charge ?
Pas pour le moment. Au lieu de cela, vous pouvez injecter de façon permanente des codes de triche dans votre ROM GBA avec [GBAATM](https://gbatemp.net/threads/gba-auto-trainer-maker-gbaatm.99334/).

#### Quel build de GBARunner2 dois-je utiliser ?
Généralement, les builds qui sont inclus avec TWiLight Menu++ sont suffisants. Pour plus d'informations sur les différents builds de GBARunner2, consultez la [page wiki Builds](https://wiki.ds-homebrew.com/gbarunner2/builds).

#### Comment puis-je utiliser les fonctionnalités de connexion Wi-Fi ?
Vous aurez besoin d'un build à partir de la branche [wifi_link](https://github.com/Gericom/GBARunner2/tree/wifi_link) pour utiliser les fonctionnalités. Vous pouvez trouver des instructions détaillées sur la façon de configurer les builds sur sa [page WikiTemp](https://wiki.gbatemp.net/wiki/GBARunner2/Link).

#### Pourquoi la HTR (Horloge à Temps Réel) n'est pas supportée dans une ROM hack ?
La HTR est prise en charge sur une base par jeu. Vous devrez changer l'ID du titre de la ROM en celui d'un jeu qui supporte la HTR pour que GBARunner2 la reconnaisse. Vous trouverez une liste des ID des titres pris en charge dans le [code de GBARunner2](https://github.com/Gericom/GBARunner2/blob/master/arm9/source/emu/romGpio.vram.cpp#L14-L61).

Vous pouvez modifier l'ID du titre en procédant comme suit :
1. <label for="file-input" class="form-label">Sélectionnez le fichier de ROM GBA :</label> <input id="file-input" class="form-control mb-2" type="file" onchange="loadRom(this.files[0])" />
1. <label for="file-input" class="form-label">Entrez l'ID du titre désiré :</label> <input id="tid-input" class="form-control mb-2" type="text" maxlength="4" onchange="updateTid(this.value)" disabled />
1. <label for="file-input" class="form-label">Enregistrez le fichier mis à jour :</label> <input id="save" class="btn btn-secondary" type="button" value="Enregistrer" onclick="save()" disabled />

<script src="/assets/js/change-gba-tid.js"></script>

#### Pourquoi une ROM ne fonctionne-t-elle pas, même si la liste de compatibilité indique qu'elle fonctionne ?
Les listes de compatibilité de GBARunner2 sont principalement testées avec le BIOS GBA officiel, ce qui améliore la compatibilité. Consultez [Infos du BIOS GBA](https://wiki.ds-homebrew.com/gbarunner2/bios) pour des informations sur l'obtention du BIOS GBA officiel.

#### Comment corriger les calques dupliqués en bas de l'écran sur la 3DS ?
Il s'agit d'un bogue dans TWLBg qui est plutôt répandu dans GBARunner2. La seule façon de résoudre temporairement ce problème est de redémarrer GBARunner2.
- Le cas échéant, il est préférable d'utiliser d'autres options pour exécuter des ROMs GBA sur 3DS, comme les injections dans la console virtuelle, open_agb_firm, ou mGBA sur les modèles n3DS
