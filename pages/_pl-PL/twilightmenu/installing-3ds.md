---
lang: pl-PL
layout: wiki
section: twilightmenu
category: installing
title: Instalacja (3DS)
description: Jak zainstalować TWiLight Menu++ na Nintendo 3DS
---

Na początku musisz mieć zainstalowane Custom Firmware, przejdź do [3ds.hacks.guide](https://3ds.hacks.guide/pl_PL/), w celu instalacji
{:.alert .alert-info}

{% capture tab-working-camera %}
1. Otwórz FBI i wybierz `Remote Install`, a następnie `Scan QR Code`
1. Zeskanuj ten kod QR, by zainstalować najnowszą wersję [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![Kod QR Universal-Updater](https://db.universal-team.net/assets/images/qr/universal-updater.cia.png)
1. Zamknij FBI i uruchom Universal-Updater
   - Jeśli nie pokaże się na twoim ekranie głównym, zrestartuj konsolę
1. Znajdź menu TWiLight ++ w siatce aplikacji, możesz wyszukać za pomocą trzeciej karty na pasku bocznym, jeśli masz problem ze znalezieniem
   - Ma tę ikonę: ![Ikona TWiLight Menu++](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Naciśnij <kbd class="face">A</kbd> lub naciśnij ikonę pobierania na pasku bocznym i wybierz `TWiLight Menu++` aby go zainstalować
   - To trochę zajmie
{% endcapture %}

{% capture tab-non-working-camera %}
1. Pobierz plik `Universal-Updater.cia` ze [strony wydań Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases)
1. Umieść plik `Universal-Updater.cia` w dowolnym miejscu na karcie SD
1. Uruchom FBI na swoim Nintendo 3DS
1. W FBI, przejdź do miejsca, w którym umieściłeś plik `Universal-Updater.cia`
1. Wybierz `Universal-Updater.cia` i naciśnij przycisk "Install & Delete"
1. Zamknij FBI i uruchom Universal-Updater
   - Jeśli nie pokaże się na twoim ekranie głównym, zrestartuj konsolę
1. Znajdź menu TWiLight ++ w siatce aplikacji, możesz wyszukać za pomocą trzeciej karty na pasku bocznym, jeśli masz problem ze znalezieniem
   - Ma tę ikonę: ![Ikona TWiLight Menu++](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Naciśnij <kbd class="face">A</kbd> lub naciśnij ikonę pobierania na pasku bocznym i wybierz `TWiLight Menu++` aby go zainstalować
   - To trochę zajmie
{% endcapture %}

{% capture tab-manual %}
1. Pobierz najnowszą wersję `TWiLightMenu-3DS.7z` ze [strony wydań](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Wypakuj `TWiLightMenu-3DS.7z`
1. Skopiuj folder `_nds` do katalogu głównego karty SD
1. Skopiuj plik `BOOT.NDS` do katalogu głównego karty SD
1. Skopiuj folder `roms` do katalogu głównego karty SD
1. Skopiuj dwa pliki `.cia` do katalogu głównego karty SD
1. Zainstaluj przerzucone pliki CIA z FBI na swoim 3DSie
{% endcapture %}

### Instalacja

<div class="tab-container">
   <div class="pb-3">
      <a class="tab-link btn btn-outline-secondary tab-default" href="#tab-working-camera" onclick="openTab(event, event.currentTarget)" data-tab-name="working-camera">Działający Aparat</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-non-working-camera" onclick="openTab(event, event.currentTarget)" data-tab-name="non-working-camera">Niedziałający Aparat</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-manual" onclick="openTab(event, event.currentTarget)" data-tab-name="manual">Ręcznie</a>
   </div>
   <div id="tab-working-camera">
      <noscript><h4>Działający Aparat</h4></noscript>
      {{ tab-working-camera | markdownify }}
   </div>
   <div id="tab-non-working-camera">
      <noscript><h4>Niedziałający Aparat</h4></noscript>
      {{ tab-non-working-camera | markdownify }}
   </div>
   <div id="tab-manual">
      <noscript><h4>Ręcznie</h4></noscript>
      {{ tab-manual | markdownify }}
   </div>
</div>
