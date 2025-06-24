<script setup lang="ts">
import { reactive } from "vue";
import { useNavigateTo } from "@/shared/lib/navigation/useNavigateTo";

const { navigateTo } = useNavigateTo();

const formData = reactive({
  email: "",
  password: "",
});

const handleLogin = () => {
  console.log("Click");
};
</script>

<template>
  <div class="container">
    <div class="login-card">
      <h2 class="login-title">Welcome Back</h2>
      <p class="login-subtitle">Sign in to access your dashboard</p>

      <form @submit.prevent="handleLogin" class="login-form">
        <div class="input-group">
          <div class="input-wrapper">
            <input
              v-model="formData.email"
              type="email"
              id="email"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
              required
              class="input-field"
            />
          </div>
        </div>

        <div class="auth-options">
          <label class="checkbox-container">
            <input type="checkbox" id="remember" />
            <span class="checkmark"></span>
            <span class="checkbox-label">Remember me</span>
          </label>
          <button
            @click="navigateTo('forgot-password')"
            class="forgot-password"
          >
            Forgot password?
          </button>
        </div>

        <button type="submit" class="login-button">
          <span>Sign In</span>
        </button>
      </form>

      <div class="signup-link">
        Don't have an account?
        <a @click="navigateTo('register')">Sign up</a>
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

  .login-card {
    padding: 2.5rem;
    background-color: white;
    border-radius: 16px;
    max-width: 450px;
    width: 100%;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    border: 1px solid #eaeaea;
  }

  .login-header {
    margin-bottom: 2rem;
    text-align: center;

    .logo-placeholder {
      margin-bottom: 1rem;
      display: flex;
      justify-content: center;
    }
  }

  .login-title {
    margin-bottom: 0.5rem;
    font-size: 1.8rem;
    font-weight: 700;
    color: #111;
  }

  .login-subtitle {
    color: #666;
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }

  .login-form {
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

  .auth-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
  }

  .checkbox-container {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    user-select: none;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .checkmark {
      height: 18px;
      width: 18px;
      background-color: #fafafa;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-right: 8px;
      transition: all 0.2s ease;

      &:after {
        content: "";
        position: absolute;
        display: none;
        left: 6px;
        top: 2px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
    }

    input:checked ~ .checkmark {
      background-color: #002ad4;
      border-color: #002ad4;

      &:after {
        display: block;
      }
    }

    .checkbox-label {
      color: #555;
    }
  }

  .forgot-password {
    color: #002ad4;
    background: none;
    border: none;
    font-size: 0.9rem;
    cursor: pointer;
    padding: 0;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }

  .login-button {
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
      background-color: (#002ad4, 5%);
    }

    &:active {
      transform: translateY(1px);
    }
  }

  .signup-link {
    text-align: center;
    font-size: 0.95rem;
    color: #666;

    a {
      color: #002ad4;
      text-decoration: none;
      font-weight: 500;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 480px) {
    .login-card {
      padding: 1.5rem;
    }

    .login-title {
      font-size: 1.5rem;
    }

    .auth-options {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
    }

    .forgot-password {
      align-self: flex-end;
    }
  }
}
</style>
