/*
 * @Descripttion:
 * @Author: lx
 * @Date: 2022-01-18 17:45:41
 * @LastEditTime: 2023-08-04 22:46:41
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/download",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/api-test",
    name: "ApiTest",
    component: () => import("../views/ApiTest/index.vue"),
  },
  {
    path: "/download",
    name: "download",
    component: () => import("../views/Download/index.vue"),
  },
  {
    path: "/tree",
    name: "Tree",
    component: () => import("../views/Tree/index.vue"),
  },
  {
    path: "/goods",
    name: "goods",
    component: () => import("../views/goods"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
