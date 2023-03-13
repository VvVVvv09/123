<template>
  <div id="app">
    <router-view/>
	<MyTabBar />
    <div class="bottom-nav">
      <router-link to="/home">Home</router-link>
      <router-link to="/data">Data</router-link>
      <router-link to="/alarm">Alarm</router-link>
      <router-link to="/user">User</router-link>
    </div>
  </div>
</template>

<script>
import MyTabBar from '@/components/MyTabBar.vue'
export default {
  name: 'App',
  components: {
    MyTabBar
  }
}
</script>

<style>
#app {
  position: relative;
  min-height: 100vh;
}
MyTabBar {
  position: absolute;
  bottom: 0;
  width: 100%;
}
@import './assets/css/common.css';
</style>
