<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import '@/styles/js/iconfont.js';
export default {
  name: 'app'
}
</script>

<style>
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
