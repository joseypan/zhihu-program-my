import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../views/Login.vue"),
  },
  {
    path: "/column/:id",
    name: "Column",
    component: () =>
      import("../views/ColumnDetail.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
