import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../components/Layout.vue";
import Login from "../views/Login.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "",
    component: Layout,
    children: [
      {
        path: "/",
        name: "Login",
        component: Login,
      },
      {
        path: "/about",
        name: "About",
        component: About,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
