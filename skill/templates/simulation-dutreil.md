# Template — Simulation Pacte Dutreil (v2 post-LF 2026)

> Trame de calcul Dutreil. Référence : `fiche-dutreil.md` (vault), art. 787 B CGI modifié par LF 2026 (Loi n°2026-103 du 19/02/2026).
> **Changement majeur LF 2026** : engagement individuel (EI) passé de 4 ans à 6 ans + exclusion des actifs non professionnels.

---

## ⚠️ Règle de date

**Vérifier la date de signature de l'ECC avant tout calcul** :
- ECC signé avant 20/02/2026 → ancien régime (EI 4 ans)
- ECC signé à partir du 20/02/2026 → nouveau régime (EI 6 ans + exclusions LF 2026)

---

## Formule

```
Valeur titres × 25% (exo 75%) = Base après Dutreil
Base × quote-part NP (si donation NP) = Base transmise
Base transmise ÷ nb bénéficiaires − abattement 100 000 € = Base taxable / bénéficiaire
Base taxable → barème DMTG art. 777 = DMTG brut
DMTG brut × 50% si donateur < 70 ans ET donation en PP (art. 790) = DMTG final
```

**Attention art. 790 CGI** : réduction 50% **uniquement pour donation en PP**. Pas de réduction en NP.

---

## Paramètres du dossier

| Paramètre | Valeur |
|-----------|--------|
| Date de signature ECC envisagée | [ ] (détermine ancien/nouveau régime) |
| Valeur des titres | [ ] € |
| Âge du donateur | [ ] ans |
| Modalité | [ ] PP / [ ] NP |
| Nombre de bénéficiaires | [ ] |
| L'un exerce-t-il la direction ? | [ ] Oui / [ ] Non |
| ECC : classique / réputé acquis / post-mortem | [ ] |
| Actifs sociétaires non professionnels ? | [ ] Oui (à exclure LF 2026) / [ ] Non |

---

## Barème art. 669 CGI (si NP)

| Âge usufruitier | Valeur NP | Valeur US |
|-----------------|-----------|-----------|
| < 21 ans | 10% | 90% |
| 21-30 ans | 20% | 80% |
| 31-40 ans | 30% | 70% |
| 41-50 ans | 40% | 60% |
| 51-60 ans | 50% | 50% |
| 61-70 ans | 60% | 40% |
| 71-80 ans | 70% | 30% |
| 81-90 ans | 80% | 20% |
| > 91 ans | 90% | 10% |

---

## Barème DMTG ligne directe (art. 777 CGI) — inchangé 2026

| Fraction nette taxable (après abattement) | Taux |
|------------------------------------------|------|
| ≤ 8 072 € | 5% |
| 8 073-12 109 € | 10% |
| 12 110-15 932 € | 15% |
| 15 933-552 324 € | 20% |
| 552 325-902 838 € | 30% |
| 902 839-1 805 677 € | 40% |
| > 1 805 677 € | 45% |

---

## Calcul pas à pas

| Étape | Calcul | Montant |
|-------|--------|---------|
| 1. Valeur titres brute | [V] | [V] € |
| 1 bis. Exclusion LF 2026 (actifs non pro) | − [exclusions] | [V − exclusions] |
| 2. Exonération Dutreil 75% | × 25% | [étape 1 bis × 25%] |
| 3. Valeur NP (si applicable) | × quote-part NP | [ ] |
| 4. Par bénéficiaire | ÷ nb | [ ] |
| 5. Abattement 100 000 € / enfant | − 100 000 € | [ ] (plancher 0) |
| 6. DMTG brut | barème art. 777 sur étape 5 | [ ] |
| 7. Réduction 50% (PP + donateur < 70) | × 50% | [ ] |
| 8. DMTG final / bénéficiaire | | [ ] |
| 9. **DMTG total** | × nb | **[ ]** |

---

## Conditions Dutreil à vérifier systématiquement — v2

### ECC (engagement collectif de conservation)

- [ ] **Durée minimum : 2 ans**
- [ ] **Seuils non coté** : 17% droits financiers ET 34% droits de vote
- [ ] **Seuils coté** : 10% droits financiers ET 20% droits de vote
- [ ] Modalité : classique / réputé acquis / post-mortem (6 mois après décès)

### EI (engagement individuel de conservation)

- [ ] **6 ans** (nouveau LF 2026, si ECC ≥ 20/02/2026)
- [ ] **4 ans** (ancien régime, si ECC < 20/02/2026)
- [ ] Démarre à la fin de l'ECC
- [ ] **Conservation totale minimum : 8 ans** (nouveau) / **6 ans** (ancien)

### Fonction de direction

- [ ] Pendant toute la durée de l'ECC
- [ ] **+ 3 années après la transmission**
- [ ] Exercée par l'un des signataires ECC OU l'un des bénéficiaires

### Société éligible

- [ ] Activité opérationnelle (industrielle, commerciale, artisanale, agricole, libérale)
- [ ] Siège UE ou Espace Économique Européen
- [ ] Pas une activité de gestion de patrimoine pur

### LF 2026 — exclusions d'assiette

- [ ] Lister les actifs non exclusivement dédiés à l'activité pro détenus par la société ou ses filiales
- [ ] Ces actifs sont **retranchés de la base d'exonération** (pas de 75% sur eux)
- [ ] Exemples explicitement visés par la LF 2026 : yachts, bijoux, biens annexes

---

## Exemple type rapide (post-LF 2026)

**Donateur 60 ans, 3 enfants, société 2 M€ (dont 200 K€ de trésorerie excédentaire non affectée identifiée comme actif non pro), donation NP** :

| Étape | Calcul | Montant |
|-------|--------|---------|
| 1. Valeur titres | 2 000 000 € | 2 000 000 € |
| 1 bis. Exclusion LF 2026 | − 200 000 € (trésorerie excédentaire non pro) | 1 800 000 € |
| 2. Exo 75% | × 25% | 450 000 € |
| 3. Valeur NP (60 ans) | × 50% | 225 000 € |
| 4. Par enfant | ÷ 3 | 75 000 € |
| 5. Abattement 100 000 € | − 100 000 € | 0 € (couvert) |
| 6. DMTG | 0 € | **0 €** |

Mais attention : les **200 K€ d'actifs exclus** de Dutreil entrent dans la base taxable normale. S'ils sont aussi transmis en NP : 200 000 × 50% = 100 000 € / 3 = 33 333 € par enfant. Si cumul avec d'autres donations antérieures consommant l'abattement : DMTG possibles à calculer.

**Sans exclusion LF 2026 (ancien régime)** : DMTG = 0 € sur 2 M€.

---

## Risques de reprise

| Risque | Conséquence |
|--------|-------------|
| Cession avant fin EI (6 ans post-LF 2026) | Reprise intégrale + intérêts (art. 1727 CGI) |
| Perte de direction dans les 3 ans post-transmission | Reprise proportionnelle |
| Évolution de l'activité vers du patrimonial | Reprise |
| Non-respect des seuils ECC | Reprise |
| Actifs non pro réintégrés (LF 2026) | Contrôle fiscal possible sur la base de Dutreil |

---

## Sortie attendue

Tableau Avant / Après Dutreil :

| Situation | DMTG | Coût en % de la valeur |
|-----------|------|------------------------|
| Sans Dutreil | [ ] | [ ] |
| Avec Dutreil (base réduite) | [ ] | [ ] |
| **Économie** | **[ ]** | |

Mentionner explicitement :
- Le régime applicable (ancien ou nouveau LF 2026)
- La durée totale de conservation (6 ou 8 ans)
- Les actifs éventuellement exclus de la base
- Le calendrier (signature ECC, transmission, fin EI)

---

*À adosser à `fiche-dutreil.md` (vault) — à mettre à jour avec les modifications LF 2026.*
