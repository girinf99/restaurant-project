<script setup>
import { onMounted, ref, computed } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import localImage from './localImage.vue';

const router = useRouter()
const getLink = () => {
  router.push('/')
}

const drawer = ref(null)

const items = ref([
  {
    link: 'Home',
    route: '/'
  }, {
    link: 'About',
    route: '/about'
  }, {
    link: 'Menu',
    route: '/menu'
  }, {
    link: 'Contact Us',
    route: '/contact-us'
  },
])

const goTo = (link) => {
  router.push(link)
}

</script>

<template v-slot:extension>
  <v-app-bar-nav-icon @click="drawer = true" class="d-flex d-sm-none"></v-app-bar-nav-icon>

  <v-app-bar :elevation="2" height="100" prominent class="d-none d-sm-flex">
    <localImage :url="'../assets/pic/logo2.png'" :width="400" :link="getLink" />
    <v-app-bar-title class="text-h5"></v-app-bar-title>

    <v-btn v-for="(item, index) in items" :key="index" @click="goTo(item.route)" variant="plain"
      class="text-teal-darken-3 text-body-1 text-uppercase">
      {{ item.link }}
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary>
    <v-list nav dense>
      <v-list-item-group>
        <v-list-item v-for="(item, index) in items" :key="index" @click="goTo(item.route)">
          <v-list-item-title>{{ item.link }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
