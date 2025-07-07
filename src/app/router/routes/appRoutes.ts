import type { RouteRecordRaw } from "vue-router";
import { UserRole } from "@/shared/config/user/roles";

export const appRoutes: RouteRecordRaw[] = [
  // {
  //   path: "",
  //   redirect: "profile",
  // },
  {
    path: "dashboard",
    name: "dashboard",
    component: () => import("@/pages/dashboard/DashboardPage.vue"),
    meta: {
      requiresAuth: true,
      roles: [
        UserRole.COMPANYADMIN,
        UserRole.SUPERADMIN,
        UserRole.DEVELOPER,
        UserRole.PROJECTMANAGER,
        UserRole.VIEWER,
      ],
      title: "Dashboard",
    },
  },
  {
    path: "projects",
    name: "projects",
    component: () => import("@/pages/projects/ProjectsPage.vue"),
    meta: {
      requiresAuth: true,
      roles: [
        UserRole.COMPANYADMIN,
        UserRole.SUPERADMIN,
        UserRole.DEVELOPER,
        UserRole.PROJECTMANAGER,
      ],
      title: "Проекты",
    },
  },
  {
    path: "tasks",
    name: "tasks",
    component: () => import("@/pages/tasks/TasksPage.vue"),
    meta: {
      requiresAuth: true,
      roles: [
        UserRole.COMPANYADMIN,
        UserRole.SUPERADMIN,
        UserRole.DEVELOPER,
        UserRole.PROJECTMANAGER,
      ],
      title: "Задачи",
    },
  },
  {
    path: "reports",
    name: "reports",
    component: () => import("@/pages/reports/ReportsPage.vue"),
    meta: {
      requiresAuth: true,
      roles: [
        UserRole.COMPANYADMIN,
        UserRole.SUPERADMIN,
        UserRole.PROJECTMANAGER,
      ],
      title: "Отчёты",
    },
  },
  {
    path: "profile",
    name: "profile",
    component: () => import("@/pages/profile/ProfilePage.vue"),
    meta: {
      requiresAuth: true,
      roles: [UserRole.NEW_USER, UserRole.DEVELOPER, UserRole.VIEWER],
      title: "Профиль",
    },
  },
];
