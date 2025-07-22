import { createApp } from "vue";
import App from "./App.vue";
import router from "@/app/router/index";

import naive from "naive-ui";

import "@/shared/styles/reset.scss";
import "@/shared/styles/main.scss";

const app = createApp(App);

app.use(router);
app.use(naive);

app.mount("#app");
