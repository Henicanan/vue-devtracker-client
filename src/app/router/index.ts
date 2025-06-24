import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import { authRoutes } from "./routes/authRoutes";

const routes: RouteRecordRaw[] = [
  ...authRoutes,
  {
    path: "/home",
    name: "home",
    component: () => import("@/shared/ui/layouts/DefaultLayout.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, _) => {
  document.title = `${to.meta.title || "Henicanan"} - HeniTracker`;
});

export default router;
