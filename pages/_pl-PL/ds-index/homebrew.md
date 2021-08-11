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

- **SD card libraries:** [libfat](https://github.com/devkitPro/libfat) is included in libnds and generally recommended, [libslim](https://github.com/DS-Homebrew/libslim/) can sometimes work better but is unstable at times
- **Graphics libraries:** [easyGL2D](http://rel.phatcode.net/junk.php?id=117), which comes shipped with libnds, is recommended, however [NightFox Lib](https://github.com/knightfox75/nds_nflib) can be used instead
- **Entire toolchains:** [devkitARM](https://devkitpro.org/wiki/Getting_Started) and [libnds](https://libnds.devkitpro.org/) are recommended, as it includes DSi compatibility and has a larger ecosystem, however [ToolchainGenericDS](https://bitbucket.org/Coto88/toolchaingenericds) is an option for flashcard-exclusive development

To get started, [this GBAtemp thread](https://gbatemp.net/threads/useful-resources-to-help-you-out-with-starting-to-make-nds-homebrew.580507/#post-9322674) has a lot of good resources for begginers. For more technical information on the DS(i), see [GBATEK](https://problemkaputt.de/gbatek-contents.htm).

### Flashcardy
DS mode flashcards are a Slot-1 method of running Nintendo DS applications. Flashcards have the advantages of keeping console files and portable files separate, the ability to be used without modding your system and are usable on DS Phat/Lite consoles. However, unlike modding the actual console, there are multiple flashcards on the market, each with different kernel requirements. The kernel you use is the most important.

### DLDI
Inne sloty na karty SD mają (najczęściej) inny hardware, a kod napisany dla jednej karty niekoniecznie będzie działał dla innej karty. DLDI (w skrócie Dynamically Linked Device Interface) próbuje rozwiązać ten problem poprzez patchowanie kodu obsługi karty SD zewnętrznie. Loaders like YSMenu, Wood R4, and TWiLight Menu++ can automatically DLDI patch a homebrew, but if you need to manually patch it in, you can use a [DLDI Patcher](https://www.chishm.com/DLDI#tools) on a computer.

### Bomba Czasowa
W niektórych kernelach kart flash, arbitralna data wygaśnięcia (bardziej znana jako bomba zegarowa) jest zakodowana przez twórców kernela jako sposób na nakłonienie konsumentów do zakupu ich najnowszego produktu. Procedura ta jest następująca:

1. Karta Flash jest uruchamiana i ładuje plik kernela z karty SD bez sprawdzenia, czy jest on sprawdzony przez deweloperów
1. Przy każdym załadowaniu pliku kernela z karty SD sprawdza, czy data w systemie jest wcześniejsza od określonej daty

Jeśli drugi test wypadnie pozytywnie, jądro odmówi uruchomienia systemu. Można to sprawdzić ustawiając datę na najnowszą możliwą wartość. Jednak zabezpieczenia są słabe, a wyniki nie są buforowane, co oznacza, że istnieją sposoby na obejście tego problemu:

Jeśli chcesz używać domyślnego kernelu, który został dodany przez producentów kart flash, zegar systemowy może być ustawiony z powrotem w Ustawieniach systemowych urządzenia. Pamiętaj jednak, że może to zepsuć każdą grę, która opiera się na zegarze systemowym (np. Animal Crossing: Wild World).

Jednak kernele, które są dostarczane z tymi kartami są fundamentalnie wadliwe i lepiej jest je całkowicie wymienić. Na szczęście programiści z innych firm stworzyli alternatywne rozwiązania, z których możesz skorzystać:

- [YSmenu - menu + game loader](https://www.dropbox.com/sh/egadrhxj8gimu5t/AACv2KqWmeXEHkxoYRluobxha?dl=0) - Chociaż nie ma zalet konfigurowalnego menu all-in-one, game loader ma znacznie lepszą kompatybilność z cheatami action-replay
- [TWiLight Menu++ with nds-bootstrap](../twilightmenu/installing-flashcard) - Has a customizable all-in-one menu and supports cheats, but its B4DS mode (the mode used when it doesn't have the DSi's capabilities) has weak compatibility, some games even requiring the Memory Expansion Pak
- [TWiLight Menu++ with YSmenu](../twilightmenu/installing-flashcard) - Customizable all-in-one menu with high compatibility, but lacks cheat support

### Wsparcie ARGV
ARGV jest przekaźnikiem informacji pomiędzy dwoma aplikacjami homebrew Nintendo DS. Może być używany w przypadku forwarderów lub alternatywnego menu.

- Homebrew musi być odpowiednio zaprogramowane, by z tego skorzystać. For example, GBARunner2, NesDS, and GameYob all have ARGV support
- Potrzebny jest również sposób na ustawienie zmiennych ARGV. TWiLight Menu++ i HBMenu pozwalają na ustawienie argumentów ARGV
