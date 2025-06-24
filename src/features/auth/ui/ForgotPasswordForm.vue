<script setup lang="ts">
import { ref } from "vue";
import { useNavigateTo } from "@/shared/lib/navigation/useNavigateTo";

const { navigateTo } = useNavigateTo();

const email = ref("");

const handleForgotPassword = () => {
  console.log("Forgot Password Clicked");
};
</script>

<template>
  <div class="container">
    <div class="forgot-password-card">
      <h2 class="forgot-password-title">Forgot Password</h2>
      <p class="forgot-password-subtitle">
        Recover your password to continue using the service
      </p>

      <form @submit.prevent="handleForgotPassword" class="forgot-password-form">
        <div class="input-group">
          <div class="input-wrapper">
            <input
              v-model="email"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              class="input-field"
            />
          </div>
        </div>

        <button type="submit" class="forgot-password-button">
          <span>Forgot password</span>
        </button>
      </form>
      <div class="back-link-wrapper">
        <a class="back-link" @click="navigateTo('login')">Go back</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  padding: 20px;

  .forgot-password-card {
    padding: 2.5rem;
    background-color: white;
    border-radius: 16px;
    max-width: 450px;
    width: 100%;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    border: 1px solid #eaeaea;
  }

  .register-header {
    margin-bottom: 2rem;
    text-align: center;
  }

  .forgot-password-title {
    margin-bottom: 0.5rem;
    font-size: 1.8rem;
    font-weight: 700;
    color: #111;
  }

  .forgot-password-subtitle {
    color: #666;
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }

  .forgot-password-form {
    margin-bottom: 1.5rem;
  }

  .input-group {
    margin-bottom: 1.5rem;
  }

  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .input-field {
    width: 100%;
    padding: 1rem;
    border: 1px solid #e0e0e0;
    background-color: #fafafa;
    border-radius: 8px;
    font-size: 0.95rem;
    color: #333;
    transition: all 0.3s ease;

    &:focus {
      border-color: #002ad4;
      outline: none;
      box-shadow: 0 0 0 2px rgba(0, 42, 212, 0.1);
      background-color: white;
    }

    &::placeholder {
      color: #999;
    }
  }

  .forgot-password-button {
    width: 100%;
    padding: 1rem;
    background-color: #002ad4;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    color: white;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    &:hover {
      background-color: #002ad4;
    }

    &:active {
      transform: translateY(1px);
    }
  }

  .back-link-wrapper {
    text-align: center;
    font-size: 0.95rem;
    color: #666;

    .back-link {
      color: #002ad4;
      text-decoration: none;
      font-weight: 500;
      font-size: 16px;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 480px) {
    .forgot-password-card {
      padding: 1.5rem;
    }

    .forgot-password-title {
      font-size: 1.5rem;
    }
  }
}
</style>
