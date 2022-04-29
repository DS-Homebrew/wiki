---
lang: en-US
layout: wiki
section: gbarunner2
title: GBA BIOS Info
description: Information on the GBA BIOS and how to dump it
---

Agar GBARunner2 bisa memuat gim, dibutuhkan sebuah dump dari GBA BIOS. Build terbaru dari GBARunner2 (yang juga hadir dalam TWiLight Menu++ terbaru) memiliki bios bawaan [Normatt's Open Source BIOS](https://github.com/Normmatt/gba_bios). Bagaimanapun, karena itu bukanlah salinan yang tepat, dengan menggunakan dump dari BIOS resmi akan meninngkatkan kompatibilitasnya. Kamu dapat men-dump GBA BIOS resmi dengan mengikuti salah satu dari beberapa metode.

### Panduan Dumping

- [GBA/DS/DS Lite dengan flashcart GBA atau 3DS](https://glazedbelmont.github.io/gbabiosdump/)
   - **Tidak memungkinkan** untuk men-dump GBA BIOS dari DSi
- [Wii (bukan Family Ediition)/GameCube, GBA, dan link cable dumper](https://github.com/FIX94/gba-link-cable-dumper)

Setelah dumping BIOS, file tersebut harus di rename menjadi `bios.bin` dan harus diletakkan di `sd:/`, `sd:/gba/`, or `sd:/_gba/` agar GBARunner2 bisa membaca file tersebut.

Kamu dapat memverifikasi jika BIOS dump mu sudah tepat dengan membandingkan cheksums ini:

GBA/GBA SP/Game Boy Micro/Game Boy Player:
- **CRC-32:** `81977335`
- **MD5:** `a860e8c0b6d573d191e4ec7db1b1e4f6`{:.wrap}
- **SHA-1:** `300c20df6731a33952ded8c436f7f186d25d3492`{:.wrap}
- **SHA-256:** `fd2547724b505f487e6dcb29ec2ecff3af35a841a77ab2e85fd87350abd36570`{:.wrap}

Deret Konsol DS/DS Lite/3DS:
- **CRC-32:** `a6473709`
- **MD5:** `1c0d67db9e1208b95a1506b1688a0ad6`{:.wrap}
- **SHA-1:** `c11531d5261006810cdc954bd4bec0afe3187b35`{:.wrap}
- **SHA-256:** `782eb3894237ec6aa411b78ffee19078bacf10413856d33cda10b44fd9c2856b`{:.wrap}

Jika kau tidak tahu cara mendapatkan checksum berkas, gunakan [alat hitung checksum daring](https://emn178.github.io/online-tools/crc32_checksum.html).
