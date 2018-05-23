<template>
  <div>
     <h2>父组件</h2>
    <Child-one ref="child"></Child-one>
  </div>
</template>

<script>
  import ChildOne from './children3.vue';
export default {
   data () {
    return {

    }
  },
  components:{
    ChildOne
  },
  methods: {

  },
  mounted(){
   console.log(this.$refs['child'])
    this.$refs['child'].childMethod();
  }
}


</script>

<style scoped>

</style>
