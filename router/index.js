import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home.vue'
import Data from '@/pages/data/data.vue'
import Alarm from '@/pages/alarm/alarm.vue'
import User from '@/pages/user/user.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/data',
      name: 'data',
      component: Data
    },
    {
      path: '/alarm',
      name: 'alarm',
      component: Alarm
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})

export default router
