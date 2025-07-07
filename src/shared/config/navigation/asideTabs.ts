import { UserRole } from "@/shared/config/user/roles";

export interface AsideTab {
  icon: string;
  label: string;
  routeName: string;
  roles: UserRole[];
}

export const asideTabs: AsideTab[] = [
  {
    icon: "pi pi-home",
    label: "Dashboard",
    routeName: "dashboard",
    roles: [
      UserRole.COMPANYADMIN,
      UserRole.SUPERADMIN,
      UserRole.DEVELOPER,
      UserRole.PROJECTMANAGER,
      UserRole.VIEWER,
    ],
  },
  {
    icon: "pi pi-briefcase",
    label: "Проекты",
    routeName: "projects",
    roles: [
      UserRole.COMPANYADMIN,
      UserRole.SUPERADMIN,
      UserRole.DEVELOPER,
      UserRole.PROJECTMANAGER,
    ],
  },
  {
    icon: "pi pi-list",
    label: "Задачи",
    routeName: "tasks",
    roles: [
      UserRole.COMPANYADMIN,
      UserRole.SUPERADMIN,
      UserRole.DEVELOPER,
      UserRole.PROJECTMANAGER,
    ],
  },
  {
    icon: "pi pi-chart-bar",
    label: "Отчёты",
    routeName: "reports",
    roles: [
      UserRole.COMPANYADMIN,
      UserRole.SUPERADMIN,
      UserRole.PROJECTMANAGER,
    ],
  },
  {
    icon: "pi pi-users",
    label: "Пользователи",
    routeName: "users",
    roles: [UserRole.COMPANYADMIN, UserRole.SUPERADMIN],
  },
  {
    icon: "pi pi-user",
    label: "Профиль",
    routeName: "profile",
    roles: [UserRole.NEW_USER, UserRole.DEVELOPER, UserRole.VIEWER],
  },
];
