<template>
    <div class="divHead">
      <div class="logo">
        <img :src="login"/>数据平台中心
      </div>
      <span class="getout" @click="logout"><i class="icon iconfont icon-tuichudenglu"></i> 退出</span>
      <div class="portrait">
        <img :src="touxiang"/>
        <span>admin</span>
      </div>
    </div>
</template>
<script>
  import * as types from '../store/types'
  import store from '../store/index'
  import touxiang from '@/styles/images/touxiang.jpg'
  import login from '@/styles/images/loginLogo.png';
  export default {
    name: 'app',
    data () {
      return {
        touxiang,
        login
      }
    },
    methods: {
      logout(){
        store.commit(types.LOGOUT)
        this.$router.push({
          path: '/'
        })
      }
    }
  }
</script>
<style rel="stylesheet/less" lang="less"  scoped>
  .divHead{
/*    background: url("../styles/images/headBg.png") no-repeat;*/
    padding:17px 20px 0;
    height: 48px;
    background-color:#339ad9;
    color: #fff;
    .logo{
      display:inline-block;
      float: left;
      vertical-align: middle;
      font-size: 24px;
      img{
        height: 40px;
        width: auto;
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
      }
    }
    .portrait{
      float: right;
      margin-right: 15px;
      img{
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 45px;
        vertical-align: middle;
      }
      span{
        display: inline-block;
        vertical-align: middle;
      }
    }
    .getout{
      float: right;
      margin-top: 9px;
      display:inline-block;
      font-size: 14px;
      vertical-align: middle;
      .iconfont{
        font-size: 18px;
      }
    }
  }

</style>
