---
lang: ko-KR
layout: wiki
section: gbarunner2
title: GBA BIOS 정보
description: GBA BIOS에 관한 정보와 덤프하는 방법
---

GBARunner2에서 게임을 로드하기 위해, GBA BIOS의 덤프파일이 필요합니다. (TWiLight Menu++의 최신 빌드와 함께 딸려나오는) GBARunner2의 최신 빌드는 [Normatt's Open Source BIOS](https://github.com/Normmatt/gba_bios)가 기본으로 내장되어있습니다. 그러나, 완전한 복사본이 아니기 때문에 공식 BIOS의 덤프를 이용하면 호환성이 높아집니다. 아래 방법들중 하나를 통해 공식 GBA BIOS를 덤프할 수 있습니다.

### 덤핑 가이드

- [GBA 플레시카드가 있는 GBA/DS/DS Lite나 3DS](bios-dump)
   - DSi에서는 GBA BIOS를 덤핑할 수 **없습니다.**
- [(패밀리 에디션이 아닌) Wii/게임큐브, GBA, 링크 케이블 덤퍼](https://github.com/FIX94/gba-link-cable-dumper)

BIOS를 덤핑 한 후 이름을 `bios.bin`으로 변경하여야 하며, GBARunner2가 읽을 수 있도록 `sd:/`, `sd:/gba/`, 또는 `sd:/_gba/`에 파일을 위치시켜야 합니다.

BIOS를 아래 체크섬과 비교하여 제대로 된 덤프인지 식별할 수 있습니다.

GBA/GBA SP/게임 보이 마이크로/게임 보이 플레이어:
- **CRC-32:** `81977335`
- **MD5:** `a860e8c0b6d573d191e4ec7db1b1e4f6`{:.wrap}
- **SHA-1:** `300c20df6731a33952ded8c436f7f186d25d3492`{:.wrap}
- **SHA-256:** `fd2547724b505f487e6dcb29ec2ecff3af35a841a77ab2e85fd87350abd36570`{:.wrap}

DS/DS Lite/3DS 패밀리:
- **CRC-32:** `a6473709`
- **MD5:** `1c0d67db9e1208b95a1506b1688a0ad6`{:.wrap}
- **SHA-1:** `c11531d5261006810cdc954bd4bec0afe3187b35`{:.wrap}
- **SHA-256:** `782eb3894237ec6aa411b78ffee19078bacf10413856d33cda10b44fd9c2856b`{:.wrap}

If you don't know how to obtain a file checksum, you can use an [online checksum calculator](https://emn178.github.io/online-tools/crc32_checksum.html).
