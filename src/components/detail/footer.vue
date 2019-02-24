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
import { MessageBox, Toast } from 'mint-ui'
export default {
  computed: {
    count () {
      if (this.$store.state.detail.count === '') {
        this.$store.commit('CHANGE_COUNT')
      }
      return this.$store.state.detail.count
    },
    ...mapState({
      productDatasView: state => state.detail.productDatas.view,
      colSelected: state => state.detail.colSelected,
      sizeSelected: state => state.detail.sizeSelected
    })
  },
  methods: {
    addIntoCar () {
      const product = [{
        title: this.productDatasView.title,
        price: this.productDatasView.price,
        size: this.productDatasView.chose[this.sizeSelected].size,
        col: this.productDatasView.chose[this.colSelected].col,
        id: this.productDatasView.id,
        imgPath: this.$store.state.detail.productDatas.swiper[0].imgSrc,
        choseBool: false
      }]
      MessageBox.confirm(
        `商品名称:${product[0].title}</br>` +
        `价格:${product[0].price}</br>` +
        `规格:${product[0].size}</br>` +
        `颜色:${product[0].col}</br>` +
        `商品ID:${product[0].id}</br>`
      ).then(action => {
        this.$store.dispatch('setLocalCount', true)
        this.$store.dispatch('addCarList', product)
        Toast({
          message: '添加成功',
          duration: 1000
        })
      })
    }
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
    background-color: #fff;
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
    background-color: #fff;
    position: relative;
    span {
      position: absolute;
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #FFAA00;
      color: #fff;
      left: 53%;
      top: 10%;
      text-align: center;
      line-height: 20px;
      font-size: 12px;
    }
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
