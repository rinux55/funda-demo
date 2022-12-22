<script setup lang="ts">
defineProps<{
  to: string
  title: string
}>()
</script>
<template>
  <!--@todo this component should probably render a <button>, with the option to render an <a> with an href,
    but that's out of the scope of this excersise -->
  <a :href="to" target="_blank" class="button" :title="title"><slot /></a>
</template>
<style scoped>
.button {
  @apply p-3 text-center text-blue-500 font-bold bg-gray-100 border-gray-300 border
  rounded-lg shadow-sm transition-all
  hover:text-blue-600 hover:border-gray-400
  focus:ring-blue-200 focus:ring-3 focus focus:border-blue-400;
}
</style>
