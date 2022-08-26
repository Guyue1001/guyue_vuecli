<template>
  <div class="hello">
    <div>姓名:{{name}}</div>
    <div>性别:{{sex}}</div>
    <div>年龄:{{myAge+20}}</div>
  </div>
</template>

<script>
export default {
  // 加入data里面的和props重名 以props优先
  name: 'SchoolName',
  // props: ["name", "age", "sex"]
  // props: {
  //   name:String,
  //   age:Number,
  //   sex:String
  // }
  data () {
    return {
      myAge:this.age // 这里二点age是props里面的
    }
  },
  props: {
    name: {
      type: String,
      require: true // name必要的
    },
    age: {
      type:Number,
      default: 99 //默认值
    },
    sex:{ 
      type: String,
      require:true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
