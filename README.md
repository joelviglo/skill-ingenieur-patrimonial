# skill-ingenieur-patrimonial

> **Repo PRIVÉ.** Skill Claude pour l'ingénierie patrimoniale LynkRise.
> Couvert par le secret professionnel de l'expert-comptable (art. 226-13 CP).
> Aucune partie ne peut être partagée, copiée ou diffusée sans l'accord exprès de Joel Viglo.

## C'est quoi ?

Skill pour Claude Code qui assiste Joel Viglo (expert-comptable fiscaliste, cabinet LynkRise) dans les missions d'ingénierie patrimoniale auprès de chefs d'entreprise et investisseurs.

**4 modes** :
- **DIAGNOSTIC** — analyse complète d'une situation client → rapport structuré
- **SIMULATION** — chiffrage ponctuel (cession, Dutreil, IFI, démembrement)
- **RÉDACTION** — mémo notaire, clause bénéficiaire, brief avocat
- **CHIFFRAGE** — devis prospect via grille ICD

**Posture** : Joel = conseil, jamais client. Pas de CIF, pas de placement, pas de produit.

Version actuelle : **v1.1** (post-LF 2026, 18/04/2026).

## Installation rapide

### Option 1 — via npx (recommandé)

```bash
npx github:joelviglo/skill-ingenieur-patrimonial install
```

Le script copie le contenu de `skill/` vers `~/.claude/skills/ingenieur-patrimonial/`.

### Option 2 — clone manuel

```bash
git clone git@github.com:joelviglo/skill-ingenieur-patrimonial.git ~/dev/skill-ingenieur-patrimonial
cd ~/dev/skill-ingenieur-patrimonial
node bin/install.js
```

### Options du script d'installation

| Option | Effet |
|--------|-------|
| `--force` | Écrase la cible existante (⚠️ supprime `memoire/`) |
| `--dry-run` | Affiche ce qui serait fait sans rien copier |
| `--target=PATH` | Cible alternative (default : `~/.claude/skills/`) |

Variable d'environnement : `CLAUDE_SKILLS_DIR` pour redéfinir le dossier des skills.

### Mise à jour

```bash
npx github:joelviglo/skill-ingenieur-patrimonial install --force
```

⚠️ `--force` supprime aussi le contenu de `memoire/` du skill installé. **Sauvegarde** d'abord les cas anonymisés que tu veux conserver, ou utilise `--keep-memoire` au moment de désinstaller.

### Désinstallation

```bash
npx github:joelviglo/skill-ingenieur-patrimonial uninstall
```

Avec `--keep-memoire`, le dossier `memoire/` est sauvegardé dans `~/.claude-skill-ingenieur-patrimonial-memoire-backup-<timestamp>/` avant suppression.

## Vérifier l'installation

```bash
ls -la ~/.claude/skills/ingenieur-patrimonial/
cat ~/.claude/skills/ingenieur-patrimonial/SKILL.md | head -30
```

Puis dans Claude Code, le skill est automatiquement détecté. Pour le tester :

> "J'ai RDV demain avec un dirigeant 58 ans qui veut céder sa SAS 4M€. Prépare le diagnostic."

Le skill doit demander quel mode (DIAGNOSTIC ou SIMULATION) avant de produire.

## Structure du skill

```
skill/
├── SKILL.md                          # Point d'entrée (4 modes, posture, règles)
├── CHANGELOG.md                      # Versions
├── PROJET-CLAUDE-AI-INSTRUCTIONS.md  # Bascule web/mobile via Projet Claude.ai
├── references/
│   ├── references-legales.md         # Articles + chiffres vérifiés post-LF 2026
│   ├── vigilance.md                  # Pièges + 10 red flags + garde-fous
│   ├── fiches-map.md                 # Routage vers les fiches du vault
│   ├── cas-patterns.md               # 4 archétypes clients
│   └── grille-icd.md                 # Chiffrage rapide
├── templates/
│   ├── memo-preconisation.md         # Structure 7 blocs
│   ├── simulation-ifi.md
│   ├── simulation-dutreil.md
│   ├── simulation-demembrement.md
│   └── chiffrage-mission.md
├── memoire/
│   └── INDEX.md                      # Protocole /memorise (cas anonymisés)
└── tests/
    └── test-regression.md            # 8 scénarios de validation
```

## Maintenance

- **Revue trimestrielle** : janvier, avril, juillet, octobre. Vérifier `references/references-legales.md`.
- **Synchro LF** : à chaque LF/LFR/LFSS. Mise à jour PASS, plafonds, dispositifs modifiés.
- **Tests de régression** : relancer les 8 scénarios de `tests/test-regression.md` après toute modification.

Voir le `CHANGELOG.md` pour l'historique des versions.

## Prérequis

- Node.js ≥ 18 (pour les scripts d'install/uninstall)
- Claude Code installé (`~/.claude/skills/` accessible en écriture)
- Optionnel : `obsidian-cli` skill installé pour interagir avec le vault Obsidian de Joel

## Sécurité et confidentialité

- ✅ Repo **PRIVÉ** sur GitHub
- ✅ `.gitignore` exclut tout cas mémorisé réel (`skill/memoire/cas-*.md`)
- ✅ Aucune donnée client réelle dans le repo
- ✅ Si tu installes le skill, **ton** dossier `memoire/` reste local et n'est jamais poussé

**Si tu identifies une fuite de données dans un commit** : ouvre une issue privée immédiatement, et purge l'historique avec `git filter-repo`.

## Liens utiles

- Vault Obsidian LynkRise (privé) : `~/Library/CloudStorage/OneDrive-LynkRise/VaultObsidianJVI/Core_JVI/`
- Skill `assistant-controle-fiscal` (complémentaire pour les contrôles fiscaux) : compagnon non installé via ce repo
- Documentation Claude Code skills : https://docs.claude.com/

## Contact

Joel Viglo — jvigameplay99@gmail.com
LynkRise — Cabinet d'expertise comptable et de fiscalité

---

*Repo créé le 25 avril 2026. Version skill v1.1.*
