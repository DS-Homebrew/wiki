---
lang: pl-PL
layout: wiki
section: twilightmenu
category: other
title: Tworzenie Dysków RAM
description: Jak tworzyć dyski RAM do używania starych homebrew DS używając TWiLight Menu++
---

Nie musisz za tym podążać, jeśli używasz nagrywarki flashard.
{:.alert .alert-info}

Aby utworzyć dysk RAM, pobierz [to narzędzie](http://memory.dataram.com/products-and-services/software/ramdisk#freeware) (kliknij `Download Software`) i postępuj zgodnie z poniższymi instrukcjami.

Instrukcje @Dakkon7, zmodyfikowane przez RocketRobz:

1. Uruchom RAMDisk
1. Kliknij **View** -> **Advanced**
1. W **Disk Size** wpisz `12` jeśli masz DSi, `28` jeśli masz 3DS. Nad **Max 1023 MB**
1. Odznacz **Utwórz katalog TEMP**, jeśli jest oznaczony
1. Kliknij **Load/Save**
1. Kliknij `Start RAMDisk`, powinno Ci sie pojawić okienko dla twojego pliku .img
1. Umieść każdy plik i/lub folder wymagany przez homebrew albo/i plik(i), które chcesz używać
1. W programie RAMDisk, kliknij `Save Disk Image Now`
1. Zapisz `romname.img` w folderze o nazwie `ramdisks` w lokalizacji pliku .nds
1. Kliknij `Stop RAMDisk` kiedy skończysz
1. W TWiLight Menu++, otwórz ustawienia gry dla swojego homebrew
1. Ustaw dysk RAM na 0
1. Uruchom homebrew, powinien przeczytać utworzony dysk RAM
