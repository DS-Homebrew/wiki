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
Do TWiLight Menu++ są już dołączone trzy czcionki. Kiedy TWiLight Menu++ działa w DSi Mode te czcionki posiadają wszystkie znaki potrzebne dla języków, które są dostępne w TWiLight, natomiast w DS Mode czcionki są ograniczone z powodu ograniczonego RAMu. Wygląda to następująco:
- Domyślna: używa oficjalnej czcionki DSi jako podstawowej czcionki i obsługuje wszystkie znaki, które są używane w TWiLight Menu++ we wszystkich językach w DS Mode
- Chiński (uproszczony): używa CS Noto Sans jako podstawowej czcionki i ma znacznie więcej chińskich (uproszczonych) znaków w trybie DS, kosztem znaków innych języków.
- Koreański: Identycznie jak Domyślne w DSi Mode, ale w DS Mode ma bardziej kompletny zestaw znaków hangul, kosztem znaków innych języków

### Struktura katalogu
Niestandardowe czcionki są wczytywane z `sd:/_nds/TWiLightMenu/extras/fonts/[nazwa czcionki]/[plik czcionki].nftr`, gdzie `[nazwa czcionki]` jest nazwą wybraną przez ciebie a `[nazwa czcionki].ntfr` jest jednym z następujących:
- `large-ds.nftr`, `large-dsi.nftr` lub `large.nftr`: Większa czcionka używana w tytułach
- `small-ds.nftr`, `small-dsi.nftr` lub `small.nftr`: Mniejsza czcionka dla reszty tekstu

Pliki `-ds` i `-dsi` mają wyższy priorytet niż normalne i jeśli zostaną wykryte, będą użyte, kiedy TWiLight Menu++ działa odpowiednio w DS lub DSi Mode.

### Generowanie niestandardowych czcionek
Możesz tworzyć własne czcionki za pomocą takich narzędzi, jak [ntfr-editor](https://pk11.us/nftr-editor/) Pk11. To regenerate one of TWiLight Menu++'s existing fonts using it:
1. Load an NFTR file in nftr-editor
1. Type the names of the fonts you want to use from highest to lowest priority in the `Input font` text box, comma separated
   - You can see a preview of the input fonts in the top box on the left and the current NFTR in the bottom box
1. Click `Generate from font`, then say `OK` to regenerating existing characters and `Cancel` to regenerating the special button characters (ex. &#xE000;)
1. Click `Save`, then repeat for the other sizes
