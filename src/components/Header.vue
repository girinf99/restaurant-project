<script setup>
import { onMounted, ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <!-- <v-responsive class="border rounded"> -->
      <v-app-bar 
        :elevation="2"
        title="Carribean Grill">
       
        <RouterLink to="/">
          <v-btn>
           Home
          </v-btn>
        </RouterLink>
      
        <RouterLink to="/about">
          <v-btn>
           About
          </v-btn>
        </RouterLink>

        <RouterLink to="/menu">
          <v-btn>
           Menu
          </v-btn>
        </RouterLink>
        

        <RouterLink to="/contact-us">
          <v-btn>
           Contact Us
          </v-btn>
        </RouterLink>
     
      </v-app-bar>
  <!-- </v-responsive>  -->
</template>
