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

console.log(listing)
const images = computed(() =>
  listing["Media-Foto"].map((str) => str.replace("klein", "groot"))
)
</script>
<template>
  <div>
    test {{ listing.Adres }}
    <ui-carousel :images="images"></ui-carousel>
  </div>
</template>
