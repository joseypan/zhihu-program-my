import axios, { Method } from "axios";
import createMessage from "../components/createMessage";
axios.defaults.baseURL = "";
axios.defaults.timeout = 10000;
// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = sessionStorage.getItem("authorization");
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
// 响应拦截器
axios.interceptors.response.use(
  (res) => {
    if (res.statusText === "OK") {
      // 响应成功
      return res.data.data;
    }
  },
  (err) => {
    let message: string;
    if (err.response.data.error) {
      message = err.response.data.error;
    } else {
      message = err.response.data.detail[0].message;
    }
    createMessage(message, "danger");
    return Promise.reject(err.response.data);
  }
);
interface RequestParams {
  url: string;
  method?: Method;
  data?: any;
  options?: any;
}
export default function request({
  url,
  method = "get",
  data,
  options,
}: RequestParams): any {
  return new Promise((resolve, reject) => {
    axios({
      method,
      url,
      data,
      ...options,
    })
      .then(resolve)
      .catch(reject);
  });
}
