<template>
  <div>
    <ul>
        <li>about</li>
        <li>about</li>
        <li>about</li>
        <li>about</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AboutViews',
  beforeDestroy() {
    console.log('About组件即将被销毁了')
  },
   mounted() {
     console.log('About组件挂载完毕了',this)
     window.aboutRoute = this.$route
     window.aboutRouter = this.$router
   },  
}
</script>

<style>

</style>