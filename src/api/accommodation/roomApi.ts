import client from '@/api/apiConfig';

/**
 * 객실 목록 조회
 * @param accommodationId
 */
export const fetchRoomList = (accommodationId: number) => {
  return client.get(`/open-api/accommodation/${accommodationId}/room`);
};
