---
lang: hu-HU
layout: wiki
section: hiyacfw
title: Forwarder-ek
category: other
description: Hogyan használd az nds-bootstap forwarder-t a hiyaCFW-vel
---

### Követelmények
- Egy Nintendo DSi telepített [Unlaunch](https://dsi.cfw.guide/installing-unlaunch), [hiyaCFW](installing) és [TWiLight Menu++](/twilightmenu/installing-dsi) alkalmazásokkal
- A [MakeForwarder](https://github.com/Ta180m/Make-Forwarder-Dsi/releases) legutolsó kiadása

### Instrukciók
1. Csomagold ki *a tartalmát a* `MakeForwarder.zip`-nek az SD kártyád gyökerébe
1. Indítsd el a TWiLight Menu++-t
1. Indítsd el a Nintendo DS ROM-ot, amihez forwarder-t szeretnél létrehozni
1. Ha a ROM-od bootolt és működik, kapcsold ki a konzolod
   - Ha nem működött, akkor kövesd az nds-bootstrap hibaelhárítási lépeseket
1. Indítsd el a hiyaCFW-t
1. Ha a Nintendo DSi Menüjében vagy, csomagold ki és indítsd el a "Forwarder Maker"-t
1. Válaszd ki a cél bootstrap-et az alkalmazásodtól függően:
   - **Kereskedelmi ROM:** `sd:/_nds/nds-bootstrap-release.nds`
   - **Homebrew:** `sd:/_nds/nds-bootstrap-hb-release.nds`
1. Válaszd a `create forwarder`-t és; navigáld el a ROM-odhoz

Ismételd meg a 7. és 8. lépést, amíg mindenhez amihez szeretnél nem csináltál forwardert.
- Nem szükséges alaphelyzetbe állítani a cél bootstrap-et, ha ugyanazt a típusú ROM-ot használod

Ha minden ROM-odhoz készült forwarder, indítsd újra a rendszered, majd indítsd el a hiyaCFW-t. Most már meg kell jelenniük, mint ajándék csomagok.
