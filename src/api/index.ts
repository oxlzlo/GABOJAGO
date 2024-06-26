import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://ec2-43-203-40-90.ap-northeast-2.compute.amazonaws.com',
});

// 전체 상품 조회 (숙박)
export const fetchAccommodation = async () => {
  return instance.get('/open-api/accommodation');
};

// 개별 상품 조회 (숙박, 객실)
export const fetchAccommodationById = async (accommodationId: string) => {
  return instance.get(`/open-api/accommodation/${accommodationId}`);
};

// 전체 객실 조회
export const fetchRoom = async (accommodationId: string) => {
  return instance.get(`/open-api/accommodation/${accommodationId}/room`);
};

// 개별 객실 조회
export const fetchRoomById = async (accommodationId: string, roomId: string) => {
  return instance.get(`/open-api/accommodation/${accommodationId}/room/${roomId}`);
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
