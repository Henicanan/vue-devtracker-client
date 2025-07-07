import type { UserRole } from "@/shared/config/user/roles";

export interface User {
  id: string;
  email: string;
  role: UserRole;
}
