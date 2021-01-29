---
lang: pl-PL
layout: wiki
section: twilightmenu
category: updating
title: Aktualizacja (3DS)
description: Jak zaktualizować TWiLight Menu++ na Nintendo 3DS
---

Jeśli aktualizujesz z wersji starszej niż v16.4.0, prosimy o przeniesienie plików `.sav` do nowego folderu o nazwie `saves`, który ma się znajdować w tym samym miejscu co gry DS.
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Otwórz Universal-Updater
   - Jeśli go nie posiadasz, postępuj zgodnie z instrukcją [instalowania](installing-3ds)
1. Znajdź TWiLight Menu++ w siatce aplikacji, możesz wyszukać za pomocą trzeciej karty na pasku bocznym, jeśli masz problem ze znalezieniem
1. Naciśnij <kbd class="face">A</kbd> lub naciśnij ikonę pobierania na pasku bocznym i wybierz `TWiLight Menu++` aby go zainstalować
   - To trochę zajmie
{% endcapture %}

{% capture tab-manual %}
1. Pobierz najnowszą wersję `TWiLightMenu-3DS.7z` ze [strony wydań](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Wypakuj `TWiLightMenu-3DS.7z`
1. Skopiuj folder `_nds` do katalogu głównego karty SD
1. Skopiuj plik `BOOT.NDS` do katalogu głównego karty SD
1. Skopiuj dwa pliki `.cia` do katalogu głównego karty SD
1. Zainstaluj przerzucone pliki CIA z FBI na swoim 3DSie
{% endcapture %}

### Aktualizacja

<div class="tab-container">
   <div class="pb-3">
      <a class="tab-link btn btn-outline-secondary tab-default" href="#tab-universal-updater" onclick="openTab(event, event.currentTarget)" data-tab-name="universal-updater">Universal-Updater</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-manual" onclick="openTab(event, event.currentTarget)" data-tab-name="manual">Ręcznie</a>
   </div>
   <div id="tab-universal-updater">
      <noscript><h4>Universal-Updater</h4></noscript>
      {{ tab-universal-updater | markdownify }}
   </div>
   <div id="tab-manual">
      <noscript><h4>Ręcznie</h4></noscript>
      {{ tab-manual | markdownify }}
   </div>
</div>

### Więcej kroków dla użytkowników karty flashcard

Jeśli można przełączać zawartość karty SD i karty flashcard w TWLMenu++, a jeśli karta flashcard TWLMenu++ jest w wersji v16.3.0 lub później, wykonaj te kroki.

1. Przejdź do ustawień TWLMenu++
1. Wybierz `Update TWiLight Menu++`
1. Wybierz `Console (micro)SD > Slot-1 microSD`
