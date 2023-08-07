/*
 * @Date: 2023-01-30 13:47:38
 * @LastEditors: lipengxi 2899952565@qq.com
 * @LastEditTime: 2023-01-30 21:56:06
 * @FilePath: /vue2-base-template/src/api/uploadFile.js
 * @description:
 */
import Api from "./request";

export const api1 = (data) =>
  Api.post("/api1", data, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
