import { useRouter } from "vue-router";

export const useNavigateTo = () => {
  const router = useRouter();

  const navigateTo = (path: string, query?: Record<string, any>) => {
    router.push({ path, query });
  };

  return { navigateTo };
};
