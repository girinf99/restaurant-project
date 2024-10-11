<script setup>
// import { onMounted, ref, computed } from 'vue';
import aboutData from './json/aboutData.json'

const getLocalImage = (url) => {
  return new URL(`${url}`, import.meta.url).href
}

</script>

<template>
  <v-carousel height="500" hide-delimiters>
    <template v-slot:prev="{ props }">
      <v-btn icon="mdi-arrow-left" variant="flat" @click="props.onClick" color="white"></v-btn>
    </template>
    <template v-slot:next="{ props }">
      <v-btn icon="mdi-arrow-right" variant="flat" @click="props.onClick" color="white"></v-btn>
    </template>

    <v-carousel-item v-for="(slide, i) in aboutData[2].slides" :key="i" :src="getLocalImage(slide.src)" cover>
    </v-carousel-item>
  </v-carousel>

  <v-container v-for="(description, i) in aboutData[0].description" :key="i">
    <h1 class="text-teal-darken-3 mt-3">{{ description.title }}</h1>
    <p>{{ description.caption }}</p>
  </v-container>

  <v-container class="mt-10 mb-15">
    <v-row>
      <v-col v-for="pic in aboutData[1].pics">
        <v-img class="fill-height" :src="getLocalImage(pic.src)"></v-img>
      </v-col>
    </v-row>
  </v-container>

</template>
