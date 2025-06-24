import { createApp } from "vue";
import App from "./App.vue";
import router from "@/app/router/index";

import "@/shared/styles/reset.scss";
import "@/shared/styles/main.scss";

const app = createApp(App);

app.use(router);

app.mount("#app");
