<template>
  <div id="app">
    <nav class="fixed-top">
      <navigation-bar></navigation-bar>
    </nav>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
  import NavigationBar from './components/NavigationBar'

  export default {
    name: 'app',
    components: { NavigationBar }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  @import "~bootstrap/dist/css/bootstrap.css";
  @import "~bootstrap-vue/dist/bootstrap-vue.css";

  @import "~firebaseui/dist/firebaseui.css";
</style>
