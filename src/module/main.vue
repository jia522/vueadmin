<template>
  <div>
    <HEADbb></HEADbb>
    <div class="divSlider">
      <el-switch
        @change="slideswitch"
        v-model="isCollapse"
        active-color="#848f99"
        inactive-color="#339ad9">
      </el-switch>
      <el-menu ref="bn"
        :default-active="$route.path"
        class="el-menu-vertical-demo slideMenu"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect"
               :collapse="isCollapse"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu :index="index.toString()" v-for="(item,index) in menuList" :key="index" v-if="item.firstTitle">
          <template slot="title">
            <iconSvg svgicon-style="svgiconstyle" :icon-class="item.iconClass"></iconSvg>
            <span>{{item.firstTitle}}</span>
          </template>
          <el-menu-item-group v-for="(subitem,subindex) in item.childreMenu" :key="subindex">
              <el-menu-item :index="subitem.routerName">{{subitem.ChidrenTitle}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item :index="menuitem.routerName" v-for="(menuitem,menuindex) in menuList" :key="menuindex+1"  v-if="!menuitem.firstTitle">
          <iconSvg svgicon-style="svgiconstyle" :icon-class="menuitem.iconClass"></iconSvg>
          <span slot="title">{{menuitem.ChidrenTitle}}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main-container">
      <el-tabs v-model="mainTabs" type="card" closable  @tab-remove="removemainTab" @tab-click="maintabClick">
        <el-tab-pane :key="index" v-for="(item, index) in mainTabsList" :label="item.name" :name="item.name">
          <transition name="slide-fade">
            <router-view class="main-content"></router-view>
          </transition>
        </el-tab-pane>
      </el-tabs>

    </div>
<!--    <div class="divFoot">
      脚部
    </div>-->
  </div>
</template>

<script>
  import HEADbb from '../components/header.vue';
  import icon from '../layout/svgicon.vue';
  import $ from 'jquery';
export default {

   data () {
    return {
      isCollapse:false,
      menuList:[
        {
          firstTitle:'导航一',
          iconClass:'homepage_fill',
          childreMenu:[
            {routerName:'/bb',ChidrenTitle:'选项1'}
          ]
        },
        {
            routerName:'/communication4',ChidrenTitle:'导航二',iconClass:'homepage_fill'
        },
        {
          firstTitle:'父子通信',
          iconClass:'homepage_fill',
          childreMenu:[
            {routerName:'/communication1',ChidrenTitle:'通过props传递数据'},
            {routerName:'/communication2',ChidrenTitle:'通过$on传递父组件方法'},
            {routerName:'/communication3',ChidrenTitle:'通过refs获取'},
          ]
        },
      ],
      mainTabs:'',
      mainTabsList: [],

    }
  },
  methods: {
    slideswitch(){

      if(this.isCollapse){
        $('.divSlider').animate({'width':'64'});
        $('.main-container').animate({'margin-left':'64'});
        console.log(this.$refs.bn)
      }else {
        $('.divSlider').animate({'width':'200px'});
        $('.main-container').animate({'margin-left':'200'});
      }
  },
    removemainTab(targetName){
      let tabs = this.mainTabsList;
      let activeName = this.mainTabs;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.mainTabs = activeName;
      this.mainTabsList = tabs.filter(tab => tab.name !== targetName);
      this.$router.push({name:this.mainTabs});
    },
    maintabClick(obj){
      this.$router.push({name:obj.name})
    },
    handleSelect(index,indexPath){
      for(let w of this.mainTabsList) {
        if (w.url == index) {  //如果已存在路由
           for (let i = 0; i<this.mainTabsList.length;i++){
               if(index == this.mainTabsList[i].url){
                 this.mainTabs = this.mainTabsList[i].name;
                 this.$router.push(index)
               }
           }
          return true;
        }
      }
      for(let j =0;j<this.menuList.length;j++){   //如果不存在路由
          if(this.menuList[j].firstTitle){
              for(let z = 0; z<this.menuList[j].childreMenu.length;z++){
                  if( index == this.menuList[j].childreMenu[z].routerName){
                    this.mainTabsList.push({name:this.menuList[j].childreMenu[z].ChidrenTitle,url:this.menuList[j].childreMenu[z].routerName});
                    this.mainTabs = this.menuList[j].childreMenu[z].ChidrenTitle;
                    this.$router.push(index)
                  }

              }
          }else{
              if(index == this.menuList[j].routerName){
                this.mainTabsList.push({name:this.menuList[j].ChidrenTitle,url:this.menuList[j].routerName});
                this.mainTabs = this.menuList[j].ChidrenTitle;
                this.$router.push(index)
              }
          }
      }

    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    divHeight(){
      this.$nextTick(function () {
        var windowH = document.documentElement.clientHeight || document.body.clientHeight;
        var headHeight = $('.divHead').height();
        var mainHeight =  windowH - parseInt(headHeight) - parseInt($('.divHead').css('padding-top'))-41-20;
        $('.main-content').css({'height': mainHeight + 'px'});
      })

    },

  },
  components:{
    HEADbb,
    'iconSvg':icon
},
mounted(){
    this.mainTabsList.push({name:this.$route.name,url:this.$route.path})
    this.mainTabs = this.$route.name;
    var _this = this;
    this.divHeight();
    window.onresize =function () {
      _this.divHeight();
    }

}
}
</script>

<style rel="stylesheet/less" lang="less">
  .divFoot{
    width: 100%;
    background: #fffeff;
    color: #fff;
    position: fixed;
    bottom: 0px;
    height: 40px;
  }
  .divSlider{
    background: rgb(84, 92, 100);
    color: #fff;
    transition: width 0.28s ease-out;
    width: 200px;
    height: 100%;
    position: fixed;
    top: 65px;
    bottom: 0;
    left: 0;
    z-index: 1001;
    .el-switch{
      margin: 10px 0;
    }

    .el-menu{
      .el-menu-item:hover{
        background-color: #68727c !important;
      }
      .el-submenu{
        .el-submenu__title:hover, .el-menu-item:hover{
          background-color: #68727c !important;
        }
        .el-menu-item{
          background-color: #434a50 !important;
        }
      }

      .el-menu-item-group__title{
        padding:0;
      }
    }
    &::-webkit-scrollbar {
      display: none
    }
    .el-submenu__title{
      text-align: left;
    }
  }
  .main-container {
    background:#f0f0f0;
    min-height: 160px;
    overflow-x:hidden;
    margin-left: 36px;
    transition: margin-left 0.28s ease-out;
    margin-left: 200px;
    position: relative;
  /*  margin-bottom: 40px;*/
    .el-tabs__header{
      background: #fff;
      margin-bottom: 0px;
    }
    .el-tabs__item.is-active{
      background:#f0f0f0 ;
      font-weight: bold;
      .el-icon-close{
        background: #fff;
        border: 1px solid #d9d9d9;
      }
      .el-icon-close:hover{
        background: #409EFF;
      }
    }
    .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
      border-bottom: #f0f0f0;
    }
    .el-tabs--card>.el-tabs__header .el-tabs__nav{
      border-radius: 0px;
    }
  }
  .main-content{
    padding: 10px;
    overflow-y: scroll;
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
