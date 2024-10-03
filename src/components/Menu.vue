<script setup>
import { onMounted, ref, computed } from 'vue';
import Footer from './Footer.vue';

const tab = ref('Appetizers')

const items = ref([
  {
    src: '../assets/pic/fullmenu.jpg',
    type: 'Appetizers'
  },
  {
    src: '../assets/pic/fullmenu2.jpg',
    type: 'Entrees'
  },
  {
    src: '../assets/pic/fullmenu.jpg',
    type: 'Deserts'
  },
])

const getLocalImage = (url) => {
  return new URL(`${url}`, import.meta.url).href
}


</script>

<template>
  <!-- <img 
  src="../assets/pic/fullmenu.jpg"> -->


  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 text-basil">
        CARiBBEAN GRiLL
      </h1>
    </v-card-title>

    <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
      <v-tab v-for="item in items" :key="item.type" :text="item.type" :value="item.type"></v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item v-for="item in items" :key="item" :value="item.type">
        <v-card color="basil" flat>

          <v-flex>
            <v-img :src="getLocalImage(item.src)" aspect-ratio="1" contain></v-img>
          </v-flex>





        </v-card>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>


</template>


<style>
/* Helper classes */
.bg-basil {
  background-color: #ffffff !important;
}

.text-basil {
  color: #356859 !important;
}
</style>