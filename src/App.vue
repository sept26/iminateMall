<template>
  <div id="app">
    <router-view/>
    <loading v-show="fetchLoading"></loading>
  </div>
</template>

<script>
import loading from '@/common/_loading'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    loading
  },
  computed: mapState({
    fetchLoading: state => state.detail.fetchLoading
  })
}
</script>
