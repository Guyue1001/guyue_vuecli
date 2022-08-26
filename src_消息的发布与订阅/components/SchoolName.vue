<template>
<div class="school">
  <div>学校名称:{{name}}</div>
  <div>学校地址:{{address}}</div>
  <button>按钮</button>
</div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  // 需要数据的人，要订阅消息
  name: 'SchoolName',
  data () {
    return{
      name: '尚硅谷',
      address: '北京'
    }
  },
  mounted(){
    // 订阅消息
    this.pubId = pubsub.subscribe('hello',(msgName,data) =>{
      console.log(msgName);
      console.log("有人发布了hello消息，heelo消息的回调执行成功:"+data)
    })
  },
  beforeDestroy(){
    pubsub.unsubscribe(this.pubId)
  }
}
</script>

<style scoped>
.school{
  width: 100%;
  padding: 5px;
  background: olive;
}
</style>