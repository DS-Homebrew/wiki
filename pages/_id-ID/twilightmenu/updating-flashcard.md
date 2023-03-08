---
lang: id-ID
layout: wiki
section: twilightmenu
category: updating
title: Pembaruan (Flashcard)
long_title: Pembaruan TWiLight Menu++ (Flashcard)
description: Cara memperbarui TWiLight Menu++ pada flashcard Nintendo DS
---

Jika memperbarui dari versi lebih lawas dari v16.4.0, mohon pindahkan dulu berkas `.sav` permainan DS ke folder baru bernama `saves`; tempat folder `saves` harus sama dengan ROM DS.
{:.alert .alert-info}

Jika memperbarui dari versi lebih lawas dari v21.0.0, mohon pindahkan dulu berkas `.pub` dan/atau `.prv` untuk ROM DSiWare ke folder baru bernama `saves`; tempat folder `saves` harus sama dengan ROM DSiWare.
{:.alert .alert-info}

### Pembaruan
1. Unduh [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z) yang terkini
1. Ekstrak `TWiLightMenu-Flashcard.7z`
1. Salin folder `_nds` ke root kartu microSD flashcard, timpa berkas yang ada
   - Untuk macOS, pastikan harus **copy** (salin) dan `merge` (gabung), jangan `replace` (timpa)
1. Salin berkas `BOOT.NDS` ke root kartu microSD flashcard, timpa berkas yang ada
1. Jika TWLMenu++ tak dapat dimuat setelah diperbarui, perbarui juga berkas muat langsung (autoboot)

### Langkah tambahan untuk di kartu SD DSi/3DS

Jika dapat beralih antara isi kartu SD dan flashcard di TWLMenu++, dan jika TWLMenu++ flashcard sudah v16.3.0 ke atas, ikuti langkah berikut.

1. Masuk ke pengaturan TWLMenu++
1. Pilih `Perbarui TWiLight Menu++`
1. Pilih `microSD Slot-1 > (micro)SD Konsol`
