# Mémoire — Cas clients anonymisés

> Capitalisation sur les cas réels traités par LynkRise. **Tous les cas ici sont anonymisés.**
> Conformité RGPD + art. 226-13 CP (secret professionnel).

---

## 🔒 PROTOCOLE STRICT D'ÉCRITURE (F10)

**Sans validation explicite de Joel via le mot-clé `/memorise` (ou équivalent écrit clair), NE RIEN écrire dans `memoire/`.**

### Déroulé obligatoire

1. **Proposer** à la fin d'une mission ou d'un cas marquant :
   > "Ce cas présente un pattern original : [décrire]. Veux-tu que je l'enregistre (anonymisé) dans `memoire/` ? Tape `/memorise` pour valider, ou sinon passe."

2. **Afficher INTÉGRALEMENT le contenu anonymisé proposé** dans le message, AVANT toute tentative d'écriture fichier.

3. **Attendre un signal explicite** : `/memorise`, "OK mémorise", "enregistre ce cas", ou formulation équivalente sans ambiguïté.

4. **Interprétation stricte** : si Joel répond "OK" à un autre message général, ne PAS écrire. Seul un signal explicitement lié à l'enregistrement mémoire autorise l'écriture.

5. **Après écriture validée** : mentionner le chemin exact du fichier créé et mettre à jour la table de cette page.

---

## Règles d'anonymisation (RGPD + art. 226-13 CP)

Avant tout enregistrement, supprimer ou remplacer :

| Élément | Traitement |
|---------|-----------|
| **Nom/prénom réels** | Pseudonyme stable (M. ALPHA, Mme BETA, etc.) |
| **Raison sociale** | Nom fictif (SAS DELTA, SARL OMEGA) |
| **Adresses** | Département ou région uniquement |
| **Dates de naissance** | Âge arrondi ("55 ans") |
| **Montants bancaires exacts** | Arrondis à la dizaine de milliers d'euros |
| **SIREN, SIRET, IBAN, n° contrats AV** | ❌ **Jamais consignés** |
| **Noms intervenants** (notaire, avocat, banque) | Anonymisés (étude X, banque Y) |
| **Liens familiaux** | Conservés (essentiels) mais sans prénoms |
| **Identifiants administratifs** | ❌ Jamais |

Point bloquant : **demander confirmation explicite à Joel avant chaque ajout via `/memorise`**.

---

## Cas enregistrés

*(aucun cas pour l'instant — à remplir progressivement, uniquement sur signal `/memorise`)*

| Réf | Date | Archétype | Particularité | Leçons extraites |
|-----|------|-----------|---------------|------------------|
| — | — | — | — | — |

---

## Structure type d'un fichier cas mémorisé

```markdown
---
type: cas-memoire-anonymise
date: YYYY-MM-DD
archetype: [cession / LMNP / transmission / recomposition / autre]
tags: [anonymise, pro]
---

# Cas YYYY-NNN — [titre anonymisé]

## Profil synthétique (anonymisé)
- Pseudo : [M. ALPHA / Mme BETA]
- Âge : [55 ans]
- Situation familiale : [marié CRA, 2 enfants]
- Activité : [dirigeant SAS dans le secteur XXX]
- Patrimoine ordres de grandeur : [immobilier ~X M€, mobilier ~Y M€, SAS ~Z M€]

## Problématique principale
[1-2 paragraphes]

## Montage retenu
[Actions hiérarchisées, sans identifiants précis]

## Résultat chiffré
[Gains mobilisés, droits évités, en ordres de grandeur]

## Leçons utiles pour des cas similaires
- [Leçon 1]
- [Leçon 2]
- [Piège rencontré et solution]

## À intégrer dans le skill ?
- [ ] Mise à jour `references/vigilance.md`
- [ ] Mise à jour `references/cas-patterns.md`
- [ ] Nouveau piège à documenter
- [ ] Nouveau template à créer
```

---

## Conservation et suppression

- **Durée de conservation** : 10 ans (alignée sur les obligations comptables)
- **Suppression sur demande** : si Joel ou un client demande, suppression immédiate
- **Revue annuelle** : chaque janvier, vérifier que les cas conservés sont toujours pertinents et bien anonymisés

---

## Cas de refus de mémorisation

**Ne pas enregistrer** :
- Cas banals (déjà couverts par les 4 archétypes du vault)
- Dossiers en cours où le conseil n'est pas finalisé
- Informations sensibles non indispensables
- Cas dont Joel n'a pas explicitement validé l'anonymisation
