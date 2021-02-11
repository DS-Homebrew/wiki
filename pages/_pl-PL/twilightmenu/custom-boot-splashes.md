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
- Pliki GIF powyżej 1MiB (tryb DSi) lub 256KiB (tryb DS) mogą nie odtwarzać się w pełnej prędkości, ponieważ będą dekompresowane w locie
- Between the two, the GIFs must be less than about 10MB (DSi Mode) or about 2MB (DS Mode)
- If both GIFs are set to loop forever then they will show for 3 seconds, so set a loop count on at least one to control the time
- The user input flag is supported so set it and a long delay on a frame if you want to show a splash and wait like the defaults
  - Only the GIF waiting for input will be paused, so the other can continue animating
- If using Local Color Tables the whole frame must be overwritten as it will replace the whole screen's palette, not just the current frame
- Interlaced and text frames will not work
