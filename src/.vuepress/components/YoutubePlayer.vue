<template>
  <div class="youtube-player-container">
    <iframe
      class="youtube-player"
      :src="`https://www.youtube-nocookie.com/embed/${props.id}?modestbranding=1`"
      :title="props.title"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup lang="ts">
/**
 * [TODO] iframe 대신 Youtube Player API 사용하기
 * 참고: https://developers.google.com/youtube/iframe_api_reference?hl=ko
 */
const props = defineProps<{
  id: string;
  title: string;
}>();
</script>

<style>
.youtube-player {
  aspect-ratio: 16 / 9;
  width: 100%;
  max-width: 100%;
}
</style>
