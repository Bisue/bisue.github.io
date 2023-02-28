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
    link: "/projects/",
  },
  {
    text: "게시글",
    icon: "list-ul",
    link: "/posts/",
    // prefix: "/posts/",
    // children: [
    //   {
    //     text: "개발 팁",
    //     icon: "pen-to-square",
    //     prefix: "tips/",
    //     children: ["SSL-unsafe-legacy-renegotiation"],
    //   },
    //   {
    //     text: "실시간 채팅 앱 만들기 (Pusher)",
    //     icon: "pen-to-square",
    //     prefix: "pusher-chat-app/",
    //     children: ["1", "2", "3", "4", "5"],
    //   },
    // ],
  },
]);
