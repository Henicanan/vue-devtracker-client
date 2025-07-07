import type { NavigationGuardWithThis } from "vue-router";
import { useAuthCheck } from "@/shared/lib/auth/useAuthCheck";
import type { User } from "@/entities/user/model/types";
import { reactive } from "vue";

export const authState = reactive<{ user: User | null }>({ user: null });

export const authGuard: NavigationGuardWithThis<undefined> = async (to) => {
  const { isAuthenticated, user } = await useAuthCheck();

  if (isAuthenticated && user) {
    authState.user = user;
  } else {
    authState.user = null;
  }

  const isAuthPage = ["login", "register", "forgot-password"].includes(
    to.name as string
  );

  if (to.meta.requiresAuth && !isAuthenticated) {
    return { name: "login" };
  }

  if (isAuthPage && isAuthenticated) {
    return { name: "home" };
  }

  if (
    to.meta.roles &&
    (!user || !(to.meta.roles as string).includes(user.role))
  ) {
    return { name: "home" };
  }

  return true;
};
