#!/usr/bin/env node
/**
 * Désinstalle le skill ingenieur-patrimonial.
 *
 * Supprime ~/.claude/skills/ingenieur-patrimonial/ après confirmation.
 *
 * Usage :
 *   npx github:joelviglo/skill-ingenieur-patrimonial uninstall
 *   node bin/uninstall.js
 *
 * Options :
 *   --yes       : pas de confirmation interactive
 *   --target=PATH : chemin cible alternatif
 *   --keep-memoire : préserve le dossier memoire/ (cas mémorisés)
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const readline = require('readline');

const SKILL_NAME = 'ingenieur-patrimonial';
const args = process.argv.slice(2);
const YES = args.includes('--yes');
const KEEP_MEMOIRE = args.includes('--keep-memoire');
const targetArg = args.find((a) => a.startsWith('--target='));

const SKILLS_DIR =
  (targetArg && targetArg.split('=')[1]) ||
  process.env.CLAUDE_SKILLS_DIR ||
  path.join(os.homedir(), '.claude', 'skills');

const TARGET_DIR = path.join(SKILLS_DIR, SKILL_NAME);
const MEMOIRE_DIR = path.join(TARGET_DIR, 'memoire');

function log(emoji, msg) {
  console.log(`${emoji}  ${msg}`);
}

async function confirm(question) {
  if (YES) return true;
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => {
    rl.question(`${question} (o/N) `, (ans) => {
      rl.close();
      resolve(/^(o|oui|y|yes)$/i.test(ans.trim()));
    });
  });
}

(async () => {
  console.log('');
  log('🗑 ', 'Désinstallation du skill ingenieur-patrimonial');
  log('🎯', `Cible : ${TARGET_DIR}`);
  console.log('');

  if (!fs.existsSync(TARGET_DIR)) {
    log('ℹ️ ', 'Rien à désinstaller (skill non installé à cet emplacement).');
    process.exit(0);
  }

  const hasMemoire = fs.existsSync(MEMOIRE_DIR);
  if (hasMemoire && !KEEP_MEMOIRE) {
    console.log('');
    log('⚠️ ', `Le dossier memoire/ contient potentiellement des cas mémorisés.`);
    log('   ', `Utilise --keep-memoire pour le préserver, ou continue pour TOUT supprimer.`);
    console.log('');
  }

  if (!(await confirm('Confirmer la désinstallation ?'))) {
    log('🚫', 'Désinstallation annulée.');
    process.exit(0);
  }

  if (KEEP_MEMOIRE && hasMemoire) {
    const backup = path.join(os.homedir(), `.claude-skill-${SKILL_NAME}-memoire-backup-${Date.now()}`);
    log('💾', `Sauvegarde de memoire/ vers ${backup}`);
    fs.cpSync(MEMOIRE_DIR, backup, { recursive: true });
  }

  fs.rmSync(TARGET_DIR, { recursive: true, force: true });
  log('✅', 'Skill désinstallé.');
  console.log('');
})();
