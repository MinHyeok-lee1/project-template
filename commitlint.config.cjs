module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      // ✅ headerPattern: 이모지(선택) + type + (scope) + subject 구조 허용
      headerPattern: /^(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)?\s?(\w*)(?:\((.*)\))?!?:\s?(.*)$/u,
      headerCorrespondence: ['emoji', 'type', 'scope', 'subject'],
    },
  },
  rules: {
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
        'cleanup',
      ],
    ],
    'subject-case': [0, 'never'], // ✅ subject-case: 대문자/소문자 모두 허용
    'body-max-line-length': [0, 'always'], // ✅ body 길이 제한 해제
  },
};
