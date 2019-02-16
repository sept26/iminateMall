<template>
  <div class="home">
    <mheader></mheader>
    <mswipe :swipeData="datas.swipe"></mswipe>
    <mservice></mservice>
    <msection1 :list="datas.section1.list" :banner="datas.section1.banner"></msection1>
    <msection2 :list="datas.section2.list" :banner="datas.section2.banner"></msection2>
    <msection3 :list="datas.section3.list" :banner="datas.section3.banner"></msection3>
    <msection4 :list="datas.section4.list" :banner="datas.section4.banner"></msection4>
    <mbaseline></mbaseline>
  </div>
</template>
<script>
import Mheader from '@/components/index/header'
import Mswipe from '@/components/index/swiper'
import Mservice from '@/components/index/service'
import Msection1 from '@/components/index/section1'
import Msection2 from '@/components/index/section2'
import Msection3 from '@/components/index/section3'
import Msection4 from '@/components/index/section4'
import Mbaseline from '@/common/_baseline'
import '@/http/mock' // 模拟数据
export default {
  data () {
    return {
      datas: {
        section1: {},
        section2: {},
        section3: {},
        section4: {},
        swipe: []
      }
    }
  },
  components: {
    Mheader,
    Mswipe,
    Mservice,
    Msection1,
    Msection2,
    Msection3,
    Msection4,
    Mbaseline
  },
  beforeCreate () {
    this.$api({
      method: 'post',
      url: 'index'
    }).then((response) => {
      this.datas = response.data
    }).catch((error) => {
      alert(error)
    })
  }
}
</script>
