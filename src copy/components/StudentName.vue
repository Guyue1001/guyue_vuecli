<template>
<div class="student">
  <div>学生姓名:{{name}}</div>
  <div>学生性别:{{sex}}</div>
  <div>学生年龄:{{age}}</div>
  <button>按钮</button>
</div>
</template>

<script>

export default {
  name: 'SchoolName',
  data () {
    return{
      name: '付林',
      sex: '男',
      age:18,
    }
  }
}
</script>

<style scoped>
.student{
  width: 100%;
  padding: 5px;
  background: orange;
}
</style>