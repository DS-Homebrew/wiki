---
lang: pl-PL
layout: wiki
section: ds-index
category: reference
title: TWL_FIRM Nintendo DSi / Nintendo 3DS
description: Informacje o TWL_FIRM Nintendo DSi i Nintendo 3DS
---

### Przygotowywanie CFW
Chociaż większość korzyści z Custom Firmware dotyczy systemów Nintendo DSi i Nintendo 3DS, to umożliwia ono także odblokowanie możliwości konsoli. Instalacja Custom Firmware jest łatwa, a w większości przypadków potrzebujesz tylko karty (micro)SD. Mamy dla Ciebie najlepsze poradniki z instrukcjami krok po kroku.

- [Poradnik Hakowania 3DS](https://3ds.hacks.guide)
   - Komenda Lightning: `mod 3ds`
   - Komenda Kuriisu: `guide 3ds`
- [Poradnik Hakowania DSi](https://dsi.cfw.guide)
   - Komenda Lightning: `mod dsi cfw`
   - Komenda Kuriisu: `guide dsi`

### Szybkości CPU
Nintendo DS zostało dostarczone z procesorem 67 MHz w 2004 roku. Nintendo DSi dostarczono z procesorem 133 MHz w 2009 roku. Większość gier z biblioteki Nintendo DS zostały wykonane przed wyjściem Nintendo DSi, i procesor dostępny dla nich miał 67 MHz. Niektóre aplikacje wiązały się z tą prędkością i w rezultacie nie działałyby one poprawnie z wyższymi taktowaniami zegara procesora. Większość gier wykorzystywałaby większy potencjał nowego procesora, aby uzyskać wyższą wydajność.

nds-bootstrap ma opcje TWL Clock Speed, ale nie bedzie on próbował dostosować naszego ROM do pracy z większym taktowaniem zegara procesora. To zadanie leży w rękach aplikacji, więc aplikacje nie działające z wyższymi taktowaniami NIE są problemem ze strony nds-bootstrap.

### Menu systemowe Nintendo DSi
Menu systemu Nintendo DSi używa podpisanej 32-bitowej liczby całkowitej do określenia ilości wolnego miejsca na urządzeniu. Przy użyciu źródła urządzenia, które przekracza limit 32-bitowej liczby całkowitej, licznik ten jest przepełniony do liczby ujemnej, co powoduje wyświetlenie czarnego ekranu "Wystąpił błąd".

Zakresy powodujące jego przepełnienie określa się na podstawie par. Na przykład 1-2 GB wolnego miejsca jest dozwolone gdy 3-4 nie jest. 5-6GB wolnego miejsca jest dozwolone, a 7-8 znowu nie.

Ta awaria nigdy nie wystąpi, jeśli menu systemowe jest uruchamiane z rzeczywistego układu NAND (ponieważ jego maksymalna pojemność to 128 MB), ale system przekierowania (taki jak hiyaCFW) spowodowałby jej wystąpienie. Na szczęście, ten błąd można łatwo naprawić poprzez umieszczenie plików zastępczych, które ustawią licznik na liczbę dodatnią. hiyaCFW automatycznie zrobi to za Ciebie w najnowszej wersji.

W wersji 1.4.0 podpisy RSA na karcie DS whitelist nie są weryfikowane. Istnieje exploit polegający na podatności na zagrożenia NDSi flashcard whitelist, która pozwala na przejęcie kontroli nad procesorem ARM9. Wymaga wersji 1.4.0 (została załatana w kolejnych wersjach i nie istniała w poprzednich) oraz flashcarta ze zmodyfikowanym ROMem.

### Dostęp do Pola-1 Nintendo DSi & zablokowany
Dostęp do Pola-1 jest zablokowany podczas uruchamiania aplikacji z menu systemowego, z wyjątkiem sytuacji, gdy tą aplikacją jest launcher Pola-1 lub Ustawienia systemowe. Aby uruchomić normalnie nieodtwarzalne kartridże z pola-1, musisz albo wykonać exploit w ustawieniach systemowych, albo zainstalować Unlaunch. Bez żadnego z nich nie można uruchomić nieuruchamialnych flashcards i nie można zrzucić ROM-ów na kartę SD.

White list flashcarda jest sprawdzany za pomocą podpisów RSA, które są zawarte w kluczach RSA na każdej wersji urządzenia, z wyjątkiem 1.4.0. Oznacza to, że ludzie mogą wpisywać na white list swoje własne karty

Przed 1.4.0, white list zawierał tylko dwie sekcje. W 1.4.0, wprowadzono trzecią sekcję, która została stworzona by blokować flashcardy, które omijały pierwsze dwie. Trzecia sekcja ładuje do ośmiu różnych sekcji romu i sprawdza je za pomocą hasha, aby sprawdzić, czy rom nie został naruszony. Jednakże, z powodu zapomnienia o umieszczeniu jakiejkolwiek kontroli poprawności, możemy przepełnić wektor wyjątków / adres przerwania używając wystarczająco dużej wartości. Co najlepsze, działa to na ARM7 (aka procesor bezpieczeństwa), co czyni go pierwszym exploitem dla procesora ARM7. Ponieważ dzieje się to przed zablokowaniem rejestrów SCFG, możemy uruchomić zaawansowane homebrew (takie jak dumpery Pola-1 & external slot-1 dumpers)

Niestety, wymagania są spore. Wymaga wersji 1.4.0 i flashcarda z zmodyfikowanym ROMem. Ponadto, exploit nigdy nie pojawił się oficjalnie, ponieważ Unlaunch był znacznie prostszy w instalacji i miał mniejsze wymagania (sposób na dostanie się do homebrew) z tymi samymi korzyściami.

### Kamera Nintendo DSi
Aplikacja Nintendo DSi Camera ma możliwość robienia zdjęć w formacie JPEG i zapisywania ich w pamięci systemowej lub na karcie SD. Sposób, w jaki jest ładowany ogranicza go do tylko DSi wykonane obrazy, ze względu na brak odpowiedniego HMAC przechowywane wewnątrz niestandardowego tagu EXIF. Żadnych niestandardowych obrazów nie da się odczytać na DSi, niezależnie od tego, czy zostały zrobione na komputerze, czy edytowane.

Do ładowania obrazów używany jest plik `pit.bin`. Jednak rozmiar nagłówka w offsecie 0x16 jest niezaznaczony, więc wystarczająco duża wartość rozmiaru nagłówka może przekroczyć granice i spowodować nadpisanie bufora i przeskok do niepodpisanego kodu. Oto jak zasilany jest Memory Pit.

### Nintendo DSi bootstage 2
Drugi etap bootowania Nintendo DSi ładuje do pamięci launchera plik "title.tmd". Jednakże, nie określają one limitu rozmiaru pliku, co oznacza, że pierwsze 80k bajtów jest ładowane do pamięci RAM, podczas gdy reszta może być niestandardowym ładunkiem. Na tym opiera się exploit Unlaunch.

### RTCom
RTCom to wykorzystanie RTC 3DS do umożliwienia komunikacji między procesorami ARM7 i ARM11, nawet w trybie TWL_FIRM. Dzięki temu funkcje 3DSa mogą być używane w trybie DS(i). Obejmuje to analogowe wejście circle pada, włączenie szerokiego ekranu i wsparcie dla żyroskopu. Obecnie jedynym publicznym ds homebrew, które korzysta z RTCom są niektóre wersje GBARunner2, które mają wsparcie dla funkcji żyroskopowej 3DS. Aby włączyć RTCom, będziesz musiał użyć [TWPatch](https://gbatemp.net/threads/542694/).
