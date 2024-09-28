module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'vue/no-use-v-if-with-v-for': 'off',
    'no-plusplus': 1,
    semi: 'off',
    'max-len': 'off',
    'linebreak-style': 'off',
    camelcase: ['error', { properties: 'never', ignoreDestructuring: true, ignoreImports: true }],
    'arrow-parens': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    'vue/no-unused-components': 1,
    'vue/attribute-hyphenation': 'off',
    'vue/html-self-closing': 'off',
    'no-param-reassign': 0,
    'vue/no-template-shadow': 'off',
    'vue/multi-word-component-names': 'off',
  },
};
