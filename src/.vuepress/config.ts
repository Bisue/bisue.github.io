import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import theme from "./theme.js";

export default defineUserConfig({
  title: "비수의 개발 창고",
  description: "잡다한 개발 경험을 담은 블로그",
  base: "/",

  lang: "ko-KR",

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

  plugins: [
    googleAnalyticsPlugin({
      id: "G-MJL2XKVJ5B",
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
