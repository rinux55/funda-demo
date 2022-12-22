<script setup lang="ts">
import { useFundaListing } from "@/composables/funda-listing"
import UiCarousel from "@/components/ui/ui-carousel.vue"
import UiCard from "@/components/ui/ui-card.vue"

const props = defineProps<{
  id: string
}>()

const { data, error, loading } = useFundaListing(props.id)
</script>
<template>
  <ui-card class="funda-card">
    <template v-if="loading && !error">
      <!-- @todo I'd implement a nice placeholder here so the content doesn't shift -->
      Loading...
    </template>
    <template v-if="error && !loading">
      <!-- @todo I'd implement some better error feedback here -->
      Something went wrong...
    </template>
    <template v-if="!loading && !error">
      <ui-carousel :images="data.images"></ui-carousel>
      <div class="funda-card-content">
        <div>
          <h2 class="funda-card-title">
            {{ data.address }}
          </h2>
          <div class="font-medium text-2xl mt-4 text-gray-500">
            {{ data.price }}
          </div>
        </div>
        <div class="text-right align-middle">
          <a
            :href="data.URL"
            target="_blank"
            class="button"
            title="Bekijk op Funda"
            >Bekijk op Funda</a
          >
        </div>
      </div>
    </template>
    <template v-if="error">
      <!--Implement some more elaborate error feedback-->
      Er is iets misgegaan.
    </template>
  </ui-card>
</template>
<style scoped lang="scss">
.funda-card {
  @apply max-w-900px m-auto;
}

.funda-card-title {
  @apply text-4xl;
}

.funda-card-content {
  @apply grid grid-cols-2 p-5;
}

.button {
  @apply p-3 text-blue-500 font-bold bg-gray-100 border-gray-300 border rounded-lg shadow-sm 
  hover:text-blue-600 hover:border-gray-400
  focus:ring-blue-200 focus:ring-3 focus focus:border-blue-400

  transition-all;
}
</style>
