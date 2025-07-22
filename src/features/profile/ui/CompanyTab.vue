<script setup lang="ts">
import { NCard, NStatistic, NDivider, NSpace, NButton, NGrid, NGridItem } from 'naive-ui';

interface CompanyStats {
  employees: number;
  projects: number;
  efficiency: number;
}

interface Props {
  stats: CompanyStats;
}

defineProps<Props>();
</script>

<template>
  <div class="company-tab">
    <div class="section-header">
      <h2>Управление компанией</h2>
    </div>

    <NGrid :cols="3" :x-gap="24" :y-gap="24">
      <NGridItem>
        <NCard>
          <NStatistic label="Сотрудников" :value="stats.employees" />
        </NCard>
      </NGridItem>
      <NGridItem>
        <NCard>
          <NStatistic label="Проектов" :value="stats.projects" />
        </NCard>
      </NGridItem>
      <NGridItem>
        <NCard>
          <NStatistic label="Эффективность" :value="stats.efficiency" suffix="%" />
        </NCard>
      </NGridItem>
    </NGrid>

    <NDivider />

    <NSpace :size="16">
      <NButton type="primary">Управление пользователями</NButton>
      <NButton>Настройки компании</NButton>
      <NButton>Отчеты</NButton>
    </NSpace>
  </div>
</template>

<style lang="scss" scoped>
.company-tab {
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