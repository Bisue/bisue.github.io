import { sidebar } from "vuepress-theme-hope";

export const koSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "데모",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "게시글",
      icon: "note",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
});
