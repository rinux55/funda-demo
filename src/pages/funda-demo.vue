<script setup lang="ts">
import FundaCard from "@/components/funda-card.vue"
</script>

<template>
  <suspense>
    <funda-card id="c8167628-0c8e-488b-9033-c81ae2679256" />
    <!--I'd probably implement some cool placeholders with some more time-->
    <template #fallback> Loading... </template>
  </suspense>
</template>
