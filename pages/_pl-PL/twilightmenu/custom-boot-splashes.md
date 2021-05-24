---
lang: pl_PL
layout: wiki
section: twilightmenu
category: customization
title: Własne Ekrany Powitalne
description: Jak używać niestandardowych ekranów powitalnych w TWiLight Menu++
---

Możesz używać własnych plików GIF, by mieć własne ekrany powitalne podczas uruchamiania TWiLight Menu++. Muszą być nazwane `splashtop.gif` i `splashbottom.gif` i znajdować się w `sd:/_nds/TWiLightMenu/extras`, następnie ustaw `Ekran Powitalny DSi` na `Niestandardowy` w ustawieniach TWiLight Menu++.

Większość plików GIF do 256x192 powinna działać, z paroma wyjątkami:
- Pliki GIF powyżej 1 MiB (DSi Mode) lub 256 KiB (DS Mode) mogą nie być odtwarzane z pełną prędkością, ponieważ zostaną zdekompresowane w locie
- Między tymi dwoma, pliki GIF muszą ważyć mniej niż 10 MB (w trybie DSi) lub 2 MB (w trybie DS)
- Jeśli oba GIF-y są ustawione na zapętlanie, będą wyświetlane przez 3 sekundy, więc ustaw licznik zapętleń na co najmniej jednym z nich, aby kontrolować czas
- Flaga wprowadzania danych przez użytkownika jest obsługiwana, więc ustaw ją i długie opóźnienie na klatce, jeśli chcesz pokazać splash i czekać jak domyślnie
   - Tylko GIF oczekujący na odpowiedź zostanie wstrzymany, więc pozostałe będą mogły kontynuować animację
- Jeśli używasz Lokalnych Tablic Kolorów, cała ramka musi zostać nadpisana, ponieważ zastąpi ona paletę całego ekranu, a nie tylko bieżącą ramkę
- Ramki z przeplotem i tekstowe nie będą działać
