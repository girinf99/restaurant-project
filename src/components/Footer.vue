<script setup>
import { onMounted, ref, computed } from 'vue';

const  icons = ref([
        'mdi-facebook',
        'mdi-twitter',
        'mdi-instagram',
        'mdi-email-outline',
      ])

</script>

<template>
  <v-footer
    class="bg-teal-lighten-4 text-center d-flex flex-column"
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        variant="text"
      ></v-btn>
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


