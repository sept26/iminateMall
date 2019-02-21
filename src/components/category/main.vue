<template>
  <div class="main">
    <h2>{{_datas.title}}</h2>
    <ul>
      <li v-for="(k,i) in _datas.list" :key="i">
        <router-link :to="{name:'详情页'}">
          <img v-lazy="k.imgPath" alt=""><span>{{k.title}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    datas: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    tabIndex () {
      return this.$store.state.category.tabIndex
    },
    _datas () {
      const _datas = {
        list: [],
        title: ''
      }
      return this.datas[this.tabIndex] || _datas
    }
  }
}
</script>
<style lang="less" scoped>
.main {
  background-color: #f7f7f7;
  padding: 10px;
  h2 {
    margin-bottom: 10px;
    margin-left: 10px;
  }
  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    li {
      width:33%;
      padding: 10px;
      text-align: center;
      box-sizing: border-box;
      img {
        width: 100%;
      }
      span {
        font-size: 16px;
        position: relative;
        top: 5px;
      }
    }
  }
}
</style>
