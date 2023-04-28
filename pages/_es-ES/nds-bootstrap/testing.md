---
lang: es-ES
layout: wiki
section: nds-bootstrap
title: Lista de Compatibilidad y Consejos de Testeo
description: Lista de compatibilidad y consejos para testear ROMs
---

### Lista de compatibilidad
Para ver qué ROMs han sido testeadas, echa un vistazo a la [lista de compatibilidad (en inglés)](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/). Si quieres contribuir, haz clic en `Solo ver` y luego en `Solicitar acceso de edición`. Asegúrate de añadir las entradas a las hojas correctas guiándote por las pestañas en el fondo de la interfaz.

Para ver qué ROMs tienen problemas conocidos, echa un vistazo a la [página de reporte de problemas en GitHub (en inglés)](https://github.com/DS-Homebrew/nds-bootstrap/issues). Si quieres [reportar un nuevo problema](https://github.com/DS-Homebrew/nds-bootstrap/issues/new), por favor, sigue las instrucciones en las plantillas.

### Consejos para testear juegos
- En general, consulta la [página de preguntas frecuentes de nds-bootstrap](https://wiki.ds-homebrew.com/nds-bootstrap/faq) y [el glosario](https://wiki.ds-homebrew.com/nds-bootstrap/glossary) para asegurarte de que sabes como diagnosticar y solucionar problemas

#### Si vas a testear para comprobar un problema específico
- Reproduce los pasos lo más cerca posible
- Si hay alguna diferencia (como la versión de nds-bootstrap, el sistema usado, o algún ajuste cambiado), asegúrate de incluirlo en tu reporte
- No dudes en pedir más detalles a la persona que hizo el reporte (como también que proporcione un archivo de guardado) si lo necesitas
- Si no encontraste una solución, asegúrate de actualizar la lista de compatibilidad

#### Si una ROM tiene problemas después de actualizar nds-bootstrap
- Encuentra la versión específica en la cual el problema empieza a aparecer
- Puedes instalar una versión antigua de nds-bootstrap descargándola desde alguna de las [entradas anteriores en GitHub](https://github.com/DS-Homebrew/nds-bootstrap/releases) y siguiendo las mismas instrucciones que al actualizar
- Es posible que también necesites [descargar una versión antigua de TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases)

#### Si vas a testear una ROM que no ha sido testeada antes o a la que no se le han reportado problemas
- Sé exhaustivo. Prueba todo lo que creas que los demás usuarios podrían llegar a ver o hacer
- Asegúrate de añadir la información necesaria a la lista de compatibilidad en la hora correcta
- También, asegúrate de eliminar de la lista de juegos pendientes los juegos que has testeado

#### Si vas a testear para actualizar las listas de exclusión
- Cambia solamente las opciones con lista de exclusión, es decir, Veloc. CPU ARM9 a 133MHz (TWL), Lectura DMA, y Lectura asíncrona
- Para habilitar las opciones excluídas en los ajustes de cada juego, abre el archivo `sd:/_nds/TWiLightMenu/settings.ini` y cambia el valor de `IGNORE_BLACKLISTS` a `1`
- Si hay problemas al habilitar estos ajustes, por favor, repórtalos en la página de problemas de GitHub 
