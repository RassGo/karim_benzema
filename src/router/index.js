import { createRouter, createWebHistory } from 'vue-router'
import professinelsPage from "../components/Page/professionelsPage.vue";
import homePage from "../components/Page/HomePage.vue"
import particuliersPage from "../components/Page/particuliersPage.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { transition: 'slide-right' },
    component: homePage,
  },
  {
    path: '/particuliers',
    name: 'Particuliers',
    meta: { transition: 'slide-right' },
    component: particuliersPage,
  },
  {
    path: '/professionels',
    name: 'Professionels',
    meta: { transition: 'slide-right' },
    component: professinelsPage,
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;