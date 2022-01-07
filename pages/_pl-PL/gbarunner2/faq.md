---
lang: pl-PL
layout: faq
section: gbarunner2
title: FAQ & Troubleshooting
long_title: GBARunner2 FAQ & Troubleshooting
description: FAQs oraz troubleshooting dla GBARunner2
---

#### Jak mogę utworzyć i dodać niestandardowe granice?
Możesz przeczytać [ten przewodnik](https://docs.google.com/document/d/1owjiW-1fHEbokrkK2ZuPFjR2-N9s1dXCCAM3ghWRtxk/edit?usp=sharing) autorstwa FrescoASF.

#### Czy wspierane są cheaty?
Jeszcze nie teraz. Zamiast tego możesz na stałe dołączyć cheaty do swojego ROMu GBA za pomocą [GBAATM](https://gbatemp.net/threads/gba-auto-trainer-maker-gbaatm.99334/).

#### Jak korzystać z wersji nightly GBARunner2 w TWiLight Menu++?
1. Pobierz wersję Nightly
1. Zmień nazwę na `GBARunner2_arm7dldi_3ds.nds` (lub `GBARunner2_arm7dldi_dsi.nds`, jeśli jesteś na DSi)
1. Umieść go w `sd:_nds`

#### Which build of GBARunner2 should I use?
Usually, the builds that are included with TWiLight Menu++ is enough. For more information on the various builds of GBARunner, see the [Builds wiki page](https://wiki.ds-homebrew.com/gbarunner2/builds).

#### How do I use Wi-Fi link features?
You will need a build from the [wifi_link](https://github.com/Gericom/GBARunner2/tree/wifi_link) branch to use the features. You can find detailed instructions on how to setup the builds on its [GBAtemp Wiki page](https://wiki.gbatemp.net/wiki/GBARunner2/Link).

#### Why isn't RTC (Real Time Clock) supported in a ROM hack?
RTC is supported on a per-game basis. You will have to change the ROM's title ID to that of a game that supports RTC so that GBARunner2 will recognize it.

You can change the title ID using the following:
1. <label for="file-input" class="form-label">Select GBA ROM file:</label> <input id="file-input" class="form-control mb-2" type="file" onchange="loadRom(this.files[0])" />
1. <label for="file-input" class="form-label">Enter desired title ID:</label> <input id="tid-input" class="form-control mb-2" type="text" maxlength="4" onchange="updateTid(this.value)" disabled />
1. <label for="file-input" class="form-label">Save updated file:</label> <input id="save" class="btn btn-secondary" type="button" value="Save" onclick="save()" disabled />

<script src="/assets/js/change-gba-tid.js"></script>
