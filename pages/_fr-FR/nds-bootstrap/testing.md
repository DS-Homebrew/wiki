---
lang: fr-FR
layout: wiki
section: nds-bootstrap
title: Liste de compatibilité et conseils de test
description: Liste de compatibilité et conseils pour tester les ROMs
---

### Liste de compatibilité
Pour voir les ROMs testées, consultez la [liste de compatibilité](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/). Si vous voulez contribuer, appuyez sur `Lecture seule` puis sur `Demande d'accès en écriture`. Veillez à ajouter les entrées à la bonne feuille en fonction des onglets situés au bas de la page.

Pour voir les ROMs avec des problèmes connus, consultez la [page des problèmes](https://github.com/DS-Homebrew/nds-bootstrap/issues) sur GitHub. Si vous voulez créer un [nouveau problème](https://github.com/DS-Homebrew/nds-bootstrap/issues/new), veuillez suivre correctement le modèle de problème.

### Conseils pour tester les ROMs
- En général, consultez la [FAQ de nds-bootstrap](https://wiki.ds-homebrew.com/fr-FR/nds-bootstrap/faq) et le [glossaire](https://wiki.ds-homebrew.com/fr-FR/nds-bootstrap/glossary) pour vous assurer que vous comprenez comment résoudre les problèmes

#### Si le test porte sur un bogue spécifique signalé
- Reproduisez les étapes le plus fidèlement possible
- S'il y a des différences (comme la version de nds-bootstrap, le système utilisé ou les paramètres modifiés), assurez-vous de les inclure dans votre rapport
- N'hésitez pas à demander au rapporteur original plus de détails (comme le téléchargement d'un fichier de sauvegarde ou toute information manquante) si possible
- S'il n'y a pas de solution, assurez-vous de mettre à jour la liste de compatibilité

#### Si une ROM a un problème après la mise à jour de nds-bootstrap
- Trouvez la version spécifique qui a introduit ce problème pour la première fois
- Vous pouvez downgrader nds-bootstrap en téléchargeant une [ancienne version](https://github.com/DS-Homebrew/nds-bootstrap/releases) et en suivant les instructions de mise à jour
- Un downgrade vers une version antérieure de [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) peut également être nécessaire

#### Si vous testez une ROM qui n'a pas de problèmes connus ou qui n'a jamais été testée auparavant
- Testez minutieusement la ROM, en passant en revue tout ce que les autres utilisateurs pourraient voir
- Assurez-vous d'ajouter les informations appropriées sur la bonne feuille de la liste de compatibilité
- Veillez également à retirer de la feuille de la file d'attente des tests (Testing Queue) les jeux qui ont été testés

#### Si le test consiste à mettre à jour les listes noires
- Ne modifiez que les options sur liste noire, à savoir : la vitesse du CPU à 133 MHz (TWL), la lecture du DMA de la carte et la lecture asynchrone de la carte
- Pour activer les options de liste noire dans les paramètres par jeu, allez dans `sd:/_nds/TWiLightMenu/settings.ini` et définissez `IGNORE_BLACKLISTS` à `1`
- Si vous rencontrez des problèmes en activant ces paramètres, veuillez les signaler sur la page des problèmes de GitHub 
