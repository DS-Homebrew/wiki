---
lang: it-IT
layout: wiki
section: nds-bootstrap
title: Lista di compatibilità & Consigli di prova
description: Compatibility list and tips for testing ROMs
---

### Lista di Compatibilità
To view tested ROMs, check the [compatibility list](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/). If you want to contribute, press `View only` and then `Request edit access`. Make sure to add entries to the proper sheet according to the tabs on the bottom of the page.

To view ROMs with known issues, check the [issues page](https://github.com/DS-Homebrew/nds-bootstrap/issues) on Github. If you want to create a [new issue](https://github.com/DS-Homebrew/nds-bootstrap/issues/new), please properly follow the issue template.

### Tips For Testing ROMs
- In general, look through the [nds-bootstrap FAQ](https://wiki.ds-homebrew.com/nds-bootstrap/faq) and [glossary](https://wiki.ds-homebrew.com/nds-bootstrap/glossary) to make sure that you understand how to troubleshoot issues

#### If testing for a specific reported bug
- Replicate the steps as close as possible
- If there are any differences (such as nds-bootstrap version, system used, or settings changed), make sure to include that in your report
- Feel free to ask the original reporter for more details (such as uploading a save file or any missing information) if possible
- If there is no solution, make sure to update the compatibility list

#### If a ROM has an issue after updating nds-bootstrap
- Find which specific version first introduced this issue
- You can downgrade nds-bootstrap by downloading a [past release](https://github.com/DS-Homebrew/nds-bootstrap/releases) and following the update instructions
- Downgrading to a past release of [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) might be needed as well

#### If testing for a ROM that has no known issues or has not been tested before
- Be thorough with testing the ROM, going through anything that other users might see
- Make sure to add the appropriate information on the compatibility list on the correct sheet
- Also make sure to remove games that have been tested off of the Testing Queue sheet

#### If testing to update blacklists
- Change only the blacklisted options, these being: 133 MHz (TWL) CPU Speed, Card Read DMA, Asynch Card Read, and SWI Halt Hook
- To enable blacklisted options in the per-game settings, go to `sd:/_nds/TWiLightMenu/settings.ini` and set `IGNORE_BLACKLISTS` to `1`
- If there are any issues caused when turning on these settings, please report them on the Github issues page 
