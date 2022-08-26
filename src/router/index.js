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
      meta: {
        keepAlive: true // 该组件被缓存
      },
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
                component: Detail,
                // 布尔模式
                // props: true

                // 对象形式
                // props: {
                //   a: 18,
                //   b: 22
                // }

                // 函数模式
                props($route){
                  return {
                    id: $route.query.id,
                    title: $route.query.title,
                    a:18,
                    b:22
                  }
                }
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