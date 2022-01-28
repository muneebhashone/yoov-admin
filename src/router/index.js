import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Blogs from "../views/Blogs.vue";
import BlogForm from "../views/BlogForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
  },
  {
    path: "/blog/form",
    name: "BlogForm",
    component: BlogForm,
  },
  {
    path: "*",
    redirect: { name: "Login" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
