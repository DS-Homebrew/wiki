---
lang: pl_PL
layout: wiki
section: ds-index
category: guides
title: Hardmod
description: Jak wykonać hardmoda Nintendo DSi
---

Hardmodowanie polega na fizycznym lutowaniu płyty głównej Nintendo DSi do adaptera karty SD w celu podłączenia do komputera. Jest to przydatne by przywrócić kopię zapasową NAND, przeglądać NAND na swoim komputerze itp...

### Nintendo DS
[![Original DS motherboard with touch-points labeled](/assets/images/ds-hardmod/mobo_pinout.png)](/assets/images/ds-hardmod/mobo_pinout.png)

### Nintendo DSi

By wykonać hardmoda Nintendo DSi / DSi XL (LL) będziesz potrzebować:
   - [Lutownica z końcówką jak u ołówka](https://www.amazon.com/dp/B01N4571Q6)
   - [Bardzo cienki drut](https://allegro.pl/oferta/drut-ok-30awg-drut-miedziany-ocynowany-10161055095), 28AWG lub mniejszy, najlepiej 30AWG wzwyż
   - Adapter SD na microSD
   - Czytnik kart SD, który może odczytywać czipy eMMC działające w trybie jednego wiersza danych. [Oto przykład (Amazon)](https://www.amazon.com/dp/B006T9B6R2)
   - [Win32DiskImager](https://sourceforge.net/projects/win32diskimager/) i [HxD](https://mh-nexus.de/en/downloads.php?product=HxD20) jeśli korzystasz z Windowsa
   - Działający backup NAND hardmodowanego DSi
   - Czucia się komfortowo lutując pola o średnicy nawet 0,5 mm

#### Pinout DSi - strona A
[![DSi side A pinouts](/assets/images/dsi-hardmod/side_a.jpg)](/assets/images/dsi-hardmod/side_a.jpg)
#### Pinout DSi - strona B
[![DSi side B pinouts](/assets/images/dsi-hardmod/side_b.png)](/assets/images/dsi-hardmod/side_b.png)
#### Pinout DSi XL - strona B
[![DSi XL side B pinouts](/assets/images/dsi-hardmod/dsi_xl_side_b.png)](/assets/images/dsi-hardmod/dsi_xl_side_b.png)

- Będziesz musiał przylutować punkty z płyty głównej do adaptera kart microSD
   - CMD do pinu 2
   - GND do pinów 3 i 6
   - CLK do pinu 5
   - DAT0 do pinu7

#### Przykład przylutowanego adaptera microSD
[![microSD example](/assets/images/dsi-hardmod/sd.jpg)](/assets/images/dsi-hardmod/sd.jpg)

- Wsadź adapter kart microSD do komputera
   - **UWAGA** - WIndows poprosi cię o sformatowanie go: **ABSOLUTNIE NIE** formatuj go - może to spowodować nieodwracalne uszkodzenia

#### Usuwanie stopki no$gba
Najpierw musisz usunąć stopkę NOCASH z kopii zapasowej, którą flashujesz DSi. Można to zrobić uruchamiając aplikację HiyaCFW Helper znajdującą się [tutaj](https://github.com/mondul/HiyaCFW-Helper/releases/latest).

1. Zainstaluj wersję na system używany przez Ciebie
1. Uruchom skrypt, wybierając kopię zapasową NAND, którą chcesz flashnąć swojego DSi
1. Przełącz na tryb NAND z przyciskiem po lewej stronie ścieżki
1. Wciśnij `Start` by utworzyć kopię zapasową NAND bez stopki no$gba

- Po ukończeniu skryptu powinien pojawić się plik z długą nazwą kończącą się na `-no-footer.bin` w folderze otworzonym przez terminal
   - Użyj tego pliku jako obrazu NAND, którego wgrasz na DSi


#### Instrukcje dla Windows (pomiń jeśli korzystasz z macOS / Linux)

1. Otwórz Win32DiskImager
1. Otwórz ikonę folderu i przejdź do pulpitu. W polu tekstowym wpisz `NAND_0.bin`. Zaznaczając typ, wybierz `Wszystkie pliki  (*.*)`
1. Wybierz urządzenie, które jest DSi i wciśnij read
1. Po zakończeniu zrób to samo, tym razem z `NAND_1.bin`
1. Otwórz HxD i przeciągnij oba pliki do edytora. W górnym pasku wybierz "Analizy", następnie z "Porównanie danych" wybierz "Porównaj".
1. Wybierrz to w celu porównaniania obu plików, wciśnij OK po zakończeniu
   - Jeśli wyskoczy "Wybrane pliki są identyczne", możesz przejść dalej
   - Jeśli to nie wyskoczy i oba pliki nie mają około 240MB, zrzuć je ponownie
1. Otwórz Win32DiskImager, wciśnij ikonę folderu i wybierz utworzony wcześniej backup NAND
1. Sflashuj go używając przycisku `Write`
1. Odłącz adapter i spróbuj uruchomić konsolę

#### Instrukcje dla Linux / macOS (pomiń jeśli korzystasz z Windowsa)


1. Dowiedz się, gdzie karta SD jest zamontowana
   - Linux:
      1. Odłącz adapter karty SD
      1. Run `lbslk` in a terminal
      1. Podłącz adapter karty SD
      1. Uruchom ponownie `lbslk`
      1. Tym razem powinno pojawić się nowe urządzenie
         - It may be called `/dev/sdb`, make sure you note down what it is called on *your* computer

   - macOS:
      1. Odłącz adapter karty SD
      1. Run `df` in a terminal
      1. Podłącz adapter karty SD
      1. Uruchom ponownie `df`
      1. Na liście powinno się pokazać nowe urządzenie
         - It may be called `/dev/disk1s1`, make sure you note down what it is called on *your* computer

1. Zrzuć NAND
   - Run the following command in a terminal:
      - `cat {nazwa-urządzenia} > nand0.bin`
      - Zamień `{nazwa-urządzenia}` na lokalizację karty SD
      - N.p. ` cat /dev/sdb > nand0.bin`
      - Następnie uruchom `cat {nazwa-urządzenia} > nand1.bin`


1. Porównaj zrzuty NAND
   1. Uruchom następujące polecenie:
      - Linux: `md5sum nand0.bin nand1.bin`
      - macOS: `md5 -r nand0.bin nand1.bin`
   1. Sprawdź czy wygenerowane hashe są identyczne
   1. Jeśli nie, zrzuć NAND ponownie, poprawiając okablowanie w razie potrzeby
   1. Zrzucaj dopóki hashe nie będą się zgadzać

1. Sflashuj NAND
   1. Zlokalizuj backup NAND używając terminala
   1. Uruchom następujące polecenie:
      - `cat {backup-nand} > {nazwa-urządzenia}`
      - Replace `{existing-nand-backup}` with the location and name of your old NAND backup
      - Replace `{device-name}` with the mount point of the SD card

At this point you may unplug the SD card adapter and attempt to turn on the DSi. If all went well, the DSi should have booted to the state it was when the backup was created!
