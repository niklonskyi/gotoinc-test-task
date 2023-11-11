import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ParcelCreationView from '../views/ParcelCreationView.vue'
import ParcelTableView from '../views/ParcelTableView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/new-request',
      name: 'newRequest',
      component: ParcelCreationView
    },
    {
      path: '/parcel-table',
      name: 'parcelTable',
      component: ParcelTableView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFoundView
    }
  ]
})

export default router
