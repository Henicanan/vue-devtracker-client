import { type Ref } from "vue";

export const useToast = () => {
  const setTimeoutToast = (duration: number, isVisible: Ref<boolean>) => {
    setTimeout(() => {
      isVisible.value = false;
    }, duration ?? 3000);
  };

  return { setTimeoutToast };
};
