<template>
  <div>
    <ul>
		<li>news001 <input type="text"> </li>
		<li>news002 <input type="text"></li>
		<li>news003 <input type="text"> </li>
	</ul>
  </div>
</template>

<script>
export default {
  name: 'NewsViews',
  data () {
    return{
      opaciity: 1
    }
  },

  //路由组件独有的生命周期
  activated () {
  // 激活(组件出现的时候)
  console.log("组件激活了")
      this.timer = setInterval(()=>{
      console.log("@");
    })
  },
  deactivated () {
  // 销毁(组件消失的时候)
    console.log("组件失活了")
    clearInterval(this.timer)
  }
}
</script>

<style>

</style>