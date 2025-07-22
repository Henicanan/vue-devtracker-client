<script setup lang="ts">
import ChangePasswordModal from "@/features/profile/ui/modal/ChangePasswordModal.vue";
import { user } from "@/shared/mockes/user";
import { timezoneOptions } from "@/shared/constants/timezoneOptions";
import { NCard, NTabs, NTabPane, NSpace } from "naive-ui";
import {
  UserCard,
  ProfileTab,
  SettingsTab,
  SecurityTab,
  ActivityTab,
  CompanyTab,
  AdminTab,
  useProfile,
  activityData,
  companyStats,
  adminStats,
} from "@/features/profile";

const {
  activeTab,
  isEditing,
  showPasswordModal,
  getTabsForRole,
  handleSaveProfile,
  handleChangePassword,
  handleEnable2FA,
} = useProfile();

const tabs = getTabsForRole(user.value.role);
</script>

<template>
  <div class="profile-page">
    <div class="profile-header">
      <h1 class="profile-title">Профиль пользователя</h1>
      <p class="profile-subtitle">
        Управление личной информацией и настройками
      </p>
    </div>

    <div class="profile-content">
      <div class="profile-sidebar">
        <UserCard :user="user" />
      </div>
      <div class="profile-main">
        <NCard>
          <NTabs v-model:value="activeTab" type="line" animated>
            <NTabPane
              v-for="tab in tabs"
              :key="tab.id"
              :name="tab.id"
              :tab="tab.label"
            >
              <template #tab>
                <NSpace align="center" :size="4">
                  <NIcon :component="tab.icon" />
                  <span>{{ tab.label }}</span>
                </NSpace>
              </template>
              <ProfileTab
                v-if="tab.id === 'profile'"
                :user="user"
                :is-editing="isEditing"
                @update:is-editing="isEditing = $event"
                @save="handleSaveProfile"
              />
              <SettingsTab
                v-if="tab.id === 'settings'"
                :user="user"
                :timezone-options="timezoneOptions"
              />
              <SecurityTab
                v-if="tab.id === 'security'"
                @show-password-modal="showPasswordModal = true"
                @enable-2fa="handleEnable2FA"
              />
              <ActivityTab
                v-if="tab.id === 'activity'"
                :activity-data="activityData"
              />
              <CompanyTab v-if="tab.id === 'company'" :stats="companyStats" />
              <AdminTab v-if="tab.id === 'admin'" :stats="adminStats" />
            </NTabPane>
          </NTabs>
        </NCard>
      </div>
    </div>
  </div>
  <ChangePasswordModal
    @cancel="showPasswordModal"
    @submit="handleChangePassword"
  />
</template>

<style lang="scss" scoped>
.profile-page {
  margin-left: 5rem;
  padding: 0 20px;
}

.profile-header {
  margin-bottom: 32px;

  .profile-title {
    font-size: 2rem;
    font-weight: 700;
    color: #111;
    margin-bottom: 8px;
  }

  .profile-subtitle {
    color: #666;
    font-size: 1rem;
  }
}

.profile-content {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

.icon {
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
