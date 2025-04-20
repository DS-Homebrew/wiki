---
lang: it-IT
layout: wiki
section: nds-bootstrap
title: Controlli
long_title: nds-bootstrap Controls
description: Button controls for nds-bootstrap
---

These do not apply to homebrew.
- <kbd>SELECT</kbd> + <kbd>Up</kbd>/<kbd>Down</kbd>: Precise volume control
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Down</kbd> + <kbd class="face">A</kbd> for 2 seconds: Dump RAM to `sd:/_nds/nds-bootstrap`, as `ramDump.bin`
    - Does not work in B4DS mode on flashcards
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Down</kbd> + <kbd class="face">B</kbd> for 2 seconds: Return to loader
    - Does not work in B4DS mode on flashcards
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>START</kbd> + <kbd>SELECT</kbd> for 2 seconds: Reset game
    - Many games support simply pressing this button combination by default, but this will force reset it
    - Does not work in B4DS mode on flashcards
- <kbd class="l">L</kbd> + <kbd>Down</kbd> + <kbd>SELECT</kbd>: Open the in-game menu
    - Screenshot
        - <kbd>Up</kbd>/<kbd>Down</kbd>/<kbd>Left</kbd>/<kbd>Right</kbd>: Change VRAM bank
        - <kbd class="face">A</kbd>: Save screenshot
        - <kbd class="face">B</kbd>: Return to in-game menu
    - RAM Viewer
        - <kbd>Up</kbd>/<kbd>Down</kbd>: Scroll
        - <kbd>Left</kbd>/<kbd>Right</kbd>: Fast scroll
        - <kbd class="r">R</kbd> + <kbd>Down</kbd>/<kbd>Up</kbd>: Faster scroll
        - <kbd class="r">R</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd>: Fastest scroll
        - <kbd class="face">A</kbd>: Enter RAM Editor
        - <kbd class="face">B</kbd>: Return to in-game menu
        - <kbd class="face">Y</kbd>: Specify an address to jump to
        - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease selected value
        - <kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Return to RAM Viewer/Editor at specified address
        - <kbd>SELECT</kbd>: Switch between [ARM7 and ARM9 memory maps](https://problemkaputt.de/gbatek-ds-memory-maps.htm)
    - RAM Editor
        - <kbd>Up</kbd>/<kbd>Down</kbd>/<kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
        - <kbd class="face">A</kbd>: Modify selected value
            - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease value by 1h
            - <kbd>Left</kbd>/<kbd>Right</kbd>: Increase/Decrease value by 10h
            - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Finish modifying value
        - <kbd class="face">B</kbd>: Return to RAM Viewer
        - <kbd class="face">Y</kbd>: Specify an address to jump to
        - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease selected value
        - <kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Return to RAM Viewer/Editor at specified address
- Returning to loader may not work on some O3DS models, and does not work in B4DS mode when running DSiWare
- The button combination for opening the in-game menu can be changed in the TWiLight Menu++ settings
- Precise volume control can be turned on or off in the TWiLight Menu++ settings
- Screenshots are saved to `sd:/_nds/nds-bootstrap/screenshots.tar`. This file can be opened using an archive viewer such as [7-Zip](https://www.7-zip.org/)
