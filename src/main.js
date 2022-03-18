import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { createI18n } from "vue-i18n";

import English from "@/assets/locales/en.json";
import French from "@/assets/locales/fr.json";
import German from "@/assets/locales/de.json";

const i18n = createI18n({
  locale: localStorage.getItem("i18nextLng") || "en",
  fallbackLocale: "en",
  messages: {
    en: English,
    fr: French,
    de: German,
  },
});

import "./assets/styles/tailwind.css";

createApp(App).use(store).use(router).use(i18n).mount("#app");
