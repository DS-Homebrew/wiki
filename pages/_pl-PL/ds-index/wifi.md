---
lang: pl_PL
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: Informacje o korzystaniu z Wi-Fi na Nintendo DS
---

- W aplikacjach Nintendo DS można korzystać tylko z ustawień zabezpieczeń WEP i Open Wi-Fi
- W przypadku aplikacji Nintendo DSi-Enhanced/Exclusive działających w trybie DSi dostępne są dodatkowe opcje zabezpieczeń WPA i WPA2

Da się używać hotspotów, więc nie musisz zmieniać konfiguracji swojego routera.

### Tworzenie hotspotu
Na stronie GBAtemp znajdują się poradniki dotyczące tworzenia hotspotów kompatybilnych z DS na komputerach z systemami macOS i Linux. Jeśli korzystasz systemu Windows, możesz użyć linuksowego live boot.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

### Przywracanie Nintendo DS WFC
1. Uruchom Nintendo Wi-Fi Connection Setup
1. Połącz się ze swoim punktem dostępu
1. Ustaw wartość Primary DNS jako jedną z wartości podanych poniżej, w zależności od tego, której usługi chcesz użyć:
   - **[Wiimmfi](https://wiimmfi.de)** - `164.132.44.106` lub `178.62.43.212`
   - **[AltWFC/WFCZwei](https://save-nintendo-wifi.com/)** - `172.104.88.237`
1. Ustaw `1.1.1.1` jako swój drugi DNS
1. W zależności od gry, będziesz potrzebować spatchowania jej za pomocą NoSSL

### Ręczne Patchowanie Twoich ROMów DS
Postępuj zgodnie z poniższym przewodnikiem w przypadku, jeśli Twój ISP blokuje niestandardowe serwery DNS, w przeciwnym razie *mocno* zalecane jest, aby postępować zgodnie z przewodnikiem powyżej.

Uwaga: Użytkownicy systemów GNU/Linux i macOS mogą postępować zgodnie z bardzo podobnymi instrukcjami, ale będą musieli użyć Mono

1. Pobierz [WFCPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)
1. Skopiuj ROM gry, którą chcesz patchować do tego samego folderu, w którym zapisany jest WFCPatcher i otwórz ten folder
1. Utwórz plik tekstowy
1. W pliku wpisujemy `wfcpatcher.exe %1 --domain wiimmfi.de` następnie zapisujemy plik tekstowy z nazwą `patch.bat` i zamykamy okno
   - Możesz zastąpić wiimmfi.de innym adresem URL, jeśli chcesz użyć innego serwera
   - Jeśli plik nadal wydaje się być dokumentem tekstowym, [włącz rozszerzenia nazw plików](https://dsi.cfw.guide/file-extensions-%28windows%29) i usuń `.txt` z pliku
1. Teraz przeciągnij wszystkie ROMy, które chcesz patchować do patch.bat
1. Gotowe! poprawione ROMy będą tymi, które kończą się na (wiimmfi)

Nie zapomnij usunąć wszelkich DNS, które mogły zostać zapisane w ustawieniach Wi-Fi przed próbą połączenia się z poprawionym ROM-em.

### Troubleshooting oraz further reading
Jeśli wystąpią błędy, można wprowadzić kod błędu w programie Wiimmfi [troubleshooter](https://wiimmfi.de/error), aby znaleźć sposób na ich naprawienie.

Dla bardziej szczegółowego rozwiązywania problemów i więcej informacji, takich jak jak połączyć się z online na emulatorach lub przy użyciu Nintendo Wi-Fi USB Connector, można przeczytać ten [Wiimmfi Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) napisane przez członków [Mario Kart DS Network](https://discord.gg/pa9bea6).
