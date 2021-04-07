---
lang: sv-SE
layout: wiki
section: ds-index
category: reference
title: Nintendo DSi / Nintendo 3DS TWL_FIRM
description: Information om Nintendo DSi och Nintendo 3DS TWL_FIRM
---

### Konfigurera CFW
Medan de flesta av fördelarna med custom firmware är för Nintendo DSi och Nintendo 3DS familjerna, så låter den dig låsa upp flera möjligheter med din konsol. Att installera custom firmware är ganska enkelt, och i de flesta fall är allt man behöver ett (mikro)SD kort. Vi har de bästa guiderna som du kan följa, med steg-för-steg-instruktioner.

- [3DS Hacking Guide](https://3ds.hacks.guide)
   - Lightning kommando: `mod 3ds`
   - Kuriisu kommando: `guide 3ds`
- [DSi Hacking Guide](https://dsi.cfw.guide)
   - Lightning kommando: `mod dsi cfw`
   - Kuriisu kommando: `guide dsi`

### CPU Hastigheter
Nintendo DS släpptes år 2004 med en 67 Mhz processor. Nintendo DSi släpptes år 2009 med en 133 Mhz processor. De flesta DS-spel gjordes innan Nintendo DSi kom ut, och därför hade de bara en 67 Mhz processor tillgänglig. Vissa program var bundna till den frekvensen, och fungerade därför inte bra med en högre frekvens. De flesta spel skulle däremot prestera bättre än orginalet med en högre frekvens.

nds-bootstrap har TWL Clock Speed som ett alternativ, men det kommer inte att försöka justera ROM för att arbeta med den högre klockhastigheten. Det är på själva programmet, och program som inte fungerar med en högre klockfrekvens är INTE en bugg på nds-bootstraps ända.

### Nintendo DSi system-menyn
Nintendo DSi systemmenyn använder en signerad 32-bitars integer för att bestämma mängden ledigt utrymme på enheten. Genom att använda en enhetskälla som går över 32-bitars heltalsgräns svämmas det över till ett negativt tal, som kraschar till  en "An error has occured" skärm.

De intervall som gör att det svämmar över bestäms av flera par av två. Till exempel är 1-2 GB ledigt utrymme tillåtet medan 3-4 inte är det. Till exempel är 5-6 GB ledigt utrymme tillåtet medan 7-8 inte tillåts.

Denna krasch kommer aldrig att inträffa om systemmenyn startas från ett faktiskt NAND-chip (eftersom det maxar till 128 MB), men ett omdirigeringssystem (såsom hiyaCFW) skulle orsaka detta. Lyckligtvis kan denna bugg enkelt fixas genom att placera dummy filer för att ställa räknaren till ett positivt antal. hiyaCFW kommer automatiskt att göra detta åt dig i den senaste versionen.

I version 1.4.0, RSA signaturer i DS korts vitlista verifieras inte. Det finns en exploit om en sårbarhet i Nintendo DSi minneskorts vitlistan som gör att du kan få kontroll över ARM9 processor. Det kräver version 1.4.0 (det var patchad i framtida versioner och fanns inte i tidigare versioner) och ett minneskort med modifierad ROM.

### Nintendo DSi Slot-1 tillgång & blockout
Slot-1 tillgång blockeras när du lanserar program från systemmenyn, förutom om nämnda program är antingen själva Slot-1 launchern eller Systeminställningarna. För att starta slot-1 spelkort som vanligtvist inte kan öppnas så måste du antingen utnyttja Systemintällningarna eller installera Unlaunch. Utan någon av dessa så kan du inte starta dessa minneskort och du kan inte dumpa ROM till ditt SD-kort.

Minneskort vitlistan kontrolleras via RSA signaturer och ingår via RSA nycklar på varje firmware förutom 1.4.0. Detta innebär att människor kan vitlista sina egna kort

Före 1.4.0 så använde vitlistan endast två sektioner. I 1.4.0 har dem infört en tredje sektion som gjordes för att blockera minneskort som kom runt de två första. Den tredje sektionen lägger upp till åtta olika sektioner av ROM:en och kontrollerar dem med en hash för att se om ROM:en har manipulerats. Men på grund av glömskan att lägga in någon saniteringskoll så kan vi överflöda in i undantaget vektor / avbryta adressen med ett tillräckligt stort värde. Bäst av allt, detta körs på ARM7 (aka säkerhetsprocessorn) så detta gör det till den första bedriften för ARM7-processorn. Eftersom detta händer innan låsningen ur SCFG-registren kan vi köra avancerade homebrew (såsom Slot-1 dumpare & externa slot-1 dumpare)

Tyvärr är kraven stränga. Den kräver version 1.4.0 och ett minneskort med modifierad ROM. Dessutom har bedriften aldrig officiellt kommit ut pga. att Unlaunch är mycket enklare att installera och har mindre krav (bara ett sätt att komma in i homebrew) med samma fördelar.

### Nintendo DSi Kamera
Nintendo DSi Kamera appen har möjlighet att ta bilder i JPEG och spara dem till antingen Systemminnet eller SD-kortet. Sättet det laddas begränsar det till endast bilder skapade på DSI:en på grund av att det saknas rätt HMAC lagrad inuti en anpassad EXIF-tagg. Alla anpassade bilder är inte läsbara på DSi, oavsett om det tagits eller redigerats på PC.

En `pit.bin` fil används för att ladda bilder. Dock är sidhuvudets storlek vid offset 0x16 okontrollerad, så att ett tillräckligt stort header-storleksvärde kan överskrida gränserna och orsaka bufferten att skriva över och hoppa till osignerad kod. Detta är hur Memory Pit drivs.

### Nintendo DSi bootstage 2
Den andra startfasen av Nintendo DSi laddar launcherns "title.tmd" till minne. De anger dock inte en filstorlekskontroll, vilket innebär att de första 80k byten laddas in i RAM medan resten kan vara en anpassad payload. Detta är grunden för Unlaunch exploiten.

### RTCom
RTCom är användningen av 3DS RTC för att tillåta ARM7 och ARM11 processorer att kommunicera med varandra, även i TWL_FIRM. Detta gör det möjligt att använda 3DS funktioner i DS(i) läge. Detta inkluderar circle paddens ingång, möjliggör widescreen, och har gyro stöd. För närvarande är den enda offentliga DS homebrew som använder RTCom är vissa versioner av GBARunner2 som har stöd för 3DS gyro funktionen. För att aktivera RTCom, måste du använda [TWPatch](https://gbatemp.net/threads/542694/).
