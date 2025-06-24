import { reactive, toRefs } from "vue";

export function useFormWithReset<T extends Record<string, any>>(
  initialState: T
) {
  const form = reactive({ ...initialState });

  const reset = () => {
    Object.keys(initialState).forEach((key) => {
      form[key] = "";
    });
  };

  return {
    ...toRefs(form),
    form,
    reset,
  };
}
