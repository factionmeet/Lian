import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@views/Home.vue";
import LogisticsHome from "@views/home/LogisticsHome.vue";
import PlanterHome from "@views/home/PlanterHome.vue";
import ProcessHome from "@views/home/ProcessHome.vue";
import SaleHome from "@views/home/SaleHome.vue";
import UserHome from "@views/home/UserHome.vue";

const routes = [
  { path: "/", redirect: "/login" /*+localStorage.getItem("userFlag") */ }, // 重定向
  {
    path: "/planterHome",
    name: "PlanterHome",
    component: PlanterHome,
    children: [
      {
        path: "/dashboard1",
        name: "dashboard1",
        meta: { title: "种植商首页" },
        component: () => import("@views/Dashboard.vue"),
      },
      {
        path: "/planter",
        name: "planter",
        meta: { title: "种植商页面" },
        component: () => import("@views/tables/planter.vue"),
      },
      {
        path: "/passwordChange1",
        name: "passwordChange1",
        meta: { title: "密码修改页面" },
        component: () => import("@views/tables/passwordChange.vue"),
      },

      {
        path: "/tabs",
        name: "tabs",
        meta: { title: "tab标签" },
        component: () => import("@views/Tabs.vue"),
      },
      {
        path: "/permission",
        name: "permission",
        meta: { title: "权限管理", permission: true },
        component: () => import("@views/Permission.vue"),
      },
      {
        path: "/404",
        name: "404",
        meta: { title: "找不到页面" },
        component: () => import("@views/404.vue"),
      },
      {
        path: "/403",
        name: "403",
        meta: { title: "没有权限" },
        component: () => import("@views/403.vue"),
      },
      {
        path: "/test",
        name: "test",
        meta: { title: "测试页面" },
        component: () => import("@views/Test.vue"),
      },
    ],
  },
  {
    path: "/processHome",
    name: "ProcessHome",
    component: ProcessHome,
    children: [
      {
        path: "/dashboard2",
        name: "dashboard2",
        meta: { title: "加工商首页" },
        component: () => import("@views/Dashboard.vue"),
      },
      {
        path: "/process",
        name: "process",
        meta: { title: "加工商页面" },
        component: () => import("@views/tables/process.vue"),
      },
      {
        path: "/passwordChange2",
        name: "passwordChange2",
        meta: { title: "密码修改页面" },
        component: () => import("@views/tables/passwordChange.vue"),
      },
      {
        path: "/tabs",
        name: "tabs",
        meta: { title: "tab标签" },
        component: () => import("@views/Tabs.vue"),
      },
      {
        path: "/permission",
        name: "permission",
        meta: { title: "权限管理", permission: true },
        component: () => import("@views/Permission.vue"),
      },
      {
        path: "/404",
        name: "404",
        meta: { title: "找不到页面" },
        component: () => import("@views/404.vue"),
      },
      {
        path: "/403",
        name: "403",
        meta: { title: "没有权限" },
        component: () => import("@views/403.vue"),
      },
      {
        path: "/test",
        name: "test",
        meta: { title: "测试页面" },
        component: () => import("@views/Test.vue"),
      },
    ],
  },
  {
    path: "/logisticsHome",
    name: "LogisticsHome",
    component: LogisticsHome,
    children: [
      {
        path: "/dashboard3",
        name: "dashboard3",
        meta: { title: "储运商首页" },
        component: () => import("@views/Dashboard.vue"),
      },
      {
        path: "/logistics",
        name: "logistics",
        meta: { title: "储运商页面" },
        component: () => import("@views/tables/logistics.vue"),
      },
      {
        path: "/passwordChange3",
        name: "passwordChange3",
        meta: { title: "密码修改页面" },
        component: () => import("@views/tables/passwordChange.vue"),
      },
      {
        path: "/tabs",
        name: "tabs",
        meta: { title: "tab标签" },
        component: () => import("@views/Tabs.vue"),
      },
      {
        path: "/permission",
        name: "permission",
        meta: { title: "权限管理", permission: true },
        component: () => import("@views/Permission.vue"),
      },
      {
        path: "/404",
        name: "404",
        meta: { title: "找不到页面" },
        component: () => import("@views/404.vue"),
      },
      {
        path: "/403",
        name: "403",
        meta: { title: "没有权限" },
        component: () => import("@views/403.vue"),
      },
      {
        path: "/test",
        name: "test",
        meta: { title: "测试页面" },
        component: () => import("@views/Test.vue"),
      },
    ],
  },
  {
    path: "/saleHome",
    name: "saleHome",
    component: SaleHome,
    children: [
      {
        path: "/dashboard4",
        name: "dashboard4",
        meta: { title: "销售商首页" },
        component: () => import("@views/Dashboard.vue"),
      },
      {
        path: "/sale",
        name: "sale",
        meta: { title: "销售商页面" },
        component: () => import("@views/tables/sale.vue"),
      },
      {
        path: "/passwordChange4",
        name: "passwordChange4",
        meta: { title: "密码修改页面" },
        component: () => import("@views/tables/passwordChange.vue"),
      },
      {
        path: "/tabs",
        name: "tabs",
        meta: { title: "tab标签" },
        component: () => import("@views/Tabs.vue"),
      },
      {
        path: "/permission",
        name: "permission",
        meta: { title: "权限管理", permission: true },
        component: () => import("@views/Permission.vue"),
      },
      {
        path: "/404",
        name: "404",
        meta: { title: "找不到页面" },
        component: () => import("@views/404.vue"),
      },
      {
        path: "/403",
        name: "403",
        meta: { title: "没有权限" },
        component: () => import("@views/403.vue"),
      },
      {
        path: "/test",
        name: "test",
        meta: { title: "测试页面" },
        component: () => import("@views/Test.vue"),
      },
    ],
  },
  {
    path: "/dataScreen",
    name: "dataScreen",
    meta: { title: "数据大屏展示" },
    component: () => import("@views/dataScreen/index.vue"),
  },
  {
    path: "/userHome",
    name: "userHome",
    component: UserHome,
    children: [
      {
        path: "/dashboard5",
        name: "dashboard5",
        meta: { title: "管理员首页" },
        component: () => import("@views/Dashboard.vue"),
      },
      {
        path: "/planterUser",
        name: "planterUser",
        meta: { title: "种植商" },
        component: () => import("@views/tables/planterUser.vue"),
      },
      {
        path: "/processUser",
        name: "processUser",
        meta: { title: "加工商" },
        component: () => import("@views/tables/processUser.vue"),
      },
      {
        path: "/logisticsUser",
        name: "logisticsUser",
        meta: { title: "储运商" },
        component: () => import("@views/tables/logisticsUser.vue"),
      },
      {
        path: "/saleUser",
        name: "saleUser",
        meta: { title: "销售商" },
        component: () => import("@views/tables/saleUser.vue"),
      },
      {
        path: "/passwordChange5",
        name: "passwordChange5",
        meta: { title: "密码修改页面" },
        component: () => import("@views/tables/passwordChange.vue"),
      },
      {
        path: "/tracePage",
        name: "tracePage",
        meta: { title: "产品溯源" },
        component: () => import("@views/tables/tracePage.vue"),
      },
      {
        path: "/tabs",
        name: "tabs",
        meta: { title: "tab标签" },
        component: () => import("@views/Tabs.vue"),
      },
      {
        path: "/permission",
        name: "permission",
        meta: { title: "权限管理", permission: true },
        component: () => import("@views/Permission.vue"),
      },
      {
        path: "/404",
        name: "404",
        meta: { title: "找不到页面" },
        component: () => import("@views/404.vue"),
      },
      {
        path: "/403",
        name: "403",
        meta: { title: "没有权限" },
        component: () => import("@views/403.vue"),
      },
      {
        path: "/test",
        name: "test",
        meta: { title: "测试页面" },
        component: () => import("@views/Test.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    meta: { title: "登录" },
    component: () => import("@views/Login.vue"),
  },
  {
    path: "/trace",
    name: "trace",
    meta: { title: "产品溯源" },
    component: () => import("@views/tables/trace.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//     document.title = `${to.meta.title} | ${TITLE}`;
//     const role = localStorage.getItem('ms_username');
//     const token = localStorage.getItem('token');
// if(token != undefined && token != null && token == "true"){
//     next();
// }
// console.log(token)
// if(token){
//     next('/login')
// }
// next('/login');
// next();
// if (!role && to.path !== '/login') {
//     next('/login');
// } else if (to.meta.permission) {
//     // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
//     role === 'admin'
//         ? next()
//         : next('/403');
// } else {
//     next();
// }
// });

export default router;
