---
lang: es-ES
layout: wiki
section: gbarunner2
title: Información BIOS de GBA
description: Acerca de la BIOS de GBA y cómo volcarla
---

Para que GBARunner2 pueda lanzar juegos, se necesita una copia de la BIOS de GBA. Las versiones más recientes de GBARunner2 (que vienen con las últimas actualizaciones de TWiLight Menu++) llevan incorporada [la BIOS Open Source de Normatt](https://github.com/Normmatt/gba_bios). Sin embargo, al no ser una copia exacta, usar la BIOS oficial aumenta la compatibilidad. Puedes hacer un volcado de una BIOS de GBA oficial con uno de los siguientes métodos.

### Guías de Volcado

- [GBA/DS/DS Lite con una flashcart GBA o una 3DS](https://glazedbelmont.github.io/gbabiosdump/)
   - **No** es posible volcar la BIOS de GBA en una DSi
- [Wii (excepto la edición familiar)/GameCube, GBA, y Link Cable Dumper](https://github.com/FIX94/gba-link-cable-dumper)

Tras volcar la BIOS, debe renombrarse como `bios.bin` y colocarla en la raíz de la tarjeta o en alguna de las carpetas `sd:/gba/` o `sd:/_gba/` para que GBARunner2 pueda leerla.

Puedes verificar el volcado de la BIOS comparándola con los siguientes checksums:

GBA/GBA SP/Game Boy Micro/Game Boy Player:
- **CRC-32:** `81977335`
- **MD5:** `a860e8c0b6d573d191e4ec7db1b1e4f6`{:.wrap}
- **SHA-1:** `300c20df6731a33952ded8c436f7f186d25d3492`{:.wrap}
- **SHA-256:** `fd2547724b505f487e6dcb29ec2ecff3af35a841a77ab2e85fd87350abd36570`{:.wrap}

Familia de consolas DS/DS Lite/3DS:
- **CRC-32:** `a6473709`
- **MD5:** `1c0d67db9e1208b95a1506b1688a0ad6`{:.wrap}
- **SHA-1:** `c11531d5261006810cdc954bd4bec0afe3187b35`{:.wrap}
- **SHA-256:** `782eb3894237ec6aa411b78ffee19078bacf10413856d33cda10b44fd9c2856b`{:.wrap}

Si no sabes cómo calcular el checksum de un archivo, puedes utilizar una [calculadora online de checksum](https://emn178.github.io/online-tools/crc32_checksum.html).
