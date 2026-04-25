#!/usr/bin/env node
/**
 * CLI principal du skill ingenieur-patrimonial.
 *
 * Usage :
 *   npx github:joelviglo/skill-ingenieur-patrimonial install [options]
 *   npx github:joelviglo/skill-ingenieur-patrimonial uninstall [options]
 *
 * Routes vers bin/install.js ou bin/uninstall.js selon le premier argument.
 */

const path = require('path');
const { spawn } = require('child_process');

const args = process.argv.slice(2);
const subCmd = args[0];
const rest = args.slice(1);

const HELP = `
Skill ingenieur-patrimonial — installateur

Usage :
  npx github:joelviglo/skill-ingenieur-patrimonial <command> [options]

Commandes :
  install      Installe le skill dans ~/.claude/skills/ingenieur-patrimonial/
  uninstall    Désinstalle le skill
  --help, -h   Affiche cette aide

Options install :
  --force            Écrase la cible existante
  --dry-run          N'exécute rien, montre seulement les actions
  --target=PATH      Cible alternative (défaut : ~/.claude/skills/)

Options uninstall :
  --yes              Pas de confirmation interactive
  --keep-memoire     Sauvegarde memoire/ avant suppression
  --target=PATH      Cible alternative

Variables d'environnement :
  CLAUDE_SKILLS_DIR  Redéfinit le dossier des skills (au lieu de ~/.claude/skills)

Exemples :
  npx github:joelviglo/skill-ingenieur-patrimonial install
  npx github:joelviglo/skill-ingenieur-patrimonial install --dry-run
  npx github:joelviglo/skill-ingenieur-patrimonial install --force
  npx github:joelviglo/skill-ingenieur-patrimonial uninstall --keep-memoire
`;

if (!subCmd || subCmd === '--help' || subCmd === '-h' || subCmd === 'help') {
  console.log(HELP);
  process.exit(0);
}

const scripts = {
  install: path.join(__dirname, 'install.js'),
  uninstall: path.join(__dirname, 'uninstall.js'),
};

const target = scripts[subCmd];
if (!target) {
  console.error(`❌  Commande inconnue : "${subCmd}"`);
  console.error(`   Commandes valides : install, uninstall, help`);
  console.error(`   Aide : npx github:joelviglo/skill-ingenieur-patrimonial --help`);
  process.exit(1);
}

const child = spawn('node', [target, ...rest], { stdio: 'inherit' });
child.on('exit', (code) => process.exit(code ?? 0));
