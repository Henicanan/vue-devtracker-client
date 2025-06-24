import { ref } from "vue";
import { authApi } from "../api/authApi";
import { useNavigateTo } from "@/shared/lib/navigation/useNavigateTo";
import { useGlobalToast } from "@/shared/lib/toast/useGlobalToast";

export const useLogin = () => {
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);
  const { navigateTo } = useNavigateTo();
  const { showToast } = useGlobalToast();

  const handleLogin = async (login: string, password: string) => {
    error.value = null;

    loading.value = true;

    try {
      const res = await authApi.login(login, password);
      navigateTo("home");
      showToast(res.data.message, "success", "top-right", 4000);
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
