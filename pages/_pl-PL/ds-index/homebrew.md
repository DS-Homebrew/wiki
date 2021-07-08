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

- **Biblioteki dla kart SD:** [DevkitPro](https://devkitpro.org/) zaleca [libfat](https://github.com/devkitPro/libfat). Zalecamy używanie [libslim](https://github.com/DS-Homebrew/libslim/) zamiast tego, ponieważ pozwala na korzystanie z różnych partycji, szybszą prędkość i brak blokowania
- **Biblioteki graficzne:** Zalecamy użycie [easyGL2D](http://rel.phatcode.net/junk.php?id=117), która jest dostarczana z libnds. Możesz jednak użyć [NightFox Lib](https://github.com/knightfox75/nds_nflib)
- **Ważne toolchainy:** Zalecamy używanie [devkitARM](https://devkitpro.org/wiki/Getting_Started) i [libnds](https://libnds.devkitpro.org/), ponieważ zawierają one kompatybilność z DSi i mają większy ekosystem. Jeśli jednak Twoim celem są wyłącznie flacshardy na Nintendo DS, możesz używać [ToolchainGenericDS](https://bitbucket.org/Coto88/toolchaingenericds)

### Flashcardy

Flashcardy DS mode to metoda slot-1 uruchamiania aplikacji Nintendo DS. Flashcardy mają taką zaletę, że trzymają pliki konsoli oddzielnie od plików przenośnych. Można je także używać bez modowania konsoli i można ich używać na konsolach DS Phat/Lite. Jednakże w przeciwieństwie do modowania konsoli, na rynku znajduje się wiele flashcardów, każdy z nich potrzebuje innego jądra. Najważniejsze jest to, jakiego jądra używasz.

[**Trwają prace** nad zrobieniem indeksu flashcardów](https://nightyoshi370.github.io/mm-github-pages-starter/), który posiada jądra, oprogramowania, recenzje i linki do kupna.

### DLDI

Inne sloty na karty SD mają (najczęściej) inny hardware, a kod napisany dla jednej karty niekoniecznie będzie działał dla innej karty. DLDI (w skrócie Dynamically Linked Device Interface) próbuje rozwiązać ten problem poprzez patchowanie kodu obsługi karty SD zewnętrznie. Loadery jak YSMenu, Wood R4 czy TWiLight Menu++ mogą automatycznie w ten sposób patchować homebrew, ale jeśli musisz spatchować tak coś ręcznie, możesz użyć [DLDI Patcher](https://www.chishm.com/DLDI#tools) w zależności od urządzenia.

### Bomba Czasowa

W niektórych kernelach kart flash, arbitralna data wygaśnięcia (bardziej znana jako bomba zegarowa) jest zakodowana przez twórców kernela jako sposób na nakłonienie konsumentów do zakupu ich najnowszego produktu. Procedura ta jest następująca:

1. Karta Flash jest uruchamiana i ładuje plik kernela z karty SD bez sprawdzenia, czy jest on sprawdzony przez deweloperów
1. Przy każdym załadowaniu pliku kernela z karty SD sprawdza, czy data w systemie jest wcześniejsza od określonej daty

Jeśli drugi test wypadnie pozytywnie, jądro odmówi uruchomienia systemu. Można to sprawdzić ustawiając datę na najnowszą możliwą wartość. Jednak zabezpieczenia są słabe, a wyniki nie są buforowane, co oznacza, że istnieją sposoby na obejście tego problemu:

Jeśli chcesz używać domyślnego kernelu, który został dodany przez producentów kart flash, zegar systemowy może być ustawiony z powrotem w Ustawieniach systemowych urządzenia. Pamiętaj jednak, że może to zepsuć każdą grę, która opiera się na zegarze systemowym (np. Animal Crossing: Wild World).

Jednak kernele, które są dostarczane z tymi kartami są fundamentalnie wadliwe i lepiej jest je całkowicie wymienić. Na szczęście programiści z innych firm stworzyli alternatywne rozwiązania, z których możesz skorzystać:

- [YSmenu - menu + game loader](https://www.dropbox.com/sh/egadrhxj8gimu5t/AACv2KqWmeXEHkxoYRluobxha?dl=0) - Chociaż nie ma zalet konfigurowalnego menu all-in-one, game loader ma znacznie lepszą kompatybilność z cheatami action-replay
- [TWiLight Menu++ z nds-bootstrap](/twilightmenu/installing-flashcard) - ma konfigurowalne menu all-in-one i obsługuje cheaty, ale jego tryb B4DS (tryb używany, gdy nie ma możliwości DSi) ma słabą kompatybilność, niektóre gry nawet wymagają Memory Expansion Pak
- [TWiLight Menu++ z YSmenu](/twilightmenu/installing-flashcard) - konfigurowalne menu all-in-one z wysoką kompatybilnością, ale brakuje wsparcia dla cheatów

### Wsparcie ARGV
ARGV jest przekaźnikiem informacji pomiędzy dwoma aplikacjami homebrew Nintendo DS. Może być używany w przypadku forwarderów lub alternatywnego menu.

- Homebrew musi być odpowiednio zaprogramowane, by z tego skorzystać. Na przykład GBARunner2, NesDS i GameYob mają implementację ARGV
- Potrzebny jest również sposób na ustawienie zmiennych ARGV. TWiLight Menu++ i HBMenu pozwalają na ustawienie argumentów ARGV
