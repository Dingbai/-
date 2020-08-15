<template>
  <div id="app">
    <!-- <p>hello nihao</p> -->
		<!-- <router-link to="/HelloWorld">按钮</router-link> -->
		hello world test git merge jojo 我不做人了
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
		console.log('hello world');
    console.log(this.$router)
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
