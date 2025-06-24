<script setup lang="ts">
import { reactive } from "vue";
import { useNavigateTo } from "@/shared/lib/navigation/useNavigateTo";

const { navigateTo } = useNavigateTo();

const formData = reactive({
  email: "",
  password: "",
  recoverPassword: "",
});

const handleRegister = () => {
  console.log("Register clicked", formData);
};
</script>

<template>
  <div class="container">
    <div class="register-card">
      <h2 class="register-title">Create Account</h2>
      <p class="register-subtitle">Sign up to get started with your account</p>

      <form @submit.prevent="handleRegister" class="register-form">
        <div class="input-group">
          <div class="input-wrapper">
            <input
              v-model="formData.email"
              type="email"
              id="email"
              placeholder="Email Address"
              required
              class="input-field"
            />
          </div>
        </div>

        <div class="input-group">
          <div class="input-wrapper">
            <input
              v-model="formData.password"
              type="password"
              id="password"
              placeholder="Password"
              required
              class="input-field"
            />
          </div>
        </div>
        <div class="input-group">
          <div class="input-wrapper">
            <input
              v-model="formData.recoverPassword"
              type="password"
              id="recover-password"
              placeholder="Confirm Password"
              required
              class="input-field"
            />
          </div>
        </div>

        <button type="submit" class="register-button">
          <span>Sign Up</span>
        </button>
      </form>

      <div class="login-link">
        Already have an account?
        <a @click="navigateTo('login')">Sign in</a>
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

  .register-card {
    padding: 2.5rem;
    background-color: white;
    border-radius: 16px;
    max-width: 450px;
    width: 100%;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    border: 1px solid #eaeaea;
  }

  .register-title {
    margin-bottom: 0.5rem;
    font-size: 1.8rem;
    font-weight: 700;
    color: #111;
  }

  .register-subtitle {
    color: #666;
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }

  .register-form {
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
    padding: 0.9rem 0.9rem 0.9rem 1rem;
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

  .register-button {
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

  .login-link {
    text-align: center;
    font-size: 0.95rem;
    color: #666;

    a {
      color: #002ad4;
      text-decoration: none;
      font-weight: 500;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 480px) {
    .register-card {
      padding: 1.5rem;
    }

    .register-title {
      font-size: 1.5rem;
    }
  }
}
</style>
