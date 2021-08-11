---
lang: sv-SE
layout: faq
section: nds-bootstrap
title: FAQ & Troubleshooting
long_title: nds-bootstrap FAQ & Troubleshooting
description: FAQ & Troubleshooting for nds-bootstrap
---

#### Varför får jag en vit skärm när jag försöker ladda ett spel från SD-kort?
- Kontrollera först [kompatibilitetslistan nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) och se till att ditt spel är kompatibelt
- Prova med alla fusk inaktiverade för det spelet eftersom vissa fusk inte är kompatibla med nds-bootstrap just nu, du kan använda <kbd class="l">L</kbd> för att inaktivera alla fusk för ett spel
- Om det fungerade tidigare tar du bort `fatTable` och `patchOffsetCache` i `sd:/_nds/nds-bootstrap/`

#### nds-bootstrap troubleshooting
If you get issues with using the latest version of nds-bootstrap, here's how you can troubleshoot it.

1. Run the game with different settings, including changing the ARM9 CPU Speed, DS/DSi Mode, sound quality, Card Read DMA, etc
2. Om det fungerade tidigare tar du bort `fatTable` och `patchOffsetCache` i `sd:/_nds/nds-bootstrap/`
3. Det är förmodligen inte så stort av ett problem; fråga i [Discord-servern](https://discord.gg/yD3spjv)

If the server says it's an nds-bootstrap issue, check if the game hasn't been reported already on GitHub. Check the closed issues too in case there has already been an issue closed in preference a different one. If it doesn't have any GitHub issue attached to it, go ahead and make a new one.

Also, make sure you add it to the [compatibility list](https://wiki.ds-homebrew.com/nds-bootstrap/testing) on Google Sheets.

#### Why are there issues with ROM loading, even though they're run natively?
nds-bootstrap patches the ROM functions to run from an SD card, as the ROMs are hardcoded to read from Slot-1. There are also timing issues and AP measures (which most are already removed), both of which will cause the ROMs to not work properly.

#### Why use nds-bootstrap over a regular flashcard?
- Vissa kompatibla ROM laddas till RAM-minne, vilket gör det möjligt för laddningstider att vara snabbare än till och med vanliga spelkort
- Du kan utöka VRAM-minnesbussen till 32-bitars
- Utnyttja DSi:ens extra CPU-hastighet, vilket möjliggör bättre prestanda i vissa spel
- Förbättra ditt ljud med 48 kHz
- Använd DSi läge, vilket möjliggör DSi:ens funktioner
- Med hjälp av vissa spelkort så kan du använda IR i din applikation
- nds-bootstrap har öppen källkod, vilket innebär att utvecklare alltid kan uppdatera det för att fixa buggar och andra saker även om projektet stängs ner
- DS Memory Expansion Pak emuleras vilket innebär spel som kräver tillbehöret kommer att fungera
- Byt ut övre och nedre skärmar i kompatibla spel för mer bekväm gameplay, eller på system med en trasig eller borttagen skärm

#### Donor ROMs
Most SDK5 games can be selected as a Donor ROM (which can be done via TWiLight Menu++). The Donor ROM's ARM7 binary is copied by nds-bootstrap and replaces the ARM7 binary for the game that it is trying to run. This allows certain and SDK5 games to boot and save.

#### What is a nightly and where do I get it?
A nightly build is build for the latest commit. Nightly builds may be unstable, but has the most recent bugfixes added. You can get nightly builds for nds-bootstrap [here](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### Why do my cheats not work?
The way E cheat types are implemented in nds-bootstrap is broken, meaning they'd only work half of the time. Your cheat probably uses that type. It is not a fault of the cheat database, but rather a fault of nds-bootstrap. Please do not request these cheats to get deleted from the DB.

For more info on cheats, check the [Action Replay cheats section of the Retail ROMs page](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats).

