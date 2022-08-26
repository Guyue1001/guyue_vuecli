<template>
  <div id="app">
  <Banner/>
	<!-- Vue中借助router-link标签实现路由的切换 -->
  <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
  <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
  <router-view></router-view>
  </div>
</template>

<script>
import Banner from './components/BannerCom.vue'
export default {
  name: 'App',
  components:{
    Banner
  }
}
</script>

<style>

</style>
