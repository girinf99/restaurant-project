<script setup>
import { onMounted, ref, computed} from 'vue';
import { RouterLink } from 'vue-router';

const logoImage = ref('../assets/pic/logo.png')

</script>

<template>
  <!-- <v-responsive class="border rounded"> -->
      <v-app-bar 
        :elevation="2"
        height="100"
        >
        
          <!-- <v-img 
            :src="require('logoImage')" 
            class="logo" 
            contain 
            :max-width="100"
            to="/"
          /> -->
      
        
        <v-app-bar-title>Caribbean Grill</v-app-bar-title>
        <!-- <v-img src="../assets/pic/logo.png"></v-img>
       <div>
        <img src="../assets/pic/logo.png" style="width: 100px;">
       </div> -->
        <RouterLink to="/">
          <v-btn class="bg-white">
           Home
          </v-btn>
        </RouterLink>
      
        <RouterLink to="/about">
          <v-btn class="bg-white">
           About
          </v-btn>
        </RouterLink>

        <RouterLink to="/menu">
          <v-btn class="bg-white">
           Menu
          </v-btn>
        </RouterLink>
        

        <RouterLink to="/contact-us">
          <v-btn class="bg-white">
           Contact Us
          </v-btn>
        </RouterLink>
     
      </v-app-bar>
  <!-- </v-responsive>  -->
</template>
