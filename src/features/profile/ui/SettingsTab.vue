<script setup lang="ts">
import { NFormItem, NSelect, NSwitch, NSpace, NDivider } from 'naive-ui';
import type { ProfileUser } from '../model/types';

interface Props {
  user: ProfileUser;
  timezoneOptions: Array<{ label: string; value: string }>;
}

defineProps<Props>();
</script>

<template>
  <div class="settings-tab">
    <div class="section-header">
      <h2>Настройки приложения</h2>
    </div>

    <div class="settings-section">
      <h3>Уведомления</h3>
      <NSpace vertical :size="16">
        <div class="setting-item">
          <div class="setting-info">
            <span class="setting-label">Email уведомления</span>
            <span class="setting-description">Получать уведомления на email</span>
          </div>
          <NSwitch v-model:value="user.notifications.email" />
        </div>
        <div class="setting-item">
          <div class="setting-info">
            <span class="setting-label">Push уведомления</span>
            <span class="setting-description">Уведомления в браузере</span>
          </div>
          <NSwitch v-model:value="user.notifications.push" />
        </div>
        <div class="setting-item">
          <div class="setting-info">
            <span class="setting-label">SMS уведомления</span>
            <span class="setting-description">Уведомления по SMS</span>
          </div>
          <NSwitch v-model:value="user.notifications.sms" />
        </div>
      </NSpace>
    </div>

    <NDivider />

    <div class="settings-section">
      <h3>Часовой пояс</h3>
      <NFormItem label="Часовой пояс">
        <NSelect
          v-model:value="user.timezone"
          :options="timezoneOptions"
          placeholder="Выберите часовой пояс"
        />
      </NFormItem>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.settings-tab {
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #111;
    }
  }
}

.settings-section {
  margin-bottom: 32px;

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #111;
    margin-bottom: 16px;
  }
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;

  .setting-info {
    .setting-label {
      display: block;
      font-weight: 500;
      color: #111;
      margin-bottom: 4px;
    }

    .setting-description {
      font-size: 0.85rem;
      color: #666;
    }
  }
}
</style> 