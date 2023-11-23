import { defineClientConfig } from "@vuepress/client";
import TextHighlight from "./components/TextHighlight.vue";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("TextHighlight", TextHighlight);
  },
});
