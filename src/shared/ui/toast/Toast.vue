<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useToast } from "./useToast";

const props = defineProps<{
  message: string;
  type: "success" | "error" | "info";
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  icon?: string;
  duration?: number;
}>();

const { setTimeoutToast } = useToast();

const isVisible = ref(true);

onMounted(() => {
  setTimeoutToast(props.duration ?? 3000, isVisible);
});
</script>

<template>
  <transition name="fade">
    <div
      :class="['toast-container', props.position, props.type, props.icon]"
      v-if="isVisible"
    >
      <div class="toast-icon" v-if="props.icon">{{ props.icon }}</div>
      <div class="toast-message">{{ props.message }}</div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.toast-container {
  position: fixed;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  z-index: 999;
}

.success {
  border: 2px solid #2ecc71;
}

.error {
  border: 2px solid #e74c3c;
}

.info {
  border: 2px solid #3498db;
}

.bottom-right {
  bottom: 20px;
  right: 20px;
}
.top-right {
  top: 20px;
  right: 20px;
}
.bottom-left {
  bottom: 20px;
  left: 20px;
}
.top-left {
  top: 20px;
  left: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
