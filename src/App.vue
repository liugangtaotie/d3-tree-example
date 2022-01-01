<template>
  <div id="app" class="flex flex_center">
    <router-view />
  </div>
</template>

<script setup lang="ts">
</script>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>
