---
lang: pl-PL
layout: wiki
section: hiyacfw
title: Instalacja
long_title: Instalacja hiyaCFW
description: Jak zainstalować hiyaCFW na Nintendo DSi
tabs:
  - 
    windows: Windows
    macos: macOS
    other: Linux
---

Nie aktualizuj systemu po zainstalowaniu hiyaCFW. W ten sposób usuniesz poprawki SD hiyaCFW.
{: .alert .alert-danger}

### Wymagania
- Nintendo DSi z [zainstalowanym Unlaunch](https://dsi.cfw.guide/installing-unlaunch)
- A NAND Backup taken from your device [using dumpTool](https://dsi.cfw.guide/dumping-nand)
- Urządzenie Windows, macOS lub Linux

### Część 1: Przygotowanie komputera do instalacji hiyaCFW
{% capture tab-windows %}
Program hiyaCFW Helper jest znany z tego, że powoduje fałszywe wyniki w Windows Defender i innych programach antywirusowych, proszę tymczasowo wyłączyć takie programy, jeśli masz problemy z jego pobraniem lub uruchomieniem.
{: .alert .alert-info}

1. Pobierz i zainstaluj najnowszą wersję [7-Zip](https://www.7-zip.org/download.html)
   - To nie będzie działać z żadnym innym narzędziem do rozpakowywania archiwów, takim jak WinRAR, pomocnik hiyaCFW opiera się na samym 7-Zip, a nie na ogólnym rozpakowywaniu archiwów
1. Pobierz najnowszą wersję [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) dla systemu Windows
1. Rozpakuj archiwum hiyaCFW Helper w dowolnym miejscu na swoim komputerze
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos %}
1. Pobierz najnowszą wersję [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) dla macOS
1. Rozpakuj archiwum hiyaCFW Helper w dowolnym miejscu na swoim komputerze
{% endcapture %}
{% assign tab-macos = tab-macos | split: "////////" %}

{% capture tab-other %}
1. Zainstaluj Python 3 za pomocą menedżera pakietów, jeśli nie jest jeszcze zainstalowany
1. Pobierz najnowszą wersję [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) dla Pythona
1. Rozpakuj archiwum hiyaCFW Helper w dowolnym miejscu na swoim komputerze
1. Zainstaluj tkinter za pomocą poniższej komendy dla swojego distro, jeśli jeszcze go nie masz:
   - Oparte na debianie: `sudo apt-get install python3-tk`
{% endcapture %}
{% assign tab-other = tab-other | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}

### Część 2: Dodawanie plików hiyaCFW do karty SD
![Zrzut ekranu HiyaCFW Helper](https://image.ibb.co/hhzKRL/Screen-Shot-2018-10-18-at-16-30-18.png)

1. Uruchom HiyaCFW Helper
  - **Windows:** Uruchom plik `HiyaCFW_Helper.exe` wyodrębniony z archiwum hiyaCFW Helper (może być konieczne tymczasowe wyłączenie programu antywirusowego)
  - **macOS:** Kliknij prawym przyciskiem myszy plik `HiyaCFW_Helper` wyodrębniony z archiwum hiyaCFW Helper i wybierz `Open`
  - **Linux:** Uruchom `HiyaCFW_Helper.py` pobrany z archiwum hiyaCFW Helper
1. Kliknij przycisk `...` w polu "NAND file with no$GBA footer"
1. Przejdź do swojej kopii zapasowej NAND i kliknij `Otwórz`
1. Naciśnij `Start`
1. W nowym wyskakującym oknie przejdź do katalogu głównego karty SD i naciśnij `OK`.
   - Może to zająć pare minut
1. Kiedy aplikacja powie `Done!`, zamknij hiyaCFW Helper
1. Zamknij okno terminala

### Część 3: Konfiguracja Unlaunch i hiyaCFW
1. Włączając swoją konsolę Nintendo DSi, przytrzymaj <kbd class="face">A</kbd> i <kbd class="face">B</kbd>
   - To powinno zabrać cię do menu plików Unlaunch'a
1. Przejdź do `OPTIONS`, a następnie `NO BUTTON`
1. Wybierz `hiyaCFW` i naciśnij <kbd class="face">A</kbd>
   - Spowoduje to automatyczne uruchomianie systemu hiyaCFW
1. Zapisz ustawienia i zrestartuj konsolę
1. Przytrzymaj <kbd>SELECT</kbd> podczas włączania swojej konsoli Nintendo DSi, aby zdobyć dostęp do ustawień hiyaCFW
1. Zmień ustawienia jak ci się żywnie podoba, a następnie naciśnij <kbd>START</kbd> aby kontynuować

Jeśli wyświetli się `Wystąpił błąd`, zobacz stronę [troubleshooting](troubleshooting#an-error-has-occurred).
{: .alert .alert-warning}
