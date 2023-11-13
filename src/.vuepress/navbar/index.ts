import { readdirSync } from "fs";
import { resolve } from "path";
import { navbar } from "vuepress-theme-hope";

function getDirs(path: string) {
  return readdirSync(resolve(path), { withFileTypes: true })
    .filter((f) => f.isDirectory())
    .map((d) => d.name);
}

function getMarkdowns(path: string) {
  return readdirSync(resolve(path), { withFileTypes: true })
    .filter(
      (f) =>
        !f.isDirectory() && f.name.endsWith(".md") && f.name !== "README.md"
    )
    .map((f) => f.name.replace(".md", ""));
}

const srcPath = resolve(__dirname, "../../");

const categories = getDirs(resolve(srcPath, "posts"));

const projects = getDirs(resolve(srcPath, "projects")).reduce((proj, type) => {
  proj[type] = getMarkdowns(resolve(srcPath, "projects", type));

  return proj;
}, {});

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
        children: projects["outsourcing"],
      },
      {
        text: "사이드",
        icon: "layer-group",
        prefix: "personal/",
        children: projects["personal"],
      },
      {
        text: "대학 및 공모전",
        icon: "layer-group",
        prefix: "university/",
        children: projects["university"],
      },
    ],
  },
  {
    text: "게시글",
    icon: "rectangle-list",
    prefix: "/posts/",
    children: categories,
  },
]);
