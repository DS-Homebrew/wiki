---
lang: pl-PL
layout: wiki
section: gbarunner2
title: GBA BIOS Info
description: Informacje o GBA BIOS i jak go zrzucić
---

Aby GBARunner2 mógł załadować tytuły, konieczny jest zrzut BIOS GBA. Nowsze wersje GBARunner2 (z najnowszym wydaniem TWiLight Menu++) mają wbudowany [Normatt's Open Source BIOS](https://github.com/Normmatt/gba_bios). Jednakże, ponieważ nie jest to dokładna kopia, użycie zrzutu oficjalnego BIOS-u zwiększa kompatybilność. Możesz zrzucić oficjalny BIOS GBA za pomocą jednej z poniższych metod.

### Wskazówki dotyczące Dumpu

- [GBA/DS/DS Lite with GBA flashcart or 3DS](https://glazedbelmont.github.io/gbabiosdump/)
   - It is **not** possible to dump the GBA BIOS on a DSi
- [Wii (not Family edition)/GameCube, GBA, and link cable dumper](https://github.com/FIX94/gba-link-cable-dumper)

Po zrzuceniu BIOS-u należy zmienić jego nazwę na `bios.bin`, a następnie umieścić go w `sd:/`, `sd:/gba/` lub `sd:/_gba/`, aby GBARunner2 mógł go odczytać.

Możesz sprawdzić, czy Twój BIOS został zrzucony poprawnie, porównując go z poniższymi sumami kontrolnymi:

GBA/GBA SP/Game Boy Micro/Game Boy Player:
- **CRC-32:** `81977335`
- **MD5:** `a860e8c0b6d573d191e4ec7db1b1e4f6`{:.wrap}
- **SHA-1:** `300c20df6731a33952ded8c436f7f186d25d3492`{:.wrap}
- **SHA-256:** `fd2547724b505f487e6dcb29ec2ecff3af35a841a77ab2e85fd87350abd36570`{:.wrap}

DS/DS Lite/3DS Family:
- **CRC-32:** `a6473709`
- **MD5:** `1c0d67db9e1208b95a1506b1688a0ad6`{:.wrap}
- **SHA-1:** `c11531d5261006810cdc954bd4bec0afe3187b35`{:.wrap}
- **SHA-256:** `782eb3894237ec6aa411b78ffee19078bacf10413856d33cda10b44fd9c2856b`{:.wrap}

If you don't know how to obtain a file checksum, you can use an [online checksum calculator](https://emn178.github.io/online-tools/crc32_checksum.html).
