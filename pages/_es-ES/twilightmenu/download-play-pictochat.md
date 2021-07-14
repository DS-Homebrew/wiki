---
lang: es-ES
layout: wiki
section: twilightmenu
category: other
title: Download Play/PictoChat in the DS Classic Menu
description: How to get DS Download Play and PictoChat in TWiLight Menu++'s DS Classic Menu
---

Si estás usando una consola DSi, ya deberías poder usar esas aplicaciones. Getting dumps of them for your flashcard or 3DS requires accessing the DS Classic Menu. Otherwise, if you have a 3DS with no existing dump(s), proceed below.

Dentro de GodMode9:
- Press the HOME/Power button
- Selecciona `Title Manager` y luego `[1:] NAND / TWL`
- Busca y selecciona `DS Download Play (NTR-HDNA)`
- Selecciona `Open title folder`
- Selecciona `00000000.tmd` y luego `TMD file options...`
- Selecciona `Dump CXI/NDS file`
- Hecho. The file will be in `0:/gm9/out/`

Copia `DS Download Play (NTR-HDNA).nds` a `0:/_nds/` y renómbralo como `dlplay.nds`.

Los pasos anteriores aumentarán la velocidad de arranque de DLP.

To run PictoChat on 3DS (DSi required):
- Copy `pictochat.nds` from `sd:/_nds/` on the DSi's SD card to the same location on the 3DS's SD card

To run both on flashcard:
- Copy both `pictochat.nds` and `dlplay.nds` from `sd:/_nds/` on the DSi or 3DS SD card to the same location on the flashcard's SD card