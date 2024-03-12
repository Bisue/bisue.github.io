import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";
import { getDirname, path } from "@vuepress/utils";
import { addViteConfig } from "vuepress-shared";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

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
    [
      "script",
      {
        type: "text/javascript",
        src: "//wcs.naver.net/wcslog.js",
      },
    ],
    [
      "script",
      {
        type: "text/javascript",
        src: "/naver-analytics.js",
      },
    ],
  ],

  theme,

  plugins: [
    googleAnalyticsPlugin({
      id: "G-MJL2XKVJ5B",
    }),
    searchProPlugin({
      // index all contents
      indexContent: true,
      // hotkey
      hotKeys: [{ key: "f", ctrl: true }],
      // add supports for category and tags
      customFields: [
        {
          getter: (page) =>
            page.frontmatter.category as string | string[] | null,
          formatter: "카테고리 - $content",
        },
        {
          getter: (page) => page.frontmatter.tag as string | string[] | null,
          formatter: "태그 - $content",
        },
      ],
    }),
  ],

  extendsBundlerOptions: (config, app) => {
    addViteConfig(config, app, {
      css: {
        postcss: {
          plugins: [autoprefixer(), tailwind()],
        },
      },
    });
  },

  alias: {
    "@components": path.resolve(getDirname(import.meta.url), "components"),
  },

  // Enable it with pwa
  // shouldPrefetch: false,
});
