<template>
<div class="school">
  <div>学校名称:{{name}}</div>
  <div>学校地址:{{address}}</div>
  <button>按钮</button>
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