---
lang: es-ES
layout: wiki
section: gbarunner2
title: Información BIOS de GBA
description: Acerca de la BIOS de GBA y cómo volcarla
---

Para que GBARunner2 pueda lanzar juegos, se se necesita una copia de la BIOS de GBA. Las versiones más recientes de GBARunner2 (que vienen con las últimas actualizaciones de TWiLight Menu++) llevan incorporada [la BIOS Open Source de Normatt](https://github.com/Normmatt/gba_bios). Sin embargo, al no ser una copia exacta, usar la BIOS oficial aumenta la compatibilidad. Puedes hacer un volcado de una BIOS de GBA oficial con uno de los siguientes métodos.

### Guías de Volcado

- [Wii (no la Family Edition) / GameCube + Link Cable Dumper](https://github.com/FIX94/gba-link-cable-dumper)
- [3DS para la mayoría de títulos de la Virtual Console](https://glazedbelmont.github.io/gbabiosdump/#virtual-console-title-from-a-3ds) (no pueden ser de GBA o títulos que no sean de Nintendo (Game Gear))
- [GBA or DS Phat / Lite with a GBA flashcart](https://glazedbelmont.github.io/gbabiosdump/#gameboy-advance-sp-micro-ds-ds-lite)

Tras volcar la BIOS, debe renombrarse como `bios.bin` y colocarla en la raíz de la tarjeta o en alguna de las carpetas `sd:/gba/` o `sd:/_gba/` para que GBARunner2 pueda leerla.

Puedes verificar el volcado de la BIOS comparándola con los siguientes checksums:

**CRC32:** `81977335`

**MD5:** `a860e8c0b6d573d191e4ec7db1b1e4f6`

**SHA1:** `300c20df6731a33952ded8c436f7f186d25d3492`

**SHA256:** `fd2547724b505f487e6dcb29ec2ecff3af35a841a77ab2e85fd87350abd36570`
