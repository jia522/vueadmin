<template>
  <div class="adminlogin">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" class="loginCon">
      <div class="logo">
        <img :src="login"/><span>管理后台</span>
      </div>

      <el-form-item prop="userName">
        <el-input prefix-icon="icon iconfont icon-denglu" v-model="loginForm.userName" placeholder="用戶名"></el-input>
      </el-form-item>
      <el-form-item prop="passWord">
        <el-input prefix-icon="icon iconfont icon-dengluyemianmima"  v-model="loginForm.passWord"  placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="loginBtn" type="primary" @click="adminClick('loginForm')" :disabled="loginDisabled">登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import axios from 'axios';
  import store from '../store/index'
  import * as types from '../store/types';
  import login from '@/styles/images/touxiang.jpg';
export default {
    name:'Login',
   data () {
    return {
      loginDisabled:false,
      login,
      loginForm:{
        userName:'admin',
        passWord:'123456'
      },
      rules:{
        userName:[
          {required:true,message:'请输入用户名',trigger:'blur'}
        ],
        passWord:[
          {required:true,message:'请输入密码',trigger:'blur'},
          {min:6,message:'密码最小长度为六位数',trigger:'blur'}
        ]
      }
    }
  },
  methods: {
    adminClick (formname) {
      this.loginDisabled = true;
      var _this = this;
        this.$refs[formname].validate((valid) => {
            if(valid){
              axios.get('../../password.json').then(res => {

                  if(this.loginForm.userName == res.data.userName && this.loginForm.passWord == res.data.passWord){
                    store.commit(types.LOGIN,435324324)
                    this.$message({
                      message: '登陆成功',
                      type: 'success',
                      duration:1000,
                      onClose:function(){
                        _this.$router.push('/main');
                      }
                    });
                  }else{
                    this.$message({
                      message: '账户或密码错误',
                      type: 'warning'
                    });
                    _this.loginDisabled = false;
                  }
                    console.log(res.data);
                })
            }else {
              return false;
            }
        });

    }

  },
  mounted(){

  }
}
</script>

<style  rel="stylesheet/less" lang="less" scoped>
.adminlogin{
  overflow: hidden;
  height: 100%;
  position: relative;
/*  background: url("../styles/images/loginBg.jpg");*/
  background: url("../styles/images/loginBg.jpg");
  filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='loginBg.jpg',sizingMethod='scale');
  -moz-background-size:100% 100%;
  background-size:100% 100%;
  background-attachment: fixed;
  .loginCon{
    position: absolute;
    top:50%;
    left: 50%;
    margin: -153px 0 0 -185px;
    background-color:rgba(190,227,254,0.7);
    border-radius: 5px;
    width: 290px;
    padding: 20px 40px;
    box-shadow:0px 0px 40px #0E2D5F;
    .logo{
      margin-bottom: 20px;
      img{
        display: inline-block;
        width: 95px;
        height: auto;
        vertical-align: middle;
      }
      span{
        display: inline-block;
        font-size: 22px;
        font-weight: bold;
        color: #005bab;
        vertical-align: middle;
      }
    }
    .loginBtn{
      display: block;
      width: 100%;
    }
  }
  .el-form-item__label:before{
    display:none;
  }
}

</style>
