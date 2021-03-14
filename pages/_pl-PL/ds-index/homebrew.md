---
lang: pl-PL
layout: wiki
section: ds-index
category: reference
title: Homebrew
description: Informacje o Homebrew na Nintendo DS
---

### Tworzenie

Zwykle do tworzenia Homebrew na Nintendo DS używa się narzędzi devkitPro, takich jak devkitARM, libnds czy libfat. Jednakże można pójść własną drogą i używać alternatywnych programów:

- **SD card libraries:** [DevkitPro](https://devkitpro.org/) recommends [libfat](https://github.com/devkitPro/libfat). We recommend using [libslim](https://github.com/DS-Homebrew/libslim/) instead, as it allows usage of different partitions, quicker speeds, and non-blocking
- **Graphics libraries:** We recommend using [easyGL2D](http://rel.phatcode.net/junk.php?id=117), which comes shipped with libnds. However, you can use [NightFox Lib](https://github.com/knightfox75/nds_nflib)
- **Entire toolchains:** We recommend using [devkitARM](https://devkitpro.org/wiki/Getting_Started) and [libnds](https://libnds.devkitpro.org/), as it includes DSi compatibility and has a larger ecosystem. However, if your target is exclusively flashcards on a Nintendo DS, feel free to use [ToolchainGenericDS](https://bitbucket.org/Coto88/toolchaingenericds)

### Flashcardy

Flashcardy DS mode to metoda slot-1 uruchamiania aplikacji Nintendo DS. Flashcardy mają taką zaletę, że trzymają pliki konsoli oddzielnie od plików przenośnych. Można je także używać bez modowania konsoli i można ich używać na konsolach DS Phat/Lite. Jednakże w przeciwieństwie do modowania konsoli, na rynku znajduje się wiele flashcardów, każdy z nich potrzebuje innego jądra. Najważniejsze jest to, jakiego jądra używasz.

[**Trwają prace** nad zrobieniem indeksu flashcardów](https://nightyoshi370.github.io/mm-github-pages-starter/), który posiada jądra, oprogramowania, recenzje i linki do kupna.

### DLDI

Inne sloty na karty SD mają (najczęściej) inny hardware, a kod napisany dla jednej karty niekoniecznie będzie działał dla innej karty. DLDI (w skrócie Dynamically Linked Device Interface) próbuje rozwiązać ten problem poprzez patchowanie kodu obsługi karty SD zewnętrznie. Loadery jak YSMenu, Wood R4 czy TWiLight Menu++ mogą automatycznie w ten sposób patchować homebrew, ale jeśli musisz spatchować tak coś ręcznie, możesz użyć [DLDI Patcher](https://www.chishm.com/DLDI#tools) w zależności od urządzenia.

### Time bomb

Bomba czasowa to czas wygaśnięcia jądra nagrywarki flashcard, który jest używany przez producentów w celu zmuszenia użytkowników do kupienia nowego egzemplarza. Gdy twój zegar systemowy przekroczy określoną datę, jądrą odmówi uruchomienia i powiadomi Cię o wygaśnięciu. Na szczęście flaga nie jest nigdzie ustawiona, tylko obsługiwana jest przez oprogramowanie flashcarda, co pozwala nam na dwa obejścia:

- Ponieważ funkcja opiera się na czasie systemowym, możesz ustawić wcześniejszą datę. Spowoduje to popsucie każdej gry używającej czasu systemowego, ale pozwoli Ci na używanie domyślnego jądra.
- Ponieważ funkcja opiera się na jądrze, a nie na oprogramowaniu, możesz przełączyć się na alternatywne jądro. Masz dwie opcje:
   - [YSmenu](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/) -- Menu jest dosyć brzydkie i pokazuje tylko pliki `.nds`, ale ma o wiele lepsze wsparcie gier i cheatów oraz nie wymaga memory paka
   - [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu) -- Przydatne jeśli chcesz mieć wszystkie ROMy z różnych konsol w jednym menu. Są dwa sposoby na uruchamianie gier DS z TWiLight Menu++:
      - Z B4DS: Wymaga Memory Expansion Pak dla rozszerzonej kompatybilności gier i nie wspiera cheatów. Ale działa na wszystkich flashcardach, które są wspierane przez TWiLight Menu++
      - Z YSMenu: Łączy kompatybilność YSMenu z lepszym menu TWiLight Menu++, ale cheaty nie są wspierane

Rekomendujemy YSMenu(z TWiLight Menu++ jeśli tak preferujesz) ze względu na większość kompatybilność i brak potrzeby Memory Expansion Pak. Jeśli chcesz YSMenu, DeadSkullzJr zrobił [repozytorium Dropbox](https://www.dropbox.com/sh/egadrhxj8gimu5t/AACv2KqWmeXEHkxoYRluobxha?dl=0) z każdym głównym jądrem rozruchu, już przygotowanymi dla twojego flashcarda. Jedyne co trzeba zrobić to przenieść do katalogu głównego karty SD. Instrukcje instalacji TWiLight Menu++ są [na stronie instalacji na flashcarda](../twilightmenu/installing-flashcard).

Aby sprawdzić, czy twoja nagrywarka ma bombę czasową, ustaw datę twojego systemu na najnowszą możliwą i uruchom ją.

### ARGV support
ARGV to nadajnik informacji pomiędzy dwoma aplikacjami homebrew na Nintendo DS. Ta funkcja może być używana przez forwardery czy alternatywne menu.

- Homebrew musi być odpowiednio zaprogramowane, by z tego skorzystać. Na przykład GBARunner2, NesDS i GameYob mają implementację ARGV
- Potrzebny jest również sposób na ustawienie zmiennych ARGV. TWiLight Menu++ i HBMenu pozwalają na ustawienie argumentów ARGV
