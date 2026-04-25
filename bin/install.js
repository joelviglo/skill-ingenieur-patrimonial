#!/usr/bin/env node
/**
 * Installer pour le skill ingenieur-patrimonial.
 *
 * Copie le contenu de `./skill/` vers `~/.claude/skills/ingenieur-patrimonial/`
 * (ou un chemin personnalisé via la variable d'environnement CLAUDE_SKILLS_DIR).
 *
 * Usage :
 *   npx github:joelviglo/skill-ingenieur-patrimonial install
 *   ou
 *   node bin/install.js
 *
 * Options :
 *   --force    : écrase la cible existante (sinon : refus si la cible existe)
 *   --dry-run  : affiche ce qui serait fait sans rien copier
 *   --target=PATH : chemin cible alternatif
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

const SOURCE_DIR = path.resolve(__dirname, '..', 'skill');
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
  err(`Dossier source introuvable : ${SOURCE_DIR}`);
}

if (fs.existsSync(TARGET_DIR)) {
  if (!FORCE) {
    err(
      `Cible déjà présente : ${TARGET_DIR}\n` +
        `   → utilise --force pour écraser, ou --target=PATH pour une cible alternative.\n` +
        `   ⚠️  Avec --force, le contenu de skill/memoire/ existant sera SUPPRIMÉ.\n` +
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
console.log(`     npx github:joelviglo/skill-ingenieur-patrimonial install --force`);
console.log('');
