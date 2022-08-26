import VueRouter from "vue-router"
import Home from '@/views/HomeViews.vue'
import About from '@/views/AboutViews.vue'

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ]
})