module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'space-before-function-paren': ['error', 'never'],
    'vue/html-self-closing': ['error', 'any'],
    'eol-last': ["error", "always"]
  }
}
