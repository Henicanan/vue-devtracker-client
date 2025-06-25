<script setup lang="ts">
import { ref } from "vue";
import Logo from "../logo/Logo.vue";

const userAvatar = ref(null);
</script>

<template>
  <header class="header">
    <div class="logo">
      <Logo />
      <h1>DevTracker</h1>
    </div>
    <nav class="nav-menu">
      <ul class="nav-list">
        <li><i class="pi pi-bell" /></li>
        <li><i class="pi pi-question-circle" /></li>
        <li><i class="pi pi-spin pi-cog" /></li>
        <li>
          <div class="avatar-wrapper">
            <img
              v-if="userAvatar"
              :src="userAvatar"
              alt="User Avatar"
              class="avatar"
            />
            <i v-else class="pi pi-user avatar default-avatar" />
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0d58c8;
  color: #ffff;
  border-bottom: 1px solid #0c2d5d;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 12px 32px;
}

.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 12px h1 {
    font-size: 36px;
    font-weight: 600px;
    transition: color 0.3s;
  }

  &:hover h1 {
    color: #b3d4ff;
  }
}

.nav-menu {
  .nav-list {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      cursor: pointer;
      transition: color 0.3s ease;
      i {
        font-size: 24px;
      }

      &:hover i {
        color: #b3d4ff;
      }
    }

    li:hover {
      color: #777;
    }
    .avatar-wrapper {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      overflow: hidden;
      background-color: #ffffff1a;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #ffffff33;
      }

      .avatar {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .default-avatar {
        font-size: 18px;
        color: white;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
