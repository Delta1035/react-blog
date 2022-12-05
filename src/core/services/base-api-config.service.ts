import { notification } from "antd";
import axios from "axios";
import { ApiResponse } from "./types/response";

export const httpClient = axios.create({
  baseURL: "https://127.0.0.1:3000",
  timeout: 5000,
  headers: {
  },
});

httpClient.interceptors.request.use(
  function (config) {
    console.log("请求发出之前");
    return config;
  },
  function (error) {
    notification.error({
      message: JSON.stringify(error),
    });
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  function (response) {
    console.log("对响应结果处理",response.data);
    const data:ApiResponse<any> = response.data.data;
    // TODO 根据不同的相应code提示不同的错误
    if(data.status === 'fail'){
      notification.error({
        message: JSON.stringify(data.msg),
      });
      return data.msg;
    }else if(data.status === 'success'){
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
