<template>
  <section class="section4">
    <div class="section4-header">
      <h4>section4</h4>
      <span class="icon-right"></span>
    </div>
    <ul class="section4-main">
      <li v-for="item in list" :key="item.id">
        <div>
          <img v-lazy="item.imgPath" alt="">
          <p>{{item.intro}}</p>
        </div>
        <span>{{item.title}}</span>
        <i>${{item.price}}</i>
      </li>
    </ul>
    <router-link :to="{name:''}" class="section4-banner">
      <img v-lazy="banner" alt="">
    </router-link>
  </section>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    banner: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.css";
.section4 {
  margin-top: 5vw;
  .section4-header {
    position: relative;
    text-align: center;
    width: 100%;
    height: 10vw;
    line-height: 10vw;
    margin-bottom: 5vw;
    h4 {
      font-size: 6vw;
    }
    span {
      position: absolute;
      right: 6vw;
      top: 30%;
      &::before {
        color: rgb(159, 159, 159)
      }
    }
  }
  .section4-main {
    display: flex;
    padding: 0 5vw;
    flex-wrap: wrap;
    li {
      width: 43vw;;
      display: inline-block;
      margin-bottom: 4vw;
      &:nth-child(odd) {
        margin-right: 4vw;
      }
      div {
        position: relative;
        img {
          width: 100%;
          display: block;
        }
        p {
          position: absolute;
          width: 100%;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          background: gold;
          bottom: 0;
          padding: 1vw 0;
        }
      }
      span {
        font-size: 5vw;
        display: block;
        padding: 1vw 0;
      }
      i {
        color: red;
      }
    }
  }
}
.section4-banner {
  img {
    width: 100%;
    display: block;
  }
}
</style>
