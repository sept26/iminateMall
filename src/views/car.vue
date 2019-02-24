<template>
  <div class="car">
    <vheader class="car-header">
      <h1 slot="title">购物车</h1>
    </vheader>
    <vsomething></vsomething>
    <vfooter></vfooter>
  </div>
</template>
<script>
import Vheader from '@/common/_header.vue'
import Vsomething from '@/components/car/something'
import Vfooter from '@/components/car/footer'
export default {
  components: {
    Vheader,
    Vsomething,
    Vfooter
  },
  computed: {
    count () {
      return this.$store.state.detail.count
    }
  }
}
</script>
<style lang="less" scoped>
.car {
  .car-header{
    height: 15vw;
    line-height: 15vw;
    text-align: center;
     h1 {
      font-size: 20px;
    }
  }
}
</style>
