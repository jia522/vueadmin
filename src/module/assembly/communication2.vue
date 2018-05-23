<template>
  <div>
     <h2>父组件</h2>
    <Child-one @childEvent="parentMethod"></Child-one>
  </div>
</template>

<script>
  import ChildOne from './children2.vue';
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
    parentMethod({name,age}){
        console.log(this.parentMesssge,name,age)
    }

  },
  mounted(){

  }
}


</script>

<style scoped>

</style>
