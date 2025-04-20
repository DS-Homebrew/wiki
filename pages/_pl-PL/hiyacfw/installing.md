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
1. Download the latest Windows version of [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases)
1. Run the TWLMagician MSI package and extract it to anywhere on your PC
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos %}
1. Download the latest macOS version of [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases)
1. Extract the TWLMagician archive anywhere on your PC
{% endcapture %}
{% assign tab-macos = tab-macos | split: "////////" %}

{% capture tab-other %}
1. Zainstaluj Python 3 za pomocą menedżera pakietów, jeśli nie jest jeszcze zainstalowany
1. Download the latest Python version of [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases)
1. Extract the TWLMagician archive anywhere on your PC
1. Zainstaluj tkinter za pomocą poniższej komendy dla swojego distro, jeśli jeszcze go nie masz:
    - Debian-based: `sudo apt-get install python3-tk`
    - Arch Linux: `sudo pacman -S tk`
    - Fedora: `sudo dnf install python3-tkinter`
    - CentOS: `sudo yum install python3-tkinter`
1. Install requirements with the following command:
    - `pip3 install -r requirements.txt`
{% endcapture %}
{% assign tab-other = tab-other | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}

### Część 2: Dodawanie plików hiyaCFW do karty SD
![Screenshot of TWLMagician](https://i.ibb.co/xXr3nd3/336ffe68-abd9-4880-b2ca-5421cbf5958a.png)

1. Launch TWLMagician
    - **Windows:** Launch the `TWLMagician.exe` file extracted from the TWLMagician archive (you may need to temporarily disable your antivirus)
    - **macOS:** Right click the `TWLMagician` file extracted from the TWLMagician archive and choose `Open`
    - **Linux:** Launch the `TWLMagician.py` extracted from the TWLMagician archive
1. Kliknij przycisk `...` w polu "NAND file with no$GBA footer"
1. Przejdź do swojej kopii zapasowej NAND i kliknij `Otwórz`
1. Naciśnij `Start`
1. W nowym wyskakującym oknie przejdź do katalogu głównego karty SD i naciśnij `OK`.
    - Może to zająć pare minut
1. When the application says `Done!`, close out of TWLMagician
1. Close the terminal window (optional)

### Część 3: Konfiguracja Unlaunch i hiyaCFW
1. Włączając swoją konsolę Nintendo DSi, przytrzymaj <kbd class="face">A</kbd> i <kbd class="face">B</kbd>
    - To powinno zabrać cię do menu plików Unlaunch'a
1. Przejdź do `OPTIONS`, a następnie `NO BUTTON`
1. Wybierz `hiyaCFW` i naciśnij <kbd class="face">A</kbd>
    - Spowoduje to automatyczne uruchomianie systemu hiyaCFW
1. Zapisz ustawienia i zrestartuj konsolę
1. Przytrzymaj <kbd>SELECT</kbd> podczas włączania swojej konsoli Nintendo DSi, aby zdobyć dostęp do ustawień hiyaCFW
1. Zmień ustawienia jak ci się żywnie podoba, a następnie naciśnij <kbd>START</kbd> aby kontynuować

If it shows `An error has occurred`, please see the [faq](faq?faq=why-do-i-get-an-error-has-occurred-message-when-booting-hiyacfw) page.
{: .alert .alert-warning}
