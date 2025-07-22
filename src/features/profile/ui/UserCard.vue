<script setup lang="ts">
import { NCard, NAvatar, NTag, NDivider, NStatistic } from 'naive-ui';
import type { ProfileUser } from '../model/types';
import { roleLabels, roleColors } from '../constants/roleConfig';

interface Props {
  user: ProfileUser;
}

defineProps<Props>();
</script>

<template>
  <NCard class="user-card">
    <div class="avatar-section">
      <NAvatar
        :src="user.avatar || undefined"
        :fallback-src="`${user.firstName.charAt(0)}${user.lastName.charAt(0)}`"
        :size="80"
        round
      />
      <div class="user-info">
        <h3 class="user-name">
          {{ user.firstName }} {{ user.lastName }}
        </h3>
        <p class="user-email">{{ user.email }}</p>
        <NTag :type="roleColors[user.role]" size="small">
          {{ roleLabels[user.role] }}
        </NTag>
      </div>
    </div>

    <NDivider />

    <div class="user-stats">
      <NStatistic label="Задач выполнено" :value="127" />
      <NStatistic label="Проектов" :value="15" />
      <NStatistic label="Эффективность" :value="98" suffix="%" />
    </div>
  </NCard>
</template>

<style lang="scss" scoped>
.user-card {
  .avatar-section {
    text-align: center;
    margin-bottom: 24px;
  }

  .user-info {
    margin-top: 16px;

    .user-name {
      font-size: 1.25rem;
      font-weight: 600;
      color: #111;
      margin-bottom: 8px;
    }

    .user-email {
      color: #666;
      font-size: 0.9rem;
      margin-bottom: 12px;
    }
  }

  .user-stats {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style> 