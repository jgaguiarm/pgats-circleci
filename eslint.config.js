const jest = require('eslint-plugin-jest');
const playwright = require('eslint-plugin-playwright');

module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    }
  },

  {
    files: ['tests/**/*.js'],
    plugins: {
      jest
    },
    rules: {
      ...jest.configs.recommended.rules
    }
  },

  {
    files: ['playwright/**/*.js'],
    plugins: {
      playwright
    },
    rules: {
      ...playwright.configs.recommended.rules
    }
  }
];