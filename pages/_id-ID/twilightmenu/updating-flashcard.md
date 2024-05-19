---
lang: id-ID
layout: wiki
section: twilightmenu
category: updating
title: Pembaruan (Flashcard)
long_title: Pembaruan TWiLight Menu++ (Flashcard)
description: Cara memperbarui TWiLight Menu++ pada <i>flashcard</i> Nintendo DS
---

Jika memperbarui dari versi di bawah v16.4.0, mohon pindahkan dulu berkas `.sav` permainan DS ke folder baru bernama `saves`; tempat folder `saves` harus sama dengan ROM DS.
{:.alert .alert-info}

Jika memperbarui dari versi di bawah v21.0.0, mohon pindahkan dulu berkas `.pub` dan/atau `.prv` dari DSiWare ke folder baru bernama `saves`; tempat folder `saves` harus sama dengan ROM DSiWare.
{:.alert .alert-info}

Jika menggunakan Windows yang mana terdapat Windows Defender, berkas `.7z` akan dikira Trojan karena positif palsu. Untuk mengatasi positif palsu, pastikan Windows Defender sudah mutakhir.
{:.alert .alert-warning}

### Pembaruan
1. Unduh [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z) yang terkini
1. Ekstrak `TWiLightMenu-Flashcard.7z`
1. Salin folder `_nds` ke akar kartu microSD *flashcard*, timpa berkas yang ada
   - Untuk macOS, harus **copy** (salin) dan `merge` (gabung), jangan `replace` (timpa)
1. Salin berkas `BOOT.NDS` ke akar kartu microSD *flashcard*, timpa berkas yang ada
1. Jika setelah ini TWLMenu++ tidak jalan, perbarui juga berkas *autoboot* (muat langsung)

### Langkah tambahan bagian kartu SD DSi/3DS

Jika bisa berpindah antara isi kartu SD dan *flashcard* di TWLMenu++, dan jika TWLMenu++ *flashcard* sudah v16.3.0 ke atas, ikuti langkah berikut.

1. Masuk ke pengaturan TWLMenu++
1. Pilih `Perbarui TWiLight Menu++`
1. Pilih `microSD Slot-1 > (micro)SD Konsol`
