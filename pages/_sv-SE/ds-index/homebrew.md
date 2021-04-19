---
lang: sv-SE
layout: wiki
section: ds-index
category: reference
title: Homebrew
description: Information om homebrew på Nintendo DS
---

### Utveckling

Utveckling av Nintendo DS Homebrew använder vanligtvis devkitPro-verktyg, såsom devkitARM, libnds och libfat. Det finns dock möjlighet att förgrena sig och använda alternativ programvara:

- **SD-kortbibliotek:** [DevkitPro](https://devkitpro.org/) rekommenderar [libfat](https://github.com/devkitPro/libfat). Vi rekommenderar att du använder [libslim](https://github.com/DS-Homebrew/libslim/) istället, eftersom det tillåter användning av olika partitioner, snabbare hastigheter osv
- **Grafikbibliotek:** Vi rekommenderar att du använder [easyGL2D](http://rel.phatcode.net/junk.php?id=117) vilket kommer med libnds automatiskt. Du kan dock använda [NightFox Lib](https://github.com/knightfox75/nds_nflib)
- **Verktygskedjor:** Vi rekommenderar att du använder [devkitARM](https://devkitpro.org/wiki/Getting_Started) och [libnds](https://libnds.devkitpro.org/)eftersom det inkluderar DSi kompatibilitet och har ett större ekosystem. Men för exklusiv användning av minneskort på en Nintendo DS, tveka inte att använda [ToolchainGenericDS](https://bitbucket.org/Coto88/toolchaingenericds)

### Minneskort

DS-mode minneskort är en slot-1 metod för att köra Nintendo DS applikationer. Minneskort har fördelarna med att hålla konsolfiler och bärbara filer separat, möjligheten att användas utan att modda ditt system och kan användas på DS Phat/Lite-konsoler. Till skillnad från att modda själva konsolen finns det dock flera minneskort på marknaden, var och en med olika kärnkrav. Kärnan du använder är det viktigaste.

[Det finns ett minneskort index som **utvecklas fortfarande**](https://nightyoshi370.github.io/mm-github-pages-starter/), som har kärnor, firmware, recensioner och inköpslänkar.

### DLDI

Olika SD-kortplatser har olika maskinvara (för det mesta) och kod skriven för ett kort kommer inte nödvändigtvis att fungera för ett annat kort. DLDI (förkortning för Dynamically Linked Device Interface) försöker lösa detta genom att få SD-kortets hanteringskod patchat in externt. Laddare som YSMenu, Wood R4 och TWiLight Menu++ kan automatiskt DLDI patcha ett homebrew, men om du behöver manuellt patcha in den, använd gärna en [DLDI Patcher](https://www.chishm.com/DLDI#tools) beroende på din enhet.

### Tidsinställd bomb

En tidsinställd bomb är ett utgångsdatum för minneskort-kärnor som tillverkarna använder för att tvinga användare att köpa ett nytt kort. När din systemklocka går längre än ett visst datum, kommer kärnan att vägra att starta upp förbi utgångsskärmen. Tur så är en flagga inte inställd någonstans och det hanteras i minneskortets firmware, vilket ger oss två lösningar runt problemet:

- Eftersom det förlitar sig på systemets klocka så kan du ställa in datum. Detta kommer att bryta alla spel som använder din systemklocka, men det gör att du kan använda standardkärnan.
- Eftersom den förlitar sig på kärnan och inte den inbyggda programvaran så kan du byta till en alternativ kärna. Det finns inga tillgängliga val:
   - [YSmenu](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/) -- Menyn är ganska ful och visar bara `.ds` filer, men det har mycket bättre spelstöd, fuskstöd och kräver inte memory pak
   - [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu) -- Detta är användbart om du vill ha alla dina ROM från olika konsoler i samma meny, Det finns två sätt att köra DS spel med TWiLight Menu++:
      - With nds-bootstrap on flashcard: Requires a Memory Expansion Pak for extended game compatibility and does not support cheats. Men det fungerar på alla minneskort som TWiLight Menu++ har stöd för
      - Med YSMenu: Hämtar kompatibilitetsfördelarna med YSMenu med den bättre menyn av TWiLight Menu++, men fusk stöds inte för närvarande

Vi rekommenderar YSMenu, med TWiLight Menu++ om du föredrar det, på grund av den högre kompatibiliteten och brist på behov av ett Memory Expansion Pak. Om du vill konfigurera YSMenu så har DeadSkullzJr gjort en [Dropbox-repo](https://www.dropbox.com/sh/egadrhxj8gimu5t/AACv2KqWmeXEHkxoYRluobxha?dl=0) med alla primära startkärnor som är konfigurerade för ditt minneskort. Allt det kräver är att dra och släppa filerna till ditt SD-korts rot och du är klar. Instruktioner för hur du installerar TWiLight Menu++ är [på minneskort installationssidan](../twilightmenu/installing-flashcard).

För att testa om ditt minneskort har en tidsinställd bomb, sätt datumet på ditt system till det senaste möjliga värdet och starta minneskortet.

### ARGV Support
ARGV är en informationssändare mellan två homebrew Nintendo DS-program. Den kan användas för forwarders eller alternativa menyer.

- Homebrew måste programmeras för att dra nytta av det. Till exempel GBARunner2, NesDS och GameYob alla har ARGV implementering
- Det måste också finnas ett sätt att ställa in ARGV-variablerna. TWiLight Menu++ och HBMenu gör det möjligt att ställa in argument från ARGV
