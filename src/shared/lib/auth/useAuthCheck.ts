import { apiClient } from "@/shared/api/axios";

export const useAuthCheck = async (): Promise<boolean> => {
  try {
    await apiClient.get("/auth/me");
    return true;
  } catch (error) {
    return false;
  }
};
