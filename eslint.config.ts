import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';
import unusedImports from 'eslint-plugin-unused-imports';

export default defineConfig([
  js.configs.recommended,

  ...tseslint.configs.recommended,

  configPrettier,

  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      prettier: pluginPrettier,
      'unused-imports': unusedImports,
    },
    rules: {
      // React
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/no-unescaped-entities': 'off',

      // TS
      '@typescript-eslint/no-explicit-any': 'off',

      // Prettier
      // 👇 change this
      'prettier/prettier': 'warn',

      // Unused imports
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
]);
