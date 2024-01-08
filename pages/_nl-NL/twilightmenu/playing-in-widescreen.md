---
lang: nl-NL
layout: wiki
section: twilightmenu
category: other
title: Spelen op Breedbeeld
description: Hoe gebruik je TWiLight Menu++ in breedbeeld op de Nintendo 3DS
---

Dit gedeelte vereist een 3DS-console, waarop een moderne CFW-installatie draait van [3ds.hacks.guide](https://3ds.hacks.guide).
{:.alert .alert-info}

### Installeren
1. Open FBI en selecteer `Remote Install`, gevolgt door `Scan QR Code`
1. Scan deze QR-code om de laatste versie van [Universal-Updater](https://github.com/Universal-Team/Universal-Updater) te installeren<br> ![Universal-Updater QR-code](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. Open Universal Updater vanuit je HOME-menu
1. Installeer het TWPatch-pakket
   - Als je console geen toegang heeft tot het internet, kan je [TWPatch.cia](https://gbatemp.net/download/twpatch.37400/version/38832/download?file=302085) rechtstreeks downloaden en vervolgens installeren met FBI
1. Ga terug naar het HOME-menu en voer TWPatch uit
1. Houd <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> ingedrukt om het patch-menu te openen en `Widescreen patch (384x240 16:10)`
1. (Optioneel!) Voor een minder gepixeld breedbeeld, schakel ook `GPU scaling (blurry, no filters)` in
1. Druk op <kbd class="face">B</kbd> om het patch-menu te verlaten
1. Druk op <kbd>START</kbd> om een `TwlBg.cxi` bestand met breedbeeld te genereren
   - Als het bovenste scherm niet aangeeft dat "wide patch" is ingeschakeld, begin dan opnieuw vanaf stap 3
1. Verplaats `TwlBg.cxi` van `sd:/luma/sysmodules/` naar `sd:/_nds/TWiLightMenu/TwlBg/` (maak een map genaamd `TwlBg`, als die niet bestaat), en hernoem het bestand naar `Widescreen.cxi`
1. Herstart je 3DS terwijl je <kbd>SELECT</kbd> ingedrukt houdt om de configuratie van Luma3DS te openen
1. Activeer `external FIRMs and modules`, druk dan op <kbd>START</kbd> om op te slaan en af te sluiten
1. Open TWiLight Menu++, druk op <kbd class="face">Y</kbd> op het gewenste spel om de instellingen per spel te openen en stel `Screen Aspect Ratio` in op `16:10`

Je bent helemaal klaar! Geniet van je DS-games in breedbeeld!

**LET OP:**
1. Houd <kbd>START</kbd> of <kbd>SELECT</kbd> niet ingedrukt bij het starten van TWLMenu++, als je niet wilt dat het breedbeeld er verstoord uitziet
1. Niet elk spel is geschikt voor breedbeeld. [Hier is een lijst van spellen met breedbeeldondersteuning](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
1. Als je vastzit in breedbeeldmodus in heel TWL_FIRM (inclusief de TWLMenu++ GUI) na het volgen van deze gids en het starten van een breedbeeldcompatibel spel, verwijder dan `TwlBg.cxi` in `sd:/luma/sysmodules/`, en [verwijder](https://wiki.ds-homebrew.com/twilightmenu/uninstalling-3ds) en [installeer](https://wiki.ds-homebrew.com/twilightmenu/installing-3ds) TWiLight Menu++ opnieuw, en volg de bovenstaande gids opnieuw, evenals het gebruik van de originele build van Luma
1. De meeste breedbeeldpatches passen alleen 3D-elementen aan voor breedbeeld, 2D-elementen (zoals menu's) worden alleen uitgerekt
1. Luma3DS **moet** worden geladen vanaf de SD-kaart, als breedbeeld niet werkt, zorg er dan voor dat je `boot.firm` in de root van je SD hebt staan
