/*
 * @Descripttion:
 * @Author: lx
 * @Date: 2022-01-18 18:19:25
 * @LastEditTime: 2022-05-26 00:49:04
 */
import request from "./request";

export const getData = (data) => request("/role", data);
