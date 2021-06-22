---
lang: pl-PL
layout: wiki
section: hiyacfw
title: Troubleshooting
category: other
description: Informacje o rozwiązywaniu problemów dla hiyaCFW
---

## #-2435-8325
Jeśli twoje Nintendo DSi pokazuje błąd w tym formacie podczas uruchamiania, z # będącym liczbą, oznacza to, że bootstage 2 myśli, że coś jest nie tak z SDNAND. Usterka ta zazwyczaj znika przy [reinstalacji hiyaCFW](installing-hiyacfw).

## "Wystąpił błąd"
Kiedy Menu Nintendo DSi wykrywa problem to zazwyczaj pokazuje ten komunikat o błędzie, przyczynami mogą być:

#### Błąd wolnego miejsca
Menu Nintendo DSi posiada błąd podczas sprawdzania wolnego miejsca na dużych urządzeniach pamięci. Chociaż nie występuje to na aktualnym NAND (ponieważ chip nigdy nie może przekraczać 128 MB), może się to zdarzyć przy użyciu karty SD.

Co działa i co nie przy każdym oddziale 2GB. Na przykład posiadanie 0-2 Gb wolnej pamięci działa, ale 2-4 Gb już nie. To samo dotyczy 4-6 GiB i 6-8 GiB, aż do osiągnięcia rozmiaru karty SD.

Najnowsza wersja hiyaCFW może tworzyć puste pliki aby obejść ten problem, więc upewnij się że pobrałeś najnowszą wersję [hiyaCFW](https://github.com/RocketRobz/hiyaCFW/releases/latest/download/hiyaCFW.7z) i skopiuj `hiya.dsi` z "for SDNAND SD card" do katalogu głównego karty SD.

#### Ponad 39 tytułów
Menu Nintendo DSi ma limit 39 tytułów. Jeśli masz więcej niż 39 usuń niektóre z folderów w `sd:/title` lub użyj [TMFH](https://github.com/JeffRuLz/TMFH/releases/latest) aby je odinstalować.

#### Zbyt dużo miejsca używanego przez DSiWare
Istnieje również limit 200 bloków (25MB) dla DSiWare w folderze `00030004`. Można to obejść instalując je jako aplikacje systemowe za pomocą [TMFH](https://github.com/JeffRuLz/TMFH/releases/latest).

#### Nieprawidłowy tytuł
Istnieje kilka rzeczy, które musisz wziąć pod uwagę podczas dodawania tytułów do hiyaCFW:
- Nie można uruchomić zrzutów kart do gry bez użycia [forwarderów](forwarders)
- Homebrew muszą być zbudowane poprawnie przy użyciu nowoczesnych narzędzi do pracy z Nintendo DSi Menu
