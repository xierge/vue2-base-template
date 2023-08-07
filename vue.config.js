/*
 * @Date: 2023-01-30 22:27:15
 * @LastEditors: Carlos 2899952565@qq.com
 * @LastEditTime: 2023-08-04 22:30:57
 * @FilePath: /vue2-base-template/vue.config.js
 * @description:
 */
const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/",
  devServer: {
    port: 80,
    open: true,
  },
  configureWebpack: {
    devtool: "source-map",
  },
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     //set第一个参数：设置的别名，第二个参数：设置的路径
  //     .set("@", "./src");
  // },

  // resolve: {
  //   extensions: [".js", ".vue", ".json"],
  //   alias: [
  //     {
  //       find: "@",
  //       replacement: path.resolve(__dirname, "src"),
  //     },
  //   ],
  // },
});
