import axios from 'axios';

const client = axios.create({
  baseURL: 'http://ec2-52-79-40-57.ap-northeast-2.compute.amazonaws.com:3001',
});

// const client = axios.create({
//   baseURL: 'http://127.0.0.1:8090/api',
// });

export default client;
