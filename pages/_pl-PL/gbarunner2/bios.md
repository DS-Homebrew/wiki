---
lang: pl-PL
layout: wiki
section: gbarunner2
title: GBA BIOS Info
description: Informacje o GBA BIOS i jak go zrzucić
---

Aby GBARunner2 mógł załadować tytuły, konieczny jest zrzut GBA BIOS. Nowsze wersje GBARunner2 (z najnowszym wydaniem TWiLight Menu++) mają wbudowany [Normatt's Open Source BIOS](https://github.com/Normmatt/gba_bios). Jednakże, ponieważ nie jest to dokładna kopia, użycie zrzutu oficjalnego BIOS-u zwiększa kompatybilność. Możesz zrzucić oficjalny BIOS GBA za pomocą jednej z poniższych metod.

### Wskazówki dotyczące Dumpu

- [Wii (not family edition) / GameCube + link cable dumper](https://github.com/FIX94/gba-link-cable-dumper)
- [3DS wykorzystujący większość tytułów Wirtualnej Konsoli](https://glazedbelmont.github.io/gbabiosdump/#virtual-console-title-from-a-3ds) (nie mogą być to gry gba lub tytuły Wirtualnej Konsoli nie wydanych przez Nintendo)
- [GBA lub DS Phat / Lite z flashcartem GBA](https://glazedbelmont.github.io/gbabiosdump/#gameboy-advance-sp-micro-ds-ds-lite)

Po zrzuceniu BIOS-u należy zmienić jego nazwę na `bios.bin`, a następnie umieścić go w `sd:/`, `sd:/gba/` lub `sd:/_gba/`, aby GBARunner2 mógł go odczytać.

Możesz sprawdzić, czy Twój BIOS został zrzucony poprawnie, porównując go z poniższymi sumami kontrolnymi:

**CRC32:** `81977335`

**MD5:** `a860e8c0b6d573d191e4ec7db1b1e4f6`

**SHA1:** `300c20df6731a33952ded8c436f7f186d25d3492`

**SHA256:** `fd2547724b505f487e6dcb29ec2ecff3af35a841a77ab2e85fd87350abd36570`
