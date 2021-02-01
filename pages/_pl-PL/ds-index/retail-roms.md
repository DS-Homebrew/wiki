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

- Dla celów nds-bootstrap, możesz załadować plik `.IPS` w celu obejścia wspomnianych patchów. Plik `.IPS` zostanie wpatchowany w nds-bootstrap, aby pliki ROM pozostały nienaruszone. Pakiet plików `.IPS` jest automatycznie dołączony do TWiLight Menu++.
- Do celów Wood R4, te patche są zawarte w samym oprogramowaniu. Nie będziesz musiał modyfikować ROM-a.

W przypadku braku pliku `.IPS` dla Twojego ROM-u albo Twoje oprogramowanie ROM-u nie spatchowało, możesz spróbować bezpośrednio modyfikować ROM-a używając [nds-scene tool](https://gbatemp.net/download/retrogamefan-nds-rom-tool-v1-0_b1215.35735/)

### CloneBoot

Cloneboot dzieje się kiedy gra próbuje wysłać swój własny załadowany plik binarny arm9/arm7 do innej konsoli. Używany jest przez DS Download Play dla gry wieloosobowej z użyciem jednej kopii gry. Nie wszystkie gry używają jednak cloneboot.

Obecnie, patche cloneboot nds-bootstrap nie działają z powodu naprawionych plików binarnych arm9/7, co sprawia, że sygnatury RSA są nieprawidłowe.

### Instrukcje THUMB
Zamiast 32-bitowych zwykłych instrukcji ARM, THUMB stosuje 16-bitowe instrukcje. Jest to przydatne, gdy przepustowość pamięci jest wąskim gardłem.

### Pliki Zapisu
Kartridże Nintendo DS mają 4 znane typy zapisu:

- EEPROM - Electrically Erasable Programmable Read-Only Memory (Elektrycznie Wymazywalna Programowalna Pamięć do Odczytu)
- FLASH
- FRAM - Ferroelectric Random-Access Memory (Ferroelektryczna Pamięć o Dostępie Swobodnym)
- NAND - NOT-AND

Rzadko się też spotyka kartridże z zapisami na bazie NAND: WarioWare DIY & Jam with the Band (USA)/Daigasso Band Brothers

Istnieją różne formaty do użycia w zależności od loadera, ale nds-bootstrap używa surowego formatu `.sav`. Jeśli używasz innego formatu, możesz użyć tej strony do konwertowania: http://www.shunyweb.info/convert.php

### Card Read DMA
Card DMA (stands for Direct Memory Access) is a more efficient way to read cartridge data than by software. When there isn't any data available, code can still execute. In software cartridge data reads, polling the register to see if there is new data wastes times. It is the preferred way of accessing data.

Możesz znaleźć grę używającą dma za pośrednictwem no$gba poprzez włączenie dziennika DMA na ARM9. A DMA access to the card uses AF000001 as the third parameter.
- Na przykład: `DMA2: 04100010 023C18C0 AF000001`

### Donor ROM

In previous nds-bootstrap versions, a Mario Kart DS ROM was needed for SDK3-4 games to work or save. The ROM acted as a Donor ROM. nds-bootstrap grabs the donor's arm7 binary, replacing the original ROM's arm7 binary, in order for the save patches to work, and there was a few side effects as a result. In later nds-bootstrap versions, a Donor ROM is needed for certain THUMB or SDK5 games to boot, as well as save.

### Cheaty Action Replay

Kody cheatów Action Replay to kody, który pozwalają ci na robienie niskopoziomowych, programowalnych zmian w regionach pamięci twoich ulubionych gier. Zmiany te sięgają od prostych zmian wartości do niezwykle zaawansowanych zmian ASM, z których oba mogą zmienić doświadczenie danej gry.

Flashcardy mogą korzystać z tych kodów używając baz danych cheatów. Funkcja cheatów jest zintegrowana z jądrem flashcarda. Następujące jądra mogą wykorzystywać cheaty:
- Wood R4 (`usrcheat.dat`)
- YSMenu (`usrcheat.dat`)

Rozwiązania homebrew/cyfrowe także mogą korzystać z baz danych cheatów, obecnie oprogramowanie może korzystać z następujących:
- [NitroHax](https://www.chishm.com/NitroHax) (`cheats.xml`)
  - NitroHax lets you use cheats with real game cards from a flashcard. The engine used here loads the entire cheats.xml database into the Nintendo DS's limited RAM and tries to manage things from there. This imposes a serious limit on how many cheats you can have, as NitroHax will not load a cheats.xml file past 2.4 MB
- [NitroHax3DS](https://github.com/ahezard/NitroHax3DS/releases) ([fork usrcheat.dat](https://github.com/Epicpkmn11/NitroHax3DS/releases)) (`cheats.xml` bądź `usrcheat.dat`)
  - NitroHax3DS jest wersją NitroHax, która jest uruchomiana z systemowej karty SD na DSi lub 3DS. Wersja oryginalna używa cheats.xml z tym samym limitem 2.4MB jak oryginalny NitroHax, ale jest także fork, który ładuje cheaty z bazy danych usrcheat.dat bez żadnych ograniczeń pamięciowych
- [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) (`usrcheat.dat`)
  - TWiLight Menu++ reads the `usrcheat.dat` and sends off the enabled cheat values to another file, which nds-bootstrap picks up
  - The cheat engine used in nds-bootstrap is based on the one used in NitroHax. However, due to the cheat file containing only enabled cheats for that specific title, there is only a limit to how many cheats can be enabled, not a limit on the database size
  - Bootstrap 4 DS (the nds-bootstrap version used on flashcards) does not support cheats, due to not having enough RAM and the limitations of the Memory Expansion Pack

Dla najbardziej kompletnej bazy danych cheatów zalecamy użycie tej od DeadSkullzJr zatytułowanej [DeadSkullzJr's Cheat Database](https://gbatemp.net/threads/deadskullzjrs-nds-cheat-databases.488711).

Kody cheatów zwykle mają typy od A do E, oto ich opisy:

- Kod 0xE jest typem kodu 32-bitowego, który pozwala ci na wielokrotne zapisywanie w wielu kolejnych adresach jednocześnie. Zasadniczo jest on podobny do podstawowego 32-bitowego kodu zapisu RAM (0x0), poza tym, że nie ma adresów wymienionych obok wartości, które chcesz zapisać. Zamiast tego, typ kodu 0xE jest zaprogramowany do automatycznego rozgałęzienia z adresu początkowego, a następie ustalenia adresu do zapisu. Stąd musisz tylko wpisać wartość do zapisu by program odwalił robotę.

Credits: (`DeadSkullzJr`)
