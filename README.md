# skill-ingenieur-patrimonial

> **Repo public, contenu propriétaire LynkRise.**
> Source-available pour permettre l'installation depuis des plateformes tierces (Claude Code, Paperclip) qui n'autorisent que les dépôts publics.
> **Toute reproduction, copie ou utilisation par un tiers est interdite** — voir [LICENSE](./LICENSE).
> La grille tarifaire LynkRise et les données client ne figurent PAS dans ce dépôt.

## C'est quoi ?

Skill pour Claude Code qui assiste Joel Viglo (expert-comptable fiscaliste, cabinet LynkRise) dans les missions d'ingénierie patrimoniale auprès de chefs d'entreprise et investisseurs.

**4 modes** :
- **DIAGNOSTIC** — analyse complète d'une situation client → rapport structuré
- **SIMULATION** — chiffrage ponctuel (cession, Dutreil, IFI, démembrement)
- **RÉDACTION** — mémo notaire, clause bénéficiaire, brief avocat
- **CHIFFRAGE** — devis prospect via grille ICD

**Posture** : Joel = conseil, jamais client. Pas de CIF, pas de placement, pas de produit.

Version actuelle : **v1.1** (post-LF 2026, 18/04/2026).

---

## Installation

### Option 1 — Bouton Paperclip "Import skill" dans Claude Code (le plus simple)

Dans Claude Code, clique sur le **trombone (paperclip)** → **Import skill** → colle l'URL :

```
https://github.com/joelviglo/skill-ingenieur-patrimonial
```

Claude Code clone le repo et copie le contenu vers `~/.claude/skills/ingenieur-patrimonial/`. Le `SKILL.md` est à la racine du repo, donc l'import est direct.

### Option 2 — Via npx en ligne de commande (Terminal)

Dans **Terminal.app** / iTerm / Warp (PAS dans Claude Code) :

```bash
npx -y github:joelviglo/skill-ingenieur-patrimonial install
```

Le script copie automatiquement vers `~/.claude/skills/ingenieur-patrimonial/`.

#### Options du script

| Option | Effet |
|--------|-------|
| `--force` | Écrase la cible existante (⚠️ supprime `memoire/`) |
| `--dry-run` | Affiche ce qui serait fait sans rien copier |
| `--target=PATH` | Cible alternative (default : `~/.claude/skills/`) |

Variable d'environnement : `CLAUDE_SKILLS_DIR` pour redéfinir le dossier des skills.

#### Mise à jour

```bash
npx -y github:joelviglo/skill-ingenieur-patrimonial install --force
```

⚠️ `--force` supprime aussi le contenu de `memoire/` du skill installé. **Sauvegarde** d'abord les cas anonymisés que tu veux conserver.

#### Désinstallation

```bash
npx -y github:joelviglo/skill-ingenieur-patrimonial uninstall --keep-memoire
```

`--keep-memoire` sauvegarde le dossier `memoire/` dans `~/.claude-skill-ingenieur-patrimonial-memoire-backup-<timestamp>/` avant suppression.

### Option 3 — Clone manuel

```bash
git clone git@github.com:joelviglo/skill-ingenieur-patrimonial.git ~/dev/skill-ingenieur-patrimonial
cd ~/dev/skill-ingenieur-patrimonial
node bin/install.js
```

---

## Vérifier l'installation

```bash
ls -la ~/.claude/skills/ingenieur-patrimonial/
cat ~/.claude/skills/ingenieur-patrimonial/SKILL.md | head -30
```

Puis dans Claude Code, **redémarre** la session et le skill est automatiquement détecté. Pour tester :

> "J'ai RDV demain avec un dirigeant 58 ans qui veut céder sa SAS 4M€. Prépare le diagnostic."

Le skill doit demander quel mode (DIAGNOSTIC ou SIMULATION) avant de produire.

---

## Structure du skill (à la racine du repo)

```
skill-ingenieur-patrimonial/
├── SKILL.md                          # Point d'entrée (4 modes, posture, règles)
├── CHANGELOG.md                      # Versions
├── PROJET-CLAUDE-AI-INSTRUCTIONS.md  # Bascule web/mobile via Projet Claude.ai
├── references/                       # Refs légales + vigilance + cas-patterns + grille ICD
├── templates/                        # Mémo + simulations IFI/Dutreil/démembrement + chiffrage
├── memoire/                          # Cas anonymisés (vide au départ, .gitignore exclut cas-*.md)
└── tests/                            # 8 scénarios de régression
```

**Fichiers techniques (non copiés dans `~/.claude/skills/`)** :

```
├── README.md       # ce fichier
├── LICENSE         # propriétaire
├── package.json    # bin npx
├── bin/            # scripts install / uninstall
└── .gitignore
```

Quand l'install se fait via Paperclip ou via npx, ces fichiers techniques sont **filtrés** : seuls les fichiers du skill atterrissent dans `~/.claude/skills/ingenieur-patrimonial/`.

---

## Maintenance

- **Revue trimestrielle** : janvier, avril, juillet, octobre. Vérifier `references/references-legales.md`.
- **Synchro LF** : à chaque LF/LFR/LFSS. Mise à jour PASS, plafonds, dispositifs modifiés.
- **Tests de régression** : relancer les 8 scénarios de `tests/test-regression.md` après toute modification.

Voir le `CHANGELOG.md` pour l'historique des versions.

---

## Prérequis

- Node.js ≥ 18 (pour les scripts d'install/uninstall via npx)
- Claude Code installé (`~/.claude/skills/` accessible en écriture)
- Optionnel : `obsidian-cli` skill installé pour interagir avec le vault Obsidian de Joel

---

## Sécurité et confidentialité

- ✅ Repo **public** uniquement pour permettre l'installation via Paperclip / Claude Code (qui n'authentifient pas GitHub)
- ✅ Contenu **propriétaire LynkRise** — voir [LICENSE](./LICENSE) pour les restrictions
- ✅ **Aucune donnée client réelle** dans le repo
- ✅ **Grille tarifaire LynkRise hors repo** : reste dans le vault local privé de Joel
- ✅ `.gitignore` exclut tout cas mémorisé réel (`memoire/cas-*.md`)
- ✅ Si tu installes le skill, **ton** dossier `memoire/` reste local et n'est jamais poussé

### Pourquoi le repo est public

Paperclip et certains clients Claude Code n'envoient aucun token GitHub lors de l'import de skills (vérifié dans le code source : `server/src/services/github-fetch.ts` utilise un `fetch()` brut sans `Authorization`). Pour permettre l'import 1-clic, le repo doit donc être public.

La LICENSE propriétaire compense en interdisant explicitement toute réutilisation par un tiers. Le repo est **source-available** mais **pas open-source**.

**Si tu identifies une fuite de données dans un commit** : ouvre une issue privée immédiatement, et purge l'historique avec `git filter-repo`.

---

## Liens utiles

- Vault Obsidian LynkRise (privé, local) : `~/Library/CloudStorage/OneDrive-LynkRise/VaultObsidianJVI/Core_JVI/`
- Skill compagnon `assistant-controle-fiscal` (contrôles fiscaux) : non installé via ce repo
- Documentation Claude Code skills : https://docs.claude.com/

---

## Contact

Joel Viglo — jvigameplay99@gmail.com
LynkRise — Cabinet d'expertise comptable et de fiscalité

---

*Repo créé le 25 avril 2026. Version skill v1.1.*
