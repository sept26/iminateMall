<template>
  <section>
    <div class="section2">
      <ul class="product-list">
        <li v-for="item in list" :key="item.id">
          <router-link :to="{name: ''}">
            <img v-lazy="item.imgPath" alt="">
          </router-link>
          <h2>{{item.title}}</h2>
          <p>{{item.intro}}</p>
          <p>¥{{item.price}}</p>
        </li>
      </ul>
    </div>
    <router-link class="section2-banner" :to="{name: ''}">
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
.section2 {
  overflow: auto;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  .product-list {
    display: flex;
    justify-content: space-around;
    padding: 6vw;
    width: 380%;

    li {
      width: 26vw;
      margin-right: 10vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 100%;
        display: block;
      }
      h2 {
        font-size: 4vw;
      }
      p {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 4vw;
        &:last-child {
          text-align:center;
          color: red;
        }
      }
    }
  }
}
.section2-banner {
  img {
    width: 100%;
    display: block;
  }
}
</style>
