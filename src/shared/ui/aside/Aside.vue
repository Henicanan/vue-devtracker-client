<script setup lang="ts">
import { computed } from "vue";
import { asideTabs } from "@/shared/config/navigation/asideTabs";
import { authState } from "@/app/router/guards/authGuard";
import { useNavigateTo } from "@/shared/lib/navigation/useNavigateTo";

const { navigateTo } = useNavigateTo();

const filteredTabs = computed(() => {
  if (!authState.user) return [];
  if (authState) {
    return asideTabs.filter((tab) => tab.roles.includes(authState.user!.role));
  }
});
</script>

<template>
  <aside class="aside">
    <ul class="aside-list">
      <li
        v-for="tab in filteredTabs"
        :key="tab.routeName"
        class="aside-item"
        :class="{ active: $route.name === tab.routeName }"
        @click="navigateTo(tab.routeName as string)"
      >
        <i :class="['aside-icon', tab.icon]"></i>
        <span class="aside-label">{{ tab.label }}</span>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
.aside {
  width: 220px;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.07);
  padding: 32px 0 32px 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  z-index: 10px;
  overflow-y: auto;
  border-right: 1px solid #e0e0e0;
}

.aside-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.aside-item {
  display: flex;
  align-items: center;
  padding: 12px 28px;
  color: #222;
  font-size: 1.08rem;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;

  &:hover {
    background: #f2f6fa;
    color: #18a058;
  }

  &.active {
    background: #e6edfa;
    color: #18a058;
    font-weight: 700;
  }
}

.aside-icon {
  font-size: 1.3em;
  margin-right: 14px;
  color: inherit;
  transition: color 0.18s;
}

.aside-label {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
