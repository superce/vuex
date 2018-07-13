import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import post from '../components/post'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/post/:id',
      component: post
    }
  ]
})
