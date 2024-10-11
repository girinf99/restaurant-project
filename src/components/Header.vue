<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import localImage from './localImage.vue';
import headerData from './json/headerData.json'


const isMobile = ref(false)
// Function to check if the current screen size is mobile
const checkIsMobile = () => {
  isMobile.value = window.innerWidth <= 600; // Adjust the threshold as necessary
};

// Set up event listeners for resizing to handle mobile/desktop switches
onMounted(() => {
  checkIsMobile();
  window.addEventListener('resize', checkIsMobile); // Listen for screen size changes
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkIsMobile); // Clean up the event listener
});


const router = useRouter()
const getLink = () => {
  router.push('/')
}

const drawer = ref(false)

const goTo = (link) => {
  router.push(link)
}

</script>

<template v-slot:extension>
  <v-app-bar v-if="isMobile" @click="drawer = !drawer" :elevation="2" class="d-flex d-sm-none" height="64">
    <v-app-bar-nav-icon>
      <v-icon class="text-teal-darken-3">mdi-menu</v-icon>
    </v-app-bar-nav-icon>
    <localImage :url="'../assets/pic/logo2.png'" :width="400" :link="getLink" />
  </v-app-bar>


  <v-app-bar v-else :elevation="2" height="100" prominent class="d-none d-sm-flex" app>
    <localImage :url="'../assets/pic/logo2.png'" :width="400" :link="getLink" />

    <v-app-bar-title class="text-h5"></v-app-bar-title>

    <v-btn v-for="(item, index) in headerData" :key="index" @click="goTo(item.route)" variant="plain"
      class="text-teal-darken-3 text-body-1 text-uppercase">
      {{ item.link }}
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary class="bg-teal-darken-3">
    <v-list nav dense>
      <v-list-item-group>
        <v-list-item v-for="(item, index) in headerData" :key="index" @click="goTo(item.route)">
          <v-list-item-title>{{ item.link }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.v-application {
  margin: 0;
}

.v-app-bar {
  margin: 0;
  padding: 0;
}
</style>