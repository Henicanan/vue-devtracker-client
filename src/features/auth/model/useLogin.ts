import { ref } from "vue";
import { authApi } from "../api/authApi";
import { useNavigateTo } from "@/shared/lib/navigation/useNavigateTo";
import { validatePassword } from "../lib/validatePassword";

export const useLogin = () => {
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);
  const { navigateTo } = useNavigateTo();

  const handleLogin = async (login: string, password: string) => {
    error.value = null;

    const passwordError = validatePassword(password);

    if (passwordError) {
      error.value = passwordError;
      return;
    }

    loading.value = true;

    try {
      await authApi.login(login, password);
      navigateTo("home");
    } catch (err) {
      error.value = "Login failed";
    } finally {
      loading.value = false;
    }
  };

  return {
    handleLogin,
    loading,
    error,
  };
};
