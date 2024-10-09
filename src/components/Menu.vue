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

const ZoomPan = (e) => {
  const container = this.getBoundingClientRect();

  const mouseX = e.clientX - container.left;
  const mouseY = e.clientY - container.top;

  const originX = (mouseX / this.offsetWidth) * 100;
  const originY = (mouseY / this.offsetHeight) * 100;

  this.getElementsByClassName("zoom-img")[0].style.transformOrigin = `${originX}% ${originY}%`;
}

var allContainers = document.getElementsByClassName("zoom-container");

Array.from(allContainers).forEach(function (c) {
  c.addEventListener("mousemove", ZoomPan);
});

</script>

<template>
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
          <v-flex class="zoom-container">
            <v-img :src="getLocalImage(item.src)" aspect-ratio="1" contain class="zoom-img"></v-img>
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

.zoom-container {
  width: 180px;
  height: 180px;
  margin: auto;
  overflow: hidden;
}

.zoom-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /*  or contain  */
  cursor: crosshair;
  transition: 0.2s;
  transform: scale(1);
  transform-origin: 0% 0%;
}

.zoom-img:hover {
  transform: scale(2);
  transition: none;
}
</style>