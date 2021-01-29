---
lang: pl_PL
layout: wiki
section: twilightmenu
category: other
title: Jak Dodać Okładki Gier
description: Jak dodać okładki gier do TWiLight Menu++
---

### 3DS
1. Zainstaluj [fork TWiLight Menu++ Updater od KirovAir](https://github.com/KirovAir/TWiLightMenu-Updater/releases)
   - Zastąpi to normalne TWiLight Menu++ Updater, więc do aktualizacji TWiLight Menu++ używaj Universal-Updater
1. Wybierz `Extras`, `Boxart`, a następnie wciśniij <kbd class="face">X</kbd>, by zeskanować całą kartę SD albo <kbd class="face">A</kbd>, by wybrać folder do zeskanowania
1. Wybierz rozmiar okładki
1. Wybierz styl obramowania
1. Upewnij się, że okładka jest ustawiona na wyświetlanie w ustawieniach TWiLight Menu++

### Windows
1. Pobierz najnowszą wersję [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Wypakuj `TwilightBoxart-Windows-UX.zip` i uruchom `TwilightBoxart.exe`
1. Kliknij `Detect SD`
   - Jeśli nie znajdzie poprawnej karty SD, kliknij `Browse...` i wybierz właściwą kartę
1. Dostosuj rozmiar, obramowanie itp do twojego uznania
1. Kliknij `Start`
1. Na swoim DSie, Upewnij się, że okładka jest ustawiona na wyświetlanie w ustawieniach TWiLight Menu++

### macOS/Linux
1. Pobierz najnowszą wersję [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Wypakuj `.zip`
1. Otwórz `TwilightBoxart.ini` w wypakowanym folderze w edytorze tekstowym, a następnie zapisz plik
1. Wpisz ścieżkę do karty SD po `SdRoot=`
   - Na macOS jest to `/Volumes/` a następnie nazwa twojej karty SD
1. Otwórz terminal
1. W terminalu wpisz `cd` i przeciągnij na niego folder z `TwilightBoxart.CLI`
1. Uruchom `chmod +x TwilightBoxart.CLI`
1. Uruchom plik `./TwilightBoxart.CLI` poprzez przeciągnięcie go do terminala
1. Wpisz `Yes` jeśli ścieżka do karty SD jest poprawna
1. Na swoim DSie, Upewnij się, że okładka jest ustawiona na wyświetlanie w ustawieniach TWiLight Menu++

### Ręcznie
1. Pobierz paczkę okładek png z [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs)
1. Wypakuj pliki .png do `sd:/_nds/TWiLightMenu/boxart`
1. Na swoim DSie, Upewnij się, że okładka jest ustawiona na wyświetlanie w ustawieniach TWiLight Menu++

**Aby dodać własne okładki:** Umieść je w `sd:/_nds/TWiLightMenu/boxart`. Nazwą okładki może być TID gry (np. `ASME.png`), albo nazwą pliku gry (np. `SM64DS.nds.png`). Musi być w formacie `.png`, o zalecanym rozmiarze 128x115 i maksymalnym rozmiarze 208x143.

Pojedyncze okładki można również pobrać z GameTDB, w kategorii **S Covers (png)**.
