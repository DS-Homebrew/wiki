---
lang: pl-PL
layout: wiki
section: nds-bootstrap
title: FAQ & Troubleshooting
long_title: nds-bootstrap FAQ & Troubleshooting
description: FAQ & Troubleshooting for nds-bootstrap
---

#### Dlaczego przy próbie załadowania gry z karty SD pojawia się biały ekran?
- Najpierw sprawdź [listę kompatybilności nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0), by się upewnić czy twoja gra jest kompatybilna
- Spróbuj włączyć grę bez żadnych cheatów, ponieważ niektóre nie są na razie kompatybilne z nds-bootstrap, wciśnij <kbd class="l">L</kbd>, by wyłączyć wszystie cheaty
- Jeśli działało to wcześniej, usuń foldery `fatTable` i `patchOffsetCache` w `sd:/_nds/nds-bootstrap/`

#### nds-bootstrap troubleshooting
Jeśli masz problemy z korzystaniem z najnowszej wersji nds-bootstrap, oto jak możesz je rozwiązać.

1. Run the game with different settings, including changing the ARM9 CPU Speed, DS/DSi Mode, sound quality, Card Read DMA, etc
2. Usuń foldery `fatTable` i `patchOffsetCache` w `sd:/_nds/nds-bootstrap/`
3. To prawdopodobnie nie jest aż tak duży problem; zapytaj na [serwerze Discord](https://discord.gg/yD3spjv)

Jeśli usłyszysz, że jest to problem z nds-bootstrap, sprawdź czy gra nie została już zgłoszona na GitHubie. Sprawdź również zamknięte sprawy, na wypadek gdybyśmy mieli jedną zamkniętą sprawę w preferencji innej. Jeśli nie ma do niego przypisanego żadnego problemu na GitHubie, utwórz nowy.

Upewnij się również, że dodałeś go do [listy kompatybilności](https://wiki.ds-homebrew.com/nds-bootstrap/testing) w Arkuszach Google.

#### Dlaczego Multiplayer nie działa?
To jest [znany problem](https://github.com/DS-Homebrew/nds-bootstrap/issues/553) z cloneboota. Proszę czekaj na poprawkę.

#### Dlaczego problemy z ładowaniem ROMów się pojawiają, mimo że są one uruchamiane natywnie?
nds-bootstrap patchuje funkcje ROMu do uruchamiania z karty SD, jako że ROMy są zakodowane do odczytu z Pola-1. Istnieją również problemy z timingiem i środkami AP (które w większości zostały już usunięte), z których oba spowodowałyby, że ROM-y nie działałyby prawidłowo. Aby poprawić wydajność, nds-bootstrap zmniejsza stertę w pamięci gry, co przerywa niektóre gry, ale zarówno forwardery, jak i TWiLight Menu++ naprawiają niedziałające gry zepsute przez heap shrink.

#### Dlaczego warto korzystać z nds-bootstrap zamiast zwykłego flashcard?
- Niektóre kompatybilne ROM-y są ładowane do pamięci RAM, dzięki czemu czas ładowania jest szybszy niż w przypadku zwykłych kartridży
- Pamięć VRAM można rozszerzyć do 32-bitów
- Wykorzystanie dodatkowej prędkości procesora DSi, pozwala doświadczenia lepszej wydajność w niektórych grach
- Wzbogać swój dźwięk dzięki częstotliwości 48 kHz
- Użyj trybu DSi, umożliwiającego korzystanie z funkcji DSi
- Używając niektórych kartridży, możesz wykorzystać IR w swojej aplikacji
- nds-bootstrap jest otwartym źródłem, co oznacza, że deweloperzy mogą go zawsze aktualizować, aby naprawić błędy i inne rzeczy, nawet jeśli projekt zostanie przerwany
- DS Memory Expansion Pak jest emulowany, co oznacza, że gry wymagające tego akcesorium będą działać
- Zamień górny i dolny ekran w kompatybilnych grach, aby uzyskać bardziej komfortową rozgrywkę, lub na systemach z uszkodzonym lub usuniętym ekranem

#### ROMy Donor
Większość gier SDK5 można wybrać jako ROM Donor (można to zrobić za pomocą TWiLight Menu++). Plik binarny ARM7 donor jest kopiowany przez nds-bootstrap i zastępuje plik binarny ARM7 dla gry, którą próbuje uruchomić. Pozwala to na uruchamianie i zapisywanie niektórych gier SDK5.

#### Czym jest nightly i gdzie mogę to otrzymać?
Wersja nightly jest budowana dla najnowszego zarządzenia. Wersje Nightly mogą być niestabilne, ale mają dodane najnowsze poprawki błędów. Możesz uzyskać wersje nightly dla nds-bootstrap [tutaj](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### Dlaczego moje cheaty nie działają?
Sposób w jaki cheaty typu E są zaimplementowane w nds-bootstrap jest zepsuty, co oznacza, że będą działać tylko w połowie przypadków. Twój cheat prawdopodobnie używa tego typu. To nie jest wina bazy danych cheatów, ale raczej wina nds-bootstrap. Proszę nie żądać usunięcia tych cheatów z DB.

Jeśli chcesz dowiedzieć się więcej o cheatach, zobacz [tutaj](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats).

