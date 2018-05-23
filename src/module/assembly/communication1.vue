<template>
  <div>
    <h3>父组件</h3>
    <Child-one :parentMesssge="parentMesssge"></Child-one>
  </div>
</template>

<script>
  import ChildOne from './children1.vue';
export default {
   data () {
    return {
      parentMesssge:'我是来自父组件的消息'
    }
  },
  components:{
    ChildOne
  },
  methods: {

  },
  mounted(){

  }
}


</script>

<style scoped>

</style>
