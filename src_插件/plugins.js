export default {
  install (Vue) {
    alert("vm的构造函数",Vue)
    //全局过滤器
    Vue.filter('mySlice',function(){

    })
    // 定义全局指令
    Vue.directive('fbind',{

    })
    //定义混合
    Vue.mixin({
        data(){
            return {
              x:100,
              y:200
            }
          }
    })
    Vue.prototype.hell = ()=>{
        alert("你好呀");
    }
  }
}