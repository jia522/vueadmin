<template>
  <el-form :model="loginForm" :rules="rules" ref="loginForm" class="loginCon">
    <el-form-item label="用戶名" prop="userName">
      <el-input v-model="loginForm.userName"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="passWord">
      <el-input v-model="loginForm.passWord"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="adminClick('loginForm')" :disabled="loginDisabled">登 录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import axios from 'axios';
  import store from '../store/index'
  import * as types from '../store/types'
export default {
    name:'Login',
   data () {
    return {
      loginDisabled:false,
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

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .loginCon{
    width: 800px;
    margin: 40px auto 0;
    padding: 20px;
    border: 1px solid #333;
  }
.el-form-item__label:before{
  display:none;
}
</style>
