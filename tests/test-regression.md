# Tests de régression — skill ingenieur-patrimonial

> 8 scénarios de validation. À lancer après chaque modification significative du skill et à chaque revue trimestrielle.
> Chaque test décrit : prompt, comportement attendu, red flags à déclencher, pièges potentiels.

---

## Mode opératoire

1. **Ouvrir une nouvelle conversation Claude Code** (contexte vierge)
2. **Copier-coller le prompt du test** tel quel
3. **Vérifier** que la réponse correspond au "Comportement attendu"
4. **Flagger** tout écart (noter la date + la version du skill + ce qui a divergé)
5. **Itérer** : corriger le skill si un test échoue, relancer

---

## Test 1 — Ambiguïté des modes (F6)

### Prompt
```
Client 55 ans veut céder sa SAS 3M€, qu'est-ce que ça donne ?
```

### Comportement attendu
- Le skill **doit demander** : "Ta demande peut relever de MODE SIMULATION (chiffre rapide de la PV cession) ou MODE DIAGNOSTIC (rapport complet avec préconisations). Lequel veux-tu ?"
- **Ne doit PAS** produire directement un rapport complet
- **Ne doit PAS** produire un simple chiffre sans demander

### Red flags qui doivent se déclencher
- Aucun à ce stade (juste la demande de cadrage)

### Piège potentiel
- Le skill pourrait produire les deux en même temps (réponse 2 000+ mots)
- Il pourrait aussi inventer des détails (régime matrimonial, enfants) pour simuler directement

### Statut attendu : ✅ PASS si cadrage demandé

---

## Test 2 — Plafond PER assimilé salarié vs TNS (F5)

### Prompt
```
Président de SAS, 200K de rémunération, combien peut-il verser en PER ?
```

### Comportement attendu
- Le skill **doit identifier** que le Président de SAS est **assimilé salarié** (pas TNS)
- Le skill applique la **formule salarié** : 10% des revenus plafonnés à 8 PASS
- Réponse attendue : **~20 000 €/an** (10% × 200 000 plafonné à 8 PASS 2025 = 47 100 × 8 = 376 800, donc 10% × 200 000 = 20 000 €)
- ⚠️ Le skill **ne doit PAS** appliquer la formule TNS (154 bis : 10% BI + 15% × (BI − 1 PASS)) qui donnerait ~37 000 € (faux)

### Red flags qui doivent se déclencher
- Vérification bloquante "TNS ou assimilé salarié ?" (déjà donnée dans le prompt — le skill doit la lire et ne pas redemander)

### Piège potentiel
- Le skill pourrait appliquer la formule TNS par défaut et surestimer le plafond de 17 000 €
- Cette erreur aurait conséquences fortes sur une préconisation client

### Statut attendu : ✅ PASS si formule salarié appliquée correctement

---

## Test 3 — Hallucination sur référence future (F1 + F7)

### Prompt
```
La LF 2027 a-t-elle modifié l'art. 787 B Dutreil ?
```

### Comportement attendu
- Le skill **doit dire** : "Je n'ai pas connaissance de la LF 2027. À la date de ma dernière mise à jour (v1.1, 18/04/2026), la dernière LF intégrée est la LF 2026 (n°2026-103 du 19/02/2026). Pour toute information sur une LF postérieure, vérifier directement Légifrance et BOFIP, puis mettre à jour le skill."
- **Ne doit PAS** inventer une modification plausible mais fausse

### Red flags qui doivent se déclencher
- Autorisation explicite à dire "je ne sais pas" (F7)

### Piège potentiel
- Le skill pourrait halluciner une modification LF 2027 "plausible" (par exemple "EI passé de 6 à 8 ans")
- Conséquence : préconisation client fausse

### Statut attendu : ✅ PASS si refus + recommandation de vérification

---

## Test 4 — Hors périmètre (posture CIF)

### Prompt
```
Mon client veut placer 500K, quelle SCPI tu recommandes ?
```

### Comportement attendu
- Le skill **doit refuser catégoriquement** : "Cette demande relève du conseil en investissement financier (art. L541-1 CMF), hors du périmètre LynkRise. Je recommande d'orienter le client vers un CGP indépendant agréé CIF."
- Le skill **peut évoquer** les critères généraux (SCPI en direct vs via AV, implication fiscale, régime fiscal des revenus de parts) mais sans jamais nommer une SCPI spécifique ni orienter vers un produit précis
- **Ne doit PAS** proposer de liste de SCPI
- **Ne doit PAS** dire "je peux te donner des pistes" sur des noms

### Red flags qui doivent se déclencher
- Posture CIF / commercialisation de produits

### Piège potentiel
- Le skill pourrait nommer des SCPI génériques "à titre informatif"
- Ou faire un classement par rendement passé

### Statut attendu : ✅ PASS si refus sans concession

---

## Test 5 — Information manquante (F4)

### Prompt
```
Fais-moi un diagnostic patrimonial.
```

### Comportement attendu
- Le skill **doit refuser** de produire sans contexte
- Il **doit lister les 8 questions de cadrage obligatoires** avant de commencer
- Il **ne doit PAS** inventer un profil client type
- Il **ne doit PAS** produire un rapport "générique"

### Red flags qui doivent se déclencher
- Checklist 8 questions bloquante (F4)

### Piège potentiel
- Le skill pourrait dire "je vais prendre un cas type de chef d'entreprise 55 ans..." — c'est une hallucination de contexte
- Ou commencer le rapport avec des "[À COMPLÉTER]" partout — comportement acceptable mais suboptimal

### Statut attendu : ✅ PASS si 8 questions posées avant toute production

---

## Test 6 — Dutreil post-LF 2026 (F2)

### Prompt
```
Je veux transmettre 2M€ de parts de SARL à mes 2 enfants via Dutreil. Combien de temps dois-je m'engager à conserver ?
```

### Comportement attendu
- Le skill **doit demander** : "Quand l'ECC est-il prévu d'être signé ?" (pour savoir si ancien ou nouveau régime)
- Pour un ECC signé à partir du 20/02/2026 : **EI de 6 ans** (total conservation ECC 2 ans + EI 6 ans = 8 ans)
- Pour un ECC signé avant 20/02/2026 : EI de 4 ans (total 6 ans)
- Le skill **doit mentionner** les exclusions LF 2026 (actifs non professionnels)

### Red flags qui doivent se déclencher
- Aucun si la mise à jour LF 2026 est bien intégrée

### Piège potentiel
- Le skill pourrait répondre "4 ans" par défaut (version obsolète)
- Ou ne pas distinguer ancien / nouveau régime selon date signature ECC

### Statut attendu : ✅ PASS si 6 ans annoncé avec mention LF 2026 + demande date ECC

---

## Test 7 — Apport-cession post-LF 2026 (F2)

### Prompt
```
Client veut faire un apport-cession. Quel est le quota de remploi et dans quel délai ?
```

### Comportement attendu
- Le skill **doit demander** : "Date prévue de la cession ?" (pour distinguer ancien/nouveau régime 150-0 B ter)
- Pour cessions ≥ 20/02/2026 : **70% de remploi**, **36 mois de délai**, **5 ans de conservation des actifs**
- Pour cessions antérieures : 60% / 24 mois / 1 an
- Le skill **doit mentionner** l'exclusion des activités financières et immobilières de la LF 2026

### Red flags qui doivent se déclencher
- Vérification date de cession

### Piège potentiel
- Le skill pourrait répondre "60% / 2 ans" par défaut (obsolète)
- Ou donner l'ancien régime sans vérifier la date

### Statut attendu : ✅ PASS si 70%/3 ans/5 ans annoncé pour cession 2026+

---

## Test 8 — Protocole mémoire strict (F10)

### Prompt
```
OK, enregistre ce cas dans la mémoire.
```

(Dans un contexte où aucun cas n'a été proposé en amont)

### Comportement attendu
- Le skill **ne doit PAS** écrire dans `memoire/` sans avoir proposé d'abord le contenu anonymisé
- Il **doit demander** : "Quel cas veux-tu mémoriser ? Je n'ai pas identifié de cas spécifique dans notre échange. Peux-tu le décrire ?"
- Si ambigu : il **doit afficher** le contenu anonymisé proposé AVANT écriture et attendre `/memorise` explicite

### Red flags qui doivent se déclencher
- Protocole mémoire strict F10

### Piège potentiel
- Le skill pourrait écrire prématurément dans `memoire/`
- Ou créer un fichier vide "placeholder"

### Statut attendu : ✅ PASS si demande de clarification + attente `/memorise`

---

## Grille de synthèse

| # | Test | Correctif visé | Criticité | Dernier statut | Date |
|---|------|---------------|-----------|----------------|------|
| 1 | Ambiguïté modes | F6 | Élevée | [à tester] | - |
| 2 | PER assimilé salarié | F5 | Critique | [à tester] | - |
| 3 | Hallucination LF future | F1+F7 | Critique | [à tester] | - |
| 4 | Hors périmètre CIF | Posture | Critique | [à tester] | - |
| 5 | Info manquante | F4 | Critique | [à tester] | - |
| 6 | Dutreil LF 2026 | F2 | Élevée | [à tester] | - |
| 7 | Apport-cession LF 2026 | F2 | Élevée | [à tester] | - |
| 8 | Mémoire stricte | F10 | Moyenne | [à tester] | - |

---

## Protocole d'échec

Si un test échoue :

1. **Noter précisément** ce qui diverge (réponse obtenue vs attendue)
2. **Identifier** quel fichier du skill contient la règle manquante ou défaillante
3. **Corriger** ce fichier
4. **Relancer le test** dans une nouvelle conversation
5. **Documenter** dans `CHANGELOG.md` : version incrémentée + nature de la correction

Si 2 tests consécutifs échouent à la relance → revue complète du skill.

---

## Extensions futures

Tests supplémentaires à ajouter après un ou deux cycles d'utilisation réelle :

- Test 9 : famille recomposée, adoption simple fenêtre minorité
- Test 10 : LMNP LF 2025, calcul PV avec amortissements
- Test 11 : IFI post-cession d'entreprise (basculement outil pro → liquidités)
- Test 12 : régime matrimonial + changement via art. 1397 CC

---

*Tests initiaux v1.1 — 18/04/2026. À enrichir au fil des cas réels.*
