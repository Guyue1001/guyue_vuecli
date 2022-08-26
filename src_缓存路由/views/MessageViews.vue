<template>
  <div>
    <div>
		<ul>
            <li v-for="value in messageList" :key="value.id">
                <!-- 跳转路由并携带params参数，to的字符串写法 -->
				<!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

				<!-- 跳转路由并携带params参数，to的对象写法 -->
                <router-link :to="{
                  name: 'xiaoxi',
                  query: {
                    id: value.id,
                    title: value.title
                  }    
                }">
                  {{value.title}}
                </router-link>
                <button @click="pushShow(value)">push查看</button>
                <button @click="replaceShow(value)">replace查看</button>
            </li>
		</ul>
	</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'MessageViews',
  data () {
    return {
      messageList:[
        {id:'001',title:'消息001'},
		{id:'002',title:'消息002'},
		{id:'003',title:'消息003'}
      ]
    }
  },
  methods: {
    /*
    this.$router.forward() //前进
    this.$router.back() //后退
    this.$router.go() //可前进也可后退
    */
    pushShow(value){
      this.$router.push({
        name:'xiaoxi',
        query: {
          id: value.id,
          title: value.title
        }
      })
    },
    replaceShow(value){
      this.$router.replace({
        name: 'xiaoxi',
        query: {
          id: value.id,
          title: value.title
        }
      })
    }
  },
  beforeDestroy() {
		console.log('Message组件即将被销毁了')
	},
}
</script>

<style>

</style>