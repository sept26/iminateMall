<template>
  <div class="loading">
    <div class="spinner">
      <div class="first-bounce"></div>
      <div class="second-bounce"></div>
    </div>
    <p class="loading-remind">正在拼命加载中...</p>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.loading {
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: rgba(255,255,255,.8);
  top: 0;
  left: 0;
  z-index: 999;
}
.loading-remind {
  font-size: 24px;
  text-align: center;
}
.spinner {
  position: relative;
  width: 50px;
  height: 50px;
  top: 50%;
  left: 50%;
  transform: translateX(-25px);
}
.first-bounce, .second-bounce {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #facd2d;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: glint 2s infinite ease-in-out;
}
.second-bounce{
  animation-delay: -1s;
}
@keyframes glint {
  0%, 100% {transform: scale(0)};
  50% {transform: scale(1)}
}
</style>
