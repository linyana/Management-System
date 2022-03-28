<template>
  <div id="app">
    <LeftNav/>
    <router-view></router-view>
  </div>
</template>

<script>
import LeftNav from './components/LeftNav.vue'

export default {
  name: 'App',
  components: {
    LeftNav
  },
}
</script>

<style>

* {
  padding: 0;
  margin: 0;
}

body,html {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
