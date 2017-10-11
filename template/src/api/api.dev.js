 
/**
 * 开发用api, 模拟数据存放在mock文件夹
 */
import axios from 'axios'

import qs from 'qs'
//扩展axios的finally方法
import Finally from 'promise.prototype.finally'
Finally.shim();
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.post['Accept']='application/json';
axios.defaults.baseURL = "";
export const baseurl=axios.defaults.baseURL;

//POST传参序列化
axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, (error) => {
    console.log("错误的传参")
    return Promise.reject(error);
});

//全部请求都使用post
//增加加载提示
export function fetchGet(url, params) {
    return new Promise((resolve, reject) => {
        
        axios.get(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error);

            })
            .finally(() => {
         })
    })
}
export function fetchPost(url, params) {
    return new Promise((resolve, reject) => {

        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error);

            })
            .finally(() => {
             // $loading.hide()
         })
    })
}
export function fetchPostKeepAlive(url, params) {
    return new Promise((resolve, reject) => {

        axios.post(url, params,{timeout:60000})
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error);

            })
            .finally(() => {
             
         })
    })
}



