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
Известно, что hiyaCFW Helper вызывает ложные срабатывания Windows Defender и других антивирусных программ, пожалуйста, временно отключите такие программы, если у вас возникли проблемы с её загрузкой или запуском.
{: .alert .alert-info}

1. Скачайте и установите последнюю версию [7-Zip](https://www.7-zip.org/download.html)
    - Это не будет работать с любым другим инструментом извлечения архивов, таким как WinRAR, hiyaCFW helper полагается на сам 7-Zip, а не на обычный архиватор
1. Загрузите последнюю версию программы для Windows [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Распакуйте архив hiyaCFW Helper в любое место на вашем компьютере
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos %}
1. Загрузите последнюю версию для macOS [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Распакуйте архив hiyaCFW Helper в любое место на вашем компьютере
{% endcapture %}
{% assign tab-macos = tab-macos | split: "////////" %}

{% capture tab-other %}
1. Установите Python 3 с помощью менеджера пакетов, если он еще не установлен
1. Загрузите последнюю Python версию [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Распакуйте архив hiyaCFW Helper в любое место на вашем компьютере
1. Если у вас еще нет tkinte, установите с помощью следующей команды для вашего дистрибутива:
    - На основе Debian: `sudo apt-get install python3-tk`
{% endcapture %}
{% assign tab-other = tab-other | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}

### Часть 2: Добавление файлов hiyaCFW на SD-карту
![Скриншот hiyaCFW Helper](https://image.ibb.co/hhzKRL/Screen-Shot-2018-10-18-at-16-30-18.png)

1. Запустите hiyaCFW Helper
    - **Windows:** Запустите файл `HiyaCFW_Helper.exe`, извлеченный из архива hiyaCFW Helper (может потребоваться временное отключение антивируса)
    - **macOS:** Щёлкните правой кнопкой мыши по `HiyaCFW_Helper`извлеките файлы из архива hiyaCFW Helper и выберите `Открыть`
    - **Linux:** Запустите `HiyaCFW_Helper.py` извлеченный из архива hiyaCFW Helper
1. Нажмите кнопку `...` в окне "NAND file with No$GBA footer"
1. Перейдите к резервной копии NAND и нажмите `Открыть`
1. Нажмите `Start`
1. В новом всплывающем окне перейдите к корню вашей SD-карты и подтвердите.
    - Процесс может занять несколько минут
1. Когда в приложении появится сообщение `Done!` закройте программу hiyaCFW Helper
1. Закройте окно терминала

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
