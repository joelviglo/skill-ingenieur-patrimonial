# ingenieur-patrimonial

> **Plugin Claude (Cowork + Code) — source-available, propriétaire LynkRise.**
> Repo public uniquement pour permettre l'installation depuis Claude Cowork, Claude Code et clients tiers compatibles. **Toute reproduction, copie ou utilisation par un tiers est interdite** — voir [LICENSE](./LICENSE). La grille tarifaire LynkRise et les données client ne figurent PAS dans ce dépôt.

---

## C'est quoi ?

Plugin Claude qui assiste Joel Viglo (expert-comptable fiscaliste, cabinet LynkRise) dans les missions d'ingénierie patrimoniale auprès de chefs d'entreprise et investisseurs.

Le plugin contient **un skill** (`ingenieur-patrimonial`) avec **4 modes** :
- **DIAGNOSTIC** — analyse complète d'une situation client → rapport structuré
- **SIMULATION** — chiffrage ponctuel (cession, Dutreil, IFI, démembrement)
- **RÉDACTION** — mémo notaire, clause bénéficiaire, brief avocat
- **CHIFFRAGE** — devis prospect via grille ICD (grille gardée en local, hors repo)

**Posture** : Joel = conseil, jamais client. Pas de CIF, pas de placement, pas de produit.

Version actuelle : **v1.1** (post-LF 2026, mise à jour mai 2026).

---

## Installation

### Option 1 — Claude Cowork (UI graphique)

1. Ouvre l'application Claude Desktop, onglet **Cowork**
2. Sidebar gauche → **Customize**
3. Section **Plugins** → **Add plugin** (ou "Browse plugins" → "Import from GitHub")
4. Colle l'URL :

   ```
   https://github.com/joelviglo/skill-ingenieur-patrimonial
   ```

5. Confirme. Le plugin est chargé. Le skill `ingenieur-patrimonial` apparaît dans tes skills disponibles.

### Option 2 — Claude Code (CLI marketplace)

```bash
claude plugin marketplace add joelviglo/skill-ingenieur-patrimonial
claude plugin install ingenieur-patrimonial@skill-ingenieur-patrimonial
```

### Option 3 — npx (installation directe dans ~/.claude/skills/)

Pour avoir le skill dans `~/.claude/skills/ingenieur-patrimonial/` directement (utilisable par Claude Code sans passer par le marketplace) :

```bash
npx -y github:joelviglo/skill-ingenieur-patrimonial install
```

#### Options du script

| Option | Effet |
|--------|-------|
| `--force` | Écrase la cible existante (⚠️ supprime `memoire/`) |
| `--dry-run` | Affiche ce qui serait fait sans rien copier |
| `--target=PATH` | Cible alternative (défaut : `~/.claude/skills/`) |

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

### Option 4 — Clone manuel

```bash
git clone https://github.com/joelviglo/skill-ingenieur-patrimonial.git ~/dev/skill-ingenieur-patrimonial
cd ~/dev/skill-ingenieur-patrimonial
node bin/install.js
```

---

## Vérifier l'installation

```bash
ls -la ~/.claude/skills/ingenieur-patrimonial/
cat ~/.claude/skills/ingenieur-patrimonial/SKILL.md | head -30
```

Puis dans Claude Code / Cowork, **redémarre** la session et le skill est automatiquement détecté. Pour tester :

> "J'ai RDV demain avec un dirigeant 58 ans qui veut céder sa SAS 4M€. Prépare le diagnostic."

Le skill doit demander quel mode (DIAGNOSTIC ou SIMULATION) avant de produire.

---

## Structure du plugin

```
skill-ingenieur-patrimonial/                  # ← racine du plugin
├── .claude-plugin/
│   └── plugin.json                           # Manifest plugin (nom, version, auteur)
├── skills/
│   └── ingenieur-patrimonial/                # ← le skill lui-même
│       ├── SKILL.md                          # Point d'entrée (4 modes, posture, règles)
│       ├── CHANGELOG.md                      # Versions
│       ├── PROJET-CLAUDE-AI-INSTRUCTIONS.md  # Bascule web/mobile via Projet Claude.ai
│       ├── references/                       # Refs légales + vigilance + cas-patterns + fiches-map
│       ├── templates/                        # Mémo + simulations IFI/Dutreil/démembrement + chiffrage
│       ├── memoire/                          # Cas anonymisés (vide, `.gitignore` exclut cas-*.md)
│       └── tests/                            # 8 scénarios de régression
├── README.md
├── LICENSE
├── package.json
├── bin/                                      # Scripts install / uninstall
└── .gitignore
```

Conforme au format [plugin Cowork officiel d'Anthropic](https://github.com/anthropics/knowledge-work-plugins) (manifest à `.claude-plugin/plugin.json`, skills sous `skills/<skill-name>/SKILL.md`).

---

## Maintenance

- **Revue trimestrielle** : janvier, avril, juillet, octobre. Vérifier `skills/ingenieur-patrimonial/references/references-legales.md`.
- **Synchro LF** : à chaque LF/LFR/LFSS. Mise à jour PASS, plafonds, dispositifs modifiés.
- **Tests de régression** : relancer les 8 scénarios de `skills/ingenieur-patrimonial/tests/test-regression.md` après toute modification.

Voir le `skills/ingenieur-patrimonial/CHANGELOG.md` pour l'historique des versions.

---

## Prérequis

- **Cowork** : Claude Desktop avec onglet Cowork activé
- **Code** : Claude Code CLI installé
- **npx** : Node.js ≥ 18 (pour les scripts d'install/uninstall)
- Optionnel : `obsidian-cli` skill installé pour interagir avec le vault Obsidian de Joel

---

## Sécurité et confidentialité

- ✅ Repo **public** uniquement pour permettre l'installation via Cowork / Code / Paperclip (qui n'authentifient pas GitHub)
- ✅ Contenu **propriétaire LynkRise** — voir [LICENSE](./LICENSE) pour les restrictions
- ✅ **Aucune donnée client réelle** dans le repo
- ✅ **Grille tarifaire LynkRise hors repo** : reste dans le vault local privé de Joel
- ✅ `.gitignore` exclut tout cas mémorisé réel (`skills/ingenieur-patrimonial/memoire/cas-*.md`)
- ✅ Si tu installes le skill, **ton** dossier `memoire/` reste local et n'est jamais poussé

### Pourquoi le repo est public

Claude Cowork, Claude Code et Paperclip n'envoient aucun token GitHub lors de l'import de skills/plugins. Pour permettre l'import 1-clic, le repo doit donc être public. La LICENSE propriétaire compense en interdisant explicitement toute réutilisation par un tiers. Le repo est **source-available** mais **pas open-source**.

**Si tu identifies une fuite de données dans un commit** : ouvre une issue privée immédiatement, et purge l'historique avec `git filter-repo`.

---

## Contact

Joel Viglo — jvigameplay99@gmail.com
LynkRise — Cabinet d'expertise comptable et de fiscalité

---

*Repo créé en avril 2026. Restructuré en plugin Cowork le 12 mai 2026.*
