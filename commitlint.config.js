// ~/dev/commitlint.config.js
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'header-max-length': [2, 'always', 100],
      'subject-case': [0], // 이모지 허용
      'type-enum': [
        2,
        'always',
        [
          'init',
          'feat',
          'fix',
          'docs',
          'style',
          'refactor',
          'perf',
          'test',
          'build',
          'ci',
          'chore',
          'deps',
          'revert',
          'merge',
          'release',
          'config',
          'security',
          'assets',
          'db',
          'i18n',
          'ux',
          'hotfix',
          'logging',
          'cleanup'
        ]
      ]
    }
  };
  