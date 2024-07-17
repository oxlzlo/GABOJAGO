import { client } from '@/api/apiConfig';
import { CartItemDataResponse, CartItemsResponse } from '@/lib/types/cart';
import { AxiosResponse } from 'axios';

/**
 *  장바구니 조회
 */
export const getCartItems = async (): Promise<AxiosResponse<CartItemsResponse>> => {
  try {
    return await client.get('/api/user/cartItems');
  } catch (error) {
    console.error('장바구니 조회 오류: ', error);
    throw error;
  }
};

/**
 * 장바구니 삭제
 * @param cartItemId
 */
export const deleteCartItems = async (cartItemId: number): Promise<AxiosResponse<CartItemsResponse>> => {
  try {
    return await client.delete('/api/user/cartItems', {
      data: { cartItemIdList: [cartItemId] },
    });
  } catch (error) {
    console.error('장바구니 삭제 오류: ', error);
    throw error;
  }
};

/**
 * 장바구니 생성
 * @param payload {roomId}
 */
export const createCartItems = async (payload: { roomId: number }): Promise<AxiosResponse<CartItemDataResponse>> => {
  try {
    return await client.post('/api/user/cartItems', payload);
  } catch (error) {
    console.error('장바구니 생성 오류: ', error);
    throw error;
  }
};
