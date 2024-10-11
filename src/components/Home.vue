<script setup>
import { RouterLink } from 'vue-router';
import homeData from './json/homeData.json'

const getLocalImage = (url) => {
  return new URL(`${url}`, import.meta.url).href
}
</script>

<template>
  <v-responsive class="border rounded">
    <v-app>
      <v-carousel hide-delimiters>
        <template v-slot:prev="{ props }">
          <v-btn icon="mdi-arrow-left" variant="flat" @click="props.onClick" color="white"></v-btn>
        </template>
        <template v-slot:next="{ props }">
          <v-btn icon="mdi-arrow-right" variant="flat" @click="props.onClick" color="white"></v-btn>
        </template>

        <v-carousel-item v-for="(item, i) in homeData[0].items" :key="i" :src="getLocalImage(item.src)" cover></v-carousel-item>
      </v-carousel>



      <v-container class="mt-10 mb-10">
        <h1 class="text-teal-darken-3">WELCOME TO {{ homeData[2].intro[0].name }}</h1>
        <p>{{ homeData[2].intro[0].welcome }}</p>
      </v-container>


      <v-container class="full-height text-center bg-teal-lighten-5" style="max-width: 100%">
        <!-- style="max-width: 1280px; margin-left: auto; margin-right:auto; height:480px" -->
        <div class="mb-8">
          <h1 class="text-teal-darken-3 mb-5">OUR MENU</h1>
          <v-row align="center" class="full-height" justify="center">
            <template v-for="(menu, i) in homeData[1].menus" :key="i">
              <v-col cols="12" md="4">
                <v-hover v-slot="{ isHovering, props }" open-delay="200">
                  <v-card :class="{ 'on-hover': isHovering }" :elevation="isHovering ? 16 : 2" class="mx-auto "
                    height="h-auto" max-width="300" v-bind="props">
                    <v-img :src="getLocalImage(menu.src)" height="250px" cover></v-img>
                    <v-card-text class="bg-teal-darken-3 text-white text-h6 d-flex flex-column">
                      {{ menu.name }}
                    </v-card-text>

                  </v-card>
                </v-hover>
              </v-col>
            </template>

            <RouterLink to="/menu">
              <v-btn class="mt-7 text-teal-darken-3">
                VIEW OUR FULL MENU
              </v-btn>
            </RouterLink>
          </v-row>
        </div>
      </v-container>



      <v-container class="mt-11 mb-10 ">
        <h1 class="text-teal-darken-3">OPEN HOURS</h1>
        <p>EVERYDAY</p>
        <p>11 AM–9 PM</p>
      </v-container>


    </v-app>
  </v-responsive>
</template>


<style>
.v-btn .v-btn__content .v-icon {
  color: black;
}
</style>