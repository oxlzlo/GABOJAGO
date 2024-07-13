import axios from 'axios';

/**
 * axios 인스턴스 생성
 */
const client = axios.create({
  baseURL: 'http://ec2-43-203-40-90.ap-northeast-2.compute.amazonaws.com/',
});

client.interceptors.request.use(
  (config) => {
    // 로컬 스토리지에서 토큰을 반환
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      // 토큰이 있으면 Authorization 헤더에 추가
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default client;
