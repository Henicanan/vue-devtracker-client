import type { NavigationGuardWithThis } from "vue-router";
import { useAuthCheck } from "@/shared/lib/auth/useAuthCheck";

export const authGuard: NavigationGuardWithThis<undefined> = async (to) => {
  document.title = `${to.meta.title || "Henicanan"} - HeniTracker`;

  const isAuthenticated = await useAuthCheck();
  const isAuthPage = ["login", "register", "forgot-password"].includes(
    to.name as string
  );

  if (to.meta.requiresAuth && !isAuthenticated) {
    return { name: "login" };
  }

  if (isAuthPage && isAuthenticated) {
    return { name: "home" };
  }
  return true;
};
