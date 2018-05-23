<template>
  <div>
    <h3>我是子组件一</h3>
    <span></span>
  </div>
</template>

<script>
export default {
   data () {
    return {
        msssges:'我是子组件信息'
    }
  },
  methods: {
     childMethod(){
         console.log('我是子组件方法')
     }

  },
  mounted(){
  }
}


</script>

<style scoped>

</style>
