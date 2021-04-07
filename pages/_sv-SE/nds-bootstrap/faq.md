---
lang: sv-SE
layout: wiki
section: nds-bootstrap
category: other
title: FAQ & Felsökning
long_title: nds-bootstrap FAQ & Felsökning
description: Vanliga frågor & Felsökning för nds-bootstrap
---

#### Varför får jag en vit skärm när jag försöker ladda ett spel från SD-kort?
- Kontrollera först [kompatibilitetslistan nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) och se till att ditt spel är kompatibelt
- Prova med alla fusk inaktiverade för det spelet eftersom vissa fusk inte är kompatibla med nds-bootstrap just nu, du kan använda <kbd class="l">L</kbd> för att inaktivera alla fusk för ett spel
- Om spelet du försöker starta är ett DSi Enhanced spel, se då till att TWiLight Menu++ är inställd till att använda `DS Mode`
- Om det fungerade tidigare tar du bort `fatTable` och `patchOffsetCache` i `sd:/_nds/nds-bootstrap/`

#### Varför är det problem med ROM-laddning, även om de körs direkt?
nds-bootstrap patchar ROM-funktioner att köra från ett SD-kort, eftersom ROMs är hårdkodade att läsa från Slot-1. Det finns också timing frågor och AP-åtgärder (som de flesta redan tagits bort), vilket båda skulle orsaka ROMs att inte fungera korrekt. För att förbättra prestandan krymper nds-bootstrap också spelet's heap i minnet vilket bryter vissa spel, även om både forwarders och TWiLight Menu++ har en heap krymp-svartlista för att fixa de icke-fungerande spel som bryts av heap krympa.

#### Varför använda nds-bootstrap över ett vanligt minneskort?
- Vissa kompatibla ROM laddas till RAM-minne, vilket gör det möjligt för laddningstider att vara snabbare än till och med vanliga spelkort
- Du kan utöka VRAM-minnesbussen till 32-bitars
- Utnyttja DSi:ens extra CPU-hastighet
- Förbättra ditt ljud med 48 kHz
- Använd DSi läge, vilket möjliggör DSi:ens funktioner
- Med hjälp av vissa spelkort så kan du använda IR i din applikation
- nds-bootstrap har öppen källkod vilket innebär att utvecklare alltid kan uppdatera det för att fixa buggar och andra saker även om företaget stängs ner
- DS Memory Expansion Pak emuleras vilket innebär spel som kräver tillbehöret kommer att fungera

#### Donor-ROM
De flesta SDK5-spel kan väljas som en Donor ROM (vilket kan göras via TWiLight Menu++). Donor ROMens ARM7 binär kopieras av nds-bootstrap och ersätter ARM7 binär för spelet som den försöker köra. Detta tillåter vissa SDK5-spel att starta och spara.

#### Vad är en nattlig och var får jag det?
En nattlig bygg skapas för den senaste commiten. Nattliga bygg kan vara instabila, men har de senaste buggfixarna inlaggda. Du kan få nattliga bygg för nds-bootstrap [här](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### Varför fungerar inte mina fusk då?
Sättet E fusktyper implementeras i nds-bootstrap är trasigt, vilket innebär att de bara skulle arbeta hälften av tiden. Din fusk använder förmodligen den typen. Det är inte ett fel i fuskdatabasen, utan snarare ett fel på nds-bootstrap. Vänligen begär inte att dessa fusk ska tas bort från DB.

#### Finns det något annat jag borde veta om fusk?
Du kan ställa in heap shrink till `Hi` i inställningarna för lite bättre fuskstöd.

För mer information om fusk, se [här](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats).

#### Felsökning av nds-bootstrap
Om du får problem med att använda den senaste versionen av nds-bootstrap, här är hur du kan felsöka den.

1. Kör allt i 67 MHz, DS läge, med 32 kHz ljud, etc. I grund och botten, hålla allt till DS inställningar. Försök inte att förbättra det med DSi saker
2. Om det fungerade tidigare tar du bort `fatTable` och `patchOffsetCache` i `sd:/_nds/nds-bootstrap/`
3. Det är förmodligen inte så stort av ett problem; fråga i [Discord-servern](https://discord.gg/yD3spjv)

Om servern säger att det är ett problem med nds-bootstrap, kontrollera om spelet inte redan har rapporterats på GitHub. Kontrollera även de stängda problemen om vi hade ett ärende stängt i stället för ett annat. Om spelet inte har något GitHub-problem kopplat till det, gå vidare och gör en ny.

Se också till att lägga till den i kompatibilitetslistan [](https://wiki.ds-homebrew.com/nds-bootstrap/testing) på Google Sheets.
