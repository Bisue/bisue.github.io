import { hopeTheme } from "vuepress-theme-hope";
// import { hopeTheme } from "vuepress-theme-hope/perf";
import { koNavbar } from "./navbar/index.js";
import { koSidebarConfig } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://bisue.github.io",

  author: {
    name: "변찬혁",
    url: "https://github.com/Bisue",
    email: "bdu00chch@gmail.com",
  },

  iconAssets: "fontawesome",

  logo: "/logo.svg",

  editLink: false,

  repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "docs",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag"],

  blog: {
    avatar: "https://avatars.githubusercontent.com/u/40070436?v=4",
    roundAvatar: true,
    // sidebarDisplay: "always",
    articleInfo: ["Author", "Original", "Date", "Category", "Tag"],
    medias: {
      GitHub: "https://github.com/Bisue",
      // Instagram: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
    },
  },

  darkmode: "enable",

  fullscreen: false,

  locales: {
    "/": {
      // navbar
      navbar: koNavbar,
      logo: "/logo.svg",
      repo: "https://github.com/Bisue/bisue.github.io",

      // sidebar
      sidebar: koSidebarConfig,

      // footer: "",

      displayFooter: true,

      blog: {
        description: "Fullstack Web Developer",
        intro: "/intro.html",
      },

      metaLocales: {
        author: "작성자",
        lastUpdated: "마지막 수정",
        readingTime: "읽는 시간",
        toc: "이 페이지에서",
        date: "작성일",
      },

      blogLocales: {
        article: "게시글",
        articleList: "글 목록",
        category: "카테고리",
        tag: "태그",
        timeline: "타임라인",
        timelineTitle: "히스토리",
        all: "전체",
        intro: "프로필",
        star: "스타",
      },

      routeLocales: {
        notFoundMsg: [
          "여기에는 아무것도 없습니다.",
          "어떻게 여기까지 오셨나요?",
          "4-0-4 입니다.",
          "깨진 링크가 있는 것 같습니다.",
        ],
        back: "뒤로가기",
        home: "메인으로",
      },

      paginationLocales: {
        navigate: "페이지",
        action: "이동",
      },

      encryptLocales: {
        placeholder: "비밀번호 입력",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    seo: {
      fallBackImage: "/thumb.png",
    },

    // readingTime: ,

    blog: true,

    comment: {
      provider: "Giscus",
      repo: "Bisue/bisue.github.io",
      repoId: "R_kgDOJCVGQA",
      category: "Announcements",
      categoryId: "DIC_kwDOJCVGQM4CUdVY",
      mapping: "pathname",
      strict: true,
      reactionsEnabled: true,
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
