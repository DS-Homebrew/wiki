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

#### Melyik GBARunner2 buildet használjam?
Töbnyire a TWiLight Menu++-ba ágyazott build megfelelő. A GBARunner különböző buildjeivel kapcsolatos további információkért lásd a [Builds wiki oldalt](https://wiki.ds-homebrew.com/gbarunner2/builds).

#### Hogyan használhatom a Wi-Fi Link szolgáltatásokat?
Szükséged van egy build-re a [wifi_link](https://github.com/Gericom/GBARunner2/tree/wifi_link) ágból, ahhoz, hogy használhasd ezt a szolgáltatást. Részletes információt találsz a buildek telepítéséről a [WikiTemp oldalon](https://wiki.gbatemp.net/wiki/GBARunner2/Link).

#### Miért nem támogatott az RTC (Real Time Clock) egy ROM hackben?
Az RTC játékonként támogatott. A ROM cím ID-ját meg kell változtatnod egy olyan játék kódjára, ami támogatja az RTC-t, hogy a GBARunner2 felismerje azt.

A cím ID- a következő módon módosíthatod:
1. <label for="file-input" class="form-label">Válaszd ki a GBA ROM fájlt:</label> <input id="file-input" class="form-control mb-2" type="file" onchange="loadRom(this.files[0])" />
1. <label for="file-input" class="form-label">Add meg a kívánt cím ID-t:</label> <input id="tid-input" class="form-control mb-2" type="text" maxlength="4" onchange="updateTid(this.value)" disabled />
1. <label for="file-input" class="form-label">Mentsd a módosított fájlt:</label> <input id="save" class="btn btn-secondary" type="button" value="Mentés" onclick="save()" disabled />

<script src="/assets/js/change-gba-tid.js"></script>

#### Miért nem működik egy ROM, bár a kompatibilitási lista szerint működik?
A GBARunner2 kompatibilitási lista elemeit elsősorban a hivatalos GBA BIOS-szal tesztelték, ami javítja a kompatibilitást. A hivatalos GBA BIOS beszerzésével kapcsolatos információkért lásd a [GBA BIOS Info](https://wiki.ds-homebrew.com/gbarunner2/bios) oldalt.

#### Hogyan javítom a duplikált rétegeket az alsó képernyőjén a 3DS-nek?
Ez egy hiba a TWLBg-ben, ami a GBARunner2-ben sűrűn előfordul. Az egyetlen átmeneti javítási megoldás a GBARunner2 újraindítása.
- Adott esetben jobb, ha más lehetőségeket használsz a GBA ROM-ok futtatására a 3DS-en, például VC injects, open_agb_firm vagy mGBA n3DS modelleken
