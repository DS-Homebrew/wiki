---
lang: es-ES
layout: wiki
section: ds-index
category: reference
title: Nintendo DSi / Nintendo 3DS TWL_FIRM
description: Acerca el TWL_FIRM de Nintendo DSi y Nintendo 3DS
---

### Setting up CFW
Si bien la mayoría de los beneficios del firmware personalizado son para Nintendo DSi y la familia de sistemas Nintendo 3DS, te abre a un mundo de posibilidades con tu consola. Installing Custom Firmware is quite easy, and in most cases, all you need is a (micro)SD card. Tenemos las mejores guías con instrucciones paso a paso.

- [Guía de Hackeo de 3DS](https://3ds.hacks.guide)
   - Comando de Lightning: `mod 3ds`
   - Comando de Kuriisu: `guide 3ds`
- [Guía de Hackeo de DSi](https://dsi.cfw.guide)
   - Comando de Lightning: `mod dsi cfw`
   - Comando de Kuriisu: `guide dsi`

### CPU speeds
The Nintendo DS shipped with a 67 MHz processor in 2004. The Nintendo DSi shipped with an 133 MHz processor in 2009. Most games of the Nintendo DS library were made before the Nintendo DSi came out, and as such the only processor available to them was 67 MHz. Algunas aplicaciones se crearon con esa velocidad de reloj, por lo que no funcionan bien con velocidades más grandes. La mayoría de los juegos, sin embargo, pueden ir mejor con una velocidad de reloj más alta.

nds-bootstrap tiene la velocidad de reloj de TWL como opción, pero no cambiará la ROM para que funcione a la velocidad más alta. Eso está en la propia aplicación, y que algunas aplicaciones no funcionen con una mayor velocidad de reloj NO es un fallo de nds-bootstrap.

### Nintendo DSi system menu
The Nintendo DSi system menu uses a signed 32-bit integer to determine the amount of free space on the device. Usar una fuente que supere el entero de 32-bits provocará un desbordamiento a un número negativo, el cual provoca un pantallazo negro con el mensaje "Ha ocurrido un error".

Los rangos que provocan el desbordamiento están determinados por pares de a dos. Por ejemplo, se permiten 1-2 GB de espacio libre, mientras que 3-4 no. Se permiten 5-6 GB de espacio libre, mientras que 7-8 no.

This crash will never occur if the system menu is launched from an actual NAND chip (since it maxes out at 128 MB), but a redirection system (such as hiyaCFW) would cause this to trigger. Afortunadamente, este fallo se puede arreglar fácilmente colocando archivos dummy para que el contador vuelva a un número positivo. hiyaCFW hará esto por ti en la última versión.

In version 1.4.0, RSA signatures in the DS cart whitelist aren't verified. Hay un exploit que involucra una invulnerabilidad en la lista blanca de flashcard de Nintendo DSi que permiten tomar el control del procesador ARM9. Se necesita la versión 1.4.0 (ha sido parcheado en versiones posteriores y no existía en versiones anteriores) y una flashcard con una ROM modificada.

### Nintendo DSi Slot-1 access & blockout
Slot-1 access is blocked when launching applications from the system menu, except if said applications is either the Slot-1 launcher itself or System Settings. Para ejecutar cartuchos que no se podría normalmente en el Slot-1, necesitarás o crear un exploit para los Ajustes del Sistema o instalar Unlaunch. Sin ninguno de ellos, no podrás lanzar dichas flashcards ni podrás volcar ROMs en tu tarjeta SD.

La lista blanca de flashcards se comprueba con las firmas RSA contenidas con las claves RSA en todos los firmware con versión 1.4.0. Esto significa que se pueden meter tus propios cartuchos en dicha lista

Antes de la 1.4.0, la lista blanca solía contener solo dos secciones. En la 1.4.0 introdujeron una tercera sección creada para bloquear flashcards que se saltaban las otras dos. Esta nueva sección carga hasta ocho secciones distintas de la rom ylas comprueba con un hash para ver si ha sido manipulada. However, due to the forgetfulness of putting any sanity check, we can overflow into the exception vector / interrupt address using a large enough value. Lo mejor de todo es que funciona en ARM7 (el procesador de seguridad), haciéndolo el primer exploit para el procesador ARM7. Dado que esto sucede antes del bloqueo de los registros SCFG, podemos ejecutar homebrew avanzado (como volcadores de Slot-1 y volcadores externos de slot-1)

Desafortunadamente, los requisitos son estrictos. Se necesita la versión 1.4.0 y una flashcard con una ROM modificada. Además, el exploit nunca salió oficialmente, debido a que Unlaunch es mucho más sencillo de instalar y tiene menos requisitos (una forma más de entrar en el homebrew) con las mismas ventajas.

### Cámara Nintendo DSi
La aplicación de Cámara de Nintendo DSi tiene la capacidad de tomar fotografías en formato JPEG y guardarlas en la memoria del sistema o en la tarjeta SD. La forma en la que se carga lo restringe a solo imágenes creadas por DSi, ya que carece del HMAC adecuado almacenado dentro de una etiqueta EXIF personalizada. Cualquier imagen propia no se puede ver en la DSi, ya sean tomadas o editadas en PC.

Se utiliza un archivo `pit.bin` para cargar imágenes. Sin embargo, el tamaño del encabezado no está marcado en el desplazamiento 0x16, por lo que un valor de tamaño de encabezado lo suficientemente grande puede exceder los límites, hacer que el búfer se sobrescriba y salte al código sin firmar. Así es como funciona el Memory Pit.

### Nintendo DSi bootstage 2
En el segundo bootstage de la Nintendo DSi se carga en memoria el "title.tmd" del lanzador. Sin embargo, no se comprueba el tamaño del archivo, lo que significa que los primeros 80k bytes se cargan en la RAM mientras que el resto puede ser un payload propio. Esta es la base del exploit de Unlaunch.

### RTCom
RTC es usar el RTC de la 3DS para permitir la comunicación entre las CPUs ARM7 y ARM11, incluso estando en TWL_FIRM. Esto permite usar funciones de 3DS en Modo DS(i). Aquí entra poder usar el pad circular, activar la pantalla completa y utilizar el giroscopio. Currently, the only public ds homebrew that make use of RTCom is certain builds of GBARunner2 that have support for the 3DS's gyro feature. Para activar RTCom, necesitarás usar [TWPatch](https://gbatemp.net/threads/542694/).
