import { ref } from "vue";
import type { ToastMessageType, ToastPosition } from "./types";

const isVisible = ref(false);
const message = ref("");
const typeMessage = ref<ToastMessageType>("info");
const position = ref<ToastPosition>("bottom-right");

export const useGlobalToast = () => {
  const showToast = (
    msg: string,
    toastType: ToastMessageType,
    toastPosition: ToastPosition,
    duration = 3000
  ) => {
    message.value = msg;
    typeMessage.value = toastType;
    position.value = toastPosition;
    isVisible.value = true;

    setTimeout(() => {
      isVisible.value = false;
    }, duration);
  };

  return { showToast, message, typeMessage, position, isVisible };
};
