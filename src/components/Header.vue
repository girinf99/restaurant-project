<script setup>
import { onMounted, ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import localImage from './localImage.vue';

</script>

<template>
  <!-- <v-responsive class="border rounded"> -->
  <v-app-bar :elevation="2" height="100">

    <localImage :url="'../assets/pic/logo2.png'" :width="400" />


    <v-app-bar-title class="text-h5"></v-app-bar-title>

    <RouterLink to="/">
      <v-btn class="text-teal-darken-3 text-body-1 text-uppercase">
        Home
      </v-btn>
    </RouterLink>

    <RouterLink to="/about">
      <v-btn class="text-teal-darken-3 text-body-1 text-uppercase">
        About
      </v-btn>
    </RouterLink>

    <RouterLink to="/menu">
      <v-btn class="text-teal-darken-3 text-body-1 text-uppercase">
        Menu
      </v-btn>
    </RouterLink>


    <RouterLink to="/contact-us">
      <v-btn class="text-teal-darken-3 text-body-1 text-uppercase">
        Contact Us
      </v-btn>
    </RouterLink>

  </v-app-bar>
  <!-- </v-responsive>  -->
</template>
