---
lang: pl-PL
layout: faq
section: nds-bootstrap
title: FAQ i Troubleshooting
long_title: nds-bootstrap FAQ i Rozwiązywanie problemów
description: FAQ i Rozwiązywanie problemów nds-bootstrap
---

#### Dlaczego przy próbie załadowania gry z karty SD pojawia się biały ekran?
- Najpierw sprawdź [listę kompatybilności nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0), by się upewnić czy twoja gra jest kompatybilna
- Spróbuj włączyć grę bez żadnych cheatów, ponieważ niektóre nie są na razie kompatybilne z nds-bootstrap, wciśnij <kbd class="l">L</kbd>, by wyłączyć wszystie cheaty
- Jeśli działało to wcześniej, usuń foldery `fatTable` i `patchOffsetCache` w `sd:/_nds/nds-bootstrap/`

#### nds-bootstrap troubleshooting
Jeśli masz problemy z korzystaniem z najnowszej wersji nds-bootstrap, oto jak możesz je rozwiązać.

1. Uruchom grę z różnymi ustawieniami, w tym zmieniając prędkość procesora ARM9, tryb DS/DSi, jakość dźwięku, DMA odczytu karty itp.
2. Usuń foldery `fatTable` i `patchOffsetCache` w `sd:/_nds/nds-bootstrap/`
3. To prawdopodobnie nie jest aż tak duży problem; zapytaj na [serwerze Discord](https://discord.gg/yD3spjv)

Jeśli usłyszysz, że jest to problem z nds-bootstrap, sprawdź czy gra nie została już zgłoszona na GitHubie. Sprawdź również zamknięte sprawy, na wypadek gdybyśmy mieli jedną zamkniętą sprawę w preferencji innej. Jeśli nie ma do niego przypisanego żadnego problemu na GitHubie, utwórz nowy.

Upewnij się również, że dodałeś go do [listy kompatybilności](https://wiki.ds-homebrew.com/nds-bootstrap/testing) w Arkuszach Google.

#### Why are there issues with ROM loading, even though they're run natively?
nds-bootstrap patches the ROM functions to run from an SD card, as the ROMs are hardcoded to read from Slot-1. There are also timing issues and AP measures (which most are already removed), both of which would cause the ROMs to not work properly.

#### Why use nds-bootstrap over a regular flashcard?
- Niektóre kompatybilne ROM-y są ładowane do pamięci RAM, dzięki czemu czas ładowania jest szybszy niż w przypadku zwykłych kartridży
- Pamięć VRAM można rozszerzyć do 32-bitów
- Wykorzystanie dodatkowej prędkości procesora DSi, pozwala doświadczenia lepszej wydajność w niektórych grach
- Wzbogać swój dźwięk dzięki częstotliwości 48 kHz
- Użyj trybu DSi, umożliwiającego korzystanie z funkcji DSi
- Używając niektórych kartridży, możesz wykorzystać IR w swojej aplikacji
- nds-bootstrap jest otwartym źródłem, co oznacza, że deweloperzy mogą go zawsze aktualizować, aby naprawić błędy i inne rzeczy, nawet jeśli projekt zostanie przerwany
- DS Memory Expansion Pak jest emulowany, co oznacza, że gry wymagające tego akcesorium będą działać
- Zamień górny i dolny ekran w kompatybilnych grach, aby uzyskać bardziej komfortową rozgrywkę, lub na systemach z uszkodzonym lub usuniętym ekranem

#### Donor ROMs
Most SDK5 games can be selected as a Donor ROM (which can be done via TWiLight Menu++). The Donor ROM's ARM7 binary is copied by nds-bootstrap and replaces the ARM7 binary for the game that it is trying to run. This allows certain and SDK5 games to boot and save.

#### What is a nightly and where do I get it?
A nightly build is build for the latest commit. Nightly builds may be unstable, but has the most recent bugfixes added. You can get nightly builds for nds-bootstrap [here](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### Why do my cheats not work?
The way E cheat types are implemented in nds-bootstrap is broken, meaning they'd only work half of the time. Your cheat probably uses that type. It is not a fault of the cheat database, but rather a fault of nds-bootstrap. Please do not request these cheats to get deleted from the DB.

For more info on cheats, look [here](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats).

