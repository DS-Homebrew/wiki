---
lang: fr-FR
layout: faq
section: gbarunner2
title: FAQ et dépannage
long_title: FAQ et dépannage de GBARunner2
description: FAQ et dépannage pour GBARunner2
---

#### Comment je crée et ajoute des bordures personnalisées ?
Vous pouvez lire et suivre [ce guide](https://docs.google.com/document/d/1owjiW-1fHEbokrkK2ZuPFjR2-N9s1dXCCAM3ghWRtxk/edit?usp=sharing) de FrescoASF.

#### Les codes de triche sont-ils pris en charge ?
Pas pour le moment. Au lieu de cela, vous pouvez injecter de façon permanente des codes de triche dans votre ROM GBA avec [GBAATM](https://gbatemp.net/threads/gba-auto-trainer-maker-gbaatm.99334/).

#### Comment utiliser les versions nightly de GBARunner2 dans TWiLight Menu++ ?
1. Téléchargez la version nightly
1. Renommez-la en `GBARunner2_arm7dldi_3ds.nds` (ou `GBARunner2_arm7dldi_dsi.nds` si vous êtes sur DSi)
1. Placez-la dans `sd:/_nds`

#### Quel build de GBARunner2 dois-je utiliser ?
Généralement, les builds qui sont inclus avec TWiLight Menu++ sont suffisants. Pour plus d'informations sur les différents builds de GBARunner2, consultez la [page wiki Builds](https://wiki.ds-homebrew.com/gbarunner2/builds).

#### Comment j'utilise les fonctionnalités de connexion Wi-Fi ?
Vous aurez besoin d'un build à partir de la branche [wifi_link](https://github.com/Gericom/GBARunner2/tree/wifi_link) pour utiliser les fonctionnalités. Vous pouvez trouver des instructions détaillées sur la façon de configurer les builds sur sa [page GBAtemp Wiki](https://wiki.gbatemp.net/wiki/GBARunner2/Link).

#### Pourquoi la HTR (Horloge Temps Réel) n'est pas supportée dans une ROM hack ?
La HTR est prise en charge sur une base par jeu. Vous devrez changer l'ID du titre de la ROM en celui d'un jeu qui supporte la HTR pour que GBARunner2 la reconnaisse.

Vous pouvez modifier l'ID du titre en procédant comme suit :
1. <label for="file-input" class="form-label">Sélectionnez le fichier ROM GBA :</label> <input id="file-input" class="form-control mb-2" type="file" onchange="loadRom(this.files[0])" />
1. <label for="file-input" class="form-label">Entrez l'ID du titre désiré :</label> <input id="tid-input" class="form-control mb-2" type="text" maxlength="4" onchange="updateTid(this.value)" disabled />
1. <label for="file-input" class="form-label">Enregistrez le fichier mis à jour :</label> <input id="save" class="btn btn-secondary" type="button" value="Enregistrer" onclick="save()" disabled />

<script src="/assets/js/change-gba-tid.js"></script>
