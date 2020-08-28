import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../screens/start-screen.vue'
import Game from '../screens/game-screen.vue'
import Stats from '../screens/stats-screen.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
  },
  {
    path: '/stats',
    name: 'Stats',
    component: Stats,
  }
]

const router = new VueRouter({
  routes
})

export default router
