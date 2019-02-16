<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="item in swipeData" :key="item.id">
      <router-link :to="{name: ''}">
        <img :src="item.imgPath" alt="">
      </router-link>
    </mt-swipe-item>
  </mt-swipe>
</template>
<script>
export default {
  props: {
    swipeData: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>
<style lang="less" scoped>
.mint-swipe {
  width: 100%;
  height: 50vw;
  a,img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
