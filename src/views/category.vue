<template>
  <div class="category">
    <cheader class="header-title">
      <h1 class="header-title" slot="title">商品分类</h1>
    </cheader>
    <section class="view">
      <caside class="c-aside" :datas="allData.aside"></caside>
      <div class="router-view">
        <router-view :datas="allData.aside"></router-view>
      </div>
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
  line-height: 6vh;
}
.category {
  display: flex;
  width: 100%;
  height: 100%;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-flow: column nowrap;
  flex-flow: column nowrap;
  .header-title {
    height: 6vh;
  }
  .view {
    display: flex;
    width: 100%;
    height: 94vh;
    .c-aside {
      flex: 2;
    }
    .router-view {
      flex: 8;
      height: 100%;
      overflow-y: auto;
      &::-webkit-scrollbar{display: none}
    }
  }
}
</style>
