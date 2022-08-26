<template>
<div class="student">
  <div>学生姓名:{{name}}</div>
  <div>学生性别:{{sex}}</div>
  <div>学生年龄:{{age}}</div>
  <button @click="sendStudentName">把学生名给APP</button>
  <button @click="unbind">解绑atguisu事件</button>
  <button @click="unbinds">解绑多个自定义事件</button>
  <button @click="death">销毁当前student组件实例</button>
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
  },
  methods:{
    sendStudentName(){
      // 触发atguigu身上的事件被触发了
      this.$emit('atguigu',this.name,111,222,333)
      // this.$emit('demo')
    },
    unbind(){
      this.$off('atguigu') // 解绑一个事件
    },
    unbinds () {
      this.$off('gtguigu','demo')// 解绑多个事件
    },
    death(){
      this.$destroy() //销毁了当前的student组件对象
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