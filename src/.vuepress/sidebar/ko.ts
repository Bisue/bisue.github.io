import { sidebar } from "vuepress-theme-hope";

export const koSidebar = sidebar({
  "/": [
    "",
    "intro",
    {
      text: "게시글",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
  ],
});
