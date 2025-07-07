import { useRouter } from "vue-router";

export const useNavigateTo = () => {
  const router = useRouter();

  const navigateTo = (name: string, query?: Record<string, any>) => {
    router.push({ name, query });
  };

  return { navigateTo };
};
