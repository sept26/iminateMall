<template>
  <div class="swiper">
    <mt-swipe>
      <mt-swipe-item v-for="item in swiper" :key="item.id">
        <img :src="item.imgSrc">
      </mt-swipe-item>
    </mt-swipe>
    <div class="back" @click="$router.go(-1)">
      <span class="icon-go"></span>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed: mapState({
    swiper: state => state.detail.productDatas.swiper
  })
}
</script>
<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.css";
.swiper {
  width: 100%;
  position: relative;
  .mint-swipe {
    width: 100%;
    height: 100vw;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .back {
    position: absolute;
    width: 7vw;
    height: 7vw;
    border-radius: 50%;
    background: rgba(0,0,0,.4);
    left: 4vw;
    top: 2vw;
    text-align: center;
    span {
      display: inline-block;
      line-height: 7vw;
      .fz(font-size,40);
      transform: rotate(-180deg);
      &::before {
        color: #fff;
      }
    }
  }
}
</style>
