<template>
  <div>
    <HEADbb></HEADbb>
    <slidebar :style="setTop"></slidebar>
    <contain></contain>
    <foot></foot>
  </div>
</template>

<script>
  import HEADbb from '../components/header.vue';
  import slidebar from '../components/slide.vue';
  import contain from '../components/contain.vue';
  import foot from '../components/footer.vue';
export default {

   data () {
    return {
      setTop: {
        top: 90 + "px"
      },
    }
  },
  components:{
    HEADbb,
    slidebar,
    contain,
    foot
},
mounted(){
    var $this = this;

    function setTop() {
      var a = document.documentElement.scrollTop || document.body.scrollTop;//滚动条y轴上的距离
      if (a < 87) {
        $this.setTop.top = 87 - a + "px";
      } else {
        $this.setTop.top = 0
      }
    }

    setTop()
    window.onscroll = function () {
      setTop()
    }
  }
}
</script>

<style scoped>

</style>
