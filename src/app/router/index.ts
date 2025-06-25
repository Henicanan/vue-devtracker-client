import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { authGuard } from "./guards/authGuard";
import { authRoutes } from "./routes/authRoutes";

const routes: RouteRecordRaw[] = [
  ...authRoutes,
  {
    path: "/home",
    name: "home",
    component: () => import("@/shared/ui/layouts/DefaultLayout.vue"),
    meta: { requiresAuth: true, title: "Home" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  document.title = `${to.meta.title || "Henicanan"} - HeniTracker`;
});

router.beforeEach(authGuard);

export default router;
