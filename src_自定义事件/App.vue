<template>
  <div id="app">
    <h1>{{msg}}学校名称{{studentname}}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <SchoolName :getSchoolName="getSchoolName"/>
    -------------------------
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 使用@ -->
		<!-- <StudentName v-on:atguigu="getStudentName" @demo="m1"/> -->

       <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 使用ref-->
    <StudentName ref="student"  @click.native="show"/>
  </div>
</template>

<script>
import SchoolName from './components/SchoolName.vue'
import StudentName from './components/StudentName.vue'
export default {
  name: 'App',
  components: {
    SchoolName,
    StudentName
  },
  data () {
    return {
      msg: '你好呀',
      studentname: '',
    }
  },
  methods: {
    getSchoolName(name){
      console.log("App收到了学校名:"+name)
    },
    getStudentName(name){
      console.log("demo被调用了",name)
    },
    m1 () {
      console.log("m1被触发了")
    },
    show (){
      console.log("点击组件后触发")
    }
  },
  mounted () {
    // 这里的this是
    this.$refs.student.$on('atguigu',this.getStudentName)//绑定自定义事件
    // this.$refs.student.$once('atguigu',this.getStudentName)//绑定自定义事件(一次性)
  }
}
</script>

<style>

</style>
