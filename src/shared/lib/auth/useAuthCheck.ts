import { apiClient } from "@/shared/api/axios";
import type { User } from "@/entities/user/model/types";

export const useAuthCheck = async (): Promise<{
  isAuthenticated: boolean;
  user?: User;
}> => {
  try {
    const { data } = await apiClient.get("/auth/me");
    return { isAuthenticated: true, user: data };
  } catch (error) {
    return { isAuthenticated: false };
  }
};
