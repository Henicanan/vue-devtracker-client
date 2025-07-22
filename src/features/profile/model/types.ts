import { UserRole } from "@/shared/config/user/roles";

export interface ProfileUser {
    id: string;
    email: string;
    role: UserRole;
    firstName: string;
    lastName: string;
    avatar: string | null;
    phone: string;
    position: string;
    department: string;
    company: string;
    joinDate: string;
    timezone: string;
    notifications: {
        email: boolean;
        push: boolean;
        sms: boolean;
    };
}

export interface ProfileTab {
    id: string;
    label: string;
    icon: () => any;
}

export interface ActivityItem {
    icon: () => any;
    text: string;
    time: string;
    color: string;
}

export interface RoleConfig {
    labels: Record<UserRole, string>;
    colors: Record<UserRole, 'default' | 'error' | 'success' | 'info' | 'warning' | 'primary'>;
} 