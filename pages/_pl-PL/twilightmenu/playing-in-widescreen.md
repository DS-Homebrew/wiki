---
lang: pl-PL
layout: wiki
section: twilightmenu
category: other
title: Granie na szerokim ekranie
description: Jak używać TWiLight Menu++ w trybie szerokiego (panoramicznego) ekranu na Nintendo 3DS
---

Wymaga konsoli Nintendo 3DS lub 2DS.
{:.alert .alert-info}

### Przygotowanie
- Upewnij się, że masz `boot.firm` Luma3DS w katalogu głównym karty SD

### Instalowanie
1. Pobierz [TWPatch](https://sono.9net.org/hebrew/TWPatch/data/TWPatch.cia)i skopiuj `TWPatch.cia` na kartę SD ([ wątek GBATemp](https://sono.9net.org/hebrew/TWPatch/data/TWPatch.cia))
1. Zainstaluj `TWPatch.cia` przy użyciu FBI
   - Możesz również użyć programu Universal-Updater do zainstalowania TWPatch zamiast dwóch poprzednich kroków
1. Wróć do menu głównego i uruchom program TWPatch
1. Przytrzymaj <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> i włącz `Widescreen patch (384x240 16:10)`
1. (opcjonalne!) Aby uzyskać mniej panoramiczny ekran, włącz także` test skali GPU (zagrożenie dla zdrowia!)`
   - "Niebezpieczeństwo dla zdrowia!" wynika z tego, że deweloper miał ból głowy z powodu rozmycia obrazu
1. Wciśnij <kbd>START</kbd> aby wygenerować plik `TwlBg.cxi` z widescreenem
   - Jeśli górny ekran nie wskazuje, że Widescreen jest włączony, zacznij ponownie od kroku 3
   - Jeśli widescreen nadal nie działa, poczekaj aż RTCom-activated widescreen zostanie wypuszczony
1. Zrestartuj swojego 3DS'a trzymając <kbd>SELECT</kbd> aby otworzyć konfigurację Luma3DS
1. Włącz `zewnętrzne FIRM-y i moduły` a następnie naciśnij <kbd>START</kbd>aby zapisać i wyjść
1. Otwórz ustawienia TWiLight Menu++, przełącz się na `Misc settings` i ustaw `Screen Aspect Ratio` na `16:10`
   - Można to zrobić dla każdej gry

I to wszystko! Ciesz się swoimi szerokoekranowymi grami na DS!

**NOTE1:** Każda gra/aplikacja w trybie DS(i) będzie działać w trybie panoramicznym, nawet te gry, które nie są kompatybilne z ekranem panoramicznym. Żeby to naprawić, musisz poczekać aż wyjdzie tryb szerokoekranowy uruchamiany przez RTCom.

**NOTKA2:** Nie przytrzymuj <kbd>START</kbd> bądź <kbd>SELECT</kbd> podczas włączania TWLMenu++, jeśli nie chcesz, żeby szeroki ekran wyglądał dziwnie. Jeśli nie widzisz ustawień proporcji ekranu, poczekaj aż wyjdzie możliwość uruchomienia szerokiego ekranu przez RTCom.

Nie każda gra działa w szerokim ekranie. [Natomiast stworzyliśmy listę z działającymi grami](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
