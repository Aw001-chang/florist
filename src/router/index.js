import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "",
        name: "homeIndex",
        component: () => import("../views/HomeIndex.vue")
      },
      {
        path: "course",
        name: "course",
        component: () => import("../views/Course.vue")
      },
      {
        path: "goods",
        name: "goods",
        component: () => import("../views/Goods.vue")
      },
      {
        path: "wedding",
        name: "wedding",
        component: () => import("../views/Wedding.vue")
      },
      {
        path: "customerorders",
        name: "customerorders",
        component: () => import("../views/CustomerOrders.vue")
      },
      {
        path: "customerinformation",
        name: "customerinformation",
        component: () => import("../views/CustomerInformation.vue")
      },
      {
        path: "checkout/:orderId",
        name: "checkout",
        component: () => import("../views/CustomerCheckout.vue")
      }
    ]
  },
  // ------------以下後台
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
    // meta: { requiresAuth: true },
  },
  {
    path: "/admin",
    name: "dashboard",
    component: () => import("../views/Dashboard.vue"),
    children: [
      {
        path: "products",
        name: "products",
        component: () => import("../views/Products.vue"),
        meta: { requiresAuth: true }
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
