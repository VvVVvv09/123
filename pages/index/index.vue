<template>
  <view>
	  <div>
	      <my-tab-bar :tabBarList="tabBarList" />
	    </div>
    <router-view />
    <uni-tab-bar :list="list" :active="activeTab" @change="onTabBarChange" />
  </view>
</template>

<script>
import MyTabBar from '@/components/MyTabBar.vue'

export default {
  components: {
     MyTabBar // 注册 MyTabBar 组件
  },
  data() {
    return {
      activeTab: 0,
      list: [
        {
          iconPath: '/static/tab-bar/home.png',
          selectedIconPath: '/static/tab-bar/home-active.png',
          text: '主页',
          pagePath: '/pages/home/home'
        },
        {
          iconPath: '/static/tab-bar/data.png',
          selectedIconPath: '/static/tab-bar/data-active.png',
          text: '数据',
          pagePath: '/pages/data/data'
        },
        {
          iconPath: '/static/tab-bar/alarm.png',
          selectedIconPath: '/static/tab-bar/alarm-active.png',
          text: '报警',
          pagePath: '/pages/alarm/alarm'
        },
        {
          iconPath: '/static/tab-bar/user.png',
          selectedIconPath: '/static/tab-bar/user-active.png',
          text: '用户',
          pagePath: '/pages/user/user'
        }
      ]
    }
  },
  methods: {
    onTabBarChange(index) {
      this.activeTab = index
      uni.switchTab({
        url: this.list[index].pagePath
      })
    }
  }
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
