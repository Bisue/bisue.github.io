import { sidebar } from "vuepress-theme-hope";

export const koSidebar = sidebar({
  "/": [
    "",
    {
      icon: "globe",
      text: "데모",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "게시글",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
});
