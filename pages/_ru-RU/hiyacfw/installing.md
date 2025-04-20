---
lang: ru-RU
layout: wiki
section: hiyacfw
title: Установка
long_title: Установка hiyaCFW
description: Как установить hiyaCFW на Nintendo DSi
tabs:
  - 
    windows: Windows
    macos: macOS
    other: Linux
---

Не обновляйте систему после установки hiyaCFW. Это приведет к удалению hiyaCFW SD патчей.
{: .alert .alert-danger}

### Требования
- Nintendo DSi с установленным [Unlaunch](https://dsi.cfw.guide/installing-unlaunch)
- Резервная копия NAND-a сделанная на вашей консоли [используя dumpTool](https://dsi.cfw.guide/dumping-nand)
- Устройство под управлением Windows, macOS или Linux

### Часть 1: Подготовка компьютера к установке hiyaCFW
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
1. Установите Python 3 с помощью менеджера пакетов, если он еще не установлен
1. Download the latest Python version of [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases)
1. Extract the TWLMagician archive anywhere on your PC
1. Если у вас еще нет tkinte, установите с помощью следующей команды для вашего дистрибутива:
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

### Часть 2: Добавление файлов hiyaCFW на SD-карту
![Screenshot of TWLMagician](https://i.ibb.co/xXr3nd3/336ffe68-abd9-4880-b2ca-5421cbf5958a.png)

1. Launch TWLMagician
    - **Windows:** Launch the `TWLMagician.exe` file extracted from the TWLMagician archive (you may need to temporarily disable your antivirus)
    - **macOS:** Right click the `TWLMagician` file extracted from the TWLMagician archive and choose `Open`
    - **Linux:** Launch the `TWLMagician.py` extracted from the TWLMagician archive
1. Нажмите кнопку `...` в окне "NAND file with No$GBA footer"
1. Перейдите к резервной копии NAND и нажмите `Открыть`
1. Нажмите `Start`
1. В новом всплывающем окне перейдите к корню вашей SD-карты и подтвердите.
    - Процесс может занять несколько минут
1. When the application says `Done!`, close out of TWLMagician
1. Close the terminal window (optional)

### Часть 3: Настройка Unlaunch и hiyaCFW
1. Включите DSi удерживая <kbd class="face">A</kbd> и <kbd class="face">B</kbd>
    - Это приведет вас в меню Unlaunch
1. Перейдите на страницу `OPTIONS`, затем `NO BUTTON`
1. Выберите `hiyaCFW` и нажмите <kbd class="face">A</kbd>
    - Это заставит систему запускать hiyaCFW автоматически
1. Сохраните настройки и перезапустите консоль
1. Удерживайте <kbd>SELECT</kbd> при включении консоли Nintendo DSi, чтобы получить доступ к настройкам hiyaCFW
1. Измените настройки по своему вкусу, затем нажмите <kbd>START</kbd>, чтобы продолжить

Если вы видите `An error has occurred`, пожалуйста, обратитесь к странице [ЧаВо ](faq?faq=why-do-i-get-an-error-has-occurred-message-when-booting-hiyacfw).
{: .alert .alert-warning}
