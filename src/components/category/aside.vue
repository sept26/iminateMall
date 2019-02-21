<template>
  <section class="category-aside">
    <ul>
      <li v-for="(item, index) in datas" :key="item.id" @click="changeTabIndex(index)">
        <router-link :to="{path:`/category/${item.title}`}" :class="{active:index== tabIndex}">{{item.title}}</router-link>
      </li>
    </ul>
  </section>
</template>
<script>
import {mapState} from 'vuex'
export default {
  props: {
    datas: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: mapState({
    tabIndex: state => state.category.tabIndex
  }),
  methods: {
    changeTabIndex (i) {
      this.$store.commit('CHANGE_TABINDEX', i)
    }
  }
}
</script>
<style lang="less" scoped>
.category-aside {
  flex: 2;
  height: 100%;
  background:gold;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar{display: none}
  > ul {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background-color: #fff;
    &::-webkit-scrollbar{display: none}
    li {
      text-align: center;
      background-color: #fff;
      a {
        display: block;
        padding: 4vw 0;
        position: relative;
        font-size: 16px;
      }
      .active {
        font-size: 20px;
        &::before {
          width: 3px;
          height: 28px;
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          margin-top: -14px;
          background-color: green;
        }
      }
    }
  }
}
</style>
