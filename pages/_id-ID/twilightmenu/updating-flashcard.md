---
lang: id-ID
layout: wiki
section: twilightmenu
category: updating
title: Pembaruan (Flashcart)
long_title: Pembaruan TWiLight Menu++ (Flashcart)
description: Cara memperbarui TWiLight Menu++ pada <i>flashcart</i> Nintendo DS
---

Jika memperbarui dari versi di bawah v16.4.0, mohon pindahkan dulu berkas `.sav` permainan DS ke folder baru bernama `saves`; tempat folder `saves` harus sama dengan ROM DS.
{:.alert .alert-info}

Jika memperbarui dari versi di bawah v21.0.0, mohon pindahkan dulu berkas `.pub` dan/atau `.prv` dari DSiWare ke folder baru bernama `saves`; tempat folder `saves` harus sama dengan ROM DSiWare.
{:.alert .alert-info}

### Pembaruan
1. Unduh [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z) yang terkini
    - Jika tidak terunduh, buka [laman *release*](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Ekstrak `TWiLightMenu-Flashcard.7z`
1. Salin folder `_nds` ke akar kartu microSD *flashcart*, timpa berkas yang ada
    - Untuk macOS, harus **copy** (salin) dan `merge` (gabung), jangan `replace` (timpa)
1. Salin berkas `BOOT.NDS` ke akar kartu microSD *flashcart*, timpa berkas yang ada
1. Jika setelah ini TWLMenu++ tidak jalan, perbarui juga berkas *autoboot* (muat langsung)

### Langkah tambahan bagian kartu SD DSi/3DS

Jika TWLMenu++ bisa berpindah ke isi kartu SD konsol atau *flashcart*, dan jika TWLMenu++ *flashcart* sudah v16.3.0 ke atas, ikuti langkah berikut.

1. Masuk ke pengaturan TWLMenu++
1. Pilih `Perbarui TWiLight Menu++`
1. Pilih `microSD Slot-1 > (micro)SD Konsol`
