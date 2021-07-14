---
lang: fr-FR
layout: wiki
section: twilightmenu
category: other
title: Download Play/PictoChat in the DS Classic Menu
description: How to get DS Download Play and PictoChat in TWiLight Menu++'s DS Classic Menu
---

Si vous utilisez une console DSi, vous devriez déjà pouvoir lancer ces applications. Getting dumps of them for your flashcard or 3DS requires accessing the DS Classic Menu. Otherwise, if you have a 3DS with no existing dump(s), proceed below.

Dans GodMode9:
- Press the HOME/Power button
- Select `Title Manager`, then select `[1:] NAND / TWL`
- Find and select `DS Download Play (NTR-HDNA)`
- Select `Open title folder`
- Select `00000000.tmd`, then select `TMD file options...`
- Select `Dump CXI/NDS file`
- Done. The file will be in `0:/gm9/out/`

Copy `DS Download Play (NTR-HDNA).nds` to `0:/_nds/`, and rename it to `dlplay.nds`.

Les étapes ci-dessus augmenteront la vitesse de démarrage de DLP.

To run PictoChat on 3DS (DSi required):
- Copy `pictochat.nds` from `sd:/_nds/` on the DSi's SD card to the same location on the 3DS's SD card

To run both on flashcard:
- Copy both `pictochat.nds` and `dlplay.nds` from `sd:/_nds/` on the DSi or 3DS SD card to the same location on the flashcard's SD card