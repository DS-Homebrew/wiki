---
lang: id-ID
layout: wiki
section: ds-index
category: guides
title: ntrboot
description: Cara menggunakan ntrboot pada Nintendo DSi
tabs:
  - unhacked: DS/DSi/3DS belum dimodif
    dsi: DSi
    3ds: 3DS
---

**ntrboot** adalah mode pemulihan di setiap DSi dan 3DS. Jika kartrid bertanda khusus disisip lalu kombo tombol ditahan, kartrid akan dimuat lebih dulu sebelum NAND. Nintendo menggunakan ini untuk menyiapkan unit kosong di pabrik, tapi juga untuk mode pemulihan jika NAND rusak, hilang, atau bapuk.

### Peranti keras yang perlu

Untuk ntrboot di konsol DSi diperlukan:

- <i>Flashcart</i> yang bisa ntrboot. [Berikut kartrid-kartrid yang bisa](https://www.flashcarts.net/ntrboot-ds-carts.html?tab=flashable). Abaikan kartrid yang <i>pre-flashed</i> karena ntrboot-nya versi 3DS.
- Besi berani untuk masuk ntrboot
- DS/DSi/3DS yang berfungsi, untuk mem-<i>flash</i> ntrboot ke <i>flashcart</i>

{% capture tab-unhacked %}

Metode ini perlu konsol DS, DSi, atau 3DS yang berfungsi dan tidak perlu <i>custom firmware</i>
{:.alert .alert-warning}

1. Pastikan <i>flashcart</i> tidak salah <i>kernel</i> agar bisa membaca <i>homebrew</i>
2. Buat folder bernama `ntrboot` di kartu microSD <i>flashcart</i>
3. Unduh [citra ntrboot ini](/assets/files/default.gcd) dan salin ke folder `ntrboot` di kartu microSD <i>flashcart</i>
4. Unduh [ntrboot flasher](/assets/files/ntrboot_flasher_nds.nds) dan salin ke mana saja di microSD
5. Sisipkan kartu microSD ke <i>flashcart</i> dan luncurkan <i>flashcart</i> di konsol yang bisa
6. Luncurkan `ntrboot_flasher_nds.nds` lewat <i>kernel flashcart</i>
7. Ikuti arahan di layar. Pilih <i>flashcart</i> pada daftar, <b>cadangkan</b> <i>flashcart</i> dengan opsi `Dump Flash`, lalu pilih opsi `Inject GCD`.

{% endcapture tab-unhacked %}
{% assign tab-unhacked = tab-unhacked | split: "////////" %}

{% capture tab-dsi %}

Konsol harus sudah bisa <i>homebrew</i> dan pernah mengikuti [dsi.cfw.guide](https://dsi.cfw.guide).
{:.alert .alert-warning}

1. Unduh [citra ntrboot](/assets/files/default.gcd) ke kartu SD DSi sebagai `sdmc:/ntrboot/default.gcd`
2. Unduh [ntrboot flasher](/assets/files/ntrboot_flasher_nds.nds) ke mana saja di kartu SD
3. Sisipkan kartu SD ke konsol DSi termodif, lalu jalankan ntrboot flasher
4. Ikuti arahan di layar. Pilih <i>flashcart</i> pada daftar, <b>cadangkan</b> <i>flashcart</i> dengan opsi `Dump Flash`, lalu pilih opsi `Inject GCD`.

{% endcapture tab-dsi %}
{% assign tab-dsi = tab-dsi | split: "////////" %}

{% capture tab-3ds %}

Konsol harus sudah ada Luma 3DS dan pernah mengikuti [3ds.hacks.guide](https://3ds.hacks.guide).
{:.alert .alert-warning}

1. Unduh [citra ntrboot](/assets/files/default.gcd) ke kartu SD 3DS sebagai `sdmc:/ntrboot/default.gcd`
2. Unduh [ntrboot flasher](/assets/files/ntrboot_flasher.firm) ke kartu SD sebagai `sdmc:/luma/payloads/ntrboot_flasher.firm`
3. Sisipkan kartu SD ke 3DS termodif. Nyalakan 3DS sambil menahan `START` untuk masuk <i>chainloader</i> Luma, lalu pilih ntrboot flasher
4. Ikuti arahan di layar. Pilih <i>flashcard</i> pada daftar, <b>cadangkan</b> <i>flashcard</i> dengan opsi `Dump Flash`, lalu suntikkan ntrboot. Di sini harus pilih opsi "TWL"

{% endcapture tab-3ds %}
{% assign tab-3ds = tab-3ds | split: "////////" %}

### Mem-<i>flash</i> ntrboot

{% assign tabs = tab-unhacked | concat: tab-dsi | concat: tab-3ds %}
{% include tabs.html index=0 tabs=tabs %}

### Menjalankan ntrboot

1. Unduh <i>homebrew</i> apa saja ke kartu SD konsol **DSi** (bukan microSD <i>flashcart</i>) sebagai `sdmc:/ntrboot.nds`. Sebagai contoh, kita gunakan [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases/).
2. Sisipkan kartu SD dan <i>flashcart</i> ntrboot ke konsol DSi
3. Taruh besi berani dekat tombol `ABXY` sampai masuk mode tidur
4. Matikan daya DSi
5. Sesudah ada besi berani, tahan `START` + `SELECT` + `X` lalu nyalakan DSi
6. Seharusnya menyala ke GodMode9i

### Sidik Gangguan

Jika ntrboot tidak berjalan padahal besi berani dan kombo tombol sudah benar, ntrboot mungkin tidak berfungsi. Coba dengan [citra ntrboot ini](/assets/files/default_green.gcd) lalu ikuti lagi arahan mem-<i>flash</i> apakah muncul layar hijau saat ntrboot. Jika masih tidak, <i>flashcart</i> mungkin tidak kompatibel dan harus minta tolong di server Discord [DS(i) Mode Hacking](https://ds-homebrew.com/discord).

Jika muncul galat "NAND Init failure" atau tidak melihat NAND di ntrboot, berarti harus lewat program lain dulu untuk ke <i>homebrew</i> pilihan (misalnya membuka SafeNANDManager lewat GodMode9i). Tapi, ntrboot sering keliru menyiapkan CID/ConsoleID saat awal nyala, jadi me-<i>mount</i> NAND untuk memulih/menyunting tidak langsung bisa.

### Menghapus ntrboot

Jika ingin memulihkan <i>flashcart</i> ter-<i>flash</i> balik ke keadaan semula sebelum di-<i>flash</i> ntrboot, baca bagian [menghapus ntrboot](/ds-index/menghapus-ntrboot).
