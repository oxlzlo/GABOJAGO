import { fetchCartItems, fetchDeleteAllCartItems, fetchDeleteCartItems } from '@/api';
import { useEffect, useState } from 'react';
import { Box, Flex, Image, Text, Divider, Button } from '@chakra-ui/react';
import { Rooms } from '@/lib/types/accommodation';
import { CartCheckbox } from '@/lib/common/CartCheckbox';
import { CloseIcon } from '@chakra-ui/icons';

type CartItems = {
  cart_item_id: number;
  start_date: string;
  end_date: string;
  room: Rooms;
};

const CartItem = ({ onSelecRooms }) => {
  const [cartRooms, setCartRooms] = useState<CartItems[]>([]); // 장바구니 추가한 객실은 해당 state에 담김

  /**
   * 장바구니에 담긴 상품 조회
   */
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetchCartItems();
        setCartRooms(response.data.data.item_dto_list);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchCart();
  }, []);

  const handleDeleteCartRoom = async (cartItemId: number) => {
    try {
      await fetchDeleteCartItems(cartItemId);
      const response = await fetchCartItems();
      setCartRooms(response.data.data.item_dto_list);
    } catch (error) {
      console.error('delete error:', error);
    }
  };

  return (
    <>
      {cartRooms.map((cartRoom, _) => (
        <Box
          key={cartRoom.cart_item_id}
          padding="1.5rem"
          marginBottom="1rem"
          border="1px solid"
          borderColor="grayLight"
          borderRadius=".5rem">
          <Flex justifyContent="end">
            <Button onClick={() => handleDeleteCartRoom(cartRoom.cart_item_id)}>
              <CloseIcon />
            </Button>
          </Flex>
          <Flex marginBottom="2rem" alignItems="center" gap="1rem">
            <Box marginBottom="8rem">
              <CartCheckbox cartRoom={cartRoom} onSelecRooms={onSelecRooms} colorScheme="" borderColor="main" />
            </Box>
            <Image
              src={cartRoom.room.imageList}
              alt={cartRoom.room.roomTypeName}
              width="10rem"
              height="10rem"
              marginRight="2rem"
              border="1px solid"
              borderColor="grayLight"
              borderRadius=".5rem"
            />
            <Box>
              <Text fontSize="2rem" fontWeight="900">
                {cartRoom.room.roomTypeName}
              </Text>
              <Text fontSize="1.5rem">{cartRoom.room.roomType}</Text>
              {/* <Text fontSize="1.2rem">
                평점: {cartItem.rating} / 리뷰 수: {cartItem.reviewCount}
              </Text> */}
            </Box>
          </Flex>
          <Divider borderColor="main" />
          <Box marginTop="2rem" fontSize="1.2rem">
            <Text fontSize="1.3rem">
              이용기간: {cartRoom.start_date} - {cartRoom.end_date}
            </Text>
            <Text fontSize="1.3rem">이용자 수: {cartRoom.room.roomDefaultGuest}인</Text>
            <Flex justifyContent="flex-end" fontSize="2rem" fontWeight="700">
              <Text>
                <span style={{ color: 'red' }}>
                  {`${cartRoom.room.roomPrice.toLocaleString('ko-KR', {
                    style: 'decimal',
                    currency: 'KRW',
                  })}원`}
                </span>
              </Text>
            </Flex>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default CartItem;
