---
lang: fr-FR
layout: faq
section: gbarunner2
title: FAQ & Dépannage
long_title: FAQ GBARunner2 & Dépannage
description: FAQ et dépannage pour GBARunner2
---

#### Comment je crée et ajoute des bordures personnalisées ?
Vous pouvez lire et suivre [ce guide](https://docs.google.com/document/d/1owjiW-1fHEbokrkK2ZuPFjR2-N9s1dXCCAM3ghWRtxk/edit?usp=sharing) par FrescoASF.

#### Les codes de triche sont-ils pris en charge ?
Pas encore. Au lieu de cela, vous pouvez injecter des codes de triche de manière permanente dans votre ROM GBA avec [GBAATM](https://gbatemp.net/threads/gba-auto-trainer-maker-gbaatm.99334/).

#### Comment utiliser les versions nightly GBARunner2 avec TWiLight Menu++ ?
1. Télécharger la version nightly
1. Renommez-le en `GBARunner2_arm7dldi_3ds.nds` (ou `GBARunner2_arm7dldi_dsi.nds` si vous êtes sur DSi)
1. Placez-le dans `sd:/_nds`

#### Which build of GBARunner2 should I use?
Usually, the builds that are included with TWiLight Menu++ is enough. For more information on the various builds of GBARunner, see the [Builds wiki page](https://wiki.ds-homebrew.com/gbarunner2/builds).

#### Comment utiliser les fonctionnalités de connexion Wi-Fi ?
You will need a build from the [wifi_link](https://github.com/Gericom/GBARunner2/tree/wifi_link) branch to use the features. You can find detailed instructions on how to setup the builds on its [GBAtemp Wiki page](https://wiki.gbatemp.net/wiki/GBARunner2/Link).

#### Pourquoi la HTR (Horloge à Temps Réel) n'est pas supportée dans une ROM hack ?
RTC is supported on a per-game basis. You will have to change the ROM's title ID to that of a game that supports RTC so that GBARunner2 will recognize it.

You can change the title ID using the following:
1. <label for="file-input" class="form-label">Select GBA ROM file:</label> <input id="file-input" class="form-control mb-2" type="file" onchange="loadRom(this.files[0])" />
1. <label for="file-input" class="form-label">Enter desired title ID:</label> <input id="tid-input" class="form-control mb-2" type="text" maxlength="4" onchange="updateTid(this.value)" disabled />
1. <label for="file-input" class="form-label">Save updated file:</label> <input id="save" class="btn btn-secondary" type="button" value="Save" onclick="save()" disabled />

<script src="/assets/js/change-gba-tid.js"></script>
