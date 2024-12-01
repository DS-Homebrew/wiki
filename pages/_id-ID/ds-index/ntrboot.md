---
lang: id-ID
layout: wiki
section: ds-index
category: guides
title: ntrboot
description: Cara menggunakan ntrboot pada Nintendo DSi
tabs:
  - unhacked: Unhacked DS/DSi/3DS
    dsi: DSi
    3ds: 3DS
---

**ntrboot** adalah mode pemulihan di setiap DSi dan 3DS. Jika kartrid bertanda khusus disisip lalu kombo tombol ditahan, kartrid akan dimuat lebih dulu sebelum NAND. Nintendo menggunakan ini untuk menyiapkan unit kosong di pabrik, tapi juga untuk mode pemulihan jika NAND rusak, hilang, atau buruk.

### Peranti keras yang perlu

To use ntrboot on your DSi you will need:

- An ntrboot compatible flashcard. [Berikut kartrid-kartrid yang bisa](https://www.flashcarts.net/ntrboot-ds-carts.html?tab=flashable). Abaikan kartrid yang <i>pre-flashed</i> karena ntrboot-nya versi 3DS.
- A magnet to trigger ntrboot
- A working DS/DSi/3DS in order to flash ntrboot to the flashcard

{% capture tab-unhacked %}

This method requires a working DS, DSi or 3DS console and does not require custom firmware
{:.alert .alert-warning}

1. Ensure your flashcart is set up with a working kernel that can load homebrew
2. Create a folder named `ntrboot` on your flashcart's MicroSD card
3. Download the [ntrboot image](/assets/files/default.gcd) and copy it to the `ntrboot` folder on your flashcart's MicroSD card
4. Download the [ntrboot flasher](/assets/files/ntrboot_flasher_nds.nds) and copy it to anywhere on your flashcart's MicroSD card
5. Insert the MicroSD card into the flashcart and boot the flashcart on the working console
6. Launch `ntrboot_flasher_nds.nds` from your flashcart's kernel
7. Ikuti arahan di layar. Select your cartridge from the list, back up your flashcard with the `Dump Flash` option, then inject ntrboot. Di sini harus pilih opsi "TWL"

{% endcapture tab-unhacked %}
{% assign tab-unhacked = tab-unhacked | split: "////////" %}

{% capture tab-dsi %}

Harus sudah pernah mengikuti [dsi.cfw.guide](https://dsi.cfw.guide) dan mampu menjalankan <i>homebrew</i>.
{:.alert .alert-warning}

1. Unduh [citra ntrboot](/assets/files/default.gcd) ke kartu SD DSi sebagai `sdmc:/ntrboot/default.gcd`
2. Unduh [ntrboot flasher](/assets/files/ntrboot_flasher_nds.nds) ke kartu SD di mana saja
3. Sisipkan kartu SD ke konsol DSi termodif, lalu jalankan ntrboot flasher
4. Ikuti arahan di layar. Select your cartridge from the list, back up your flashcard with the `Dump Flash` option, then inject ntrboot. Di sini harus pilih opsi "TWL"

{% endcapture tab-dsi %}
{% assign tab-dsi = tab-dsi | split: "////////" %}

{% capture tab-3ds %}

Harus sudah pernah mengikuti [3ds.hacks.guide](https://3ds.hacks.guide) dan terpasang Luma 3DS.
{:.alert .alert-warning}

1. Unduh [citra ntrboot](/assets/files/default.gcd) ke kartu SD 3DS sebagai `sdmc:/ntrboot/default.gcd`
2. Unduh [ntrboot flasher](/assets/files/ntrboot_flasher.firm) ke kartu SD sebagai `sdmc:/luma/payloads/ntrboot_flasher.firm`
3. Sisipkan kartu SD ke 3DS termodif. Power on your 3DS while holding `START` to open the luma chainloader, then select the ntrboot flasher
4. Ikuti arahan di layar. Select your cartridge from the list, back up your flashcard with the `Dump Flash` option, then inject ntrboot. Di sini harus pilih opsi "TWL"

{% endcapture tab-3ds %}
{% assign tab-3ds = tab-3ds | split: "////////" %}

### Mem-<i>flash</i> ntrboot

{% assign tabs = tab-unhacked | concat: tab-dsi | concat: tab-3ds %}
{% include tabs.html index=0 tabs=tabs %}

### Menjalankan ntrboot

1. Download any homebrew to the **DSi** SD card (not the flashcart MicroSD card) as `sdmc:/ntrboot.nds`. Sebagai contoh, kita gunakan [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases/).
2. Sisipkan kartu SD dan <i>flashcard</i> ntrboot ke konsol DSi
3. Taruh besi berani dekat tombol `ABXY` sampai masuk mode tidur
4. Matikan daya DSi
5. Sesudah ada besi berani, tahan `START` + `SELECT` + `X` lalu nyalakan DSi
6. Seharusnya menyala ke GodMode9i

### Troubleshooting

Jika ntrboot tidak berjalan padahal besi berani dan kombo tombol sudah benar, ntrboot mungkin tidak berfungsi. Coba dengan [citra ntrboot ini](/assets/files/default_green.gcd) lalu ikuti lagi arahan mem-<i>flash</i> apakah muncul layar hijau saat ntrboot. Jika masih tidak, <i>flashcard</i> mungkin tidak kompatibel dan harus minta tolong di server Discord [DS(i) Mode Hacking](https://ds-homebrew.com/discord).

Jika muncul galat "NAND Init failure" atau tidak melihat NAND di ntrboot, berarti harus lewat program lain dulu untuk ke <i>homebrew</i> pilihan (misalnya membuka SafeNANDManager lewat GodMode9i). Tapi ntrboot bermasalah di CID/ConsoleID yang disiapkan keliru saat awal nyala, jadi me-<i>mount</i> NAND untuk memulih/sunting tidak langsung bisa.

### Removing ntrboot

If you wish to restore your flashcart back to it's original state before it was flashed with ntrboot, read the section on [removing ntrboot](/ds-index/removing-ntrboot).
