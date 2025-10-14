import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import unused from 'eslint-plugin-unused-imports';

export default tseslint.config(
  { ignores: ['dist/**', 'build/**', 'node_modules/**', '**/*.config.*', '.husky/**'] },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { import: importPlugin, 'unused-imports': unused },
    extends: [...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: process.cwd(),
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    rules: {
      'unused-imports/no-unused-imports': 'warn',
      'import/order': ['warn', { 'newlines-between': 'always' }],
    },
  }
);
