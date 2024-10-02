<script setup>
import { onMounted, ref, computed } from 'vue';

const slides = ref([
  {
    src: 'https://www.washingtonpost.com/resizer/TbeXfB7cfOE7Fj-M_b5M2uITfZM=/arc-anglerfish-washpost-prod-washpost/public/Y6WOYCGPR4I6VATLZQ4U3ASOGU.jpg',
  },
  {
    src: '../assets/pic/menu4.jpg',
  },
  {
    src: '../assets/pic/menu5.jpg',
  },
])

const pics = ref([
  {
    src: '../assets/pic/chef1.jpg',
  },
  {
    src: '../assets/pic/chef2.jpg',
  },
  {
    src: '../assets/pic/chef3.jpg',
  },
])


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

    <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="getLocalImage(slide.src)" cover>
    </v-carousel-item>
  </v-carousel>

  <v-container class="mt-10">
    <h1 class="text-teal-darken-3">About Caribbean Grill</h1>
    <p>Welcome to Caribbean Grill, where the vibrant flavors of the islands come alive! Nestled in the heart of DC,
      we are dedicated to bringing you an authentic taste of the Caribbean, infused with a passion for fresh
      ingredients and traditional cooking methods.</p>
    <br>
    <h3 class="text-teal-darken-3">Our Story</h3>
    <p>Caribbean Grill was born from a love for the rich culinary traditions of the Caribbean. Our founders, [Founders'
      Names], grew up savoring the mouthwatering dishes of their childhood, from spicy jerk chicken to tangy seafood
      stews. Inspired by the diverse cultures and flavors that define the Caribbean, we set out to create a dining
      experience that transports our guests to sun-soaked beaches and lively festivals.</p>
    <br>
    <h3 class="text-teal-darken-3">Our Mission</h3>
    <p>At Caribbean Grill, our mission is simple: to serve delicious, authentic Caribbean cuisine made with love. We
      believe that food is more than just sustenance; it’s a celebration of culture and community. We source the
      freshest
      local ingredients, ensuring that every dish bursts with flavor and authenticity.</p>
    <br>
    <h3 class="text-teal-darken-3">Join Us</h3>
    <p>We invite you to come and experience the warmth of our hospitality and the explosion of flavors that define the
      Caribbean. Whether you're dining in with friends and family or grabbing a meal to go, we look forward to sharing
      our
      passion for Caribbean food with you. Thank you for choosing Caribbean Grill!</p>

  </v-container>

  <v-container class="mt-10 mb-15">
    <v-row>
      <v-col v-for="pic in pics">
        <v-img class="fill-height" :src="getLocalImage(pic.src)"></v-img>
      </v-col>
    </v-row>
  </v-container>

</template>
