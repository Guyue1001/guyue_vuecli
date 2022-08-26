<template>
  <div>
    <h2>Home组件的内容</h2>
    <ul>
       <li>
          <router-link class="list-group-item" active-class="acitve" to="/home/news">News组件</router-link>
       </li>
        <li>
          <router-link class="list-group-item" active-class="acitve" to="/home/message">Message组件</router-link>
       </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HomeViews'
}
</script>

<style>

</style>