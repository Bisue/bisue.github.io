import { hopeTheme } from "vuepress-theme-hope";
import { koNavbar } from "./navbar/index.js";
import { koSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://bisue.github.io",

  author: {
    name: "변찬혁",
    url: "https://github.com/Bisue",
    email: "bdu00chch@gmail.com",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "docs",

  blog: {
    avatar: "https://avatars.githubusercontent.com/u/40070436?v=4",
    roundAvatar: true,
    sidebarDisplay: "always",
    medias: {
      GitHub: "https://github.com/Bisue",
      // Instagram: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
    },
  },

  fullscreen: true,

  locales: {
    "/": {
      // navbar
      navbar: koNavbar,
      logo: "/assets/icon/cube.svg",
      repo: "https://github.com/Bisue/bisue.github.io",

      // sidebar
      sidebar: koSidebar,

      // footer: "",

      displayFooter: true,

      blog: {
        description: "Fullstack Web Developer",
        intro: "/intro.html",
      },

      metaLocales: {
        author: "작성자",
        editLink: "깃허브에서 수정",
        toc: "목차",
      },

      blogLocales: {
        article: "글",
        category: "카테고리",
        tag: "태그",
        timeline: "타임라인",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: true,

    comment: {
      provider: "Giscus",
      repo: "Bisue/bisue.github.io",
      repoId: "R_kgDOJCVGQA",
      category: "Announcements",
      categoryId: "DIC_kwDOJCVGQM4CUdVY",
      mapping: "pathname",
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
