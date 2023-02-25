import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "ko-KR",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
