import { sidebar } from "vuepress-theme-hope";

export const koSidebar = sidebar({
  "/": [
    "",
    "intro",
    {
      text: "게시글",
      icon: "list-ul",
      prefix: "posts/",
      children: "structure",
    },
  ],
});
