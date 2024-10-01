<script setup>
import { onMounted, ref, computed } from 'vue';

const slides =ref([
      {
        src: 'https://www.washingtonpost.com/resizer/TbeXfB7cfOE7Fj-M_b5M2uITfZM=/arc-anglerfish-washpost-prod-washpost/public/Y6WOYCGPR4I6VATLZQ4U3ASOGU.jpg',
      },
      {
        src: 'https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/440164.jpg',
      },
      {
        src: 'https://i.ytimg.com/vi/pIWW_Rie_Vk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBkUbuZBiFusXO7Pv83mrhPB1Z55A',
      },
])

const pics = ref([
      {
        src: 'https://www.escoffier.edu/wp-content/uploads/2022/03/Chef-in-uniform-posing-for-a-photo-in-a-kitchen-1400.jpg',
      },
      {
        src: 'https://www.nmbt.co.za/uploads/1/image/top_gqeberha_chef_earned_his_stars_and_stripes_overseas.jpg',
      },
      {
        src: 'https://foodie.sysco.com/wp-content/uploads/2019/07/MarcusMeansChefProfile_800x850.jpg',
      },
])
</script>

<template>
  <v-carousel
    height="600"
    progress="primary"
    hide-delimiters
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.src"
      cover
    >
    </v-carousel-item>
  </v-carousel>

  <v-container class="mt-10">
    <h1>About Caribbean Grill</h1>
      <p>Welcome to Caribbean Grill, where the vibrant flavors of the islands come alive! Nestled in the heart of [Your City], we are dedicated to bringing you an authentic taste of the Caribbean, infused with a passion for fresh ingredients and traditional cooking methods.</p>
    <br>
    <h3>Our Story</h3>
      <p>Caribbean Grill was born from a love for the rich culinary traditions of the Caribbean. Our founders, [Founders' Names], grew up savoring the mouthwatering dishes of their childhood, from spicy jerk chicken to tangy seafood stews. Inspired by the diverse cultures and flavors that define the Caribbean, we set out to create a dining experience that transports our guests to sun-soaked beaches and lively festivals.</p>
    <br>
    <h3>Our Mission</h3>
      <p>At Caribbean Grill, our mission is simple: to serve delicious, authentic Caribbean cuisine made with love. We believe that food is more than just sustenance; it’s a celebration of culture and community. We source the freshest local ingredients, ensuring that every dish bursts with flavor and authenticity.</p>
    <br>
    <h3>Join Us</h3>
    <p>We invite you to come and experience the warmth of our hospitality and the explosion of flavors that define the Caribbean. Whether you're dining in with friends and family or grabbing a meal to go, we look forward to sharing our passion for Caribbean food with you. Thank you for choosing Caribbean Grill!</p>
  </v-container>

  <v-container>
    <v-row>
      <v-col>
        <v-img 
        class="w-25 h-25"
        v-for="pic in pics"
        :src="pic.src"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
 
</template>


