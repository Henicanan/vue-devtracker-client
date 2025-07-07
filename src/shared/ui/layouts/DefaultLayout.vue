<script setup lang="ts">
import Aside from "../aside/Aside.vue";
import BaseHeader from "../header/BaseHeader.vue";
</script>

<template>
  <div class="layout-root">
    <BaseHeader />
    <div class="layout-content">
      <Aside class="layout-aside" />
      <main class="main">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-root {
  min-height: 100vh;
  
  background: #f6f8fa;
  display: flex;
  flex-direction: column;
}

.layout-content {
  flex: 1 1 0;
  display: flex;
  flex-direction: row;
  min-width: 0;
  height: 100%;
}

.main {
  flex: 1 1 0;
  min-width: 0;
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
}
</style>