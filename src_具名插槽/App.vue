<template>
  <div id="app">
    <h1>两个基本组件</h1>
    <SchoolName title="美食" class="zujian">
      <h2 slot="center">美食图片</h2>
      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt=""/>
      <a slot="footer" href="http://www.atguigu.com">更多美食</a>

    </SchoolName>
    <SchoolName title="游戏" class="zujian">
       <ul slot="center">
        <li v-for="(value,index) in games" :key="index">
          {{value}}
        </li>
       </ul>
       <div class="foot" slot="footer">
         <a href="http://www.atguigu.com">单机游戏</a>
				<a href="http://www.atguigu.com">网络游戏</a>
       </div>
    </SchoolName>
    <SchoolName title="电影" class="zujian">
       <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
       <!-- 更加推荐v-slot -->
       <template v-slot:footer>
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
			foods:['火锅','烧烤','小龙虾','牛排'],
			games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
			films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
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
</style>
