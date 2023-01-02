<script setup lang="ts">
import { useFundaListing } from "@/composables/funda-listing"
import UiCarousel from "@/components/ui/ui-carousel.vue"
import UiCard from "@/components/ui/ui-card.vue"
import UiButton from "@/components/ui/ui-button.vue"

const props = defineProps<{
  id: string
}>()

const { data, error, loading } = useFundaListing(props.id)
</script>
<template>
  <ui-card class="funda-card">
    <div
      v-if="loading && !error"
      data-test="loading-wrapper"
      class="state-wrapper"
    >
      <!-- @todo I'd implement a nice placeholder here so the content doesn't flash -->
      Laden...
    </div>
    <div
      v-if="error && !loading"
      data-test="error-wrapper"
      class="state-wrapper"
    >
      <!-- @todo I'd implement some better error feedback here -->
      Er is iets misgegaan...
    </div>
    <div v-if="!loading && !error" data-test="content-wrapper">
      <ui-carousel :images="data.images" />
      <div class="funda-card-content">
        <h2 data-test="listing-address" class="listing-address">
          {{ data.address }}
        </h2>
        <div data-test="listing-price" class="listing-price">
          {{ data.price }}
        </div>
        <div class="funda-card-actions">
          <ui-button
            data-test="listing-action"
            :to="data.url"
            title="Bekijk huis op Funda..."
            class="listing-action"
          >
            Bekijk op Funda
          </ui-button>
        </div>
      </div>
    </div>
  </ui-card>
</template>
<style scoped lang="scss">
.funda-card {
  @apply max-w-900px m-auto;
}

.funda-card-content {
  @apply p-5 grid grid-cols-1 gap-4 lg:(grid-cols-2);
}

.funda-card-actions {
  @apply lg:(text-right row-start-1 col-start-2);
}

.listing-action {
  @apply block lg:inline-block align-bottom;
}

.listing-address {
  @apply text-4xl;
}

.listing-price {
  @apply font-medium text-2xl text-gray-500 col-start-1;
}

.state-wrapper {
  @apply p-5 text-lg text-gray-500;
}
</style>
