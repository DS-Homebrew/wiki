---
lang: en-US
layout: wiki
section: gbarunner2
title: GBA BIOS info
description: Information on the GBA BIOS and how to dump it
---

In order for GBARunner2 to load titles, a dump of the GBA BIOS is required. Newer builds of GBARunner2 (which come with the latest release of TWiLiight Menu++) have [Normatt's Open Source BIOS](https://github.com/Normmatt/gba_bios) built-in. Because it is not an exact copy, including a dump of the official BIOS increases compatilbity. You can dump an official GBA BIOS with one of the following methods.

### Dumping Guides

- [Wii (not family edition)/GameCube + Link Cable Dumper](https://github.com/FIX94/gba-link-cable-dumper) 
- [3DS using most Virtual Console Titles](https://glazedbelmont.github.io/gbabiosdump/) (can't be GBA or non-nintendo (gamegear) Virtual Console Titles) 
- [GBA (Micro/SP)/DS (Phat/Lite) with a GBA Flashcard](https://glazedbelmont.github.io/gbabiosdump/)

After dumping the BIOS, it must be renamed as `bios.bin` and then should be placed in `sd:/_gba/` for GBARunner2 to read it. 

You can verify that your BIOS is a proper dump by comparing it with the following hashes:

**CRC32**: 81977335
**MD5**: a860e8c0b6d573d191e4ec7db1b1e4f6
**SHA1**: 300c20df6731a33952ded8c436f7f186d25d3492
**SHA256**: fd2547724b505f487e6dcb29ec2ecff3af35a841a77ab2e85fd87350abd36570
