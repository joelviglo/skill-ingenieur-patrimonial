#!/usr/bin/env node
/**
 * Installer pour le skill ingenieur-patrimonial (format plugin Cowork).
 *
 * Copie le contenu de `skills/ingenieur-patrimonial/` vers
 * `~/.claude/skills/ingenieur-patrimonial/` (ou un chemin personnalisé).
 *
 * Usage :
 *   npx -y github:joelviglo/skill-ingenieur-patrimonial install
 *   ou
 *   node bin/install.js
 *
 * Options :
 *   --force        : écrase la cible existante
 *   --dry-run      : affiche ce qui serait fait sans rien copier
 *   --target=PATH  : chemin cible alternatif
 *
 * Note : ce script sert pour l'install via npx/CLI. Pour Cowork, l'import
 * se fait via l'UI "Customize" qui charge directement le plugin.json à la
 * racine du repo (aucune intervention de ce script). Pour Claude Code, on
 * peut aussi passer par `claude plugin install` qui lit le plugin.json.
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILL_NAME = 'ingenieur-patrimonial';
const args = process.argv.slice(2);
const FORCE = args.includes('--force');
const DRY_RUN = args.includes('--dry-run');
const targetArg = args.find((a) => a.startsWith('--target='));

const SKILLS_DIR =
  (targetArg && targetArg.split('=')[1]) ||
  process.env.CLAUDE_SKILLS_DIR ||
  path.join(os.homedir(), '.claude', 'skills');

// Le contenu du skill vit dans skills/ingenieur-patrimonial/ pour respecter
// le format plugin Cowork. Pour npx install, on copie ce sous-dossier.
const REPO_ROOT = path.resolve(__dirname, '..');
const SOURCE_DIR = path.join(REPO_ROOT, 'skills', SKILL_NAME);
const TARGET_DIR = path.join(SKILLS_DIR, SKILL_NAME);

function log(emoji, msg) {
  console.log(`${emoji}  ${msg}`);
}

function err(msg) {
  console.error(`❌  ${msg}`);
  process.exit(1);
}

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!DRY_RUN) fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    if (!DRY_RUN) fs.copyFileSync(src, dest);
    log('  ↳', `${path.relative(SOURCE_DIR, src)}`);
  }
}

function rmRecursive(p) {
  if (!fs.existsSync(p)) return;
  if (DRY_RUN) {
    log('🗑 ', `(dry-run) suppression de ${p}`);
    return;
  }
  fs.rmSync(p, { recursive: true, force: true });
}

console.log('');
log('🧰', 'Installation du skill ingenieur-patrimonial');
log('📂', `Source : ${SOURCE_DIR}`);
log('🎯', `Cible  : ${TARGET_DIR}`);
if (DRY_RUN) log('🔍', 'Mode DRY-RUN : aucun fichier ne sera modifié');
console.log('');

if (!fs.existsSync(SOURCE_DIR)) {
  err(`Dossier source introuvable : ${SOURCE_DIR}\n   → Le repo doit avoir la structure plugin Cowork (skills/${SKILL_NAME}/).`);
}

if (!fs.existsSync(path.join(SOURCE_DIR, 'SKILL.md'))) {
  err(
    `SKILL.md introuvable dans ${SOURCE_DIR}.\n` +
      `   → Vérifie l'intégrité du clone du repo.`
  );
}

if (fs.existsSync(TARGET_DIR)) {
  if (!FORCE) {
    err(
      `Cible déjà présente : ${TARGET_DIR}\n` +
        `   → utilise --force pour écraser, ou --target=PATH pour une cible alternative.\n` +
        `   ⚠️  Avec --force, le contenu de memoire/ existant sera SUPPRIMÉ.\n` +
        `      Si tu as des cas mémorisés à préserver, sauvegarde-les d'abord.`
    );
  }
  log('🗑 ', `Suppression de la cible existante (--force)…`);
  rmRecursive(TARGET_DIR);
}

log('📁', 'Création de la cible et copie des fichiers…');
copyRecursive(SOURCE_DIR, TARGET_DIR);

console.log('');
log('✅', 'Installation terminée.');
log('📌', `Skill installé dans : ${TARGET_DIR}`);
console.log('');
log('💡', 'Vérifie l\'installation :');
console.log(`     ls "${TARGET_DIR}"`);
console.log('');
log('🔄', 'Pour mettre à jour à une nouvelle version :');
console.log(`     npx -y github:joelviglo/skill-ingenieur-patrimonial install --force`);
console.log('');
