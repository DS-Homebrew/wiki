---
lang: es-ES
layout: wiki
section: hiyacfw
title: Desinstalación
long_title: Desinstalar hiyaCFW
description: Cómo desinstalar hiyaCFW para la consola Nintendo DSi
---

hiyaCFW existe únicamente en la tarjeta SD, y no está presente en tu NAND. Antes de continuar, asegúrate de respaldar cualquier archivo de guardado que quieras presevar de tu tarjeta SD. You can learn how to do that by following [dsi.cfw.guide](https://dsi.cfw.guide)'s [DSiWare Backups](https://dsi.cfw.guide/dsiware-backups.html) guide.

### Desinstalar
1. Elimina `hiya.dsi` de la raíz de tu tarjeta SD
1. Elimina la carpeta `hiya`
1. Elimina las carpetas `import`, `photo`, `progress`, `shared1`, `shared2`, `sys`, `title`, `ticket`, y `tmp`

### Cambiar los ajustes de Unlaunch

Si estableciste los ajustes de Unlaunch para que hiyaCFW se ejecutase al iniciar la consola, tendrás que cambiar estos ajustes ya que no lo vas a usar más.

1. Inserta tu tarjeta SD en la consola y enciéndela mientras mantienes pulsados los botones <kbd class="face">A</kbd> y <kbd class="face">B</kbd>
    - Esto iniciará el sistema de archivos de Unlaunch
1. Selecciona `OPTIONS` y establece la opción `NO BUTTON` a la aplicación que desees
    - Si quieres iniciar el menú original de la consola, escoge la opción llamada `Launcher`
    - Si quieres iniciar TWiLight Menu++, escoge la opción llamada `TWiLight Menu++`
1. Elige la opción `SAVE & EXIT` para guardar los ajustes
