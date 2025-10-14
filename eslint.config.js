import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import unused from 'eslint-plugin-unused-imports';

export default tseslint.config(
  { ignores: ['dist/**', 'build/**', 'node_modules/**', '**/*.config.*', '.husky/**'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: { import: importPlugin, 'unused-imports': unused },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: { ecmaVersion: 2022, sourceType: 'module', project: false },
    },
    rules: {
      'unused-imports/no-unused-imports': 'warn',
      'import/order': ['warn', { 'newlines-between': 'always' }],
    },
  }
);
