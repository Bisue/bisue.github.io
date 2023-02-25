import { navbar } from "vuepress-theme-hope";

export const koNavbar = navbar([
  "/",
  { text: "데모", icon: "globe", link: "/demo/" },
  {
    text: "게시글",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "사과",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "사과 1", icon: "pen-to-square", link: "1" },
          { text: "사과 2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "바나나",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "바나나 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "바나나 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "체리", icon: "pen-to-square", link: "cherry" },
      { text: "용과", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 문서",
    icon: "book",
    link: "https://theme-hope.vuejs.press/",
  },
]);
