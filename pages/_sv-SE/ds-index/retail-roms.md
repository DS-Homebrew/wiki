---
lang: sv-SE
layout: wiki
section: ds-index
category: reference
title: Retail ROMar
description: Information relaterad till kommersiella DS spel
---

### Anti-piratkopiering
AP (kort för anti-piratkopiering) är en metod som används av utvecklare för att genomdriva lagliga inköp och förhindra piratkopiering. Detta kan kringgås antingen från lastaren eller själva ROMen.

- För nds-bootstraps ändamål kan du ladda en `.ips` -fil för att kringgå nämnda patchar. Denna `.ips` -fil kommer att infogas inuti nds-bootstrap, så att du kan hålla ROM-filerna intakta. Ett paket med `.ips` filer ingår automatiskt med TWiLight Menu++.
- För Wood R4 ändamål så ingår dessa i själva programvaran. Du behöver inte ändra själva ROMen.

Om det inte finns en `.ips` -fil för din ROM, eller om din programvara inte patchade din ROM, så kan du försöka ändra själva ROMen med [nds-scene tool](https://gbatemp.net/download/retrogamefan-nds-rom-tool-v1-0_b1215.35735/)

### CloneBoot
Cloneboot är när ett spel skickar sin egen laddade ARM7 och ARM9 binär till en annan konsol. Detta används av DS Download Play för flerspelarläge med ett kort. Men, inte alla spel som innehåller flerspelarläge med ett kort använder cloneboot.

För närvarande är nds-bootstraps cloneboot patchar trasiga på grund av att ARM7 och ARM9 binärer patchas, vilket gör RSA-signaturer ogiltiga.

### Sparfiler
Nintendo DS spelkort har 4 kända sätt att spara:

- EEPROM - Electrically Erasable Programmable Read-Only Memory
- FLASH
- FRAM - Ferroelectric Random-Access Memory
- NAND - NOT-AND

Det finns DS Kassetter med NAND baserade sparfiler, fast är sällsynta: WarioWare DIY & Jam with the Band (USA)/Daigasso Band Brothers

Det finns olika format att använda beroende på lastaren, men nds-bootstrap använder det råa `.sav`-formatet. Om du använder ett annat format, här är en webbplats som du kan använda för att konvertera den: http://www.shunyweb.info/convert.php

### Assembly
Assembly språk är alla låg nivå programmeringsspråk med en stark koppling mellan språkets instruktioner och processorns instruktioner. På DS, assemblykoden kommer i form av antingen ARM eller THUMB instruktioner, THUMB instruktioner är en delmängd av ARM instruktioner. THUMB är användbart för att spara minnesbandbredd eftersom den använder 16-bitars instruktioner över de vanliga 32-bitars instruktioner som ARM använder. Mer information om assemblyinstruktioner hittar du samt mycket mer teknisk information för DS och DSi, på [GBATEK](https://problemkaputt.de/gbatek.htm).

### Kort DMA
Kort DMA (står för Direct Memory Access) är ett effektivare sätt att läsa patrondata än genom programvara. När det inte finns någon tillgänglig data kan koden fortfarande köras. I programvarors kassett dataläsare, att undersöka registret för att se om det finns ny data slösar tid. Det är det föredragna sättet att komma åt data.

Du kan upptäcka när ett spel som använder dma via nr$gba genom att aktivera DMA-loggen på ARM9. En DMAs tillgång till kassettet använder AF000001 som den tredje parametern.
- Till exempel: `DMA2: 04100010 023C18C0 AF000001`

### Action Replay-fusk
Action Replay-fuskkoder är koder som gör att du kan göra, på en låg-nivå, programmerbara förändringar i minnesregionen i ditt favoritspel. Dessa förändringar varierar från enkla värde tweaks till extremt avancerade ASM tweaks, som båda kan förändra upplevelsen av spelet(en) helt och hållet.

Minneskort kan dra nytta av fuskkoder genom att använda fuskdatabaser. Funktionalitetet integreras i minneskortets kärna. Dessa följande kärnor kan använda fusk:
- Wood R4 (`usrcheat.dat`)
- YSMenu (`usrcheat.dat`)

Homebrew / digitala lösningar kan också dra nytta av fuskdatabaserna, programvarorna som är tillgänglig kan använda följande:
- [NitroHax](https://www.chishm.com/NitroHax) (`cheats.xml`)
   - NitroHax tillåter dig använda fusk med riktiga spelkort från ett minneskort. Motorn som används här laddar hela cheats.xml-databasen in i Nintendo DS:ens begränsade RAM-minne och försöker hantera saker därifrån. Detta innebär att det finns en allvarlig gräns för hur många fusk du kan ha, eftersom NitroHax inte kommer att ladda en cheats.xml fil över 2.4 MB
- [NitroHax3DS](https://github.com/ahezard/NitroHax3DS/releases) ([usrcheat.dat fork](https://github.com/Epicpkmn11/NitroHax3DS/releases)) (`cheats.xml` eller `usrcheat.dat`)
   - NitroHax3DS är en version av NitroHax som körs från systemets SD-kort på DSi eller 3DS. Den ursprungliga versionen använder cheats.xml med samma 2.4 MB gräns, men det finns också en fork som laddar fusk från en usrcheat.dat-databas utan storleksbegränsning
- [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) (`usrcheat.dat`)
   - TWiLight Menu++ läser `usrcheat.dat` och skickar de aktiverade fuskvärdena till en annan fil, som nds-bootstrap plockar upp
   - Fuskmotorn som används i nds-bootstrap är baserad på den som används i NitroHax. Men på grund av fuskfilen som innehåller endast aktiverade fusk för den specifika titeln, finns det bara en gräns för hur många fusk som kan aktiveras, inte en gräns för databasens storlek
   - Bootstrap 4 DS (den nds-bootstrap versionen som används på minneskort) stöder inte fusk, på grund av att det inte finns tillräckligt med RAM, och begränsningarna i Memory Expansion Pack

För den mest kompletta fuskdatabasen rekommenderar vi att du använder den som gjorts av DeadSkullzJr med titeln [DeadSkullzJr's Cheat Database](https://gbatemp.net/threads/deadskullzjrs-nds-cheat-databases.488711).

Fuskkoder har i allmänhet typerna A till E, och här är en beskrivning av dem:

- 0xE-kodtypen är en 32-bitars kodtyp som gör att du kan skriva i många adresser på en gång. I grund och botten så är det som den grundläggande 32-bitars RAM (0x0), förutom detta inte har adresser listade bredvid de värden du vill skriva. Istället är 0xE-kod-typen programmerad att automatiskt grena från en startadress och sedan bestämma adresserna att skriva till. Därifrån behöver du bara ta in det belopp du ska skriva till för att det ska kunna fungera.
