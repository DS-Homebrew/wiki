---
lang: en-US
layout: wiki
section: gbarunner2
title: GBA BIOS Info
description: Information on the GBA BIOS and how to dump it
---

In order for GBARunner2 to load titles, a dump of the GBA BIOS is required. Newer builds of GBARunner2 (which come with the latest release of TWiLight Menu++) have [Normatt's Open Source BIOS](https://github.com/Normmatt/gba_bios) built-in. However, because it is not an exact copy, using a dump of the official BIOS increases compatibility. You can dump an official GBA BIOS with one of the following methods.

### Dumping Guides

- [Wii (not family edition) / GameCube + link cable dumper](https://github.com/FIX94/gba-link-cable-dumper)
- [3DS using most Virtual Console titles](https://glazedbelmont.github.io/gbabiosdump/#virtual-console-title-from-a-3ds) (Can't be GBA or non-Nintendo (Game Gear) Virtual Console Titles)
- [GBA or DS Phat/Lite with a GBA flashcart](https://glazedbelmont.github.io/gbabiosdump/#gameboy-advance-sp-micro-ds-ds-lite)

After dumping the BIOS, it must be renamed to `bios.bin` and then should be placed in `sd:/`, `sd:/gba/`, or `sd:/_gba/` for GBARunner2 to read it.

You can verify that your BIOS is a proper dump by comparing it with the following checksums:

**CRC32:** `81977335`

**MD5:** `a860e8c0b6d573d191e4ec7db1b1e4f6`

**SHA1:** `300c20df6731a33952ded8c436f7f186d25d3492`

**SHA256:** `fd2547724b505f487e6dcb29ec2ecff3af35a841a77ab2e85fd87350abd36570`
