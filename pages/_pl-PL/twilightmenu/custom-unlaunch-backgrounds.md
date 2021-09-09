---
lang: pl-PL
layout: wiki
section: twilightmenu
category: customization
title: Niestandardowe tła startowe
description: Jak utworzyć niestandardowe tła Unlaunch i zainstalować je za pomocą TWiLight Menu++
---

You can find premade Unlaunch backgrounds on the [TWiLight Menu++ skins site](https://skins.ds-homebrew.com/unlaunch/).
{:.alert .alert-info}

Using TWiLight Menu++ you can patch the Unlaunch installer to have a custom background image and text color palette. This needs to be a 256 x 192 GIF, with a few restrictions:
- Wyświetlana będzie tylko pierwsza klatka, bez animowanego tła
- Plik musi mieć rozmiar mniejszy lub równy 15,472 bajtów
- GIFy z ponad 31 kolorami wymagają specjalnie przygotowanych palet, by zapobiec uszkodzeniu

### Instalacja
1. Skopiuj plik GIF do `sd:/_nds/TWiLightMenu/unlaunch/backgrounds`
1. Pobierz [najnowszy instalator Unlaunch](https://problemkaputt.de/unlaunch.zip) i rozpakuj `UNLAUNCH.DSI` na swoją kartę SD
1. Otwórz Ustawienia TWiLight Menu++, przejdź do `Ustawienia Unlaunch` i kliknij na `Tło`, a następnie wybierz te które chcesz
1. Wyjdź z ustawień i uruchom `Unlaunch DSi Installer`
   - Powinien on używać twojego własnego obrazu, jeśli tak nie jest, wyłącz konsolę i upewnij się, że twój GIF jest zgodny z powyższymi wymaganiami
1. Wybierz `Zainstaluj teraz`

### Używanie GIFów z ponad 31 kolorami
As the GIF's palette is loaded to the same area of VRAM as the text palettes it will overwrite them if the palette gets too large, however this can be worked around by including the text palettes in the GIF's palettes. Using this with different colors would also let you have different text colors, should you want that. These instructions will be for [GIMP](https://gimp.org), but any image editor capable of rearranging the palette of an image will work.
1. Otwórz swój obraz w GIMP i upewnij się, że ma 256 x 192 pikseli
1. W pasku menu u góry wybierz `Obraz` -> `Tryb` -> `indeksowany...`
1. Wybierz `Utwórz optymalną paletę` i ustaw maksymalną liczbę kolorów maksymalnie na 226 kolorów
1. Wybierz wzór ditheringu z listy rozwijanej `Ditering kolorów`
   - Obrazy bez ditheringu zazwyczaj kompresują się najlepiej, ale z ditheringiem będą wyglądały lepiej, spróbuj i zobacz, który wygląda najlepiej dla danego rozmiaru
1. Kliknij `konwertuj`
1. Na pasku menu u góry wybierz `Plik` -> `Eksportuj jako...`, nadaj mu nazwę z rozszerzeniem `.gif` i kliknij `Eksportuj`
   - Jeśli wyświetla jakiekolwiek ostrzeżenia, akceptuj
1. W następnym oknie dialogowym wyłącz `komentarz GIF` i kliknij `Eksportuj`
1. Sprawdź rozmiar wyeksportowanego pliku, jeśli waży 15,472 bajtów lub mniej, przejdź do kroku 13
1. Jeśli twój GIF jest zbyt duży, to używając [gifsicle](http://www.lcdf.org/gifsicle/) lub [ezgif.com](https://ezgif.com/optimize) możesz spróbować go zoptymalizować
   - Ta instrukcja użyje ezgif jako jego prostszej wersji, będącej stroną internetową
1. Otwórz stronę https://ezgif.com/optimize i załaduj swojego GIF-a
1. Spróbuj różnych poziomów kompresji, aż znajdziesz najlepszy poniżej 15,472 bajtów (15.11 KiB), najlepiej trochę poniżej, ponieważ GIMP może zwiększyć rozmiar
1. Zapisz zoptymalizowanego GIF-a i otwórz go w programie GIMP
1. Na pasku menu u góry wybierz `Windows` -> `Dockable Dialogs` -> `Colormap`
1. Zmień swój obecny `kolor tła` na #080808 i dodaj 14 nowych kolorów za pomocą przycisku `+`
    - If your image doesn't have at least 133 colors you will need to keep adding colors until the last is index 146
1. Kliknij prawym przyciskiem myszy na mape kolorów i wybierz `Rearrange Colormap...`
1. Arrange your new colors so they match the ones outlined in red: (The 2nd and 3rd columns starting on the 4th row)<br> ![Paleta z poprawnymi kolorami tekstu](/assets/images/custom-unlaunch-bg/unlaunch-palette.png)
1. Użyj selektora kolorów, aby nowe kolory pasowały do tych na powyższym obrazku
1. Na pasku menu u góry wybierz `Plik` -> `Eksportuj jako...`, nadaj mu nazwę z rozszerzeniem `.gif` i kliknij `Eksportuj`
1. W następnym okienku upewnij się, że `Komentarz GIF` jest wyłączony i kliknij `Eksportuj`
1. Upewnij się, że obraz nadal waży poniżej 15,472 bajtów, jeśli jest zbyt duży, powtórz od kroku 10 używając wyższego poziomu kompresji
1. To tyle! Postępuj zgodnie z sekcją [instalacji](#installing) powyżej, aby użyć swojego obrazu!
