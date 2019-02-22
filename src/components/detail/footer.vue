<template>
  <footer class="detail-footer">
    <router-link :to="{name: '首页'}" class="footer-index">
      <i class="icon-index"></i>
    </router-link>
    <router-link :to="{name: '购物车页'}" class="footer-gocar">
      <i class="icon-car"></i>
      <span v-if="count">{{count}}</span>
    </router-link>
    <span class="footer-addcar" @click="addIntoCar">
      加入购物车
    </span>
  </footer>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed: {
    // count () {
    //   if (this.$store.state.detail.count === '') {
    //     this.$store.commit('CHANGE_COUNT')
    //   }
    //   return this.$store.state.detail.count
    // },
    ...mapState({
      productDatasView: state => state.detail.productDatas.view,
      colSelected: state => state.detail.colSelected,
      sizeSelected: state => state.detail.sizeSelected
    })
  }
}
</script>
<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.css";
.detail-footer {
  display: flex;
  align-items: center;
  height: 14vw;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  .footer-index {
    flex: 3;
    height: 100%;
    border-right: 1px solid #ccc;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }
  .footer-gocar {
    flex: 3;
    display: inline-block;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }
  .footer-addcar {
    flex: 6;
    background-color: #FFAA00;
    color: #fff;
    font-size: 16px;
    display: inline-block;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
