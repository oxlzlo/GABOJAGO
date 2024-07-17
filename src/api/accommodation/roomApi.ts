import { client } from '@/api/apiConfig';
import { RoomListResponse } from '@/lib/types/accommodation';
import { AxiosResponse } from 'axios';

/**
 * 객실 목록 조회
 * @param accommodationId
 */
export const fetchRoomList = async (accommodationId: number): Promise<AxiosResponse<RoomListResponse>> => {
  try {
    return await client.get(`/open-api/accommodation/${accommodationId}/room`);
  } catch (error) {
    console.error('객실 목록 조회 오류: ', error);
    throw error;
  }
};
