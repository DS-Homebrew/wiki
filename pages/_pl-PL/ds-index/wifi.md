---
lang: pl_PL
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: Informacje o korzystaniu z Wi-Fi na Nintendo DS
---

- W aplikacjach Nintendo DS można używać tylko WEP i Open WiFi
- W rozszerzonych/ekskluzywnych aplikacjach Nintendo DSi, masz dodatkowo wsparcie WPA2

Da się używać hotspotów, więc nie musisz zmieniać konfiguracji swojego routera.

### Tworzenie hotspotu
Istnieją poradniki dotyczące tworzenia hotspotu kompatybilnego z grami DS na komputerach macOS i Linux na GBAtemp. Jeśli korzystasz z Windowsa, możesz użyć Linux live boot.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

### Przywracanie Nintendo DS WFC

1. Uruchom ustawienia WFC Nintendo
1. Połącz się ze swoim punktem dostępu
1. Ustaw wartość Primary DNS jako jedną z wartości podanych poniżej, w zależności od tego, której usługi chcesz użyć:
   - **Wiimmfi** - `164.132.44.106`
   - **AltWFC/WFCZwei** - `172.104.88.237` or `104.131.93.87`
   - **BenFi** - `24.218.177.103`
   - **Twilit WFC** - `34.66.49.81`
1. Ustaw `1.1.1.1` jako swój drugi DNS
1. W zależności od gry, będziesz potrzebować spatchowania jej za pomocą NoSSL
