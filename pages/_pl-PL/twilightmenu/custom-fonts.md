---
lang: pl-PL
layout: wiki
section: twilightmenu
category: customization
title: Własne czcionki
description: Jak używać własnych czcionek z TWiLight Menu++
---

TWiLight Menu++ może używać niestandardowych czcionek w formacie NFTR (Nitro FonT Resource). Będą one używane w Ustawieniach, tytułach podręcznika oraz w motywach Nintendo 3DS, SEGA Saturn i Homebrew Launcher.

### Struktura katalogu
Niestandardowe czcionki są wczytywane z `sd:/_nds/TWiLightMenu/extras/fonts/[nazwa czcionki]/[plik czcionki].nftr`, gdzie `[nazwa czcionki]` jest nazwą wybraną przez Ciebie a `[nazwa czcionki].ntfr` jest jednym z następujących:
- `large.nftr`: The larger font used for titles
- `small.nftr`: The smaller font used for most other text

### Skin fonts
You may add fonts to [custom DSi/3DS theme skins](custom-dsi-3ds-skins), which will override whatever is set in TWiLight Menu++ settings. These fonts go in the `font` folder, in the skin's root folder.

Custom skins can additionally use override fonts for the date & time using `date_time.nftr`, and the console username with `username.nftr`.

### Generating custom fonts
You can make your own fonts using a utility such as Pk11's [nftr-editor](https://pk11.us/nftr-editor/). To regenerate one of TWiLight Menu++'s existing fonts using it:
1. Załaduj plik NFTR w edytorze nftr-editor
1. Wpisz nazwy czcionek, które chcesz użyć, od najwyższego do najniższego priorytetu, `Input font` oddzielając je przecinkami
    - Możesz zobaczyć podgląd czcionek wejściowych w górnej ramce po lewej stronie i aktualny NFTR w dolnej ramce
1. Kliknij `Generuj z czcionki`, a następnie powiedz `OK`, aby zregenerować istniejące znaki i `Anuluj`, aby zregenerować specjalne znaki przycisków (np. &#xE000;)
1. Kliknij `Zapisz`, a następnie powtórz dla innych rozmiarów
