---
lang: nl-NL
layout: wiki
section: twilightmenu
category: customization
title: DSi- / 3DS-skins - Aangepaste SFX
description: Hoe gebruik je aangepaste achtergrondmuziek en geluidseffecten in DSi- en 3DS-skins voor TWiLight Menu++
---

TWiLight Menu++ ondersteunt aangepaste geluidsbestanden in thema's. Plaats je geluidsbestanden in de submap `sound` in je themamap, bijvoorbeeld voor het thema `white` zou je de bestanden plaatsen in `themes/white/sound/sfx.bin` en `themes/white/sound/bgm.pcm.raw`. Beide bestanden zijn optioneel, als `bmg.pcm.raw` ontbreekt, wordt de standaardmuziek gebruikt. Hetzelfde zou gebeuren met de geluidseffecten als `sfx.bin` ook ontbreekt.

Deze instructies gaan ervan uit dat je devkitPro hebt geïnstalleerd met mmutil. Je kan devkitPro download op de [devkitPro-website](https://devkitpro.org/wiki/Getting_Started).

## Geluidseffectenbank
De geluidseffectenbank (`sfx.bin`) bevat geluidseffecten zoals het geluid voor het selecteren van pictogrammen, enz.

| Bestand     | Beschrijving                                                                                        |
| ----------- | --------------------------------------------------------------------------------------------------- |
| startup.wav | Gespeeld bij het opstarten. Zie de paragraaf over [Opstartgeluid](#startup-sound) voor meer details |
| back.wav    | Terug                                                                                               |
| launch.wav  | Afgespeeld bij het uitvoeren van een spel                                                           |
| select.wav  | Afgespeeld wanneer de cursor wordt verplaatst in instellingen per spel en selecteer menu            |
| wrong.wav   | Afgespeeld bij het bereiken van het einde van de pagina                                             |
| switch.wav  | Afgespeeld bij het wisselen van pagina's                                                            |
| stop.wav    | Afgespeeld op het DSi-thema wanneer de selectiecursor stopt met bewegen                             |

Alle bovenstaande bestanden zijn nodig om een eigen geluidseffectenbank te maken. Als je een geluid wilt dempen, kan je een stil audiobestand gebruiken. Het `.wav` formaat is verplicht en de codering *moet* PCM zijn.

[Dit bestand](/assets/files/sfx-example.zip) bevat de geluiden die worden gebruikt in de standaard DSi- en 3DS-thema's, samen met de makefile om ze te bouwen tot een geldig sfx.bin-bestand. Voel je vrij om de geluidsbestanden te bewerken en te veranderen om een eigen geluidseffectenbank te maken.

Om je eigen geluidseffectenbank te bouwen, open je je terminal (of opdrachtregel als je Windows gebruikt), verander de huidige directory (`cd`) in de map waar `Makefile` staat, en voer vervolgens het `make` commando uit. Je krijgt dan een `sfx.bin`-bestand dat je kan kopiëren naar de submap `sound` in je themamap. **Dit bestand moet kleiner zijn dan 512000B = 512 kB**. Elk bestand dat groter is dan dat zal leiden tot crashes of het niet volledig afspelen van sommige geluiden.

### Opstartgeluid
Terwijl de andere geluidseffecten werken met elk WAV-bestand met PCM-codering, moet het opstartgeluid in een specifiek formaat zijn om goed te werken, anders zal er een stilte zitten tussen het moment dat het opstartgeluid stopt en de achtergrondmuziek begint.

Het startup.wav bestand moet **16-bit 16 kHz** zijn. You can use [Audacity](https://github.com/audacity/audacity/releases/latest) for example to convert to this format. Zodra het bestand is geladen in Audacity, verander de **Project Rate (Hz)** in **16000**, druk dan op **Shift+M**, en verander de **Format** in **16-bit PCM**.

Als je bestand in Stereo is, moet je ook gaan naar **Tracks > Mix > Mix Stereo down to Mono**.

Je moet `PlayStartupJingle=1` instellen in je `theme.ini` om de opstartjingle af te spelen.


## Menu Achtergrondmuziek
Menu BGM needs to be a **16-bit Mono** `.wav` file. Below is the method for converting audio files into that format.

Unlike `sfx.bin`, `bgm.wav` can be arbitrarily large.

Please note that if your audio file already comes as a `.wav` file, you must follow the below method anyways, as TWLMenu++ has specific requirements.

### Audacity
To get started, download [the latest version of Audacity](https://github.com/audacity/audacity/releases/latest).

To convert the audio:
1. Laad het bestand in Audacity
1. Als je bestand in stereo is, klik dan op het nummer en selecteer `Tracks` > `Mix` > `Mix Stereo down to Mono`
1. Go to `Audio Setup` > `Audio Settings...`, and make sure the `Project Sample Rate` is not set to be above `48000 Hz` (which is the limit)

To export in the correct format:
1. Selecteer `File` > `Export` > `Export Audio...`
1. Set `Save as type` to `WAV (Microsoft)`
1. Set `Encoding` to `Signed 16-bit PCM`
1. Set the output name to `bgm.wav` and click `Save`
1. Click `Clear` and then click `OK` to the metadata editing

Now you have a `bgm.wav` file that can be copied to the `sound` subfolder in your theme folder.

You should then set the `DSi/3DS Theme Music` option in TWiLight Menu++ settings to "Theme" for your custom BGM to play on the menu.
