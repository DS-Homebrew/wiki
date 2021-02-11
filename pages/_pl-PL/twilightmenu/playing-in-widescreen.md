---
lang: pl-PL
layout: wiki
section: twilightmenu
category: other
title: Granie na szerokim ekranie
description: Jak używać TWiLight Menu++ w trybie szerokiego (panoramicznego) ekranu na Nintendo 3DS
---

Wymaga Old/New Nintendo 3DS lub 2DS.

**Przygotowanie**
- Upewnij się, że masz `boot.firm` Luma3DS w katalogu głównym karty SD
- Jeśli używałeś TWiLight Menu++ Updater albo Universal-Updater do aktualizacji, prosimy o instalowanie najnowszych plików CIA TWiLight Menu++ używając FBI

1. Pobierz [TWPatch](https://sono.9net.org/hebrew/TWPatch/data/TWPatch.cia) ([wątek na GBATemp](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/))
1. W konfiguracji Luma, włącz zewnętrzne FIRM i moduły
1. Zainstaluj CIA TWPatch
1. Uruchom TWPatch
1. (opcjonalne!) Dla mniej rozpikselowanego ekranu, przytrzymaj Y+B i włącz`GPU scale test (health hazard!)`
1. Naciśnij <kbd class="face">X</kbd> + <kbd>START</kbd> aby wygenerować plik `TwlBg.cxi` z szerokim ekranem
   - Jeśli górny ekran nie wskazuje, że patch na szeroki ekran jest włączony, powtórz wszystko od kroku 4
   - Jeśli szeroki ekran nadal nie działa, poczekaj aż wyjdzie możliwość uruchomienia szerokiego ekranu przez RTCom
1. W ustawieniach TWiLight Menu++, zmień stronę na `Pozostałe ustawienia` i ustaw `Roździelczość Ekranu` na `16:10`
   - Można zmienić tą wartość oddzielnie dla każdej gry

I to wszystko! Ciesz się swoimi szerokoekranowymi grami na DS!

**NOTKA1**: Każda gra/aplikacja w trybie DS(i) będzie działać w trybie szerokoekranowym, nawet te, które teggo nie wspierają. Żeby to naprawić, musisz poczekać aż wyjdzie tryb szerokoekranowy uruchamiany przez RTCom.

**NOTE2:** Do not hold <kbd>START</kbd> or <kbd>SELECT</kbd> when launching TWLMenu++, if you don't want widescreen to look glitched. If you don't see the screen aspect ratio setting, wait for RTCom-activated widescreen to be released.

Not every game is widescreen compatible. [We have created a list of games with widescreen](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
