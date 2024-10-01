<script setup>
import { onMounted, ref, computed } from 'vue';
import { RouterLink } from 'vue-router';

const items =ref([
      {
        src: 'https://s3-media0.fl.yelpcdn.com/bphoto/GcUBhQN416ZrYPtHT9KDmw/o.jpg',
      },
      {
        src: 'https://img.freepik.com/free-photo/man-with-dreads-jamaica_23-2151532112.jpg',
      },
      {
        src: 'https://media.istockphoto.com/id/1619396722/photo/afro-haired-latina-woman-waitress-serves-an-afro-latin-woman-who-goes-to-the-restaurant-to.jpg?s=612x612&w=0&k=20&c=_tcHLfMhv7Yb-73kJJZZ1ZC69DhtgNZz-eJzVRp-MV4=',
      },
      {
        src: 'https://media.istockphoto.com/id/1196385250/photo/dining-room-buffet-aboard-the-luxury-abstract-cruise-ship.jpg?s=612x612&w=0&k=20&c=aoCb2Ce2jFfkMXiFVXTENlguCuL2tU-07lDdtULzHZQ=',
      },
])

const menus =ref([
      {
        src: 'https://s3-media0.fl.yelpcdn.com/bphoto/HgtZGVDh4OWrFRCfT2YMTA/o.jpg',
      },
      {
        src: 'https://s3-media0.fl.yelpcdn.com/bphoto/DKhKIiohIev7-ZDhVAOgCA/o.jpg',
      },
      {
        src: 'https://s3-media0.fl.yelpcdn.com/bphoto/F10Y9r2d_IvrrwyXvBAsYA/o.jpg',
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

     
        <v-container class="mt-10 mb-10">
          <h1>WELCOME TO CARIBBEAN GRILL</h1>
          <p>Caribbean Grill offers a vibrant taste of the islands with delicious jerk chicken, spicy shrimp, and fresh seafood, all expertly grilled. Enjoy a lively atmosphere and refreshing cocktails for a true tropical escape!</p>
        </v-container>


        <v-container class="pa-10 text-center mb-10 mt-10 bg-teal">
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
                :src="menu.src"
                cover
            ></v-img>
            <v-card-text class="text-h6 text-black d-flex flex-column">
              menu name
            </v-card-text>
            
              </v-card>
            </v-hover>
            </v-col>
          </template>

            <RouterLink to="/menu">
            <v-btn class="mt-10">
              VIEW OUR FULL MENU
            </v-btn>
         </RouterLink>

          

        </v-row>
        </v-container>


      
        <v-container class="mt-10 mb-10">
          <h1>OPEN HOURS</h1>
          <p>EVERYDAY</p>
          <p>11 AM–9 PM</p>
        </v-container>
  

    </v-app>
  </v-responsive>
</template>