<script setup lang="ts">
import { NCard, NStatistic, NDivider, NSpace, NButton, NGrid, NGridItem } from 'naive-ui';

interface AdminStats {
  companies: number;
  users: number;
  projects: number;
}

interface Props {
  stats: AdminStats;
}

defineProps<Props>();
</script>

<template>
  <div class="admin-tab">
    <div class="section-header">
      <h2>Системное администрирование</h2>
    </div>

    <NGrid :cols="3" :x-gap="24" :y-gap="24">
      <NGridItem>
        <NCard>
          <NStatistic label="Компаний" :value="stats.companies" />
        </NCard>
      </NGridItem>
      <NGridItem>
        <NCard>
          <NStatistic label="Пользователей" :value="stats.users" />
        </NCard>
      </NGridItem>
      <NGridItem>
        <NCard>
          <NStatistic label="Проектов" :value="stats.projects" />
        </NCard>
      </NGridItem>
    </NGrid>

    <NDivider />

    <NSpace :size="16">
      <NButton type="primary">Управление компаниями</NButton>
      <NButton>Системные настройки</NButton>
      <NButton>Логи системы</NButton>
      <NButton>Резервное копирование</NButton>
    </NSpace>
  </div>
</template>

<style lang="scss" scoped>
.admin-tab {
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
</style> 