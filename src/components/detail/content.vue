<template>
  <section class="content">
    <div class="content-img" v-for="(k,i) in content" :key="i">
      <img :src="k.imgSrc">
    </div>
  </section>
</template>
<script>
export default {
  computed: {
    content () {
      return this.$store.state.detail.productDatas.contentImgSrc
    }
  }
}
</script>
<style lang="less" scoped>
.content {
  width: 100vw;
  margin-top: 10px;
  padding: 3vw;
  box-sizing: border-box;
  .content-img {
    height: 120vw;
    width: 100%;
    margin-bottom: 3vw;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
    &:last-child{
       margin-bottom: 0;
    }
  }
}
</style>
