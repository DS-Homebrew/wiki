---
lang: hu-HU
layout: wiki
section: ds-index
category: útmutatók
title: Az ntrboot eltávolítása
description: How to remove ntrboot and restore a flashcart
tabs:
  - dsi: DSi
    3ds: 3DS
---

Once a flashcart has been flashed with **ntrboot** it is typically no longer usable as a DS flashcart (with the exception of certain flashcarts such as the Acekard 2i). It is possible to restore a flashrom file back to an ntrboot compatible flashcart to return it to it's previous functionality. If you followed the ntrboot guide, you should have a copy of the flashrom backup.

### Szükséges hardver

Az ntrboot eltávolításához a flashcart-odról a következőre lesz szükséged:

- Egy ntrboot-tal flashelt flashcard
- Egy hackelt DSi/3DS ntrboot flasher futtatására, azért, hogy visszaállítsa a flashrom mentést a flashcard-ra
- Egy flashrom mentés a flashcart-odról. Ha követted az ntrboot flashelési útmutatót, akkor ez egy `.bin` fájl az `ntrboot` mappában a flashcart microSD kártyádról vagy a DSi/3DS SD kártyáról
- Ha **nem** rendelkezel ezzel a biztonsági mentéssel, akkor a [3ds.hacks.guide ntrboot guide](https://3ds.hacks.guide/installing-boot9strap-\(ntrboot\).html#section-v-removing-ntrboot) oldalról letöltheted a megfelelő flashrom biztonsági mentést a flashcart-odhoz. Ezek mágneses linkek formájában érhetőek el, és olyan torrent kliens szükséges a letöltésükhöz, mint a [qBittorrent](https://www.qbittorrent.org/download.php) vagy a [Deluge](http://dev.deluge-torrent.org/wiki/Download)

{% capture tab-dsi %}

Már követned kellett a [dsi.cfw.guide](https://dsi.cfw.guide) útmutatót és rendelkezned kell a homebrew futtatásának valamilyen módjával.
{:.alert .alert-warning}

1. Place your flashcart's flashrom backup in the `ntrboot` folder on your DSi SD card. Create this folder if it does not exist
2. Töltsd le az [ntrboot flasher](/assets/files/ntrboot_flasher_nds.nds) fájlt az SD-kártyádra
3. Helyezd be az SD kártyád egy moddolt DSi-be, majd futtasd az ntrboot flasher-t
4. Kövesd a képernyőn megjelenő utasításokat. Select your cartridge from the list, then choose the `Restore Flash` option. After the restore has finished, your flashcart should now work as a DS flashcart again

{% endcapture tab-dsi %}
{% assign tab-dsi = tab-dsi | split: "////////" %}

{% capture tab-3ds %}

Már követned kellett a [3ds.hacks.guide](https://3ds.hacks.guide) útmutatót és rendelkezned kell a luma telepítéssel.
{:.alert .alert-warning}

1. Place your flashcart's flashrom backup in the `ntrboot` folder on your 3DS SD card. Create this folder if it does not exist.
2. Töltsd le az [ntrboot flasher](/assets/files/ntrboot_flasher.firm) fájlt az SD-kártyádra, mint `sdmc:/luma/payloads/ntrboot_flasher.firm`
3. Helyezd be az SD-kártyád egy moddolt 3DS-be. Kapcsold be a 3DS-ed, miközben nyomva tartod a `START` gombot a luma chainloader megnyitásához, majd válaszd ki az ntrboot flasher-t
4. Kövesd a képernyőn megjelenő utasításokat. Select your cartridge from the list, then choose the `Restore Flash` option. After the restore has finished, your flashcart should now work as a DS flashcart again

{% endcapture tab-3ds %}
{% assign tab-3ds = tab-3ds | split: "////////" %}

### Az ntrboot eltávolítása

{% assign tabs = tab-dsi | concat: tab-3ds %}
{% include tabs.html index=0 tabs=tabs %}

### Hibaelhárítás

In some cases, the restore may fail. This may be due to either an incorrect flashrom backup file, or your flashcard may be incompatible with the restore. ntrboot uses a hardcoded name for restoring flashrom backups. If you renamed the `.bin` file and do not have the original name, you can create a flash dump which will create a `.bin` file of the correct name of which you can then use to rename your flashrom backup.

If you are unsure and require assistance you can ask in the [DS(i) Mode Hacking](https://ds-homebrew.com/discord) Discord server.
