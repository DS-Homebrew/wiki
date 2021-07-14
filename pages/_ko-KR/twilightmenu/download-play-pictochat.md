---
lang: ko-KR
layout: wiki
section: twilightmenu
category: other
title: Download Play/PictoChat in the DS Classic Menu
description: How to get DS Download Play and PictoChat in TWiLight Menu++'s DS Classic Menu
---

DSi 본체를 이용중이라면, 별도의 과정 없이 이 응용프로그램들을 이용할 수 있습니다. Getting dumps of them for your flashcard or 3DS requires accessing the DS Classic Menu. Otherwise, if you have a 3DS with no existing dump(s), proceed below.

GodMode9 에서:
- Press the HOME/Power button
- Select `Title Manager`, then select `[1:] NAND / TWL`
- Find and select `DS Download Play (NTR-HDNA)`
- Select `Open title folder`
- Select `00000000.tmd`, then select `TMD file options...`
- Select `Dump CXI/NDS file`
- Done. The file will be in `0:/gm9/out/`

Copy `DS Download Play (NTR-HDNA).nds` to `0:/_nds/`, and rename it to `dlplay.nds`.

위 절차는 다운로드 플레이 부팅 속도를 높여줍니다.

To run PictoChat on 3DS (DSi required):
- Copy `pictochat.nds` from `sd:/_nds/` on the DSi's SD card to the same location on the 3DS's SD card

To run both on flashcard:
- Copy both `pictochat.nds` and `dlplay.nds` from `sd:/_nds/` on the DSi or 3DS SD card to the same location on the flashcard's SD card