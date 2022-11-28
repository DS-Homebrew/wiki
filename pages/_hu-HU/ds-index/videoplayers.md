---
lang: hu-HU
layout: wiki
section: ds-index
category: reference
title: Video lejátszók
description: Homebrew videólejátszók Nintendo DS(i)-re
---

# Homebrew videólejátszók Nintendo DS(i)-re
Ez az oldal a Nintendo DS és DSi működő vagy WIP videólejátszók listáját tartalmazza és elmagyarázza az egyes lejátszók működését.

| Lejátszó neve | Támogatott formátumok/codec-ek | Támogatás      | Hátrányok                                                                 | Max FPS |
| ------------- | ------------------------------ | -------------- | ------------------------------------------------------------------------- | ------- |
| FastVideoDS   | `.fv`, FastVideoDS             | DSi és NDS     | A konfetti spam (sok apró dolog mozgása) lelassítja a magas FPS-ű videót. | 60 fps  |
| Moonshell     | `.dpg`, MPEG1                  | Csak flashcard | Flashcard szükséges a videók lejátszásához.                               | 24 fps  |
| Tuna-ViDS     | `.avi`, XVid                   | DSi és NDS     | Csak bizonyos framerate/bitrate-et tud elérni.                            | 15 fps  |
| MPEG4Player   | `.mp4`, MPEG-4                 | DSi és NDS     | Csak rövid videókat tud lejátszani.                                       | 24 fps  |

Megjegyzések:
- A tényleges maximális FPS a videó tartalmától és hosszától függ.

## FastVideoDS

Megjegyzés: Ha a következő üzenetet kapod: `This encoder requires a cpu with support for AVX2 instructions`, akkor vagy egy újabb CPU-t kell installálnod, vagy egy újabb PC-t kell használnod.
{: .alert .alert-warning}

### Windows

1. Töltsd le az enkódert [innen](https://mega.nz/file/mYwiBTZA#FX6k-9cclPig4_WutE9IueVR7NN0Kxl-mZvRXyhpQRg)
1. Töltsd le az alábbi `.bat` fájlt ugyanoda, ahol az encoder `.exe` fájlja van és húzd rá a videódat a `.bat` fájlra.
- [FastVideoDS.bat](/assets/files/FastVideoDS.bat)

Ha ez a folyamat kész, akkor csak húzd át az SD kártyádra. Ha a videót az SD kártyádra raktad, készen áll a **TW**i**L**ight Menu++-szal történő lejátszásra.

## Moonshell videó konverzió (DPG4x)

1. Töltsd le a DPG4x-et [innen](https://www.gamebrew.org/wiki/DPG4X)-t
1. Nyisd meg az `dpg4x.7z` fájlt
1. Nyisd meg a `dpg4x-2.3.3.3.0.zip` fájlt (a 3.0-1 ismeretlen okból hibát ad ki megnyitáskor)
1. Nyisd meg a `dpg4x-2.3.3.3.0_setup.exe`-t és folytasd a telepítést
1. A telepítés után nyisd meg a DPG4x-et
1. Kattints a `VIDEO` fülre
1. Jelöld be a `Keep Aspect` opciót
1. Állítsd be a `Video Bitrate` értéket a kívánt értékre (a magasabb érték javítja a minőséget)
1. Kattints az `AUDIO` fülre
1. Jelöld be a `Normalize Volume` opciót, ha a videó halk
1. Kattints a `SUBTITLES` fülre
1. Állítsd be a `Subtitles Source`-t `Disable Subtitles`-re mivel bizonyos felirat-sávok nem jelenhetnek meg helyesen
1. Kattints a `MAIN` fülre
1. Kattints az `Add Media` gombra a videofájl(ok) megnyitásához
1. Állítsd be a `DPG Version`-t `4`-re, ha a Moonshell v2.x-et használod, egyébként állítsd be `3`-ra vagy az alatti értékre
1. Állítsd be a `Quality`-t a minőség választásod szerint beállításához
1. Kattints a `Start Encoding`-ra a videó(k) konvertálásához

Ha ez a folyamat kész, akkor csak húzd át az SD kártyádra. Ha a videót az SD kártyádra raktad, készen áll a Moonshell-lel történő lejátszásra.

## TunaViDS útmutató

### Windows
Először válaszd ki a videót. Ajánlott, hogy a videó 4:3 arányú legyen, de az FFmpeg fekete sávokat ad a videóhoz, ha az nem ilyen.

Figyelmeztetés: Ne változtasd meg a Tuna-ViDS ROM-beállításait, mert nem fog megfelelően bootolni. Ez az útmutató feltételezi, hogy a legfrissebb **TW**i**L**ight Menu++-szal rendelkezel.
{: .alert .alert-warning}

Ezután töltsd le az FFmpeg programot a [közvetlen linkről](https://www.gyan.dev/ffmpeg/builds/ffmpeg-git-essentials.7z), és csomagold ki a C:\ffmpeg útvonalra vagy egy olyan helyre, ahol adminisztrátori jogok nélkül is hozzáférsz.

A videók konvertálásánál célszerű a biztonságos zónában kell maradnod (10-15fps), különben a videód összeomlaszthatja a konzolod. Lassulások előfordulhatnak a forgalmas jeleneteknél (konfetti, eső stb.).

Ahhoz, hogy az FFmpeg mindenhol használható legyen, ajánlott hozzáadni a könyvtárat az elérési útvonal rendszerkörnyezeti változóhoz. Ez tönkreteheti az FFmpeg-re támaszkodó további programokat, ezért távolítsd el a bejegyzést, ha végeztél.

Húzd rá a videóadat valamelyik bat fájlra az alábbiak közül a konvertáláshoz:
- [xvid-ds.bat](/assets/files/xvid-ds.bat): 12FPS videót konvertál, ami optimális a DS konzolok számára
- [xvid-dsi.bat](/assets/files/xvid-dsi.bat): 12FPS videót konvertál, ami optimális a DSi konzolok számára
- [xvid-ds-vol4.bat](/assets/files/xvid-ds-vol4.bat): 12FPS videót konvertál, ami optimális a DS konzolok számára 400% hangerő növeléssel
- [xvid-dsi-vol4.bat](/assets/files/xvid-dsi-vol4.bat): 12FPS videót konvertál, ami optimális a DSi konzolok számára 400% hangerő növeléssel

Ha szeretnéd, módosíthatod a következőket a fenti .bat fájlokban:
- `12` az `-r 12` opcióban `10` és `15` között egy másik framerate-hez
- `-2` a `scale=256:-2` opcióban, hogy megadd a kvánt függőleges felbontást, ha a videó torztottnak tűnik

Ha ez a folyamat kész, akkor csak húzd át az SD kártyádra. Ha a videót az SD kártyádra raktad, készen áll a **TW**i**L**ight Menu++-szal történő lejátszásra.

A videó kilép a menübe, miután befejezte a lejátszást, így ha videókat akarsz loopolni, akkor be kell illesztened-ismételned egy videószerkesztő programban, majd ezzel a módszerrel xvid avi-vá konvertálnod.

## MPEG4Player

### Windows

A folyamat ugyanaz a Tuna-ViDS esetében, de a videók akár 24fps sebességűek is lehetnek.
- [dsmp4-43.bat](/assets/files/dsmp4.bat): 4:3 videókhoz
- [dsmp4.bat](/assets/files/dsmp4.bat): 16:9 videókhoz
