---
lang: pl-PL
layout: wiki
section: ds-index
category: guides
title: DS Game Forwarders (3DS)
description: Jak utworzyć przekaźniki CIA, aby gry z DS znalazły się w menu głównym 3DS-a
tabs:
  - 
    tab-sd-card: Karta SD
    tab-flashcard: Flashcard
---

Przekaźniki menu HOME to ikony w menu HOME, które przekierowują do innego programu. W tym przypadku można dodać gry DS z karty SD (wykorzystując nds-bootstrap) lub z kompatybilnego flashcardu (poprzez odpowiednie jądro) do menu HOME, aby uzyskać łatwiejszy dostęp do gier.

Gry na DS muszą być zrzucone do cyfrowego formatu `.nds`. Możesz zrzucić swoje kartridże DS za pomocą [GodMode9](https://3ds.hacks.guide/dumping-titles-and-game-cartridges#dumping-a-game-cartridge).
{:.alert .alert-info}

Ta strona zakłada, że używasz nowoczesnego środowiska CFW z[3ds.hacks.guide](https://3ds.hacks.guide).

Wybierz jedną z poniższych opcji, aby dodać ją do menu HOME:

{% capture tab-sd-card %}

### Część 1: Pobieranie wymaganych plików

Jeśli masz już zainstalowany program Universal Updater na swojej konsoli, możesz pominąć do kroku 3.
{:.alert .alert-info}

1. Otwórz FBI i wybierz `Remote Install`, a następnie `Scan QR Code`
1. Zeskanuj ten kod QR, by zainstalować najnowszą wersję [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![Kod QR Universal-Updater](https://db.universal-team.net/assets/images/qr/universal-updater.cia.png)
1. Otwórz Universal Updater z Menu HOME
1. Zainstaluj pakiet NDSForwarder
1. NDSForwarder i jego wymagane pliki są teraz skonfigurowane w odpowiednich lokalizacjach

### Część 2: NDSForwarder
1. Uruchom Homebrew Launcher
1. W Homebrew Launcher otwórz `NDS Forwarder Generator`
1. Przejdź do lokalizacji gry i naciśnij <kbd class="face">A</kbd>
1. Potwierdź, że chcesz zainstalować wybierając `Yes`
1. Po zainstalowaniu, Twoja gra pojawi się jako tytuł w menu HOME
{% endcapture %}
{% assign tab-sd-card = tab-sd-card | split: "////////" %}

{% capture tab-flashcard %}

Jeśli masz jakieś problemy, sprawdź FAQ na [GBAtemp thread](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/).
{:.alert .alert-warning}

### Wymagania

3DS:

{% capture flashcards %}
Zalecane flashcarty to DSTT i Acekard 2i. Jeśli zależy Ci na doskonałej kompatybilności z grami, kup SuperCard DSTWO / DSTWO PLUS. Jedynym minusem jest szybsze rozładowywanie baterii systemowej.

Jeśli masz flashcard, kompatybilny z Apache Thunder's NTR Launcher, nie krępuj się poprosić o niego [na GBAtemp thread](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/). Pamiętaj, aby określić, z której wersji korzystaszu(Normal czy Alt) i czy `RESETSLOT1` jest ustawiony na `0` czy `1` w `sd:/nds/ntr_launcher.ini`.

Kompatybilne:
- [Acekard 2(i)](http://www.nds-card.com/ProShow.asp?ProID=160) (gry z DSi-Enhanced, w tym nowsze gry NTR, nie działają)
- [Acekard RPG](http://wiki.gbatemp.net/wiki/Acekard_RPG)
- [DSTT](http://www.nds-card.com/ProShow.asp?ProID=157)
- [DSTT Advance](http://kaze-tado.way-nifty.com/moo/images/2008/11/19/200811202.jpg)
- Galaxy Eagle
- M3 DS Real
- [M3 DS Simply](https://farm2.static.flickr.com/1333/752793411_d91b182eb7.jpg) (używa <2 GB karty microSD)
- [R4 DS](http://www.nds-card.com/ProShow.asp?ProID=141) (oryginalna wersja Non-SDHC, używa <2 GB karty microSD)
- [R4 SDHC Snoopy](http://www.nds-card.com/ProShow.asp?ProID=567)
- [R4 SDHC RTS LITE](http://www.nds-card.com/ProShow.asp?ProID=450) ([www.r4isdhc.com](http://www.r4isdhc.com/))
- R4 SDHC Upgrade ([www.r4i-sdhc.com](http://www.r4i-sdhc.com/))
- [R4i3D](http://www.3ds-cart.com/en/other-flashcarts/35-r4i3d-revolution-cart-for-3ds-dsi-dsl-ds.html) ([www.r4i3d.com](http://www.r4i-sdhc.com/))
- [R4iDSN](http://3ds-flashcard.com/home/28-r4idsn-3ds.html)
- [R4i Gold](http://www.nds-card.com/ProShow.asp?ProID=330)
- [R4i Gold RTS](http://www.nds-card.com/ProShow.asp?ProID=149) ([www.r4ids.cn](http://www.r4ids.cn/))
- [R4i-SDHC](http://www.nds-card.com/ProShow.asp?ProID=146) ([www.r4i-sdhc.com](http://www.r4i-sdhc.com)) (wersja normalna i RTS)
- R4iTT ([www.r4itt.net](http://www.r4itt.net/)) (purple card może być niekompatybilny)
- [SuperCard DSONE](http://wiki.gbatemp.net/wiki/SuperCard_DSONEi)
- [SuperCard DSTWO](http://www.nds-card.com/ProShow.asp?ProID=135) (wersja Normal i Plus)

Nieprzetestowane:
- R4i3D NEW (Użyj szablonu i pakietu R4iDSN)

Częściowo kompatybilne:
- Ace 3DS+ (Kompatybilność z grami jest zła, zapisywanie/ wczytywanie pliku zapisu powoduje awarię)
- Gateway Blue Card (Kompatybilność z grami jest zła, zapisywanie/ wczytywanie pliku zapisu powoduje awarię)
- EX4DS (Kompatybilność z grami jest zła, zapisywanie/ wczytywanie pliku zapisu powoduje awarię)
- R4iLS (Kompatybilność z grami jest zła, zapisywanie/ wczytywanie pliku zapisu powoduje awarię)
- Karty z [www.r4isdhc.com.cn](http://www.r4isdhc.com.cn/)(Kompatybilność z grami jest zła, zapisywanie/ wczytywanie pliku zapisu powoduje awarię)

Niekompatybilne:
- CycloDS (i)Evolution (Może autobootować ROMy, ale działa inaczej niż inne flashcardy)
- (i)Edge (brak możliwości automatycznego uruchamiania .nds ROM)
- R4 Gold Pro ([www.r4i-gold.com](http://www.r4i-gold.com) / [www.r4i-gold.me](http://www.r4i-gold.me)) (YSMenu (to nie proces forwardera) zawiesza kartę)
- R4i3D (2012)
- R4 Infinity Dual Core
- R4 SDHC
- R4 SDHC Dual-Core ([www.r4isdhc.com](http://www.r4isdhc.com/)) (YSMenu (to nie proces spedytora) zawiesza kartę)
{% endcapture %}

<details>
    <summary>Obsługiwana karta z tej listy</summary>
    <div class="details-content">
        {{ flashcards | markdownify }}
    </div>
</details>

PC:
- 64 bit OS
- [Forwarder3-DS](https://www.dropbox.com/s/b9de5ii6vm3dxfn/Forwarder3DS-v2.9.6.zip?dl=0)
- Aktualizacja Java 8 251
- **użytkownicy Linux:** JavaFX
   - Oparte na Debianie: Uruchom [to](https://gist.githubusercontent.com/puntillol59/7532b6583380baca236dcaf2d8f75b5c/raw/e8b9d193f8b24de941160c7292ec0bb3b997e98e/main.sh)
   - Arch: `sudo pacman -S java8-openjfx && sudo archlinux-java set java-8-openjdk/jre`

### Część 1: Rozpoczęcie
1. Pobierz jeden z tych pakietów:
   - [Original R4 / M3 Simply](https://www.dropbox.com/s/juxzri7h8bttunh/DS%20Game%20Forwarder%20pack%20%28Original%20R4%2C%20M3%20Simply%29.7z?dl=0)
   - [Acekard 2(i) / M3DS Real](https://www.dropbox.com/s/5elogf885sd62hu/DS%20Game%20Forwarder%20pack%20%28M3DS%20Real%29.7z?dl=0)
   - [DSTT / R4i Gold / R4i-SDHC / R4 SDHC Upgrade / SC DSONE](https://www.dropbox.com/s/xxfmvikwmnvsu63/DS%20Game%20Forwarder%20pack%20%28DSTT%2C%20R4i%20Gold%2C%20R4i-SDHC%2C%20SC%20DSONE%29.7z?dl=0)
   - [Acekard RPG](https://drive.google.com/file/d/0B2_1xHkEp2_6OHVuZEJwU1BKbEU/view?usp=sharing)
   - [R4iDSN / R4i Gold RTS / R4i Gold 3DS Plus](https://www.dropbox.com/s/j8nquh073k9y0h7/DS%20Game%20Forwarder%20pack%20%28R4iDSN%2C%20R4i%20Gold%20RTS%29.7z?dl=0)
   - [Ace 3DS+ / Gateway Blue Card / R4iLS / R4iTT](https://www.dropbox.com/s/fd7dzhn8burcq02/DS%20Game%20Forwarder%20pack%20%28Ace3DS%2C%20GW%20Blue%20Card%2C%20R4iTT%29.7z?dl=0)
   - [SC DSTWO](https://www.dropbox.com/s/pyyg0vq8b0nmhqd/DS%20Game%20Forwarder%20pack%20%28SC%20DSTWO%29.7z?dl=0)

1. Wypakuj zawartość folderu `dla Pola-1 microSD` do katalogu głównego karty microSD twojego flashcarda i (jeśli folder istnieje) zawartość folderu `dla karty SD` do katalogu głównego karty SD twojego 3DS.

Po wyodrębnieniu pakietu dla swojej karty, możesz edytować `sd:/_nds/ntr_forwarder.ini`, aby zmienić ustawienia. Nie jest to możliwe dla Acekard RPG, R4 DS, i R4i Gold RTS.
- `NTRCLOCK`: Jeśli ustawiony na `0` lub gdy przycisk <kbd class="face">A</kbd> jest przytrzymane, pojawi się ekran startowy DSi zamiast normalnego splashu DS, i prędkość zegara TWL jest używana, więc lagi precz
- `DISABLEANIMATION`: Jeśli ustawiony na `1` lub <kbd class="face">B</kbd> jest przytrzymane, ekran startowy DS / DSi jest pomijany
- `HEALTHSAFETYMSG`: Jeśli ustawiony na `1`, wiadomość o zdrowiu i bezpieczeństwie ekranu startowego pojawi się na dolnym ekranie, w przeciwnym razie dolny ekran pozostaje biały bez wiadomości o zdrowiu i bezpieczeństwie

### Część 2: Pobieranie plików poprawek AP z TWiLight Menu++
Jeśli masz już TWiLight Menu++, przejdź do następnej części.
1. Pobierz najnowszy `TWiLightMenu-3DS.7z` z [strony wydania](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. W pliku 7z, przejdź do `_nds/TWiLightMenu/`
1. Skopiuj folder `apfix` do `sd:/_nds/ntr-forwarder/` na karte SD twojego 3DS

### Część 3: Forwarder3-DS
1. Otwórz `Forwarder3DS.jar`
   - **Użytkownicy Windows:** Jeśli się nie otworzy, pobierz ten [Forwarder3DS.bat](/assets/files/Forwarder3DS.bat), umieść go w tym samym folderze co Forwarder3DS.jar, i uruchom go
1. Ustaw swoją kartę jako `Cel` po lewej stronie
   - **UWAGA:** Jeśli nie widzisz white list, pobierz [ten zip](https://github.com/Olmectron/olmectron.github.io/archive/master.zip), i umieść folder `forwarders` w tym samym folderze co Forwarder3DS.jar, a następnie zmień jego nazwę na `.forwarders`
1. Włącz `Automatically set ROM path`
   - **Użytkownicy Linux:** Automatyczna ścieżka jest niepoprawna, ponieważ zawiera całą ścieżkę (np. `/media/$USER/something/`), proszę usunąć tę część
   - **Użytkownicy MacOS:** Automatyczna ścieżka jest nieprawidłowa, ponieważ zawiera `/Volumes/(cardname)/` na początku, proszę usunąć tę część
1. Kliknij na folder w prawym górnym rogu i wybierz ROM-y, dla których chcesz zrobić forwardery lub przeciągnij je na okno
   - **UWAGA:** ROMy muszą znaleźć się na karcie SD podczas ich wybierania, i nie mogą być przeniesione bez odtworzenia forwarderów
   - **Użytkownicy kart SD:** Jeśli twój plik zapisu znajduje się w tym samym folderze co ROM, przenieś go do folderu o nazwie `saves`, przy czym folder `saves` powinien znajdować się w tym samym miejscu co ROM
1. Jeśli grasz w hack / tłumaczenie gry DSi-Enhanced, która ma edytowany banner / tytuł, znajdź banner dla gry z [tutaj](https://www.dropbox.com/sh/igr47pr0q5bh4p5/AAA9Dy8VOGfBLUA6KdLDSDW-a?dl=0), kliknij prawym przyciskiem myszy na grę w Forwarderze3-DS, kliknij `Import banner`, i kliknij na banner, aby go użyć
1. Jeśli używasz homebrew ROM, kliknij na niego, a następnie wyczyść `Tytuł gry` i wpisz nowy tytuł gry
1. Kliknij przycisk dyskietki, aby wygenerować CIA dla forwardera
1. Skopiuj CIA na kartę SD Twojego 3DS-a, a następnie zainstaluj je za pomocą FBI
   - Jeśli używasz EmuNAND, zainstaluj zarówno na SysNAND jak i EmuNAND
{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% assign tabs = tab-sd-card | concat: tab-flashcard %}
{% include tabs.html index=0 tabs=tabs %}