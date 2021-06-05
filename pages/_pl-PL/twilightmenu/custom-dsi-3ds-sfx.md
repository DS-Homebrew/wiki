---
lang: pl_PL
layout: wiki
section: twilightmenu
category: customization
title: DSi/3DS Skins - Custom SFX
description: Jak używać niestandardowych efektów muzycznych i dźwiękowych w tle DSi i 3DS dla TWiLight Menu++
---

TWiLightMenu obsługuje niestandardowe pliki dźwiękowe w motywach. Umieść pliki dźwiękowe w podkatalogu `sound` w folderze motywu, na przykład dla motywu `white`, umieścisz pliki w `themes/white/sound/sfx.bin` i `themes/sound/bgm.pcm.raw`. Oba pliki są opcjonalne, jeśli jakiejś zabraknie, domyślna muzyka będzie użyta. Powinieneś następnie też ustawić muzykę w opcjach na "Motyw".

Te instrukcje zakładają, że devkitPro jest zainstalowany razem z mmutil. Możesz pobrać devkitPro na [stronie devkitPro](https://devkitpro.org/wiki/Getting_Started).

## Bank Efektów Dźwiękowych
Bank efektów dźwiękowych zawiera takie efekty dźwiękowe, jak dźwięk wyboru ikony itp.

| Plik        | Opis                                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------------------------- |
| startup.wav | Puszczony podczas uruchomienia. Więcej szczegółów można znaleźć w rozdziale [Dźwięk startowy](#startup-sound) |
| back.wav    | Powrót                                                                                                        |
| launch.wav  | Grane podczas uruchamiania gry                                                                                |
| select.wav  | Odtwarzane podczas przenoszenia wybranego kursora                                                             |
| wrong.wav   | Odtwarzane po dotarciu do końca strony                                                                        |
| switch.wav  | Odtwarzane podczas przełączania stron                                                                         |
| stop.wav    | Odtwarzany w motywie DSi, gdy kursor przestanie się poruszać                                                  |
| bgm.pcm.raw | Nie należy do soundbanku. Zobacz sekcję [Menu BGM](#menu-bgm), aby uzyskać więcej informacji                  |

Następnie możesz uruchomić `make`, aby stworzyć bank efektów dźwiękowych. Wszystkie pliki wymienione powyżej, z wyjątkiem *bgm.pcm.raw* są wymagane, ale możesz je wyciszyć.

Twój wynikowy *sfx.bin* **musi być mniejszy niż 512000B = 512 kB**. Większe pliki spowodują zawieszanie się gry lub nie odtwarzanie niektórych dźwięków.

### Dźwięk Startowy
Podczas gdy inne efekty dźwiękowe będą działać z dowolnym plikiem WAV, dźwięk startowy musi być w określonym formacie, aby działał poprawnie, w przeciwnym razie będzie występować przerwa między zakończeniem dźwięku startowego a rozpoczęciem muzyki w tle.

Plik startup.wav musi być **16-bitowy, 16 kHz**. Możesz użyć np. [Audacity](https://www.audacityteam.org/download/) do konwersji. Po załadowaniu pliku w Audacity, zmień **Project Rate (Hz)** na **16000**, następnie naciśnij **Shift+M** i zmień **Format** na **16-bit PCM**.

Jeśli Twój plik jest w Stereo, powinieneś również przejść do **Tracks > Mix > Mix Stereo down to Mono**.

Musisz ustawić `PlayStartupJingle=1` w swoim `theme.ini`, aby jingiel startowy był odtwarzany.


## Menu BGM
Menu BGM musi być **16-bitowym 16 kHz Mono** plikiem raw PCM. Poniżej przedstawiamy dwie metody konwersji plików audio do tego formatu.

W przeciwieństwie do sfx.bin, *bgm.pcm.raw* może być dowolnie duży.

### ffmpeg
Najprostszym sposobem konwertowania muzyki do użycia w TWiLight Menu++ jest uruchomienie tego polecenia [ffmpeg](https://ffmpeg.org) w terminalu:

```bash
ffmpeg -i [input file] -f s16le -acodec pcm_s16le -ac 1 -ar 16k bgm.pcm.raw
```

Zamień `[plik wejściowy]` na nazwę pliku, który chcesz przekonwertować. Zazwyczaj możesz to wykonać przeciągając plik na okno terminala z kursorem w odpowiednim miejscu.

### Audacity
Jeśli nie chcesz korzystać z wiersza poleceń, możesz również konwertować za pomocą [Audacity](https://www.audacityteam.org/download/).

Aby przekonwertować audio:
1. Załaduj plik w Audacity
1. Jeśli twój plik jest w stereo, kliknij na utwór, a następnie wybierz `Tracks` > `Mix` > `Mix Stereo down to Mono`
1. Zmień `Project Rate (Hz)` w lewym dolnym rogu na `16000`

Aby wyeksportować w poprawnym formacie:
1. Wybierz `File` > `Eksport` > `Eksport audio...`
1. Ustaw `Typ pliku` na `Inne pliki nieskompresowane`
1. Ustaw `Header` na `RAW (header-less)`
1. Ustaw `Encoding` na `Signed 16-bit PCM`
1. Ustaw nazwę wyjściową na `bgm.pcm.raw` i kliknij `Zapisz`
1. Kliknij `OK`, aby przejść do edycji metadanych

Teraz masz plik `bgm.pcm.raw`, który możesz skopiować do pod-folderu `sound` w swoim folderze motywu.
