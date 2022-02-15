---
lang: es-ES
layout: faq
section: nds-bootstrap
title: FAQ y solución de problemas
long_title: nds-bootstrap FAQ & Troubleshooting
description: FAQ & Troubleshooting for nds-bootstrap
---

#### Tengo problemas con mi(s) ROM(s), ¿qué debo hacer?
- Make sure that you are on the latest release of [nds-bootstrap](https://github.com/DS-Homebrew/nds-bootstrap/releases/latest) and [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest) if you are using it (update instructions are provided in each release page)
- Compruebe [la lista de compatibilidad de nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) para ver si se trata de un problema conocido en la última versión de nds-bootstrap
- Try with all cheats disabled for that game as some cheats are not compatible with nds-bootstrap at the moment, pressing <kbd class="l">L</kbd> in the game's cheats menu on TWiLight Menu++ will disable all cheats for it
- Si antes funcionaba, borra las carpetas `fatTable` y `patchOffsetCache` en `sd:/_nds/nds-bootstrap/`
- Ejecuta el juego usando configuraciones distintas, como cambiar la velocidad de la CPU ARM9, el Modo DS/DSi, la calidad del sonido, lectura DMA, etc
    - Usando TWiLight Menu++, cambie todos los ajustes individuales por juego a `Por defecto`
    - If there is a specific per-game setting that causes your issue, please report this to the [GitHub](https://github.com/DS-Homebrew/nds-bootstrap/issues)
- Si has seguido todos los pasos anteriores, pregunta en el [servidor de Discord](https://discord.gg/yD3spjv)
- If the server says it's an nds-bootstrap issue, check if the game hasn't been reported already on Github
    - Check the closed issues too in case there has already been an issue closed in preference a different one.
    - If it doesn't have any GitHub issue attached to it, go ahead and make a new one
- Si no se ha encontrado ninguna solución hasta el momento, por favor, actualice la [lista de compatibilidad](https://wiki.ds-homebrew.com/nds-bootstrap/testing)

#### Why are there issues with ROM loading, even though they're run natively?
nds-bootstrap patches the ROM functions to run from an SD card, as the ROMs are hardcoded to read from Slot-1. There are also timing issues and AP measures (which most are already removed), both of which will cause the ROMs to not work properly.

#### ¿Por qué usar nds-bootstrap en vez de un flashcard?
- Certain compatible ROMs are loaded into RAM, allowing for load times to be faster than even normal Game Cards
- Puedes expandir el bus de la memoria VRAM a 32-bit
- Usa la velocidad de CPU adicional de la DSi, que permite mejor rendimiento en algunos juegos
- Mejora tu audio a 48 kHz
- Usa el Modo DSi, permitiendo utilizar funciones de DSi
- Utilizando ciertas tarjetas de juego, puede utilizar IR en su aplicación
- nds-bootstrap es de código abierto, por lo que los desarrolladores siempre pueden actualizarlo para arreglar errores y añadir más cosas incluso si se abandona el proyecto
- Se emula el DS Memory Expansion Pak, por lo que los juegos que lo necesiten funcionarán
- Intercambia ambas pantallas en juegos compatibles para una mejor experiencia de juego o en consolas con una pantalla rota o quitada
- Take screenshots and edit values in the RAM using the in-game menu

#### What is a Donor ROM?
In nds-bootstrap, when a game doesn't boot, another ROM is used to "donate" it's ARM7 (and ARM7i, if available) binary to the game set to run, in place of the game's own said binary.     
A Donor ROM can be set using **TW**i**L**ight Menu++.
- **Flashcards in DS mode:** The few supported DSi-Exclusive/DSiWare titles will require a DSi-Enhanced ROM set as a Donor ROM.
- **DSiWarehax:** As both DSi-Enhanced games and (most) DSi-Exclusive/DSiWare games contain different MBK settings from each other, DSi-Enhanced games will not boot in DSi mode without a Donor ROM. By setting a DSi-Exclusive/DSiWare title as a Donor ROM, DSi-Enhanced games will be able to run within the MBK settings set by the DSiWare title the exploit is used on.
- **CycloDS iEvolution:** Same case with DSiWarehax, but DSi-Exclusive/DSiWare titles will require a DSi-Enhanced game set as a Donor ROM, instead of the other way around.

#### What is the best Donor ROM?
There is no *best* one to use.     
If you're a DSiWarehax user, it is preferred to set an SDK5 ROM containing a sub-version higher than 0. However, if you have no existing DSiWare ROM, you can dump a ROM of *Nintendo DSi Sound* (SDK5.0) using GodMode9**i**, and set DSi Sound as a Donor ROM.     
If you own a 3DS console though, it is preferable to dump the DS WiFi Settings ROM (SDK5.5) using GodMode9, and instead, set DS WiFi Settings as a Donor ROM, as doing so allows sleep mode to be activated in DSiWare without waiting 9 seconds.

#### Why can't I set a Donor ROM?
If there's a title requiring a Donor ROM, and the ROM TWLMenu++ stated to find doesn't show the option to set it as one (provided you've scrolled down), then find another ROM to set as a donor.

#### ¿Qué es una versión Nightly y dónde la consigo?
A nightly build is build for the latest commit. Nightly builds may be unstable, but has the most recent bugfixes added. You can get nightly builds for nds-bootstrap [here](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### ¿Por qué no funcionan mis trucos?
The way E cheat types are implemented in nds-bootstrap is broken, meaning they'd only work half of the time. Your cheat probably uses that type. It is not a fault of the cheat database, but rather a fault of nds-bootstrap. Please do not request these cheats to get deleted from the DB.

For more info on cheats, check the [Action Replay cheats section of the Retail ROMs page](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats).

#### ¿Cómo hago capturas de pantalla?
You can take screenshots of the main screen from the in-game menu. By default the in-game menu is opened by pressing <kbd class="l">L</kbd> + <kbd>Down</kbd> + <kbd>SELECT</kbd>, then select `Screenshot...`, change the VRAM bank if needed, and press <kbd class="face">A</kbd> to save the screenshot.

To view your screenshots on your PC you will need to extract `sd:/_nds/nds-bootstrap/screenshots.tar`, inside will be all of your screenshots in BMP format. There will also be additional empty BMP files to pad the TAR file out to 50, these can simply be ignored or deleted.

nds-bootstrap can only fit 50 screenshots in the `screenshots.tar`, so once you're getting close you should extract them and delete the TAR, nds-bootstrap will then generate a new TAR next time you load a game.

#### What is the main screen and why can only it have screenshots?
The "main" screen is whichever screen is being drawn using the main engine, which can be either physical screen. Typically it's the screen where the main gameplay is happening and if one screen has 3D that's always the main screen. It'll always be the top screen when in the in-game menu.

The reason screenshots can only be taken of the main screen is a hardware limitation of the Nintendo DS, it doesn't have a framebuffer but it does have a display capture feature which allows main engine's output to be captured. This is most often used by games to render 3D to both screens but can also be used to take screenshots.

#### What is the "VRAM bank" I'm asked to select when taking a screenshot?
When taking a screenshot using nds-bootstrap it needs to use the DS's display capture feature to capture a frame from the main engine, however this display capture can only write to VRAM and requires one of the first four banks. nds-bootstrap will try to select a bank that isn't being used for the main engine so usually you can simply ignore this, however in some case all four of the possible VRAM banks will be in use for the main engine and thus it's not possible to take a perfect screenshot and you will need to select the bank you find looks best.

#### ¿Puedo jugar en línea con nds-bootstrap?
Jugar en línea con nds-bootstrap funcionará exactamente como lo hace con cartuchos de juegos reales. See the [Wi-Fi](../ds-index/wifi) page for information on connecting to an alternate online service.
- Si estás jugando a un juego DSi-Enhanced en modo DS, estás restringido a conexiones de red sin clave o WEP

#### ¿Puede dañar mi consola configurar un juego para que utilice una velocidad de CPU de 133 MHz (TWL)?
No. Aunque no todos los juegos pueden funcionar correctamente bajo esta configuración, el DSi y la 3DS fueron diseñados para poder alcanzar esta velocidad de CPU.
- If you encounter an issue with a game when running at 133 MHz (TWL) CPU speed, create an issue on the [TWiLight Menu++ GitHub repository](https://github.com/DS-Homebrew/TWiLightMenu/issues) detailing the effects so that it may be blacklisted from being launched at that CPU speed

#### ¿Puedo acelerar los juegos usando nds-bootstrap?
Aunque la velocidad de la CPU de TWL puede reducir el lag, nds-bootstrap no puede ejecutar juegos a velocidades más rápidas que las previstas.
