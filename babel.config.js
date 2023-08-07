/*
 * @Date: 2022-09-07 14:27:48
 * @LastEditors: lipengxi 2899952565@qq.com
 * @LastEditTime: 2023-01-30 23:11:04
 * @FilePath: /xierge/babel.config.js
 * @description:
 */
module.exports = {
  presets: [["@vue/cli-plugin-babel/preset", { modules: false }]],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
};
