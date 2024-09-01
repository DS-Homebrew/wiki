---
lang: de-DE
layout: wiki
section: nds-bootstrap
title: Kompatibilitätsliste & Testtipps
description: Kompatibilitätsliste und Tipps zum Testen von ROMs
---

### Kompatibilitätsliste
Um getestete ROMs anzuzeigen, überprüfen Sie bitte die [Kompatibilitätsliste](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/). Wenn Sie einen Beitrag leisten möchten, klicken Sie auf `Nur anzeigen` und dann `auf Bearbeitungszugriff anfordern`. Stellen Sie sicher, dass Sie Einträge zu den Tabs am unteren Rand der Seite hinzufügen.

Um ROMs mit bekannten Problemen zu sehen, besuchen Sie die [Issues-Seite](https://github.com/DS-Homebrew/nds-bootstrap/issues) auf Github. Wenn Sie ein [neues Ticket](https://github.com/DS-Homebrew/nds-bootstrap/issues/new)erstellen möchten, folgen Sie bitte der Problemvorlage.

### Tipps zum Testen von ROMs
- Im Allgemeinen sehen Sie sich die [nds-bootstrap FAQ](https://wiki.ds-homebrew.com/nds-bootstrap/faq) und [Glossar](https://wiki.ds-homebrew.com/nds-bootstrap/glossary) an, um sicherzustellen, dass Sie verstehen, wie Sie Probleme lösen können

#### Wenn auf einen bestimmten Fehler getestet wird
- Reproduzieren Sie die Schritte so genau wie möglich
- Wenn es irgendwelche Unterschiede gibt (z. B. nds-bootstrap-Version, verwendetes System oder geänderte Einstellungen), sollten Sie dies in Ihrem Bericht angeben
- Bitten Sie den ursprünglichen Berichterstatter um weitere Einzelheiten (z. B. Hochladen einer Speicherdatei oder fehlender Informationen), falls möglich
- Wenn es keine Lösung gibt, achten Sie darauf, die Kompatibilitätsliste zu aktualisieren

#### Wenn ein ROM nach dem Aktualisieren von nds-bootstrap ein Problem hat
- Finden Sie heraus, welche Version dieses Problem zum ersten Mal eingeführt hat
- Du kannst nds-bootstrap herunterstufen, indem du eine [vergangene Version](https://github.com/DS-Homebrew/nds-bootstrap/releases) herunterlädst und den Updateanweisungen folgst
- Herabstufung auf eine frühere Version von [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) könnte ebenfalls benötigt werden

#### Wenn Tests auf ein ROM ohne bekannte Probleme oder noch nicht getestet wurden
- Sei gründlich mit dem Testen des ROM, indem du alles durchführst, was andere Benutzer sehen könnten
- Achten Sie darauf, die entsprechenden Informationen auf der Kompatibilitätsliste auf dem richtigen Blatt hinzuzufügen
- Achte auch darauf, Spiele zu entfernen, die vom Testing Queue Sheet getestet wurden

#### Bei Tests auf Blacklisten zu aktualisieren
- Ändern Sie nur die Optionen auf der schwarzen Liste: 133 MHz (TWL) CPU Speed, Card Read DMA und Asynch Card Read
- Um blockierte Optionen in den Spieleinstellungen zu aktivieren, gehen Sie zu `sd:/_nds/TWiLightMenu/settings.ini` und setzen Sie `IGNORE_BLACKLISTS` auf `1`
- Wenn beim Einschalten dieser Einstellungen irgendwelche Probleme auftreten, melden Sie sie bitte auf der Github Problemseite 
