---
lang: hu-HU
layout: faq
section: gbarunner2
title: GYIK & hibaelhárítás
long_title: GBARunner2 GYIK & hibaelhárítás
description: GYIK és hibaelhárítás a GBARunner2-höz
---

#### Hogyan hozok létre és adok hozzá egyedi kereteket?
Olvasd el [ezt az útmutatót](https://docs.google.com/document/d/1owjiW-1fHEbokrkK2ZuPFjR2-N9s1dXCCAM3ghWRtxk/edit?usp=sharing), amit FrescoASF készített.

#### A csalások támogatottak?
Most még nem. E helyett Instead, permanensen beinjektálhatod a csalás kódokat a GBA ROM-odba a [GBAATM](https://gbatemp.net/threads/gba-auto-trainer-maker-gbaatm.99334/)-mel.

#### Which build of GBARunner2 should I use?
Töbnyire a TWiLight Menu++-ba ágyazott build megfelelő. A GBARunner különböző buildjeivel kapcsolatos további információkért lásd a [Builds wiki oldalt](https://wiki.ds-homebrew.com/gbarunner2/builds).

#### How do I use Wi-Fi link features?
Szükséged van egy build-re a [wifi_link](https://github.com/Gericom/GBARunner2/tree/wifi_link) ágból, ahhoz, hogy használhasd ezt a szolgáltatást. You can find detailed instructions on how to setup the builds on its [WikiTemp page](https://wiki.gbatemp.net/wiki/GBARunner2/Link).

#### Why isn't RTC (Real Time Clock) supported in a ROM hack?
Az RTC játékonként támogatott. A ROM cím ID-ját meg kell változtatnod egy olyan játék kódjára, ami támogatja az RTC-t, hogy a GBARunner2 felismerje azt.

A cím ID- a következő módon módosíthatod:
1. <label for="file-input" class="form-label">Select GBA ROM file:</label> <input id="file-input" class="form-control mb-2" type="file" onchange="loadRom(this.files[0])" />
1. <label for="file-input" class="form-label">Enter desired title ID:</label> <input id="tid-input" class="form-control mb-2" type="text" maxlength="4" onchange="updateTid(this.value)" disabled />
1. <label for="file-input" class="form-label">Save updated file:</label> <input id="save" class="btn btn-secondary" type="button" value="Save" onclick="save()" disabled />

<script src="/assets/js/change-gba-tid.js"></script>

#### Why is a ROM not working, even though the compatibility list says it works?
The GBARunner2 compatibility lists are primarily tested with the offical GBA BIOS, which improves compatibility. See [GBA BIOS Info](https://wiki.ds-homebrew.com/gbarunner2/bios) for information on obtaining the offical GBA BIOS.

#### How do I fix duplicated layers at the bottom of the screen on 3DS?
This is a bug in TWLBg that is rather prevalent in GBARunner2. The only way to temporarily fix this is to restart GBARunner2.
- If applicable, you may be better off using other options for running GBA ROMs on 3DS, such as VC injects, open_agb_firm, or mGBA on n3DS models
