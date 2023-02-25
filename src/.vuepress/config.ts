import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  title: "비수의 개발 창고",
  base: "/",

  lang: "ko-KR",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
