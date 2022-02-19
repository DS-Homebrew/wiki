---
lang: hu-HU
layout: wiki
section: nds-bootstrap
title: Kompatibilitási lista & tesztelési tippek
description: Kompatibilitási lista és tippek a ROM-ok teszteléséhez
---

### Kompatibilitási lista
A tesztelt ROM-ok megtekintéséhez nyisd meg a [kompatibilitás listát](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/). Ha szeretnél közreműködni, nyomj a `View only`-ra majd a `Request edit access`-re. Győződj meg róla, hogy a bejegyzéseket a megfelelő laphoz adod hozzá az oldal alján található füleknek megfelelően.

Az ismert problémákkal rendelkező ROM-ok megtekintéséhez nézd meg az [issues oldalt](https://github.com/DS-Homebrew/nds-bootstrap/issues) a Githubon. Ha egy [új hibát (issue)](https://github.com/DS-Homebrew/nds-bootstrap/issues/new) szeretnél létrehozni, kérjük, kövesd megfelelően az issue template-et.

### Tippek a ROM-ok teszteléséhez
- Általánosságban nézd át az [nds-bootstrap GYIK](https://wiki.ds-homebrew.com/nds-bootstrap/faq) és a [fogalomjegyzék](https://wiki.ds-homebrew.com/nds-bootstrap/glossary) oldalakat, hogy biztos legyél abban, hogy érted, hogyan kell a problémákat elhárítani

#### Ha egy konkrét bejelentett hibát tesztelsz
- Ismételd meg a lépéseket, amilyen pontosan csak lehet
- Ha bármilyen eltérés van (például az nds-bootstrap verziója, a használt rendszer vagy módosított beállítások), ezt mindenképpen írd bele a jelentésedbe
- Nyugodtan kérj az eredeti bejelentőtől további részleteket (például mentési fájl feltöltését vagy bármilyen hiányzó információt), ha lehetséges
- Ha nincs megoldás, frissítsd a kompatibilitási listát

#### Ha egy ROM-nak problémája van az nds-bootstrap frissítése után
- Keresd meg, melyik verziótól jelent meg először ez a probléma
- Az nds-bootstrap downgrade-je egy [korábbi](https://github.com/DS-Homebrew/nds-bootstrap/releases) kiadás letöltésével és a frissítési utasítások követésével elvégezhető
- A [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) korábbi kiadására való visszaváltás is szükséges lehet

#### Ha olyan ROM-ot tesztelsz, amelynek nincsenek ismert problémái, vagy amelyet korábban még nem teszteltek
- Legyél alapos a ROM tesztelése során, és nézz át mindent, amit más felhasználók esetleg látnak
- Add hozzá a megfelelő információkat kompatibilitási listához a megfelelő lapon
- Ne felejtsd el eltávolítani a tesztelt játékokat a tesztelési várólistáról (Testing Queue)

#### Ha a feketelisták frissítése miatt tesztelsz
- Csak a feketelistán szereplő opciókat változtasd meg, ezek a következők: 133 MHz (TWL) CPU sebesség, Kártya olvasás DMA és Aszink kártya olvasás
- A feketelistás opciók engedélyezéséhez a játékonkénti beállításokban menj a `sd:/_nds/TWiLightMenu/settings.ini` fájlba, és állítsd az `IGNORE_BLACKLISTS` opciót `1`értékre
- Ha bármilyen probléma merül fel ezen beállítások bekapcsolása során, kérjük, jelentsd a Github issues oldalon 
