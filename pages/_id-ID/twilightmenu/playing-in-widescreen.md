---
lang: id-ID
layout: wiki
section: twilightmenu
category: other
title: Bermain Di Layar Lebar
description: Cara menjalankan TWiLight Menu++ di layar lebar pada Nintendo 3DS
---

Bagian ini memerlukan keluarga konsol 3DS yang menjalankan CFW terkini dari [3ds.hacks.guide](https://3ds.hacks.guide).
{:.alert .alert-info}

### Pemasangan
1. Buka FBI dan pilih `Remote Install`, kemudian `Scan QR Code`
1. Pindai kode QR berikut untuk memasang [Universal-Updater](https://github.com/Universal-Team/Universal-Updater) versi terkini<br> ![Kode QR Universal-Updater](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. Buka Universal Updater dari layar HOME Menu
1. Pasang kemasan TWPatch
   - Jika konsol tidak dapat mengakses Internet, kamu dapat mengunduh [TWPatch.cia](https://gbatemp.net/download/twpatch.37400/version/38832/download?file=302085) langsung, kemudian pasang dengan FBI
1. Kembali ke HOME menu dan luncurkan TWPatch
1. Tahan <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> untuk membuka menu tambalan dan nyalakan `Widescreen patch (384x240 16:10)`
1. (Tidak Wajib!) Agar layar lebar tidak terlalu berpiksel, nyalakan `GPU scaling (blurry, no filters)`
1. Tekan <kbd class="face">B</kbd> untuk keluar menu tambalan
1. Tekan <kbd>START</kbd> untuk menghasilkan berkas `TwlBg.cxi` dengan layar lebar
   - Jika layar atas tidak menandakan wide patch telah dinyalakan, mulai lagi dari langkah ke-3
1. Pindahkan `TwlBg.cxi` dari `sd:/luma/sysmodules/` ke `sd:/_nds/TWiLightMenu/TwlBg/` (buat folder `TwlBg`, jika belum ada), dan ubah nama berkasnya menjadi `Widescreen.cxi`
1. Nyalakan ulang 3DS sambil menahan <kbd>SELECT</kbd> untuk membuka penyetelan Luma3DS
1. Nyalakan `external FIRMs and modules`, lalu tekan <kbd>START</kbd> untuk menyimpan dan keluar
1. Buka TWiLight Menu++, tekan <kbd class="face">Y</kbd> pada permaian yang diinginkan untuk membuka pengaturan tiap-permainan, dan ubah `Nisbah Aspek Layar` ke `16:10`

Selesai deh! Nikmati bermain DS di layar lebar!

**CATATAN:**
1. Jangan tahan <kbd>START</kbd> atau <kbd>SELECT</kbd> saat meluncurkan TWLMenu++, jika tidak mau layar lebarnya ada glitch
1. Tidak semua permainan sesuai dijadikan layar lebar. [Berikut daftar permainan dengan dukungan layar lebar](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
1. Jika tersangkut di mode layar lebar pada semua bagian TWL_FIRM (termasuk GUI TWLMenu++) setelah mengikuti panduan dan meluncurkan permainan yang sesuai jadi layar lebar; hapus `TwlBg.cxi` di `sd:/luma/sysmodules/`, lalu [copot](https://wiki.ds-homebrew.com/twilightmenu/uninstalling-3ds) dan [pasang ulang](https://wiki.ds-homebrew.com/twilightmenu/installing-3ds) TWiLight Menu++, lalu ikuti kembali panduan di atas, sekaligus gunakan build Luma3DS asli
1. Sebagian besar tambalan layar lebar hanya akan menyesuaikan yang unsur 3D, unsur 2D (seperti menu) hanya akan dilebarkan
