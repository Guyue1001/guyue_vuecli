<template>
  <div>
    <div @click="showName">学生姓名：{{name}}</div>
    <div>学生年龄：{{age}}</div>
    <div>学生性别：{{sex}}</div>
    <div>{{x}}</div>
    <div>{{y}}</div>
  </div>
</template>

<script>
import {hunhe,hunhe2} from '../mixin'
export default {
  name: 'StudentName',
  data () {
    return{
      name: '张三',
      age:18,
      sex:'男'
    }
  },
  mixins:[hunhe,hunhe2]
}
</script>

<style>

</style>
