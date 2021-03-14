---
lang: sv-SE
layout: wiki
section: twilightmenu
category: customization
title: Anpassade startskärmar
description: Hur du använder anpassade startskärmar för TWiLight Menu++
---

Du kan använda anpassade GIF-filer för att ha anpassade startskärmar när du startar TWiLight Menu++. De måste heta `splashtop.gif` och `splashbotten.gif` och vara i `sd:/_nds/TWiLightMenu/extras`, sätt sedan `DSi startskärm` till `Anpassad` i TWiLight Menu++'s inställningar.

De flesta GIF-filer upp till 256x192 bör fungera, med några undantag:
- GIF files over 1 MiB (DSi Mode) or 256 KiB (DS Mode) may not play at full speed as they will be decompressed on the fly
- Between the two, the GIFs must be less than about 10 MB (DSi Mode) or about 2 MB (DS Mode)
- Om båda GIF-filerna är inställda till att loopa för alltid kommer de att visas i 3 sekunder. Så ange antalen loopar till minst en gång för att styra tiden
- Användarinmatning stöds, så ställ in den och en lång fördröjning på en ram om du vill visa en splash och vänta som standard
   - Endast GIF-filer som väntar på indata kommer att pausas, så den andra kan fortsätta animera
- Om du använder lokala färgtabeller måste hela ramen skrivas över eftersom det kommer att ersätta hela skärmens palett, inte bara den aktuella ramen
- Sammanflätade ramar och textramar fungerar inte
