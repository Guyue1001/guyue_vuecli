<template>
  <div>
    <h2>Home组件的内容</h2>
    <ul>
       <li>
                <!-- push 追加历史记录   replace 替换当前的记录-->
          <router-link replace class="list-group-item" active-class="acitve" to="/home/news">News组件</router-link>
       </li>
        <li>
          <router-link replace class="list-group-item" active-class="acitve" to="/home/message">Message组件</router-link>
       </li>
    </ul>

    <!-- 缓存多个路由组件 -->
		<!-- <keep-alive :include="['News','Message']"> -->

    <!-- 缓存一个 -->
    <!-- name 为 HomeViews 将被缓存 -->
    <keep-alive include="NewsViews">
        <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'HomeViews',
  beforeDestroy () {
    console.log("Home组件即将被销毁了")
  },
  mounted () {
    console.log("Home组件挂在完毕");
    window.homeRoute = this.$route
    window.homeRouter = this.$router
  }
}
</script>

<style>

</style>