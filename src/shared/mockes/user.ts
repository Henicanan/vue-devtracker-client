import { ref } from "vue";
import { UserRole } from "../config/user/roles";

export const user = ref({
  id: "1",
  email: "user@example.com",
  role: UserRole.DEVELOPER,
  firstName: "Александр",
  lastName: "Петров",
  avatar: null,
  phone: "+7 (999) 123-45-67",
  position: "Frontend Developer",
  department: "Разработка",
  company: "TechCorp",
  joinDate: "2023-03-15",
  timezone: "Europe/Moscow",
  notifications: {
    email: true,
    push: true,
    sms: false,
  },
});
