import { sidebar } from "vuepress-theme-hope";

export const koSidebar = sidebar({
  "/": [
    "",
    "intro",
    {
      text: "카테고리",
      icon: "table",
      link: "/category/",
    },
    {
      text: "프로젝트",
      icon: "layer-group",
      // link: "/projects/",
      prefix: "/projects",
      children: [
        {
          text: "LaravelWrapper",
          icon: "layer-group",
          link: "/laravel-wrapper",
        },
        {
          text: "은평알리미",
          icon: "layer-group",
          link: "/epalimi",
        },
      ],
    },
    {
      text: "게시글",
      icon: "list-ul",
      prefix: "posts/",
      children: "structure",
    },
  ],
});
