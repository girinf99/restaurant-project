<script setup>

const getLocalImage = (url) => {
  return new URL(`${url}`, import.meta.url).href
}

const props = defineProps({
  url: {
    type: String,
    required: true
  },
  width: {
    type: Number,
    required: true
  }
})

</script>

<template>

  <v-img :src="getLocalImage(url)" class="logo" contain :max-width="width" />

</template>