import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Menu from '@/components/Menu.vue';
import About from '@/components/About.vue';
import ContactUs from '@/components/ContactUs.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/contact-us',
      name: 'contactus',
      component: ContactUs,
    }
  ],
});

export default router;
