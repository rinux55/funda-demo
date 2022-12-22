<script setup lang="ts">
import { computed, ref } from "vue"
const props = defineProps<{
  id: string
}>()

const hasError = ref(false)

try {
  // I had some CORS issues loading the API through localhost. I needed to create a proxy to be able to load the API.
  const url = `${import.meta.env.VITE_HEROKU_CORS_PROXY}${
    import.meta.env.VITE_FUNDA_API_URL
  }/json/detail/${import.meta.env.VITE_FUNDA_API_KEY}/koop/${props.id}/`

  const response = await fetch(url)

  const listing = await response.json()

  const images = computed(() =>
    listing["Media-Foto"].map((str) => str.replace("klein", "grotere"))
  )
  const amount = computed(() =>
    Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(
      listing.KoopPrijs
    )
  )
  const address = listing.Adres
} catch (error) {
  hasError.value = true
}

</script>
<template>
  <slot name="default" :listing="{ images, amount, address }"></slot>
</template>
