---
lang: sv-SE
layout: wiki
section: twilightmenu
category: customization
title: Anpassade typsnitt
description: Hur du använder dina egna typsnitt med TWiLight Meny++
---

TWiLight Menu++ kan använda anpassade typsnitt i formatet NFTR (Nitro FonT Resource). De kommer att användas i inställningar, manualens titlar och i Nintendo DSi, Nintendo 3DS, SEGA Saturnus och Homebrew Launcher teman.

### Inkluderad teckensnittsinfo
Det finns tre typsnitt som ingår i TWiLight Menu++. När TWiLight Menu++ körs i DSi Läge så innehåller de alla de tecken som ska behövas för alla språk som TWiLight översätts till, men när de körs i DS-läge är de mer begränsade på grund av RAM-begränsningar. Dessa begränsningar är:
- Standard: Detta använder det officiella DSi-teckensnittet eftersom det är det primära teckensnittet och stöder alla tecken som används i TWiLight Menu++ på alla språk i DS-läge
- Kinesiska (förenklad): Detta använder Noto Sans CS som det primära teckensnittet och har betydligt fler kinesiska (förenklade) tecken i DS-läge, på bekostnad av tecken för andra språk
- Koreanska: Detta är identiskt med Standard i DSi Mode, men i DS Mode har det en mer komplett uppsättning hangul, på bekostnad av tecken för andra språk

### Mappstruktur
Anpassade typsnitt laddas från `sd:/_nds/TWiLightMenu/extras/fonts/[typsnittsnamn]/[typsnittsfil].ftr`, där `[typsnittsnamn]` är det namn du vill ha och `[typsnittsfil].ftr` är en av följande:
- `large-ds.nftr`, `large-dsi.nftr`, eller `large.nftr`: Större teckensnitt som används för titlar
- `small-ds.nftr`, `small-dsi.nftr`, eller `small.nftr`: Den mindre typsnitt som används för de flesta andra text

Filerna `-ds` och `-dsi` har högre prioritet än den vanliga och om de hittas kommer de att användas när TWiLight Menu++ körs i DS eller DSi Mode respektive.

### Att generera anpassade typsnitt
Du kan göra dina egna typsnitt med ett verktyg som Pk11's [nftr-editor](https://pk11.us/nftr-editor/). För att regenerera ett av TWiLight Menu++'s befintliga typsnitt med det:
1. Ladda en NFTR-fil i nftr-editor
1. Skriv in namnen på de typsnitt du vill använda från högsta till lägsta prioritet i textrutan `Input font` kommaseparerad
   - Du kan se en förhandsvisning av inmatningsformaten i den övre rutan till vänster och den nuvarande NFTR i den nedre rutan
1. Klicka på `Generate from font`, tryck på `OK` för att regenerera befintliga tecken eller `Avbryt` för att regenerera specialknapptecken (t. ex. &#xE000;)
1. Klicka på `Save` och upprepa sedan för andra storlekar
