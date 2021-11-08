---
lang: fr-FR
layout: wiki
section: gbarunner2
title: Info du BIOS GBA
description: Informations sur le BIOS GBA et comment le copier
---

Pour que GBARunner2 puisse charger des jeux, une copie du BIOS GBA est nécessaire. Les nouvelles versions de GBARunner2 (qui viennent avec la dernière version de TWiLight Menu++) ont [le BIOS Open Source de Normatt](https://github.com/Normmatt/gba_bios) intégrés. Cependant, comme ce n'est pas une copie exacte, l'utilisation d'une copie du BIOS officiel augmente la compatibilité. Vous pouvez copier un BIOS GBA officiel avec l'une des méthodes suivantes.

### Tutoriels de dumping

- [Wii (pas d'édition familiale)/GameCube + câble lien dumper](https://github.com/FIX94/gba-link-cable-dumper)
- [3DS utilisant la plupart des jeux Console Virtuelle](https://glazedbelmont.github.io/gbabiosdump/#virtual-console-title-from-a-3ds) (ne peut pas être des titres GBA ou non-Nintendo (Game Gear))
- [GBA ou DS Phat/Lite avec un linker GBA](https://glazedbelmont.github.io/gbabiosdump/#gameboy-advance-sp-micro-ds-ds-lite)

Après la copie du BIOS, il doit être renommé en `bios.bin` et doit ensuite être placé dans `sd:/`, `sd:/gba/`, ou `sd:/_gba/` pour que GBARunner2 le lise.

Vous pouvez vérifier que votre BIOS est une bonne copie en le comparant avec les sommes de contrôle suivantes :

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
