<script setup lang="ts">
import { ref } from "vue";
import Logo from "../logo/Logo.vue";

const userAvatar = ref(null);
</script>

<template>
  <header class="header">
    <div class="logo" tabindex="0">
      <Logo />
      <h1>DevTracker</h1>
    </div>
    <nav class="nav-menu">
      <ul class="nav-list">
        <li>
          <button class="icon-btn" aria-label="Уведомления">
            <i class="pi pi-bell" />
          </button>
        </li>
        <li>
          <button class="icon-btn" aria-label="Помощь">
            <i class="pi pi-question-circle" />
          </button>
        </li>
        <li>
          <button class="icon-btn" aria-label="Настройки">
            <i class="pi pi-spin pi-cog" />
          </button>
        </li>
        <li>
          <div class="avatar-wrapper" tabindex="0">
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
  background: linear-gradient(90deg, #18a058 0%, #18a058 100%);
  color: #fff;
  border-bottom: 1px solid #18a058;
  box-shadow: 0 2px 12px 0 rgba(13, 88, 200, 0.08);
  padding: 0 40px;
  min-height: 64px;
  position: sticky;
  top: 0;
  z-index: 10;
}

.logo {
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  user-select: none;
  outline: none;
  transition: filter 0.2s;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    margin: 0;
    color: #fff;
    transition: color 0.3s;
  }

  &:hover h1,
  &:focus h1 {
    color: #03fd78;
  }
}

.nav-menu {
  .nav-list {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      align-items: center;
    }

    .icon-btn {
      background: none;
      border: none;
      padding: 8px;
      border-radius: 50%;
      cursor: pointer;
      transition: background 0.2s, box-shadow 0.2s;
      color: inherit;
      outline: none;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover,
      &:focus {
        background: rgba(255, 255, 255, 0.13);
        box-shadow: 0 2px 8px 0 rgba(13, 88, 200, 0.08);
      }

      i {
        font-size: 1.5rem;
        transition: color 0.2s;
      }
    }

    .avatar-wrapper {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      overflow: hidden;
      background: rgba(255, 255, 255, 0.13);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s, box-shadow 0.2s;
      cursor: pointer;
      outline: none;

      &:hover,
      &:focus {
        background: rgba(255, 255, 255, 0.22);
        box-shadow: 0 2px 8px 0 rgba(13, 88, 200, 0.08);
      }

      .avatar {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .default-avatar {
        font-size: 1.3rem;
        color: #fff;
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
