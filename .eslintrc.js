module.exports = {
  root: true,
  env: {
    node: true, //
  },
  // 继承vue3的官方规则和eslint的官方规则
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser", // 使用babel-eslint来解析js
  },
};
