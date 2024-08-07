---
lang: id-ID
layout: wiki
section: ds-index
category: guides
title: ntrboot
description: Cara menggunakan ntrboot pada Nintendo DSi
tabs:
  - dsi: DS/DSi
    3ds: 3DS
---

**ntrboot** adalah mode pemulihan di setiap DSi dan 3DS. Jika kaset bertanda khusus disisip sambil menahan kombo tombol, kasetnya akan dimuat duluan sebelum ke NAND. Nintendo perlu ini untuk menyiapkan unit kosong di pabrik, tapi juga digunakan untuk mode pemulihan jika NAND rusak, hilang, atau buruk.

### Peranti keras yang perlu

Untuk ntrboot di konsol DSi diperlukan:

- <i>Flashcard</i> yang bisa ntrboot. [Berikut kaset-kaset yang bisa](https://www.flashcarts.net/ntrboot-ds-carts.html?tab=flashable). Abaikan yang kaset pra-<i>flash</i> karena ntrboot di sana versi 3DS.
- Besi berani untuk masuk ntrboot
- Konsol DSi/3DS lain untuk mem-<i>flash</i> ntrboot ke <i>flashcard</i>

{% capture tab-dsi %}

Harus sudah pernah mengikuti [dsi.cfw.guide](https://dsi.cfw.guide) dan mampu menjalankan <i>homebrew</i>.
{:.alert .alert-warning}

1. Unduh [citra ntrboot](/assets/files/default.gcd) ke kartu SD DSi sebagai `sdmc:/ntrboot/default.gcd`
2. Unduh [ntrboot flasher](/assets/files/ntrboot_flasher_nds.nds) ke kartu SD di mana saja
3. Sisipkan kartu SD ke konsol DSi termodif, lalu jalankan ntrboot flasher
4. Ikuti arahan di layar. Pilih kaset yang ada di daftar, cadangkan <i>flashcard</i>, lalu suntikkan ntrboot. Di sini harus pilih opsi "TWL"

{% endcapture tab-dsi %}
{% assign tab-dsi = tab-dsi | split: "////////" %}

{% capture tab-3ds %}

Harus sudah pernah mengikuti [3ds.hacks.guide](https://3ds.hacks.guide) dan terpasang luma.
{:.alert .alert-warning}

1. Unduh [citra ntrboot](/assets/files/default.gcd) ke kartu SD 3DS sebagai `sdmc:/ntrboot/default.gcd`
2. Unduh [ntrboot flasher](/assets/files/ntrboot_flasher.firm) ke kartu SD sebagai `sdmc:/luma/payloads/ntrboot_flasher.firm`
3. Sisipkan kartu SD ke 3DS termodif. Tahan `START` untuk masuk <i>chainloader</i> luma, lalu pilih ntrboot flasher
4. Ikuti arahan di layar. Pilih kaset yang ada di daftar, cadangkan <i>flashcard</i>, lalu suntikkan ntrboot. Di sini harus pilih opsi "TWL"

{% endcapture tab-3ds %}
{% assign tab-3ds = tab-3ds | split: "////////" %}

### Mem-<i>flash</i> ntrboot

{% assign tabs = tab-dsi | concat: tab-3ds %}
{% include tabs.html index=0 tabs=tabs %}

### Menjalankan ntrboot

1. Unduh <i>homebrew</i> apa pun ke kartu SD sebagai `sdmc:/ntrboot.nds`. Sebagai contoh, kita gunakan [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases/).
2. Sisipkan kartu SD dan <i>flashcard</i> ntrboot ke konsol DSi
3. Taruh besi berani dekat tombol `ABXY` sampai masuk mode tidur
4. Matikan daya DSi
5. Sesudah ada besi berani, tahan `START` + `SELECT` + `X` lalu nyalakan DSi
6. Seharusnya menyala ke GodMode9i

Jika ntrboot tidak berjalan dan yakin besi berani dan kombo tombol sudah benar, ntrboot mungkin tidak berfungsi. Coba ikuti arahan mem-<i>flash</i> lagi dengan [citra ntrboot ini](/assets/files/default_green.gcd) apakah nanti ntrboot muncul layar hijau. Jika masih tidak, <i>flashcard</i> mungkin tidak kompatibel dan harus minta tolong di server Discord [DS(i) Mode Hacking](https://ds-homebrew.com/discord).

Jika muncul galat "NAND Init failure" atau tidak melihat NAND di ntrboot, berarti harus lewat program lain dulu untuk ke <i>homebrew</i> pilihan (misalnya membuka SafeNANDManager lewat GodMode9i). Di ntrboot ada masalah CID/ConsoleID yang disiapkan keliru saat awal nyala, jadi me-<i>mount</i> NAND untuk menyunting/memulih tidak akan langsung bisa.
