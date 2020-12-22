---
lang: es-VE
layout: wiki
section: ds-index
title: Nintendo DSi / Nintendo 3DS TWL_FIRM
description: Una explicación de todo lo relacionado con la modificación DS
---

### Configuración de CFW
Si bien la mayoría de los beneficios del firmware personalizado son para Nintendo DSi y la familia de sistemas Nintendo 3DS, le permite desbloquear las posibilidades de sus consolas. La instalación de firmware personalizado es bastante fácil y, en la mayoría de los casos, todo lo que necesita es una tarjeta (micro) SD. Tenemos las mejores guías para que las sigas, con instrucciones paso a paso.

- [Guía de Hackeo 3ds](https://3ds.hacks.guide)
  - Comando Lightning: `mod 3ds`
  - Comando de Kuriisu: `guía 3ds`
- [Guía de Hackeo DSi](https://dsi.cfw.guide)
  - Comando Lightning: `mod dsi cfw`
  - Comando de Kuriisu: `guide dsi`

### Velocidades de CPU
La Nintendo DS se envió con un procesador de 67Mhz en 2004. La Nintendo DSi se envió con un procesador de 133Mhz en 2009. La mayoría de los juegos de la biblioteca de Nintendo DS se hicieron antes de que saliera la Nintendo DSi y, como tal, el único procesador disponible para ellos era de 67Mhz. Algunas aplicaciones se vincularon a esa velocidad de reloj y, como resultado, no funcionarían bien con una velocidad de reloj más alta. La mayoría de los juegos, sin embargo, superarían al original con una velocidad de reloj más alta.

nds-bootstrap tiene velocidad de reloj TWL como opción, pero no intentará ajustar la ROM para que funcione con la velocidad de reloj más alta. Eso está en la propia aplicación, y las aplicaciones que no funcionan con una velocidad de reloj más alta NO son un error de nds-bootstrap al final.

### Menú de la consola Nintendo DSi
El menú de la consola Nintendo DSi utiliza un entero de 32 bits con signo para determinar el espacio libre en la NAND. Usando la NAND real, la cantidad nunca superará los 128 MB, por lo que fue seguro. Sin embargo, cuando redirigimos la NAND a la tarjeta SD, supera el límite de números enteros de 32 bits, lo que hace que se desborde a un número negativo. Lamentablemente, el número negativo de espacio libre provocará un mensaje de error "An error has occurred", que no le permitirá iniciar el menú. Afortunadamente, esto se puede solucionar haciendo un archivo ficticio para ponerlo en un número positivo.

Los números positivos y negativos están determinados por pares de dos. Por ejemplo, se permiten 1-2 GB de espacio libre, mientras que 3-4 no. Se permiten 5-6 GB de espacio libre, mientras que 7-8 no.

En la versión 1.4.0, las firmas RSA en la lista blanca de DS Cart no se verifican. Existe un exploit con respecto a una vulnerabilidad en la lista blanca de tarjetas flash de Nintendo DSi que le permite tomar acceso a través del procesador ARM9. Requiere la versión 1.4.0 (se parcheó en versiones futuras y no existía en versiones anteriores) y una tarjeta flash con una ROM modificada.

### Acceso al Slot-1 de Nintendo DSi & Bloquear
El acceso al Slot-1 se bloquea al iniciar aplicaciones desde el menú del sistema, excepto si dichas aplicaciones son el iniciador del Slot-1 o la configuración del sistema. Para ejecutar cartuchos del Slot-1 normalmente no ejecutables, necesitará hacer un exploit de Configuración del sistema o instalar Unlaunch. Sin ninguno de ellos, no puede lanzar flashcards que no se pueden iniciar y no puede volcar ROM en su tarjeta SD.

La lista blanca de tarjetas flashcard se verifica a través de las firmas RSA que se encuentran a través de las claves RSA en cada firmware con la versión 1.4.0. Esto significa que las personas pueden incluir en la lista blanca sus propios cartuchos

Antes de 1.4.0, la lista blanca solía contener solo dos secciones. En 1.4.0, han introducido una tercera sección que se hizo para bloquear tarjetas que se saltaban las dos primeras. La tercera sección carga hasta ocho secciones diferentes de la rom y las comprueba con un hash para ver si la rom ha sido manipulada. Sin embargo, debido al olvido de realizar cualquier verificación de cordura, podemos desbordar en el vector de excepción / dirección de interrupción usando un valor lo suficientemente grande. Lo mejor de todo es que se ejecuta en ARM7 (también conocido como procesador de seguridad), por lo que es el primer exploit para el procesador ARM7. Dado que esto sucede antes del bloqueo de los registros SCFG, podemos ejecutar homebrew avanzado (como los dumpers Slot-1 & los dumpers slot-1 externos)

Desafortunadamente, los requisitos son estrictos. Requiere la versión 1.4.0 y una tarjeta flash con una ROM modificada. Además, el exploit nunca salió oficialmente, debido a que Unlaunch es mucho más simple de instalar y tiene menos requisitos (solo una forma de entrar en homebrew) con las mismas ventajas.

### Cámara Nintendo DSi
La aplicación Cámara Nintendo DSi tiene la capacidad de tomar fotografías en formato JPEG y guardarlas en la memoria del sistema o en la tarjeta SD. La forma en que se carga lo restringe a solo imágenes creadas por DSi, debido a que carece del HMAC adecuado almacenado dentro de una etiqueta EXIF personalizada. Las imágenes personalizadas no se pueden leer en la DSi, ya sea que se hayan tomado o editado en PC.

Se utiliza un archivo `pit.bin` para cargar imágenes. Sin embargo, el tamaño del encabezado en el desplazamiento 0x16 no está marcado, por lo que un valor de tamaño de encabezado lo suficientemente grande puede exceder los límites y hacer que el búfer se sobrescriba y salte al código sin firmar. Así es como funciona Memory Pit.

### Bootstage 2 de Nintendo DSi
El segunda Bootstage de la Nintendo DSi carga el lanzador "title.tmd" en la memoria. Sin embargo, no especifican una verificación de límite de tamaño de archivo, lo que significa que los primeros 80k bytes se cargan en la RAM mientras que el resto puede ser una carga útil personalizada. Esta es la base del exploit Unlaunch.
