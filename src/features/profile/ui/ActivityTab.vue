<script setup lang="ts">
import { NCard, NProgress, NList, NListItem, NGrid, NGridItem, NIcon } from 'naive-ui';
import type { ActivityItem } from '../model/types';

interface Props {
  activityData: ActivityItem[];
}

defineProps<Props>();
</script>

<template>
  <div class="activity-tab">
    <div class="section-header">
      <h2>Активность и статистика</h2>
    </div>

    <NGrid :cols="2" :x-gap="24" :y-gap="24">
      <NGridItem>
        <NCard title="Задачи за неделю">
          <div class="chart-container">
            <NProgress
              v-for="(value, index) in [60, 80, 45, 90, 70, 85, 55]"
              :key="index"
              :percentage="value"
              :color="`hsl(${200 + index * 20}, 70%, 60%)`"
              :show-indicator="false"
              :height="8"
              :border-radius="4"
            />
            <div class="chart-labels">
              <span>Пн</span>
              <span>Вт</span>
              <span>Ср</span>
              <span>Чт</span>
              <span>Пт</span>
              <span>Сб</span>
              <span>Вс</span>
            </div>
          </div>
        </NCard>
      </NGridItem>

      <NGridItem>
        <NCard title="Последняя активность">
          <NList>
            <NListItem v-for="(activity, index) in activityData" :key="index">
              <template #prefix>
                <NIcon :component="activity.icon" :color="activity.color" />
              </template>
              <div class="activity-content">
                <div class="activity-text">{{ activity.text }}</div>
                <div class="activity-time">{{ activity.time }}</div>
              </div>
            </NListItem>
          </NList>
        </NCard>
      </NGridItem>
    </NGrid>
  </div>
</template>

<style lang="scss" scoped>
.activity-tab {
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

.chart-container {
  .chart-labels {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
    font-size: 0.8rem;
    color: #666;
  }
}

.activity-content {
  .activity-text {
    font-size: 0.9rem;
    color: #111;
    margin-bottom: 4px;
  }

  .activity-time {
    font-size: 0.8rem;
    color: #666;
  }
}
</style> 