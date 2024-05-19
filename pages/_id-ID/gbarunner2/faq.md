---
lang: id-ID
layout: faq
section: gbarunner2
title: Pertanyaan Umum & Sidik Gangguan
long_title: Pertanyaan Umum & Sidik Gangguan GBARunner2
description: Pertanyaan umum dan sidik gangguan terkait GBARunner2
---

#### Bagaimana membuat dan menaruh tepian kustom?
Silakan baca dan ikuti [panduan ini](https://docs.google.com/document/d/1owjiW-1fHEbokrkK2ZuPFjR2-N9s1dXCCAM3ghWRtxk/edit?usp=sharing) oleh FrescoASF.

#### Apakah bisa cheat?
Saat ini belum. Tapi kode *cheat* bisa disemat permanen ke ROM GBA dengan [GBAATM](https://gbatemp.net/threads/gba-auto-trainer-maker-gbaatm.99334/).

#### Versi GBARunner2 mana yang harus digunakan?
Biasanya, versi yang disertakan di TWiLight Menu++ sudah cukup. Untuk informasi lebih lanjut terkait berbagai versi GBARunner, lihat [laman wiki Versi](https://wiki.ds-homebrew.com/id-ID/gbarunner2/builds).

#### Bagaimana menggunakan fitur Wi-Fi link?
Diperlukan versi dari cabang [wifi_link](https://github.com/Gericom/GBARunner2/tree/wifi_link) untuk menggunakan fiturnya. Untuk perincian arahan cara menyiapkan versi ini ada di [laman WikiTemp](https://wiki.gbatemp.net/wiki/GBARunner2/Link).

#### Kenapa RTC (Real Time Clock) tidak didukung di ROM hack?
RTC tiap permainan dibaca berbeda-beda. Jadi, ID judul ROM perlu diubah menyerupai permainan yang mendukung RTC agar mau dibaca GBARunner2. Lihat daftar ID judul yang didukung di dalam [kode GBARunner2](https://github.com/Gericom/GBARunner2/blob/master/arm9/source/emu/romGpio.vram.cpp#L14-L61).

ID judul bisa diubah menggunakan ini:
1. <label for="file-input" class="form-label">Pilih berkas ROM GBA:</label> <input id="file-input" class="form-control mb-2" type="file" onchange="loadRom(this.files[0])" />
1. <label for="file-input" class="form-label">Tulis judul ID ROM:</label> <input id="tid-input" class="form-control mb-2" type="text" maxlength="4" onchange="updateTid(this.value)" disabled />
1. <label for="file-input" class="form-label">Simpan berkas diperbarui:</label> <input id="save" class="btn btn-secondary" type="button" value="Simpan" onclick="save()" disabled />

<script src="/assets/js/change-gba-tid.js"></script>

#### Kenapa ROM tidak berfungsi, padahal tertulis bisa di daftar kompatibilitas?
Daftar kompatibilitas GBARunner2 utamanya diuji dengan BIOS GBA resmi yang mana menambah kompatibilitas. Lihat [Info BIOS GBA](https://wiki.ds-homebrew.com/id-ID/gbarunner2/bios) untuk cara mendapatkan BIOS GBA resmi.

#### Bagaimana memperbaiki gambar berulang di bagian bawah layar 3DS?
Ini *bug* (kutu) di TWLBg yang cukup lazim di GBARunner2. Perbaikan sementara bisa dengan mengulang GBARunner2.
- Jika bisa, lebih baik gunakan opsi lain menjalankan ROM GBA di 3DS, seperti VC inject, open_agb_firm, atau mGBA di seri new3DS
