---
lang: it-IT
layout: wiki
section: gbarunner2
title: Info BIOS GBA
description: Informazioni sul BIOS GBA e su come scaricarlo
---

Affinché GBARunner2 possa caricare i titoli, è necessario un dump del BIOS GBA. Le build più recenti di GBARunner2 (che vengono fornite con l'ultima versione di TWiLight Menu++) hanno integrato [il BIOS Open Source](https://github.com/Normmatt/gba_bios) di Normatt. Tuttavia, perché non è una copia esatta, utilizzando un dump del BIOS ufficiale aumenta la compatibilità. È possibile scaricare un BIOS del GBA ufficiale con uno dei seguenti metodi.

### Guide al Dumping

- [Wii (non family edition) / GameCube + dumper cavo link](https://github.com/FIX94/gba-link-cable-dumper)
- [3DS che utilizza la maggior parte dei titoli Virtual Console](https://glazedbelmont.github.io/gbabiosdump/#virtual-console-title-from-a-3ds) (Non possono essere titoli Virtual Console GBA o non-Nintendo (Game Gear)
- [GBA o DS originale / Lite con una cartuccia GBA](https://glazedbelmont.github.io/gbabiosdump/#gameboy-advance-sp-micro-ds-ds-lite)

Dopo il dump del BIOS, deve essere rinominato in `bios.in` e dovrebbe essere posizionato in `sd:/`, `sd:/gba/`, o `sd:/_gba/` per farlo leggere a GBARunner2.

Puoi verificare che il tuo BIOS sia un dump corretto confrontandolo con i seguenti checksum:

**CRC32:** `81977335`

**MD5:** `a860e8c0b6d573d191e4ec7db1b1e4f6`

**SHA1:** `300c20df6731a33952ded8c436f7f186d25d3492`

**SHA256:** `fd2547724b505f487e6dcb29ec2ecff3af35a841a77ab2e85fd87350abd36570`
