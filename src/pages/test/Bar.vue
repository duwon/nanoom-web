
<template>
  <div id="app">
    <loading-bar />
    <h1>testing loading bar</h1>
  </div>
</template>

<script>
import LoadingBar from 'src/components/test/LoadingBar'
export default {
  name: 'App',
  components: {
    LoadingBar
  }
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
</style>
