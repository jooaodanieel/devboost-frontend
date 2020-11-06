import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NewOpportunities from "../views/NewOpportunities.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/opportunities/new",
    name: "new_opportunities",

    component: NewOpportunities
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
