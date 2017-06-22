import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Profile from '@/components/Profile/Profile'
import Stores from '@/components/Stores/Stores'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/stores',
      name: 'Stores',
      component: Stores
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
