<template>
  <div class="container">
    <goLogin></goLogin>
    <ul class="some-thing" v-if="carList">
      <li v-for="(k,i) in carList" :key="i">
        <div class="something-left" @click="toggle">
          <label class="true" :class="{false: !k.choseBool}">
            <input type="checkbox" v-model="k.choseBool">
          </label>
        </div>
        <div class="something-middle">
          <img :src="k.imgPath">
        </div>
        <div class="something-right">
          <p>{{k.title}}</p>
          <p style="color:rgb(199,108,28)">{{k.col}} - {{k.size}}</p>
          <p>售价: {{k.price}}</p>
          <div class="something-right-bottom" @click="cut(i)">
            <span></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import goLogin from './goLogin'
export default {
  components: {
    goLogin
  },
  computed: {
    carList () {
      return this.$store.state.detail.carList
    }
  },
  created () {
    // 初始化先获取购物车商品列表 否则 页面刷新出Bug
    if (this.$store.state.detail.carList === '') {
      this.$store.commit('RESET_CARLIST')
    }
  },
  methods: {
    cut (i) {
      let newCarList = []
      for (let k = 0; k < this.carList.length; k++) {
        if (k !== i) {
          newCarList.push(this.carList[k])
        }
      }
      // 点击垃圾桶 把商品数量count-1
      this.$store.dispatch('setLocalCount', false)
      this.$store.dispatch('cutCarList', newCarList)
    },
    toggle () {
      // 每点击一下都会改变choseBool的布尔值,所以要重置数组
      this.$nextTick(() => {
        this.$store.dispatch('cutCarList', this.carList)
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import "../../assets/fz.less";
.container {
  .some-thing {
    li {
      display: flex;
      margin-bottom: 2vw;
      .something-left {
        width: 10vw;
        display: flex;
        label {
          float: left;
          background: url("../../assets/car/images/t.svg") no-repeat center
            center/50% 50%;
          input {
            width: 14vw;
            height: 14vw;
            opacity: 0;
            filter: alpha(opacity=0)
          }
        }
        .false {
          background: url("../../assets/car/images/f.svg") no-repeat center
            center / 50% 50% !important;
        }
      }
      .something-middle {
        width: 30vw;
        height: 26vw;
        padding-left: 2vw;
        padding-right: 2vw;
        box-sizing: border-box;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .something-right {
        width: 60vw;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-around;
        position: relative;
        p:first-child{
          font-size: 16px;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        p:nth-child(2) {
          font-size: 14px;
          color: rgb(199, 108, 28);
        }
        p:last-child {
          font-size: 12px;
          color: #a8a8a8;
        }
        .something-right-bottom {
            position: absolute;
            bottom: 0;
            right: 0;
            span {
              height: 13vw;
              line-height: 13vw;
              width: 13vw;
              display: inline-block;
              border: 0.2vw solid #f1f1f1;
              border-radius: 1vw;
              text-align: center;
              font-size: 20px;
              cursor: pointer;
               background: url("../../assets/car/images/laji.svg") no-repeat
              center/50%;
            }
        }
      }
    }
  }
  label,
  span {
    &:active {
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
    }
  }
}
</style>
