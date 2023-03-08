---
lang: pl_PL
layout: wiki
section: twilightmenu
category: other
title: Jak Dodać Okładki Gier
description: Jak zdobyć okładki pudełek/ gier w TWiLight Menu++
tabs:
  - 
    windows: Windows
    other: macOS/Linux
    manual: Instrukcja
---

{% capture tab-windows %}
1. Pobierz najnowszą wersję [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Wypakuj `TwilightBoxart-Windows-UX.zip` i uruchom `TwilightBoxart.exe`
1. Kliknij `Wykryj SD`
   - Jeśli nie znajdzie poprawnej karty SD, kliknij `Przeglądaj...` i wybierz właściwą kartę
1. Zmień rozmiar, obramowanie itp jak ci się żywnie podoba
1. Kliknij `Start`
1. Make sure box art is set to be shown in TWiLight Menu++ settings
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos_linux %}
1. Pobierz najnowszą wersję [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Wypakuj `.zip`
1. Otwórz `TwilightBoxart.ini` w wypakowanym folderze w edytorze tekstowym
1. Wpisz ścieżkę do swojej karty SD po `SdRoot=`, a następnie zapisz plik
   - Na macOS jest to `/Volumes/` a następnie nazwa twojej karty SD
1. Otwórz terminal
1. W terminalu wpisz `cd`, a następnie przeciągnij folder z `TwilightBoxart.CLI` na swój terminal
1. Uruchom `chmod +x TwilightBoxart.CLI`
1. Uruchom `./TwilightBoxart.CLI`
1. Powiedz `Tak`, jeśli pokazuje ścieżkę SD poprawnie
1. Make sure box art is set to be shown in TWiLight Menu++ settings
{% endcapture %}
{% assign tab-macos_linux = tab-macos_linux | split: "////////" %}

{% capture tab-manual %}
1. Pobierz paczkę png box art z [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs)
1. Wypakuj pliki .png do `sd:/_nds/TWiLightMenu/boxart`
1. Make sure box art is set to be shown in TWiLight Menu++ settings
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos_linux | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

**To add your own box art:** Place them in `sd:/_nds/TWiLightMenu/boxart`.
- Can either have the game's TID (ex. `ASME.png`), or the filename (ex. `SM64DS.nds.png`)
- Must be in `.png` format, with the recommended size of 128x115 and maximum of 208x143
- If your **TW**i**L**ight Menu++ configuration has Box Art viewing set to `Cached`, the image size must be 44 KiB or below. You can use a tool like [tinypng](https://tinypng.com/) to compress the images to an acceptable size

Individual box art can also be downloaded from GameTDB, under the **S Covers (png)** category.
