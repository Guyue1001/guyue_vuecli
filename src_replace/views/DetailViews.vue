<template>
  <div>
    <ul>
		<li>消息编号：{{id}}</li>
		<li>消息标题：{{title}}</li>
    <li>props参数a：{{a}}</li>
     <li>props参数b：{{b}}</li>
	</ul>
  </div>
</template>

<script>
export default {
  name: 'DetailViews',
  props: {
    a:{
      type: Number,
      default: 12
    },
    b:{
      type: Number,
      default: 12
    },
    id: {

    },
    title: {

    }
  },
  mounted () {
    console.log(this.$route)
  }
}
</script>

<style>

</style>