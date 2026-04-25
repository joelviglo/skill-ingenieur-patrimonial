# Template — Simulation IFI

> Trame de calcul IFI. Référence : `fiche-ifi.md` du vault, art. 964-978 CGI.

---

## Paramètres IFI 2026

**Seuil d'assujettissement** : 1 300 000 € (patrimoine immobilier net)

**Barème (art. 977 CGI)** — applicable si > 1,3 M€ :

| Tranche | Taux |
|---------|------|
| 0 à 800 000 € | 0% |
| 800 001 à 1 300 000 € | 0,5% |
| 1 300 001 à 2 570 000 € | 0,7% |
| 2 570 001 à 5 000 000 € | 1% |
| 5 000 001 à 7 500 000 € ⚠️ | 1,25% |
| > 7 500 000 € ⚠️ | 1,5% |

⚠️ **Tranches > 5 M€ : sources secondaires divergentes** (certains sites indiquent 5-10 M€ / 10 M€+). **Vérifier Légifrance art. 977 CGI avant tout livrable sur patrimoine > 5 M€.**

**Règle** : si patrimoine > 1,3 M€, le barème s'applique à partir de 800 K€ (pas à partir de 1,3 M€).

**Décote** pour patrimoines entre 1,3 M€ et 1,4 M€ : réduction = 17 500 € − (1,25% × patrimoine net).

---

## Étape 1 — Inventaire de l'actif IFI brut

| Poste | Valeur brute | Ajustement | Valeur retenue |
|-------|--------------|-----------|----------------|
| Résidence principale | [ ] | × 70% (abattement 30%, art. 973 CGI) | [ ] |
| Résidences secondaires | [ ] | — | [ ] |
| Immeubles locatifs | [ ] | — | [ ] |
| SCPI / OPCI | [ ] | — | [ ] |
| SCI (IR ou IS) — parts | [ ] | Selon quote-part biens immo | [ ] |
| Parts société opérationnelle | [ ] | Exonération outil pro (art. 975 CGI, 3 conditions) | [ ] ou 0 € |
| Parts holding non animatrice | [ ] | Entre dans IFI à hauteur de l'actif immo | [ ] |
| **Total actif IFI brut** | | | **[ ]** |

**Vérif conditions art. 975 CGI (exonération outil pro)** :
- [ ] Fonction de direction effective
- [ ] Rémunération normale (> 50% revenus pro du foyer)
- [ ] Détention > 25% droits de vote (sauf dispense)

---

## Étape 2 — Passif déductible

| Dette | Montant | Affectation | Déductible ? |
|-------|---------|-------------|--------------|
| Emprunt RP | [ ] | Affecté à bien IFI | Oui |
| Emprunt locatif | [ ] | Affecté à bien IFI | Oui |
| Emprunt in fine (personne liée) | [ ] | Rabot 60% au-delà d'un seuil | Partiellement |
| Dette d'impôt foncier, charges copro | [ ] | | Oui sur dettes échues |
| **Total passif déductible** | | | **[ ]** |

---

## Étape 3 — Calcul de l'IFI net

**Assiette IFI nette** : Actif brut - Passif déductible = [ ] €

### Si assiette < 1 300 000 € → Non assujetti

### Si assiette ≥ 1 300 000 € → Calcul du barème

| Tranche | Plafond | Base dans la tranche | Taux | IFI tranche |
|---------|---------|---------------------|------|-------------|
| 800K-1,3M | 500 000 | min(500 000 ; assiette - 800K) | 0,5% | [ ] |
| 1,3M-2,57M | 1 270 000 | min(1 270 000 ; assiette - 1,3M) | 0,7% | [ ] |
| 2,57M-5M | 2 430 000 | min(2 430 000 ; assiette - 2,57M) | 1% | [ ] |
| 5M-10M | 5 000 000 | min(5 000 000 ; assiette - 5M) | 1,25% | [ ] |
| > 10M | — | assiette - 10M | 1,5% | [ ] |

**IFI total** = somme des tranches = [ ] €

---

## Étape 4 — Réductions d'IFI

- Dons aux œuvres (art. 978 CGI) : 75% du don, plafond 50 000 €
- Investissement FCPR / FCPI (certaines conditions) : 50%

**IFI après réductions** : [ ] €

---

## Étape 5 — Plafonnement (art. 979 CGI)

IFI + IR + PS ≤ 75% des revenus de l'année précédente. Si dépassement : réduction de l'IFI correspondant à l'excédent.

---

## Leviers d'optimisation candidats

- [ ] **Donation NP** de biens locatifs aux enfants (réduit l'assiette à la valeur usufruit conservé)
- [ ] **Basculement** de liquidités vers AV / PER (hors IFI)
- [ ] **Création holding animatrice** (si activité opérationnelle pertinente)
- [ ] **Vente** de bien(s) pour passer sous le seuil
- [ ] **Don aux œuvres** (réduction 75%)
- [ ] **Investissement FCPR** (réduction 50% si projet personnel)

---

## Sortie attendue

Tableau récapitulatif avec :
- Assiette actuelle
- IFI calculé
- 2-3 scénarios d'optimisation simulés
- Gain IFI annuel
- Calendrier de mise en œuvre

---

*Simulation à adosser à `fiche-ifi.md` (vault) pour les exemples chiffrés détaillés.*
