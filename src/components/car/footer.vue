<template>
  <footer class="footer">
    <div>
      <span>共{{count}}件 金额</span>
      <b><i>{{allpay}}</i> 元</b>
    </div>
    <router-link :to="{name: '分类页'}">继续购物</router-link>
    <a @click="goPay">去结算</a>
  </footer>
</template>
<script>
export default {
  computed: {
    count () {
      // 如果已选择列表为空 就返回0
      if (this.$store.getters.selectedList === undefined) {
        return 0
      } else {
        return this.$store.getters.selectedList.length
      }
    },
    // 勾选的商品的价格总和
    allpay () {
      let all = 0
      // 如果有勾选商品,计算总价格
      if (this.$store.getters.selectedList !== undefined) {
        for (let i = 0; i < this.$store.getters.selectedList.length; i++) {
          all += this.$store.getters.selectedList[i].price
        }
      }
      // 没有勾选 即为0
      return all
    }
  },
  methods: {
    // 点击跳转到支付页
    goPay () {
      // 如果有选择商品才能跳转
      if (this.$store.getters.selectedList.length) {
        // 保存+缓存选择的商品 ,在支付页能用到
        this.$store.dispatch('setSelectedList')
        this.$router.push({ name: '支付页' })
      } else {
        alert('你还没选择商品')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.footer {
  display: flex;
  height: 16vw;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  div {
    flex: 3;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    b {
      i {
        font-size: 20px;
        color: #FFAA00;
      }
    }
  }
  a {
    flex: 3;
    text-align: center;
    line-height: 16vw;
    background-color: #f4f4f4;
    &:last-child {
      color: #fff;
      background-color: #FFAA00;
    }
  }
}
</style>
