---
lang: id-ID
layout: wiki
section: twilightmenu
category: updating
title: Pembaruan (DSi)
long_title: Memperbarui TWiLight Menu++ (DSi)
description: Cara memperbarui TWiLight Menu++ pada Nintendo DSi
---

Jika memperbarui dari versi di bawah v6.8.3, mohon pindahkan dulu berkas `.sav` permainan DS ke folder baru bernama `saves`; tempat folder `saves` harus sama dengan ROM DS.
{:.alert .alert-info}

Jika memperbarui dari versi di bawah v21.0.0, mohon pindahkan dulu berkas `.pub` dan/atau `.prv` dari DSiWare ke folder baru bernama `saves`; tempat folder `saves` harus sama dengan ROM DSiWare.
{:.alert .alert-info}

### Pembaruan
1. Unduh [`TWiLightMenu-DSi.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z) yang terkini
    - Jika tidak terunduh, lihat [laman *release*](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Ekstrak `TWiLightMenu-DSi.7z`
1. Salin folder `_nds` ke akar kartu SD, timpa berkas yang ada
    - Untuk macOS, harus **copy** (salin) dan `merge` (gabung), jangan `replace` (timpa)
1. Salin berkas `BOOT.NDS` ke akar kartu SD, timpa berkas yang ada
1. **Pengguna hiyaCFW:** Salin folder `title` ke akar kartu SD, timpa berkas yang ada
    - Untuk macOS, harus **copy** (salin) dan `merge` (gabung), jangan `replace` (timpa)
