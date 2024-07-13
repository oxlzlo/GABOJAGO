import client from '@/api/apiConfig';

/**
 * 장바구니 삭제
 * @param cartItemId
 */
export const fetchDeleteCartItems = (cartItemId: number) => {
  return client.delete('/api/user/cartItems', {
    data: { cartItemIdList: [cartItemId] },
  });
};

/**
 *  장바구니 조회
 */
export const fetchCartItems = () => {
  return client.get('/api/user/cartItems');
};

/**
 * 장바구니 생성
 * @param payload {roomId}
 */
export const fetchCreateCartItems = (payload: { roomId: number }) => {
  return client.post('/api/user/cartItems', payload);
};
