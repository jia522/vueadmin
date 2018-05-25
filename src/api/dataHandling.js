import {instance} from '../utils/request';
function fetch(type,url,parma){
  return instance({
    method:type,
    url:url,
    data:parma
  })
}   //获取或提交数据

export {fetch};
