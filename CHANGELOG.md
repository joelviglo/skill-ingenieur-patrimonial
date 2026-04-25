# CHANGELOG — skill ingenieur-patrimonial

## [1.1.0] — 2026-04-18 (review critique + correctifs F1 à F10)

### 🚨 Corrections majeures de sécurité / fiabilité

**F1 — Audit complet des références légales**
- Vérifications exhaustives sur Légifrance + BOFIP + sources patrimoniales spécialisées (AUREP, Club Patrimoine, Fiscaloo, Hagnere, Legifiscal)
- Confirmation : LF 2026 n°2026-103 du 19/02/2026 bien existante (pas une hallucination)
- Toutes les références du `references/references-legales.md` v2 vérifiées et datées

**F2 — Vérification de tous les chiffres / plafonds / barèmes**
- PASS 2026 corrigé : **48 060 €** (était 47 100 €, +2% vs 2025)
- PMSS 2026 : 4 005 €
- Arrêté du 22/12/2025 en vigueur 01/01/2026
- Plafonds AV, IFI, DMTG confirmés

**Changements législatifs LF 2026 intégrés** :
- **Dutreil art. 787 B** : EI 4→6 ans (durée totale 8 ans) + exclusion actifs non professionnels
- **Apport-cession art. 150-0 B ter** : remploi 60%→70%, délai 24→36 mois, conservation actifs 1→5 ans
- **Déficit foncier majoré art. 156 I 3°** : prolongé jusqu'au 31/12/2027
- **CDHR art. 224** : prorogée aux revenus 2026 + acompte 95% du 1er au 15/12/2026

**F3 — Variable `$VAULT_ROOT`**
- Remplacement des 19 occurrences de chemin OneDrive hardcodé par la variable `$VAULT_ROOT` dans SKILL.md
- Instruction : si vault déplacé, demander le nouveau chemin à Joel plutôt qu'inventer

**F4 — Checklist 8 questions de cadrage obligatoires**
- Ajoutée en MODE DIAGNOSTIC dans SKILL.md
- STOP obligatoire si informations manquantes
- 8 questions : âge, régime matrimonial, enfants, statut pro (TNS/assimilé salarié), patrimoine, revenus, dispositifs en cours, projets 2-5 ans

**F5 — Formule PER TNS corrigée et enrichie (lecture Club Patrimoine)**
- Distinction explicite **TNS vs assimilé salarié** (question bloquante avant tout calcul PER)
- Formule complète art. 154 bis (catégoriel année N) : 10% × min(BI; 8 PASS) + 15% × (BI − 1 PASS)
- Formule complète art. 163 quatervicies (global année N-1)
- **Cumul possible la première année** : 154 bis + 163 quatervicies avec reports N-1/N-2/N-3
- Mutualisation couples via case 6 QR (163 quatervicies uniquement)
- Auto-entrepreneurs : pas d'accès 154 bis, accès 163 quatervicies uniquement

**F6 — Règle d'ambiguïté des modes**
- Si prompt ambigu entre 2+ modes : demander avant de produire
- Intégré dans SKILL.md section "Les 4 modes"

**F7 — Autorisation explicite à dire "je ne sais pas"**
- Section dédiée en tête de SKILL.md
- Liste des situations où le refus est requis
- Formulation type incluse

**F8 — Lecture paresseuse des références**
- Plus de lecture systématique de references-legales.md et vigilance.md au démarrage (économie ~15 K tokens)
- Synthèse des 5 règles critiques intégrée directement dans SKILL.md
- Fichiers de référence chargés uniquement quand nécessaire

**F9 — Tests de régression**
- Création de `tests/test-regression.md`
- 8 scénarios de validation couvrant F1-F10
- Protocole d'échec documenté
- Extensions futures prévues (tests 9-12)

**F10 — Protocole mémoire strict `/memorise`**
- Signal explicite `/memorise` (ou "OK mémorise") requis avant toute écriture dans `memoire/`
- Affichage obligatoire du contenu anonymisé AVANT écriture
- "OK" générique interprété strictement (pas une autorisation de mémorisation)

### 📝 Fichiers modifiés

- `SKILL.md` : réécrit (ajout F3, F4, F6, F7, F8, F10, auto-vérification 5 questions)
- `references/references-legales.md` : réécrit v2 post-LF 2026
- `templates/simulation-dutreil.md` : mise à jour EI 6 ans + exclusions
- `templates/simulation-ifi.md` : précisions barème + disclaimer tranches > 5 M€
- `memoire/INDEX.md` : renforcé avec protocole F10

### ➕ Fichiers ajoutés

- `tests/test-regression.md` : 8 scénarios de validation
- `tests/` (nouveau dossier)

### À faire dans le vault (après cette session)

- [ ] `fiche-dutreil.md` : EI 4→6 ans, exclusions LF 2026
- [ ] `fiche-pv-cession-entreprise.md` : apport-cession 70%/3 ans/5 ans
- [ ] `fiche-retraite-tns.md` : formule complète PER + PASS 2026
- [ ] `notes/references-legales.md` (vault) : aligner sur le skill
- [ ] Cas clients 01-04 : ajouter notes "à revoir si post-LF 2026"

### Sources de vérification

- Légifrance (art. 779, 787 B, 150-0 B ter, 150-0 D ter, 150 VB, 774 bis, 977, 990 I, 757 B, 125-0 A, 156, 669, 1397, 1536 etc.)
- BOFIP (BOI-ENR-DMTG, BOI-RPPM-PVBMI, BOI-BIC, BOI-PAT-IFI, BOI-RFPI, BOI-IR-CHR)
- impots.gouv.fr
- Service-public.gouv.fr (PASS 2026)
- URSSAF, Hagnere Patrimoine, Club Patrimoine, Fiscaloo, Legifiscal, AUREP, Actu-Juridique

---

## [1.0.0] — 2026-04-17 (création initiale)

### Création initiale

- Skill créé dans `~/.claude/skills/ingenieur-patrimonial/`
- Architecture : SKILL.md + references/ (5 fichiers) + templates/ (5 fichiers) + memoire/ + PROJET-CLAUDE-AI-INSTRUCTIONS.md
- 4 modes : DIAGNOSTIC, SIMULATION, RÉDACTION, CHIFFRAGE
- Posture : Joel = conseil, jamais client
- Périmètre : pas CIF, pas contentieux, pas commercialisation produits
- Intégration obsidian-cli
- Références vérifiées Phase 2 incorporées

---

## Prochaines revues prévues

- **Juillet 2026** : revue trimestrielle Q2 (PASS éventuellement révisé, LF rectificatives, jurisprudence)
- **Octobre 2026** : revue trimestrielle Q3
- **Janvier-février 2027** : synchronisation LF 2027 (nouveau cycle)

---

## Protocole de versioning

- **Version X.Y.Z** : X = refonte majeure / Y = ajout fonctionnalité / Z = correctif mineur
- Chaque modification documentée ici avec date + motif + fichier impacté
- Synchroniser avec `$VAULT_ROOT/03_Daily/YYYY-MM-DD.md` quand modification faite

---

## Sources à surveiller en continu

- Légifrance : art. 787 B, 774 bis, 150-0 D ter, 150-0 B ter, 150 VB, 224, 1397 CC, 1527 CC, 929 CC, 975 CGI
- BOFIP : BOI-ENR-DMTG, BOI-RPPM-RCM, BOI-BIC, BOI-PAT-IFI
- Jurisprudence : Cass. 1re civ., Cass. com., CE (sections fiscale et patrimoine)
- Textes en cours : LF année N+1, LFR, LFSS, ordonnances
- Arrêté annuel PASS (décembre)
