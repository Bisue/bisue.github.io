import { navbar } from "vuepress-theme-hope";

export const koNavbar = navbar([
  "/",
  "/intro",
  {
    text: "카테고리",
    icon: "table",
    link: "/category/",
  },
  {
    text: "프로젝트",
    icon: "layer-group",
    // link: "/projects/",
    prefix: "/projects/",
    children: ["laravel-wrapper", "epalimi"],
  },
  {
    text: "게시글",
    icon: "rectangle-list",
    prefix: "/posts/",
    children: ["dairy/", "tips/", "pusher-chat-app/"],
  },
]);
