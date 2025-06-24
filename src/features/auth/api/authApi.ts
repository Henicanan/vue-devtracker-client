import { apiClient } from "@/shared/api/axios";

export const authApi = {
  login: (email: string, password: string) =>
    apiClient.post("/auth/login", { email, password }),
  register: (email: string, password: string) =>
    apiClient.post("/auth/register", { email, password }),
  logout: () => apiClient.post("/auth/logout"),
};
