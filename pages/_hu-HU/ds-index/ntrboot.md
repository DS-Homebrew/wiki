---
lang: hu-HU
layout: wiki
section: ds-index
category: útmutatók
title: ntrboot
description: Hogyan használj ntrboot-ot Nintendo DSi-n
tabs:
  - dsi: DS/DSi
    3ds: 3DS
---

Az **ntrboot** helreállítási mód, ami beépítésre került minden DSi és 3DS konzolba. Ha egy speciálisan aláírt cartridge van behelyezve, és egy gombkombinációt lenyomva tartunk, a cartridge előbb töltődik be, mint bármi a NAND-ról. A Nintendo ezt az üres egységek gyári beállítására használta, de helyreállítási módként is használható, ha a NAND sérült, hiányzik vagy más módon sérült.

### Szükséges hardver

Az ntrboot használatához a DSi-den a következőre lesz szükséged:

- Egy ntrboot kompatibilis flashcard. [Itt van egy lista a működő cart-okról](https://www.flashcarts.net/ntrboot-ds-carts.html?tab=flashable). Hagyd figyelmen kívül az elő-flashelteket, mert azok a 3Ds verzióját használják az ntrboot-nak.
- Egy mágnes az ntrboot triggereléséhez
- Egy második DSi/3DS a flash kártyára történő ntrboot flasheléshez

{% capture tab-dsi %}

Már követned kellett a [dsi.cfw.guide](https://dsi.cfw.guide) útmutatót és rendelkezned kell a homebrew futtatásának valamilyen módjával.
{:.alert .alert-warning}

1. Töltsd le az [ntrboot image](/assets/files/default.gcd) fájlt a DSi SD kártyádra `sdmc:/ntrboot/default.gcd` néven
2. Töltsd le az [ntrboot flasher](/assets/files/ntrboot_flasher_nds.nds) fájlt az SD-kártyádra
3. Helyezd be az SD kártyád egy moddolt DSi-be, majd futtasd az ntrboot flasher-t
4. Kövesd a képernyőn megjelenő utasításokat. Válassza ki a cartridge-ed a listából, készíts biztonsági másolatot a flashcardról, majd injektáld az ntrboot-ot. A "TWL" opciót kell kiválasztanod

{% endcapture tab-dsi %}
{% assign tab-dsi = tab-dsi | split: "////////" %}

{% capture tab-3ds %}

Már követned kellett a [3ds.hacks.guide](https://3ds.hacks.guide) útmutatót és rendelkezned kell a luma telepítéssel.
{:.alert .alert-warning}

1. Töltsd le az [ntrboot image](/assets/files/default.gcd) fájlt a 3DS SD kártyádra `sdmc:/ntrboot/default.gcd` néven
2. Töltsd le az [ntrboot flasher](/assets/files/ntrboot_flasher.firm) fájlt az SD-kártyádra, mint `sdmc:/luma/payloads/ntrboot_flasher.firm`
3. Helyezd be az SD-kártyád egy moddolt 3DS-be. Tartsd lenyomva a `START` gombot a luma chainloader megnyitásához, majd válaszd ki az ntrboot flasher-t
4. Kövesd a képernyőn megjelenő utasításokat. Válassza ki a cartridge-ed a listából, készíts biztonsági másolatot a flashcardról, majd injektáld az ntrboot-ot. A "TWL" opciót kell kiválasztanod

{% endcapture tab-3ds %}
{% assign tab-3ds = tab-3ds | split: "////////" %}

### Az ntrboot flashelése

{% assign tabs = tab-dsi | concat: tab-3ds %}
{% include tabs.html index=0 tabs=tabs %}

### Az ntrboot futtatása

1. Tölts le bármilyen homebrew-ot az SD kártyára `sdmc:/ntrboot.nds` néven. Ehhez a példához a [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases/)-t használjuk.
2. Csatlakoztasd az SD kártyát és az ntrboot flashcard-ot a DSi-dhez
3. Helyezz egy mágnest az `ABXY` gombok közelébe, amíg az alvó üzemmódot nem vált ki
4. Kapcsold ki a DSi-d
5. A mágnest a helyén tartva, tartsd lenyomva a "start" + "select" + "x" billentyűkombinációt, és kapcsold be a DSi-t
6. A GodMode9i most már bootolni kell

Ha az ntrboot nem csinál semmit, és biztos vagy benne, hogy a mágnes és a gombkombináció helyes, akkor az ntrboot lehet, hogy nem működik. Próbáld meg újra követni a flashing utasításokat [ezzel az ntrboot képpel](/assets/files/default_green.gcd), és nézd meg, hogy az ntrboot betölt-e egy zöld képernyőt. Ha nem, akkor a flashcard-od lehet, hogy nem kompatibilis, és meg kell kérdezned a [DS(i) Mode Hacking](https://ds-homebrew.com/discord) Discord szerveren.

Ha "NAND Init failure" hibát kapsz, vagy nem látod a NAND-ot az ntrboot-ból, akkor a kívánt homebrew-t egy másik programon keresztül kell elindítanod (pl. SafeNANDManager indítása a GodMode9i segítségével). Van egy probléma az ntrboot-tal, amelyben a CID/ConsoleID nem megfelelően van beállítva a rendszerindításkor, így a NAND rögzítése a szerkesztéshez/helyreállításhoz nem fog azonnal működni.
