<script setup lang="ts"></script>
<template>
  <div class="ui-card">
    <slot name="header" />
    <slot name="content" />
    <slot name="footer" />
  </div>
</template>
<style scoped>
.ui-card {
  @apply bg-light-300 border-black border-opacity-15 border rounded-lg shadow-lg;
}
</style>
