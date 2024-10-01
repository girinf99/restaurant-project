<script setup>
import { onMounted, ref, computed } from 'vue';
import Footer from './Footer.vue';
import { RouterLink } from 'vue-router';
import Header from './Header.vue';

const items =ref([
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      },
])

const menus =ref([
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      },
])
</script>

<template>
  <v-responsive class="border rounded">
    <v-app>
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          cover
          prev-icon="mdi-arrow-left"
          next-icon="mdi-arrow-right"
        ></v-carousel-item>
      </v-carousel> 

      <v-main>
        <v-container>
          <h1>WELCOME TO CARIBBEAN GRILL</h1>
          <p>Caribbean Grill offers a vibrant taste of the islands with delicious jerk chicken, spicy shrimp, and fresh seafood, all expertly grilled. Enjoy a lively atmosphere and refreshing cocktails for a true tropical escape!</p>
        </v-container>
      </v-main>

      <v-main
      class="bg-teal-lighten-1">
        <v-container class="pa-4 text-center">
          <h1>OUR MENU</h1>
          <v-row
            align="center"
            class="fill-height"
            justify="center">
          <template v-for="(menu, i) in menus" :key="i">
            <v-col
              cols="12"
              md="4"
            >
            <v-hover
              v-slot="{ isHovering, props }"
              open-delay="200"
            >
            <v-card
              :class="{ 'on-hover': isHovering }"
              :elevation="isHovering ? 16 : 2"
              class="mx-auto"
              height="300"
              max-width="300"
              v-bind="props"
            >
            <v-img
                :src="menu[0]"
                cover
            ></v-img>
            <v-card-text class="text-h6 text-blackc d-flex flex-column">
              menu name
            </v-card-text>
            
              </v-card>
            </v-hover>
            </v-col>
          </template>

          <RouterLink to="/menu">
            <v-btn>
              VIEW OUR FULL MENU
            </v-btn>
         </RouterLink>

        </v-row>
        </v-container>
      </v-main>

      <v-main>
        <v-container>
          <h1>OPEN HOURS</h1>
          <p>EVERYDAY</p>
          <p>11 AM–9 PM</p>
        </v-container>
      </v-main>

    </v-app>
  </v-responsive>
</template>