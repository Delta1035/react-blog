import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://127.0.0.1",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    'X-Custom-Header': '自定义请求头'
  },
});

httpClient.interceptors.request.use(function(config){
    console.log('请求发出之前')
    return config
},function(error){
    return Promise.reject(error)
})

httpClient.interceptors.response.use(function(response){
    console.log('对响应结果处理')
    return response;
},function(error){
    return Promise.reject(error)
})
