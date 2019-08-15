import axios from 'axios'
import {env} from '../env'
import {Message} from 'element-ui';

/**
 * 封装axios请求
 * @param url 请求地址
 * @param data 请求参数
 * @param errorMsg 错误提示
 * @param callback 成功调用回调处理
 */
export const post = (url, data, errorMsg, callback) => {
  let m = Message;
  axios({
    url: url,
    headers: {'Content-Type': 'application/json;charset=UTF-8'},
    data: data,
    method: 'post'
  }).then(res => {
    console.log(res);
    
    if(res.data.status !=undefined && (res.data.status == -40300 || res.data.status == -40100) ){
      m.error(res.data.message)
    }else {
      callback(res.data);
    }
  }).catch(err => {
    console.log(err);
      m.error(errorMsg + "异常: " + err.toString());
    }
  )
}

/**
 * 封装axios请求
 * @param url 请求地址
 * @param data 请求参数
 * @param errorMsg 错误提示
 * @param callback 成功调用回调处理
 */
export const postMock = (url, data, errorMsg, callback) => {
  let m = Message;
  axios({
    url: url,
    headers: {'Content-Type': 'application/json;charset=UTF-8', 'token': '123456789'},
    data: data,
    method: 'post'
  }).then(res => {
    if (env == "development") {
      //res = JSON.parse(res.data);
      //console.log(res.data);
      res = res.data;//这里是easymock接口传回的内容，不需要从字符串解析成json。换成swagger接口时用上一行的方法
      callback(res);
    } else {
      callback(res.data);
    }
  }).catch(err => {
      m.error(errorMsg + "异常: " + err.toString());
    }
  )
}
