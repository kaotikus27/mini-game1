import { createRouter, createWebHistory } from 'vue-router'
import PlayPage from '../views/PlayPage.vue'
import About from '../views/AboutView.vue'
import Rankings from '../views/Rankings.vue'

const routes = [

  {
    path: '/play',
    name: 'play',
    component: PlayPage,
    props:true
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    props:true
  },
  {
    path: '/rankings',
    name: 'rankings',
    component: Rankings,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
