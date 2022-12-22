<script setup lang="ts">
import FundaCard from "@/components/funda/funda-card.vue"

const id = import.meta.env.VITE_FUNDA_LISTING_ID
</script>

<template>
  <funda-card :id="id" />
</template>
