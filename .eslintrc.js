/*
 * @Date: 2023-05-07 22:13:44
 * @LastEditors: Carlos 2899952565@qq.com
 * @LastEditTime: 2023-08-05 09:24:48
 * @FilePath: /vue2-base-template/.eslintrc.js
 * @description:
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/multi-word-component-names": "off",
  },
};
