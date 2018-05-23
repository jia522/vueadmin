<template>
  <div>
    <h3>我是子组件一</h3>
    <span>{{parentMesssge}}</span>
  </div>
</template>

<script>
export default {
   data () {
    return {
    }
  },
  props:['parentMesssge'],
  methods: {


  },
  mounted(){

  }
}


</script>

<style scoped>

</style>
