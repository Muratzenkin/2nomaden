import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import tr from "./locales/tr/translation.json";
import de from "./locales/de/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    tr: { translation: tr },
    de: { translation: de },
  },
  lng: "tr",
  fallbackLng: "tr",
  interpolation: { escapeValue: false },
});

export default i18n;
