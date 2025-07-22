import { ref } from 'vue';
import { UserRole } from '@/shared/config/user/roles';
import { tabs } from '../constants/profileTabs';
import { BusinessOutline, CrownOutline } from '../constants/profileTabs';

export const useProfile = () => {
    const activeTab = ref("profile");
    const isEditing = ref(false);
    const showPasswordModal = ref(false);

    const getTabsForRole = (role: UserRole) => {
        const availableTabs = [...tabs];

        if (role === UserRole.SUPERADMIN || role === UserRole.COMPANYADMIN) {
            availableTabs.push({ id: "company", label: "Компания", icon: BusinessOutline });
        }

        if (role === UserRole.SUPERADMIN) {
            availableTabs.push({ id: "admin", label: "Администрирование", icon: CrownOutline });
        }

        return availableTabs;
    };

    const handleSaveProfile = () => {
        // message.success('Профиль успешно обновлен');
        isEditing.value = false;
    };

    const handleChangePassword = () => {
        // message.success('Пароль успешно изменен');
        showPasswordModal.value = false;
    };

    const handleEnable2FA = () => {
        // message.info('Функция 2FA будет доступна в ближайшее время');
    };

    return {
        activeTab,
        isEditing,
        showPasswordModal,
        getTabsForRole,
        handleSaveProfile,
        handleChangePassword,
        handleEnable2FA,
    };
}; 