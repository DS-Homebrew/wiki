---
lang: id-ID
layout: wiki
section: twilightmenu
category: updating
title: Pembaruan (DSi)
long_title: Memperbarui TWiLight Menu++ (DSi)
description: Cara memperbarui TWiLight Menu++ pada Nintendo DSi
---

Jika memperbarui dari versi yang lebih lawas dari v16.8.3, mohon pindahkan dulu berkas `.sav` permainan DS ke folder baru bernama `saves`, folder `saves` harus di tempat yang sama dengan ROM DS.
{:.alert .alert-info}

Jika memperbarui dari versi yang lebih lawas dari v21.0.0, mohon pindahkan dulu berkas `.pub` dan/atau `.prv` untuk ROM DSiWare ke folder baru bernama `saves`, tempat folder `saves` harus sama dengan ROM DSiWare.
{:.alert .alert-info}

### Pembaruan
1. Unduh [`TWiLightMenu-DSi.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z) yang terkini
1. Ekstrak `TWiLightMenu-DSi.7z`
1. Salin folder `_nds` ke root kartu SD, timpa berkas yang ada
   - Untuk macOS, pastikan harus **copy (salin)** dan `merge (gabung)`, jangan `replace (timpa)`
1. Salin berkas `BOOT.NDS` ke root kartu SD, timpa berkas yang ada
1. **Pengguna hiyaCFW:** Salin folder `title` ke root kartu SD, timpa berkas yang ada
   - Untuk macOS, pastikan harus **copy (salin)** dan `merge (gabung)`, jangan `replace (timpa)`

### Langkah tambahan untuk di flashcard

Jika kamu dapat beralih antara isi kartu SD ke flashcard lewat TWLMenu++, dan jika TWLMenu++ di flashcard sudah v16.3.0 ke atas, ikuti langkah-langkah berikut.

1. Masuk ke pengaturan TWLMenu++
1. Pilih `Perbarui TWiLight Menu++`
1. Pilih `Kartu (micro)SD Konsol > microSD Slot-1`
