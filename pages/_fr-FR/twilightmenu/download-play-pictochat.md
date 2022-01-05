---
lang: fr-FR
layout: wiki
section: twilightmenu
category: other
title: Téléchargement DS/PictoChat dans le Menu DS Classic
description: Comment obtenir Téléchargement DS et PictoChat dans le menu DS Classic de TWiLight Menu++
---

Si vous utilisez une console DSi, vous devriez déjà être en mesure de lancer ces applications. Pour en obtenir des dumps pour votre linker ou votre 3DS, il faut accéder au menu DS Classic sur une DSi. Sinon, si vous avez un 3DS sans dump(s) existant(s), procédez comme suit.

Dans GodMode9 :
1. Appuyez sur le bouton HOME/Power
1. Sélectionnez `Title Manager`, puis sélectionnez `[1:] NAND / TWL`
1. Recherchez et sélectionnez `DS Download Play (NTR-HDNA)`
1. Sélectionnez `Open title folder`
1. Sélectionnez `00000000.tmd`, puis sélectionnez `TMD file options…`
1. Sélectionnez `Dump CXI/NDS file`
   - Le fichier sera dans `0:/gm9/out/`
1. Copiez `DS Download Play (NTR-HDNA).nds` vers `0:/_nds/` et renommez-le en `dlplay.nds`

Les étapes ci-dessus augmenteront la vitesse de démarrage de Téléchargement DS.

Pour exécuter PictoChat sur 3DS (DSi requise), copiez `pictochat.nds` de `sd:/_nds/` sur la carte SD de la DSi au même endroit sur la carte SD de la 3DS.

Pour exécuter les deux sur linker, copiez à la fois `pictochat.nds` et `dlplay.nds` de `sd:/_nds/` sur la carte SD de la DSi ou 3DS au même endroit sur la carte SD du linker.
