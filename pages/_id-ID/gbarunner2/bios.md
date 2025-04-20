---
lang: id-ID
layout: wiki
section: gbarunner2
title: Info BIOS GBA
description: Informasi terkait BIOS GBA dan cara membuat dump
---

Untuk memuat permainan di GBARunner2, diperlukan *dump* BIOS GBA. Versi terbaru GBARunner2 (yang ada dalam TWiLight Menu++ terkini) sudah ada [BIOS Sumber Terbuka Normatt](https://github.com/Normmatt/gba_bios) di dalamnya. Namun, karena bukan salinan persis, diperlukan *dump* BIOS resmi untuk kompatibilitas lebih baik. BIOS GBA resmi bisa di-*dump* dengan salah satu cara berikut.

### Panduan Membuat Dump

- [GBA/DS/DS Lite dengan *flashcart* GBA atau 3DS](bios-dump)
    - BIOS GBA **tidak mungkin** bisa di-*dump* dari DSi
- [Wii (bukan Family Edition)/GameCube, GBA, dan *link cable dumper*](https://github.com/FIX94/gba-link-cable-dumper)

Setelah men-*dump* BIOS, ubah namanya menjadi `bios.bin` lalu harus ditaruh di `sd:/`, di `sd:/gba/`, atau `sd:/_gba/` agar dibaca GBARunner2.

Hasil *dump* BIOS yang benar bisa dipastikan dengan dibandingkan *checksum* berikut:

GBA/GBA SP/Game Boy Micro/Game Boy Player:
- **CRC-32:** `81977335`
- **MD5:** `a860e8c0b6d573d191e4ec7db1b1e4f6`{:.wrap}
- **SHA-1:** `300c20df6731a33952ded8c436f7f186d25d3492`{:.wrap}
- **SHA-256:** `fd2547724b505f487e6dcb29ec2ecff3af35a841a77ab2e85fd87350abd36570`{:.wrap}

Jenis Konsol DS/DS Lite/3DS:
- **CRC-32:** `a6473709`
- **MD5:** `1c0d67db9e1208b95a1506b1688a0ad6`{:.wrap}
- **SHA-1:** `c11531d5261006810cdc954bd4bec0afe3187b35`{:.wrap}
- **SHA-256:** `782eb3894237ec6aa411b78ffee19078bacf10413856d33cda10b44fd9c2856b`{:.wrap}

Jika tidak tahu cara melihat *checksum* berkas, gunakan [kalkulator *checksum* daring](https://emn178.github.io/online-tools/crc32_checksum.html).
