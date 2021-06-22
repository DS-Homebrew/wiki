---
lang: pl_PL
layout: wiki
section: twilightmenu
category: other
title: Jak Dodać Okładki Gier
description: Jak zdobyć okładki pudełek/ gier w TWiLight Menu++
---

### Windows
1. Pobierz najnowszą wersję [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Wypakuj `TwilightBoxart-Windows-UX.zip` i uruchom `TwilightBoxart.exe`
1. Kliknij `Wykryj SD`
   - Jeśli nie znajdzie poprawnej karty SD, kliknij `Przeglądaj...` i wybierz właściwą kartę
1. Zmień rozmiar, obramowanie itp jak ci się żywnie podoba
1. Kliknij `Start`
1. Upewnij się, że w ustawieniach TWiLight Menu++ jest ustawiona opcja wyświetlania okładek

### macOS/Linux
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
1. Upewnij się, że w ustawieniach TWiLight Menu++ jest ustawiona opcja wyświetlania okładek

### Ręcznie
1. Pobierz paczkę png box art z [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs)
1. Wypakuj pliki .png do `sd:/_nds/TWiLightMenu/boxart`
1. Upewnij się, że w ustawieniach Menu++ TWiLight jest ustawiona opcja wyświetlania okładek

**Aby dodać własne okładki:** Umieść je w `sd:/_nds/TWiLightMenu/boxart`. Nazwą okładki może być TID gry (np. `ASME.png`), albo nazwą pliku gry (np. `SM64DS.nds.png`). Musi być w formacie `.png`, o zalecanym rozmiarze 128x115 i maksymalnym rozmiarze 208x143.

Pojedyncze okładki można również pobrać z GameTDB, w kategorii **S Covers (png)**.
