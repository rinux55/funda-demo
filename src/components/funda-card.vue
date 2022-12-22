<script setup lang="ts">
import { computed } from "vue"
import type { FundaListing } from "@/types/funda-listing"
import UiCarousel from "@/components/ui/ui-carousel.vue"
import UiCard from "@/components/ui/ui-card.vue"

const props = defineProps<{
  id: string
}>()

// I had some CORS issues loading the API through localhost. I needed to create a proxy to be able to load the API.
const url = `${import.meta.env.VITE_HEROKU_CORS_PROXY}${
  import.meta.env.VITE_FUNDA_API_URL
}/json/detail/${import.meta.env.VITE_FUNDA_API_KEY}/koop/${props.id}/`

const response = await fetch(url)

const listing: FundaListing = await response.json()

const images = computed(() =>
  listing["Media-Foto"].map((str) => str.replace("klein", "grotere"))
)
const amount = computed(() =>
  Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(
    listing.KoopPrijs
  )
)
</script>
<template>
  <ui-card class="funda-card">
    <ui-carousel :images="images"></ui-carousel>
    <div class="funda-card-content">
      <div>
        <h2 class="funda-card-title">
          {{ listing.Adres }}
        </h2>
        <div class="font-medium text-2xl mt-4 text-gray-500">
          {{ amount }}
        </div>
      </div>
      <div class="text-right align-middle">
        <a
          :href="listing.URL"
          target="_blank"
          class="button"
          title="Bekijk op Funda"
          >Bekijk op Funda</a
        >
      </div>
    </div>
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
