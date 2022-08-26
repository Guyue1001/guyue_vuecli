import VueRouter from "vue-router"
import Home from '@/views/HomeViews.vue'
import About from '@/views/AboutViews.vue'
import Message from '@/views/MessageViews.vue'
import News from '@/views/NewsViews.vue'
import Detail from '@/views/DetailViews.vue'
export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'news',
          component: News
        },
        {
          path: 'message',
          component: Message ,
          children: [
            {
                path: 'detail',
                component: Detail
            }
          ]   
        }
      ]
    },
    {
      path: '/about',
      component: About
    }
  ]
})