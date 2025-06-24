export const authRoutes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/login/LoginPage.vue"),
    meta: { title: "Auth Page" },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/pages/register/RegisterPage.vue"),
    meta: { title: "Register Page" },
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("@/pages/forgot-password/ForgotPasswordPage.vue"),
    meta: { title: "Forgot Password Page" },
  },
  {
    path: "",
    redirect: { name: "login" },
  },
];
