import { UserRole } from "@/shared/config/user/roles";
import type { RoleConfig } from "../model/types";

export const roleLabels: RoleConfig['labels'] = {
    [UserRole.NEW_USER]: "Новый пользователь",
    [UserRole.SUPERADMIN]: "Супер администратор",
    [UserRole.COMPANYADMIN]: "Администратор компании",
    [UserRole.PROJECTMANAGER]: "Менеджер проекта",
    [UserRole.DEVELOPER]: "Разработчик",
    [UserRole.VIEWER]: "Наблюдатель",
};

export const roleColors: RoleConfig['colors'] = {
    [UserRole.NEW_USER]: "default",
    [UserRole.SUPERADMIN]: "error",
    [UserRole.COMPANYADMIN]: "success",
    [UserRole.PROJECTMANAGER]: "info",
    [UserRole.DEVELOPER]: "warning",
    [UserRole.VIEWER]: "default",
}; 