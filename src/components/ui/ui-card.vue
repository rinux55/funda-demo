<script setup lang="ts"></script>
<template>
  <section class="ui-card">
    <slot />
  </section>
</template>
<style scoped>
.ui-card {
  @apply bg-light-300 border-black border-opacity-15 border rounded-lg shadow-lg;
}
</style>
