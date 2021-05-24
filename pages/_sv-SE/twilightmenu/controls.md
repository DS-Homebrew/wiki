---
lang: sv-SE
layout: wiki
section: twilightmenu
category: other
title: Kontroller
long_title: TWiLight Meny++ Kontroller
description: Kontroller för att använda TWiLight Meny++
---

#### Nintendo DSi, Nintendo 3DS, SEGA Saturnus och Homebrew Launcher teman
- <kbd>Vänster</kbd> / <kbd>höger</kbd>: Välj ett spel / app
- <kbd class="face">A</kbd> / <kbd>START</kbd>: Starta spel / app
- <kbd class="l">L</kbd> / <kbd class="r">R</kbd> eller <kbd>SELECT</kbd> + <kbd>Vänster</kbd> / <kbd>Höger</kbd>: Byt sidor
- (DSi / Saturn / HBL teman) <kbd>SELECT</kbd> + <kbd>Upp</kbd> / <kbd>Ner</kbd> & släpp <kbd>SELECT</kbd>: Växla mellan SD-kort och minneskort
- <kbd class="face">Y</kbd>: Spelspecifika inställningar
   - <kbd class="face">X</kbd>: Fuskmeny
      - <kbd class="face">A</kbd>: Växla på/av fusk
      - <kbd class="face">B</kbd>: Avsluta fuskmenyn
      - <kbd class="face">X</kbd>: Spara och avsluta fuskmenyn
      - <kbd class="face">Y</kbd>: Visa fuskbeskrivning
      - <kbd class="l">L</kbd>: Inaktivera alla fusk
- <kbd class="face">X</kbd>: Ta bort/dölj spel
- (DSi / Saturn / HBL teman) <kbd>SELECT</kbd>: SELECT menyn eller DS Classic menyn (Där systemmenyn, TWiLight Menu++ inställningar och GBA-läge kan nås)

#### R4 tema
- <kbd>Upp</kbd> / <kbd>Ner</kbd>: Välj ett spel / app
- <kbd class="face">A</kbd>: Starta spel / app
- <kbd class="l">L</kbd>: Växla mellan SD-kort och minneskort
- <kbd class="face">Y</kbd>: Spelspecifika inställningar
   - <kbd class="face">X</kbd>: Fuskmeny
      - <kbd class="face">A</kbd>: Växla på/av fusk
      - <kbd class="face">B</kbd>: Avsluta fuskmenyn
      - <kbd class="face">X</kbd>: Spara och avsluta fuskmenyn
      - <kbd class="face">Y</kbd>: Visa fuskbeskrivning
      - <kbd class="l">L</kbd>: Inaktivera alla fusk

#### DS ROM (med nds-bootstrap)
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Upp</kbd> + <kbd class="face">X</kbd> för 1 sekund: Byt skärmarna
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Ned</kbd> + <kbd class="face">A</kbd> i 3 sekunder: Dumpa RAM till `sd:/_nds/nds-bootstrap`, som `ramDump.bin`
- <kbd class="l">L</kbd> + <kbd>Ner</kbd> + <kbd>SELECT</kbd>: Öppna menyn i spelet
   - RAM-läsare
      - <kbd>Upp</kbd> / <kbd>Ner</kbd>: Skrolla
      - <kbd>Vänster</kbd> / <kbd>höger</kbd>: Snabb skrollning
      - <kbd class="face">A</kbd>: Starta RAM-redigerare
      - <kbd class="face">B</kbd>: Återgå till menyn
      - <kbd class="face">Y</kbd>: Ange en adress att hoppa till
        - <kbd>Upp</kbd> / <kbd>Ner</kbd>: Öka / Minska valt värde
        - <kbd>Vänster</kbd> / <kbd>höger</kbd>: Välj ett värde
        - <kbd class="face">A</kbd> / <kbd class="face">B</kbd>: Återgå till RAM-läsare/Editor på angiven adress
   - RAM-redigerare
      - <kbd>Upp</kbd> / <kbd>Ner</kbd> / <kbd>Vänster</kbd> / <kbd>höger</kbd>: Välj ett värde
      - <kbd class="face">A</kbd>: Ändra valt värde
         - <kbd>Upp</kbd> / <kbd>Ner</kbd>: Öka / Minska valt värde med 1h
         - <kbd>Upp</kbd> / <kbd>Ner</kbd>: Öka / Minska valt värde med 10h
         - <kbd class="face">A</kbd> / <kbd class="face">B</kbd>: Slutför
      - <kbd class="face">B</kbd>: Återgå till RAM-läsare
      - <kbd class="face">Y</kbd>: Ange en adress att hoppa till
        - <kbd>Upp</kbd> / <kbd>Ner</kbd>: Öka / Minska valt värde
        - <kbd>Vänster</kbd> / <kbd>höger</kbd>: Välj ett värde
        - <kbd class="face">A</kbd> / <kbd class="face">B</kbd>: Återgå till RAM-läsare/Editor på angiven adress
 - Menyn i spelet är inte tillgänglig i DSi läge, så knappkombon i DSi läge kommer istället avsluta spelet.

#### Boot genvägar
Dessa bör tryckas på TWiLight Menu+ + startskärm / direkt efter Nintendo DSi:ens startskärm.

- <kbd>SELECT</kbd>: Öppna inställningar
- <kbd class="face">A</kbd> + <kbd class="face">B</kbd> + <kbd class="face">X</kbd> + <kbd class="face">Y</kbd>: Återställ alla TWiLight Menu++ inställningar
- <kbd class="face">B</kbd>: Boot the last ran ROM
