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
    <template v-if="loading && !error">
      <!-- @todo I'd implement a nice placeholder here so the content doesn't flash -->
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
          <h2 class="text-4xl">
            {{ data.address }}
          </h2>
          <div class="font-medium text-2xl mt-4 text-gray-500">
            {{ data.price }}
          </div>
        </div>
        <div class="funda-card-actions">
          <ui-button
            :to="data.url"
            title="Bekijk huis op Funda..."
            class="button"
          >
            Bekijk op Funda
          </ui-button>
        </div>
      </div>
    </template>
  </ui-card>
</template>
<style scoped lang="scss">
.funda-card {
  @apply max-w-900px m-auto;
}

.funda-card-content {
  @apply grid grid-cols-1 gap-5 p-5 lg:(grid-cols-2 );
}

.funda-card-actions {
  @apply lg:(text-right);
}

.button {
  @apply block lg:inline-block align-bottom;
}
</style>
