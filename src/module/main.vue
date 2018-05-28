<template>
  <div>
    <HEADbb></HEADbb>
    <div class="divSlider" :style="setTop">
      <el-menu ref="bn"
        :default-active="$route.path"
        class="el-menu-vertical-demo slideMenu"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect"
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
    <div class="divFoot">
      脚部
    </div>
  </div>
</template>

<script>
  import HEADbb from '../components/header.vue';
  import icon from '../layout/svgicon.vue';
export default {

   data () {
    return {
      setTop: {
        top: 90 + "px"
      },
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
      var headHeight = $('.divHead').height();
      var footerHeight = $('.divFoot').height();
      var mainHeight =  window.innerHeight - headHeight - footerHeight;
      $('.main-container').height(mainHeight + 'px');
    },

  },
  components:{
    HEADbb,
    'iconSvg':icon
},
mounted(){

    this.mainTabsList.push({name:this.$route.name,url:this.$route.path})
    this.mainTabs = this.$route.name
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

    this.divHeight();
    var _this = this;
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
    .el-tabs--card>.el-tabs__header .el-tabs__nav{
      border-radius: 0px;
    }
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
