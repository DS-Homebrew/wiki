---
lang: pl-PL
layout: wiki
section: twilightmenu
category: customization
title: Własne czcionki
description: Jak używać własnych czcionek z TWiLight Menu++
---

TWiLight Menu++ może używać niestandardowych czcionek w formacie NFTR (Nitro FonT Resource). Będą one używane w Ustawieniach, tytułach podręcznika oraz w motywach Nintendo 3DS, SEGA Saturn i Homebrew Launcher.

### Dołączone informacje o czcionce
Do TWiLight Menu++ są już dołączone trzy czcionki. When TWiLight Menu++ is running in DSi Mode, they all contain all of the characters that should be needed for all of the languages TWiLight is translated to, but when running in DS Mode they are more limited due to RAM limitations. Wygląda to następująco:
- Default: This uses the official DSi font as its primary font, and supports all characters that are used in TWiLight Menu++ itself in all languages in DS mode
- Chiński (uproszczony): używa CS Noto Sans jako podstawowej czcionki i ma znacznie więcej chińskich (uproszczonych) znaków w trybie DS, kosztem znaków innych języków.
- Koreański: Identycznie jak Domyślne w DSi Mode, ale w DS Mode ma bardziej kompletny zestaw znaków hangul, kosztem znaków innych języków

### Struktura katalogu
Niestandardowe czcionki są wczytywane z `sd:/_nds/TWiLightMenu/extras/fonts/[nazwa czcionki]/[plik czcionki].nftr`, gdzie `[nazwa czcionki]` jest nazwą wybraną przez Ciebie a `[nazwa czcionki].ntfr` jest jednym z następujących:
- `large-ds.nftr`, `large-dsi.nftr` lub `large.nftr`: Większa czcionka używana w tytułach
- `small-ds.nftr`, `small-dsi.nftr` lub `small.nftr`: Mniejsza czcionka dla reszty tekstu

Pliki `-ds` i `-dsi` mają wyższy priorytet niż normalne i jeśli zostaną wykryte, będą użyte, kiedy TWiLight Menu++ działa odpowiednio w DS lub DSi Mode.

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
