<template>
  <section class="section3">
    <ul>
      <li v-for="item in list" :key="item.id">
        <div>
          <h1>{{item.title}}</h1>
          <div class="product-time">
            <span class="time-val">00</span>
            <i>:</i>
            <span class="time-val">00</span>
            <i>:</i>
            <span class="time-val">00</span>
          </div>
          <span>Starts at {{item.start}}</span>
        </div>
        <div>
          <img v-lazy="item.imgPath" alt="">
          <span>${{item.price}}</span>
        </div>
      </li>
    </ul>
    <router-link :to="{name: ''}" class="section3-banner">
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
// @import "../../assets/fz.less";
// @import "../../assets/index/style.css";
.section3 {
  margin-top: 5vw;
  ul {
    display: flex;
    flex-direction: column;
    padding: 0 5vw;
    box-sizing: border-box;
    li {
      display: flex;
      margin-bottom: 5vw;
      div{
         width: 50%;
         h1{
            font-size: 6vw;
         }
         .product-time {
           width: 100%;
           text-align: center;
           .time-val {
              font-size: 3vw;
              display: inline-block;
              width: 6vw;
              height: 6vw;
              color: #fff;
              background: #444;
              text-align: center;
              line-height: 6vw;
            }
         }
         &:first-child {
           display: flex;
           flex-direction: column;
           justify-content: space-around;
           align-items: center;
         }
      }
      div:last-child{
        position: relative;
        img {
          width: 100%;
          display: block;
        }
        span {
          position: absolute;
          width: 10vw;
          height: 5vw;
          line-height: 5vw;
          font-size: 3vw;
          right: 3vw;
          bottom: 3vw;
          background-color: #FFAA00;
          color: #fff;
          text-align: center;
          border-radius: 1vw;
        }
      }
    }
  }
}
.section3-banner{
  img {
    width: 100%;
    display: block;
  }
}
</style>
