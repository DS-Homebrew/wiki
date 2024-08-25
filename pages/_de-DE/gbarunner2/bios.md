---
lang: de-DE
layout: wiki
section: gbarunner2
title: GBA-BIOS-Informationen
description: Informationen über das GBA-BIOS und wie man es dumpt
---

Damit GBARunner2 Titel laden kann, wird ein Dump des GBA-BIOS benötigt. Neuere Builds von GBARunner2 (die mit der neuesten Version von TWiLight Menu++ ausgeliefert werden) haben [Normatt's Open Source BIOS](https://github.com/Normmatt/gba_bios) integriert. Da es sich jedoch nicht um eine exakte Kopie handelt, erhöht die Verwendung eines Dumps des offiziellen BIOS die Kompatibilität. Sie können ein offizielles GBA-BIOS mit einer der folgenden Methoden dumpen.

### Dumping-Anleitungen

- [GBA/DS/DS Lite mit GBA-Flashcart oder 3DS](bios-dump)
   - Es ist **nicht** möglich, das GBA-BIOS auf einem DSi zu dumpen
- [Wii (nicht Family Edition)/GameCube, GBA und Link-Kabel-Dumper](https://github.com/FIX94/gba-link-cable-dumper)

Nach dem Dump des BIOS muss es in `bios.bin` umbenannt werden und sollte dann in `sd:/`, `sd:/gba/` oder `sd:/_gba/` abgelegt werden, damit GBARunner2 es lesen kann.

Sie können überprüfen, ob Ihr BIOS ein korrekter Dump ist, indem Sie es mit den folgenden Prüfsummen vergleichen:

GBA/GBA SP/Game Boy Micro/Game Boy Player:
- **CRC-32:** `81977335`
- **MD5:** `a860e8c0b6d573d191e4ec7db1b1e4f6`{:.wrap}
- **SHA-1:** `300c20df6731a33952ded8c436f7f186d25d3492`{:.wrap}
- **SHA-256:** `fd2547724b505f487e6dcb29ec2ecff3af35a841a77ab2e85fd87350abd36570`{:.wrap}

DS/DS Lite/3DS-Familie:
- **CRC-32:** `a6473709`
- **MD5:** `1c0d67db9e1208b95a1506b1688a0ad6`{:.wrap}
- **SHA-1:** `c11531d5261006810cdc954bd4bec0afe3187b35`{:.wrap}
- **SHA-256:** `782eb3894237ec6aa411b78ffee19078bacf10413856d33cda10b44fd9c2856b`{:.wrap}

Wenn Sie nicht wissen, wie Sie die Prüfsumme einer Datei ermitteln können, können Sie einen [Online-Prüfsummenrechner](https://emn178.github.io/online-tools/crc32_checksum.html) verwenden.
