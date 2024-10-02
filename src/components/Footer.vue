<script setup>
import { onMounted, ref, computed } from 'vue';

const icons = ref([
  {
    icon: 'mdi-facebook',
    link: `https://www.facebook.com/`
  }, {
    icon: 'mdi-twitter',
    link: `https://www.twitter.com/`
  }, {
    icon: 'mdi-instagram',
    link: `https://www.instagram.com/`
  }, {
    icon: 'mdi-email-outline',
    link: `https://www.gmail.com/`
  }
])

</script>

<template>
  <v-footer class="text-center d-flex flex-column">
    <div>
      <v-btn v-for="icon in icons" :key="icon.icon" :icon="icon.icon" class="mx-4" variant="text"
        :href="icon.link"></v-btn>
    </div>
    <div class="pt-0">
      5183 Lee Hwy, Arlington, VA 22207
    </div>
    <div class="pt-0">
      Cuban & Latin American Cuisine
    </div>

    <v-divider></v-divider>

    <div>
      ©Copyright 2024 — <strong>Caribbean Grill</strong>
    </div>
  </v-footer>
</template>

<style>
footer {
  background-color: #356859 !important;
  color: rgb(255, 255, 255) !important;
}

.mdi-facebook,
.mdi-twitter,
.mdi-instagram,
.mdi-email-outline {
  color: white !important;
}
</style>
