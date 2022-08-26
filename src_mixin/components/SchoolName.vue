<template>
  <div>
    <div @click="showName">学校名称：{{name}}</div>
    <div>学校地址：{{address}}</div>
  </div>
</template>

<script>
// 引入混合 当混合中的配置和script中配置发送冲突后，script中为主 ,生命同名周期钩子会都触发
import {hunhe2,hunhe} from '../mixin.js'
export default {
  // 加入data里面的和props重名 以props优先
  name: 'SchoolName',
  data () {
    return {
      name: '尚硅谷',
      address: '北京'
    }
  },
  mixins: [hunhe,hunhe2],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
