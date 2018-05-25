<template>
    <div class="divHead"><span @click="logout">退出</span></div>
</template>
<script>
  import * as types from '../store/types'
  import store from '../store/index'
  export default {
    name: 'app',
    data () {
      return {
      }
    },
    methods: {
      logout(){
        store.commit(types.LOGOUT)
        this.$router.push({
          path: '/'
        })
      }
    }
  }
</script>
<style scoped>
  .divHead{ width: 100%; height: 87px; background:#339ad9; color: #fff}

</style>
