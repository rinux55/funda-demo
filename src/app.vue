<script setup lang="ts">
import { RouterView } from "vue-router"
</script>

<template>
  <header></header>
  <main>
    <router-view />
  </main>
</template>

<style scoped>
main {
  @apply p-10;
}
</style>
