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

#### Hogyan használhatom az esti fordítás GBARunner2 buildeket a TWiLight Menu++-ban?
1. Töltsd le az esti fordítást
1. Nevezd át `GBARunner2_arm7dldi_3ds.nds` névre (vagy `GBARunner2_arm7dldi_dsi.nds` névre, ha DSi-n vagy)
1. Rakd az `sd:_nds` könyvtárba

#### Melyik GBARunner2 buildet használjam?
Töbnyire a TWiLight Menu++-ba ágyazott build megfelelő. A GBARunner különböző buildjeivel kapcsolatos további információkért lásd a [Builds wiki oldalt](https://wiki.ds-homebrew.com/gbarunner2/builds).

#### Hogyan használhatom a Wi-Fi Link szolgáltatásokat?
Szükséged van egy build-re a [wifi_link](https://github.com/Gericom/GBARunner2/tree/wifi_link) ágból, ahhoz, hogy használhasd ezt a szolgáltatást. Részletes információt találsz a buildek telepítéséről a [GBAtemp Wiki oldalon](https://wiki.gbatemp.net/wiki/GBARunner2/Link).

#### Miért nem támogatott az RTC (Real Time Clock) egy ROM hackben?
Az RTC játékonként támogatott. A ROM játékkódját meg kell változtatnod az eredeti játék kódjára, hogy a GBARunner2 felismerje azt.

You can change the title ID using the following:
1. <label for="file-input" class="form-label">Select GBA ROM file:</label> <input id="file-input" class="form-control mb-2" type="file" onchange="loadRom(this.files[0])" />
1. <label for="file-input" class="form-label">Enter desired title ID:</label> <input id="tid-input" class="form-control mb-2" type="text" maxlength="4" onchange="updateTid(this.value)" disabled />
1. <label for="file-input" class="form-label">Save updated file:</label> <input id="save" class="btn btn-secondary" type="button" value="Save" onclick="save()" disabled />

<script src="/assets/js/change-gba-tid.js"></script>
