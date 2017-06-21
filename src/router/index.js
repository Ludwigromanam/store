import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Auth from '@/components/Auth'
import AuthSuccess from '@/components/AuthSuccess'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/sucess',
      name: 'AuthSuccess',
      component: AuthSuccess
    }
  ]
})
