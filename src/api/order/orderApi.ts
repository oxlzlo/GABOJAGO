import client from '../apiConfig';

/**
 * 주문하기
 * @param orderData
 */
export const createOrder = async (orderData: any) => {
  try {
    const response = await client.post('/api/order', orderData);
    return response;
  } catch (error) {
    console.error('오류: 주문 내역 생성 실패. (주문하기)', error);
    throw error;
  }
};

/**
 * 단일 주문 확인
 * @param orderId
 */
export const fetchOrderById = async (orderId: string) => {
  try {
    const response = await client.get(`/api/order/${orderId}`);
    return response.data;
  } catch (error) {
    console.error('오류: 주문 내역 불러오기 실패. (결제 확인)', error);
    throw error;
  }
};

/**
 *  전체 주문내역 확인
 */
export const fetchOrderHistory = async () => {
  try {
    const response = await client.get('/api/order');
    return response.data;
  } catch (error) {
    console.error('오류: 주문 내역 불러오기 실패.', error);
    throw error;
  }
};
