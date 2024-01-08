---
lang: pl-PL
layout: wiki
section: ds-index
category: guides
title: Zrzucanie BIOS/Firmware
description: Jak wydobyć BIOS/Firmware konsoli Nintendo DS lub DSi z Twojej konsoli
tabs:
  - 
    dsi-sd-card: DSi z oprogramowaniem Unlaunch
    flashcard: Flashcard
---

Niektóre emulatory, takie jak melonDS, wymagają BIOS-u i oprogramowania trybu DS lub DSi, które można uzyskać poprzez wyodrębnienie ich z konsoli. Istnieją dwie odrębne metody osiągnięcia tego celu, wykorzystując:
- DSi z Unlaunchem, LUB
- DS/DS Lite/3DS lub DSi bez Unlauncha, wraz z kartą flash kompatybilną z konsolą

Metoda DSi wyodzyska zarówno pliki BIOS-u, jak i oprogramowania trybu DS i DSi. Metoda karty flash wyodzyska tylko pliki trybu DS.

{% capture tab-dsi-sd-card %}

Ta strona zakłada, że korzystasz z nowoczesnego środowiska CFW dostępnego na stronie [dsi.cfw.guide](https://dsi.cfw.guide).
{:.alert .alert-warning}

### Część 1: Pobieranie wymaganych plików

1. Pobierz [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)
1. Skopiuj plik `dsibiosdumper.nds` z archiwum `.7z` dsibiosdumper na główny katalog karty SD
1. Włóż ponownie kartę SD do urządzenia

### Część 2: dsibiosdumper
1. Przy wyłączonym urządzeniu, przytrzymaj następujące przyciski: <kbd class="face">A</kbd> + <kbd class="face">B</kbd>, i podczas trzymania ich jednocześnie, włącz urządzenie
1. Twoje urządzenie powinno uruchomić się w menu Unlaunch
1. Uruchom dsibiosdumper z listy aplikacji
1. Naciśnij <kbd class="face">A</kbd>, aby przeprowadzić zrzut wszystkiego
1. Poczekaj, aż proces zostanie zakończony
    - To może chwilę potrwać
1. Po zakończeniu procesu naciśnij <kbd>SELECT</kbd>, aby wyjść z dsibiosdumper
1. Wyłącz urządzenie
1. Włóż kartę SD do swojego komputera

Wszystkie niezbędne pliki znajdą się w katalogu `dsidump` na głównym katalogu Twojej karty SD.
{:.alert .alert-success}

{% endcapture %}
{% assign tab-dsi-sd-card = tab-dsi-sd-card | split: "////////" %}

{% capture tab-flashcard %}

### Część 1: Pobieranie wymaganych plików

1. Pobierz [dsbf_dump](https://github.com/DS-Homebrew/dsbf_dump/releases/latest) (plik `.nds`)
1. Skopiuj plik `dsbf_dump.nds` do głównego katalogu karty SD
1. Włóż ponownie kartę SD do karty flash

### Część 2: dsbf_dump
1. Włącz urządzenie
1. Uruchom swoją kartę flash
1. Przejdź do głównego katalogu karty SD i uruchom dsbf_dump
1. Poczekaj, aż proces zostanie zakończony
1. Po zakończeniu procesu, naciśnij <kbd>START</kbd>, aby wyłączyć urządzenie
  - Na systemach rodziny 3DS, zamiast tego pokaże się komunikat "Oprogramowanie zamknięte". Wyłącz urządzenie z tego ekranu
1. Włóż kartę SD do swojego komputera

Wszystkie niezbędne pliki znajdą się w katalogu wskazanym na górnym ekranie Twojego urządzenia.
{:.alert .alert-success}

{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% assign tabs = tab-dsi-sd-card | concat: tab-flashcard %}
{% include tabs.html index=0 tabs=tabs %}
