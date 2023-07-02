import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.dayone.kr',
  // baseURL: 'http://localhost:3000',
  headers: { withCredentials: true },
});

// 요청 인터셉터
client.interceptors.request.use(
  (config) => {
    // request logic
    console.log('request config interceptor:', config);

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터
client.interceptors.response.use(
  (response) => {
    // response logic
    console.log('response interceptor:', response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// const client = axios.create({
//   baseURL: 'http://127.0.0.1:8090/api',
// });

export default client;
