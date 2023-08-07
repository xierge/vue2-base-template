/*
 * @Descripttion:
 * @Author: lx
 * @Date: 2022-01-18 17:45:41
 * @LastEditTime: 2023-01-30 22:53:13
 */
import Axios from "axios";
// import { Message } from "element-ui";

const Api = Axios.create({
  baseURL: "/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 配置请求头的类型以及token
Api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
Api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Api;

// export default function ajax(url, data = {}, method = "GET", config) {
//   return new Promise((resolve) => {
//     let promise;
//     if (method === "GET") {
//       promise = Api.get(url, { params: data });
//     } else if (method === "POST") {
//       promise = Api.post(url, data, config);
//     } else if (method === "DELETE") {
//       promise = Api.delete(url + "/" + data.id);
//     } else if (method === "PUT") {
//       promise = Api.put(url + "/" + data.id, data);
//     }
//     promise
//       .then((response) => {
//         resolve(response.data);
//       })
//       .catch((error) => {
//         Message.error("请求错误" + error);
//       });
//   });
// }
