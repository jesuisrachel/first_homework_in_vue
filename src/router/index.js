import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import '@/assets/fonts.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    }
  ]
})