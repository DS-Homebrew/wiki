---
lang: ko-KR
layout: wiki
section: gbarunner2
title: GBA BIOS Info
description: GBA BIOS에 관한 정보와 덤프하는 방법
---

GBARunner2에서 게임을 로드하기 위해, GBA BIOS의 덤프파일이 필요합니다. Newer builds of GBARunner2 (which come with the latest release of TWiLight Menu++) have [Normatt's Open Source BIOS](https://github.com/Normmatt/gba_bios) built-in. However, because it is not an exact copy, using a dump of the official BIOS increases compatibility. 아래 방법들중 하나를 통해 공식 GBA BIOS를 덤프할 수 있습니다.

### 덤핑 가이드

- [Wii (not family edition) / GameCube + link cable dumper](https://github.com/FIX94/gba-link-cable-dumper)
- [3DS using most Virtual Console titles](https://glazedbelmont.github.io/gbabiosdump/) (Can't be GBA or non-Nintendo (Game Gear) Virtual Console Titles)
- [GBA or DS Phat / Lite with a GBA flashcard](https://glazedbelmont.github.io/gbabiosdump/)

After dumping the BIOS, it must be renamed to `bios.bin` and then should be placed in `sd:/`, `sd:/gba/`, or `sd:/_gba/` for GBARunner2 to read it.

BIOS를 아래 체크섬과 비교하여 제대로 된 덤프인지 식별할 수 있습니다.

**CRC32:** `81977335`

**MD5:** `a860e8c0b6d573d191e4ec7db1b1e4f6`

**SHA1:** `300c20df6731a33952ded8c436f7f186d25d3492`

**SHA256:** `fd2547724b505f487e6dcb29ec2ecff3af35a841a77ab2e85fd87350abd36570`
