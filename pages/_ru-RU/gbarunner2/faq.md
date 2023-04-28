---
lang: ru-RU
layout: faq
section: gbarunner2
title: FAQ & Troubleshooting
long_title: GBARunner2 FAQ & Troubleshooting
description: FAQs and troubleshooting for GBARunner2
---

#### How do I create and add custom borders?
You can read and follow [this guide](https://docs.google.com/document/d/1owjiW-1fHEbokrkK2ZuPFjR2-N9s1dXCCAM3ghWRtxk/edit?usp=sharing) by FrescoASF.

#### Are cheats supported?
Not right now. Instead, you can permanently inject cheat codes into your GBA ROM with [GBAATM](https://gbatemp.net/threads/gba-auto-trainer-maker-gbaatm.99334/).

#### Which build of GBARunner2 should I use?
Usually, the builds that are included with TWiLight Menu++ is enough. For more information on the various builds of GBARunner, see the [Builds wiki page](https://wiki.ds-homebrew.com/gbarunner2/builds).

#### How do I use Wi-Fi link features?
You will need a build from the [wifi_link](https://github.com/Gericom/GBARunner2/tree/wifi_link) branch to use the features. You can find detailed instructions on how to setup the builds on its [WikiTemp page](https://wiki.gbatemp.net/wiki/GBARunner2/Link).

#### Why isn't RTC (Real Time Clock) supported in a ROM hack?
RTC is supported on a per-game basis. You will have to change the ROM's title ID to that of a game that supports RTC so that GBARunner2 will recognize it. You can find a list of supported title IDs in [GBARunner2's code](https://github.com/Gericom/GBARunner2/blob/master/arm9/source/emu/romGpio.vram.cpp#L14-L61).

You can change the title ID using the following:
1. <label for="file-input" class="form-label">Select GBA ROM file:</label> <input id="file-input" class="form-control mb-2" type="file" onchange="loadRom(this.files[0])" />
1. <label for="file-input" class="form-label">Enter desired title ID:</label> <input id="tid-input" class="form-control mb-2" type="text" maxlength="4" onchange="updateTid(this.value)" disabled />
1. <label for="file-input" class="form-label">Save updated file:</label> <input id="save" class="btn btn-secondary" type="button" value="Save" onclick="save()" disabled />

<script src="/assets/js/change-gba-tid.js"></script>

#### Why is a ROM not working, even though the compatibility list says it works?
The GBARunner2 compatibility lists are primarily tested with the offical GBA BIOS, which improves compatibility. See [GBA BIOS Info](https://wiki.ds-homebrew.com/gbarunner2/bios) for information on obtaining the offical GBA BIOS.

#### How do I fix duplicated layers at the bottom of the screen on 3DS?
This is a bug in TWLBg that is rather prevalent in GBARunner2. The only way to temporarily fix this is to restart GBARunner2.
- If applicable, you may be better off using other options for running GBA ROMs on 3DS, such as VC injects, open_agb_firm, or mGBA on n3DS models
