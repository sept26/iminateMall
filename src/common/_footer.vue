<template>
  <div class="footer" @click.stop="gotoRouter">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页">
        <i slot="icon" class="icon-index"></i>
        首页
      </mt-tab-item>
      <mt-tab-item id="分类页">
        <i slot="icon" class="icon-category"></i>
        分类
      </mt-tab-item>
      <mt-tab-item id="购物车页">
        <i slot="icon" class="icon-car"></i>
        购物车
      </mt-tab-item>
      <mt-tab-item id="用户页">
        <i slot="icon" class="icon-user"></i>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selected: '首页'
    }
  },
  methods: {
    gotoRouter () {
      this.$router.push({name: this.selected})
    }
  },
  mounted () {
    const Rname = this.$router.name
    switch (Rname) {
      case '首页':
        this.selected = '首页'
        break
      case '分类页':
        this.selected = '分类页'
        break
      case '购物车页':
        this.selected = '购物车页'
        break
      case '用户页':
        this.selected = '用户页'
        break
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/fz.less';
@import '../assets/index/style.css';
.mint-tab-item-label:hover {
  color:#333;
}
.footer {
  .mint-tabbar {
    background: #fff;
    box-shadow: 0 0 2.2vw hsla(0, 6%, 50%, .13);
    .is-selected {
      background-color: #fff;
      color: @cl;
      i {
        &::before {
          color: @cl;
        }
      }
    }
    i {
      font-size: 20px;
    }
  }
}
</style>
