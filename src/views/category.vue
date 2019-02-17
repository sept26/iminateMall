<template>
  <div class="category">
    <cheader>
      <h1 class="header-title" slot="title">商品分类</h1>
    </cheader>
    <section class="view">
      <caside class="c-aside" :datas="allData.aside"></caside>
      <div></div>
      <router-view :datas="allData.aside"></router-view>
    </section>
  </div>
</template>
<script>
import Cheader from '@/common/_header'
import Caside from '@/components/category/aside'
import '@/http/mock' // 模拟数据
export default {
  data () {
    return {
      allData: {}
    }
  },
  components: {
    Cheader,
    Caside
  },
  created () {
    this.$api({
      method: 'post',
      url: 'category'
    }).then((response) => {
      this.allData = response.data
    }).catch((error) => {
      alert(error)
    })
  }
}
</script>
<style lang="less" scoped>
.header-title{
  font-size: 5vw;
  text-align: center;
}
.category {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  .view {
    display: flex;
    width: 100%;
    height: 100%;
    .c-aside {
      flex: 2;
    }
    div {
      flex: 8;
    }
  }
}
</style>
