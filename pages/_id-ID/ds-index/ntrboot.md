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

**ntrboot** adalah mode pemulihan di setiap DSi dan 3DS. Jika kartrid bertanda khusus disisip lalu kombo tombol ditahan, kartrid akan dimuat lebih dulu sebelum NAND. Nintendo menggunakan ini untuk menyiapkan unit kosong di pabrik, tapi juga untuk mode pemulihan jika NAND rusak, hilang, atau buruk.

### Peranti keras yang perlu

Menggunakan ntrboot di konsol DSi akan perlu:
\- <i>Flashcard</i> yang bisa ntrboot. [Berikut kartrid-kartrid yang bisa](https://www.flashcarts.net/ntrboot-ds-carts.html?tab=flashable). Abaikan kartrid yang <i>pre-flashed</i> karena ntrboot-nya versi 3DS.
\- Besi berani untuk masuk ntrboot
\- Konsol DSi/3DS lain untuk mem-<i>flash</i> ntrboot ke <em>flashcard</em>

{% capture tab-dsi %}

Harus sudah pernah mengikuti [dsi.cfw.guide](https://dsi.cfw.guide) dan mampu menjalankan <i>homebrew</i>.
{:.alert .alert-warning}

1. Unduh [citra ntrboot](/assets/files/default.gcd) ke kartu SD DSi sebagai `sdmc:/ntrboot/default.gcd`
2. Unduh [ntrboot flasher](/assets/files/ntrboot_flasher_nds.nds) ke kartu SD di mana saja
3. Sisipkan kartu SD ke konsol DSi termodif, lalu jalankan ntrboot flasher
4. Ikuti arahan di layar. Pilih kartrid yang ada di daftar, cadangkan <i>flashcard</i>, lalu suntikkan ntrboot. Di sini harus pilih opsi "TWL"

{% endcapture tab-dsi %}
{% assign tab-dsi = tab-dsi | split: "////////" %}

{% capture tab-3ds %}

Harus sudah pernah mengikuti [3ds.hacks.guide](https://3ds.hacks.guide) dan terpasang luma.
{:.alert .alert-warning}

1. Unduh [citra ntrboot](/assets/files/default.gcd) ke kartu SD 3DS sebagai `sdmc:/ntrboot/default.gcd`
2. Unduh [ntrboot flasher](/assets/files/ntrboot_flasher.firm) ke kartu SD sebagai `sdmc:/luma/payloads/ntrboot_flasher.firm`
3. Sisipkan kartu SD ke 3DS termodif. Tahan `START` untuk masuk <i>chainloader</i> luma, lalu pilih ntrboot flasher
4. Ikuti arahan di layar. Pilih kartrid yang ada di daftar, cadangkan <i>flashcard</i>, lalu suntikkan ntrboot. Di sini harus pilih opsi "TWL"

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

Jika ntrboot tidak berjalan padahal besi berani dan kombo tombol sudah benar, ntrboot mungkin tidak berfungsi. Coba dengan [citra ntrboot ini](/assets/files/default_green.gcd) lalu ikuti lagi arahan mem-<i>flash</i> apakah muncul layar hijau saat ntrboot. Jika masih tidak, <i>flashcard</i> mungkin tidak kompatibel dan harus minta tolong di server Discord [DS(i) Mode Hacking](https://ds-homebrew.com/discord).

Jika muncul galat "NAND Init failure" atau tidak melihat NAND di ntrboot, berarti harus lewat program lain dulu untuk ke <i>homebrew</i> pilihan (misalnya membuka SafeNANDManager lewat GodMode9i). Tapi ntrboot bermasalah di CID/ConsoleID yang disiapkan keliru saat awal nyala, jadi me-<i>mount</i> NAND untuk memulih/sunting tidak langsung bisa.
