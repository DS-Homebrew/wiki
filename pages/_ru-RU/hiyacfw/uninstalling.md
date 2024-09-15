---
lang: ru-RU
layout: wiki
section: hiyacfw
title: Удаление
long_title: Удаление hiyaCFW
description: Как удалить hiyaCFW с Nintendo DSi
---

hiyaCFW присутствует только на SD-карте и не присутствует в NAND. Перед началом работы обязательно создайте резервную копию всех данных на SDNAND, которые вы не хотите потерять. Вы можете узнать, как это сделать, следуя разделу III руководства по [резервному копированию DSiWare](https://dsi.cfw.guide/dsiware-backups.html#section-iii---extracting-the-save-file-optional) от [dsi.cfw.guide](https://dsi.cfw.guide).

### Удаление
1. Удалите `hiya.dsi` из корня SD-карты
1. Удалите папку `hiya`
1. Удалите папки `import`, `photo`, `progress`, `shared1`, `shared2`, `sys`, `title`, `ticket`, и `tmp`

### Изменение параметров Unlaunch

Если вы настраивали Unlaunch на автозагрузку hiyaCFW, возможно, теперь вы захотите изменить эти параметры.

1. Вставьте SD-карту в Nintendo DSi и запустите консоль, удерживая <kbd class="face">A</kbd> и <kbd class="face">B</kbd>
    - В результате откроется меню Unlaunch
1. Перейдите на страницу `OPTIONS`, и установите `NO BUTTON` на желаемое приложение
    - Если вы хотите автоматически запускать систему на находящуюся на NAND-е, установите параметр на приложение под названием `Launcher`
    - Если вы хотите автоматически запускать TWiLight Menu++, выберите файл с именем `BOOT.NDS`
1. Выберите `SAVE & EXIT`
