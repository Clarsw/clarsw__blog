import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    path: "*",
    redirect: "/Home"
  },
  {
    path: "/home",
    name: "Home",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/skill",
    name: "Skill",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/Skill.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;