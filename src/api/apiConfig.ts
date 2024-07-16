import axios from 'axios';

/**
 * axios 인스턴스 생성
 */
const client = axios.create({
  baseURL: 'http://ec2-43-203-40-90.ap-northeast-2.compute.amazonaws.com/',
});

export default client;

/**
 * 요청 인터셉터 설정
 */
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

/**
 * 응답 인터셉터 설정
 * 로그인 토큰이 만료되었을 때, 로그인 페이지로 이동
 */
// client.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       // 토큰 만료 시 로그인 페이지로 이동
//       window.location.href = '/signin';
//     }
//     return Promise.reject(error);
//   },
// );
