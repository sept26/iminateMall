<template>
  <div class="detail">
    <vswipe></vswipe>
    <vchose></vchose>
    <vcontent></vcontent>
    <vbaseline></vbaseline>
    <vfooter></vfooter>
  </div>
</template>
<script>
import Vswipe from '@/components/detail/swiper'
import Vchose from '@/components/detail/chose'
import Vcontent from '@/components/detail/content'
import Vbaseline from '@/common/_baseline'
import Vfooter from '@/components/detail/footer'
export default {
  created () {
    this.$store.dispatch('setDatas')
  },
  components: {
    Vswipe,
    Vchose,
    Vcontent,
    Vbaseline,
    Vfooter
  }
}
</script>
<style lang="less" scoped>

</style>
