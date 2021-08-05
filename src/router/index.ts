import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";

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
    path: "/register",
    name: "Register",
    component: () =>
      import("../views/Register.vue"),
  },
  {
    path: "/createPoem",
    name: "CreatePoem",
    component: () =>
      import("../views/CreatePoem.vue"),
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
