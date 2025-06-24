<script setup lang="ts">
import { useGlobalToast } from "@/shared/lib/toast/useGlobalToast";

const { isVisible, message, typeMessage, position } = useGlobalToast();
</script>

<template>
  <transition name="fade">
    <div v-if="isVisible" :class="['toast-container', position, typeMessage]">
      <div class="toast-message">{{ message }}</div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.toast-container {
  position: fixed;
  padding: 1rem 1.5rem;
  width: fit-content;
  border-radius: 8px;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  z-index: 999;
}

.toast-message {
  color: black;
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
