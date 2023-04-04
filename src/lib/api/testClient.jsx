import axios from 'axios';

const testClient = axios.create({
  baseURL: 'http://127.0.0.1:8090',
});

// 요청 타임아웃
// testClient.defaults.timeout = 3000

// 요청 인터셉터
testClient.interceptors.request.use(
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
testClient.interceptors.response.use(
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

export default testClient;
