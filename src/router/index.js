import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/pages/home/IndexPage.vue'
import Hot from '@/pages/hot/IndexPage.vue'
import Cart from '@/pages/cart/IndexPage.vue'
import Mine from '@/pages/mine/IndexPage.vue'
import City from '@/pages/common/city.vue'
export default new Router({
  routes: [
    {
      name: 'home',
      path: '/home',
      alias: '/',
      component: Home
    },
    {
        name: 'hot',
        path: '/hot',
        component: Hot
    },
    {
        name: 'cart',
        path: '/cart',
        component: Cart
    },
    {
        name: 'mine',
        path: '/mine',
        component: Mine
    },
    {
        path: '**',
        redirect: '/home'
    },
    {
        name:'city',
        path:'city',
        component:City
    }

  ]
})
