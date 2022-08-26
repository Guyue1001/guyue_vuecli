<template>
  <div id="app">
    <h1>两个基本组件</h1>
    <!-- 
      slot-scope="scope" 来取得作用域插槽:data绑定的数据，
      scope可以随便替换其他名称，只是定义对象来代表取得的data数据，
      便于使用

      作用域插槽
      数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。
      </span>（games数据在Category组件中，但使用数据所遍历出来的结构由App组件决定）
     -->
    <SchoolName title="游戏" class="zujian">
      <template scope="atguigu">
        <ul>
          <li v-for="(value,index) in atguigu.games" :key="index">
            {{value}}
          </li>
        </ul>
      </template>
    </SchoolName>

    <SchoolName title="游戏" class="zujian">
      <template scope="{games}">
        <ol>
          <li style="color:red" v-for="(value,index) in games" :key="index">
           {{value}}
          </li>
        </ol>
      </template>
    </SchoolName>
    <SchoolName title="游戏" class="zujian">
      <template slot-scope="{games}">
        <h4 v-for="(value,index) in games" :key="index">
          {{value}}
        </h4>
      </template>
       <video  controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
       <!-- 更加推荐v-slot -->
       <template>
         <div class="foot">
          <a href="http://www.atguigu.com">经典</a>
					<a href="http://www.atguigu.com">热门</a>
					<a href="http://www.atguigu.com">推荐</a>
         </div>
         <h4>欢迎前来观影</h4>
       </template>
    </SchoolName>
    -------------------------
  </div>
</template>

<script>
import SchoolName from './components/SchoolName.vue'
export default {
  name: 'App',
  data() {
		return {
		}
	},
  components: {
    SchoolName,
}
}
</script>

<style>
.zujian{
  float: left;
  margin-left: 20px;
}
ul{
  list-style: none;
}
</style>
