<template>
  <div class="detail">

  </div>
</template>
<script>
export default {
  created () {
    this.$store.dispatch('setDatas')
  }
}
</script>
<style lang="less" scoped>

</style>
