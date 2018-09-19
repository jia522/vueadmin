import {instance} from '../api/request';
import { MessageBox } from 'element-ui';
function fetch(type,url,parma){
  return instance({
    method:type,
    url:url,
    data:parma
  })
}   //获取或提交数据

function promptMessage(title,message,method){
   return MessageBox({
     title:title,
     message:message,
     callback:method
   })
} //提示框



export {fetch,promptMessage};
