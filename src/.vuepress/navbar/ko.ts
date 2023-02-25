import { navbar } from "vuepress-theme-hope";

export const koNavbar = navbar([
  "/",
  { text: "데모", icon: "discover", link: "/demo/" },
  {
    text: "게시글",
    icon: "edit",
    prefix: "/posts/",
    children: [
      {
        text: "사과",
        icon: "edit",
        prefix: "apple/",
        children: [
          { text: "사과 1", icon: "edit", link: "1" },
          { text: "사과 2", icon: "edit", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "바나나",
        icon: "edit",
        prefix: "banana/",
        children: [
          {
            text: "바나나 1",
            icon: "edit",
            link: "1",
          },
          {
            text: "바나나 2",
            icon: "edit",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "체리", icon: "edit", link: "cherry" },
      { text: "용과", icon: "edit", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 문서",
    icon: "note",
    link: "https://theme-hope.vuejs.press/",
  },
]);
