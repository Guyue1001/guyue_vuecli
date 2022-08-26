<template>
  <div id="app">
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM">点击输出上方的DOM元素</button>
    <SchoolName ref="sch" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import SchoolName from './components/SchoolName.vue'

export default {
  name: 'App',
  data () {
    return {
      msg: "欢迎学习vue"
    }
  },
  components: {
    SchoolName
  },
  methods: {
    showDOM () {
      console.log(this.$refs.title)
      console.log(this.$refs.sch)
    }
  }
}
</script>

<style>

</style>
