---
lang: hu-HU
layout: wiki
section: ds-index
category: útmutatók
title: Az ntrboot eltávolítása
description: Hogy távolítsd el az ntrboot-ot és állíts vissza egy flashcart-ot
tabs:
  - dsi: DSi
    3ds: 3DS
---

Ha egy flashcartot egyszer már **ntrboot**-ra flasheltek, akkor az általában már nem használható DS flashcartként. Lehetséges van flashrom fájl egy ntrboot kompatibilis flashcartra, hogy visszaállítsa annak korábbi funkcionalitását. Ha követted az ntrboot útmutatót, akkor rendelkezned kell a flashrom biztonsági másolatával.

### Szükséges hardver

Az ntrboot eltávolításához a flashcart-odról a következőre lesz szükséged:

- Egy ntrboot-tal flashelt flashcard
- Egy hackelt DSi/3DS ntrboot flasher futtatására, azért, hogy visszaállítsa a flashrom mentést a flashcard-ra
- Egy flashrom mentés a flashcart-odról. Ha követted az ntrboot flashelési útmutatót, akkor ez egy `.bin` fájl az `ntrboot` mappában a flashcart microSD kártyádról vagy a DSi/3DS SD kártyáról
- Ha **nem** rendelkezel ezzel a biztonsági mentéssel, akkor a [3ds.hacks.guide ntrboot guide](https://3ds.hacks.guide/installing-boot9strap-\(ntrboot\).html#section-v-removing-ntrboot) oldalról letöltheted a megfelelő flashrom biztonsági mentést a flashcart-odhoz. Ezek mágneses linkek formájában érhetőek el, és olyan torrent kliens szükséges a letöltésükhöz, mint a [qBittorrent](https://www.qbittorrent.org/download.php) vagy a [Deluge](http://dev.deluge-torrent.org/wiki/Download)

{% capture tab-dsi %}

Már követned kellett a [dsi.cfw.guide](https://dsi.cfw.guide) útmutatót és rendelkezned kell a homebrew futtatásának valamilyen módjával.
{:.alert .alert-warning}

1. Rakd a flashcart-od flashrom mentését az `ntrboot` mappába a DSi-d SD kártyáján. Hozd létre ezt a mappát, ha nem létezik
2. Töltsd le az [ntrboot flasher](/assets/files/ntrboot_flasher_nds.nds) fájlt az SD-kártyádra
3. Helyezd be az SD kártyád egy moddolt DSi-be, majd futtasd az ntrboot flasher-t
4. Kövesd a képernyőn megjelenő utasításokat. Válaszd ki a cartridge-ed a listából, majd válaszd a `Restore Flash` opciót. Amint a helyreállítás végzett, a flashcart-odnak újra úgy kell működnie mint egy DS flashcart-nak

{% endcapture tab-dsi %}
{% assign tab-dsi = tab-dsi | split: "////////" %}

{% capture tab-3ds %}

Már követned kellett a [3ds.hacks.guide](https://3ds.hacks.guide) útmutatót és rendelkezned kell a luma telepítéssel.
{:.alert .alert-warning}

1. Rakd a flashcart-od flashrom mentését az `ntrboot` mappába a 3DS-ed SD kártyáján. Hozd létre ezt a mappát, ha nem létezik.
2. Töltsd le az [ntrboot flasher](/assets/files/ntrboot_flasher.firm) fájlt az SD-kártyádra, mint `sdmc:/luma/payloads/ntrboot_flasher.firm`
3. Helyezd be az SD-kártyád egy moddolt 3DS-be. Kapcsold be a 3DS-ed, miközben nyomva tartod a `START` gombot a luma chainloader megnyitásához, majd válaszd ki az ntrboot flasher-t
4. Kövesd a képernyőn megjelenő utasításokat. Válaszd ki a cartridge-ed a listából, majd válaszd a `Restore Flash` opciót. Amint a helyreállítás végzett, a flashcart-odnak újra úgy kell működnie mint egy DS flashcart-nak

{% endcapture tab-3ds %}
{% assign tab-3ds = tab-3ds | split: "////////" %}

### Az ntrboot eltávolítása

{% assign tabs = tab-dsi | concat: tab-3ds %}
{% include tabs.html index=0 tabs=tabs %}

### Hibaelhárítás

Bizonyos esetekben a visszaállítás nem fog sikerülni. Ennek oka lehet egy hibás flashrom biztonsági mentési fájl, vagy a flashcard nem kompatibilis a visszaállítással. Az ntrboot a flashrom biztonsági mentések visszaállításához keményen kódolt nevet használ. Ha átnevezted a `.bin` fájlt, és nincs meg az eredeti neve, akkor létrehozhatsz egy flash dumpot, amely létrehoz egy `.bin` fájlt a megfelelő névvel, amelyet aztán felhasználhatsz a flashrom biztonsági mentés átnevezéséhez.

Ha nem vagy biztos és segítségre van szükséged, kérdezz a [DS(i) Mode Hacking](https://ds-homebrew.com/discord) Discord szerveren.
