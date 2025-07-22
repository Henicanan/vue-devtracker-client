import { h } from "vue";

const PersonOutline = () => h("div", { class: "icon" }, "👤");
const SettingsOutline = () => h("div", { class: "icon" }, "⚙️");
const ShieldOutline = () => h("div", { class: "icon" }, "🔒");
const AnalyticsOutline = () => h("div", { class: "icon" }, "📊");
const BusinessOutline = () => h("div", { class: "icon" }, "🏢");
const CrownOutline = () => h("div", { class: "icon" }, "👑");
const CheckmarkCircleOutline = () => h("div", { class: "icon" }, "✅");
const CreateOutline = () => h("div", { class: "icon" }, "📝");
const RefreshOutline = () => h("div", { class: "icon" }, "🔄");
const TimeOutline = () => h("div", { class: "icon" }, "⏰");

export const tabs = [
  { id: "profile", label: "Профиль", icon: PersonOutline },
  { id: "settings", label: "Настройки", icon: SettingsOutline },
  { id: "security", label: "Безопасность", icon: ShieldOutline },
  { id: "activity", label: "Активность", icon: AnalyticsOutline },
];

export {
  PersonOutline,
  SettingsOutline,
  ShieldOutline,
  AnalyticsOutline,
  BusinessOutline,
  CrownOutline,
  CheckmarkCircleOutline,
  CreateOutline,
  RefreshOutline,
  TimeOutline
};
