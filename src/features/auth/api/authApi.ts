import { apiClient } from "@/shared/api/axios";

export const authApi = {
  login: (login: string, password: string) =>
    apiClient.post("/auth/login", { login, password }),
  register: (login: string, password: string) =>
    apiClient.post("/auth/register", { login, password }),
  logout: () => apiClient.post("/auth/logout"),
};
