import axios from 'axios';
import { error } from 'console';

const instance = axios.create({
  baseURL: 'http://ec2-43-203-40-90.ap-northeast-2.compute.amazonaws.com',
});

instance.interceptors.request.use(
  (config) => {
    // 로컬 스토리지에서 토큰을 가져옵니다.
    const accessToken = localStorage.getItem('accessToken');
    console.log('accessToken:', accessToken);
    if (accessToken) {
      // 토큰이 있으면 Authorization 헤더에 추가합니다.
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 전체 상품 조회 (숙박)
export const fetchAccommodation = () => {
  return instance.get('/open-api/accommodation');
};

// 개별 상품 조회 (숙박, 객실)
export const fetchAccommodationById = (accommodationId: string) => {
  return instance.get(`/open-api/accommodation/${accommodationId}`);
};

// 전체 객실 조회
export const fetchRoom = (accommodationId: string) => {
  return instance.get(`/open-api/accommodation/${accommodationId}/room`);
};

// 개별 객실 조회
export const fetchRoomById = (accommodationId: string, roomId: string) => {
  return instance.get(`/open-/accommodation/${accommodationId}/room/${roomId}`);
};

// 장바구니 생성
export const fetchCreatCartItems = () => {
  return instance.post('/api/user/cartItems');
};

// MSW에서 사용할 API
export const fetchLodgment = async () => {
  try {
    const response = await axios.get('/api/lodgment');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchLodgmentById = async (lodgmentId: string) => {
  try {
    const response = await axios.get(`/api/lodgment/${lodgmentId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// 전체 객실 조회
export const fetchRoomList = async (lodgmentId: string) => {
  try {
    const response = await axios.get(`/api/lodgment/${lodgmentId}/room`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
// 특정 객실 조회
export const fetchRoomDetail = async (lodgmentId: string, roomId: string) => {
  try {
    const response = await axios.get(`/api/lodgment/${lodgmentId}/room/${roomId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
