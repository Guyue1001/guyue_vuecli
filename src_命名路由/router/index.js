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
                name:'xiaoxi',
                path: 'detail',
                component: Detail
            }
          ]   
        }
      ]
    },
    {
      name: 'guanyu',
      path: '/about',
      component: About
    }
  ]
})