---
lang: sv-SE
layout: wiki
section: gbarunner2
title: GBA BIOS Info
description: Information om GBA BIOS och hur man dumpar den
---

För att GBARunner2 ska kunna ladda titlar krävs en dump av GBA BIOS. Nyare versioner av GBARunner2 (som kommer med den senaste versionen av TWiLight Menu++) har [Normats Open Source BIOS](https://github.com/Normmatt/gba_bios) inbyggd. Men eftersom det inte är en exakt kopia, genom att använda en dump av den officiella BIOSen ökas kompatibilitet. Du kan dumpa en officiell GBA BIOS med en av följande metoder.

### Dumping guider

- [Wii (inte family edition) / GameCube + länkkabel dumper](https://github.com/FIX94/gba-link-cable-dumper)
- [3DS med de flesta Virtual Console titlarna](https://glazedbelmont.github.io/gbabiosdump/) (Kan inte vara GBA eller icke-Nintendo (Game Gear) Virtual Console titlar)
- [GBA eller DS Phat / Lite med ett GBA minneskort](https://glazedbelmont.github.io/gbabiosdump/)

Efter dumpning av BIOSen så måste den döpas om till `bios. i` och sedan bör placeras i `sd:/`, `sd:/gba/`, eller `sd:/_gba/` för GBARunner2 att läsa den.

Du kan verifiera att din BIOS är en riktig dump genom att jämföra den med följande kontrollsummor:

**CRC32:** `81977335`

**MD5:** `a860e8c0b6d573d191e4ec7db1b1e4f6`

**SHA1:** `300c20df6731a33952ded8c436f7f186d25d3492`

**SHA256:** `fd2547724b505f487e6dcb29ec2ecff3af35a841a77ab2e85fd87350abd36570`
