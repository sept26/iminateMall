<template>
  <div class="go-login">
    <router-link :to="{name: '用户页'}" >
      <span>登录后享受更多优惠</span>
      <span>去登陆<i></i></span>
    </router-link>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/fz.less';
.go-login {
  padding: 5vw;
  background-color: #fff;
  span:last-child {
    float: right;
    color: rgba(0, 0, 0, 0.54);
    i {
      display: inline-block;
      width: 1.8vw;
      height: 1.8vw;
      border-left: 1px solid currentColor;
      border-top: 1px solid currentColor;
      transform: translate3d(0, -50%, 0) rotateZ(135deg);
      -webkit-transform: translate3d(0, -50%, 0) rotateZ(135deg);
      margin-left: 2vw;
    }
  }
}
</style>
