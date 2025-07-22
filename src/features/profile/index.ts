// UI Components
export { default as UserCard } from './ui/UserCard.vue';
export { default as ProfileTab } from './ui/ProfileTab.vue';
export { default as SettingsTab } from './ui/SettingsTab.vue';
export { default as SecurityTab } from './ui/SecurityTab.vue';
export { default as ActivityTab } from './ui/ActivityTab.vue';
export { default as CompanyTab } from './ui/CompanyTab.vue';
export { default as AdminTab } from './ui/AdminTab.vue';

// Model
export { useProfile } from './model/useProfile';
export type { ProfileUser, ActivityItem, RoleConfig } from './model/types';

// Constants
export { tabs } from './constants/profileTabs';
export { roleLabels, roleColors } from './constants/roleConfig';

// Mockes
export { activityData } from './mockes/activityData';
export { companyStats, adminStats } from './mockes/statsData'; 