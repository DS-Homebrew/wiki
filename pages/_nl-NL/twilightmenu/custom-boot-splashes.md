---
lang: nl-NL
layout: wiki
section: twilightmenu
category: customization
title: Aangepaste Opstartschermen
description: Hoe gebruik je aangepaste opstartschermen voor TWiLight Menu++
---

Je kunt aangepaste GIF-bestanden gebruiken om aangepaste opstartschermen te hebben tijdens het opstarten van TWiLight Menu++. Ze moeten `splashtop.gif` en `splashbottom.gif` heten en in `sd:/_nds/TWiLightMenu/extras` staan, stel dan `DSi Splash Screen` in op `Custom` in TWiLight Menu++ instellingen.

De meeste GIF-bestanden tot 256x192 zouden moeten werken, met een paar uitzonderingen:
- GIF-bestanden van meer dan 1 MiB (DSi Mode) of 256 KiB (DS Mode) mogelijk niet op volle snelheid afgespeeld kunnen worden omdat ze tijdens het afspelen worden gedecomprimeerd
- Tussen beide moeten de GIF's minder dan ongeveer 10 MB (DSi-modus) of ongeveer 2 MB (DS-modus) zijn
- Als beide GIF's zijn ingesteld om eeuwig te werken, worden ze 3 seconden getoond, dus stel een lusaantal in op tenminste één GIF om de tijd te bedienen
- De gebruikersinvoer wordt ondersteund, dus stel deze in en een lange vertraging op een frame als u een opslagscherm wilt tonen en wacht per de standaardinstellingen
   - Alleen de GIF die wacht op invoer wordt gepauzeerd, zodat de andere verder kan animeren
- Bij gebruik van Lokale Kleurentabellen moet het hele frame worden overschreven, omdat het hele schermpalet wordt vervangen, niet alleen het huidige frame
- Interlaced en tekstframes werken niet
