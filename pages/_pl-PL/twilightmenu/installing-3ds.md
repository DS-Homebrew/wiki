---
lang: pl-PL
layout: wiki
section: twilightmenu
category: installing
title: Instalacja (3DS)
long_title: Instalacja TWiLight Menu++ (3DS)
description: Jak zainstalować TWiLight Menu++ na Nintendo 3DS
tabs:
  - 
    working-camera: Działający Aparat
    non-working-camera: Niedziałający Aparat
    manual: Instrukcja
---

Upewnij się, że masz zainstalowane Custom Firmware, jeśli nie, to zainstaluj je przy pomocy [3ds.hacks.guide](https://3ds.hacks.guide/pl_PL)
{:.alert .alert-info}

{% capture tab-working-camera %}
1. Otwórz FBI i wybierz `Remote Install`, a następnie `Scan QR Code`
1. Zeskanuj ten kod QR, by zainstalować najnowszą wersję [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![Kod QR Universal-Updater](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. Zamknij FBI i uruchom Universal-Updater
   - Jeśli nie pokaże się na twoim ekranie głównym, zrestartuj konsolę
1. Znajdź menu TWiLight ++ w siatce aplikacji, możesz wyszukać za pomocą trzeciej karty na pasku bocznym, jeśli masz problem ze znalezieniem
   - Ma tę ikonę: ![Ikona TWiLight Menu++](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Naciśnij <kbd class="face">A</kbd> lub naciśnij ikonę pobierania na pasku bocznym i wybierz `TWiLight Menu++` aby go zainstalować
   - To zajmie chwilę
{% endcapture %}
{% assign tab-working-camera = tab-working-camera | split: "////////" %}

{% capture tab-non-working-camera %}
1. Pobierz najnowszą wersję [`Universal-Updater.cia`](https://github.com/Universal-Team/Universal-Updater/releases/latest/download/Universal-Updater.cia)
1. Umieść plik `Universal-Updater.cia` w dowolnym miejscu na karcie SD
1. Uruchom FBI na swoim Nintendo 3DS
1. W FBI, przejdź do miejsca, w którym wkleiłeś plik `Universal-Updater.cia`
1. Wybierz plik `Universal-Updater.cia` i naciśnij "Install & Delete"
1. Zamknij FBI i uruchom Universal-Updater
   - Jeśli nie pojawi się w głównym menu, uruchom ponownie swój 3DS
1. Znajdź TWiLight Menu++ w sieci aplikacji, możesz wyszukać za pomocą trzeciej karty na pasku bocznym, jeśli masz problem ze znalezieniem
   - Ma tę ikonę: ![Ikona TWiLight Menu++](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Naciśnij <kbd class="face">A</kbd> lub naciśnij ikonę pobierania na pasku bocznym i wybierz `TWiLight Menu++` aby go zainstalować
   - To zajmie chwilę
{% endcapture %}
{% assign tab-non-working-camera = tab-non-working-camera | split: "////////" %}

{% capture tab-manual %}
1. Pobierz najnowszą wersję [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
1. Wypakuj `TWiLightMenu-3DS.7z`
1. Skopiuj folder `_nds` do katalogu głównego karty SD
1. Skopiuj plik `BOOT.NDS` do katalogu głównego karty SD
1. Skopiuj folder `roms` do katalogu głównego karty SD
1. Skopiuj dwa pliki `.cia` do katalogu głównego karty SD
1. Zainstaluj przerzucone pliki CIA w FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Instalacja

{% assign tabs = tab-working-camera | concat: tab-non-working-camera | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}
