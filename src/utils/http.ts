require('es6-promise').polyfill();
import 'url-search-params-polyfill';
import axios from 'axios';

// let count = 1;
//封装好的get和post接口，调用方法情况action文件
const instance = axios.create({
    // baseURL: API_URL, //设置默认api路径
    timeout: 10000, //设置超时时间
    headers: {
        'X-Custom-Header': 'dtuic'
    },
    withCredentials:true
});
// let blobInstance = axios.create({
//     timeout: 10000, //设置超时时间
//     headers: {
//         'X-Custom-Header': 'dtuic'
//     },
//     withCredentials:true,
//     responseType:'blob'
// });
// 拦截器，统一处理请求
instance.interceptors.request.use(
    config => {
        //  console.log('interceptor request:',config);
        return config;
    },
    error => {
        console.log('request error:',error);
        return Promise.reject(error);
    });
// 拦截器，统一处理未登录或者没有权限的情况
instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error.response.data)
        // 返回接口返回的错误信息
    });

export const getData = (url:string, param:any) => {
    return instance.get(`${url}`, {params: param})
}

/**
 * 后端需要莫名其妙的post格式
 * @param {String} url
 * @param {Obj} param
 */
export const postData = (url:string, param:any) => {
    let formParams = new URLSearchParams()
    for(let p in param){
        formParams.append(p,param[p]);
    }
    return instance.post(`${url}`, formParams)
}
/**
 * 传统post方式
 * @param {String} url
 * @param {Obj} param
 */
export const postJsonData = (url:string, param:any) => {
    return instance.post(`${url}`, param)
}

export const getMultiData = (getFuncArr:any) => {
    return axios.all(getFuncArr)
}
