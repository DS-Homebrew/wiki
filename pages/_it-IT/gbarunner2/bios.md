---
lang: it-IT
layout: wiki
section: gbarunner2
title: Info BIOS GBA
description: Informazioni sul BIOS GBA e su come scaricarlo
---

Affinché GBARunner2 possa caricare i titoli, è necessario un dump del BIOS GBA. Le build più recenti di GBARunner2 (che vengono fornite con l'ultima versione di TWiLight Menu++) hanno integrato [il BIOS Open Source](https://github.com/Normmatt/gba_bios) di Normatt. Tuttavia, perché non è una copia esatta, utilizzando un dump del BIOS ufficiale aumenta la compatibilità. È possibile scaricare un BIOS del GBA ufficiale con uno dei seguenti metodi.

### Guide al Dumping

- [GBA/DS/DS Lite with GBA flashcart or 3DS](https://glazedbelmont.github.io/gbabiosdump/)
- [Wii (not Family edition)/GameCube, GBA, and link cable dumper](https://github.com/FIX94/gba-link-cable-dumper)

Dopo il dump del BIOS, deve essere rinominato in `bios.in` e dovrebbe essere posizionato in `sd:/`, `sd:/gba/`, o `sd:/_gba/` per farlo leggere a GBARunner2.

Puoi verificare che il tuo BIOS sia un dump corretto confrontandolo con i seguenti checksum:

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
