---
lang: sv-SE
layout: wiki
section: twilightmenu
category: customization
title: Anpassade Unlaunch bakgrunder
description: Hur man gör anpassade Unlaunch bakgrunder och installerar dem med TWiLight Menu++
---

You can find premade Unlaunch backgrounds on the [TWiLight Menu++ skins site](https://skins.ds-homebrew.com/unlaunch/).
{:.alert .alert-info}

Using TWiLight Menu++ you can patch the Unlaunch installer to have a custom background image. This needs to be a 256 x 192 GIF, with a few restrictions:
- Endast den första ramen kommer att visas, inga animerade bakgrunder
- Filen måste vara mindre än eller lika med 15,472 byte
- GIF:ar med mer än 31 färger kräver specialgjorda paletter för att förhindra att texten bryts

### Installation
1. Kopiera GIF-filen till `sd:/_nds/TWiLightMenu/unlaunch/backgrounds`
1. Ladda ner [ den senaste Unlaunch installationsprogrammet](https://problemkaputt.de/unlaunch.zip) och extrahera `UNLAUNCH.DSI` till ditt SD-kort
1. Öppna TWiLight Menu++'s inställningar, växla till `Unlaunch inställningar` och klicka på `Bakgrund`och välj sedan den du vill ha
1. Avsluta inställningar och starta `Unlaunch DSi Installer`
   - Det bör använda din anpassade bild, annars stäng av konsolen och se till att din GIF uppfyller kraven ovan
1. Välj `Installera nu`

### Använda GIF-filer med mer än 31 färger
As the GIF's palette is loaded to the same area of VRAM as the text palettes it will overwrite them if the palette gets too large, however this can be worked around by including the text palettes in the GIF's palettes. Using this with different colors would also let you have different text colors, should you want that. These instructions will be for [GIMP](https://gimp.org), but any image editor capable of rearranging the palette of an image will work.
1. Öppna din bild i GIMP och se till att den är 256 x 192 pixlar
1. I menyraden högst upp väljer du `Image` -> `Mode` -> `Indexed...`
1. Välj `Generate optimum palette` och ställ in de maximala färgerna till allt upp till 226 färger
1. Välj en dithering mönster från `Color dithering` rullgardinsmenyn
   - Bilder utan dithering komprimeras i allmänhet bäst, men med dithering kommer bilden i allmänhet se bättre ut, prova och välj vad ser bäst ut för storleken
1. Klicka på `Convert`
1. I menyraden högst upp väljer du `File` -> `Export As...`, ge det ett namn med tillägget `.gif`, och klicka på `Export`
   - Om det ger några varningar, klicka på acceptera
1. I nästa popup, inaktivera `GIF comment` och klicka på `Export`
1. Kontrollera storleken på den exporterade filen, om det är 15,472 byte eller mindre, hoppa över till steg 13
1. Om din GIF är för stor, använd antingen [gifsicle](http://www.lcdf.org/gifsicle/) eller [ezgif.com](https://ezgif.com/optimize) för att försöka optimera den
   - Dessa instruktioner kommer att använda ezgif eftersom det är enklare att använda
1. Öppna https://ezgif.com/optimize, och ladda upp din GIF
1. Prova olika kompressionsnivåer tills du hittar den bästa under 15,472 bytes (15.11 KiB), helst lite under eftersom GIMP kan öka storleken lite
1. Spara den optimerade GIF-filen och öppna den i GIMP
1. Välj `Windows` -> `Dockable Dialogs` -> `Colormap`
1. Ändra din nuvarande `Foreground color` till #080808 och lägg till 14 nya färger med `+` knappen
    - If your image doesn't have at least 133 colors you will need to keep adding colors until the last is index 146
1. Högerklicka på en färg i Colormap och välj `Rearange Colormap...`
1. Arrange your new colors so they match the ones outlined in red: (The 2nd and 3rd columns starting on the 4th row)<br> ![Palett med rätt textfärger](/assets/images/custom-unlaunch-bg/unlaunch-palette.png)
1. Använd färgväljaren för att få dina nya färger att matcha dem i bilden ovan
1. I menyraden högst upp väljer du `File` -> `Export As...`, ge det ett namn med tillägget `.gif`, och klicka på `Export`
1. I nästa popup, se till att `GIF comment` är avstängd och klicka på `Export`
1. Se till att bilden fortfarande är under 15,472 byte, om den blir för stor så upprepa från steg 10 med en högre komprimeringsnivå
1. Du är klar! Följ avsnittet [Installation](#installing) ovan för att använda din bild!
