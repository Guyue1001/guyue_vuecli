<template>
<div class="category">
  <h3>{{title}}分类</h3>
  <!-- 定义一个插槽 -->
  <slot name="center">默认值1</slot>
  <slot name="footer">默认值2</slot>
</div>
</template>

<script>

export default {
  name: 'SchoolName',
  data () {
    return{
      name: '尚硅谷',
      address: '北京'
    }
  },
  props: ['title']
}
</script>

<style scoped>
	.category{
		background-color: skyblue;
		width: 200px;
		height: 300px;
	}
	h3{
		text-align: center;
		background-color: orange;
	}
	video{
		width: 100%;
	}
	img{
		width: 100%;
	}
</style>