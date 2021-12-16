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

### Which build of GBARunner2 should I use?
Usually, the builds that are included with TWiLight Menu++ is enough. For more information on the various builds of GBARunner, see the [Builds wiki page](https://wiki.ds-homebrew.com/gbarunner2/builds).

#### Hogyan használhatom a Wi-Fi Link szolgáltatásokat?
You will need a build from the [wifi_link](https://github.com/Gericom/GBARunner2/tree/wifi_link) branch to use the features. You can find detailed instructions on how to setup the builds on its [GBAtemp Wiki page](https://wiki.gbatemp.net/wiki/GBARunner2/Link).

#### Miért nem támogatott az RTC (Real Time Clock) egy ROM hackben?
RTC is supported on a per-game basis. You will have to change the ROM's game code to that of the original game so that GBARunner2 will recognize it.
