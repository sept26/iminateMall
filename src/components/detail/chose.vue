<template>
  <section class="chose">
    <div class="chose-view">
      <h1 class="chose-view-title">
        {{view.title}}
        <span>(已选 {{colText}} - {{sizeText}})</span>
      </h1>
      <span class="chose-price">{{view.price}}元</span>
      <p class="chose-view-intro">{{view.intro}}</p>
    </div>
    <div class="chose-mychosed" ontouchstart="">
      <div class="colChose">
        <span v-for="(k,i) in view.chose"
         :key="i"
         :class="{active: colSelected === i}"
         @click="colChose(i)"
         >{{k.col}}</span>
      </div>
    </div>
    <div class="sizeChose">
      <span v-for="(k,i) in view.chose"
        :key="i"
        :class="{active: sizeSelected === i}"
        @click="sizeChose(i)"
        >{{k.size}}</span>
    </div>
  </section>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed: mapState({
    view: state => state.detail.productDatas.view,
    colSelected: state => state.detail.colSelected,
    sizeSelected: state => state.detail.sizeSelected,
    // 返回当前颜色选择
    colText () {
      return this.view.chose[this.colSelected].col
    },
    // 返回当前选择规格的值
    sizeText () {
      return this.view.chose[this.sizeSelected].size
    }
  }),
  methods: {
    colChose (i) {
      this.$store.commit('CHANGE_COL_SELECTED', i)
    },
    sizeChose (i) {
      this.$store.commit('CHANGE_SIZE_SELECTED', i)
    }
  }
}
</script>
<style lang="less" scoped>
.chose {
  padding: 10px;
  .chose-view {
    .chose-view-title {
      font-size: 18px;
      span {
        color: #ee7150
      }
    }
    span.chose-price {
      display: inline-block;
      margin: 3vw 0;
      color: #FFAA00;
    }
    p {
      margin-bottom: 4vw;
    }
  }
  .chose-mychosed {
    margin-bottom: 3vw;
    .colChose {
      span {
        display: inline-block;
        padding: 1.6vw 4vw;
        margin-right: 3vw;
        border: 1px solid #000;
        border-radius: .5vw;
        font-size: 14px;
      }
      .active {
        color: #FFAA00;
        border-color: #FFAA00;
      }
    }
  }
  .sizeChose {
    span {
      display: inline-block;
      padding: 1.6vw 4vw;
      margin-right: 3vw;
      border: 1px solid #000;
      border-radius: .5vw;
      font-size: 14px;
    }
    .active {
      color: #FFAA00;
      border-color: #FFAA00;
    }
  }
}
</style>
