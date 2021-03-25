---
lang: sv-SE
layout: wiki
section: other
title: hiyaCFW
description: Information om hiyaCFW
---

Information för [hiyaCFW](https://github.com/RocketRobz/hiyaCFW), världens första CFW för DSi.

### Anpassade startskärmar
Med hiyaCFW kan du använda anpassade startskärmar i antingen `.bmp` eller `.gif`-format. De måste gå i mappen `sd:/hiya` och måste heta `splashtop` för den översta skärmen och `splashbottom` för botten, med lämpligt filändelse, se sedan till att startskärmen är aktiverad i konfigurationen. Bilderna behöver inte vara samma format, så en kan vara BMP och den andra GIF, GIFs har företräde över BMPs. Nedan följer några detaljer om kraven för att dina bilder ska fungera:

#### BMP
- 16-bitars (RGBA 1555, RGB 1555, eller RGB 565)
- 256 x 192 eller mindre

#### GIF
- Enkelt svar: De flesta GIFs som är 256 x 192 eller mindre kommer att fungera
- De kan animeras, men bör stanna under 1 MiB för perfekt prestanda och måste vara under cirka 10 MiB
- Om båda loopas oändligt visas de i 3 sekunder, annars visas de tills båda är klara
- Om en ram har användarinmatning inställd kommer den att vänta tills fördröjningen tar slut eller någon knapp trycks in, beroende på vilken som kommer först
- Sammanflätade och oformaterade textramar ***stöds inte***
- Lokala färgtabeller stöds, men kommer att ersätta hela paletten inklusive kvarvarande bild från tidigare bildrutor, så bilder som använder dem kommer sannolikt att ha palettproblem
