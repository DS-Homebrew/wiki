---
lang: hu-HU
layout: wiki
section: twilightmenu
category: customization
title: Testreszabott Unlaunch hátterek
description: How to make custom Unlaunch backgrounds and install them using TWiLight Menu++
---

A TWiLight Menu++ használatával patchelheted az Unlaunch installert, hogy egyedi háttérképpel rendelkezzen. Ez egy 256 x 192 GIF fájl kell legyen, a néhány korlátozással:
- Csak az első képkocka kerül bemutatásra, nincs animált háttér
- A fájlnak 15,472 bájtosnak, vagy annál kisebbnek kell lennie
- A 31 színnél többel rendelkező GIF-ek esetén speciálisan készült paletta szükséges, hogy megelőzze a szöveg összetörését

### Telepítés
1. Másold a GIF fájlt az `sd:/_nds/TWiLightMenu/unlaunch/backgrounds` mappába
1. Töltsd le a [legfrissebb Unlaunch telepítőt](https://problemkaputt.de/unlaunch.zip) és csomagold ki az `UNLAUNCH.DSI`-t az SD kártyádra
1. Nyisd meg a TWiLight Menu++ beállításokat, és válts az `Unlaunch beállítások` oldalra, és kattints a `Háttér`-re, majd válaszd ki amelyiket szeretnéd
1. Lépj ki a beállításokból és indítsd el az `Unlaunch DSi Installer`-t
   - Használnia kell majd az egyedi képedet, ha mégsem, akkor kapcsold ki a konzolod, és ellenőrizd, hogy a GIF fájlod megfelel-e a fenti követelményeknek
1. Válaszd az `Install Now` opciót

### 31 színnél többel rendelkező GIF használata
Mivel a GIF palettája VRAM-ba ugyanoda került betöltésre, ahova a szöveg paletta is, az felül fogja írni, ha a paletta túl nagy; ez azonban megkerülhető azzal, ha a szöveg palettát beleágyazzuk a GIF palettába. Ezt más színekkel használva lehetővé teszi az eltérő szöveg színeket, ha azt szeretnéd. Ezek az instrukciók [GIMP](https://gimp.org)-hez készültek, de bármilyen képszerkesztő, ami tudja egy kép palettájának átrendezését megfelel a munkára.
1. Nyisd meg a képedet a GIMP-ben és ellenőrizd, hogy a mérete 256 x 192 pixel
1. A menüben felül válaszd a `Kép` -> `Mód` -> `Indexelt...` opciókat
1. Válaszd az `Optimális paletta előállítása` opciót, és állíts a színek maximális számát 226-ra
1. Válassz egy színszórás (dithering) mintát a `Színszórás` lenyíló listából
   - A képek színszórás nélkül általában jobban tömöríthetők, de vele általában jobban néznek ki; próbáld ki melyik néz ki jobban a mérethez
1. Kattints az `Átalakítás` gombra
1. A menüben felül válaszd az `Fájl` ->`Exportálás másként...` opciót, majd adj neki nevet a `.gif` kiterjesztéssel és kattints az `Exportálás` gombra
   - Ha bármilyen figyelmeztetést ad, kattints az Elfogad gombra
1. A következő előugró ablakban tilts le a `GIF-megjegyzés`-t és kattints az `Exportálás` gombra
1. Ellenőrizd az exportált fájl méretét, hogy 15 472 bájt vagy kisebb lett-e, és ha igen, ugorj a 13. lépésre
1. Ha a GIF-ed túl nagy, akkor vagy a [gifsicle](http://www.lcdf.org/gifsicle/) vagy az [ezgif.com](https://ezgif.com/optimize) használatával próbáld meg optimalizálni
   - Ezek az instrukciók az ezgif használatát mutatják be, ami egyszerű, mert ez egy weboldal
1. Nyisd meg https://ezgif.com/optimize oldalt és töltsd fel a GIF fájlodat
1. Próbálj ki különböző tömörítési szinteket, hogy megtaláld a legjobbat 15 472 bájt alatt (15.11KiB), ideálisan egy kicsit alatta, mert a GIMP még növelheti kicsit a méretet
1. Mentsd le az optimalizált GIF-et, majd nyisd meg GIMP-ben
1. A menüben felül válaszd az `Ablakok` -> `Dokkolható párbeszédablakok` -> `Színtérkép` opciókat
1. Változtasd meg az aktuális `Előtér színt` #080808-ra és adj hozzá 14 új színt a `+` gombbal
    - Ha képed nem tartalmaz legalább 133 színt, akkor szükséged lesz kitöltő színekre, hogy a szöveg színeket a megfelelő helyre rakhasd
1. Kattints jobb gombbal a Színtérképre és válaszd a `Színtérkép újrarendezése...` opciót
1. Rendezd el az új színeket, hogy ehhez igazodjanak: (A 2. és 3. oszlop a 49-es indexnél kezdődik)<br> ![Paletta, helyes szöveg színekkel](https://cdn.discordapp.com/attachments/614278143527878658/770777177904906240/unlaunch-palette.png)
1. Használd a pipettát, hogy az új színeid egyezzenek az alábbi képen lévőkkel
1. A menüben felül válaszd az `Fájl` ->`Exportálás másként...` opciót, majd adj neki nevet a `.gif` kiterjesztéssel és kattints az `Exportálás` gombra
1. A következő előugró ablakban ellenőrizd, hogy a `GIF-megjegyzés` kikapcsolt és kattints az `Exportálás` gombra
1. Ellenőrizd, hogy a fájl mérete még mindig 15 472 bájt alatt van-e; ha túl nagy lett ismételd meg a 10. lépéstől magasabb tömörítési szintet használva
1. Kész vagy! Kövesd a [telepítés](#installing) fejezetet feljebb, a kép használatához!
