---
lang: pl-PL
layout: wiki
section: ds-index
category: reference
title: ROM-y detaliczne
description: Informacje dotyczące detalicznych gier DS
---

### Anty-Piractwo
AP (skrót od anty-piractwo) jest metodą stosowaną przez deweloperów w celu wymuszania legalnych zakupów i zapobiegania piractwu. Może to być obchodzone przez loadera lub samego ROM-a.

- Dla celów nds-bootstrap, możesz załadować plik `.ips` w celu obejścia wspomnianych łatek. Ten plik `.ips` zostanie załatany wewnątrz nds-bootstrap, więc możesz zachować pliki ROM nienaruszone. Pakiet plików `.ips` jest automatycznie dołączany do TWiLight Menu++.
- Do celów Wood R4, te patche są zawarte w samym oprogramowaniu. Nie będziesz musiał modyfikować ROM-a.

W przypadku, gdy nie ma pliku `.ips` dla twojego ROMu lub twoje oprogramowanie nie załatało ROMu, możesz spróbować bezpośrednio zmodyfikować sam ROM używając [nds-scene tool](https://gbatemp.net/download/retrogamefan-nds-rom-tool-v1-0_b1215.35735/)

### CloneBoot
Cloneboot to sytuacja, w której gra wysyła swoje własne, załadowane ARM7 i ARM9 do innej konsoli. Jest to używane przez DS Download Play dla multiplayera na jednej karcie. Chociaż nie wszystkie gry, które mają multiplayer na jedną kartę używają cloneboot.

Obecnie łatki cloneboot dla nds-bootstrap są uszkodzone z powodu poprawek dla binarek ARM7 i ARM9, co sprawia, że sygnatury RSA są nieważne.

### Pliki Zapisu
Kartridże Nintendo DS mają 4 znane typy zapisu:

- EEPROM - Electrically Erasable Programmable Read-Only Memory (Elektrycznie Wymazywalna Programowalna Pamięć do Odczytu)
- FLASH
- FRAM - Ferroelectric Random-Access Memory (Ferroelektryczna Pamięć o Dostępie Swobodnym)
- NAND - NOT-AND

Chociaż rzadko występują kartridże DS z zapisami na bazie NANE: WarioWare DIY & Jam with the Band (USA)/Daigasso Band Brothers

Istnieją różne formaty używane w zależności od programu ładującego, ale nds-bootstrap używa surowego formatu`.sav`. Jeśli korzystasz z innego formatu, tutaj jest strona, której możesz użyć do konwersji: http://www.shunyweb.info/convert.php

### Assembly
Język asembly to każdy język programowania niskiego poziomu, w którym istnieje silny związek między instrukcjami języka a instrukcjami procesora. W DS kod asemblera występuje w postaci instrukcji ARM lub THUMB, przy czym instrukcje THUMB są podzbiorem instrukcji ARM. Instrukcje THUMB są przydatne do oszczędzania przepustowości pamięci, ponieważ wykorzystują instrukcje 16-bitowe zamiast zwykłych instrukcji 32-bitowych używanych przez ARM. Więcej informacji na temat instrukcji montażu, jak również wiele innych informacji technicznych dla DS i DSi, można znaleźć na [GBATEK](https://problemkaputt.de/gbatek.htm).

### Odczyt Kart DMA
DMA (skrót od Direct Memory Access) jest bardziej efektywnym sposobem odczytu danych z kartridża niż oprogramowanie. Gdy nie ma dostępnych danych, kod może być nadal wykonywany. Przy programowym odczycie danych z kartridża, odpytywanie rejestru w celu sprawdzenia, czy są nowe dane marnuje czas. Jest to preferowany sposób dostępu do danych.

Możesz znaleźć grę używającą dma za pośrednictwem no$gba poprzez włączenie dziennika DMA na ARM9. Dostęp DMA do karty wykorzystuje AF000001 jako trzeci parametr.
- Na przykład: `DMA2: 04100010 023C18C0 AF000001`

### Cheaty Action Replay
Action Replay cheat codes to kody, które pozwalają Ci na dokonanie niskopoziomowych programowalnych zmian w regionie pamięci Twojej ulubionej gry (gier). Zmiany te sięgają od prostych zmian wartości po niezwykle zaawansowane zmiany ASM, z których obie mogą całkowicie zmienić wrażenia z gry (gier).

Flashcards mogą korzystać z kodów cheatów poprzez użycie baz danych cheatów. Funkcjonalność cheatów jest zintegrowana odpowiednio z jądrem karty flash. Następujące jądra mogą korzystać z cheatów:
- Wood R4 (`usrcheat.dat`)
- YSMenu (`usrcheat.dat`)

Homebrew/digital-based solutions can also take advantage of the cheat databases, the software currently available can use the following:
- [NitroHax](https://www.chishm.com/NitroHax) (`cheats.xml`)
   - NitroHax pozwala na używanie cheatów z prawdziwymi kartami gier z flashcard. Silnik użyty tutaj ładuje całą bazę danych cheats.xml do ograniczonej pamięci RAM Nintendo DS i próbuje zarządzać wszystkim stamtąd. To nakłada poważne ograniczenie na ilość cheatów, które możesz mieć, ponieważ NitroHax nie załaduje pliku cheats.xml większego niż 2.4 MB
- [NitroHax3DS](https://github.com/ahezard/NitroHax3DS/releases) ([fork usrcheat.dat](https://github.com/Epicpkmn11/NitroHax3DS/releases)) (`cheats.xml` bądź `usrcheat.dat`)
   - NitroHax3DS jest wersją NitroHax, która jest uruchomiana z systemowej karty SD na DSi lub 3DS. Wersja oryginalna używa cheats.xml z tym samym limitem 2.4MB jak oryginalny NitroHax, ale jest także fork, który ładuje cheaty z bazy danych usrcheat.dat bez żadnych ograniczeń pamięciowych
- [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) (`usrcheat.dat`)
   - TWiLight Menu++ odczytuje `usrcheat.dat` i wysyła włączone wartości cheatów do innego pliku, który odbiera nds-bootstrap
   - Silnik cheatów użyty w nds-bootstrap jest oparty na tym z NitroHax. Jednakże, z powodu pliku cheatów zawierającego tylko cheaty dla danego tytułu, istnieje limit ilości cheatów, które mogą być aktywowane, a nie limit wielkości bazy danych
   - Bootstrap 4 DS (wersja nds-bootstrap używana na flashcardach) nie obsługuje cheatów, z powodu niewystarczającej ilości pamięci RAM i ograniczeń Memory Expansion Pack

Aby uzyskać najkompletniejszą bazę cheatów, zalecamy skorzystanie z bazy stworzonej przez DeadSkullzJr zatytułowanej [DeadSkullzJr's Cheat Database](https://gbatemp.net/threads/deadskullzjrs-nds-cheat-databases.488711).

Kody cheatów zwykle mają typy od A do E, oto ich opisy:

- Kod 0xE jest typem kodu 32-bitowego, który pozwala Ci na wielokrotne zapisywanie w wielu kolejnych adresach jednocześnie. Zasadniczo jest on podobny do podstawowego 32-bitowego kodu zapisu RAM (0x0), poza tym, że nie ma adresów wymienionych obok wartości, które chcesz zapisać. Zamiast tego, typ kodu 0xE jest zaprogramowany do automatycznego rozgałęzienia z adresu początkowego, a następie ustalenia adresu do zapisu. Stąd musisz tylko wpisać wartość do zapisu by program odwalił robotę.
