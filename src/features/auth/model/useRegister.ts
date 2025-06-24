import { ref } from "vue";
import { authApi } from "../api/authApi";
import { validatePassword } from "../lib/validatePassword";
import { useGlobalToast } from "@/shared/lib/toast/useGlobalToast";

export const useRegister = () => {
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);
  const { showToast } = useGlobalToast();

  const handleRegister = async (
    login: string,
    password: string,
    confirmPassword: string,
    resetForm: () => void
  ) => {
    error.value = null;

    const passwordError = validatePassword(password, confirmPassword);

    if (!passwordError) {
      error.value = "Password do not match or must contain at least 6 symbols";
      showToast(error.value, "error", "top-right", 6000);
      return;
    }

    loading.value = true;

    try {
      const res = await authApi.register(login, password);
      showToast(res.data.message, "success", "bottom-right", 3000);
      resetForm();
    } catch (err) {
      error.value = "Registration is failed";
    } finally {
      loading.value = false;
    }
  };

  return {
    handleRegister,
    loading,
    error,
  };
};
