<script setup lang="ts">
import "@splidejs/splide/css/core"
import { Splide, SplideSlide, type Options } from "@splidejs/vue-splide"

defineProps<{
  images: Array<string>
}>()

const splideOptions: Options = {
  rewind: true,
  lazyLoad: "nearby",
  pagination: false,
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

<style>
.ui-carousel {
  @apply w-full;
}

.ui-carousel-image {
  @apply m-auto;
}
</style>
