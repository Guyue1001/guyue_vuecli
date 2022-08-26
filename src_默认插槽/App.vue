<template>
  <div id="app">
    <h1>两个基本组件</h1>
    <SchoolName/>
    -------------------------
    <StudentName/>
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
  }
}
</script>

<style>

</style>
