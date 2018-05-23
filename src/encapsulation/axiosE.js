import axios from 'axios';
import {Message} from 'element-ui';

const service = axios.create({
  timeout:1000*50
});

export function fetch_post(url, data) {
  return new Promise((resolve, reject) => {
     service.post(encodeURI(url),data).then(res => {
       if(res.data.code && res.data.code != 10000){
         Message({
           showClose:true,
           message:res.data.message,
           type:'error',
           duration:5 * 1000
         });
       }
       resolve(res.data)
     })
       .catch(e => {
         Message({
           showClose:true,
           message:e.message,
           type:'error',
           duration:5 * 1000
         });
         reject(e)
       });
  });

}

export function fetch_get(url, data) {
  return new Promise((resolve, reject) => {
    service.get(encodeURI(url),data).then(res => {
      if(res.data.code && res.data.code != 10000){
        Message({
          showClose:true,
          message:res.data.message,
          type:'error',
          duration:5 * 1000
        });
      }
      resolve(res.data)
    })
      .catch(e => {
        Message({
          showClose:true,
          message:e.message,
          type:'error',
          duration:5 * 1000
        });
        reject(e)
      });
  });

}
