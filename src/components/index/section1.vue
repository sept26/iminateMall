<template>
  <div class="section1">
    <div class="header">
      <h1>section1</h1>
      <i class="icon-right"></i>
    </div>
     <ul class="section1-list">
       <li v-for="item in list" :key="item.id">
         <router-link :to="{name: ''}">
           <img v-lazy="item.imgPath" alt="">
         </router-link>
       </li>
     </ul>
     <router-link :to="{name: ''}" class="section1-banner">
       <img v-lazy="banner" alt="">
     </router-link>
  </div>
</template>
<script>
export default {
  props: {
    'list': {
      type: Array,
      default: () => {
        return []
      }
    },
    'banner': {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.css";
.section1 {
  margin-top: 5vw;
  .header{
    position: relative;
    h1 {
      text-align: center;
      font-size: 20px;
      padding: 3vw 0;
    }
    i {
      position: absolute;
      right: 6vw;
      top: 30%;
      &::before {
        color: rgb(159, 159, 159)
      }
    }
  }
}
.section1-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 2vw 4vw 2vw;
  li{
    width: 50%;
    padding: 1vw;
    box-sizing: border-box;
    a,
    img {
      width: 100%;
      display: block;
    }
  }
}

.section1-banner {
  img {
    width: 100%;
    display: block;
  }
}
</style>
