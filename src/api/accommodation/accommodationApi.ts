import client from '@/api/apiConfig';

/**
 * 전체 상품 조회 (숙박)
 * @param cursor
 * @param keyword
 * @param start
 * @param end
 * @param count
 * @returns
 */
export const fetchAccommodation = async (
  cursor: number,
  keyword: string,
  start: string,
  end: string,
  count: number,
) => {
  return client.get('/open-api/accommodation', {
    params: {
      cursor,
      keyword,
      start,
      end,
      count,
    },
  });
};

/**
 * 개별 상품 조회 (숙박, 객실)
 * @param accommodationId
 */
export const fetchAccommodationById = (accommodationId: number) => {
  return client.get(`/open-api/accommodation/${accommodationId}`);
};
