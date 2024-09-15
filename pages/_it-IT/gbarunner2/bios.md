---
lang: it-IT
layout: wiki
section: gbarunner2
title: Info BIOS GBA
description: Informazioni sul BIOS GBA e su come scaricarlo
---

Affinché GBARunner2 possa avviare i titoli, è necessario un dump del BIOS GBA. Le build più recenti di GBARunner2 (che vengono fornite con l'ultima versione di TWiLight Menu++) hanno integrato [il BIOS Open Source](https://github.com/Normmatt/gba_bios) di Normatt. Tuttavia, poiché non è una copia esatta, utilizzare un dump del BIOS ufficiale aumenta la compatibilità. È possibile scaricare un BIOS del GBA ufficiale con uno dei seguenti metodi.

### Guide al dumping

- [GBA/DS/DS Lite con flashcard GBA o 3DS](bios-dump)
    - Non **è** possibile scaricare il BIOS del GBA su un DSi
- [Wii (non family edition)/GameCube, GBA, e link cable dumper](https://github.com/FIX94/gba-link-cable-dumper)

Dopo il dump del BIOS, deve essere rinominato in `bios.bin` e posizionato in `sd:/`, `sd:/gba/`, o in `sd:/_gba/` per farlo leggere a GBARunner2.

Puoi verificare che il tuo BIOS sia un dump corretto confrontandolo con i seguenti checksum:

GBA/GBA SP/Game Boy Micro/Game Boy Player:
- **CRC-32:** `81977335`
- **MD5:** `a860e8c0b6d573d191e4ec7db1b1e4f6`{:.wrap}
- **SHA-1:** `300c20df6731a33952ded8c436f7f186d25d3492`{:.wrap}
- **SHA-256:** `fd2547724b505f487e6dcb29ec2ecff3af35a841a77ab2e85fd87350abd36570`{:.wrap}

Famiglia DS/DS Lite/3DS:
- **CRC-32:** `a6473709`
- **MD5:** `1c0d67db9e1208b95a1506b1688a0ad6`{:.wrap}
- **SHA-1:** `c11531d5261006810cdc954bd4bec0afe3187b35`{:.wrap}
- **SHA-256:** `782eb3894237ec6aa411b78ffee19078bacf10413856d33cda10b44fd9c2856b`{:.wrap}

Se non sai come ottenere un file checksum, puoi usare un [calcolatore di checksum online](https://emn178.github.io/online-tools/crc32_checksum.html).
