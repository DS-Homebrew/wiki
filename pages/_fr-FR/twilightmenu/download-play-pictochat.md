---
lang: fr-FR
layout: wiki
section: twilightmenu
category: other
title: Télécharger Play/PictoChat dans le menu DS Classic
description: Comment obtenir DS Download Play et PictoChat dans TWiLight Menu++ dand le Menu Classique DS
---

Si vous utilisez une console DSi, vous devriez déjà pouvoir lancer ces applications. Pour obtenir les dumps pour votre flashcard ou 3DS, vous devez accéder au Menu Classique DS. Sinon, si vous avez une 3DS sans dump existant, procédez ci-dessous.

Dans GodMode9:
- Appuyez sur le bouton HOME/Power
- Sélectionnez `Title Manager`, puis sélectionnez `[1:] NAND / TWL`
- Trouvez et sélectionnez `DS Download Play (NTR-HDNA)`
- Sélectionnez `Option title folder`
- Sélectionnez `00000000.tmd`, puis sélectionnez `TMD file options...`
- Sélectionnez `Dump CXI/NDS file`
- Terminée. Le fichier sera dans `0:/gm9/out/`

Copiez `DS Download Play (NTR-HDNA).nds` sur `0:/_nds/`, et renommez-le en `dlplay.nds`.

Les étapes ci-dessus augmenteront la vitesse de démarrage de DLP.

Pour exécuter PictoChat sur 3DS (DSi requis) :
- Copiez `pictochat.nds` vers `sd:/_nds/` sur la carte SD de la Dsi vers le même emplacement sur la carte SD de la 3DS

Pour exécuter deux flashcard:
- Copiez à la fois `pictochat.nds` et `dlplay.nds` vers `sd:/_nds/` sur la carte SD DSi ou 3DS vers le même emplacement sur la carte SD de la flashcard