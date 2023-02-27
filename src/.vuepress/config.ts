import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  title: "비수의 개발 창고",
  base: "/",

  lang: "ko-KR",
  locales: {
    "/": {
      lang: "ko-KR",
    },
  },

  head: [
    // Link google fonts - korean supported fonts
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200;300;400;500;600;700;900&display=swap",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@400;700&display=swap",
        rel: "stylesheet",
      },
    ],
  ],

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
