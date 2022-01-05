---
lang: he-IL
layout: faq
section: gbarunner2
title: שאלות ותשובות & פתרון בעיות
long_title: שאלות ותשובות & פתרון בעיות עבור GBARunner2
description: שאלות ותשובות ופתרון בעיות עבור GBARunner2
---

#### איך אני יוצר ומוסיף מסגרות מותאמות אישית?
תוכלו לקרוא ולעקוב אחר [המדריך הזה](https://docs.google.com/document/d/1owjiW-1fHEbokrkK2ZuPFjR2-N9s1dXCCAM3ghWRtxk/edit?usp=sharing) שנכתב על ידי FrescoASF.

#### האם צ'יטים נתמכים?
כרגע לא. במקום זאת, ניתן להזריק באופן קבוע ציטים לתוך הROM של המשחק GBA שלכם באמצעות [GBAATM](https://gbatemp.net/threads/gba-auto-trainer-maker-gbaatm.99334/).

#### איך אני משתמש בגרסה הnightly של GBARunner2 בTWiLight Menu++?
1. הורידו את הגרסה הnightly
1. שנו את שמה ל`GBARunner2_arm7dldi_3ds.nds` (או ל`GBARunner2_arm7dldi_dsi.nds` אם אתם משתמשים בDSi)
1. שימו אותה ב`sd:_nds`

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
