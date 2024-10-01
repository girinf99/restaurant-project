import './assets/main.css'
import 'vuetify/styles'
import '@/styles/main.scss'
import { createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'
import {mdi} from "vuetify/lib/iconsets/mdi";

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { createApp } from 'vue'
import App from './App.vue'

import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'

import router from './router';

const vuetify = createVuetify({
  theme: {
    defaultTheme: "light",
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
      fa,
    }
  },
  components,
  directives,
});

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app');
