<template>
  <div id="app">
    <SchoolName name="李斯" :age="18" sex="男" />
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
  }
}
</script>

<style>

</style>
