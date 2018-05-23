<template>
  <div class="divSlider">
    <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-submenu index="1">
      <template slot="title">
        <iconSvg svgicon-style="svgiconstyle" icon-class="homepage_fill"></iconSvg>
        <span>导航一</span>
      </template>
      <el-menu-item-group>
        <router-link to="/bb">
           <el-menu-item index="1-1">选项1</el-menu-item>
        </router-link>
      </el-menu-item-group>
    </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <iconSvg svgicon-style="svgiconstyle" icon-class="homepage_fill"></iconSvg>
          <span>父子通信</span>
        </template>
        <el-menu-item-group>
          <router-link to="/communication1">
            <el-menu-item index="3-1">通过props传递数据</el-menu-item>
          </router-link>
          <router-link to="/communication2">
            <el-menu-item index="3-2">通过$on传递父组件方法</el-menu-item>
          </router-link>
          <router-link to="/communication3">
            <el-menu-item index="3-3">通过refs获取</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
    <el-menu-item index="2">
      <iconSvg svgicon-style="svgiconstyle" icon-class="flag_fill"></iconSvg>
      <span slot="title">导航二</span>
    </el-menu-item>
  </el-menu>
  </div>
</template>
<script>
  import icon from '../layout/svgicon.vue';
  export default{
     data(){
        return{

        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    components:{
         'iconSvg':icon
    }
  }
</script>
<style scoped>
  .divSlider{
    background: rgb(84, 92, 100);
    color: #fff;
    transition: width 0.28s ease-out;
    width: 200px;
    height: 100%;
    position: fixed;
    top: 87px;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow-y: auto;
  &::-webkit-scrollbar {
     display: none
   }
   .el-submenu__title{
     text-align: left;
   }
  }
</style>
