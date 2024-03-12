import { defineClientConfig } from "@vuepress/client";
import TextHighlight from "./components/TextHighlight.vue";
import YoutubePlayer from "./components/YoutubePlayer.vue";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("TextHighlight", TextHighlight);
    app.component("YoutubePlayer", YoutubePlayer);
  },
});
