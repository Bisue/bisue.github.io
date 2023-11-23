<template>
  <span :style="{ 'font-weight': props.weight, color: props.color }">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    weight: number;
    color: string;
  }>(),
  {
    weight: 500,
    color: "#22c55e",
  }
);
</script>

<style></style>
