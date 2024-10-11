<script setup>
import { ref } from 'vue';
import menuData from './json/menuData.json'

const tab = ref('Appetizers')

const getLocalImage = (url) => {
  return new URL(`${url}`, import.meta.url).href
}

</script>

<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 text-basil">
        CARiBBEAN GRiLL
      </h1>
    </v-card-title>

    <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
      <v-tab v-for="item in menuData" :key="item.type" :text="item.type" :value="item.type"></v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item v-for="item in menuData" :key="item" :value="item.type">
        <v-card color="basil" flat>
          <v-flex class="zoom-container">
            <v-img :src="getLocalImage(item.src)" aspect-ratio="2" contain class="zoom-img"></v-img>
          </v-flex>
        </v-card>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>
</template>


<style>
.bg-basil {
  background-color: #ffffff !important;
}

.text-basil {
  color: #356859 !important;
}
</style>