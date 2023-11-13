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
    children: [
      {
        text: "외주",
        icon: "layer-group",
        prefix: "outsourcing/",
        children: ["laravel-wrapper", "epalimi"],
      },
      {
        text: "사이드",
        icon: "layer-group",
        prefix: "personal/",
        children: [],
      },
      {
        text: "대학 및 공모전",
        icon: "layer-group",
        prefix: "university/",
        children: ["reward-qna-flatform"],
      },
    ],
  },
  {
    text: "게시글",
    icon: "rectangle-list",
    prefix: "/posts/",
    children: ["dairy/", "tips/", "pusher-chat-app/", "npm-deployment/"],
  },
]);
