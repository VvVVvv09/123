<template>
  <div class="tab-bar">
    <router-link to="/" exact>
      <div class="tab-item" :class="{ active: isActive('/') }">
        <span class="iconfont icon-home"></span>
        <span>首页</span>
      </div>
    </router-link>
    <router-link to="/data">
      <div class="tab-item" :class="{ active: isActive('/data') }">
        <span class="iconfont icon-data"></span>
        <span>数据</span>
      </div>
    </router-link>
    <router-link to="/alarm">
      <div class="tab-item" :class="{ active: isActive('/alarm') }">
        <span class="iconfont icon-alarm"></span>
        <span>警告</span>
      </div>
    </router-link>
    <router-link to="/user">
      <div class="tab-item" :class="{ active: isActive('/user') }">
        <span class="iconfont icon-user"></span>
        <span>用户</span>
      </div>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MyTabBar',
  computed: {
    ...mapState(['currentTab'])
  },
  methods: {
    isActive(path) {
      return this.$route.path === path
    }
  }
}
</script>

<style lang="less" scoped>
.tab-bar {
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.1);

  .tab-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #999
