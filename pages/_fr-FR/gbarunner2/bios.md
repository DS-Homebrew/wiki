---
lang: fr-FR
layout: wiki
section: gbarunner2
title: Infos du BIOS GBA
description: Informations sur le BIOS GBA et comment le dumper
---

Pour que GBARunner2 puisse charger des titres, un dump du BIOS GBA est nécessaire. Les versions plus récentes de GBARunner2 (inclues avec la dernière version de TWiLight Menu++) ont le [BIOS Open Source de Normatt](https://github.com/Normmatt/gba_bios) intégré. Cependant, comme il ne s'agit pas d'une copie exacte, l'utilisation d'un dump du BIOS officiel augmente la compatibilité. Vous pouvez dumper un BIOS GBA officiel avec l'une des méthodes suivantes.

### Tutoriels de dumping

- [Une GBA/DS/DS Lite avec un linker GBA ou une 3DS](https://glazedbelmont.github.io/gbabiosdump/)
   - Il n'est **pas** possible de dumper le BIOS GBA sur une DSi
- [Une Wii (pas la Family Edition)/GameCube, GBA, et GBA Link Cable Dumper](https://github.com/FIX94/gba-link-cable-dumper)

Après avoir dumpé le BIOS, il doit être renommé en `bios.bin` et doit ensuite être placé dans `sd:/`, `sd:/gba/`, ou `sd:/_gba/` pour que GBARunner2 puisse le lire.

Vous pouvez vérifier que votre BIOS est un dump correct en le comparant aux sommes de contrôles suivantes :

GBA/GBA SP/Game Boy Micro/Game Boy Player :
- **CRC-32:** `81977335`
- **MD5:** `a860e8c0b6d573d191e4ec7db1b1e4f6`{:.wrap}
- **SHA-1:** `300c20df6731a33952ded8c436f7f186d25d3492`{:.wrap}
- **SHA-256:** `fd2547724b505f487e6dcb29ec2ecff3af35a841a77ab2e85fd87350abd36570`{:.wrap}

DS/DS Lite/famille 3DS :
- **CRC-32:** `a6473709`
- **MD5:** `1c0d67db9e1208b95a1506b1688a0ad6`{:.wrap}
- **SHA-1:** `c11531d5261006810cdc954bd4bec0afe3187b35`{:.wrap}
- **SHA-256:** `782eb3894237ec6aa411b78ffee19078bacf10413856d33cda10b44fd9c2856b`{:.wrap}

Si vous ne savez pas comment obtenir une somme de contrôle de fichier, vous pouvez utiliser un [calculateur de somme de contrôle en ligne](https://emn178.github.io/online-tools/crc32_checksum.html).
