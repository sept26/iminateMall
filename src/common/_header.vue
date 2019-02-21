<template>
  <header class="header">
    <router-link class="icon-go" :to="{name: '首页'}" v-if="$route.matched[0].path === '/category'"></router-link>
    <i v-else class="icon-go" @click="$router.go(-1)"></i>
    <slot name="title"></slot>
  </header>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
@import '../assets/fz.less';
@import '../assets/index/style.css';
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #F8FCFF;
  padding: 0 4vw;
  h1 {
    flex: 8;
  }
  a,i {
     font-size: 20px;
     transform: rotate(-180deg);
     flex: 1;
     text-align: center;
     &::before {
       color: #333;
     }
  }
}
</style>
