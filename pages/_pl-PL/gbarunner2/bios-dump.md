---
lang: pl-PL
layout: wiki
section: gbarunner2
title: Zrzucanie BIOSU GBA
description: Jak wydobyć BIOS Nintendo GBA z konsoli
tabs:
  - 
    3ds-sd-card: 3DS z oprogramowaniem open_agb_firm
    gba-flashcart: GBA/DS/DS Lite z kasetą flash w trybie GBA
---

Chociaż większość emulatorów GBA nie ma problemów z samodzielnym odtwarzaniem gier GBA, niektóre emulatory i hipernadzorcy, takie jak GBARunner2, mogą wymagać pliku BIOS, aby poprawnie odtwarzać niektóre tytuły.

Istnieją dwie odrębne metody osiągnięcia tego celu, wykorzystując:
- 3DS z niestandardowym oprogramowaniem LUB
- GBA/DS/DS Lite z kartą flash w trybie GBA

{% capture tab-3ds-sd-card %}
### Część 1: Pobieranie wymaganych plików
1. Pobierz [open_agb_firm](https://github.com/profi200/open_agb_firm/releases/latest) (plik `.7z`)
1. Pobierz [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)
1. Utwórz folder o nazwie `payloads` wewnątrz folderu `/luma`, jeśli jeszcze nie istnieje
1. Skopiuj plik `open_agb_firm.firm` z pliku `.7z` open_agb_firm do folderu `/luma/payloads`
1. Skopiuj plik `Bios_Dumper.gba` do głównego katalogu karty SD
1. Włóż ponownie kartę SD do urządzenia

### Część 2: Bios_Dumper
1. Naciśnij i przytrzymaj <kbd>START</kbd>, a podczas przytrzymywania <kbd>START</kbd>, włącz urządzenie
    - To uruchomi open_agb_firm
    - Jeśli zostanie załadowany `Luma3DS Chainloader`, wybierz `open_agb_firm` z tego menu
    - Jeśli zostanie załadowane coś innego, to oznacza, że nie skopiowałeś pliku `open_agb_firm.firm` do odpowiedniego katalogu na swojej karcie SD
1. Z programu open_agb_firm uruchom `Bios_Dumper.gba`
1. Ekran zaświeci się na czerwono, a następnie na zielono
1. Poczekaj około pięć sekund
1. Wyłącz urządzenie

{% capture upload-bios-text %}
Z twojej karty SD przesyłaj plik `/3ds/open_agb_firm/saves/Bios_Dumper.sav` tutaj:
{% endcapture %}

### Część 3: Rozpakuj BIOS z wygenerowanego pliku zapisu
1. Włóż kartę SD do swojego komputera
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-3ds-sd-card = tab-3ds-sd-card | split: "////////" %}


{% capture tab-gba-flashcart %}
### Część 1: Pobieranie wymaganych plików
1. Pobierz [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)
1. Skopiuj `Bios_Dumper.gba` do głównego katalogu karty SD swojej karty flash
1. Załóż ponownie kartę SD do swojej karty flash
1. Włóż ponownie kartę flash GBA do swojej karty

### Część 2: Bios_Dumper
1. Uruchom swoją kartę flash, a następnie uruchom `Bios_Dumper.gba`
1. Ekran zaświeci się na czerwono, a następnie na zielono
1. Poczekaj około pięć sekund
1. Wyłącz urządzenie

{% capture upload-bios-text %}
Z twojej karty SD przesłać `Bios_Dumper.sav` tutaj:
{% endcapture %}

### Część 3: Rozpakuj BIOS z wygenerowanego pliku zapisu
1. Włóż kartę SD do swojego komputera
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-gba-flashcart = tab-gba-flashcart | split: "////////" %}

{% assign tabs = tab-3ds-sd-card | concat: tab-gba-flashcart %}
{% include tabs.html index=0 tabs=tabs %}

Plik `bios.bin` zostanie pobrany automatycznie. To jest ostateczny plik BIOS GBA.
{:.alert .alert-success}

<script src="https://geraintluff.github.io/sha256/sha256.min.js"></script>
<script src="/assets/js/bios-shrinker.js"></script>
