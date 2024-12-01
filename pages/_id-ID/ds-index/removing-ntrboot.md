---
lang: id-ID
layout: wiki
section: ds-index
category: guides
title: Removing ntrboot
description: How to remove ntrboot and restore a flashcart
tabs:
  - dsi: DSi
    3ds: 3DS
---

Once a flashcart has been flashed with **ntrboot** it is typically no longer usable as a DS flashcart (with the exception of certain flashcarts such as the Acekard 2i). It is possible to restore a flashrom file back to an ntrboot compatible flashcart to return it to it's previous functionality. If you followed the ntrboot guide, you should have a copy of the flashrom backup.

### Peranti keras yang perlu

To remove ntrboot from your flashcart you will need:

- A flashcard that has been flashed with ntrboot
- A hacked DSi/3DS running ntrboot flasher in order to restore the flashrom backup to the flashcard
- A flashrom backup of your flashcart. If you followed the ntrboot flashing guide, you should have this as a `.bin` file in the `ntrboot` folder from your flashcart MicroSD card or DSi/3DS SD card
- If you do **not** have this backup, you may download the corresponding flashrom backup for your flashcart from the [3ds.hacks.guide ntrboot guide](https://3ds.hacks.guide/installing-boot9strap-\(ntrboot\).html#section-v-removing-ntrboot). These are available as magnet links and require torrent client like [qBittorrent](https://www.qbittorrent.org/download.php) or [Deluge](http://dev.deluge-torrent.org/wiki/Download) to download them

{% capture tab-dsi %}

Harus sudah pernah mengikuti [dsi.cfw.guide](https://dsi.cfw.guide) dan mampu menjalankan <i>homebrew</i>.
{:.alert .alert-warning}

1. Place your flashcart's flashrom backup in the `ntrboot` folder on your DSi SD card. Create this folder if it does not exist
2. Unduh [ntrboot flasher](/assets/files/ntrboot_flasher_nds.nds) ke kartu SD di mana saja
3. Sisipkan kartu SD ke konsol DSi termodif, lalu jalankan ntrboot flasher
4. Ikuti arahan di layar. Select your cartridge from the list, then choose the `Restore Flash` option. After the restore has finished, your flashcart should now work as a DS flashcart again

{% endcapture tab-dsi %}
{% assign tab-dsi = tab-dsi | split: "////////" %}

{% capture tab-3ds %}

You must have already followed [3ds.hacks.guide](https://3ds.hacks.guide) and have luma installed
{:.alert .alert-warning}

1. Place your flashcart's flashrom backup in the `ntrboot` folder on your 3DS SD card. Create this folder if it does not exist.
2. Unduh [ntrboot flasher](/assets/files/ntrboot_flasher.firm) ke kartu SD sebagai `sdmc:/luma/payloads/ntrboot_flasher.firm`
3. Sisipkan kartu SD ke 3DS termodif. Power on your 3DS while holding `START` to open the luma chainloader, then select the ntrboot flasher
4. Ikuti arahan di layar. Select your cartridge from the list, then choose the `Restore Flash` option. After the restore has finished, your flashcart should now work as a DS flashcart again

{% endcapture tab-3ds %}
{% assign tab-3ds = tab-3ds | split: "////////" %}

### Removing ntrboot

{% assign tabs = tab-dsi | concat: tab-3ds %}
{% include tabs.html index=0 tabs=tabs %}

### Troubleshooting

In some cases, the restore may fail. This may be due to either an incorrect flashrom backup file, or your flashcard may be incompatible with the restore. ntrboot uses a hardcoded name for restoring flashrom backups. If you renamed the `.bin` file and do not have the original name, you can create a flash dump which will create a `.bin` file of the correct name of which you can then use to rename your flashrom backup.

If you are unsure and require assistance you can ask in the [DS(i) Mode Hacking](https://ds-homebrew.com/discord) Discord server.
