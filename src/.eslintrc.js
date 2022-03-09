module.exports = {
  root: true,
  "parser": "vue-eslint-parser",
  parserOptions: {
	"parser": "@typescript-eslint/parser",
    "sourceType": "module",
	ecmaVersion: 6
  },
  rules: {
    camelcase: 'off',
    'implicit-arrow-linebreak': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'class-methods-use-this': 'off',
"no-param-reassign": [2, { "props": false }],
  },
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};