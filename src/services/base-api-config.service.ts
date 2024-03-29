/*
 * @Author: Delta_Zheng Delta_Zheng@wistronits.com
 * @Date: 2022-12-23 13:12:41
 * @LastEditors: Delta_Zheng Delta_Zheng@wistronits.com
 * @LastEditTime: 2023-02-02 13:37:30
 * @FilePath: \react-blog\src\services\base-api-config.service.ts
 * @Description: 
 * 
 */
import { notification } from "antd";
import axios from "axios";
import { ApiResponse } from "./types/response";

export const httpClient = axios.create({
  // baseURL: "http://127.0.0.1:8087",
  baseURL: "http://124.221.95.189:8087",
  timeout: 5000,
  headers: {},
});

httpClient.interceptors.request.use(
  function (config) {
    console.log("请求发出之前");
    return config;
  },
  function (error) {
    notification.error({
      message: JSON.stringify('请求失败'),
    });
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  function (response) {
    // 处理https信任过期的问题
    const data:ApiResponse<any> = response.data;
    // TODO 根据不同的相应code提示不同的错误
    // console.log("对响应结果处理",response.data);
    if(data.status === 'fail'){
      notification.error({
        message: JSON.stringify(data.code),
      });
      return data.msg;
    }else if(data.status === 'success'){
      console.log('success',data);
      return data.data
    }
  },
  function (error) {
    notification.error({
      message: JSON.stringify(error),
    });
    return Promise.reject(error);
  }
);
