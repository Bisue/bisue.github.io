<template>
  <div class="screenshots-container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.screenshots-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}

.screenshots-container img {
  box-sizing: border-box;
  width: 33.3%;
  border-radius: 16px;
  padding: 8px;
  /* border: 1px solid lightgray; */
}

@media (max-width: 719px) {
  .screenshots-container > img {
    width: 50% !important;
  }
}

@media (max-width: 419px) {
  .screenshots-container > img {
    width: 100% !important;
  }
}
</style>
