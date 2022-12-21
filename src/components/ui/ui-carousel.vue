<script setup lang="ts">
import "@splidejs/splide/css/core"
import "@splidejs/splide/css"
import { Splide, SplideSlide, type Options } from "@splidejs/vue-splide"

defineProps<{
  images: Array<string>
}>()

const splideOptions: Options = {
  rewind: true,
  lazyLoad: "nearby",
  pagination: false,
  preloadPages: 4,
  arrows: false,
}
</script>

<template>
  <splide :options="splideOptions" class="ui-carousel">
    <splide-slide v-for="image in images" :key="image">
      <img
        :data-splide-lazy="image"
        alt=""
        class="ui-carousel-image"
        data-test="image"
      />
    </splide-slide>
  </splide>
</template>

<style scoped>
.ui-carousel {
  clip-path: inset(0% 100% 0% 100% round 8px);
}

.ui-carousel-image {
  @apply max-w-full max-h-full object-contain;
}
</style>
