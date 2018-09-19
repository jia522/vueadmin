import axios from 'axios';
import {Message} from 'element-ui';
import store from '../store/'
import * as types from '../store/types'
const baseUrl = '';
var instance = axios.create({
  baseURL: baseUrl,
  timeout: 9000,
  headers: {'X-Requested-With': 'XMLHttpRequest'},
});
axios.interceptors.request.use((config) => {
   if(store.state.mutations.token){
     config.headers.Authorization = `token${store.state.mutations.token}`;
   } else {
     console.log('无token');
   }
   return config;
}, (error) => {
  console.log('error: ', error);
  Promise.reject(error);
});
//添加响应拦截器
instance.interceptors.response.use(function(response){
/*  const  Qloading = Loading.service({
   text:'拼命加载中...',
   spinner:'el-icon-loading',
   background:'rgba(0, 0, 0, 0.8)',
   target:'.main-content'
   });*/
  //处理响应数据
  /*  console.log(response)*/
  if(response.status === 200){
    if(response.data.resultCode == 'success'){
      return response.data;
    }else{
      Message({
        message:response.data.resultMsg,
        type:'warning',
        showClose:true,
        center:true
      });
      return Promise.reject('error');
    }/* else if (response.data.type === 'image/jpeg') {
     // 不拦截图片资源

     return response.data;
     }*/
  }else {
    return Promise.reject('error');
  }
},function(error){
  //响应数据错误时
  if(error.response){
    switch (error.response.status){
      case 401:
        store.commit(types.LOGIN);
        router.replace({
          path:'/',
          query: {redirect: router.currentRoute.fullPath}
        })
    }
  }
  return Promise.reject('error');
})
export {instance,baseUrl};
