<script setup lang="ts">
import "@splidejs/splide/css/core"
import "@splidejs/splide/css/default"
import { Splide, SplideSlide, type Options } from "@splidejs/vue-splide"

defineProps<{
  images: Array<string>
}>()

const splideOptions: Options = {
  rewind: true,
  lazyLoad: "nearby",
  pagination: false,
  preloadPages: 4,
  keyboard: "global",
  wheel: true,
}
</script>

<template>
  <splide :options="splideOptions" class="ui-carousel">
    <splide-slide
      v-for="image in images"
      :key="image"
      class="ui-carousel-slide"
    >
      <!--@todo I'd improve accessibility with providing an
        alt tag, such as the description of the image -->
      <img
        :data-splide-lazy="image"
        class="ui-carousel-image"
        data-test="image"
      />
    </splide-slide>
  </splide>
</template>

<style scoped>
.ui-carousel {
  clip-path: inset(0px round 8px 8px 0px 0px);
}

.ui-carousel-slide {
  @apply bg-black;
}

.ui-carousel-image {
  @apply max-w-full max-h-full object-contain h-full m-auto;
  aspect-ratio: 3/2;
}

:deep(.splide__list) {
  aspect-ratio: 3/2;
}
</style>
