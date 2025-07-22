<script setup lang="ts">
import { NButton, NDivider } from 'naive-ui';

interface Emits {
  (e: 'showPasswordModal'): void;
  (e: 'enable2FA'): void;
}

defineEmits<Emits>();
</script>

<template>
  <div class="security-tab">
    <div class="section-header">
      <h2>Безопасность аккаунта</h2>
    </div>

    <div class="security-section">
      <h3>Смена пароля</h3>
      <NButton @click="$emit('showPasswordModal')" type="primary">
        Изменить пароль
      </NButton>
    </div>

    <NDivider />

    <div class="security-section">
      <h3>Двухфакторная аутентификация</h3>
      <div class="setting-item">
        <div class="setting-info">
          <span class="setting-label">Включить 2FA</span>
          <span class="setting-description">Дополнительная защита аккаунта</span>
        </div>
        <NButton @click="$emit('enable2FA')" type="success" size="small">
          Включить
        </NButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.security-tab {
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

.security-section {
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