---
lang: en-US
layout: wiki
section: gbarunner2
title: GBA BIOS Info
description: Information on the GBA BIOS and how to dump it
---

In order for GBARunner2 to load titles, a dump of the GBA BIOS is required. Newer builds of GBARunner2 (which come with the latest release of TWiLight Menu++) have [Normatt's Open Source BIOS](https://github.com/Normmatt/gba_bios) built-in. However, because it is not an exact copy, using a dump of the official BIOS increases compatibility. You can dump an official GBA BIOS with one of the following methods.

### Dumping Guides

- [GBA/DS/DS Lite with GBA flashcart or 3DS](https://glazedbelmont.github.io/gbabiosdump/)
   - It is **not** possible to dump the GBA BIOS on a DSi
- [Wii (not Family edition)/GameCube, GBA, and link cable dumper](https://github.com/FIX94/gba-link-cable-dumper)

After dumping the BIOS, it must be renamed to `bios.bin` and then should be placed in `sd:/`, `sd:/gba/`, or `sd:/_gba/` for GBARunner2 to read it.

You can verify that your BIOS is a proper dump by comparing it with the following checksums:

GBA/GBA SP/Game Boy Micro/Game Boy Player:
- **CRC-32:** `81977335`
- **MD5:** `a860e8c0b6d573d191e4ec7db1b1e4f6`
- **SHA-1:** `300c20df6731a33952ded8c436f7f186d25d3492`
- **SHA-256:** `fd2547724b505f487e6dcb29ec2ecff3af35a841a77ab2e85fd87350abd36570`

DS/DS Lite/3DS Family:
- **CRC-32:** `a6473709`
- **MD5:** `1c0d67db9e1208b95a1506b1688a0ad6`
- **SHA-1:** `c11531d5261006810cdc954bd4bec0afe3187b35`
- **SHA-256:** `782eb3894237ec6aa411b78ffee19078bacf10413856d33cda10b44fd9c2856b`

If you don't know how to obtain a file checksum, you can use an [online checksum calculator](https://emn178.github.io/online-tools/crc32_checksum.html).
