<template>

    <div class="main-container">
      <transition name="slide-fade">
         <router-view class="main-content"></router-view>
      </transition>
    </div>

</template>
<script>
  export default {
    methods:{
          divHeight(){
            var headHeight = $('.divHead').height();
            var footerHeight = $('.divFoot').height();
            var mainHeight =  window.innerHeight - headHeight - footerHeight;
            $('.main-container').height(mainHeight + 'px');
        }
      },
    mounted(){
      this.divHeight();
      var _this = this;
      window.onresize =function () {
        _this.divHeight();
      }


    }
  }
</script>
<style rel="stylesheet/less" lang="less">
  .main-container {
    min-height: 160px;
    overflow-y: auto;
    overflow-x:hidden;
    margin-left: 36px;
    background: #fffeff;
    transition: margin-left 0.28s ease-out;
    margin-left: 200px;
    position: relative;
    margin-bottom: 40px;

  }
  .main-content{
  }
  .slide-fade-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-leave-active {
    transition: all 0s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
