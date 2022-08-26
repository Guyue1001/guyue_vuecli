<template>
  <div id="app">
    <SchoolName  />
    --------------
    <StudentName />
  </div>
</template>

<script>
import SchoolName from './components/SchoolName.vue'
import StudentName from './components/StudentName.vue'

export default {
  name: 'App',
  data () {
    return {
      msg: "欢迎学习vue"
    }
  },
  components: {
    SchoolName,
    StudentName
  },
  methods: {
  }
}
</script>

<style>

</style>
